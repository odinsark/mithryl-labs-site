import { Reveal } from "@/components/reveal";

const steps = [
  {
    numeral: "01",
    title: "Discovery",
    body: "We talk. I listen longer than most consultants do — because I can't fix what I don't understand. By the end of the first call, I can usually tell you which part of your business is leaking the most time and whether I'm the right person to help fix it.",
  },
  {
    numeral: "02",
    title: "Proposal",
    body: "A clear, written scope — deliverables, timeline, fixed price. No open-ended hourly billing. No 'it depends.' No surprise invoices. If the price isn't right or the scope isn't right, we fix it now — before either of us is committed.",
  },
  {
    numeral: "03",
    title: "Build",
    body: "I build in the open. You see progress every week, touch the work as it comes together, and shape it with me as we go. No six-month black box, no 'big reveal' at the end. Nothing ships that you haven't used yourself.",
  },
  {
    numeral: "04",
    title: "Launch & Support",
    body: "Launch day is a beginning, not an end. I stick around to tune, train your team, and handle the first round of 'wait, can we also do…?' that always comes up. You own everything — the code, the accounts, the keys. No vendor lock-in.",
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
          <div className="mb-8 text-center">
            <p className="font-display text-sm uppercase tracking-[0.4em] text-mithril">
              Process
            </p>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              No <span className="mithril-text">black boxes</span>. No ghosting.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground-muted sm:text-lg">
              You&rsquo;ve been burned before. Here&rsquo;s exactly what working
              together looks like — so you know what you&rsquo;re getting into.
            </p>
          </div>
        </Reveal>

        <ol className="relative space-y-8">
          <div
            aria-hidden
            className="absolute left-6 top-4 bottom-4 hidden w-px bg-gradient-to-b from-mithril/0 via-mithril/50 to-mithril/0 sm:block"
          />
          {steps.map((step, i) => (
            <Reveal key={step.numeral} delay={i * 80}>
              <li className="relative flex flex-col gap-4 sm:flex-row sm:gap-10">
                <div className="flex items-center gap-4 sm:w-32 sm:shrink-0 sm:flex-col sm:items-start sm:gap-2">
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-mithril/40 bg-background-secondary font-display text-sm text-accent">
                    {step.numeral}
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full border border-mithril/20"
                      style={{ transform: "scale(1.4)" }}
                    />
                  </span>
                  <span className="font-display text-xs uppercase tracking-[0.3em] text-foreground-muted sm:mt-2">
                    Step {i + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground-muted sm:text-lg">
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
