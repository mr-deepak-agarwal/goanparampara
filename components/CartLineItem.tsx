"use client";

import { useTransition } from "react";
import { updateCartItem, removeCartItem } from "@/lib/cart-actions";
import { formatPrice } from "@/lib/medusa-data";

export default function CartLineItem({ item }: { item: any }) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex items-center justify-between gap-4 py-4 border-b border-gold-light font-body">
      <div>
        <p className="text-ink">{item.title}</p>
        <p className="text-sm text-rust">{formatPrice(item.unit_price)}</p>
      </div>
      <div className="flex items-center gap-3">
        <input
          type="number"
          min={1}
          defaultValue={item.quantity}
          className="w-16 border border-gold-light px-2 py-1"
          onBlur={(e) => {
            const qty = parseInt(e.target.value, 10);
            if (qty > 0) startTransition(() => updateCartItem(item.id, qty));
          }}
        />
        <button
          disabled={isPending}
          onClick={() => startTransition(() => removeCartItem(item.id))}
          className="text-sm text-oxblood underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
