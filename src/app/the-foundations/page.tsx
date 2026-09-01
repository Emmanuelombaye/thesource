import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import PageHero from "@/components/PageHero";
import ProductImage from "@/components/ProductImage";
import { foundationsProducts, collectionProducts } from "@/data/products";
import styles from "./foundations.module.css";

export const metadata: Metadata = {
  title: "The Foundations",
  description: "The Foundations Kit — four compounds studied together.",
};

const kitCompounds = ["GLP3-R", "KLOW", "Adamax", "MOTS-C"];

export default function FoundationsPage() {
  return (
    <>
      <PageHero
        label="The Foundations Kit"
        title="Where the new habits begin."
        subtitle="Four compounds studied together — metabolic, repair, cognitive, cellular. One stack under the mark."
      />

      <section className="section">
        <div className="container">
          <div className={styles.split}>
            <div className={styles.visual}>
              {foundationsProducts[0] ? (
                <ProductImage product={foundationsProducts[0]} size="detail" />
              ) : null}
            </div>
            <div className={styles.copy}>
              <p className="label label-gold">Category Introduction</p>
              <p className={styles.intro}>
                The Foundations Kit brings together four research compounds as a
                single stack. Each vial is held to the same master standard as
                The Collection — clear glass, brushed-gold cap, matte label.
              </p>
              <ul className={styles.compounds}>
                {kitCompounds.map((c) => (
                  <li key={c}>
                    <span>{c}</span>
                    {collectionProducts.find((p) => p.name === c) && (
                      <Link href={`/product/${collectionProducts.find((p) => p.name === c)!.slug}`}>
                        View →
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <div className={styles.actions}>
                <Link href="/product/foundations-kit" className="btn">
                  Discover The Kit
                </Link>
                <Link href="/collection" className="btn-text">View The Collection</Link>
              </div>
            </div>
          </div>

          <div className={styles.grid}>
            {foundationsProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <p className={styles.ruo}>For laboratory research use only. Not for human consumption.</p>
    </>
  );
}
