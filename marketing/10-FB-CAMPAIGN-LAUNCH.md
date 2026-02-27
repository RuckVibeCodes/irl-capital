# IRL Capital — Facebook Ad Campaign Launch Plan
*Ready to execute. Just needs Matt's Ads Manager access.*

---

## CAMPAIGN STRUCTURE

```
Campaign: IRL Capital — Lead Gen (Atlanta)
├── Budget: $20-30/day (CBO — Campaign Budget Optimization)
├── Objective: Leads
│
├── Ad Set 1: Local Business Owners — Broad
│   ├── Hook 1: "Banks Said No?" (Concept 2)
│   └── Hook 2: "From ATL. For ATL." (Concept 1)
│
├── Ad Set 2: Business Credit / Funding Intent
│   ├── Hook 3: "Find Out in 2 Minutes" (Hook 5)
│   └── Hook 4: "My Credit Isn't Perfect" (Hook 8)
│
└── Ad Set 3: Industry-Specific (Contractors/Salons/Restaurants)
    ├── Hook 5: "Need $75K for Equipment?" (Concept 4 - contractor)
    └── Hook 6: Salon/restaurant version of same
```

---

## AD SET TARGETING

### Ad Set 1: Local Business Owners — Broad
| Setting | Value |
|---------|-------|
| Location | Atlanta Metro + 25-mile radius (or all Georgia) |
| Age | 28–55 |
| Interests | Small business, Entrepreneurship, Business loans |
| Behaviors | Small business owners, Business page admins |
| Placements | Facebook Feed + Instagram Feed (auto) |
| Exclude | MLM interests, "make money online" |

### Ad Set 2: Business Credit / Funding Intent
| Setting | Value |
|---------|-------|
| Location | Atlanta Metro + 25-mile radius |
| Age | 28–55 |
| Interests | Business credit, Kabbage, Fundbox, PayPal Working Capital, SBA loans |
| Behaviors | Small business owners |
| Placements | Facebook Feed only |

### Ad Set 3: Industry-Specific
| Setting | Value |
|---------|-------|
| Location | Atlanta Metro + 25-mile radius |
| Age | 28–55 |
| Interests | Construction, Plumbing, HVAC, Hair salon, Restaurant owner, Food service |
| Behaviors | Small business owners |
| Placements | Facebook Feed + Instagram Feed |

---

## AD SPECS (READY TO BUILD)

### Image Ads (All 3 ad sets)
- **Format:** Single image
- **Dimensions:** 1080×1080 (square) + 1200×628 (landscape)
- **Headline:** ≤27 characters
- **Body:** ≤125 characters before truncation
- **CTA Button:** "Apply Now" or "Learn More"

### Recommended First Creatives
1. Matt's photo + Atlanta skyline — "From ATL. For ATL." — use as anchor creative
2. Text-only graphic — "Banks Said No?" in bold on navy background
3. Industry photo (construction site) — "Need $75K for your next job?"

---

## LEAD FORM SETUP (Facebook Native Lead Form)

Use **Facebook Instant Form** (no landing page needed to start).

### Form Fields:
1. Full Name (auto-fill)
2. Email (auto-fill)
3. Phone Number
4. Business Type (dropdown: Contractor / Salon / Restaurant / Retail / Other)
5. Monthly Revenue (dropdown: Under $10K / $10K-$25K / $25K-$50K / $50K+)
6. Funding Amount Needed (dropdown: $25K-$50K / $50K-$100K / $100K-$150K / $150K+)

### Confirmation Message:
> "Thanks! Matt will reach out within 24 hours to discuss your options. No upfront fees. No credit pull yet."

---

## LANDING PAGE OPTION (when ready)

If using the IRL Capital site instead of a native form:
- **URL:** irl-capital.com/apply (or /get-funded)
- Make sure the page has a clear form above the fold
- Install Facebook Pixel before launching (instructions below)

### Facebook Pixel Setup:
1. Go to Ads Manager → Events Manager → Create Pixel
2. Copy the pixel code
3. Add to `index.html` in the IRL Capital site `<head>` tag
4. Set up a "Lead" event on form submit

---

## BUDGET & TIMELINE

### Week 1-2: Test Phase ($20/day)
- Run all 3 ad sets simultaneously
- Kill any ad set with >$30 cost per lead
- Identify winning hook by day 5

### Week 3-4: Optimize ($25/day)
- Double down on winning ad set
- A/B test Matt's face vs. stock photo on winner
- Target: <$20 cost per lead

### Week 5+: Scale ($30-50/day)
- Scale winning combo
- Add retargeting campaign (website visitors / video viewers)
- Lookalike audience from leads collected

---

## LAUNCH CHECKLIST

**Before launching:**
- [ ] Facebook Business Manager account set up
- [ ] Payment method added to Ads Manager
- [ ] IRL Capital Facebook Page created (needed for ads)
- [ ] Ad creatives made (Canva or Figma — see creative concepts)
- [ ] Facebook Pixel installed on site (if using landing page)
- [ ] Lead form built in Ads Manager
- [ ] CRM or spreadsheet ready to receive leads (check Facebook Leads Center or connect Zapier)

**Day 1 launch:**
- [ ] Campaign created with $20/day CBO budget
- [ ] 3 ad sets live (broad / credit intent / industry)
- [ ] 2 creatives per ad set (6 total ads)
- [ ] Notifications on for new leads

**Day 3 check-in:**
- [ ] Review CPM, CTR, cost per lead
- [ ] Pause underperformers (CTR < 0.5%)
- [ ] Note winning headlines

---

## QUICK WIN: RETARGETING (Add Week 3)

### Retargeting Audience: Website Visitors
- Anyone who visited irl-capital.com in last 30 days
- Show them social proof ad ("50+ Atlanta Businesses Funded")
- Budget: $5/day separate campaign

### Retargeting Audience: Video Viewers
- Anyone who watched 50%+ of any video ad
- Show them direct offer ("Ready to Apply?")
- Budget: $5/day

---

## CONNECT LEADS TO CRM

### Option A: Manual (Week 1)
- Check Facebook Leads Center daily
- Add leads to Google Sheet
- Matt follows up within 24 hours

### Option B: Zapier Automation (Week 2+)
- Zapier: Facebook Lead Ads → Google Sheets (free)
- Zapier: Facebook Lead Ads → Email notification to Matt
- Cost: Free tier covers up to 100 leads/month

### Option C: Full CRM (Scale)
- Connect to GoHighLevel or HubSpot
- Auto-SMS + email sequence on lead submit
- Cost: ~$97/mo (GoHighLevel)

---

## NOTES

- **Matt's face will outperform stock photos** — use it as soon as possible
- **Start narrow (Atlanta metro)** — prove ROI before expanding to all of Georgia
- **Native lead forms outperform landing pages** for cold traffic — start there
- **$20/day = ~600-1000 impressions/day** at Atlanta CPMs (~$20-30)
- **Expected leads Week 1:** 3-7 leads at $20-30/day if hooks land
- **One closed deal pays for months of ads** — ROI math is easy here
