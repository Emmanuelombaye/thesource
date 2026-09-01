"use client";

import { useState } from "react";
import Link from "next/link";
import StateMessage from "@/components/StateMessage";
import { useCart } from "@/context/CartContext";
import { cartTotalWithDiscounts, formatPrice, generateOrderNumber } from "@/lib/cart";
import styles from "./checkout.module.css";

type PaymentMethod = "card" | "zelle" | "venmo" | "cashapp";

const paymentOptions: { id: PaymentMethod; label: string; note: string }[] = [
  { id: "card", label: "Card", note: "Payment instructions sent by email" },
  { id: "zelle", label: "Zelle", note: "Send payment with your order number in the memo" },
  { id: "venmo", label: "Venmo", note: "Send payment with your order number in the memo" },
  { id: "cashapp", label: "Cash App", note: "Send payment with your order number in the memo" },
];

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const [payment, setPayment] = useState<PaymentMethod>("card");
  const [ruoConfirmed, setRuoConfirmed] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [orderNumber, setOrderNumber] = useState<string | null>(null);

  const totals = cartTotalWithDiscounts(items);

  if (items.length === 0 && !orderNumber) {
    return (
      <div className="section">
        <div className="container">
          <StateMessage type="empty" />
        </div>
      </div>
    );
  }

  if (orderNumber) {
    return (
      <section className="section">
        <div className={`container ${styles.confirm}`}>
          <p className="label label-gold">Order Confirmed</p>
          <h1 className={styles.confirmTitle}>Thank you.</h1>
          <p className={styles.confirmText}>
            Your order <strong>{orderNumber}</strong> has been received.
            {payment !== "card" && (
              <> Send payment via {paymentOptions.find((p) => p.id === payment)?.label} with your order number in the memo. Your order ships once payment is received.</>
            )}
            {payment === "card" && <> You will receive tracking by email within 24–48 hours.</>}
          </p>
          <Link href="/collection" className="btn">Continue Shopping</Link>
        </div>
      </section>
    );
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!ruoConfirmed) {
      setError("Please confirm the research-use policy to continue.");
      return;
    }

    if (!totals) {
      setError("Some items have unavailable pricing. Contact admin@thesource.gold to complete your order.");
      return;
    }

    setSubmitting(true);
    const num = generateOrderNumber();

    setTimeout(() => {
      setOrderNumber(num);
      clearCart();
      setSubmitting(false);
    }, 600);
  };

  return (
    <section className="section">
      <div className="container">
        <p className="label label-gold">Checkout</p>
        <h1 className={styles.title}>Complete your order</h1>
        <p className={styles.interimNote}>
          Order submission is handled by the house. Payment instructions follow by email — no card is charged on this site.
        </p>

        <div className={styles.layout}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <fieldset className={styles.fieldset}>
              <legend className="label">Contact</legend>
              <input type="text" name="name" className="input" placeholder="Full name" required aria-label="Full name" />
              <input type="email" name="email" className="input" placeholder="Email address" required aria-label="Email address" />
              <input type="text" name="address" className="input" placeholder="Shipping address" required aria-label="Shipping address" />
            </fieldset>

            <fieldset className={styles.fieldset}>
              <legend className="label">Payment</legend>
              <p className={styles.paymentNote}>Card · Zelle · Venmo · Cash App. Complimentary U.S. shipping.</p>
              <div className={styles.paymentGrid}>
                {paymentOptions.map((opt) => (
                  <label key={opt.id} className={`${styles.paymentOption} ${payment === opt.id ? styles.paymentActive : ""}`}>
                    <input
                      type="radio"
                      name="payment"
                      value={opt.id}
                      checked={payment === opt.id}
                      onChange={() => setPayment(opt.id)}
                    />
                    <span className={styles.paymentLabel}>{opt.label}</span>
                    <span className={styles.paymentDesc}>{opt.note}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className={styles.ruoCheck}>
              <input
                type="checkbox"
                checked={ruoConfirmed}
                onChange={(e) => setRuoConfirmed(e.target.checked)}
                required
              />
              <span>
                I confirm that I am a qualified researcher and that all products will be used
                exclusively for laboratory research purposes. Not for human consumption.
              </span>
            </label>

            {error && <p className="error-text" role="alert">{error}</p>}

            <button type="submit" className="btn" disabled={submitting}>
              {submitting ? "Placing order…" : "Place Order"}
            </button>
          </form>

          <aside className={styles.summary}>
            <p className="label label-gold">Your Selection</p>
            <ul className={styles.summaryList}>
              {items.map(({ product, quantity }) => (
                <li key={product.slug}>
                  <div>
                    <span className={styles.summaryName}>{product.name}</span>
                    <span className={styles.summaryMeta}>{product.amount} × {quantity}</span>
                  </div>
                  <span>{product.price !== "Unavailable" ? product.price : "—"}</span>
                </li>
              ))}
            </ul>
            {totals ? (
              <div className={styles.totals}>
                <div><span>Subtotal</span><span>{formatPrice(totals.subtotal)}</span></div>
                {totals.discount > 0 && (
                  <div><span>Volume discount</span><span>−{formatPrice(totals.discount)}</span></div>
                )}
                <div><span>Shipping</span><span>Complimentary</span></div>
                <div className={styles.grandTotal}>
                  <span>Total</span>
                  <span>{formatPrice(totals.total)}</span>
                </div>
              </div>
            ) : (
              <p className={styles.priceNote}>Pricing confirmed by the house at checkout.</p>
            )}
          </aside>
        </div>

        <p className={styles.ruo}>
          For laboratory research use only. Not for human consumption.
        </p>
      </div>
    </section>
  );
}
