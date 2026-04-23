import { Reveal } from "@/components/reveal";

export function Manifesto() {
  return (
    <section className="relative px-6 py-8 sm:py-10">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="mb-8 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            About
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-4 text-base leading-relaxed text-foreground-muted sm:text-lg">
            <p>
              I&rsquo;m Ben Williamson. I&rsquo;ve spent most of my career as a
              director of operations, the quiet role that keeps a business
              running from the inside.
            </p>
            <p>
              Mithril, in Tolkien&rsquo;s telling, wasn&rsquo;t valued because
              it was rare. It was valued because it was{" "}
              <em className="text-foreground">right</em>: light, strong, and
              quiet until it mattered.
            </p>
            <p>That&rsquo;s the bar. Mithryl Labs is me building to it.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
