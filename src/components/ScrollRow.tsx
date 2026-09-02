"use client";

import { useRef } from "react";
import styles from "./ScrollRow.module.css";

interface ScrollRowProps {
  label: string;
  title: string;
  children: React.ReactNode;
}

export default function ScrollRow({ label, title, children }: ScrollRowProps) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: -1 | 1) => {
    const card = ref.current?.querySelector("[data-carousel-card]") as HTMLElement | null;
    const step = card ? card.offsetWidth + 20 : 300;
    ref.current?.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className="label label-gold">{label}</p>
            <h2 className={styles.title}>{title}</h2>
          </div>
          <div className={styles.controls}>
            <button type="button" onClick={() => scroll(-1)} aria-label="Scroll left" className={styles.ctrl}>←</button>
            <button type="button" onClick={() => scroll(1)} aria-label="Scroll right" className={styles.ctrl}>→</button>
          </div>
        </div>
      </div>
      <div className={styles.trackWrap}>
        <div ref={ref} className={styles.track}>
          {children}
        </div>
        <p className={styles.hint}>
          <span className={styles.hintDesktop}>Scroll →</span>
          <span className={styles.hintMobile}>Swipe →</span>
        </p>
      </div>
    </section>
  );
}
