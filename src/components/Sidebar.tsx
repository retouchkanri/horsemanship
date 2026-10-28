import Link from "next/link";
import { Img } from "./Img";
import { subNav } from "@/lib/site";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside id="sidebar" className={styles.sidebar}>
      <section className={styles.widget} aria-labelledby="submenu-title">
        <h3 id="submenu-title" className={styles.title}>
          <span>SUB MENU</span>
        </h3>
        <ul className={styles.menu}>
          {subNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <span>
                  {item.lines.map((line, i) => (
                    <span key={line}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </span>
                <i aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <p className={styles.banner}>
        <Link href="/boshu/">
          <Img
            src="/images/theme/img/top/ban_boshu_21_2.png"
            alt="第21回 全国中高生馬術選手権大会 参加者募集中!!"
            sizes="(min-width: 1080px) 320px, (min-width: 768px) 449px, 100vw"
          />
        </Link>
      </p>
    </aside>
  );
}
