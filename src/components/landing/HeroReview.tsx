import { useEffect, useRef, useState, type CSSProperties } from "react";

import { cn } from "@/lib/utils";

import { RiskChip, riskBorder } from "./RiskChip";
import { SAMPLE_FINDINGS } from "./sample-analysis";

// Review sequence timing (seconds). The scan line passes each clause just before it is flagged.
const T = { scan: 0.5, mediumClause: 1.1, mediumCard: 1.45, highClause: 1.9, highCard: 2.25, detail: 2.75 };

const delay = (s: number) => ({ "--delay": `${s}s` }) as CSSProperties;

const scope = SAMPLE_FINDINGS.find((f) => f.id === "scope")!;
const payment = SAMPLE_FINDINGS.find((f) => f.id === "payment")!;

function Bars({ widths }: { widths: string[] }) {
  return (
    <span aria-hidden="true" className="flex flex-col gap-2.5">
      {widths.map((w, i) => (
        <span key={i} className="paper-bar" style={{ width: w }} />
      ))}
    </span>
  );
}

/**
 * Hero product visual: a contract page "reviews itself". A scan line passes down the page,
 * each risky clause is highlighted in turn, then its finding appears with the suggested wording.
 */
export function HeroReview() {
  // Hold the sequence until the picture is on screen (on phones it starts below the fold).
  const ref = useRef<HTMLElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setPlaying(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setPlaying(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <figure
      ref={ref}
      className={cn("relative mx-auto w-full max-w-lg lg:max-w-none", !playing && "review-idle")}
      aria-label="Sample review: a contract page with a medium-risk scope clause and a high-risk payment clause flagged, and the suggested replacement wording for the payment clause"
    >
      {/* The contract page */}
      <div className="rounded-xl border bg-card shadow-paper lg:mr-14">
        <div className="flex items-center justify-between gap-3 border-b px-5 py-3 sm:px-7">
          <span className="flex items-center gap-2 text-xs text-muted-foreground">
            <span aria-hidden="true" className="flex gap-1">
              <span className="size-2 rounded-full bg-paper-line" />
              <span className="size-2 rounded-full bg-paper-line" />
              <span className="size-2 rounded-full bg-paper-line" />
            </span>
            <span className="ml-2 font-mono">services-agreement.pdf</span>
          </span>
          <span className="text-xs font-medium text-brand">Sample</span>
        </div>

        <div className="p-5 sm:p-7">
          <p className="font-display text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            Services Agreement
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Between <span className="placeholder-chip">[CLIENT]</span> and{" "}
            <span className="placeholder-chip">[CONTRACTOR]</span>
          </p>

          <div className="relative mt-5 space-y-5 text-sm leading-relaxed">
            <span aria-hidden="true" className="review-scan-line" style={delay(T.scan)} />

            <Bars widths={["100%", "86%"]} />

            <p className="text-card-foreground">
              <span className="font-semibold">1. Services.</span>{" "}
              <span className="text-muted-foreground">The work is described in Exhibit A.</span>{" "}
              <mark className="clause-mark clause-medium animate-clause" style={delay(T.mediumClause)}>
                {scope.quote}
              </mark>
            </p>

            <Bars widths={["70%"]} />

            <p className="text-card-foreground">
              <span className="font-semibold">2. Payment.</span>{" "}
              <span className="text-muted-foreground">Contractor will invoice Client monthly.</span>{" "}
              <mark className="clause-mark clause-high animate-clause" style={delay(T.highClause)}>
                {payment.quote}
              </mark>
            </p>

            {/* Short tail on smaller screens so the findings stay in the first view */}
            <Bars widths={["100%", "90%", "62%"]} />
            <span aria-hidden="true" className="hidden lg:-mt-2.5 lg:block">
              <Bars widths={["96%", "84%", "92%", "70%", "88%", "40%"]} />
            </span>
          </div>
        </div>
      </div>

      {/* Findings: stacked under the page on small screens, pinned to its edge on desktop */}
      <div className="relative -mt-8 ml-5 mr-1 flex flex-col gap-3 sm:ml-10 md:ml-5 lg:static lg:m-0">
        <div
          className={cn(
            "animate-finding rounded-lg border border-l-4 bg-card px-4 py-3 shadow-float lg:absolute lg:top-[4.5rem] lg:right-0 lg:w-72",
            riskBorder(scope.level),
          )}
          style={delay(T.mediumCard)}
        >
          <RiskChip level={scope.level} />
          <p className="mt-2 font-display text-sm font-semibold leading-snug">{scope.category}</p>
        </div>

        <div
          className={cn(
            "animate-finding rounded-lg border border-l-4 bg-card p-4 shadow-float sm:p-5 lg:absolute lg:right-0 lg:-bottom-16 lg:w-80",
            riskBorder(payment.level),
          )}
          style={delay(T.highCard)}
        >
          <RiskChip level={payment.level} />
          <p className="mt-2 font-display text-sm font-semibold leading-snug">{payment.category}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{payment.why}</p>
          <div className="animate-finding mt-3 rounded-md border border-risk-low/25 bg-highlight-low p-3" style={delay(T.detail)}>
            <p className="text-[0.7rem] font-semibold tracking-wide text-foreground uppercase">
              Suggested wording
            </p>
            <p className="mt-1 text-sm leading-relaxed text-foreground">“{payment.suggestion}”</p>
          </div>
        </div>
      </div>
    </figure>
  );
}
