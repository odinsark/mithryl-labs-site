import { Reveal } from "@/components/reveal";

const services = [
  {
    rune: "◈",
    title: "Websites",
    tagline: "Armor for your brand.",
    body: "Fast, beautifully built sites with no bloat and no templates. Crafted to load in a blink, rank on Google, and actually convert — from the copy to the final animation.",
  },
  {
    rune: "⟡",
    title: "AI Agents",
    tagline: "A spellbook for your team.",
    body: "Custom AI agents that handle the tedious parts of your business — research, outreach, summaries, scheduling. Built with Claude, purpose-fit, and yours to keep.",
  },
  {
    rune: "❖",
    title: "Automations",
    tagline: "The invisible smith.",
    body: "Workflows that quietly replace the hours you waste on copy-paste work. Spreadsheets that talk to your tools. Tools that talk to each other. Less chaos, more output.",
  },
  {
    rune: "✦",
    title: "Custom Software",
    tagline: "One-of-a-kind blades.",
    body: "Internal dashboards, client portals, niche apps — if the off-the-shelf tools don't fit, I'll forge one that does. Built to scale with you, not against you.",
  },
];

export function Services() {
  return (
    <section
      id="craft"
      className="relative px-6 py-32 sm:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-20 text-center">
            <p className="font-display text-sm uppercase tracking-[0.4em] text-mithril">
              The Craft
            </p>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              What I <span className="mithril-text">forge</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground-muted">
              Every project is one-off. No recycled themes, no cookie-cutter agency
              playbooks — just tools built for the shape of your business.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 100}>
              <article className="mithril-border group relative overflow-hidden rounded-2xl p-8 transition-transform hover:-translate-y-1">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-60"
                  style={{ background: "var(--accent-glow)" }}
                />
                <div className="relative">
                  <div className="mb-6 flex items-baseline justify-between">
                    <span className="font-display text-4xl text-mithril">
                      {service.rune}
                    </span>
                    <span className="font-display text-xs uppercase tracking-[0.3em] text-foreground-muted">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm italic text-accent">
                    {service.tagline}
                  </p>
                  <p className="mt-6 text-base leading-relaxed text-foreground-muted">
                    {service.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
