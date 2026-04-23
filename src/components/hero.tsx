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

        <p className="font-display text-xs uppercase tracking-[0.4em] text-mithril">
          For owners wearing too many hats
        </p>

        <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Running a real business on{" "}
          <span className="mithril-text">duct tape and spreadsheets?</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground-muted sm:text-lg">
          I build custom websites, AI agents, and automations for small
          businesses. One person, close attention, careful work that actually
          fits the business you&rsquo;re running.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-foreground px-8 text-sm font-medium uppercase tracking-widest text-background transition-transform hover:-translate-y-0.5"
          >
            <span className="relative z-10">Start a conversation</span>
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-accent-glow/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
          </a>
          <a
            href="#work"
            className="inline-flex h-12 items-center justify-center rounded-full border border-rule bg-surface px-8 text-sm font-medium uppercase tracking-widest text-foreground backdrop-blur-sm transition-colors hover:border-mithril"
          >
            See what I build
          </a>
        </div>

        <p className="mt-6 max-w-lg text-xs italic leading-relaxed text-foreground-muted">
          I don&rsquo;t know if what I do is the right fit for you, but if any
          of this sounds familiar, it might be worth a few minutes to find out.
        </p>
      </div>
    </section>
  );
}
