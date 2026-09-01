import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "The Source — founded MMXXV by Casey Christopher.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="The House"
        title="About The Source"
        subtitle="Founded MMXXV by Casey Christopher."
      />

      <section className="section">
        <div className={`container ${styles.content}`}>
          <div className={styles.prose}>
            <p>
              The Source was founded in MMXXV by Casey Christopher on a single
              conviction: the research world deserves what the luxury world takes
              for granted. Provenance. Precision. Presentation.
            </p>
            <p>
              The house applies the care you would expect of a luxury brand to
              research materials — one master vial standard, independent American
              laboratory testing, and every certificate the house holds is published
              beside the vial it certifies.
            </p>
            <p>
              Every compound in The Collection is held to the same specification.
              Every detail — from the rigid white box to the engraved travel
              vessel — is held to one line, repeated without exception.
            </p>
          </div>

          <blockquote className={styles.quote}>
            <p>You do not chase the standard. You return to it.</p>
            <footer>
              <span className="label">Casey Christopher</span>
              <span>Founder</span>
            </footer>
          </blockquote>

          <div className={styles.links}>
            <Link href="/the-standard" className="btn">
              The Standard
            </Link>
            <Link href="/support" className="btn">
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      <p className={styles.ruo}>
        For laboratory research use only. Not for human consumption.
      </p>
    </>
  );
}
