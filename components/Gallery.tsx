import Image from "next/image";
import Reveal from "./Reveal";
import { IMG } from "@/lib/data";

export default function Gallery() {
  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <p className="font-body tracking-[0.25em] text-xs uppercase mb-3 text-center text-rust">
            In the Wild
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-center mb-12 text-oxblood">
            Our Gallery
          </h2>
        </Reveal>
        <div className="flex gap-5 overflow-x-auto gp-scrollbar pb-4">
          {IMG.gallery.map((src, i) => (
            <div key={i} className="relative flex-shrink-0 w-[240px] h-[320px]">
              <Image src={src} alt="Goan Parampara gallery" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
