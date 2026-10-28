import type { ReactNode } from "react";
import { PageTitle } from "@/components/PageTitle";
import { MailForm } from "@/components/form/MailForm";
import { Hint, KanaInput, KanaSourceInput, PrefectureSelect, Radios, Row, ZipInput } from "@/components/form/inputs";
import f from "@/components/form/form.module.css";
import { forms } from "@/lib/forms";
import { pageMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata = pageMetadata({
  title:
    "◆引退馬の活躍「全国中学生・高校生馬術選手権大会」開催（千葉県八街市・山武市の魅力）全国中高生馬術選手権大会を開催（馬事学院・バジガク）～引退馬の活躍、若者の活躍～ 馬の高校 東関東馬事高等学院",
  description:
    "千葉県は乗馬クラブの数も非常に多く存在します。昨今、引退馬の殺処分が問題視されている中、引退馬の活躍の場、若手人材の活躍馬の考え、千葉県八街市・山武市を拠点とする馬事学院（馬の学校 東関東馬事高等学院の運営会社）が、全国中学生・高校生馬術選手権大会を実施。引退競走馬などからの馬術競技馬への転用の競技馬たちを活用し、全国から中学生・高校生が集まる馬術大会へと！全国中高生馬術選手権大会 実行委員会 事務局 〒289-1213 千葉県山武市雨坪10番地 馬事学院内 TEL：050-6875-3336 ／乗馬大会・馬術大会",
  keywords: "インターハイ,高校,馬術,申込,全国,高校生,選手権,大会",
  path: "/boshu/",
});

const Bg = ({ children }: { children: ReactNode }) => <span className={styles.bg}>{children}</span>;
const U = ({ children }: { children: ReactNode }) => <span className="u">{children}</span>;

const requirements: { label: ReactNode; tone?: "wine" | "wine-u"; body: ReactNode }[] = [
  {
    label: "《 参加選手の資格 》",
    body: (
      <>
        ①国内の中学校・高等学校に在学していて
        <span className="t-red u">
          「馬術大会に出場経験（2開催以上の馬術大会で過去に８０センチ以上の障害３走行以上の競技実績）」
        </span>
        がある方　※中学生は２年生以上とし保護者（またはコーチ）の同伴が可能な方
        <br />
        ②何らかの傷害保険に加入している方
        <br />
        ③2日目（2回戦目）の進出の有無に関わらず、2日間にわたり参加できる方
        <br />
        ※注意事項：参加申し込みをしていただいた後に、当方にて審査をさせて頂きます。参加資格をクリアーされた場合のみメールまたはお電話にてご連絡させて頂きます。
      </>
    ),
  },
  {
    label: "《 コロナ感染症対策 》",
    tone: "wine-u",
    body: (
      <>
        ①競技会場内で体温測定や救護医のメディカルチェックを実施。（38度以上の発熱となった場合、その時点で参加はできません）
        <br />
        ②競技会場でも体温計・アルコール消毒液などの準備を致しますが、ご参加いただく選手の方も十分なご準備をお願い致します。
      </>
    ),
  },
  {
    label: "《 競技参加費用 》",
    body: (
      <>
        本大会の競技参加料は、
        <U>
          1名<strong className="fs-lg">15,000</strong>円（税込）
        </U>
        となります。
        <br />
        ※朝食・夕食・宿泊場所は主催者により無償で用意いたします。
        <br />
        ※申し込み時点で、参加料をお振込みして頂きます。万が一、キャンセルされた場合でもご返金致しかねます。但し、当方の都合によりキャンセルの場合は、返金対応をさせて頂きます。
      </>
    ),
  },
  {
    label: "《 競技規定 》",
    body: (
      <>
        ①日本馬術連盟競技会規程最新版を適用致します。
        <br />
        ②同減点の場合はタイムの早いものを上位者とします。
        <br />
        ③その他、打合せ会で決定した事項を優先いたします。
        <br />
        ＊失権について
        <br />
        スタート前の失権　<U>減点50</U>
        <br />
        走行中の失権　<U>減点40</U>
        <br />
        ゴール後の失権　<U>減点30</U>
        <br />
        残余障害があった場合は障害1個につき<U>減点20</U>
        <br />
        ただし、ダブル障害については下記の通りとします。
        <br />
        A障害で失権した場合、A障害とB障害が残余障害になるので<U>減点40</U>
        <br />
        B障害で失権した場合、A障害の<U>減点10</U>とB障害の<U>減点20</U>で<U>合計減点30</U>となる。
        <br />
        ④準備運動は、<Bg>4分間の3飛越</Bg>となります。（3飛越とは垂直・オクサーの飛越合計です）
        <br />
        （飛越とは、着地した時点で完飛とします。）
        <br />
        ⑤なお、障害にアプローチ後の拒止・逃避はカウント致しませんが、馬のウェルフェアを優先しますのでスチュワードの指示に従って下さい。
        <br />
        ⑥なお、競技規定については開会式での打ち合わせ会の時に決定したことを最優先事項とさせて頂きます。
      </>
    ),
  },
  {
    label: "《 競技形式 》",
    body: (
      <>
        ①主催者が準備した馬匹を使用する。
        <br />
        ②障害飛越にてトーナメント形式で行う。
        <br />
        <Bg>・1回戦（高さ60cm以下）コンビネーション障害無し</Bg>
        <br />
        参加者にて、１頭に2～4名が騎乗して各馬の上位者1～2名を勝者とする。
        <br />
        <Bg>・2回戦（高さ70cm以下）（新たに抽選を行います）</Bg>
        <br />
        1回戦の勝者にて、１頭に2～3名が騎乗して各馬の最上位者を勝者とする。
        <br />
        <Bg>・3回戦（高さ80cm以下）</Bg>
        <br />
        2回戦の勝者にて、１頭に2名が騎乗して各馬の上位者を勝者とする。
        <br />
        <Bg>・準決勝戦（高さ90cm以下）</Bg>
        <br />
        3回戦の勝者にて、１頭に2名が騎乗して上位者を勝者とする。
        <br />
        <Bg>・3位4位決定戦、5位6位7位8位決定戦（高さ80cm以下）</Bg>
        <br />
        準決勝戦の敗者及び3回戦の敗者にて、順位を決定する。
        <br />
        <Bg>・決勝戦（高さ100cm以下）</Bg>
        <br />
        準決勝戦の勝者2名にて、2頭に騎乗して総合成績により優勝者を決定する。
        <br />
        尚、2回走行目の出場順は1回走行の成績によりリバースオーダーとします。
        <br />
        （2回走行において、同減点の場合は、2走行の合計タイムの早いものを優勝者とする。）
        <br />
        ③1回戦の出場順番及び騎乗馬匹は打合せ会で抽選にて決定いたします。
        <br />
        ④2回戦の出場順番及び騎乗馬匹は１回戦終了後に抽選にて決定いたします。
        <br />
        その後の出場順番につきましてはその都度ジャンケン等で行います。
        <br />
        ⑤なお、開会式での打ち合わせ会で決定したことを最優先します。
      </>
    ),
  },
  {
    label: "《 表　彰 》",
    body: (
      <>
        ①１位～１２位までを入賞と致します。
        <br />
        ②入賞者は必ず正装にて表彰式に参加する様にお願い致します。
        <br />
        ※表彰は、閉会式で行います。閉会式には原則全選手の参加（正装）となります。
      </>
    ),
  },
  {
    label: "《 注意事項 》",
    body: (
      <>
        ①競技中の事故に対して応急処置はとりますが、それ以上の責任は一切負いません。
        <br />
        ②準備運動場及び競技において、3点固定式ヘッドギアの着用を義務付けます。
        <br />
        ③大会期間中、各自事故の無いように注意して下さい。
        <br />
        ④上記のほか、中高生馬術選手権大会の参加選手としてのモラルを守って下さい。
      </>
    ),
  },
  {
    label: "《 肖像権使用同意書について 》",
    body: "第21回全国中高生馬術選手権大会にご出場される選手の撮影・収録・放送及び、インターネット配信をさせて頂くことがあります。これは出場される選手と共に走行する引退競走馬のセカンドキャリアのさまざまな活動を収録・記録・周知させていただくことで、乗馬普及等に寄与することを目的としております。つきましては、出場される選手の活動の様子を一般メディア等で記録・放映させて頂く可能性が御座いますので、撮影・収録・放送等の許諾について、ご理解とご協力をお願いします。（尚、別紙に定める肖像権使用承諾書にご協力いただけない場合は、第19回全国中高生馬術選手権大会に出場することが出来ません。）",
  },
  {
    label: "《 誓約書について 》",
    body: "別紙に定める誓約書に署名をし、必ず提出していることと致します。",
  },
];

type Slot = { time: string; body: ReactNode; main?: boolean };

const schedule: { day: string; slots: Slot[] }[] = [
  {
    day: "7月18日（土）",
    slots: [
      { time: "12：45", body: "競技会場集合：（JR東京駅11時集合）" },
      {
        time: "13：00 ～",
        body: (
          <>
            開会式（競技会正装にて参加）
            <br />
            打ち合せ会（１回戦の抽選も行います）
            <br />
            コースウォーク
          </>
        ),
      },
      { time: "14：30 ～", body: "1回戦の使用馬匹のテスト走行" },
      { time: "15：00 ～", body: "1回戦", main: true },
      { time: "17：15 ～", body: "親善パーティー&抽選会（兼：夕食）" },
    ],
  },
  {
    day: "7月19日（日）",
    slots: [
      { time: "7：00", body: "会場：集合（朝食は主催者で準備）" },
      { time: "7：45 ～", body: "2回戦の使用馬匹のテスト走行" },
      { time: "8：00 ～", body: "2回戦", main: true },
      { time: "9：00 ～", body: "3回戦の使用馬匹のテスト走行" },
      { time: "9：15 ～", body: "3回戦", main: true },
      { time: "9：45 ～", body: "準決勝戦使用馬匹のテスト走行" },
      { time: "9：50 ～", body: "準決勝戦", main: true },
      { time: "10：15 ～", body: "順位決定戦使用馬匹のテスト走行" },
      { time: "10：20 ～", body: "順位決定戦", main: true },
      { time: "10：50 ～", body: "決勝戦使用馬匹のテスト走行" },
      { time: "11：00 ～", body: "決勝戦", main: true },
      {
        time: "競技終了後",
        body: (
          <>
            表彰式
            <br />
            閉会式
          </>
        ),
      },
    ],
  },
];

const zipLink = (
  <a href="http://www.post.japanpost.jp/zipcode/" target="_blank" rel="noopener">
    郵便番号を調べる
  </a>
);

export default function Page() {
  return (
    <article id="post-27" className="entry">
      <PageTitle main="第21回　全国中学生・高校生馬術選手権大会のお申し込み" />

      <p className={styles.badge}>（第16回より中学2年生～★競技経験者の参加可能となりました）</p>
      <p className="lead">
        <strong className="t-orange">「令和8年7月18日（土）～19日（日）」の2日間</strong>
        、千葉県山武市にある「旧：日向小学校」（現：東関東馬事高等学院キャンパス内）にて、第21回 全国中高生馬術選手権大会を開催いたします。第16回より、現役の高校１年～3年生に加えて、馬術競技会参加経験がある中学2年生以上の選手も参加対象となりました。（参加条件）等をご参照のうえ、以下のお申し込みフォームより、
        <span className="t-red marker">2026年7月13日（午後20時まで）</span>に参加エントリーをお願いいたします。
      </p>

      <dl className={styles.requirements}>
        {requirements.map((r, i) => (
          <div key={i} data-tone={r.tone}>
            <dt>
              <strong>{r.label}</strong>
            </dt>
            <dd>{r.body}</dd>
          </div>
        ))}
        <div data-tone="wine">
          <dt>
            <strong>《 競技日程 》</strong>
          </dt>
          <dd>
            <p className={styles.period}>
              <strong>令和8年7月18日（土）～19日（日）</strong>
            </p>
            {schedule.map((d) => (
              <div key={d.day} className={styles.day}>
                <p className={styles.dayLabel}>
                  <strong>{d.day}</strong>
                </p>
                <ol className={styles.timeline}>
                  {d.slots.map((s) => (
                    <li key={s.time} data-main={s.main}>
                      <span className={styles.time}>{s.time}</span>
                      <span className={styles.event}>{s.main ? <strong>{s.body}</strong> : s.body}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
            <p className={styles.scheduleNote}>
              ＊現時点でのタイムスケジュールになります。
              <br />
              上記の時間は目安です。準備が出来次第スタートしていきます。
              <br />
              大会当日の打ち合せ会が最終決定となります。
            </p>
          </dd>
        </div>
      </dl>

      <div className="card">
        <p>
          <strong className="fs-lg">参加費用　15,000円（宿泊・夕食・朝食は無料）</strong>
          <br />
          <span className="t-wine">
            ※参加希望者が増加傾向にあります。参加人数が多い場合は審査のうえ、お申し込み順とさせて頂きますのでお早めに仮申し込みをお願いいたします。
          </span>
        </p>
      </div>
      <p>
        全国中高生馬術選手権大会に参加ご希望の方は、まず下記のフォームより仮お申込みをお願いいたします。送信内容をもとに、当社にて選考をさせて頂き、選考結果をメールまたはお電話させて頂きます。※なお、選考の中身についてはご回答できませんので予めご了承ください。
      </p>

      <MailForm
        formId="boshu"
        thanksPath={forms.boshu.thanksPath}
        joins={[
          {
            name: "ご本人氏名",
            template: "ご本人氏名（姓）+ +ご本人氏名（名）+（+ご本人氏名（セイ）+ +ご本人氏名（メイ）+）",
          },
          { name: "ご住所1", template: "〒+郵便番号1+\\n+都道府県1+市区町村1+丁目番地1" },
          {
            name: "保護者氏名",
            template: "保護者氏名（姓）+ +保護者氏名（名）+（+保護者氏名（セイ）+ +保護者氏名（メイ）+）",
          },
          { name: "ご住所2", template: "〒+郵便番号2+\\n+都道府県2+市区町村2+丁目番地2" },
        ]}
      >
        <h3 className={f.section}>〜　基　本　情　報　〜</h3>
        <dl className="mailform">
          <Row label="ご本人氏名" must>
            姓{" "}
            <KanaSourceInput
              name="ご本人氏名（姓）"
              kana="ご本人氏名（セイ）"
              className={f.short}
              required
              autoComplete="family-name"
            />{" "}
            名{" "}
            <KanaSourceInput
              name="ご本人氏名（名）"
              kana="ご本人氏名（メイ）"
              className={f.short}
              required
              autoComplete="given-name"
            />
          </Row>
          <Row label="フリガナ" must>
            <KanaInput name="ご本人氏名（セイ）" className={f.short} aria-label="セイ" />{" "}
            <KanaInput name="ご本人氏名（メイ）" className={f.short} aria-label="メイ" />
          </Row>
          <Row label="生年月日" must>
            平成 <input type="text" name="生年月日／年" className={f.tiny} required inputMode="numeric" /> 年{" "}
            <input type="text" name="生年月日／月" className={f.tiny} required inputMode="numeric" /> 月{" "}
            <input type="text" name="生年月日／日" className={f.tiny} required inputMode="numeric" /> 日
            <Hint>例）平成11年5月12日</Hint>
          </Row>
          <Row label="郵便番号" must>
            <ZipInput name="郵便番号1" pref="都道府県1" city="市区町村1" className={f.short} required />　{zipLink}
          </Row>
          <Row label="ご住所" must>
            <ol>
              <li>
                <span>都道府県</span>
                <PrefectureSelect name="都道府県1" />
              </li>
              <li>
                <span>市区町村</span> <input type="text" name="市区町村1" required />
              </li>
              <li>
                <span>丁目番地</span> <input type="text" name="丁目番地1" required />
              </li>
            </ol>
          </Row>
          <Row label="ご自宅電話" must>
            <input type="text" name="ご自宅電話（本人）" className={f.wide} required inputMode="tel" />
            <Hint>例）043-445-3222</Hint>
          </Row>
          <Row label="本人携帯電話" must>
            <input type="text" name="本人携帯電話" className={f.wide} required inputMode="tel" />
            <Hint>例）080-1234-5678</Hint>
          </Row>
          <Row label="メールアドレス" must>
            <input type="email" name="email" className={f.wide} required autoComplete="email" />
          </Row>
          <Row label="中学校・高校名" must>
            所属している中学校・高校名を教えてください
            <br />
            <input type="text" name="所属している中学校・高校名" className={f.wide} required />
          </Row>
          <Row label="学年を教えてください" must>
            <Radios
              name="学年"
              required
              options={[
                { id: "gakunen1", value: "中学３年生", label: "中学３年生（保護者同伴必須）" },
                { id: "gakunen2", value: "高校１年生" },
                { id: "gakunen3", value: "高校２年生" },
                { id: "gakunen4", value: "高校３年生" },
              ]}
            />
          </Row>
          <Row label="乗馬歴" must>
            <Radios
              name="乗馬歴"
              required
              options={[
                { id: "jobareki1", value: "１年未満" },
                { id: "jobareki2", value: "１～３年" },
                { id: "jobareki3", value: "４年～６年" },
                { id: "jobareki4", value: "７年以上" },
              ]}
            />
          </Row>
          <Row label="騎乗数" must>
            <Radios
              name="騎乗数"
              required
              options={[
                { id: "kijosu1", value: "～100回以内" },
                { id: "kijosu2", value: "～200回以内" },
                { id: "kijosu3", value: "～300回以内" },
                { id: "kijosu4", value: "301回以上" },
              ]}
            />
          </Row>
          <Row label="所属乗馬クラブ名" must>
            <input type="text" name="所属乗馬クラブ名" className={f.wide} required />
          </Row>
          <Row label="今回の参加にあたり、所属の乗馬クラブの方に対して、" must>
            <Radios
              name="所属の乗馬クラブの方に対して"
              required
              stack
              options={[
                { id: "sanka1", value: "相談して承認をもらった" },
                { id: "sanka2", value: "相談はしたが特に承認を得ている訳ではない" },
                { id: "sanka3", value: "特に相談していない" },
                { id: "sanka4", value: "その他" },
              ]}
            />
            <input type="text" name="（その他）" className={f.wide} aria-label="その他の内容" />
          </Row>
          <Row label="馬術競技会出場歴" must>
            <Radios
              name="馬術競技会出場歴"
              required
              options={[
                { id: "shutsujo1", value: "なし" },
                { id: "shutsujo2", value: "あり" },
              ]}
            />
            <Hint>ありの場合、競技会名や実績を教えてください。</Hint>
            <textarea name="競技会名や実績" rows={5} cols={50} />
          </Row>
        </dl>

        <h3 className={f.section}>〜　保　護　者　情　報　〜</h3>
        <dl className="mailform">
          <Row label="保護者氏名" must>
            姓{" "}
            <KanaSourceInput name="保護者氏名（姓）" kana="保護者氏名（セイ）" className={f.short} required /> 名{" "}
            <KanaSourceInput name="保護者氏名（名）" kana="保護者氏名（メイ）" className={f.short} required />
          </Row>
          <Row label="フリガナ" must>
            <KanaInput name="保護者氏名（セイ）" className={f.short} aria-label="セイ" />{" "}
            <KanaInput name="保護者氏名（メイ）" className={f.short} aria-label="メイ" />
          </Row>
          <Row label="本人との続柄" must>
            <input type="text" name="本人との続柄" className={f.short} required placeholder="ご記入ください" />
          </Row>
          <Row label="郵便番号" must>
            <ZipInput name="郵便番号2" pref="都道府県2" city="市区町村2" className={f.short} required />　{zipLink}
          </Row>
          <Row label="ご住所" must>
            <ol>
              <li>
                <span>都道府県</span>
                <PrefectureSelect name="都道府県2" />
              </li>
              <li>
                <span>市区町村</span> <input type="text" name="市区町村2" required />
              </li>
              <li>
                <span>丁目番地</span> <input type="text" name="丁目番地2" required />
              </li>
            </ol>
          </Row>
          <Row label="ご自宅電話" must>
            <input type="text" name="ご自宅電話（保護者）" className={f.wide} required inputMode="tel" />
            <Hint>例）043-445-3222</Hint>
          </Row>
          <Row label="保護者携帯電話" must>
            <input type="text" name="保護者携帯電話" className={f.wide} required inputMode="tel" />
            <Hint>例）080-1234-5678</Hint>
          </Row>
        </dl>

        <h3 className={f.section}>〜　質　問　内　容　〜</h3>
        <dl className="mailform">
          <Row label="１、" must>
            今回、何名で参加予定ですか？
            <br />
            <Radios
              name="１、今回、何名で参加予定ですか？"
              required
              options={[
                { id: "ninzu1", value: "本人のみ" },
                { id: "ninzu2", value: "本人＋１名" },
                { id: "ninzu3", value: "本人＋２名" },
                { id: "ninzu4", value: "本人＋３名" },
                { id: "ninzu5", value: "その他" },
              ]}
            />
          </Row>
          <Row label="２、">
            上記１で本人＋１名以上を選択された方は、誰といらっしゃいますか？
            <br />
            <span className="note">※具体的にお名前（続柄）までご記入願います。</span>
            <textarea name="２、上記１で本人＋１名以上を選択された方は、誰といらっしゃいますか？" rows={5} cols={60} />
          </Row>
          <Row label="３、" must>
            ご本人は乗馬ライセンス（全乗振、日馬連等）取得していましたら、ご記入ください。
            <br />
            <span className="note">※取得されていない場合は、“なし”とご記入ください。</span>
            <textarea
              name="３、ご本人は乗馬ライセンス（全乗振、日馬連等）取得していましたら、ご記入ください。"
              rows={5}
              cols={60}
              required
            />
          </Row>
          <Row label="４、" must>
            今回、ＪＲ東京駅の送迎をご利用になられる人数を教えてください。
            <br />
            <Radios
              name="４、今回、ＪＲ東京駅の送迎をご利用になられる人数を教えてください。"
              required
              options={[
                { id: "sougei1", value: "利用しない" },
                { id: "sougei2", value: "１名" },
                { id: "sougei3", value: "２名" },
                { id: "sougei4", value: "３名" },
                { id: "sougei5", value: "４名" },
                { id: "sougei6", value: "５名" },
                { id: "sougei7", value: "６名" },
                { id: "sougei8", value: "７名" },
                { id: "sougei9", value: "それ以上" },
              ]}
            />
          </Row>
        </dl>
        <p className={f.notice}>
          ご記入ありがとうございました。
          <br />
          これをもとに、選考させて頂きます。 選考結果は、お電話にてご連絡させて頂きます。
        </p>
      </MailForm>
    </article>
  );
}
