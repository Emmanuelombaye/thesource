"use client";

import { useState } from "react";
import Image from "next/image";
import { getProductImage } from "@/lib/productImages";
import VialVisual from "./VialVisual";
import type { Product } from "@/data/products";
import styles from "./ProductImage.module.css";

interface ProductImageProps {
  product: Product;
  size?: "card" | "detail";
  priority?: boolean;
}

export default function ProductImage({ product, size = "card", priority = false }: ProductImageProps) {
  const src = getProductImage(product.slug);
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <VialVisual product={product} size={size === "detail" ? "lg" : "sm"} />;
  }

  return (
    <Image
      src={src}
      alt={product.name}
      fill
      className={styles.img}
      sizes={size === "detail" ? "(max-width: 768px) 100vw, 560px" : "(max-width: 768px) 50vw, 260px"}
      priority={priority}
      onError={() => setFailed(true)}
    />
  );
}
