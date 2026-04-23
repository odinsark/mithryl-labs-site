import { Reveal } from "@/components/reveal";

const services = [
  {
    rune: "◈",
    title: "Websites",
    pain: "For businesses whose site is slow, dated, or held hostage by the agency that built it.",
    body: "Custom-built sites — no templates, no drag-and-drop page builders, no 'it only works if you pay us for hosting.' Fast, easy for your team to update, and yours to keep. Launch-ready in weeks, not quarters.",
  },
  {
    rune: "⟡",
    title: "AI Agents",
    pain: "For businesses that know AI matters but can't see a clear path to actually using it.",
    body: "We'll find the one workflow in your business where AI will pay for itself — then I'll build the agent that does it. Trained on your data, fit to your voice, explained in plain English so nobody on your team is afraid of it.",
  },
  {
    rune: "❖",
    title: "Automations",
    pain: "For businesses bleeding hours to copy-paste, manual approvals, and tools that don't talk to each other.",
    body: "I'll wire your existing systems together so data moves on its own, approvals don't rot in inboxes, and your team stops doing $15/hour work in a business that can't afford to lose the time.",
  },
  {
    rune: "✦",
    title: "Custom Software",
    pain: "For businesses where every SaaS tool is almost right but none of them actually fit.",
    body: "Internal dashboards, client portals, niche apps — built around how your business actually works instead of forcing you to bend around a generic product. Priced like a project, not a six-figure enterprise rollout.",
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
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground-muted sm:text-lg">
              No menu of 50 services. No 'we do a bit of everything.' Four
              disciplines, sharpened until they&rsquo;re sharp.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 100}>
              <article className="mithril-border group relative overflow-hidden rounded-2xl p-8 transition-transform hover:-translate-y-1">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-60"
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
                  <p className="mt-3 text-sm italic leading-relaxed text-accent">
                    {service.pain}
                  </p>
                  <p className="mt-5 text-base leading-relaxed text-foreground-muted">
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
