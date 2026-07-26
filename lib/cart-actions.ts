"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { sdk } from "./medusa-client";
import { getRegionId } from "./medusa-data";

const CART_COOKIE = "gp_cart_id";

async function getOrCreateCartId(): Promise<string> {
  const cookieStore = cookies();
  const existing = cookieStore.get(CART_COOKIE)?.value;
  if (existing) return existing;

  const region_id = await getRegionId();
  const { cart } = await sdk.store.cart.create({ region_id });
  cookieStore.set(CART_COOKIE, cart.id, {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    httpOnly: true,
    sameSite: "lax",
  });
  return cart.id;
}

export async function getCart() {
  const cookieStore = cookies();
  const cartId = cookieStore.get(CART_COOKIE)?.value;
  if (!cartId) return null;
  try {
    const { cart } = await sdk.store.cart.retrieve(cartId);
    return cart;
  } catch {
    return null;
  }
}

export async function addToCart(variantId: string, quantity = 1) {
  const cartId = await getOrCreateCartId();
  await sdk.store.cart.createLineItem(cartId, {
    variant_id: variantId,
    quantity,
  });
  revalidatePath("/cart");
}

export async function updateCartItem(lineItemId: string, quantity: number) {
  const cartId = await getOrCreateCartId();
  await sdk.store.cart.updateLineItem(cartId, lineItemId, { quantity });
  revalidatePath("/cart");
}

export async function removeCartItem(lineItemId: string) {
  const cartId = await getOrCreateCartId();
  await sdk.store.cart.deleteLineItem(cartId, lineItemId);
  revalidatePath("/cart");
}
