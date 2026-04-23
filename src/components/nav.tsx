import { ThemeToggle } from "@/components/theme-toggle";

export function Nav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-rule bg-background/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="font-display text-xs uppercase tracking-[0.4em] text-foreground-muted">
          Mithryl Labs
        </span>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.3em] text-foreground-muted sm:flex">
          <a href="#work" className="transition-colors hover:text-foreground">
            Work
          </a>
          <a href="#process" className="transition-colors hover:text-foreground">
            Process
          </a>
          <a href="#contact" className="transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
