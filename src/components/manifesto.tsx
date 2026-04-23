import { Reveal } from "@/components/reveal";

export function Manifesto() {
  return (
    <section className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="rune-rule mb-10 font-display text-xs uppercase tracking-[0.5em]">
            A note from the smith
          </div>
        </Reveal>

        <Reveal delay={100}>
          <blockquote className="font-display text-2xl leading-relaxed text-foreground sm:text-3xl md:text-4xl">
            <span className="text-mithril">&ldquo;</span>
            Big agencies build for the brand.{" "}
            <span className="mithril-text">I build for the business.</span>{" "}
            The corner shop with three employees. The consultant drowning in
            spreadsheets. The founder who can&rsquo;t afford a six-month enterprise
            rollout but needs the same quality of tool.
            <span className="text-mithril">&rdquo;</span>
          </blockquote>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 space-y-5 text-lg leading-relaxed text-foreground-muted">
            <p>
              Mithril, in Tolkien&rsquo;s telling, was worth more than gold — not
              because it was rare, but because it was{" "}
              <em className="text-foreground">right</em>. Light enough to wear all
              day. Strong enough to stop an orc-spear. Beautiful without trying.
            </p>
            <p>
              That&rsquo;s the bar. Software that&rsquo;s easy enough your team
              actually uses it. Strong enough to hold up when things get busy.
              Crafted well enough that you&rsquo;re a little proud to show it off.
            </p>
            <p className="text-foreground">
              — Ben Williamson, Mithryl Labs
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
