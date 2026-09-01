"use client";

import Link from "next/link";
import StateMessage from "@/components/StateMessage";
import { useCart } from "@/context/CartContext";
import { cartTotalWithDiscounts, formatPrice, lineTotal } from "@/lib/cart";
import { productHasCertificate } from "@/data/products";
import styles from "./cart.module.css";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart } = useCart();
  const totals = cartTotalWithDiscounts(items);

  if (items.length === 0) {
    return (
      <div className="section">
        <div className="container">
          <StateMessage type="empty" />
        </div>
      </div>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <p className="label label-gold">Your Selection</p>
        <h1 className={styles.title}>Cart</h1>

        <div className={styles.layout}>
          <div className={styles.items}>
            {items.map(({ product, quantity }) => {
              const line = lineTotal(product, quantity);
              return (
                <div key={product.slug} className={styles.item}>
                  <div className={styles.itemInfo}>
                    <p className={`label ${product.status === "sold_out" ? "" : productHasCertificate(product) ? "label-gold" : ""}`}>
                      {product.status === "sold_out"
                        ? "Sold Out"
                        : productHasCertificate(product)
                          ? "Documented"
                          : "Available"}
                    </p>
                    {product.categoryLabel && (
                      <p className={styles.category}>{product.categoryLabel}</p>
                    )}
                    <h2>{product.name}</h2>
                    <p className={styles.meta}>
                      {product.amount} · {product.price}
                    </p>
                  </div>

                  <div className={styles.itemRight}>
                    <div className={styles.qty}>
                      <button type="button" aria-label="Decrease quantity" onClick={() => updateQuantity(product.slug, quantity - 1)}>−</button>
                      <span>{quantity}</span>
                      <button type="button" aria-label="Increase quantity" onClick={() => updateQuantity(product.slug, quantity + 1)}>+</button>
                    </div>
                    <p className={styles.lineTotal}>
                      {line !== null ? formatPrice(line) : "Unavailable"}
                    </p>
                    <button type="button" className={styles.remove} onClick={() => removeItem(product.slug)}>Remove</button>
                  </div>
                </div>
              );
            })}
          </div>

          <aside className={styles.summary}>
            {totals ? (
              <>
                <div className={styles.summaryRow}><span>Subtotal</span><span>{formatPrice(totals.subtotal)}</span></div>
                {totals.discount > 0 && (
                  <div className={styles.summaryRow}><span>Volume discount</span><span>−{formatPrice(totals.discount)}</span></div>
                )}
                <div className={styles.summaryRow}><span>Shipping</span><span>Complimentary</span></div>
                <div className={styles.summaryTotal}><span>Estimated total</span><span>{formatPrice(totals.total)}</span></div>
              </>
            ) : (
              <p className={styles.note}>Some items require pricing confirmation from the house.</p>
            )}
            <p className={styles.note}>
              Five or more units earn 5% off; ten or more earn 10%. Volume pricing stacks with sale pricing up to the house ceiling of 30% off the list price.
            </p>
            <Link href="/checkout" className="btn" style={{ width: "100%", marginTop: "1.25rem" }}>
              Proceed to Checkout
            </Link>
            <button type="button" className="btn" style={{ width: "100%", marginTop: "0.75rem" }} onClick={clearCart}>
              Clear Cart
            </button>
          </aside>
        </div>

        <p className={styles.ruo}>For laboratory research use only. Not for human consumption.</p>
      </div>
    </section>
  );
}
