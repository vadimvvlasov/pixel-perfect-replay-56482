import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const TRAPS = [
  {
    title: "Scope ambiguity / scope creep",
    body: "Vague deliverables let the work grow while the fee stays the same.",
  },
  { title: "Unlimited revisions", body: "No cap on rounds means no clear end to the project." },
  {
    title: "One-sided termination",
    body: "Only the client can walk away, sometimes without paying for work already done.",
  },
  { title: "IP transfer before payment", body: "The client owns your work before you have been paid for it." },
  { title: "Uncapped liability", body: "What you could owe has no upper limit, whatever the project is worth." },
  {
    title: "Long / unfavorable payment terms",
    body: "Long payment windows and missing late-payment terms delay your income.",
  },
];

export function RiskIndex() {
  return (
    <section id="checks" aria-labelledby="checks-heading" className="scroll-mt-20 border-t">
      <div className="page-container grid gap-12 py-20 sm:py-28 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            id="checks-heading"
            eyebrow="What it checks"
            title="Six common traps in freelance contracts"
            className="lg:sticky lg:top-28"
          />
        </Reveal>
        <ol className="grid sm:grid-cols-2 sm:gap-x-10">
          {TRAPS.map((t, i) => (
            <li key={t.title} className="border-t py-6 last:border-b sm:[&:nth-last-child(2)]:border-b">
              <Reveal delay={(i % 2) * 70}>
                <div className="flex gap-4">
                  <span aria-hidden="true" className="w-6 shrink-0 pt-0.5 font-mono text-xs text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold leading-snug">{t.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
