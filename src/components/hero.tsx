import { Logo } from "@/components/logo";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-start px-6 pb-16 pt-16 sm:pt-20">
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="mb-8 flex items-center justify-center">
          <Logo
            width={720}
            height={232}
            priority
            className="logo-breathe h-auto w-[min(400px,87vw)]"
          />
        </div>

        <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Custom software for small businesses.
        </h1>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground-muted sm:text-lg">
          Websites, AI agents, and automations, built by one person.
        </p>

        <div className="mt-8">
          <a
            href="#contact"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-foreground px-8 text-sm font-medium uppercase tracking-widest text-background transition-transform hover:-translate-y-0.5"
          >
            <span className="relative z-10">Get in touch</span>
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-accent-glow/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
