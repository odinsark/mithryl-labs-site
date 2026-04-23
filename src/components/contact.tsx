import { Reveal } from "@/components/reveal";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="mb-6 font-display text-lg uppercase tracking-[0.3em] text-mithril">
            Get in touch
          </h2>
          <p className="text-base leading-relaxed text-foreground-muted sm:text-lg">
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
        </Reveal>
      </div>
    </section>
  );
}
