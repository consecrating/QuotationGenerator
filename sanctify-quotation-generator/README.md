# Sanctify Quotation Generator — Skill for ChatGPT & Gemini

A ready-to-use AI skill that turns a client phone call into a **branded Sanctify
quotation PDF** in a couple of minutes. The AI **asks you the details step by
step**, then produces a finished, on-brand quotation you save as a `.pdf` from
your browser. **No Python, no plugins, no coding.**

Built from Sanctify's real quotation style: purple letterhead bars, maroon
underlined titles, Calibri type, the ₹ pricing tables, and the exact footer.

---

## What's in this folder

| File | Purpose |
|---|---|
| `SKILL.md` | The instructions the AI follows (the "brain"). **This is what you paste in.** |
| `templates/quotation-template.html` | The branded HTML the AI fills in. |
| `references/service-catalog.md` | Your standard services & rate card. |
| `references/pricing-policy.md` | Discount ladder, payment terms, scope protection, when to refuse. |
| `references/industry-playbooks.md` | Per-industry positioning, service mix, likely objections. |
| `references/agency-profile.md` | Reusable "About / Why Sanctify" copy. |
| `examples/example-digital-marketing.html` | Finished sample: SMM / marketing quote. |
| `examples/example-website-designing.html` | Finished sample: website quote with Package 1/2/3 tiers + add-ons. |
| `assets/sanctify-logo.png` | The Sanctify logo. |
| `assets/logo-datauri.txt` | The logo as a text string, for embedding in HTML (optional). |

---

## The workflow (same on ChatGPT or Gemini)

1. You start the skill and say a client called.
2. The AI asks **one question at a time** — type of quote, client name, services,
   quantities, prices, notes.
3. The AI shows a **summary + totals** and asks you to confirm.
4. It outputs a complete **HTML file**.
5. You **open it in a browser and Print → Save as PDF**. Done.

> **Save as PDF, step by step:** copy the HTML the AI gives you into a file named
> `quotation.html` → double-click to open in Chrome/Edge/Safari → press
> **Ctrl+P** (Windows) or **Cmd+P** (Mac) → set **Destination = Save as PDF** →
> turn on **"Background graphics"** → **Save**.

### When to use the Quote Engine instead

For a quote mixing **one-time + monthly + yearly** charges, or with a discount, use
[`../engine/sanctify-quote-engine.html`](../engine/sanctify-quote-engine.html). Its
maths is deterministic and unit-tested, whereas an AI can make arithmetic slips on
multi-bucket totals. The skill knows about the engine and can hand it a ready-made
JSON block ("Mode A" in `SKILL.md`).

---

## Setup — ChatGPT

**Best option: a Custom GPT (reusable, no re-pasting).**
1. ChatGPT → left sidebar → **GPTs → + Create → Configure**.
2. **Name:** `Sanctify Quotation Generator`.
3. **Instructions:** paste the entire contents of `SKILL.md`.
4. **Knowledge:** upload `templates/quotation-template.html`, all four files from
   `references/` (**service-catalog, pricing-policy, industry-playbooks,
   agency-profile**), and both files from `examples/`.
5. Save (Only me is fine). Open it and type: *"A client just called."*

> The two most valuable knowledge files are **`pricing-policy.md`** (stops
> under-pricing and enforces approval on discounts) and **`industry-playbooks.md`**
> (makes proposals read bespoke instead of generic). Don't skip them.

**Quick option: a Project or a normal chat.**
- Create a **Project**, add the same files to the project files, and put "Follow
  SKILL.md exactly" in the project instructions; **or**
- In any chat, paste `SKILL.md` + `quotation-template.html` +
  `service-catalog.md` and say *"Act as this skill. A client just called."*

---

## Setup — Gemini

**Best option: a Gem (reusable).**
1. Gemini → **Gems / Gem manager → New Gem**.
2. **Name:** `Sanctify Quotation Generator`.
3. **Instructions:** paste the entire contents of `SKILL.md`, then add at the end:
   *"Use the knowledge files for the HTML template, rate card, and profile copy."*
4. **Knowledge:** upload the same files listed in the ChatGPT step 4.
5. Save, open the Gem, and type: *"A client just called."*

**Quick option:** in a normal Gemini chat, paste `SKILL.md` +
`quotation-template.html` + `service-catalog.md` and say *"Act as this skill."*

> Gemini can't create a `.pdf` file directly — that's exactly why this skill
> outputs HTML you print to PDF. It works the same in both tools.

---

## The logo (already embedded)

The Sanctify logo is **embedded in the template by default** (as a data URI), so
it appears on the cover with **no extra steps** — the AI's HTML output includes
it automatically.

If you ever want to swap it for a different image file:
- Keep `assets/sanctify-logo.png` next to your `quotation.html` and change the
  `src="data:image/png..."` on the cover `<img>` to `src="sanctify-logo.png"`, or
- Replace the data URI with the contents of a new `assets/logo-datauri.txt`.

The top "SANCTIFY – Advertise to promote…." bar and footer show regardless.

---

## Editing your rates later

Open `references/service-catalog.md` and change the prices, then re-upload it to
your Custom GPT / Gem knowledge. The AI will use the new rates. You can always
override any price during the conversation too.

---

## Notes

- Currency is **INR (₹)**; **18% GST is shown as extra** by default.
- Default address/contact: `#171/1-A, MES College Road, Bharat Nagar Colony,
  Vasco da Gama, Goa – 403726 · +91 99233 52923 · designer@sanctify.in`.
- Everything is editable — tell the AI "change the address" or "add a line item"
  and it will.
