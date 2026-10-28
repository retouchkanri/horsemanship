/** フォームごとの設定（サーバー・クライアント共通） */
export const forms = {
  contact: { subject: "【全国中高生馬術選手権大会】お問い合わせ", thanksPath: "/contact_thanks/" },
  boshu: { subject: "【全国中高生馬術選手権大会】参加エントリー（仮お申し込み）", thanksPath: "/boshu_thanks/" },
  support: { subject: "【全国中高生馬術選手権大会】協賛スポンサーお申込み", thanksPath: "/support_thanks/" },
} as const;

export type FormId = keyof typeof forms;

export function isFormId(value: unknown): value is FormId {
  return typeof value === "string" && Object.hasOwn(forms, value);
}
