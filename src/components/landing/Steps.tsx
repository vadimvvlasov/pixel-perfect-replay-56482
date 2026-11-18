import { MessageSquareText, ScanSearch, Upload } from "lucide-react";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const STEPS = [
  { title: "Upload your contract.", body: "Upload a PDF or paste contract text.", Icon: Upload },
  {
    title: "AI reviews the terms.",
    body: "The system identifies potential risks and verifies quotations against the original contract.",
    Icon: ScanSearch,
  },
  {
    title: "Negotiate with confidence.",
    body: "Review suggested wording and prepare an email to your client.",
    Icon: MessageSquareText,
  },
];

export function Steps() {
  return (
    <section id="how" aria-labelledby="how-heading" className="scroll-mt-20 border-t bg-muted/60">
      <div className="page-container py-20 sm:py-28">
        <Reveal>
          <SectionHeading id="how-heading" eyebrow="How it works" title="Three steps, start to finish." />
        </Reveal>
        <ol className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Progress line: vertical on phones, horizontal from tablet up */}
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-5 w-px bg-gradient-to-b from-brand via-brand/50 to-border md:top-5 md:right-[16%] md:bottom-auto md:left-5 md:h-px md:w-auto md:bg-gradient-to-r"
          />
          {STEPS.map(({ title, body, Icon }, i) => (
            <li key={title} className="relative">
              <Reveal delay={i * 120} className="flex gap-5 md:flex-col">
                <span
                  aria-hidden="true"
                  className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border bg-card text-brand shadow-sm"
                >
                  <Icon className="size-4" />
                </span>
                <div>
                  <p className="font-mono text-xs text-brand">
                    <span className="sr-only">Step </span>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1.5 text-lg font-semibold leading-snug">{title}</h3>
                  <p className="mt-2 max-w-xs leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
