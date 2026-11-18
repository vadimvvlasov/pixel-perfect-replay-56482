# Anti-Scope Creep landing page redesign

## What changes for visitors

The page becomes a product-first landing page. The first screen says what it does, who it's for and how to try it, and the product itself, shown with sample data, is the main picture. The page keeps a calm, document-like look and gets a sharper, more premium system: navy text and surfaces, a warm white background, muted blue as the main accent, and red, amber and green kept only for risk levels. Sora headings and IBM Plex Sans text stay.

## Sections

1. **Header:** compact and sticky. Name on the left. On desktop: "Sample", "How it works", "Privacy" (scroll links), "Log in" and the "Analyze my contract" button. On phones: name, "Log in" and one button.
2. **Hero:**
   - Heading: "Know what you're agreeing to before you sign."
   - Text: your supporting line.
   - Buttons: "Try a free sample" (main, goes to the sample analysis) and "Analyze my contract" (second, goes to sign-up). Each button gets a small note under it, "No account needed" and "Free account", so the difference is clear.
   - Right side: the animated contract review you have now, upgraded. When a clause is flagged, its card shows the risk level, a one-line "why it matters" and the suggested replacement wording.
3. **Product demonstration (new):** a realistic review screen with sample data, labelled "Sample". The contract is on the left, a list of findings on the right, and a detail panel showing the quoted clause, risk level, why it matters and suggested wording. Clicking a finding highlights its clause in the contract. A second tab shows the email draft. This is a visual demo, not a working upload; the real thing stays behind "Try a free sample".
4. **What you get:** your three benefits, each with its own small drawn element rather than identical cards: a quote with a risk tag, a before/after wording strip with PDF/DOCX tags, and a mini email.
5. **What it checks:** a two-column list of the six risks, each with a one-line explanation, laid out like an editorial index, not six big cards.
6. **How it works:** 01 / 02 / 03 with your new titles and lines, joined by a progress line.
7. **Privacy and trust:** a deep navy block that stands apart from the rest of the page, with the "Methodology & Privacy" link. It uses the exact privacy lines from your first brief, because they are the real policy. They cover everything this brief asks for: masking that is not full anonymization, Groq as the AI provider, files discarded after text extraction, no training on your text, and deletion. No certifications, encryption promises or compliance claims are added.
8. **Final call to action:** "Don't sign a contract you haven't checked." with your supporting line, "Try a free sample" and "Create a free account".
9. **Footer:** name and short description; "Methodology & Privacy", "AI data policy", "Log in" and "Sign up"; the legal disclaimer. The "sha-0000000" tag is removed, because this page has no real version number to show.

Motion stays subtle: sections fade in on scroll, buttons respond to hover, the hero runs once, and everything stays still for visitors who turn motion off.

## Text I will write (please review after)

Your brief gives most of the wording. I'll draft these short pieces, all factual, with no numbers or claims:
- The "why it matters" line and suggested wording for the Net 90 payment finding (the scope creep one uses your example).
- One-line explanations for each of the six risks.
- A three-line sample email for the email tab and card.
- The two small notes under the hero buttons.

## Things this project cannot check

This project contains only the landing page. Sign-in, the sample analysis and uploads live in your main app, so the buttons link to them (`/sample/net-90`, `/login?tab=login`, `/login?tab=register`). I can't confirm here that the sample opens without an account. The plan assumes it does, as your first brief implied.

## Technical details

- Tokens in `src/styles.css`: add a muted-blue `--accent`, move amber to risk-medium only, add `--surface-inverse` tokens for the navy privacy block, add reveal-on-scroll keyframes and keep the reduced-motion overrides. Update the dark theme to match.
- New components in `src/components/landing/`: `SiteHeader`, `HeroReview` (extends the current `ContractPreview` sequence), `ProductDemo` (client-side state for the selected finding and tab, with sample data in `sample-analysis.ts`), `BenefitVisuals`, `RiskIndex`, `Steps`, `PrivacyBlock`, `ClosingCta`, `SiteFooter`, and a `Reveal` wrapper (IntersectionObserver).
- `src/routes/index.tsx` puts the sections together and updates `head()` with the new title and description.
- Plain `<a>` links stay, per AGENTS.md. Header scroll links use in-page anchors.
- Update the copy-rules memory: the latest brief's copy is the source, keep the privacy lines exact, and never show placeholder version tags. Create `roadmap.md` to track the stages.
- Check with screenshots at 390, 768, 1086 and 1300 px, light and dark, plus keyboard focus, no sideways overflow, no console errors, and the existing routing test.
