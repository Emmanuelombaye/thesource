import type { Product } from "@/data/products";

/** Parse "$200.00" → 200. Returns null if unavailable. */
export function parsePrice(price: string): number | null {
  if (!price || price === "Unavailable" || price === "—") return null;
  const n = parseFloat(price.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : null;
}

export function productIsPurchasable(product: Product): boolean {
  if (product.status === "sold_out") return false;
  return parsePrice(product.price) !== null;
}

export function formatPrice(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

export function lineTotal(product: Product, quantity: number): number | null {
  const unit = parsePrice(product.price);
  if (unit === null) return null;
  return unit * quantity;
}

export function cartSubtotal(
  items: { product: Product; quantity: number }[]
): number | null {
  let total = 0;
  for (const { product, quantity } of items) {
    const line = lineTotal(product, quantity);
    if (line === null) return null;
    total += line;
  }
  return total;
}

/** Volume pricing — 5+ = 5%, 10+ = 10%, house ceiling 30% with sale stacking. */
export const VOLUME_DISCOUNT_CEILING = 0.3;

export function volumeDiscountRate(quantity: number, saleRate = 0): number {
  let volume = 0;
  if (quantity >= 10) volume = 0.1;
  else if (quantity >= 5) volume = 0.05;
  return Math.min(volume + saleRate, VOLUME_DISCOUNT_CEILING);
}

export function cartTotalWithDiscounts(
  items: { product: Product; quantity: number }[],
  saleRate = 0
): { subtotal: number; discount: number; total: number } | null {
  let subtotal = 0;
  let discount = 0;

  for (const { product, quantity } of items) {
    const unit = parsePrice(product.price);
    if (unit === null) return null;
    const line = unit * quantity;
    subtotal += line;
    discount += line * volumeDiscountRate(quantity, saleRate);
  }

  return {
    subtotal,
    discount,
    total: subtotal - discount,
  };
}

export function generateOrderNumber(): string {
  const d = new Date();
  const y = d.getFullYear().toString().slice(-2);
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const r = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `TS-${y}${m}-${r}`;
}
