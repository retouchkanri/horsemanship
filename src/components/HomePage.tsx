import Link from "next/link";
import { Img } from "./Img";
import { formatDateJa, postPath, postsInCategory } from "@/lib/posts";
import type { ImageSrc } from "@/lib/images";
import styles from "./HomePage.module.css";

const menuImages: { href: string; src: ImageSrc; alt: string; wide?: boolean }[] = [
  { href: "/champion/", src: "/images/theme/img/top/img_001.jpg", alt: "歴代優勝者・入賞者" },
  { href: "/koho/", src: "/images/theme/img/top/img_002.jpg", alt: "取材・リリース依頼" },
  { href: "/daigaku/", src: "/images/theme/img/top/img_003.jpg", alt: "大学馬術部関係者様" },
  { href: "/horse/", src: "/images/theme/img/top/img_004.jpg", alt: "主な活躍競技馬紹介" },
  { href: "/support/", src: "/images/theme/img/top/img_005.jpg", alt: "個人・団体・企業協賛のお願い", wide: true },
];

export function HomePage() {
  const news = postsInCategory("news").slice(0, 1);
  const topics = postsInCategory("topics").slice(0, 5);

  return (
    <>
      <div className={styles.lineBox}>
        <div className={`container ${styles.narrow}`}>
          <div className={styles.newsBox}>
            <Img src="/images/theme/img/top/m_001.png" alt="NEWS" className={styles.newsIcon} />
            <ul>
              {news.map((post) => (
                <li key={post.id}>
                  <Link href={postPath(post)}>
                    {post.title}
                    <i aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div id="wrapper" className={styles.wrapper}>
        <section className={`container ${styles.narrow} ${styles.grid}`}>
          <div className={styles.columnLeft}>
            <div className={`${styles.topics} reveal`}>
              <h2 className={styles.heading}>
                <span className={styles.headingEn} aria-hidden="true">
                  Topics
                </span>
                <span className={styles.headingJa}>トピックス</span>
                <span className={styles.more}>
                  <Link href="/category/topics/">
                    一覧
                    <i aria-hidden="true" />
                  </Link>
                </span>
              </h2>

              <ul className={styles.topicList}>
                {topics.map((post) => (
                  <li key={post.id}>
                    <Link href={postPath(post)} className={styles.thumb} tabIndex={-1} aria-hidden="true">
                      <Img src={post.image} alt="" sizes="(min-width: 640px) 150px, 120px" />
                    </Link>
                    <div className={styles.topicBody}>
                      <time dateTime={post.date}>{formatDateJa(post.date)}</time>
                      <br />
                      <Link href={postPath(post)} className={styles.topicTitle}>
                        {post.title}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${styles.banner} reveal`}>
              <Link href="/boshu/">
                <Img
                  src="/images/theme/img/top/ban_boshu_21_2.png"
                  alt="第21回 全国中高生馬術選手権大会 参加者募集中!!"
                  sizes="(min-width: 489px) 449px, 100vw"
                />
              </Link>
            </div>
          </div>

          <div className={styles.columnRight}>
            <div className={`${styles.menu} reveal`}>
              {menuImages.map((item) => (
                <Link key={item.href} href={item.href} className={item.wide ? styles.menuWide : undefined}>
                  <Img
                    src={item.src}
                    alt={item.alt}
                    sizes={item.wide ? "(min-width: 490px) 450px, 100vw" : "(min-width: 490px) 215px, 50vw"}
                  />
                </Link>
              ))}
            </div>

            <div className={`${styles.sponsor} reveal`}>
              <Img src="/images/theme/img/top/km_ban.png" alt="＝協賛スポンサー等の表示＝" />
              <a href="http://bajigakuin.com" target="_blank" rel="noopener" className={styles.sponsorLink}>
                <Img src="/images/theme/img/top/ban_bajigakuin.png" alt="馬事学院 BAJIGAKUIN" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

