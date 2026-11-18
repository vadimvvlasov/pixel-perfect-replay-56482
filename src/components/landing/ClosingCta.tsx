import { Button } from "@/components/ui/button";

import { LINKS } from "./links";
import { Reveal } from "./Reveal";

export function ClosingCta() {
  return (
    <section aria-labelledby="cta-heading" className="border-t">
      <div className="page-container py-20 sm:py-28">
        <Reveal>
          <div className="ruled-paper relative overflow-hidden rounded-2xl border bg-card px-6 py-14 text-center shadow-paper sm:px-12 sm:py-20">
            <h2 id="cta-heading" className="mx-auto max-w-2xl text-3xl leading-[1.1] font-semibold sm:text-5xl">
              Don't sign a contract you{" "}
              <mark className="clause-mark clause-medium">haven't checked.</mark>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Find hidden risks. Understand your options. Negotiate better terms.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="xl" className="w-full sm:w-auto">
                <a href={LINKS.sample}>Try a free sample</a>
              </Button>
              <Button asChild size="xl" variant="outline" className="w-full sm:w-auto">
                <a href={LINKS.register}>Create a free account</a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
