import Link from "next/link";
import HeroFilm from "@/components/HeroFilm";
import styles from "./HomeHero.module.css";

/** PDF p.17 — homepage hero wireframe: headline + subline; first screen states what / who / proof */
const proof = [
  { label: "What", text: "Research materials" },
  { label: "Who", text: "Qualified laboratory research" },
  { label: "Proof", text: "Batch certificates on request" },
];

export default function HomeHero() {
  return (
    <section className={styles.hero} aria-label="The Source — homepage opening">
      <div className={styles.stage}>
        <HeroFilm />
        <div className={styles.scrim} aria-hidden="true" />
      </div>

      <div className={styles.frame}>
        <div className={styles.copy}>
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

        <ul className={styles.proof} aria-label="What The Source offers">
          {proof.map((item) => (
            <li key={item.label} className={styles.proofItem}>
              <span className={styles.proofLabel}>{item.label}</span>
              <span className={styles.proofText}>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
