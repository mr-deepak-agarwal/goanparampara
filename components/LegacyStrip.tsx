import { Leaf, MapPin, ShoppingBag, ArrowRight } from "lucide-react";

const ITEMS = [
  { label: "Plant-Based Dyes", Icon: Leaf },
  { label: "Made in Goa", Icon: MapPin },
  { label: "Pure Cotton & Silk", Icon: ShoppingBag },
  { label: "Handwoven Craft", Icon: ArrowRight },
];

export default function LegacyStrip() {
  return (
    <section className="bg-oxblood">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6 py-8 text-center">
        {ITEMS.map(({ label, Icon }) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <Icon size={20} className="text-gold-light" />
            <span className="text-xs md:text-sm tracking-wide text-ivory">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
