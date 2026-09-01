"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, productHasCertificate } from "@/data/products";
import { productIsPurchasable } from "@/lib/cart";
import ProductImage from "@/components/ProductImage";
import CertificatePanel from "@/components/CertificatePanel";
import StateMessage from "@/components/StateMessage";
import { useCart } from "@/context/CartContext";
import styles from "./product.module.css";

function specValue(value?: string): string {
  return value && value !== "Unavailable" ? value : "Unavailable";
}

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="section">
        <div className="container">
          <StateMessage type="empty" title="Product not found" message="This product is not in The Collection." actionLabel="View The Collection" actionHref="/collection" />
        </div>
      </div>
    );
  }

  const isSoldOut = product.status === "sold_out";
  const hasCertificate = productHasCertificate(product);
  const canPurchase = productIsPurchasable(product);

  const specRows: { label: string; value: string }[] = [
    { label: "Availability", value: isSoldOut ? "Sold Out" : "Available" },
    { label: "Amount", value: product.amount },
    { label: "Handling", value: specValue(product.handling) },
    { label: "Testing Method", value: specValue(product.testingMethod) },
    { label: "Laboratory", value: specValue(product.laboratory) },
    { label: "Verified Date", value: specValue(product.verifiedDate) },
    { label: "Shipping", value: "USA · 24–48 hours · Complimentary U.S." },
  ];

  if (product.specifications && product.specifications !== "Unavailable") {
    specRows.splice(3, 0, { label: "Specifications", value: product.specifications });
  }

  return (
    <>
      <section className={styles.product}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <ol className={styles.breadcrumbList}>
              <li><Link href="/collection">The Collection</Link></li>
              <li aria-current="page">{product.name}</li>
            </ol>
          </nav>

          {isSoldOut && (
            <div className={styles.soldOutBanner} role="status">
              <StateMessage type="sold-out" />
            </div>
          )}

          <div className={styles.layout}>
            <div className={styles.visual}>
              <ProductImage product={product} size="detail" priority />
            </div>

            <div className={styles.details}>
              <p className={`label ${isSoldOut ? "" : hasCertificate ? "label-gold" : ""}`}>
                {isSoldOut ? "Sold Out" : hasCertificate ? "Documented" : "Available"}
              </p>
              <h1 className={styles.name}>{product.name}</h1>
              <div className={styles.priceBlock}>
                <span className={styles.amount}>{product.amount}</span>
                <span className={styles.price}>{product.price}</span>
              </div>
              <p className={styles.desc}>{product.description}</p>

              <div className={styles.quickFacts}>
                <div>
                  <span className="label">Availability</span>
                  <span>{isSoldOut ? "Sold Out" : "Available"}</span>
                </div>
                <div>
                  <span className="label">Current Lot</span>
                  <span>{product.lotStatus}</span>
                </div>
                <div>
                  <span className="label">Certificate</span>
                  <span>
                    {hasCertificate ? (
                      <Link href="/certificates">Available — Verify Lot</Link>
                    ) : (
                      "Unavailable"
                    )}
                  </span>
                </div>
                <div>
                  <span className="label">Shipping</span>
                  <span>USA · 24–48 hours · Complimentary U.S.</span>
                </div>
              </div>

              {canPurchase && (
                <div className={styles.actions}>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => {
                      addItem(product);
                      setAdded(true);
                      setTimeout(() => setAdded(false), 2000);
                    }}
                  >
                    {added ? "Added to Cart" : "Add to Cart"}
                  </button>
                  <Link href="/certificates" className="btn">
                    Verify Lot
                  </Link>
                </div>
              )}

              {!canPurchase && !isSoldOut && (
                <p className={styles.soldOutNote}>
                  Pricing unavailable for this item. Contact{" "}
                  <a href="mailto:admin@thesource.gold">admin@thesource.gold</a> to inquire.
                </p>
              )}

              {isSoldOut && (
                <p className={styles.soldOutNote}>
                  This item is currently sold out. Contact{" "}
                  <a href="mailto:admin@thesource.gold">admin@thesource.gold</a> for availability.
                </p>
              )}
            </div>
          </div>

          <div className={styles.certBlock}>
            <CertificatePanel unavailable lotId={undefined} />
          </div>

          <div className={styles.specs}>
            <p className="label label-gold">Approved Specifications</p>
            <dl>
              {specRows.map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
              <div>
                <dt>Support</dt>
                <dd><a href="mailto:admin@thesource.gold">admin@thesource.gold</a></dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <p className={styles.ruo}>For laboratory research use only. Not for human consumption.</p>
    </>
  );
}
