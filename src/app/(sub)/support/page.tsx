import { Img } from "@/components/Img";
import { PageTitle } from "@/components/PageTitle";
import { MailForm } from "@/components/form/MailForm";
import { Hint, KanaInput, KanaSourceInput, PrefectureSelect, Radios, Row, ZipInput } from "@/components/form/inputs";
import f from "@/components/form/form.module.css";
import { forms } from "@/lib/forms";
import { pageMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata = pageMetadata({
  title: "協賛スポンサー募集／馬術競技会スポンサー募集",
  description: "高校生の全国高校生馬術選手権大会への協賛スポンサー募集",
  keywords: "協賛,スポンサー,募集,賞品,サンプリング,協賛スポンサー",
  path: "/support/",
});

const sponsors = [
  "●株式会社 東関東ホースプロジェクト（賞品：乗馬鞍およびその他乗馬用品）等",
  "●地方競馬所属騎手様（賞品：ディズニーランドチケット１位～３位ペアチケット）等",
  "●株式会社 馬事学院（賞品：競馬デビュー予定２歳馬の命名権）等",
  "●株式会社 パインテイル様（賞品：各種馬具の提供）等",
  "●乗馬クラブニューシーズン様（馬具、馬のグッズ・カレンダー）等",
  "●写真撮影会社「フェザーブリンク様」（賞品：競技会中の写真パネル）等",
  "●第一生命様（ディズニーランドチケット等１位～３位）",
  "●グリーンウッドパーク様（液晶テレビ）等",
  "●杉谷乗馬クラブ様（ＵＳＪペアチケット１位～３位）",
  "●株式会社 アルティオ様（馬具・乗馬用品）等など",
];

export default function Page() {
  return (
    <article id="post-23" className="entry">
      <PageTitle sub="全国高校生馬術選手権大会の開催にあたり…" main="個人・企業様からの協賛をお願いしています。" />

      <section>
        <p>
          <strong className="label t-green fs-lg">全国高校生馬術選手権大会開催について</strong>
          <Img src="/images/theme/img/support/img_001.jpg" className="alignright" />
          日本全国の埋もれた若い馬術競技者の発掘と、今後の馬術界を背負う若者の育成を目的とし、真の高校生のチャンピオンを決めることによって、互いに切磋琢磨し、より若者たちの技術と精神力の向上を目指す馬術大会です。また、この選手権大会で活用する馬は、もともと国内の競走馬として活躍し、様々な事情により引退となってしまった馬たちの第２の活躍の場として、主催者である東関東ホースプロジェクトにて乗用馬として再調教された馬たちです。こうした引退後の競走馬たちの再活躍が、馬術界でのジュニア育成に貢献することにつながり、反面、全国から集まるジュニアたちの活躍が、行き場をなくした引退競走馬たちへの活躍の場を広げているのです。まさに、「人と馬をつなぎ・馬と人をつなぐ」という当社の理念に基づいた民間が主催する全国大会です。企業・個人を問わず、一人でも多くの皆様に協力して頂き、馬社会の未来を担っていく若者への技術向上と、競走馬として役目を終えた引退馬たちの活躍を支援して頂きたいと思います。よろしくお願いいたします。
        </p>
        <p className="signature">
          株式会社 馬事学院
          <br />
          代表　常見 和久
        </p>
        <Img
          src="/images/theme/img/support/img_002.jpg"
          className="aligncenter"
          sizes="(min-width: 768px) 640px, 100vw"
        />
      </section>

      <div className="card">
        <p>
          <strong className="label t-green">詳細</strong>
          <a href="/images/theme/img/support/zu_001.png" target="_blank" rel="noopener" className={styles.zu}>
            <Img
              src="/images/theme/img/support/zu_001.png"
              alt="協賛種別（詳細）"
              className="aligncenter"
              sizes="(min-width: 768px) 640px, 100vw"
            />
          </a>
        </p>

        <div className={styles.sponsors}>
          <strong className="label t-green">〈過去の協賛スポンサー様（一例）〉</strong>
          <Img src="/images/theme/img/support/img_003.jpg" className="alignright" />
          <ul>
            {sponsors.map((s) => (
              <li key={s}>
                <span className={styles.bullet}>{s.slice(0, 1)}</span>
                {s.slice(1)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="t-wine">協賛スポンサー　お申込みフォーム</h2>
      <p>
        この度は、全国高校生馬術選手権大会のサイトをご覧いただきまして、誠にありがとうございます。
        <br />
        次回、第７回全国高校生馬術選手権大会は、平成30年１月17日～18日に開催を予定しております。是非、この機会に、企業・個人を問わず、この全国高校生馬術選手権大会へのご協賛・ご協力をお願いいたします。ご検討いただける方は、下記のフォームよりお申し出ください。（確認させて頂き次第、当社担当より折り返し、メールまたはお電話にてご連絡をさせて頂きます。）
      </p>

      <MailForm
        formId="support"
        thanksPath={forms.support.thanksPath}
        joins={[
          { name: "お名前（ご担当者様）", template: "姓+ +名+（+セイ+ +メイ+）" },
          { name: "ご住所", template: "〒+郵便番号+\\n+都道府県+市区町村+丁目番地" },
        ]}
      >
        <dl className="mailform">
          <Row label="協賛形態" must>
            <Radios
              name="協賛形態"
              required
              options={[
                { id: "keitai1", value: "個人" },
                { id: "keitai2", value: "企業（または団体）" },
              ]}
            />
          </Row>
          <Row label="希望口数" must>
            <input type="text" name="希望口数" className={f.tiny} required inputMode="numeric" /> 口
            <Hint>※企業の場合は1口3万円（募集は、1口・３口・５口となります。）個人は、制限なし。</Hint>
          </Row>
          <Row label="企業名">
            <input type="text" name="企業名" className={f.wide} autoComplete="organization" />
            <Hint>（企業の方は、必ずご記入ください）※個人の方は、無記入で結構です。</Hint>
          </Row>
          <Row label="企業ホームページ">
            <input type="text" name="企業ホームページ" className={f.wide} inputMode="url" />
          </Row>
          <Row label="お名前（ご担当者様）" must>
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
          <Row label="ご連絡先（携帯）" must>
            <input type="text" name="ご連絡先" className={f.wide} required autoComplete="tel" inputMode="tel" />
          </Row>
          <Row label="郵便番号" must>
            <ZipInput name="郵便番号" pref="都道府県" city="市区町村" className={f.short} required />
            <a href="http://www.post.japanpost.jp/zipcode/" target="_blank" rel="noopener">
              郵便番号を調べる
            </a>
          </Row>
          <Row label="ご住所" must>
            <ol>
              <li>
                <span>都道府県</span>
                <PrefectureSelect name="都道府県" />
              </li>
              <li>
                <span>市区町村</span> <input type="text" name="市区町村" required />
              </li>
              <li>
                <span>丁目番地</span> <input type="text" name="丁目番地" required />
              </li>
            </ol>
          </Row>
          <Row label="備考欄">
            （連絡事項等がございましたらご記入ください）
            <textarea name="備考欄" rows={10} cols={60} />
          </Row>
        </dl>
        <p className={f.notice}>
          ご入力ありがとうございました。それでは、下記の【確認画面へ】ボタンをクリック後、【送信する】ボタンにて送信してください。
          <br />
          確認させて頂き次第、当社担当より折り返し、メールまたはお電話にてご連絡をさせて頂きます。（なお、簡単な審査をさせて頂いた結果、誠に申し訳ございませんが、ご希望に添えない事もございますことをご了解ください。）直接のお問い合わせは、電話{" "}
          <a href="tel:0434450577" className="tel">
            043-445-0577
          </a>
          （事務局）
        </p>
      </MailForm>
    </article>
  );
}
