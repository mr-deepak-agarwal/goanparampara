import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { FEATURED_PRODUCTS } from "@/lib/data";

export default function FeaturedCollection() {
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
          <Link href="/new-arrivals" className="font-body text-sm gp-underline text-oxblood">
            View All →
          </Link>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {FEATURED_PRODUCTS.map((product, i) => (
          <Reveal key={product.id} delay={i * 0.08}>
            <Link href={`/product/${product.id}`} className="gp-card block bg-white">
              <div className="relative overflow-hidden aspect-[3/4]">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-display text-base mb-1 text-ink">{product.name}</h3>
                <p className="font-body text-sm text-rust">{product.price}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
