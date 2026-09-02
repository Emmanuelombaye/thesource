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
  const isCollection = product.category === "collection";
  const isDetail = size === "detail";

  if (!src || failed) {
    return <VialVisual product={product} size={isDetail ? "lg" : "sm"} />;
  }

  const className = `${styles.img} ${isDetail ? styles.detail : styles.card} ${isCollection ? styles.collection : styles.atelier}`;
  const sizes = isDetail
    ? "(max-width: 768px) 100vw, 560px"
    : isCollection
      ? "(max-width: 480px) 90vw, (max-width: 1100px) 45vw, 320px"
      : "(max-width: 768px) 50vw, 280px";

  if (isCollection && !isDetail) {
    return (
      <div className={styles.collectionWrap}>
        <Image
          src={src}
          alt={product.name}
          fill
          className={className}
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={product.name}
      fill
      className={className}
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      onError={() => setFailed(true)}
    />
  );
}
