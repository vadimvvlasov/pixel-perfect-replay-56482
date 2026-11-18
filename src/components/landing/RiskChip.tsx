import { cn } from "@/lib/utils";

import { RISK_LABEL, type RiskLevel } from "./sample-analysis";

const DOT: Record<RiskLevel, string> = {
  high: "bg-risk-high",
  medium: "bg-risk-medium",
  low: "bg-risk-low",
};

const CHIP: Record<RiskLevel, string> = {
  high: "bg-highlight-high border-risk-high/30",
  medium: "bg-highlight-medium border-risk-medium/30",
  low: "bg-highlight-low border-risk-low/30",
};

export function RiskChip({ level, className }: { level: RiskLevel; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[0.7rem] font-semibold tracking-wide text-foreground uppercase",
        CHIP[level],
        className,
      )}
    >
      <span aria-hidden="true" className={cn("size-1.5 rounded-full", DOT[level])} />
      {RISK_LABEL[level]}
    </span>
  );
}

export function riskBorder(level: RiskLevel) {
  return level === "high" ? "border-l-risk-high" : level === "medium" ? "border-l-risk-medium" : "border-l-risk-low";
}

export function riskClause(level: RiskLevel) {
  return level === "high" ? "clause-high" : level === "medium" ? "clause-medium" : "clause-low";
}
