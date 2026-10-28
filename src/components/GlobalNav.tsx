"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/lib/site";
import styles from "./GlobalNav.module.css";

export function GlobalNav() {
  const pathname = usePathname();

  return (
    <nav id="mainNav" className={styles.nav} aria-label="グローバルメニュー">
      <div className="container">
        <ul className={styles.list}>
          {mainNav.map((item) => {
            const current = pathname === item.href || (item.href === "/" && pathname === "/page/2/");
            return (
              <li key={item.href}>
                <Link href={item.href} aria-current={current ? "page" : undefined}>
                  <strong>{item.ja}</strong>
                  <span>{item.en}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
