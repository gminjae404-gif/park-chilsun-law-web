// 실제 route를 읽되 이메일 경계만 대체합니다. 네트워크·메일 전송은 없습니다.
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import ts from "typescript";
const requireNode = createRequire(import.meta.url);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function fixture({ configured = true, mailResult = { ok: true } } = {}) {
  const sent = [];
  const cache = new Map();
  function load(file) {
    if (cache.has(file)) return cache.get(file).exports;
    const record = { exports: {} };
    cache.set(file, record);
    const source = ts.transpileModule(fs.readFileSync(file, "utf8"), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    }).outputText;
    const localRequire = (id) => {
      if (id === "next/server") return {
        NextResponse: { json: (body, init) => Response.json(body, init) },
      };
      if (id === "@/lib/consultation-email") return {
        isConsultationEmailConfigured: () => configured,
        sendConsultationEmail: async (payload) => { sent.push(payload); return mailResult; },
      };
      if (id.startsWith("@/")) return load(path.join(root, "src", id.slice(2)) + ".ts");
      return requireNode(id);
    };
    vm.runInNewContext(source, { module: record, exports: record.exports, require: localRequire, Date, URL, Response }, { filename: file });
    return record.exports;
  }
  const { POST } = load(path.join(root, "src/app/api/consultation/route.ts"));
  const submit = (overrides = {}, origin = "https://example.test") => POST(new Request("https://example.test/api/consultation", {
    method: "POST",
    headers: { host: "example.test", origin, "content-type": "application/json" },
    body: JSON.stringify({ name: "검증용 입력", phone: "01000000000", inquiryType: "civil", message: "모의 검증", honeypot: "", renderedAt: Date.now() - 5000, agreedToPrivacyPolicy: true, ...overrides }),
  }));
  return { POST, submit, sent };
}

for (const [label, value] of [["누락", undefined], ["거부", false], ["문자열", "true"], ["숫자", 1], ["null", null], ["객체", {}]]) {
  test(`명시적 true 이외의 동의(${label})는 이메일에 도달하지 않음`, async () => {
    const { submit, sent } = fixture();
    const response = await submit({ agreedToPrivacyPolicy: value });
    assert.equal(response.status, 400);
    assert.equal((await response.json()).reason, "privacy_consent_required");
    assert.equal(sent.length, 0);
  });
}

test("동의 true·유효한 입력만 정규화하여 한 번 전달", async () => {
  const { submit, sent } = fixture();
  const response = await submit({ name: " 검증용 입력 ", phone: " 01000000000 ", message: " 모의 검증 " });
  assert.equal(response.status, 200);
  assert.equal(sent.length, 1);
  assert.equal(sent[0].name, "검증용 입력");
  assert.equal(sent[0].message, "모의 검증");
});

for (const [label, overrides, status] of [
  ["전화 형식", { phone: "잘못된 번호" }, 400],
  ["이름 길이", { name: "가".repeat(51) }, 400],
  ["문의 유형", { inquiryType: "recovery" }, 400],
  ["내용 길이", { message: "가".repeat(2001) }, 400],
  ["honeypot", { honeypot: "bot" }, 400],
  ["즉시 제출", { renderedAt: Date.now() + 10000 }, 400],
]) test(`기존 방어 유지: ${label}`, async () => {
  const { submit, sent } = fixture();
  assert.equal((await submit(overrides)).status, status);
  assert.equal(sent.length, 0);
});

test("다른 Origin은 거부", async () => {
  const { submit, sent } = fixture();
  assert.equal((await submit({}, "https://other.test")).status, 403);
  assert.equal(sent.length, 0);
});

test("미설정 환경은 전송 없이 503", async () => {
  const { submit, sent } = fixture({ configured: false });
  assert.equal((await submit()).status, 503);
  assert.equal(sent.length, 0);
});

test("잘못된 JSON은 전송 없이 400", async () => {
  const { POST, sent } = fixture();
  assert.equal((await POST(new Request("https://example.test/api/consultation", { method: "POST", body: "{" }))).status, 400);
  assert.equal(sent.length, 0);
});

test("메일 실패는 접수 성공으로 응답하지 않음", async () => {
  const { submit } = fixture({ mailResult: { ok: false, error: "send_failed" } });
  const response = await submit();
  assert.equal(response.status, 502);
  assert.equal((await response.json()).ok, false);
});
