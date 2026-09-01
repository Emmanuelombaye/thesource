import CertificateLookup from "@/components/CertificateLookup";
import styles from "./HomeCertificate.module.css";

export default function HomeCertificate() {
  return (
    <section className={`section ${styles.section}`} id="verify">
      <div className="container">
        <div className={styles.split}>
          <div className={styles.copy}>
            <p className="label label-gold">Verification</p>
            <h2 className={styles.title}>Every batch accounted for.</h2>
            <p className={styles.text}>
              Enter the lot or report number from your label. Where the laboratory
              recorded one, its certificate opens straight away; otherwise the house
              will confirm the record within 24 hours.
            </p>
            <dl className={styles.preview}>
              <div>
                <dt>Certificate Lookup</dt>
                <dd>Lot → Status → Document</dd>
              </div>
              <div>
                <dt>Missing data</dt>
                <dd>Unavailable — never invented</dd>
              </div>
            </dl>
          </div>
          <div className={styles.lookup}>
            <CertificateLookup compact />
          </div>
        </div>
      </div>
    </section>
  );
}
