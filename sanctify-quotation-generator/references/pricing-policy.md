# Sanctify Commercial & Pricing Policy

This is the **governance layer** of the quotation system. The rate card says
*what things cost*; this file says *what you're allowed to do with those numbers* —
discount authority, minimum terms, payment structure, and the clauses that protect
margin when scope moves.

> ⚠️ **These are sensible defaults, not your ratified company policy.**
> Review every threshold below with the directors and edit to match how Sanctify
> actually trades. The AI and the Quote Engine both follow whatever is written here,
> so this file is the single source of truth once you've signed off on it.
>
> **Tax items are informational, not tax advice.** GST/TDS treatment must be
> confirmed with your CA. The engine simply applies whatever rate you configure.

---

## 1. Discount authority (the approval ladder)

| Discount on quoted value | Who can approve | How it must appear |
|---|---|---|
| 0% | Anyone | Standard rate card |
| up to **5%** | Executive taking the call | "Introductory adjustment" |
| up to **10%** | Senior / Account Lead | Must be recorded on the quote |
| up to **20%** | Director sign-off required | Needs a stated business reason |
| above **20%** | **Not permitted** without a written margin case | — |

Rules:
- **Never discount ad spend pass-through.** Discount the *service fee* only —
  Facebook/Google spend is a cost, not margin.
- Prefer **scope reduction over discounting.** Drop 2 creatives before cutting 10%;
  it protects the rate card and the perceived value of the work.
- A discount given once becomes the client's expected baseline. Where possible use a
  **one-time "onboarding waiver"** (e.g. setup fee waived) instead of a recurring %.
- Bundle logic is preferable to raw discounting — see §2.

The Quote Engine enforces this ladder live and flags anything above 10%.

## 2. Bundling (grow value without cutting rate)

Offer these instead of a percentage cut:

| Bundle | Give | Keeps |
|---|---|---|
| 6-month retainer commitment | 1 month of creatives at 50% | Full monthly rate intact |
| Setup + 3-month management | Waive ½ the setup fee | Management rate intact |
| Website + SMM together | Waive 1st-year AMC (already standard) | Both base rates intact |
| Annual prepayment | ~1 month free (≈8%) | Cash upfront, no churn |

## 3. Minimum engagement terms

- **Social media management: 3 months minimum.** Results before 90 days aren't
  representative and short engagements damage case-study quality.
- **SEO: 6 months minimum.** Ranking movement below this is not meaningful.
- **Paid ads: 7-day minimum** campaign window per platform.
- **Website: 50/40/10** — see §4.

The engine warns if monthly services are quoted for under 3 months.

## 4. Payment structure

| Engagement | Default terms |
|---|---|
| Paid advertising | **100% advance** (platform spend is prepaid — non-negotiable) |
| Monthly retainer | **In advance**, by the 5th of each month |
| Website | **50%** on confirmation, **40%** on design approval, **10%** on go-live |
| One-time creative / setup | **100% advance** |
| Annual items (domain/hosting/AMC) | **Advance**, per year |

Additional defaults:
- Quote **validity: 15 days** (rates, especially hosting/ad costs, move).
- Late payment beyond 15 days: work **pauses**, it is not silently absorbed.
- Ad accounts are paused if spend isn't funded — state this plainly.

## 5. Scope protection (where margin quietly dies)

State these on every quote so they're never a negotiation later:

- **Creative revisions: 2 per asset.** Beyond that, billed at the design rate.
- **Content/inputs from client** (logos, images, copy, approvals) within **5 working
  days**; delays shift the timeline, not the fee.
- **Website page count is fixed** at the quoted number — extra URLs at ₹500/URL.
- **AMC covers basic updates only** — not redesigns, new modules, or new pages.
- **Reporting cadence:** monthly. Ad-hoc deep-dive reports are a billable add-on.
- **Platform/policy changes** (Meta/Google rule changes, ad rejections) are outside
  Sanctify's control and don't constitute non-delivery.
- **Third-party costs** (stock imagery, premium plugins, SSL, spend) are pass-through
  and billed at actual.

## 6. Margin discipline (internal only — never printed)

- Track **cost per line** (designer hours, ad-ops time, hosting cost) and keep
  blended margin at or above a **35% floor**.
- Below 35%: escalate before sending. Below 20%: decline or rescope.
- Watch the **three margin killers**: unlimited revisions, unpaid strategy work
  during pitching, and "quick favours" that aren't on any quote.
- The engine has an optional internal cost field; it never appears on the client PDF.

## 7. Tax & compliance (confirm with your CA)

- **GST:** configured at 18% and shown as *extra* by default. The engine also supports
  GST-inclusive pricing (it back-calculates the base correctly) and a no-GST mode.
- **TDS:** corporate clients commonly deduct TDS on advertising/professional services,
  which reduces your *receipt* but not the invoice value. Track it in collections —
  the applicable section and rate must be confirmed with your CA.
- Always quote the **GSTIN** on the final invoice (not required on the quotation).
- For clients outside India, confirm export-of-service treatment with your CA before
  quoting without GST.

## 8. When to walk away

Decline or heavily re-scope if:
- The client wants **guaranteed rankings, leads, or sales volumes** — nobody can
  promise these, and promising them creates liability.
- Budget is below the minimum that can actually move the metric (a ₹5,000 ad budget
  cannot produce meaningful real-estate leads).
- They demand results but won't fund spend, approve creatives, or give access.
- Payment terms are "after results."

Saying no protects the case studies that win the *next* ten clients.

---

## 9. What the AI must never do

- Never invent a price that isn't in the rate card — ask instead.
- Never promise a specific ranking, lead count, ROI, or revenue figure.
- Never quote below the discount ladder without flagging the approval requirement.
- Never merge one-time, monthly, and yearly figures into a single misleading number.
- Never state tax treatment as advice — reference this file and defer to the CA.
