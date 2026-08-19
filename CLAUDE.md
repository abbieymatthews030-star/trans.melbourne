@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

trans.melbourne is a Next.js (App Router) site that helps trans and gender-diverse people in Melbourne find services and submit enquiries, organized around what someone actually needs ("I need housing", "I need hormones") rather than institutional categories. Content is direct and non-clinical by design — see the tone in existing pages (`src/app/healthcare/page.tsx`, `src/app/urgent/page.tsx`) before writing new copy: short sentences, no jargon, acknowledges the person may be in crisis or unsafe.

Safety is a first-class concern, not an afterthought: the contact form explicitly warns users to only give contact details their abuser/monitor can't access, and warns against submitting passwords/PINs. Preserve this framing in any form or contact-related work.

## Commands

```sh
npm run dev      # Next.js dev server
npm run build
npm run start
npm run lint      # eslint
```

No test suite is configured.

## Architecture

- **Two page patterns.** Most category pages (`healthcare`, `housing`, `jobs`, `legal`, `money`, `safety`, `transition`, `community`, `documents`) are thin `page.tsx` files that pass category-specific `questions`/`resources` data into the shared `ProblemEnquiryPage` component (`src/components/ProblemEnquiryPage.tsx`), which renders a resource list (`ResourceBlock`) plus the enquiry form (`EnquiryForm`). `urgent/page.tsx` and the homepage (`src/app/page.tsx`) are bespoke, hand-built layouts (crisis phone lines, homepage situation picker) — don't force them into the `ProblemEnquiryPage` shape.
- **Adding a new category page**: create `src/app/<slug>/page.tsx`, export `metadata`, and render `<ProblemEnquiryPage category=... headline=... description=... questions=[...] resources=[...] />` — follow `src/app/healthcare/page.tsx` as the reference example.
- **Enquiry submission flow**: `EnquiryForm` (`src/components/EnquiryForm.tsx`, client component) collects answers per question id plus contact fields (name/email/phone/contactMethod/safeTime/consent) and a hidden honeypot (`website`) field, then POSTs JSON to `src/app/api/enquiry/route.ts`. The route sanitizes/truncates every field (`clean()`), rejects submissions that fill the honeypot, requires `consent === true` and at least one of email/phone, then sends via Resend (`RESEND_API_KEY` + `ENQUIRY_TO_EMAIL` env vars) or falls back to `console.log` when those aren't set (e.g. local dev). No enquiries are persisted to a database — email (or console, if unconfigured) is the only record.
- **Styling** is class-name driven global CSS (`src/app/globals.css`) with a consistent "blunt" naming convention (`bluntPage`, `bluntNav`, `bluntHeader`, `enquiryForm`, `resourceBlock`, `urgentLine`, etc.) rather than CSS modules or a component library — reuse existing class names instead of introducing new styling approaches.
