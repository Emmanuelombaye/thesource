import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import PageHero from "@/components/PageHero";
import CampaignModule from "@/components/CampaignModule";
import CampaignImage from "@/components/CampaignImage";
import { atelierProducts } from "@/data/products";
import styles from "./atelier.module.css";

export const metadata: Metadata = {
  title: "Atelier",
  description: "Drop 001 — MMXXVI. Apparel and essentials by invitation.",
};

const rows = [
  {
    label: "Row I",
    title: "Premium T-Shirt Collection",
    slugs: ["monogram-tee", "emblem-tee", "wordmark-tee", "crest-tee", "box-logo-tee"],
  },
  {
    label: "Row II",
    title: "Premium Hoodie Collection",
    slugs: ["monogram-hoodie", "wordmark-hoodie", "crest-hoodie"],
  },
  {
    label: "Row III",
    title: "The Source Essentials",
    slugs: ["beanie", "duffel", "tumbler", "shaker", "mug", "towel", "umbrella", "challenge-coin"],
  },
];

export default function AtelierPage() {
  return (
    <>
      <PageHero
        label="The Atelier"
        title="Drop 001 — MMXXVI"
        subtitle="A quiet capsule for the ritual — worn, carried, kept. By invitation."
      />

      <CampaignModule
        label="Drop 001"
        title="Worn, carried, kept."
        text="A quiet capsule for the ritual. By invitation. Tees, hoodies, and essentials under the mark."
        href="#drop"
        action="View Drop 001"
        imageFill
        visual={<CampaignImage src="/atelier/tee-1.png" label="MMXXVI" />}
      />

      <div id="drop" className={styles.drop}>
      {rows.map((row, i) => {
        const products = atelierProducts.filter((p) => row.slugs.includes(p.slug));
        return (
          <section key={row.label} className={`section ${styles.row} ${i % 2 === 1 ? styles.rowAlt : ""}`}>
            <div className="container">
              <p className="label label-gold">{row.label}</p>
              <h2 className={styles.rowTitle}>{row.title}</h2>
              <div className={styles.grid}>
                {products.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          </section>
        );
      })}
      </div>
    </>
  );
}
