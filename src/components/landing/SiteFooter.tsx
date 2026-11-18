import { LINKS } from "./links";
import { LogoMark } from "./SiteHeader";

const link = "text-muted-foreground transition-colors hover:text-foreground";

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/60">
      <div className="page-container py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="/" className="flex items-center gap-2.5 font-display font-semibold tracking-tight">
              <LogoMark className="h-6 w-5" />
              Anti-Scope Creep
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Contract review for freelancers and independent contractors.
            </p>
          </div>
          <nav aria-label="Product">
            <h2 className="eyebrow">Product</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href={LINKS.sample} className={link}>Sample analysis</a></li>
              <li><a href={LINKS.login} className={link}>Log in</a></li>
              <li><a href={LINKS.register} className={link}>Sign up</a></li>
            </ul>
          </nav>
          <nav aria-label="Trust">
            <h2 className="eyebrow">Trust</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href={LINKS.methodology} className={link}>Methodology & Privacy</a></li>
              <li><a href={LINKS.aiPolicy} className={link}>AI data policy</a></li>
            </ul>
          </nav>
        </div>
        <p className="mt-12 border-t pt-6 text-xs leading-relaxed text-muted-foreground">
          Anti-Scope Creep uses automated AI analysis to identify potential commercial contract risks and does
          not constitute professional legal advice.
        </p>
      </div>
    </footer>
  );
}
