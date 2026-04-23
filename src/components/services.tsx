import { Reveal } from "@/components/reveal";

const services = [
  {
    title: "Websites",
    body: "Custom-built, fast, and easy for your team to update.",
  },
  {
    title: "AI Agents",
    body: "Purpose-built for a specific workflow in your business.",
  },
  {
    title: "Automations",
    body: "Existing tools wired together so data moves on its own.",
  },
  {
    title: "Custom Software",
    body: "Internal dashboards, client portals, niche apps.",
  },
];

export function Services() {
  return (
    <section id="work" className="relative px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="mb-6 font-display text-lg uppercase tracking-[0.3em] text-mithril">
            What I build
          </h2>
        </Reveal>

        <dl>
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 60}>
              <div className="grid grid-cols-1 gap-2 border-t border-rule py-6 sm:grid-cols-[200px_1fr] sm:gap-8">
                <dt className="font-display text-xl text-foreground">
                  {service.title}
                </dt>
                <dd className="text-base leading-relaxed text-foreground-muted">
                  {service.body}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
