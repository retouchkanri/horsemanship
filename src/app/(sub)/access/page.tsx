import { Img } from "@/components/Img";
import { PageTitle } from "@/components/PageTitle";
import { pageMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata = pageMetadata({
  title: "全国高校生馬術選手権大会 地図アクセス会場案内",
  description:
    "JR東京駅までお迎え！全国高校生馬術選手権大会（競馬の役目を終えた引退馬たちの再調教で、馬術競技馬に転身した馬術競技馬たちが集結！）★引退馬を救えプロジェクト 馬と過ごし乗馬を楽しめる全寮制の高校「馬の学校 東関東馬事高等学院」キャンパスで開催される全国中高生馬術選手権大会（千葉県山武市",
  keywords: "関東,馬術大会,馬事公苑,八街市,富里市,成田市,馬術競技場,東関東馬事高等学院,馬の学校",
  path: "/access/",
});

export default function Page() {
  return (
    <article id="post-20" className="entry">
      <PageTitle
        sub={
          <>
            <span className="t-red">全国中高校生馬術選手権大会</span>の
          </>
        }
        main="会場までのアクセス＆JR東京駅集合場所"
      />

      <div className="card">
        <p>
          <Img src="/images/theme/img/access/img_001.jpg" className="alignright" />
          <strong className="label">【会場所在地】</strong>
          〒289-1213千葉県山武市雨坪10番地（旧：日向小学校内）
          <br />
          TEL：<span className="t-red tel fs-lg">050-6875-3336</span>
          <br />
          ★交通アクセス　電車の場合：総武本線 日向駅（ひゅうがえき）より徒歩8分程度
          <br />
          ※自動車の場合は、「山武成東（さんぶなるとう）インター」より車で10分程度
        </p>
      </div>

      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12971.58639449158!2d140.346956615116!3d35.63027553276952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x602293edd255017d%3A0x4f2dc2143455e58f!2z6aas5LqL5a2m6Zmi77yP5p2x6Zai5p2x6aas5LqL6auY562J5a2m6Zmi!5e0!3m2!1sja!2smy!4v1691221800058!5m2!1sja!2smy"
          title="会場（千葉県山武市雨坪10番地）の地図"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <h2 className="t-blue">【開催当日のＪＲ東京駅集合場所】</h2>
      <p>
        <Img src="/images/theme/img/access/img_map.gif" className="alignright" unoptimized />
        <strong className="label t-red">ＪＲ東京駅　八重洲中央口（集合場所）</strong>
        八重洲中央口を出て、大きな交差点を渡りヤンマービル下付近でお待ちください。
        <br />
        集合時間につきましては、予めご案内をお送りいたします。
      </p>
      <p>
        <strong className="label t-red">…羽田空港ご利用の場合…</strong>
        羽田空港をご利用の場合は、ＪＲ東京駅までリムジンバスまたは、モノレールで浜松町→ＪＲ東京駅までお越しください。
      </p>
    </article>
  );
}
