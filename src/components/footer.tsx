export function Footer() {
  return (
    <footer className="relative border-t border-rule px-6 py-10">
      <div className="mx-auto flex max-w-3xl items-center justify-between text-xs uppercase tracking-[0.3em] text-foreground-muted">
        <p>© {new Date().getFullYear()} Mithryl Labs</p>
        <p>Palatine, IL</p>
      </div>
    </footer>
  );
}
