import Link from "next/link";
import HeroFilm from "@/components/HeroFilm";
import styles from "./HomeHero.module.css";

/**
 * PDF p.17 — homepage hero wireframe + first screen what / who / proof
 * Aesop — one image carries the opening; Rhode — single action
 */
const proof = [
  {
    label: "What",
    text: "Research materials from The Collection.",
    href: "/collection",
  },
  {
    label: "Who",
    text: "Qualified laboratory research. Not for human consumption.",
    href: "/legal/research-use",
  },
  {
    label: "Proof",
    text: "Batch documentation and certificate lookup.",
    href: "/certificates",
  },
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
            <Link href="/collection" className={`btn ${styles.ctaPrimary}`}>
              View The Collection
            </Link>
          </div>
        </div>

        <ul className={styles.proof} aria-label="What The Source offers">
          {proof.map((item) => (
            <li key={item.label} className={styles.proofItem}>
              <span className={styles.proofLabel}>{item.label}</span>
              <Link href={item.href} className={styles.proofText}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
