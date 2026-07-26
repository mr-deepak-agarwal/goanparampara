import Image from "next/image";
import { ArrowRight } from "lucide-react";
import WovenBorder from "./WovenBorder";
import Reveal from "./Reveal";
import { IMG } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative w-full h-[92vh] min-h-[560px]">
      <div className="absolute inset-0">
        <Image
          src={IMG.hero}
          alt="Kunbi saree draped"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(43,23,18,0.55) 0%, rgba(62,15,23,0.55) 55%, rgba(62,15,23,0.85) 100%)",
          }}
        />
      </div>

      <div className="absolute top-0 left-0 right-0">
        <WovenBorder height={8} />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <Reveal>
          <p className="font-body tracking-[0.3em] text-xs md:text-sm uppercase mb-5 text-gold-light">
            Kunbi Sarees &middot; Goa
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1
            className="font-display leading-[1.05] mb-6 text-ivory"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.6rem)" }}
          >
            Handwoven by Heritage,
            <br />
            Styled for Today
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-body max-w-xl mx-auto text-base md:text-lg mb-9 text-ivory-deep">
            Woven by hand on Goa&apos;s traditional looms — where every thread
            carries a story centuries in the making.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="#collection"
              className="font-body text-sm tracking-wide px-8 py-3 flex items-center gap-2 bg-gold text-oxblood-dark"
            >
              Explore Sarees <ArrowRight size={16} />
            </a>
            <a href="#story" className="font-body text-sm tracking-wide gp-underline text-ivory">
              Our Story
            </a>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <WovenBorder height={8} />
      </div>
    </section>
  );
}
