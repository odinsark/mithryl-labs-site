import { Particles } from "@/components/particles";

export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <Particles />
      <div
        className="forge-pulse absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--accent-glow) 0%, transparent 60%)",
          opacity: 0.3,
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
