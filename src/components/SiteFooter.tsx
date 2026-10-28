import Link from "next/link";
import { Img } from "./Img";
import { PageTop } from "./PageTop";
import { TEL, TEL_HREF, areaGroups, footerNav } from "@/lib/site";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer id="footer" className={styles.footer}>
        <div className={`container ${styles.inner}`}>
          <div className={styles.info}>
            <Img src="/images/theme/img_cmn/footer_logo.png" alt="全国中高生馬術選手権大会" className={styles.footerLogo} />
            <Img src="/images/theme/img_cmn/footer_hp.png" alt="" className={styles.footerHp} />
            <p className={styles.address}>
              全国中高生馬術選手権大会　実行委員会　事務局
              <br />
              〒289-1213　千葉県山武市雨坪10番地　馬事学院内
              <br />
              TEL：
              <a href={TEL_HREF} className={`tel ${styles.tel}`}>
                {TEL}
              </a>
              （FAX：ございません）
              <br />
              お問い合わせフォームは<Link href="/contact/">こちら</Link>
            </p>
          </div>

          <nav aria-label="フッターメニュー">
            <ul className={styles.menu}>
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.ja}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>

      <div className={styles.area}>
        <div className="container">
          {areaGroups.map((group) => (
            <div key={group.prefix} className={styles.areaBox}>
              <p className={styles.areaLabel} data-tone={group.tone}>
                {group.label}
              </p>
              <p className={styles.areaLinks}>
                {group.links.map((link, i) => (
                  <span key={link.href}>
                    {i > 0 && <span className={styles.sep}>｜</span>}
                    <a href={link.href} target="_blank" rel="noopener">
                      {link.name}
                    </a>
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div id="copyright" className={styles.copyright}>
        <div className="container">
          <p>Copyright &copy; {year} 株式会社 馬事学院. All right reserved.</p>
        </div>
      </div>

      <PageTop />
    </>
  );
}
