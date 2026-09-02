import Link from "next/link";
import styles from "./ResearchSupport.module.css";

export default function ResearchSupport() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.inner}>
          <div>
            <p className="label label-gold">Research Support</p>
            <h2 className={styles.title}>Direct support from the house.</h2>
            <p className={styles.text}>
              Order assistance, product information, shipping, and certificate requests —
              replies within 24 hours, usually much sooner.
            </p>
          </div>
          <div className={styles.actions}>
            <Link href="/support" className="btn">
              Client Advisor
            </Link>
            <div className={styles.secondary}>
              <a href="mailto:admin@thesource.gold" className="btn-text">
                admin@thesource.gold
              </a>
              <Link href="/certificates" className="btn-text">
                COA &amp; Testing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
