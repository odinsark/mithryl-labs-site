import { Reveal } from "@/components/reveal";

const pains = [
  {
    glyph: "◇",
    title: "Your website looks like 2019",
    body: "Slow. Hard to update. The agency that built it ghosted six months after launch. Customers bounce before they read the first paragraph.",
  },
  {
    glyph: "◇",
    title: "You know you need AI — you just don't know where to start",
    body: "Everyone's telling you to adopt it. The tools multiply every week. You don't want a ChatGPT subscription, you want something that actually does the job.",
  },
  {
    glyph: "◇",
    title: "Your team is copy-pasting between five tools",
    body: "Data lives in the CRM, the spreadsheet, the email, the PDF, and someone's head. Everyone's busy. Nothing connects. Hours leak every week.",
  },
  {
    glyph: "◇",
    title: "You got burned by an agency once and swore never again",
    body: "Paid $20K for a template with your logo on it. Missed deadlines. Radio silence after launch. You'd rather suffer in Excel than risk that again.",
  },
];

export function PainPoints() {
  return (
    <section className="relative px-6 py-8 sm:py-10">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-8 text-center">
            <p className="font-display text-sm uppercase tracking-[0.4em] text-mithril">
              Sound familiar?
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
              If any of this rings true, we should{" "}
              <span className="mithril-text">talk</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {pains.map((pain, i) => (
            <Reveal key={pain.title} delay={i * 80}>
              <div className="flex gap-4 rounded-xl border border-rule bg-background-secondary/50 p-5 transition-colors hover:border-mithril/40">
                <span className="mt-1 font-display text-xl text-mithril">
                  {pain.glyph}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
                    {pain.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                    {pain.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
