import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CertificateLookup from "@/components/CertificateLookup";
import styles from "./certificates.module.css";

export const metadata: Metadata = {
  title: "Certificates",
  description: "Verify your vial — certificate lookup for The Source research compounds.",
};

export default function CertificatesPage() {
  return (
    <>
      <PageHero
        label="Verification"
        title="Verify your vial."
        subtitle="Enter the lot or report number from your label. Where the laboratory recorded one, its certificate opens straight away; otherwise the house will confirm the record within 24 hours."
      />

      <section className="section">
        <div className={`container ${styles.wrap}`}>
          <CertificateLookup />
        </div>
      </section>
    </>
  );
}
