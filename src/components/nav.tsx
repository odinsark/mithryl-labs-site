import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

export function Nav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-rule bg-background/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="relative flex h-9 w-9 items-center justify-center">
            <Image
              src="/logos/mithryl-mark.png"
              alt=""
              width={40}
              height={40}
              className="h-9 w-9 object-contain dark:brightness-150 dark:invert-[0.05]"
            />
          </span>
          <span className="font-display text-sm uppercase tracking-[0.35em] text-foreground">
            Mithryl Labs
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.3em] text-foreground-muted sm:flex">
          <a href="#craft" className="transition-colors hover:text-foreground">
            Craft
          </a>
          <a href="#contact" className="transition-colors hover:text-foreground">
            Commission
          </a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
