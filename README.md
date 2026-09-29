# Sanctify Quotation Generator

An AI skill that turns a client phone call into a **branded Sanctify quotation
PDF** in minutes. The AI **asks you for the details step by step**, then produces
a finished, on-brand quotation you save as a `.pdf` straight from your browser.

**Works in ChatGPT and Gemini. No Python, no plugins, no coding.**

Built to match Sanctify's real quotation style — purple letterhead bars, maroon
underlined titles, Calibri type, ₹ pricing tables, and the exact footer.

---

## Quick start

1. Open [`sanctify-quotation-generator/`](./sanctify-quotation-generator) and read
   its [`README.md`](./sanctify-quotation-generator/README.md).
2. Paste [`SKILL.md`](./sanctify-quotation-generator/SKILL.md) into a **ChatGPT
   Custom GPT** or a **Gemini Gem**, and upload the template + reference files.
3. Say *"A client just called."* and answer the questions.
4. Open the generated HTML in a browser → **Print → Save as PDF**.

See the skill's own README for click-by-click ChatGPT and Gemini setup.

---

## Repository layout

```
QuotationGenerator/
├── README.md                          ← you are here
├── LICENSE
├── sanctify-quotation-generator/      ← the AI skill (this is what you install)
│   ├── SKILL.md                       ← the instructions the AI follows
│   ├── README.md                      ← setup guide for ChatGPT & Gemini
│   ├── templates/
│   │   └── quotation-template.html    ← branded HTML template
│   ├── references/
│   │   ├── service-catalog.md         ← your editable rate card
│   │   └── agency-profile.md          ← reusable "About / Why Sanctify" copy
│   ├── examples/
│   │   ├── example-digital-marketing.html  ← finished sample: marketing quote
│   │   └── example-website-designing.html  ← finished sample: website (Pkg 1/2/3)
│   └── assets/
│       ├── sanctify-logo.png
│       ├── logo-small.png
│       └── logo-datauri.txt           ← logo as text, for embedding in HTML
└── source-assets/                     ← original brand references
    ├── Blank Letterhead.docx
    ├── Digital Marketing Quotation.pdf
    ├── Sanctify Profile & Digital Marketing Quotation.pdf
    └── Website Designing Quotation.pdf
```

`source-assets/` holds the original letterhead and sample quotations the skill's
style was derived from — keep them for reference when updating the brand.

---

## How it works

1. The AI interviews you **one question at a time** — quote type, client, services,
   quantities, prices, notes.
2. It shows a **summary + totals** (Subtotal → GST @ 18% → Grand Total) and asks
   you to confirm.
3. It outputs a complete, self-contained **HTML** quotation.
4. You **open it in a browser and Print → Save as PDF**.

> Gemini can't create a `.pdf` file directly, and this setup needs no Python —
> so the skill outputs HTML you print to PDF. Two clicks, works on phone or
> desktop, identical experience in ChatGPT and Gemini.

---

## Editing your rates

Open [`references/service-catalog.md`](./sanctify-quotation-generator/references/service-catalog.md),
change the prices, and re-upload it to your Custom GPT / Gem knowledge. You can
also override any price mid-conversation.

---

## About Sanctify

Sanctify — Advertising & Digital Marketing Agency, Goa (est. 2012).
📍 #171/1-A, MES College Road, Bharat Nagar Colony, Vasco da Gama, Goa – 403726
📞 +91 99233 52923 · ✉️ designer@sanctify.in · 🌐 https://www.sanctify.in/
