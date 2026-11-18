// Illustrative sample data for the on-page demo. Not produced by a live analysis.

export type RiskLevel = "high" | "medium" | "low";

export interface SampleFinding {
  id: string;
  category: string;
  level: RiskLevel;
  quote: string;
  why: string;
  suggestion: string;
}

export const RISK_LABEL: Record<RiskLevel, string> = {
  high: "High risk",
  medium: "Medium risk",
  low: "Low risk",
};

export const SAMPLE_FINDINGS: SampleFinding[] = [
  {
    id: "payment",
    category: "Long / unfavorable payment terms",
    level: "high",
    quote: "Invoices are payable Net 90.",
    why: "You could wait three months after delivering the work before you are paid.",
    suggestion:
      "Invoices are payable within 14 days of receipt. Contractor may pause work while any invoice is overdue.",
  },
  {
    id: "scope",
    category: "Scope ambiguity / scope creep",
    level: "medium",
    quote: "Contractor will provide any additional services reasonably requested by Client.",
    why: "The scope of work can expand without additional compensation.",
    suggestion:
      "Additional services outside the agreed scope require a separate written agreement and additional compensation.",
  },
  {
    id: "ip",
    category: "IP transfer before payment",
    level: "high",
    quote: "All intellectual property in the deliverables transfers to Client upon creation.",
    why: "The client would own your work even if the invoice is never paid.",
    suggestion:
      "Intellectual property in the deliverables transfers to Client upon receipt of full payment.",
  },
];

/** Contract excerpt: plain text runs and flagged runs (by finding id). */
export type ContractRun = string | { finding: string; text: string };

export const SAMPLE_CONTRACT: { heading: string; runs: ContractRun[] }[] = [
  {
    heading: "1. Services.",
    runs: [
      "Contractor will design and build the marketing website described in Exhibit A. ",
      { finding: "scope", text: "Contractor will provide any additional services reasonably requested by Client." },
    ],
  },
  {
    heading: "2. Fees and payment.",
    runs: [
      "Client will pay the fee set out in Exhibit B. Contractor will invoice Client monthly. ",
      { finding: "payment", text: "Invoices are payable Net 90." },
    ],
  },
  {
    heading: "3. Ownership.",
    runs: [
      { finding: "ip", text: "All intellectual property in the deliverables transfers to Client upon creation." },
    ],
  },
  {
    heading: "4. Confidentiality.",
    runs: ["Each party will keep the other party's confidential information private."],
  },
];

export const SAMPLE_EMAIL = {
  subject: "A few proposed changes to our agreement",
  body: [
    "Hi [Client name],",
    "Thank you for sending the agreement. Before I sign, I'd like to propose three changes:",
    "1. Payment: invoices payable within 14 days of receipt.",
    "2. Scope: additional services outside the agreed scope covered by a separate written agreement.",
    "3. Ownership: intellectual property transfers on receipt of full payment.",
    "Happy to talk these through whenever suits you.",
    "Best regards,\n[Your name]",
  ],
};
