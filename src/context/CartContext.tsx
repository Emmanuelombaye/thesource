"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type { Product } from "@/data/products";
import { getProductBySlug, resolveProductSlug } from "@/data/products";
import { productIsPurchasable } from "@/lib/cart";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "the-source-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as CartItem[];
        const refreshed = parsed
          .map((item) => {
            const product = getProductBySlug(resolveProductSlug(item.product.slug));
            if (!product) return null;
            return { product, quantity: item.quantity };
          })
          .filter((item): item is CartItem => Boolean(item));
        setItems(refreshed);
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, hydrated]);

  const addItem = useCallback((product: Product, quantity = 1) => {
    if (!productIsPurchasable(product)) return;

    setItems((prev) => {
      const existing = prev.find((i) => i.product.slug === product.slug);
      if (existing) {
        return prev.map((i) =>
          i.product.slug === product.slug
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { product, quantity }];
    });
  }, []);

  const removeItem = useCallback((slug: string) => {
    setItems((prev) => prev.filter((i) => i.product.slug !== slug));
  }, []);

  const updateQuantity = useCallback((slug: string, quantity: number) => {
    if (quantity < 1) {
      setItems((prev) => prev.filter((i) => i.product.slug !== slug));
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.product.slug === slug ? { ...i, quantity } : i))
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, itemCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
