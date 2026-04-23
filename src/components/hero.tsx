import { Logo } from "@/components/logo";
import { Particles } from "@/components/particles";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-start overflow-hidden px-6 pb-16 pt-24">
      <div className="pointer-events-none absolute inset-0">
        <Particles />
      </div>

      <div
        aria-hidden
        className="forge-pulse pointer-events-none absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--accent-glow) 0%, transparent 60%)",
          opacity: 0.3,
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="mb-6 flex items-center justify-center">
          <Logo
            width={720}
            height={232}
            priority
            className="h-auto w-[min(320px,70vw)]"
          />
        </div>

        <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Small businesses deserve <span className="mithril-text">better software</span>.
        </h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground-muted sm:text-lg">
          I&rsquo;m Ben. I build custom websites, AI agents, and automations for
          small businesses — the kind of work you can&rsquo;t really buy off the
          shelf and shouldn&rsquo;t have to cobble together yourself.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-foreground px-8 text-sm font-medium uppercase tracking-widest text-background transition-transform hover:-translate-y-0.5"
          >
            <span className="relative z-10">Start a project</span>
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-accent-glow/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
          </a>
          <a
            href="#work"
            className="inline-flex h-12 items-center justify-center rounded-full border border-rule bg-surface px-8 text-sm font-medium uppercase tracking-widest text-foreground backdrop-blur-sm transition-colors hover:border-mithril"
          >
            What I build
          </a>
        </div>
      </div>
    </section>
  );
}
