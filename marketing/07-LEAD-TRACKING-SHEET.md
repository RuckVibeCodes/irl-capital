# IRL Capital — Lead Tracking Sheet Template

---

## Google Sheet Structure

Create a Google Sheet with the following columns:

### SHEET 1: Active Leads

| Column | What to Track |
|--------|---------------|
| A: Date | When lead came in |
| B: Source | FB Ad, Cold Email, Referral, Organic |
| C: Name | Contact name |
| D: Phone | Phone number |
| E: Email | Email address |
| F: Business Name | Company name |
| G: Industry | Contractor, Salon, Restaurant, etc. |
| H: City | Atlanta suburb/area |
| I: Revenue | Monthly revenue range |
| J: Credit Range | Self-reported credit score range |
| K: Funding Needed | Amount requested |
| L: Funding Purpose | Equipment, expansion, working capital, etc. |
| M: Status | New / Contacted / Qualified / Submitted / Approved / Funded / Lost |
| N: Next Action | What needs to happen next |
| O: Follow-up Date | When to follow up |
| P: Notes | Call notes, details, etc. |
| Q: Lender Submitted To | Which lender(s) |
| R: Funded Amount | Final funded amount |
| S: Commission | Your commission (10%) |

---

### STATUS DEFINITIONS

- **New** — Lead submitted, not yet contacted
- **Contacted** — Spoke with lead, gathering info
- **Qualified** — Meets criteria, collecting docs
- **Submitted** — Sent to lender(s)
- **Approved** — Offer extended
- **Funded** — Money deposited, deal closed
- **Lost** — Didn't qualify, declined, or ghosted

---

### SHEET 2: Pipeline Summary (Dashboard)

Use formulas to auto-calculate:

| Metric | Formula |
|--------|---------|
| Total Leads | =COUNTA(A:A)-1 |
| New Leads | =COUNTIF(M:M,"New") |
| In Progress | =COUNTIF(M:M,"Contacted")+COUNTIF(M:M,"Qualified")+COUNTIF(M:M,"Submitted") |
| Approved | =COUNTIF(M:M,"Approved") |
| Funded | =COUNTIF(M:M,"Funded") |
| Lost | =COUNTIF(M:M,"Lost") |
| Total Funded Amount | =SUMIF(M:M,"Funded",R:R) |
| Total Commission | =SUMIF(M:M,"Funded",S:S) |
| Conversion Rate | =COUNTIF(M:M,"Funded")/COUNTA(A:A)-1 |

---

### SHEET 3: Monthly Tracker

| Month | Leads | Funded | Amount Funded | Commission |
|-------|-------|--------|---------------|------------|
| Jan 2026 | | | | |
| Feb 2026 | | | | |
| Mar 2026 | | | | |
| ... | | | | |

---

## COLOR CODING (Optional)

- 🔴 **Red** — Lost / Cold / No follow-up
- 🟡 **Yellow** — Waiting for response / Follow-up needed
- 🟢 **Green** — Active / Moving forward
- 🔵 **Blue** — Funded / Complete

---

## DAILY WORKFLOW

1. **Morning:** Check sheet for follow-ups due today
2. **Throughout day:** Update status after each call
3. **End of day:** Add any new leads, note next actions
4. **Weekly:** Review pipeline, identify stuck deals

---

## GOOGLE SHEET TEMPLATE LINK

Create your own copy:
(Matt: I can create this for you in your Google Drive if you share access, or you can copy this structure)

---

## ALTERNATIVE: Notion CRM

If you prefer Notion, same structure but with:
- Kanban board view (drag leads between stages)
- Calendar view for follow-ups
- Linked database for lender contacts

---

## UPGRADE PATH

Once you hit 20+ leads/month, consider:
- **HubSpot Free CRM** — More automation
- **Pipedrive** — Built for sales pipelines
- **Close.com** — Built-in calling + email
- **GoHighLevel** — All-in-one (used by many in funding space)
