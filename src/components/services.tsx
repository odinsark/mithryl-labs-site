import { Reveal } from "@/components/reveal";

const services = [
  {
    rune: "◈",
    title: "Websites",
    body: "Custom marketing sites, client portals, and private team wikis. Built in Next.js, fast and search-friendly.",
  },
  {
    rune: "⟡",
    title: "AI Agents",
    body: "Claude-powered agents tuned to a specific workflow: research, content generation, document analysis, internal Q&A. Trained on your data.",
  },
  {
    rune: "❖",
    title: "Automations",
    body: "Webhooks, scheduled pipelines, and cross-tool integrations. Meeting transcripts become coaching emails. Data moves on its own.",
  },
  {
    rune: "✦",
    title: "Custom Software",
    body: "Internal dashboards and team-facing tools that refresh automatically from your data sources. Built around how your business actually works.",
  },
];

export function Services() {
  return (
    <section id="work" className="relative px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="mb-8 text-center font-display text-lg uppercase tracking-[0.3em] text-mithril">
            What I build
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 sm:auto-rows-fr">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 100} className="h-full">
              <article className="mithril-border group relative flex h-full flex-col overflow-hidden rounded-2xl p-8 transition-transform hover:-translate-y-1">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-60"
                  style={{ background: "var(--accent-glow)" }}
                />
                <div className="relative">
                  <div className="mb-6 flex items-baseline justify-between">
                    <span className="font-display text-3xl text-mithril">
                      {service.rune}
                    </span>
                    <span className="font-display text-xs uppercase tracking-[0.3em] text-foreground-muted">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-foreground-muted">
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
