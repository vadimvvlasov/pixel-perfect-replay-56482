import { createFileRoute } from "@tanstack/react-router";

import { Benefits } from "@/components/landing/Benefits";
import { ClosingCta } from "@/components/landing/ClosingCta";
import { HeroReview } from "@/components/landing/HeroReview";
import { LINKS } from "@/components/landing/links";
import { PrivacyBlock } from "@/components/landing/PrivacyBlock";
import { ProductDemo } from "@/components/landing/ProductDemo";
import { RiskIndex } from "@/components/landing/RiskIndex";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { Steps } from "@/components/landing/Steps";
import { Button } from "@/components/ui/button";

const TITLE = "Anti-Scope Creep — Know what you're agreeing to before you sign";
const DESCRIPTION =
  "AI-powered contract review for freelancers. Spot scope creep, payment traps and unfair terms before they cost you money.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <ProductDemo />
        <Benefits />
        <RiskIndex />
        <Steps />
        <PrivacyBlock />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="page-container pt-10 pb-24 sm:pt-16 md:pt-12 lg:pt-20 lg:pb-32">
      <div className="grid items-center gap-14 md:grid-cols-2 md:items-start md:gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14">
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
          <p className="flex items-start gap-3 text-sm text-muted-foreground">
            <span aria-hidden="true" className="brand-rule mt-2.5 shrink-0" />
            For freelancers and independent contractors checking a client's contract.
          </p>
          <h1
            id="hero-heading"
            className="mt-5 text-[2.5rem] leading-[1.05] font-semibold sm:text-5xl md:text-[2.6rem] lg:text-[3.6rem]"
          >
            Know what you're agreeing to before you sign.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-base lg:text-lg">
            AI-powered contract review for freelancers. Spot scope creep, payment traps and unfair terms
            before they cost you money.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start md:mt-7 lg:mt-9">
            <div className="flex flex-col gap-2">
              <Button asChild size="xl" className="w-full sm:w-auto">
                <a href={LINKS.sample}>Try a free sample</a>
              </Button>
              <span className="text-center text-xs text-muted-foreground sm:text-left">No account needed</span>
            </div>
            <div className="flex flex-col gap-2">
              <Button asChild size="xl" variant="outline" className="w-full sm:w-auto">
                <a href={LINKS.register}>Analyze my contract</a>
              </Button>
              <span className="text-center text-xs text-muted-foreground sm:text-left">Free account</span>
            </div>
          </div>
        </div>
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <HeroReview />
        </div>
      </div>
    </section>
  );
}
