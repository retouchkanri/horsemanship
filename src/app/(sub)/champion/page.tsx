import { Img } from "@/components/Img";
import { PageTitle } from "@/components/PageTitle";
import type { ImageSrc } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata = pageMetadata({
  title: "歴代優勝者・入賞者「全国高校生馬術選手権大会」",
  description:
    "全国から集まった高校生たちの馬術競技大会。歴代優勝者・入賞者の紹介です。この大会は高校馬術部に所属していなくても参加できる高校生のための馬術大会です。",
  keywords: "インターハイ,馬術,高校,高校生,高校馬術部,歴代,バジガク,入賞者,優勝者,チャンピオン",
  path: "/champion/",
});

type Edition = {
  no: number;
  label: string;
  period: string;
  ranks: string[];
};

const RANK_LABELS = ["優勝", "２位", "３位", "４位", "５位", "６位", "７位", "８位", "９位"];
const VENUE = "開催地：千葉県八街市：東関東ホースプロジェクト";

const editions: Edition[] = [
  {
    no: 9,
    label: "第９回",
    period: "（２０１９年１月１２日～１３日）",
    ranks: ["松本　東馬", "関本　美空", "小島　翔太", "坪井　駿", "山城　瑚音", "石原　衣梨", "村雲　ひなた", "村山　駿哉"],
  },
  {
    no: 8,
    label: "第８回",
    period: "（２０１８年８月１８日～１９日）",
    ranks: ["神谷　詩", "村山　駿哉", "川口　航矢", "大塚　壮汰朗", "鯉川　匠", "吉野　真奈", "小泉　輝", "木和田　鈴菜"],
  },
  {
    no: 7,
    label: "第７回",
    period: "（２０１８年１月０６日～０７日）",
    ranks: ["梅津　頼", "荒川　将暉", "大塚　壮汰朗", "中込　理子", "西村　康良", "小泉　輝", "舘　楓人", "太田　直希"],
  },
  {
    no: 6,
    label: "第６回",
    period: "（２０１７年８月２６日～２７日）",
    ranks: [
      "河内　一馬",
      "松田　大輔",
      "吉原　護",
      "佐々木　貴一",
      "松尾　ゆずか",
      "中込　理子",
      "檜垣　香帆",
      "西村　康良",
      "井手　太一",
    ],
  },
  {
    no: 5,
    label: "第５回",
    period: "（２０１７年１月０７日～０８日）",
    ranks: ["勝田　匠", "三井　実海", "西　駿斗", "松岡　翼", "薬師　うい", "迫田　万莉菜", "藤本　愛実子", "太田　直樹"],
  },
  {
    no: 4,
    label: "第４回",
    period: "（２０１６年８月２７日～２８日）",
    ranks: ["下野　あずみ", "鈴木　璃玖", "大濱　拓海", "丹治　翔", "梅津　頼", "兼俊　太雅", "池田　朋矢", "佐藤　未菜"],
  },
  {
    no: 3,
    label: "第３回",
    period: "（２０１６年１月０９日～１０日）",
    ranks: ["木村　早希子", "加藤　駿人", "兼俊　太雅", "溝上　真心", "上野　莉紗子", "寺澤　穂", "谷口　遼斗", "大濱　拓海"],
  },
  {
    no: 2,
    label: "第２回",
    period: "（２０１５年８月２２日～２３日）",
    ranks: ["福士　超文", "清水　智貴", "中城　寛和", "南　健", "加藤　駿人", "杉本　智哉", "深谷　光明", "薬師　うい"],
  },
  {
    no: 1,
    label: "第１回",
    period: "（２０１５年１月１１日～１２日）",
    ranks: ["中野　詠心", "山下　大輝", "安田　光里", "伊藤　千畝", "松永　佳子", "竹田　天地", "薬師　豪太郎", "中鉢　瑚子"],
  },
];

const img = (no: number, n: 1 | 2) => `/images/theme/img/champion/img_00${no}_${n}.jpg` as ImageSrc;

export default function Page() {
  return (
    <article id="post-33" className="entry">
      <PageTitle
        sub={<span className="t-navy">全国高校生馬術選手権大会 優勝決定戦 歴代チャンピオン</span>}
        main={<span className="t-red">歴代「優勝者」「入賞者」の紹介</span>}
      />

      <div className={styles.intro}>
        <Img src="/images/theme/img/champion/img_000.jpg" className="alignright" />
        <p className="lead">
          <strong>２０１５年１月（冬）に、この全国高校生馬術選手権大会の第１回開催がスタートいたしました。現在までの</strong>
          <strong className="t-red fs-md">優勝チャンピオンに輝いた選手たち、入賞者たち</strong>
          <strong>をご紹介します。</strong>
        </p>
      </div>

      <div className={styles.editions}>
        {editions.map((ed) => (
          <section key={ed.no} className={`${styles.edition} reveal`} aria-labelledby={`edition-${ed.no}`}>
            <header className={styles.head}>
              <p id={`edition-${ed.no}`}>
                <strong className={styles.no}>{ed.label}</strong> 全国高校生馬術選手権大会{ed.period}
                <br />
                <span className={styles.venue}>{VENUE}</span>
              </p>
            </header>

            <div className={styles.body}>
              <Img src={img(ed.no, 1)} className={styles.photo} sizes="(min-width: 768px) 380px, 100vw" />
              <ol className={styles.ranks}>
                {ed.ranks.map((name, i) => (
                  <li key={name + i} data-rank={i + 1}>
                    <strong>{RANK_LABELS[i]}</strong>
                    <span>：{name}</span>
                  </li>
                ))}
              </ol>
            </div>

            <Img src={img(ed.no, 2)} className={styles.strip} sizes="(min-width: 768px) 640px, 100vw" />
          </section>
        ))}
      </div>
    </article>
  );
}
