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
    ? "(max-width: 768px) 92vw, 520px"
    : isCollection
      ? "(max-width: 600px) 88vw, (max-width: 1100px) 42vw, 300px"
      : "(max-width: 768px) 45vw, 260px";

  if (isCollection && !isDetail) {
    return (
      <div className={styles.collectionWrap}>
        <Image
          src={src}
          alt={`${product.name} ${product.amount}`}
          fill
          className={className}
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          quality={75}
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={`${product.name} ${product.amount}`}
      fill
      className={className}
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      quality={isDetail ? 80 : 75}
      onError={() => setFailed(true)}
    />
  );
}
