# United States Care Gap Risk Assessment | Team 25

**Who is getting blocked from healthcare, and why?**

**Live Site:** [care-gap-risk-assessment.netlify.app](https://care-gap-risk-assessment.netlify.app/)

This project analyzes the National Health Interview Survey (NHIS) Access to Care Dataset (2024) to identify, quantify, and rank healthcare access disparities across 76 demographic subgroups in the United States.

---

## The Problem

Millions of Americans can't afford the care they need. They skip medications, delay medical care, and go without mental health treatment — not because services don't exist, but because cost stands in the way. These barriers aren't equal: depending on age, race, gender, income, disability status, or sexual orientation, the gap between needing care and getting it can be significantly different.

## The Care Gap Risk Score

We created a composite score (0–3) that ranks demographic groups by how strongly cost prevents them from receiving care. The score is calculated in three steps:

1. **Normalize** — Each of the three indicators is rescaled to 0–1 using min-max normalization
2. **Combine** — The three normalized values are summed with equal weights (1:1:1)
3. **Rank** — All 76 subgroups are sorted from highest to lowest composite score

### What We Measured

| Indicator | National Avg | Description |
|-----------|-------------|-------------|
| **Unmet Medical Needs** | 7.4% | Couldn't afford medical care in the past year |
| **Unmet Mental Health Needs** | 5.9% | Couldn't afford mental health care or counseling in the past year |
| **Unmet Medication Needs** | 7.8% | Didn't take medication as prescribed to save money in the past year |

### Highest-Risk Groups

| Rank | Subgroup | Risk Score | Key Driver |
|------|----------|------------|------------|
| 1 | **Bisexual** | 2.54 | Unmet mental health needs nearly 5x the national average |
| 2 | **Uninsured** | 2.47 | Medical (25.0%) and medication (25.8%) barriers over 3x average |
| 3 | **Black and White** | 1.58 | Medication access over 2x the national average |

---

## Our Process

1. **Data Loading & Exploration** — Loaded NHIS dataset (26,000+ data points across 54 health topics) and identified 3 key access-to-care indicators
2. **Data Filtering & Cleaning** — Filtered for 2024 data across 3 critical indicators; handled duplicates and incomplete records
3. **Data Transformation** — Pivoted to one row per subgroup; applied min-max normalization for fair cross-indicator comparison
4. **Risk Score Calculation** — Summed 3 normalized indicators with equal weights; ranked all 76 subgroups
5. **Visualization & Export** — Exported ranked data to JSON; built interactive visualizations with React and Recharts

---

## Key Insights

- **Sexual orientation and insurance status drive more risk than age, race, or gender** — the two highest-scoring subgroups are Bisexual (2.54) and Uninsured (2.47)
- **Insurance status drives medical and medication gaps disproportionately** — uninsured adults post the highest unmet medical (25.0%) and medication (25.8%) rates of any subgroup
- **Medication affordability is the most widespread national barrier** — at 7.8%, it exceeds both unmet medical care (7.4%) and unmet mental health care (5.9%)

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Charts**: [Recharts](https://recharts.org/)
- **Data Pipeline**: Python, Pandas, NumPy, Jupyter
- **Deployment**: [Netlify](https://www.netlify.com/) (Static export)

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation
```bash
# Clone the repository
git clone https://github.com/aghuge0206/dubstechdatathon26.git

# Navigate to the directory
cd dubstechdatathon26

# Install dependencies
npm install

# Run the development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site locally.

---

## Project Structure

| Path | Purpose |
|------|---------|
| `/public/data/` | Final `care_gap_ranked.json` and `.csv` datasets |
| `/src/data/` | Static data (`data.js`) and constants (`constants.js`) |
| `/src/lib/` | `getCareGapData.js` — Data loading and ranking logic |
| `/src/components/sections/` | 11 modular page sections |
| `/src/components/charts/` | Chart components (risk score, indicator breakdown, importance) |
| `/src/components/ui/` | Shared UI primitives (cards, tables, animations) |
| `/src/components/layout/` | Navigation, progress bar, and footer |

---

## Limitations

- **Self-reported data** — responses reflect participant recall and willingness to disclose
- **Cost barriers only** — non-cost barriers (transportation, language, wait times) are not captured
- **Equal weighting assumption** — the 1:1:1 weighting treats all barrier dimensions as equally important
- **Cross-sectional snapshot** — single survey period; cannot detect trends over time
- **Correlation, not causation** — the score identifies associations, not causal mechanisms

---

## The Team

Built for the **DubsTech Datathon 2026** (Data Analysis Track) by **Team 25**:
- **Akshat Ghuge** — [LinkedIn](https://www.linkedin.com/in/akshat-ghuge/)
- **Yonie Rivera-Aguilar** — [LinkedIn](https://www.linkedin.com/in/yirivera/)
