import { ArrowRight, Check, Copy, FileText, Mail } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { LINKS } from "./links";
import { RiskChip, riskBorder, riskClause } from "./RiskChip";
import { SAMPLE_CONTRACT, SAMPLE_EMAIL, SAMPLE_FINDINGS } from "./sample-analysis";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

function useCopy() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      window.setTimeout(() => setCopied((c) => (c === key ? null : c)), 1800);
    } catch {
      /* clipboard unavailable: leave the button as is */
    }
  };
  return { copied, copy };
}

function CopyButton({ copied, onClick, label }: { copied: boolean; onClick: () => void; label: string }) {
  return (
    <Button type="button" variant="outline" size="sm" onClick={onClick} aria-label={label}>
      {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
      {copied ? "Copied" : "Copy"}
    </Button>
  );
}

export function ProductDemo() {
  const [selected, setSelected] = useState(SAMPLE_FINDINGS[0]!.id);
  const [tab, setTab] = useState<"findings" | "email">("findings");
  const { copied, copy } = useCopy();
  const finding = SAMPLE_FINDINGS.find((f) => f.id === selected)!;
  const levelOf = (id: string) => SAMPLE_FINDINGS.find((f) => f.id === id)!.level;
  const emailText = `Subject: ${SAMPLE_EMAIL.subject}\n\n${SAMPLE_EMAIL.body.join("\n\n")}`;

  return (
    <section id="sample" aria-labelledby="sample-heading" className="scroll-mt-20 border-t">
      <div className="page-container py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            id="sample-heading"
            eyebrow="Sample analysis"
            title="Every finding, with the fix next to it."
          />
        </Reveal>

        <Reveal className="mt-10" delay={80}>
          <div className="overflow-hidden rounded-xl border bg-card shadow-paper">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b bg-muted/50 px-4 py-3 sm:px-6">
              <div className="flex min-w-0 items-center gap-2.5">
                <FileText aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
                <span className="truncate font-mono text-xs text-muted-foreground">services-agreement.pdf</span>
                <Badge variant="sample">Sample</Badge>
              </div>
              <div role="tablist" aria-label="Analysis view" className="flex rounded-lg border bg-card p-0.5">
                {(
                  [
                    { id: "findings", label: `Findings (${SAMPLE_FINDINGS.length})`, icon: FileText },
                    { id: "email", label: "Email draft", icon: Mail },
                  ] as const
                ).map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    id={`tab-${t.id}`}
                    aria-selected={tab === t.id}
                    aria-controls={`panel-${t.id}`}
                    onClick={() => setTab(t.id)}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                      tab === t.id
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <t.icon aria-hidden="true" className="size-3.5" />
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-[1.05fr_1fr]">
              {/* Contract */}
              <div className="border-b p-5 sm:p-8 lg:border-r lg:border-b-0">
                <p className="font-display text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  Services Agreement
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Between <span className="placeholder-chip">[CLIENT]</span> and{" "}
                  <span className="placeholder-chip">[CONTRACTOR]</span>
                </p>
                <div className="mt-6 space-y-5 text-[0.95rem] leading-relaxed">
                  {SAMPLE_CONTRACT.map((c) => (
                    <p key={c.heading}>
                      <span className="font-semibold">{c.heading}</span>{" "}
                      {c.runs.map((r, i) =>
                        typeof r === "string" ? (
                          <span key={i} className="text-muted-foreground">
                            {r}
                          </span>
                        ) : (
                          <mark
                            key={i}
                            onClick={() => {
                              setSelected(r.finding);
                              setTab("findings");
                            }}
                            className={cn(
                              "clause-mark cursor-pointer transition-[box-shadow,opacity] duration-300",
                              riskClause(levelOf(r.finding)),
                              tab === "findings" && selected === r.finding
                                ? "shadow-[inset_0_-2px_0_0_currentColor]"
                                : "opacity-70 hover:opacity-100",
                            )}
                          >
                            {r.text}
                          </mark>
                        ),
                      )}
                    </p>
                  ))}
                </div>
              </div>

              {/* Analysis */}
              <div className="bg-background/40 p-5 sm:p-8">
                {tab === "findings" ? (
                  <div id="panel-findings" role="tabpanel" aria-labelledby="tab-findings">
                    <ul className="flex flex-col gap-2" aria-label="Findings">
                      {SAMPLE_FINDINGS.map((f) => (
                        <li key={f.id}>
                          <button
                            type="button"
                            aria-pressed={selected === f.id}
                            onClick={() => setSelected(f.id)}
                            className={cn(
                              "flex w-full items-center justify-between gap-3 rounded-lg border border-l-4 bg-card px-4 py-3 text-left transition-all",
                              riskBorder(f.level),
                              selected === f.id
                                ? "shadow-float"
                                : "opacity-80 hover:opacity-100 hover:shadow-sm",
                            )}
                          >
                            <span className="text-sm font-semibold leading-snug">{f.category}</span>
                            <RiskChip level={f.level} className="shrink-0" />
                          </button>
                        </li>
                      ))}
                    </ul>

                    <div key={finding.id} className="mt-6 animate-in fade-in slide-in-from-bottom-1 duration-300">
                      <h3 className="eyebrow">Quoted from your contract</h3>
                      <blockquote className="mt-2 border-l-2 border-foreground/20 pl-4 text-[0.95rem] leading-relaxed italic">
                        “{finding.quote}”
                      </blockquote>

                      <h3 className="eyebrow mt-6">Why it matters</h3>
                      <p className="mt-2 leading-relaxed">{finding.why}</p>

                      <div className="mt-6 rounded-lg border border-risk-low/25 bg-highlight-low p-4">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="text-[0.7rem] font-semibold tracking-wide uppercase">Suggested wording</h3>
                          <CopyButton
                            copied={copied === finding.id}
                            onClick={() => copy(finding.id, finding.suggestion)}
                            label="Copy suggested wording"
                          />
                        </div>
                        <p className="mt-2 leading-relaxed">“{finding.suggestion}”</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    id="panel-email"
                    role="tabpanel"
                    aria-labelledby="tab-email"
                    className="animate-in fade-in duration-300"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="eyebrow">Email to your client</h3>
                      <CopyButton
                        copied={copied === "email"}
                        onClick={() => copy("email", emailText)}
                        label="Copy email draft"
                      />
                    </div>
                    <div className="mt-4 rounded-lg border bg-card">
                      <p className="border-b px-4 py-3 text-sm">
                        <span className="text-muted-foreground">Subject: </span>
                        <span className="font-medium">{SAMPLE_EMAIL.subject}</span>
                      </p>
                      <div className="space-y-3 px-4 py-4 text-sm leading-relaxed whitespace-pre-line">
                        {SAMPLE_EMAIL.body.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Illustrative example. Names in brackets show where party details are replaced with placeholders.
          </p>
          {/* The main next step for a new visitor: the full sample opens without an account */}
          <div className="mt-10 flex flex-col items-center gap-2 text-center">
            <Button asChild size="xl" className="group w-full sm:w-auto">
              <a href={LINKS.sample}>
                Open the full sample analysis
                <ArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <span className="text-xs text-muted-foreground">No account needed</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
