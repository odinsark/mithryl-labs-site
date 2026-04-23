import { Reveal } from "@/components/reveal";

const pains = [
  {
    glyph: "◇",
    body: "Some tell me they&rsquo;re the bottleneck in their own business. Every decision, every approval, every odd request flows through them, because nothing is really systematized.",
  },
  {
    glyph: "◇",
    body: "Others say they know they should be doing more with AI, but the noise is deafening and they don&rsquo;t really trust the people selling it.",
  },
  {
    glyph: "◇",
    body: "Some say their team spends half the week moving data between tools that don&rsquo;t talk to each other, and they can feel the real work getting buried.",
  },
  {
    glyph: "◇",
    body: "Others tell me their website feels tired, slow, or off-brand, and that it&rsquo;s starting to show up in how customers see them.",
  },
  {
    glyph: "◇",
    body: "Some describe a bigger version of the same problem: they&rsquo;ve outgrown every off-the-shelf tool, but hiring a dev team isn&rsquo;t remotely on the table.",
  },
  {
    glyph: "◇",
    body: "And almost everyone says the same thing underneath all of it: they feel stuck, a little behind, and not sure who to trust to help.",
  },
];

export function PainPoints() {
  return (
    <section className="relative px-6 py-8 sm:py-10">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-8 text-center">
            <p className="font-display text-sm uppercase tracking-[0.4em] text-mithril">
              You know how it goes
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
              When small business owners talk to me, they tend to{" "}
              <span className="mithril-text">say the same things</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
              Not all of this will apply to you. Some might. If any of it does,
              you&rsquo;re probably in the right place.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 sm:auto-rows-fr">
          {pains.map((pain, i) => (
            <Reveal key={i} delay={i * 60} className="h-full">
              <div className="flex h-full gap-4 rounded-xl border border-rule bg-background-secondary/50 p-5 transition-colors hover:border-mithril/40">
                <span className="mt-1 font-display text-xl text-mithril">
                  {pain.glyph}
                </span>
                <p
                  className="text-sm leading-relaxed text-foreground-muted sm:text-base"
                  dangerouslySetInnerHTML={{ __html: pain.body }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
