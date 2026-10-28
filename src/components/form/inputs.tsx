"use client";

import { useRef, type ComponentProps, type ReactNode } from "react";
import styles from "./form.module.css";

/** dt/dd の1行 */
export function Row({ label, must, children }: { label: ReactNode; must?: boolean; children?: ReactNode }) {
  return (
    <div className={styles.row}>
      <dt>
        {must && <span className={styles.must}>必須</span>}
        {label}
      </dt>
      <dd>{children}</dd>
    </div>
  );
}

/** フォーム内の別の入力欄（name 指定）を取得 */
function fieldOf<T extends Element>(from: HTMLInputElement, name: string) {
  return from.form?.elements.namedItem(name) as T | null;
}

const toKatakana = (s: string) => s.replace(/[ぁ-ゖ]/g, (c) => String.fromCharCode(c.charCodeAt(0) + 0x60));

type InputProps = Omit<ComponentProps<"input">, "name"> & { name: string };

/** 入力した読みを指定のフリガナ欄へカタカナで自動入力する（メールフォームプロの data-kana 相当） */
export function KanaSourceInput({ kana, ...props }: InputProps & { kana: string }) {
  const reading = useRef("");

  return (
    <input
      type="text"
      {...props}
      onCompositionUpdate={(e) => {
        if (/^[ぁ-ゖー\s]+$/.test(e.data)) reading.current = e.data;
      }}
      onCompositionEnd={(e) => {
        const target = fieldOf<HTMLInputElement>(e.currentTarget, kana);
        if (target && reading.current) target.value += toKatakana(reading.current.replace(/\s/g, ""));
        reading.current = "";
      }}
      onChange={(e) => {
        if (e.currentTarget.value === "") {
          const target = fieldOf<HTMLInputElement>(e.currentTarget, kana);
          if (target) target.value = "";
        }
      }}
    />
  );
}

/** フリガナ欄：ひらがなで入力された場合はカタカナに揃える */
export function KanaInput(props: InputProps) {
  return (
    <input
      type="text"
      {...props}
      onBlur={(e) => {
        e.currentTarget.value = toKatakana(e.currentTarget.value);
      }}
    />
  );
}

/** 郵便番号から都道府県・市区町村を自動入力する（メールフォームプロの data-address 相当） */
export function ZipInput({ pref, city, ...props }: InputProps & { pref: string; city: string }) {
  const last = useRef("");

  return (
    <input
      type="text"
      inputMode="numeric"
      autoComplete="off"
      {...props}
      onInput={async (e) => {
        const input = e.currentTarget;
        const zip = input.value
          .replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0))
          .replace(/[^0-9]/g, "");
        if (zip.length !== 7 || zip === last.current) return;
        last.current = zip;
        try {
          const res = await fetch(`/api/zip/?zipcode=${zip}`);
          if (!res.ok) return;
          const data: { pref: string; city: string } = await res.json();
          const prefField = fieldOf<HTMLSelectElement>(input, pref);
          const cityField = fieldOf<HTMLInputElement>(input, city);
          if (prefField) prefField.value = data.pref;
          if (cityField) cityField.value = data.city;
        } catch {
          // 住所の自動入力に失敗しても手入力できるので何もしない
        }
      }}
    />
  );
}

const PREFECTURE_GROUPS: [string, string[]][] = [
  ["北海道・東北地方", ["北海道", "青森県", "岩手県", "秋田県", "宮城県", "山形県", "福島県"]],
  ["関東地方", ["栃木県", "群馬県", "茨城県", "埼玉県", "東京都", "千葉県", "神奈川県"]],
  ["中部地方", ["山梨県", "長野県", "新潟県", "富山県", "石川県", "福井県", "静岡県", "岐阜県", "愛知県"]],
  ["近畿地方", ["三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県"]],
  ["四国地方", ["徳島県", "香川県", "愛媛県", "高知県"]],
  ["中国地方", ["鳥取県", "島根県", "岡山県", "広島県", "山口県"]],
  ["九州・沖縄地方", ["福岡県", "佐賀県", "長崎県", "大分県", "熊本県", "宮崎県", "鹿児島県", "沖縄県"]],
];

export function PrefectureSelect({ name }: { name: string }) {
  return (
    <select name={name} required defaultValue="">
      <option value="">【選択して下さい】</option>
      {PREFECTURE_GROUPS.map(([label, prefs]) => (
        <optgroup key={label} label={label}>
          {prefs.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
}

/** ラジオボタン群 */
export function Radios({
  name,
  options,
  required,
  stack,
}: {
  name: string;
  options: { value: string; label?: string; id: string }[];
  required?: boolean;
  stack?: boolean;
}) {
  return (
    <span className={stack ? styles.radiosStack : styles.radios}>
      {options.map((o, i) => (
        <label key={o.id} className={styles.radio}>
          <input type="radio" name={name} id={o.id} value={o.value} required={required && i === 0} />
          <span>{o.label ?? o.value}</span>
        </label>
      ))}
    </span>
  );
}

export function Hint({ children }: { children: ReactNode }) {
  return <span className={styles.hint}>{children}</span>;
}
