import { Reveal } from "@/components/reveal";

export function Manifesto() {
  return (
    <section className="relative px-6 py-8 sm:py-10">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="rune-rule mb-6 font-display text-xs uppercase tracking-[0.5em]">
            Why Mithryl
          </div>
        </Reveal>

        <Reveal delay={100}>
          <blockquote className="font-display text-2xl leading-relaxed text-foreground sm:text-3xl md:text-4xl">
            Big agencies build for the brand.{" "}
            <span className="mithril-text">I build for the business.</span>
          </blockquote>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-foreground-muted sm:text-lg">
            <p>
              In the stories, mithril was prized for one reason: it was{" "}
              <em className="text-foreground">right</em>. Light enough you could
              wear it all day. Strong enough to hold when things went sideways.
              Beautiful without trying.
            </p>
            <p>
              That&rsquo;s the bar. Software that your team actually uses
              because it&rsquo;s easy. That holds up when the business gets
              busy. That looks good enough you&rsquo;re a little proud to show
              clients.
            </p>
            <p>
              Small businesses get served badly by the software industry. The
              enterprise stuff is expensive and overbuilt. The cheap stuff is
              brittle and forgettable. And the agency layer in the middle is
              mostly selling the same five templates to everyone.
            </p>
            <p>
              Mithryl Labs is a one-person studio built on the opposite bet:
              that a small, thoughtful shop can deliver the quality of a big
              agency with the responsiveness of a neighbor. Fewer clients,
              closer attention, better work.
            </p>
            <p className="text-foreground">— Ben Williamson, Mithryl Labs</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
