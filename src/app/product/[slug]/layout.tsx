import type { Metadata } from "next";
import { getProductBySlug } from "@/data/products";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: `${product.name} — ${product.amount} · ${product.price}. Research use only.`,
  };
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return children;
}
