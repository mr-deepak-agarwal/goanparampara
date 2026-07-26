import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="bg-ivory-deep py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-4 text-oxblood">
            Got a Question or Feedback?
          </h2>
          <p className="font-body text-base mb-10 text-ink">
            Have a question about a weave, a custom order, or just want to say
            hello? We&apos;d love to hear from you.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <form className="flex flex-col gap-4 font-body">
            <input
              type="text"
              placeholder="Name"
              className="px-4 py-3 bg-white outline-none border border-gold-light"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-3 bg-white outline-none border border-gold-light"
            />
            <textarea
              placeholder="Comment or Message"
              rows={4}
              className="px-4 py-3 bg-white outline-none border border-gold-light"
            />
            <button
              type="submit"
              className="self-center px-9 py-3 text-sm tracking-wide mt-2 bg-oxblood text-ivory"
            >
              Submit
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
