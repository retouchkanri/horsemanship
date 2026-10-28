"use client";

import { useRouter } from "next/navigation";
import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { TEL } from "@/lib/site";
import type { FormId } from "@/lib/forms";
import styles from "./form.module.css";

/** 複数の入力欄を1項目にまとめる（メールフォームプロの data-unjoin と同じ書式: "姓+ +名"） */
export type Join = { name: string; template: string };

type Props = {
  formId: FormId;
  thanksPath: string;
  joins?: Join[];
  children: ReactNode;
};

type Entry = [string, string];

function collectEntries(form: HTMLFormElement, joins: Join[]): Entry[] {
  const data = new FormData(form);
  const values = new Map<string, string>();
  const order: string[] = [];
  for (const [key, value] of data.entries()) {
    if (typeof value !== "string" || key === "_hp") continue;
    if (!values.has(key)) order.push(key);
    values.set(key, value.trim());
  }

  const joinOf = new Map<string, Join>();
  for (const join of joins) {
    for (const token of join.template.split("+")) {
      if (values.has(token) && !joinOf.has(token)) joinOf.set(token, join);
    }
  }

  const entries: Entry[] = [];
  const done = new Set<Join>();
  for (const key of order) {
    const join = joinOf.get(key);
    if (!join) {
      entries.push([key, values.get(key) ?? ""]);
      continue;
    }
    if (done.has(join)) continue;
    done.add(join);
    const text = join.template
      .split("+")
      .map((t) => (values.has(t) ? values.get(t) : t === "\\n" ? "\n" : t))
      .join("");
    entries.push([join.name, text]);
  }
  return entries;
}

export function MailForm({ formId, thanksPath, joins = [], children }: Props) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const [entries, setEntries] = useState<Entry[] | null>(null);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scrollTop = () => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const onConfirm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setEntries(collectEntries(e.currentTarget, joins));
    scrollTop();
  };

  const onSend = async () => {
    if (!entries || !formRef.current) return;
    setSending(true);
    setError(null);
    try {
      const honeypot = new FormData(formRef.current).get("_hp");
      const res = await fetch("/api/mail/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formId, entries, _hp: typeof honeypot === "string" ? honeypot : "" }),
      });
      if (!res.ok) throw new Error(String(res.status));
      router.push(thanksPath);
    } catch {
      setError(`送信に失敗しました。時間をおいて再度お試しいただくか、お電話（${TEL}）にてお問い合わせください。`);
      setSending(false);
    }
  };

  return (
    <div ref={topRef} className={styles.wrap}>
      <form
        ref={formRef}
        id="mailformpro"
        className={styles.form}
        hidden={entries !== null}
        onSubmit={onConfirm}
        onReset={() => setError(null)}
      >
        {children}
        <div className={styles.hp} aria-hidden="true">
          <label>
            URL
            <input type="text" name="_hp" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <div className={styles.buttons}>
          <button type="submit" className={styles.primary}>
            確認画面へ
          </button>
          <button type="reset" className={styles.secondary}>
            リセット
          </button>
        </div>
      </form>

      {entries && (
        <div className={styles.confirm}>
          <p className={styles.confirmTitle}>送信内容のご確認</p>
          <p className={styles.confirmLead}>以下の内容でよろしければ【送信する】ボタンを押してください。</p>
          <dl className={styles.confirmList}>
            {entries.map(([key, value]) => (
              <div key={key}>
                <dt>{key}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          {error && (
            <p className={styles.error} role="alert">
              {error}
            </p>
          )}
          <div className={styles.buttons}>
            <button type="button" className={styles.primary} onClick={onSend} disabled={sending}>
              {sending ? "送信中…" : "送信する"}
            </button>
            <button
              type="button"
              className={styles.secondary}
              disabled={sending}
              onClick={() => {
                setEntries(null);
                setError(null);
                scrollTop();
              }}
            >
              戻る
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
