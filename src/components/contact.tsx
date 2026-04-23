import { Reveal } from "@/components/reveal";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-8 sm:py-10">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="mithril-border relative overflow-hidden rounded-3xl p-10 text-center sm:p-16">
            <div
              aria-hidden
              className="forge-pulse pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 0%, var(--accent-glow) 0%, transparent 60%)",
                opacity: 0.25,
              }}
            />
            <div className="relative">
              <p className="font-display text-sm uppercase tracking-[0.4em] text-mithril">
                Start the conversation
              </p>
              <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Tell me what&rsquo;s <span className="mithril-text">broken</span>.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-foreground-muted sm:text-lg">
                No sales dance. No discovery-call gauntlet. Email me with
                what&rsquo;s slowing you down, and I&rsquo;ll reply within a
                business day with a straight answer on whether I can help — and
                if I can&rsquo;t, who I&rsquo;d point you at instead.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="mailto:ben@mithryllabs.com"
                  className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-foreground px-8 text-sm font-medium uppercase tracking-widest text-background transition-transform hover:-translate-y-0.5"
                >
                  <span className="relative z-10">ben@mithryllabs.com</span>
                  <span
                    aria-hidden
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-accent-glow/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.3em] text-foreground-muted">
                <span>Palatine, IL</span>
                <span className="hidden h-1 w-1 rounded-full bg-mithril sm:block" />
                <span>Remote-first</span>
                <span className="hidden h-1 w-1 rounded-full bg-mithril sm:block" />
                <span>Taking 2 new clients this quarter</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
