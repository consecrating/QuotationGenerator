# Sanctify Quotation Generator

Turn a client phone call into a **branded Sanctify quotation PDF** in a couple of
minutes — with **correct totals, enforced commercial policy, and industry-specific
positioning**.

Two ways to use it, sharing one rate card and one brand:

| | **Quote Engine** (offline app) | **AI Skill** (ChatGPT / Gemini) |
|---|---|---|
| What | One `.html` file you open in a browser | Instructions you paste into a Custom GPT / Gem |
| Best for | Speed + guaranteed-correct maths | Written proposals with strategy narrative |
| Maths | **Deterministic** (unit-tested) | AI arithmetic, policy-checked |
| Needs | Nothing. No install, no internet, no Python | A ChatGPT or Gemini account |

---

## Quick start

**Option 1 — the Quote Engine (recommended for day-to-day quoting)**
1. Download [`engine/sanctify-quote-engine.html`](./engine/sanctify-quote-engine.html).
2. Open it in any browser — **phone or desktop**. It works fully offline.
3. Tap a preset → adjust quantities → fill the client name.
4. **Print → Save as PDF.** Copy the WhatsApp summary to send instantly.

**Option 2 — the AI Skill (for full written proposals)**
1. Paste [`sanctify-quotation-generator/SKILL.md`](./sanctify-quotation-generator/SKILL.md)
   into a **ChatGPT Custom GPT** or **Gemini Gem**.
2. Upload the `references/`, `templates/` and `examples/` files as knowledge.
3. Say *"A client just called."* and answer the questions one at a time.

Full setup guide: [`sanctify-quotation-generator/README.md`](./sanctify-quotation-generator/README.md)

---

## What makes this more than a template

- **Deterministic pricing.** One-time, monthly and yearly charges live in separate
  buckets and are never wrongly added together. Quantity scaling is proportional to the
  standard quantity (4 posts @ ₹3,200 → 8 posts = ₹6,400, *not* ₹25,600).
- **Verified against the real quotes.** A [test suite](./engine/tests/) reproduces
  Sanctify's actual quotations exactly — ₹40,000 → ₹47,200 with GST, and website
  Packages 1/2/3 at ₹36,000 / ₹46,000 / ₹56,000. **34 assertions, all passing.**
- **Indian number formatting** — ₹1,23,456, not ₹123,456.
- **Commercial governance.** A discount ladder with approval gates (>10% flagged,
  >20% refused), minimum engagement terms, payment structure, and scope-protection
  clauses. See [`pricing-policy.md`](./sanctify-quotation-generator/references/pricing-policy.md).
- **Industry playbooks.** Real estate, hospitality, healthcare, education, automobile
  and retail — each with market reality, service mix, and the objection the client will
  actually raise. See [`industry-playbooks.md`](./sanctify-quotation-generator/references/industry-playbooks.md).
- **Quote lifecycle.** Auto quote numbering, revisions (R1, R2…), saved client history,
  and JSON export/import for backup — all stored locally in the browser.
- **GST modes** — extra, inclusive (back-calculated correctly), or none.
- **WhatsApp-ready summary** generated for every quote.

---

## Repository layout

```
QuotationGenerator/
├── engine/
│   ├── sanctify-quote-engine.html   ← offline app: deterministic pricing + PDF
│   └── tests/                       ← 34 assertions run against the shipped engine
├── sanctify-quotation-generator/    ← the AI skill
│   ├── SKILL.md                     ← paste this into a Custom GPT / Gem
│   ├── README.md                    ← ChatGPT & Gemini setup guide
│   ├── references/
│   │   ├── service-catalog.md       ← the rate card (edit prices here)
│   │   ├── pricing-policy.md        ← discount ladder, terms, scope protection
│   │   ├── industry-playbooks.md    ← per-sector strategy narrative
│   │   └── agency-profile.md        ← reusable About / Why Sanctify copy
│   ├── templates/quotation-template.html
│   ├── examples/                    ← finished marketing + website quotes
│   └── assets/                      ← logo (PNG + data URI)
└── source-assets/                   ← original letterhead + sample quotation PDFs
```

---

## Running the tests

Only needed if you change prices or engine logic:

```bash
node engine/tests/pricing.test.js
```

The tests read the **live engine out of the HTML file**, so they can never pass against
a stale copy.

---

## Editing your rates

Rates live in two places — keep them in step:
- **Engine:** the `CATALOG` array near the top of the `<script>` in
  `engine/sanctify-quote-engine.html`.
- **AI skill:** `sanctify-quotation-generator/references/service-catalog.md`.

After changing engine prices, re-run the tests.

> **Review `pricing-policy.md` before relying on it.** The discount thresholds, payment
> terms and minimum engagements are sensible **defaults**, not ratified company policy.
> Tax handling must be confirmed with your CA — the tooling applies whatever you configure.

---

## About Sanctify

Sanctify — Advertising & Digital Marketing Agency, Goa (est. 2012).
📍 #171/1-A, MES College Road, Bharat Nagar Colony, Vasco da Gama, Goa – 403726
📞 +91 99233 52923 · ✉️ designer@sanctify.in · 🌐 https://www.sanctify.in/
