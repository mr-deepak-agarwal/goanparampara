import { sdk } from "./medusa-client";

export type MedusaProduct = {
  id: string;
  handle: string;
  title: string;
  description: string | null;
  thumbnail: string | null;
  images?: { url: string }[];
  variants?: {
    id: string;
    title: string;
    prices?: { amount: number; currency_code: string }[];
  }[];
};

// Region ID is required by Medusa's pricing context. Cache it so we
// don't fetch it on every request.
let cachedRegionId: string | null = null;

export async function getRegionId(): Promise<string> {
  if (cachedRegionId) return cachedRegionId;
  const { regions } = await sdk.store.region.list();
  const region = regions.find((r: any) => r.currency_code === "inr") || regions[0];
  if (!region) throw new Error("No Medusa region found — create one in Settings → Regions.");
  cachedRegionId = region.id;
  return region.id;
}

export type MedusaCategory = {
  id: string;
  handle: string;
  name: string;
  description?: string | null;
};

// Note: ISR/caching is controlled by `export const revalidate = 60` on each
// page, not per-call here — the SDK's second argument is request headers,
// not Next.js fetch options.
export async function getProducts(limit = 12): Promise<MedusaProduct[]> {
  const region_id = await getRegionId();
  const { products } = await sdk.store.product.list({ limit, region_id });
  return products as MedusaProduct[];
}

export async function getProductByHandle(handle: string): Promise<MedusaProduct | null> {
  const region_id = await getRegionId();
  const { products } = await sdk.store.product.list({ handle, region_id });
  return (products[0] as MedusaProduct) || null;
}

export async function getCategoryByHandle(handle: string): Promise<MedusaCategory | null> {
  const { product_categories } = await sdk.store.category.list({ handle: [handle] });
  return (product_categories[0] as MedusaCategory) || null;
}

export async function getProductsByCategory(
  categoryHandle: string,
  limit = 48
): Promise<{ category: MedusaCategory | null; products: MedusaProduct[] }> {
  const category = await getCategoryByHandle(categoryHandle);
  if (!category) return { category: null, products: [] };

  const region_id = await getRegionId();
  const { products } = await sdk.store.product.list({
    category_id: [category.id],
    limit,
    region_id,
  });
  return { category, products: products as MedusaProduct[] };
}

export async function getAllCategories(): Promise<MedusaCategory[]> {
  const { product_categories } = await sdk.store.category.list({ limit: 50 });
  return product_categories as MedusaCategory[];
}

export function formatPrice(amountMinor: number, currency = "INR") {
  // Medusa stores amounts in the currency's minor unit for most setups.
  // If your prices display 100x too high, remove the /100 below.
  const amount = amountMinor / 100;
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
