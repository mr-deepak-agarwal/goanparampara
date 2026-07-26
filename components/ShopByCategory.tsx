import Link from "next/link";
import Reveal from "./Reveal";
import { NAV_LINKS } from "@/lib/data";

export default function ShopByCategory() {
  return (
    <section className="bg-oxblood-dark py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl text-center mb-14 text-ivory">
            Shop by Category
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {NAV_LINKS.map((cat, i) => (
            <Reveal key={cat.label} delay={i * 0.07}>
              <Link
                href={cat.href}
                className="gp-card flex items-center justify-center text-center py-10 px-3 border border-gold text-ivory"
              >
                <span className="font-display text-lg">{cat.label}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
