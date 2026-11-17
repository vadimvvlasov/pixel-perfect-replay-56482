import { Badge } from "@/components/ui/badge";

function Bars({ widths }: { widths: string[] }) {
  return (
    <span aria-hidden="true" className="flex flex-col gap-2.5">
      {widths.map((w, i) => (
        <span key={i} className="paper-bar" style={{ width: w }} />
      ))}
    </span>
  );
}

/** Stylised contract excerpt with two highlighted clauses and one finding card. Pure HTML/CSS. */
export function ContractPreview() {
  return (
    <figure
      className="relative mx-auto w-full max-w-md lg:max-w-none"
      aria-label="Illustration: a contract excerpt with a highlighted payment clause and the finding it produced"
    >
      {/* The document */}
      <div className="rounded-lg border bg-card p-6 shadow-paper sm:p-8 lg:mr-10">
        <div className="flex items-center justify-between border-b pb-4">
          <span className="font-display text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            Services Agreement
          </span>
          <span aria-hidden="true" className="font-mono text-xs text-muted-foreground">
            p. 2
          </span>
        </div>

        <div className="mt-5 space-y-5 text-sm leading-relaxed">
          <Bars widths={["100%", "92%", "64%"]} />

          <p className="text-card-foreground">
            <span className="font-semibold">3. Services.</span>{" "}
            <span className="text-muted-foreground">Contractor will deliver the work in Exhibit A</span>{" "}
            <mark className="clause-mark bg-highlight-medium">
              and any related services Client may request.
            </mark>
          </p>

          <Bars widths={["96%", "78%"]} />

          <p className="text-card-foreground">
            <span className="font-semibold">4. Payment.</span>{" "}
            <span className="text-muted-foreground">Contractor will invoice Client monthly.</span>{" "}
            <mark className="clause-mark bg-highlight-high">Invoices are payable Net 90.</mark>
          </p>

          <Bars widths={["100%", "88%", "40%"]} />
        </div>
      </div>

      {/* The finding */}
      <figcaption className="relative -mt-6 ml-6 mr-2 rounded-lg border border-l-4 border-l-risk-high bg-card p-5 shadow-float sm:ml-12 lg:absolute lg:right-0 lg:bottom-10 lg:m-0 lg:w-72">
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className="size-2 rounded-full bg-risk-high" />
          <Badge variant="high">High</Badge>
        </div>
        <p className="mt-3 font-display text-sm font-semibold leading-snug text-card-foreground">
          Long / unfavorable payment terms (High)
        </p>
        <blockquote className="mt-3 border-l-2 pl-3 text-sm text-muted-foreground italic">
          “Invoices are payable Net 90.”
        </blockquote>
      </figcaption>
    </figure>
  );
}
