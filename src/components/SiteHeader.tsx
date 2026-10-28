"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Img } from "./Img";
import { SITE_NAME, TEL, TEL_HREF, mainNav } from "@/lib/site";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/" || pathname === "/page/2/";
  const LogoTag = isHome ? "h1" : "div";

  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className={styles.header} id="header">
        <div className={`container ${styles.inner}`}>
          <LogoTag className={styles.logo}>
            <Link href="/" title={SITE_NAME} rel="home">
              <Img
                src="/images/theme/images/logo.png"
                alt={SITE_NAME}
                preload
                sizes="(min-width: 900px) 445px, 260px"
              />
            </Link>
          </LogoTag>

          <div className={styles.contact}>
            <p>
              <span className={styles.contactLabel}>お電話でのお問い合わせ：</span>
              <a href={TEL_HREF} className={`tel ${styles.tel}`}>
                <Img src="/images/theme/img_cmn/icon_tel.png" alt="" className={styles.telIcon} />
                {TEL}
              </a>
              <br />
              <span className={styles.contactUnder}>実行委員会 （株）馬事学院 事務局内</span>
            </p>
          </div>

          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.menuIcon} aria-hidden="true" />
            <span className={styles.menuLabel}>MENU</span>
          </button>
        </div>
      </header>

      {/* スマートフォンでは旧サイト同様、ロゴの下に電話番号を表示（スクロールで隠れる） */}
      <div className={styles.mobileContact}>
        <p>
          <span className={styles.contactLabel}>お電話でのお問い合わせ：</span>
          <a href={TEL_HREF} className={`tel ${styles.tel}`}>
            <Img src="/images/theme/img_cmn/icon_tel.png" alt="" className={styles.telIcon} />
            {TEL}
          </a>
          <br />
          <span className={styles.contactUnder}>実行委員会 （株）馬事学院 事務局内</span>
        </p>
      </div>

      {/* backdrop-filter を持つ header の外に置き、position: fixed をビューポート基準にする */}
      <div id="mobile-menu" className={styles.drawer} data-open={open} inert={!open}>
        <nav aria-label="メインメニュー" className={styles.drawerNav}>
          <ul>
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  <strong>{item.ja}</strong>
                  <span>{item.en}</span>
                </Link>
              </li>
            ))}
          </ul>
          <a href={TEL_HREF} className={styles.drawerTel}>
            <span>お電話でのお問い合わせ：</span>
            <span className="tel">
              <Img src="/images/theme/img_cmn/icon_tel.png" alt="" className={styles.telIcon} />
              {TEL}
            </span>
            <small>実行委員会 （株）馬事学院 事務局内</small>
          </a>
        </nav>
      </div>
    </>
  );
}
