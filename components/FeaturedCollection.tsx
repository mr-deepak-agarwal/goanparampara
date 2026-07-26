import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { getProducts, formatPrice } from "@/lib/medusa-data";

export default async function FeaturedCollection() {
  let products: Awaited<ReturnType<typeof getProducts>> = [];
  try {
    products = await getProducts(4);
  } catch {
    // Medusa not reachable yet (e.g. .env.local not set up) — render nothing
    // rather than crashing the homepage.
  }

  if (products.length === 0) return null;

  return (
    <section id="collection" className="max-w-7xl mx-auto px-6 py-24">
      <Reveal>
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="font-body tracking-[0.25em] text-xs uppercase mb-3 text-rust">
              New Arrivals
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-oxblood">This Season&apos;s Weave</h2>
          </div>
          <Link href="/products" className="font-body text-sm gp-underline text-oxblood">
            View All →
          </Link>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, i) => {
          const price = product.variants?.[0]?.prices?.[0];
          return (
            <Reveal key={product.id} delay={i * 0.08}>
              <Link href={`/product/${product.handle}`} className="gp-card block bg-white">
                <div className="relative overflow-hidden aspect-[3/4]">
                  {product.thumbnail && (
                    <Image src={product.thumbnail} alt={product.title} fill className="object-cover" />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base mb-1 text-ink">{product.title}</h3>
                  {price && (
                    <p className="font-body text-sm text-rust">
                      {formatPrice(price.amount, price.currency_code.toUpperCase())}
                    </p>
                  )}
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
