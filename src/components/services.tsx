import { Reveal } from "@/components/reveal";

const services = [
  {
    rune: "◈",
    title: "Websites",
    tagline: "Fast, sharp, yours.",
    body: "Custom marketing sites built from scratch — not templates. Fast to load, easy to update, and designed to actually convert. SEO and analytics wired in from day one.",
  },
  {
    rune: "⟡",
    title: "AI Agents",
    tagline: "Put AI to work on the real stuff.",
    body: "Custom agents that do the tedious parts of your business — research, outreach, summaries, internal Q&A. Built with Claude, fine-tuned to your voice and workflows, and fully owned by you.",
  },
  {
    rune: "❖",
    title: "Automations",
    tagline: "Quietly replace the busywork.",
    body: "Workflows that wire your tools together so data stops living in six places. Less copy-paste, fewer dropped balls, more of your team's time back.",
  },
  {
    rune: "✦",
    title: "Custom Software",
    tagline: "When off-the-shelf doesn't fit.",
    body: "Internal dashboards, client portals, niche apps — built around how your business actually works. Designed to grow with you, not get in your way.",
  },
];

export function Services() {
  return (
    <section id="work" className="relative px-6 py-8 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-8 text-center">
            <p className="font-display text-sm uppercase tracking-[0.4em] text-mithril">
              What I build
            </p>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Four things, done <span className="mithril-text">really well</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground-muted sm:text-lg">
              Every engagement is custom. No recycled themes, no cookie-cutter
              agency playbooks — just tools built for the shape of your business.
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
