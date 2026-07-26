"use client";

import { useState, useTransition } from "react";
import { addToCart } from "@/lib/cart-actions";
import type { MedusaProduct } from "@/lib/medusa-data";

export default function AddToCartForm({ product }: { product: MedusaProduct }) {
  const variants = product.variants || [];
  const [selected, setSelected] = useState(variants[0]?.id || "");
  const [isPending, startTransition] = useTransition();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    if (!selected) return;
    startTransition(async () => {
      await addToCart(selected, 1);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    });
  };

  return (
    <div className="flex flex-col gap-4">
      {variants.length > 1 && (
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="px-4 py-3 bg-white border border-gold-light font-body"
        >
          {variants.map((v) => (
            <option key={v.id} value={v.id}>
              {v.title}
            </option>
          ))}
        </select>
      )}
      <button
        onClick={handleAdd}
        disabled={isPending || !selected}
        className="px-8 py-3 text-sm tracking-wide bg-oxblood text-ivory disabled:opacity-60 font-body"
      >
        {isPending ? "Adding..." : added ? "Added to Cart ✓" : "Add to Cart"}
      </button>
    </div>
  );
}
