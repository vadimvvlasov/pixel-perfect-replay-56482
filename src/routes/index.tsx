import { createFileRoute } from "@tanstack/react-router";

import { ContractPreview } from "@/components/landing/ContractPreview";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Links point at paths served by the real app, not by this static page,
// so they are plain <a> elements rather than router links.
const LINKS = {
  sample: "/sample/net-90",
  login: "/login?tab=login",
  register: "/login?tab=register",
  methodology: "/methodology",
  aiPolicy: "/ai-data-policy",
} as const;

const TITLE = "Anti-Scope Creep — Find the risky clauses before you sign";
const DESCRIPTION =
  "Find the risky clauses in a client's contract, with exact quotes, suggested wording and a ready email to your client. Free to try.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

const FEATURES = [
  {
    title: "Risky clauses, quoted",
    body: "Each finding quotes the clause from your contract, explains the risk in plain English and rates it high, medium or low.",
  },
  {
    title: "Wording to propose",
    body: "For each risky clause, replacement wording you can offer your client, in a PDF or DOCX report.",
  },
  {
    title: "An email to your client",
    body: "A polite draft that asks for the changes. Copy it and send it from your own email.",
  },
];

const TRAPS = [
  "Scope ambiguity / scope creep",
  "Unlimited revisions",
  "One-sided termination",
  "IP transfer before payment",
  "Uncapped liability",
  "Long / unfavorable payment terms",
];

const STEPS = [
  "Upload a PDF or paste the text of an English contract.",
  "Wait a few minutes while the AI reads it.",
  "Review the findings and send the email.",
];

const PRIVACY = [
  "To analyze a contract, its text is sent to Groq, a third-party AI provider.",
  "Party names and contact details are replaced with placeholders where detected, but this is not full anonymization.",
  "Uploaded files are read in memory. The original PDF or TXT file is discarded right after its text is extracted and is never stored.",
  "Your contract text is not used to train AI models.",
  "Deleting a contract removes its text, findings, and email draft from the application database.",
];

const linkClass =
  "font-medium text-foreground underline decoration-border decoration-2 underline-offset-4 transition-colors hover:decoration-accent";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <WhatYouGet />
        <WhatItChecks />
        <HowItWorks />
        <Privacy />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75 sticky top-0 z-20">
      <div className="page-container flex h-16 items-center justify-between gap-3">
        <a
          href="/"
          className="flex items-center gap-2 font-display text-[0.95rem] font-semibold tracking-tight whitespace-nowrap sm:text-base"
        >
          <span aria-hidden="true" className="amber-rule hidden size-3 rounded-sm sm:inline-block" />
          Anti-Scope Creep
        </a>
        <nav aria-label="Main" className="flex shrink-0 items-center gap-0.5 sm:gap-2">
          <a
            href={LINKS.sample}
            className="hidden rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground md:inline-block"
          >
            See a sample
          </a>
          <a
            href={LINKS.login}
            className="rounded-md px-2 py-2 text-sm whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground sm:px-3"
          >
            Log in
          </a>
          <Button asChild size="sm" className="px-2.5 sm:h-9 sm:px-4 sm:text-sm">
            <a href={LINKS.register}>Create a free account</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="page-container pt-12 pb-20 sm:pt-20 lg:pt-24 lg:pb-28">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
          <p className="flex items-start gap-3 text-sm text-muted-foreground">
            <span aria-hidden="true" className="amber-rule mt-2.5 shrink-0" />
            For freelancers and independent contractors checking a client's contract.
          </p>
          <h1
            id="hero-heading"
            className="mt-5 text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-[3.5rem]"
          >
            Find the risky clauses before you sign.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Find the risky clauses in a client's contract, with exact quotes, suggested wording and a
            ready email to your client. Free to try.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="xl" className="w-full sm:w-auto">
              <a href={LINKS.sample}>See a sample analysis</a>
            </Button>
            <Button asChild size="xl" variant="outline" className="w-full sm:w-auto">
              <a href={LINKS.register}>Create a free account</a>
            </Button>
          </div>
        </div>
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <ContractPreview />
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ id, eyebrow, title }: { id: string; eyebrow?: string; title: string }) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="eyebrow flex items-center gap-3">
          <span aria-hidden="true" className="amber-rule" />
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

function WhatYouGet() {
  return (
    <section aria-labelledby="get-heading" className="border-t bg-muted/60">
      <div className="page-container py-20 sm:py-24">
        <SectionHeading id="get-heading" title="What you get" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Card key={f.title} className="shadow-none">
              <CardHeader className="pb-3">
                <span aria-hidden="true" className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="pt-2 text-lg font-semibold leading-snug">{f.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">{f.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatItChecks() {
  return (
    <section aria-labelledby="checks-heading" className="border-t">
      <div className="page-container grid gap-10 py-20 sm:py-24 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <SectionHeading id="checks-heading" eyebrow="What it checks" title="Six common traps in freelance contracts" />
        <ol className="grid border-t sm:grid-cols-2 sm:gap-x-10">
          {TRAPS.map((t, i) => (
            <li key={t} className="flex items-baseline gap-4 border-b py-4">
              <span aria-hidden="true" className="w-6 shrink-0 font-mono text-xs text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-medium">{t}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section aria-labelledby="how-heading" className="border-t bg-muted/60">
      <div className="page-container py-20 sm:py-24">
        <SectionHeading id="how-heading" title="How it works" />
        <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
          {STEPS.map((s, i) => (
            <li key={s} className="relative flex gap-4 md:flex-col md:gap-5">
              <span
                aria-hidden="true"
                className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-card font-display text-sm font-semibold"
              >
                {i + 1}
              </span>
              <p className="pt-2 text-lg leading-relaxed md:pt-0">
                <span className="sr-only">Step {i + 1}: </span>
                {s}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Privacy() {
  return (
    <section aria-labelledby="privacy-heading" className="border-t">
      <div className="page-container grid gap-10 py-20 sm:py-24 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <SectionHeading id="privacy-heading" eyebrow="Privacy" title="Your contract stays private" />
          <p className="mt-6">
            <a href={LINKS.methodology} className={linkClass}>
              Methodology & Privacy
            </a>
          </p>
        </div>
        <Card className="shadow-paper">
          <CardContent className="p-6 sm:p-8">
            <ul className="space-y-5">
              {PRIVACY.map((line) => (
                <li key={line} className="flex gap-4 leading-relaxed">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section aria-labelledby="cta-heading" className="border-t">
      <div className="page-container py-20 sm:py-28">
        <div className="flex flex-col items-start gap-8 rounded-xl border bg-card p-8 shadow-paper sm:p-12 md:flex-row md:items-center md:justify-between">
          <h2 id="cta-heading" className="text-3xl font-semibold leading-tight sm:text-4xl">
            Check your own contract
          </h2>
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-6">
            <Button asChild size="xl" className="w-full sm:w-auto">
              <a href={LINKS.register}>Create a free account</a>
            </Button>
            <a href={LINKS.sample} className={`${linkClass} text-center`}>
              or see a sample analysis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t bg-muted/60">
      <div className="page-container flex flex-col gap-6 py-10 text-sm md:flex-row md:items-start md:justify-between md:gap-12">
        <p className="max-w-2xl leading-relaxed text-muted-foreground">
          Anti-Scope Creep uses automated AI analysis to identify potential commercial contract risks and
          does not constitute professional legal advice.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={LINKS.methodology} className={linkClass}>
              Methodology & Privacy
            </a>
            <a href={LINKS.aiPolicy} className={linkClass}>
              AI data policy
            </a>
          </nav>
          <Badge variant="outline" className="font-mono font-normal text-muted-foreground">
            sha-0000000
          </Badge>
        </div>
      </div>
    </footer>
  );
}
