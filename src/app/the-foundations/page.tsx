import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ProductImage from "@/components/ProductImage";
import { foundationsProducts, collectionProducts } from "@/data/products";
import styles from "./foundations.module.css";

export const metadata: Metadata = {
  title: "The Foundations",
  description: "The Foundations Kit — four compounds studied together.",
};

const kitCompounds = [
  { label: "GLP3-R", match: /^GLP3-R$/i },
  { label: "KLOW", match: /^KLOW$/i },
  { label: "Adamax", match: /^Adamax$/i },
  { label: "MOTS-C", match: /^MOTS-C$/i },
];

function findKitProduct(label: string, match: RegExp) {
  return (
    collectionProducts.find((p) => match.test(p.name) && !/bundle|kit|stack/i.test(p.slug)) ??
    collectionProducts.find((p) => match.test(p.name))
  );
}

export default function FoundationsPage() {
  const kit = foundationsProducts[0];

  return (
    <>
      <section className={styles.stage} aria-label="The Foundations Kit">
        <div className={`container ${styles.layout}`}>
          <div className={styles.copy}>
            <p className="label label-gold">The Foundations Kit</p>
            <h1 className={styles.title}>Where the new habits begin.</h1>
            <p className={styles.lead}>
              Four research compounds studied together — one stack under the mark.
            </p>
            <p className={styles.intro}>
              Each vial is held to the same master standard as The Collection — clear glass,
              brushed-gold cap, matte label. Identity carried by the label; consistency as the
              first form of trust.
            </p>

            <ul className={styles.compounds}>
              {kitCompounds.map(({ label, match }) => {
                const product = findKitProduct(label, match);
                return (
                  <li key={label}>
                    <span>{label}</span>
                    {product ? (
                      <Link href={`/product/${product.slug}`}>View →</Link>
                    ) : (
                      <span className={styles.muted}>In The Collection</span>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className={styles.actions}>
              <Link href="/product/foundations-kit" className="btn">
                Discover The Kit
              </Link>
              <Link href="/collection" className="btn-text">
                View The Collection
              </Link>
            </div>
          </div>

          <div className={styles.visual}>
            {kit ? <ProductImage product={kit} size="detail" priority /> : null}
          </div>
        </div>
      </section>

      {kit && (
        <section className={`section ${styles.catalog}`}>
          <div className="container">
            <p className="label label-gold">The Kit</p>
            <h2 className={styles.sectionTitle}>Held as one order.</h2>
            <div className={styles.grid}>
              <ProductCard product={kit} />
            </div>
          </div>
        </section>
      )}

      <p className={styles.ruo}>For laboratory research use only. Not for human consumption.</p>
    </>
  );
}
