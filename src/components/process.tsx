import { Reveal } from "@/components/reveal";

const steps = [
  {
    numeral: "01",
    title: "Discovery",
    body: "We talk. I learn your business and figure out whether I can help.",
  },
  {
    numeral: "02",
    title: "Proposal",
    body: "Written scope, fixed price, clear timeline. You can walk away with clarity whether you move forward or not.",
  },
  {
    numeral: "03",
    title: "Build",
    body: "I build in the open. You see progress weekly and shape the work as it comes together.",
  },
  {
    numeral: "04",
    title: "Launch",
    body: "I stay on to tune, train your team, and handle follow-ups. You own everything we built.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative px-6 py-8 sm:py-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mithril/40 to-transparent"
      />

      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mb-10 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            How it works
          </h2>
        </Reveal>

        <ol className="relative space-y-6">
          <div
            aria-hidden
            className="absolute left-6 top-4 bottom-4 hidden w-px bg-gradient-to-b from-mithril/0 via-mithril/50 to-mithril/0 sm:block"
          />
          {steps.map((step, i) => (
            <Reveal key={step.numeral} delay={i * 80}>
              <li className="relative flex flex-col gap-4 sm:flex-row sm:gap-10">
                <div className="flex items-center gap-4 sm:w-32 sm:shrink-0">
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-mithril/40 bg-background-secondary font-display text-sm text-accent">
                    {step.numeral}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-base leading-relaxed text-foreground-muted">
                    {step.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
