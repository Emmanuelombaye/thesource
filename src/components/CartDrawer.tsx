"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useCart } from "@/context/CartContext";
import { cartTotalWithDiscounts, formatPrice, lineTotal } from "@/lib/cart";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import styles from "./CartDrawer.module.css";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity } = useCart();
  const totals = cartTotalWithDiscounts(items);
  const panelRef = useRef<HTMLDivElement>(null);

  useFocusTrap(panelRef, open);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      <button type="button" className={styles.backdrop} aria-label="Close cart" onClick={onClose} />
      <aside className={styles.drawer} ref={panelRef} role="dialog" aria-modal="true" aria-label="Your Selection">
        <div className={styles.header}>
          <p className="label label-gold">Your Selection</p>
          <button type="button" className={styles.close} aria-label="Close" onClick={onClose}>×</button>
        </div>

        {items.length === 0 ? (
          <p className={styles.empty}>Your selection is empty.</p>
        ) : (
          <>
            <ul className={styles.list}>
              {items.map(({ product, quantity }) => {
                const line = lineTotal(product, quantity);
                return (
                  <li key={product.slug} className={styles.item}>
                    <div>
                      <p className={styles.name}>{product.name}</p>
                      <p className={styles.meta}>{product.amount} · Qty {quantity}</p>
                    </div>
                    <div className={styles.itemActions}>
                      <p className={styles.lineTotal}>{line !== null ? formatPrice(line) : "Unavailable"}</p>
                      <button type="button" className={styles.remove} onClick={() => removeItem(product.slug)}>Remove</button>
                      <div className={styles.qty}>
                        <button type="button" aria-label="Decrease quantity" onClick={() => updateQuantity(product.slug, quantity - 1)}>−</button>
                        <button type="button" aria-label="Increase quantity" onClick={() => updateQuantity(product.slug, quantity + 1)}>+</button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            {totals && (
              <div className={styles.totals}>
                <div><span>Subtotal</span><span>{formatPrice(totals.subtotal)}</span></div>
                {totals.discount > 0 && (
                  <div><span>Volume discount</span><span>−{formatPrice(totals.discount)}</span></div>
                )}
                <div className={styles.total}><span>Estimated total</span><span>{formatPrice(totals.total)}</span></div>
              </div>
            )}
            <Link href="/checkout" className="btn" style={{ width: "100%" }} onClick={onClose}>
              Proceed to Checkout
            </Link>
            <Link href="/cart" className="btn-text" style={{ marginTop: "0.75rem", display: "inline-block" }} onClick={onClose}>
              View full cart →
            </Link>
          </>
        )}
      </aside>
    </>
  );
}
