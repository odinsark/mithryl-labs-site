export function Nav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-rule bg-background/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-end px-6 py-4">
        <nav className="flex items-center gap-8 text-xs uppercase tracking-[0.3em] text-foreground-muted">
          <a href="#work" className="transition-colors hover:text-foreground">
            Work
          </a>
          <a href="#contact" className="transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
