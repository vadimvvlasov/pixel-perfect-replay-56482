import { ArrowRight, Copy } from "lucide-react";

import { RiskChip } from "./RiskChip";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function QuoteVisual() {
  return (
    <div className="space-y-3">
      <RiskChip level="high" />
      <p className="text-sm leading-relaxed text-muted-foreground">
        Contractor will invoice Client monthly.{" "}
        <mark className="clause-mark clause-high">Invoices are payable Net 90.</mark>
      </p>
      <span aria-hidden="true" className="paper-bar w-3/4" />
    </div>
  );
}

function WordingVisual() {
  return (
    <div className="space-y-2.5 text-sm">
      <p className="text-muted-foreground line-through decoration-risk-high/70 decoration-2">
        Invoices are payable Net 90.
      </p>
      <ArrowRight aria-hidden="true" className="size-4 text-brand" />
      <p className="rounded-md border border-risk-low/25 bg-highlight-low px-2.5 py-1.5 leading-relaxed">
        Invoices are payable within 14 days of receipt.
      </p>
      <div className="flex gap-1.5 pt-1" aria-hidden="true">
        <span className="rounded border bg-card px-1.5 py-0.5 font-mono text-[0.65rem] text-muted-foreground">PDF</span>
        <span className="rounded border bg-card px-1.5 py-0.5 font-mono text-[0.65rem] text-muted-foreground">DOCX</span>
      </div>
    </div>
  );
}

function EmailVisual() {
  return (
    <div className="rounded-md border bg-card text-sm">
      <div className="flex items-center justify-between gap-2 border-b px-3 py-2">
        <span className="truncate text-xs">
          <span className="text-muted-foreground">Subject: </span>A few proposed changes
        </span>
        <Copy aria-hidden="true" className="size-3.5 shrink-0 text-muted-foreground" />
      </div>
      <div className="space-y-2 px-3 py-3" aria-hidden="true">
        <span className="block text-xs text-muted-foreground">Hi [Client name],</span>
        <span className="paper-bar w-full" />
        <span className="paper-bar w-5/6" />
        <span className="paper-bar w-2/3" />
      </div>
    </div>
  );
}

const BENEFITS = [
  {
    title: "Risky clauses, quoted.",
    body: "Every finding includes an exact quotation from the contract, an explanation and a risk level.",
    Visual: QuoteVisual,
  },
  {
    title: "Better wording to propose.",
    body: "For each risky clause, replacement wording you can offer your client, in a PDF or DOCX report.",
    Visual: WordingVisual,
  },
  {
    title: "An email ready to send.",
    body: "Generate a professional and polite email requesting contractual changes.",
    Visual: EmailVisual,
  },
];

export function Benefits() {
  return (
    <section aria-labelledby="get-heading" className="border-t bg-muted/60">
      <div className="page-container py-20 sm:py-28">
        <Reveal>
          <SectionHeading id="get-heading" eyebrow="What you get" title="From a risky clause to a reply you can send." />
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-10">
          {BENEFITS.map(({ title, body, Visual }, i) => (
            <Reveal key={title} delay={i * 90}>
              <article className="group flex h-full flex-col">
                <div
                  aria-hidden="true"
                  className="flex min-h-48 items-center rounded-xl border bg-card p-5 shadow-sm transition-shadow duration-300 group-hover:shadow-paper"
                >
                  <div className="w-full">
                    <Visual />
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-snug">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
