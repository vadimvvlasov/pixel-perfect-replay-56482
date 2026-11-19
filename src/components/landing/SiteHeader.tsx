import { Button } from "@/components/ui/button";

import { LINKS } from "./links";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 24" aria-hidden="true" className={className} fill="none">
      <path
        d="M3 1.5h9.5L18.5 7.5V21a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 21V3A1.5 1.5 0 0 1 3 1.5Z"
        className="fill-card stroke-foreground"
        strokeWidth="1.5"
      />
      <path d="M12.5 1.5V7.5h6" className="stroke-foreground" strokeWidth="1.5" />
      <rect x="4.5" y="11" width="11" height="3" rx="1" className="fill-risk-high" />
      <rect x="4.5" y="16.5" width="7" height="2" rx="1" className="fill-paper-line" />
    </svg>
  );
}

const NAV = [
  { href: "#sample", label: "Sample" },
  { href: "#how", label: "How it works" },
  { href: "#privacy", label: "Privacy" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="page-container flex h-16 items-center justify-between gap-3">
        <a
          href="/"
          className="flex min-w-0 items-center gap-2 font-display text-[0.9rem] font-semibold sm:gap-2.5 tracking-tight whitespace-nowrap sm:text-base"
        >
          <LogoMark className="h-6 w-5 shrink-0" />
          Anti-Scope Creep
        </a>

        <nav aria-label="Main" className="flex shrink-0 items-center gap-0.5 sm:gap-1">
          <ul className="mr-2 hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={LINKS.login}
            className="rounded-md px-1.5 py-2 text-sm whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground sm:px-3"
          >
            Log in
          </a>
          <Button asChild size="sm" className="h-9 px-2.5 text-xs sm:px-4 sm:text-sm">
            <a href={LINKS.register}>Analyze my contract</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
