import { Logo } from "@/components/logo";
import { Particles } from "@/components/particles";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-32">
      <div className="pointer-events-none absolute inset-0">
        <Particles />
      </div>

      {/* Central forge glow */}
      <div
        aria-hidden
        className="forge-pulse pointer-events-none absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--accent-glow) 0%, transparent 60%)",
          opacity: 0.35,
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="mb-10 flex items-center justify-center">
          <Logo
            width={560}
            height={180}
            priority
            className="h-auto w-[min(560px,80vw)] drop-shadow-[0_0_40px_rgba(139,184,255,0.15)]"
          />
        </div>

        <p className="font-display text-sm uppercase tracking-[0.4em] text-mithril">
          ✦ &nbsp; Forged for small business &nbsp; ✦
        </p>

        <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Software, <span className="mithril-text">forged like mithril</span>.
          <br className="hidden sm:block" />
          Lighter than it looks. Stronger than it needs to be.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground-muted">
          I build custom websites, AI agents, and automations for small businesses —
          the kind of craftsmanship that disappears into the work and makes everything
          around it feel easier. No bloat. No filler. Just tools that earn their keep.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-foreground px-8 text-sm font-medium uppercase tracking-widest text-background transition-transform hover:-translate-y-0.5"
          >
            <span className="relative z-10">Commission a Forging</span>
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-accent-glow/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
          </a>
          <a
            href="#craft"
            className="inline-flex h-12 items-center justify-center rounded-full border border-rule bg-surface px-8 text-sm font-medium uppercase tracking-widest text-foreground backdrop-blur-sm transition-colors hover:border-mithril"
          >
            See the Craft
          </a>
        </div>

        <div className="mt-20 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground-muted">
          <span className="h-px w-8 bg-mithril/50" />
          Scroll
          <span className="h-px w-8 bg-mithril/50" />
        </div>
      </div>
    </section>
  );
}
