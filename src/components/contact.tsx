import { Reveal } from "@/components/reveal";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-8 sm:py-10">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="mithril-border relative overflow-hidden rounded-3xl p-10 sm:p-14">
            <div
              aria-hidden
              className="forge-pulse pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 0%, var(--accent-glow) 0%, transparent 60%)",
                opacity: 0.2,
              }}
            />
            <div className="relative">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Get in touch
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground-muted sm:text-lg">
                Email me about what you&rsquo;re working on. I&rsquo;ll reply
                within a business day.
              </p>

              <div className="mt-8">
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
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
