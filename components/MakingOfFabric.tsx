import Reveal from "./Reveal";

const STEPS = [
  {
    num: "01",
    title: "Naturally Dyed",
    body: "Earthy colors from iron oxide, rice water, indigo, and herbs — no chemicals, just tradition.",
  },
  {
    num: "02",
    title: "Hand-Loomed",
    body: "Woven on manual looms that need no electricity or water — 1.5 to 2 days per saree.",
  },
  {
    num: "03",
    title: "5.5 Metres of Craft",
    body: "Every piece is a full, breathable 5.5-metre saree, made to last generations.",
  },
];

export default function MakingOfFabric() {
  return (
    <section className="bg-ivory-deep py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-body tracking-[0.25em] text-xs uppercase mb-3 text-center text-rust">
            The Craft
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-center mb-14 text-oxblood">
            From Loom to Legacy
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-10">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.12}>
              <div className="text-center px-4">
                <span className="font-display text-4xl block mb-4 text-gold-light">{step.num}</span>
                <h3 className="font-display text-xl mb-3 text-oxblood">{step.title}</h3>
                <p className="font-body text-sm leading-relaxed text-ink">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
