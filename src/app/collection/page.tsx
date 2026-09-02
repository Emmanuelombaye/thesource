import Link from "next/link";
import { Suspense } from "react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CollectionGuide from "@/components/CollectionGuide";
import { collectionProducts } from "@/data/products";
import { normalizeCollectionCategory } from "@/lib/collectionCategories";
import styles from "./collection.module.css";

export const metadata: Metadata = {
  title: "The Collection",
  description: "The Collection — research compounds held to one standard.",
};

export default async function CollectionPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const initialCategory = normalizeCollectionCategory(category);

  return (
    <>
      <PageHero
        label="The Collection"
        title="Held to one standard."
        subtitle="Research compounds supplied strictly for laboratory research."
        align="left"
      />

      <section className={`section ${styles.catalog}`}>
        <div className="container">
          <div className={styles.intro}>
            <p className="label label-gold">Category Introduction</p>
            <h2 className={styles.introTitle}>Research materials from The Source.</h2>
            <p>
              One master vial governs the entire line — the same clear glass, the same
              brushed-gold cap, the same weight in the hand. Identity is carried by the
              label. Consistency is the first form of trust.
            </p>
            <p>
              Open any card for amount, price, lot status, and certificate access.
            </p>
            <p className={styles.ruo}>
              For laboratory research use only. Not for human consumption.
            </p>
            <Link href="#collection" className="btn">
              View The Collection
            </Link>
          </div>

          <Suspense fallback={null}>
            <CollectionGuide products={collectionProducts} initialCategory={initialCategory} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
