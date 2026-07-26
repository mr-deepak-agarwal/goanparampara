import Image from "next/image";
import Reveal from "./Reveal";
import { IMG } from "@/lib/data";

export default function OurStory() {
  return (
    <section id="story" className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
      <Reveal>
        <div className="relative">
          <div className="border-2 border-gold p-2.5">
            <div className="relative w-full h-[420px]">
              <Image src={IMG.story1} alt="Kunbi weaving detail" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-5 -right-5 w-28 h-28 hidden md:block border-2 border-gold">
            <Image src={IMG.story2} alt="Kunbi fabric texture" fill className="object-cover" />
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="font-body tracking-[0.25em] text-xs uppercase mb-4 text-rust">Our Heritage</p>
        <h2 className="font-display text-3xl md:text-4xl mb-6 leading-tight text-oxblood">
          Reviving Kunbi — Goa&apos;s Indigenous Weaving Legacy
        </h2>
        <p className="font-body text-base leading-relaxed mb-4 text-ink">
          Kunbi fabric is a living thread of Goa&apos;s cultural memory — born
          from the indigenous Kunbi tribe, worn for generations in earthy reds
          with a simple, striking border and pallu. Colonial influence nearly
          erased it. Today, we&apos;re bringing it back — not as a museum
          piece, but as clothing you&apos;ll actually reach for.
        </p>
        <p className="font-body text-base leading-relaxed mb-8 text-ink">
          Every saree we make supports the artisans, farmers, and dye-makers
          keeping this craft alive in Goa.
        </p>
        <a href="/about" className="font-body text-sm tracking-wide gp-underline text-oxblood">
          Read Our Full Story →
        </a>
      </Reveal>
    </section>
  );
}
