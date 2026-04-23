export function Footer() {
  return (
    <footer className="relative border-t border-rule px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs uppercase tracking-[0.3em] text-foreground-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Mithryl Labs</p>
        <p className="font-display italic normal-case tracking-normal">
          Forged in Palatine · Built for the small and mighty
        </p>
      </div>
    </footer>
  );
}
