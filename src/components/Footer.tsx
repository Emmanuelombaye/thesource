import Link from "next/link";
import Monogram from "@/components/Monogram";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="rule-full" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandCol}>
          <Monogram size={32} />
          <p className={styles.brandName}>THE SOURCE</p>
          <p className={styles.brandYear}>MMXXVI</p>
          <p className={styles.brandDesc}>
            Research compounds presented at the gold standard. Precision. Purity. Performance. From The Source.
          </p>
        </div>

        <div className={styles.columns}>
          <nav aria-label="The House">
            <p className="label">The House</p>
            <ul>
              <li><Link href="/about">Our Story</Link></li>
              <li><Link href="/the-foundations">The Foundations</Link></li>
              <li><Link href="/atelier">Atelier</Link></li>
              <li><Link href="/collection">The Collection</Link></li>
            </ul>
          </nav>
          <nav aria-label="Client Services">
            <p className="label">Client Services</p>
            <ul>
              <li><Link href="/support">Client Advisor</Link></li>
              <li><Link href="/support#shipping">Shipping &amp; Payments</Link></li>
              <li><Link href="/support#faq">FAQ</Link></li>
              <li><Link href="/legal/terms">Terms of Sale</Link></li>
              <li><Link href="/legal/privacy">Privacy Policy</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>© MMXXVI The Source. All rights reserved.</p>
          <p className={styles.ruo}>For laboratory research use only — not for human consumption</p>
        </div>
      </div>
    </footer>
  );
}
