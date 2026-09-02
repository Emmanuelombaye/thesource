import Link from "next/link";
import HeroFilm from "@/components/HeroFilm";
import ClarityStrip from "@/components/home/ClarityStrip";
import Monogram from "@/components/Monogram";
import styles from "./HomeHero.module.css";

export default function HomeHero() {
  return (
    <section className={styles.hero} aria-label="The Source — homepage opening">
      <div className={styles.stage}>
        <HeroFilm />
        <div className={styles.scrim} aria-hidden="true" />
      </div>

      <div className={`container ${styles.copy}`}>
        <div className={styles.copyPanel}>
          <Monogram mode="monogram" variant="gold" size={52} className={styles.mark} />
          <p className={styles.eyebrow}>Precision · Purity · Performance</p>
          <h1 className={styles.title}>
            Research materials.
            <span className={styles.titleBreak}>Every batch accounted for.</span>
          </h1>
          <p className={styles.lead}>
            Clear identity, current documentation, and direct research support.
          </p>
          <div className={styles.ctas}>
            <Link href="/collection" className="btn">
              View The Collection
            </Link>
            <Link href="/the-foundations" className="btn-text">
              The Foundations Kit
            </Link>
          </div>
        </div>
      </div>

      {/* PDF p.17 — what / who / proof inside the first screen */}
      <div className={styles.clarity}>
        <div className="container">
          <ClarityStrip embedded />
        </div>
      </div>
    </section>
  );
}
