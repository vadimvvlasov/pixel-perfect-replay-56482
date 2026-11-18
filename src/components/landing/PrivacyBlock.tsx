import { Ban, EyeOff, FileX, Send, Trash2 } from "lucide-react";

import { LINKS } from "./links";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

// Exact policy lines. Do not reword: they describe the current implementation.
const PRIVACY = [
  { Icon: Send, text: "To analyze a contract, its text is sent to Groq, a third-party AI provider." },
  {
    Icon: EyeOff,
    text: "Party names and contact details are replaced with placeholders where detected, but this is not full anonymization.",
  },
  {
    Icon: FileX,
    text: "Uploaded files are read in memory. The original PDF or TXT file is discarded right after its text is extracted and is never stored.",
  },
  { Icon: Ban, text: "Your contract text is not used to train AI models." },
  {
    Icon: Trash2,
    text: "Deleting a contract removes its text, findings, and email draft from the application database.",
  },
];

const inverseLink =
  "font-medium text-surface-inverse-foreground underline decoration-surface-inverse-border decoration-2 underline-offset-4 transition-colors hover:decoration-surface-inverse-foreground focus-visible:outline-surface-inverse-foreground";

export function PrivacyBlock() {
  return (
    <section id="privacy" aria-labelledby="privacy-heading" className="scroll-mt-20 border-t">
      <div className="page-container py-20 sm:py-28">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-surface-inverse-border bg-surface-inverse text-surface-inverse-foreground">
            <div className="grid gap-12 p-7 sm:p-12 lg:grid-cols-[0.85fr_1.3fr] lg:gap-16 lg:p-16">
              <div>
                <SectionHeading inverse id="privacy-heading" eyebrow="Privacy" title="Your contract stays private" />
                <p className="mt-5 max-w-sm leading-relaxed text-surface-inverse-muted">
                  How your contract is handled, step by step.
                </p>
                <div className="mt-8 flex flex-col gap-3 text-sm">
                  <a href={LINKS.methodology} className={inverseLink}>
                    Methodology & Privacy
                  </a>
                  <a href={LINKS.aiPolicy} className={inverseLink}>
                    AI data policy
                  </a>
                </div>
              </div>
              <ul className="divide-y divide-surface-inverse-border">
                {PRIVACY.map(({ Icon, text }) => (
                  <li key={text} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                    <span
                      aria-hidden="true"
                      className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-surface-inverse-border"
                    >
                      <Icon className="size-4 text-surface-inverse-muted" />
                    </span>
                    <span className="pt-1.5 leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
