import { Img } from "@/components/Img";
import { PageTitle } from "@/components/PageTitle";
import { MailForm } from "@/components/form/MailForm";
import { Hint, KanaInput, KanaSourceInput, Radios, Row } from "@/components/form/inputs";
import f from "@/components/form/form.module.css";
import { forms } from "@/lib/forms";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "全国高校生馬術選手権大会へのお問い合わせフォーム／馬術競技会実行委員会",
  description:
    "全国中高校生馬術選手権大会へのお問い合わせはコチラ。お急ぎの場合は050-6875-3336までお電話にてお問い合わせください。",
  keywords: "馬術大会,高校馬術,インターハイ,大学馬術セレクション制度,日本大学,専修大学,明治大学,馬術部,進学",
  path: "/contact/",
});

export default function Page() {
  return (
    <article id="post-6" className="entry">
      <PageTitle sub="全国高校生馬術選手権大会" main="お問い合わせフォーム" />
      <p>
        <Img src="/images/theme/img/contact/img_001.jpg" className="alignright" />
        全国高校生馬術選手権大会に関するご質問やお問い合わせにつきましては、下記のメールフォームよりお問い合わせください。
        <br />
        なお、返信に時間がかかる場合がありますので、お急ぎの場合は直接（
        <a href="tel:05068753336" className="nowrap">
          050-6875-3336
        </a>
        ）までご連絡ください。
      </p>

      <MailForm
        formId="contact"
        thanksPath={forms.contact.thanksPath}
        joins={[{ name: "お名前", template: "姓+ +名+（+セイ+ +メイ+）" }]}
      >
        <dl className="mailform">
          <Row label="ご用件" must>
            <Radios
              name="ご用件"
              required
              stack
              options={[
                { id: "yoken1", value: "参加に関するお問い合わせ" },
                { id: "yoken2", value: "取材・リリースに関するお問い合わせ" },
                { id: "yoken3", value: "大学関係者様からのお問い合わせ" },
                { id: "yoken4", value: "協賛・スポンサーに関するお問い合わせ" },
                { id: "yoken5", value: "その他" },
              ]}
            />
          </Row>
          <Row label="お名前" must>
            姓 <KanaSourceInput name="姓" kana="セイ" className={f.short} required autoComplete="family-name" /> 名{" "}
            <KanaSourceInput name="名" kana="メイ" className={f.short} required autoComplete="given-name" />
          </Row>
          <Row label="フリガナ" must>
            <KanaInput name="セイ" className={f.short} aria-label="セイ" />{" "}
            <KanaInput name="メイ" className={f.short} aria-label="メイ" />
          </Row>
          <Row label="メールアドレス" must>
            <input type="email" name="email" className={f.wide} required autoComplete="email" />
          </Row>
          <Row label="ご連絡先（携帯可）" must>
            <input type="text" name="ご連絡先" className={f.wide} required autoComplete="tel" inputMode="tel" />
            <Hint>例）043-445-3222　080-1234-5678</Hint>
          </Row>
          <Row label="お問い合わせ内容" must>
            <textarea name="お問い合わせ内容" rows={10} cols={60} required />
          </Row>
        </dl>
      </MailForm>
    </article>
  );
}
