import { Reveal } from "@/components/reveal";

const services = [
  {
    rune: "◈",
    title: "Websites",
    pain: "For businesses whose site isn't doing the work it should.",
    body: "Custom-built sites, not templates. Designed to be fast, findable, easy for your team to update, and actually reflect the business you're running today. Yours to keep, wherever you want it hosted.",
  },
  {
    rune: "⟡",
    title: "AI Agents",
    pain: "For businesses that know AI matters but haven't found their first real use for it.",
    body: "We start with the one workflow in your business where AI will pay for itself. Then I build the agent that runs it. Trained on your data, fit to your voice, and explained in plain English so your team isn't guessing.",
  },
  {
    rune: "❖",
    title: "Automations",
    pain: "For businesses where too much work still lives in people's heads and inboxes.",
    body: "I wire your existing systems together so data moves on its own, approvals don't rot, and the routine stuff happens quietly in the background. Your team keeps the thinking work; the software handles the shuffling.",
  },
  {
    rune: "✦",
    title: "Custom Software",
    pain: "For businesses bending around tools, instead of tools bending around them.",
    body: "Internal dashboards, client portals, niche apps, built around how your business actually works. Priced like a project, not a six-figure enterprise rollout. Scales with you, not against you.",
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
              Not a menu of fifty services. Four disciplines, each sharpened
              until it&rsquo;s sharp, and deliberately chosen because they
              tend to work together.
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
