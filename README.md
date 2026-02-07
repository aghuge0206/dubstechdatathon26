# dubstechdatathon26 | Team 25

**Who is getting blocked from healthcare, and why?**

This project analyzes the National Health Interview Survey (NHIS) Access to Care Dataset to identify, quantify, and rank healthcare access disparities across 76 demographic subgroups in the United States.

---

## The Problem
Generic statistics like "26,000+ data points" don't tell a human story. To drive policy, we need to know exactly **which** populations are falling through the cracks. Most dashboards provide heatmaps but rarely offer a prioritized, actionable ranking.

## The Care Gap Risk Score
We created a custom metric to measure systematic access barriers. The **Care Gap Risk Score** is a composite index (0 - 3) calculated by normalizing and summing three critical unmet needs:

1.  **Unmet Medical Needs**: Percentage who needed medical care in the past 12 months but didn't get it.
2.  **Unmet Mental Health Needs**: Percentage who needed mental health care or counseling but didn't receive it.
3.  **Unmet Medication Needs**: Percentage who needed prescription medications but couldn't afford or access them.

The score identifies **Bisexual**, **Uninsured**, and **Multi-racial (Black and White)** populations as those currently facing the highest cumulative barriers to care.

---

## Tech Stack
This project is built for high-performance data communication:
- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Healthcare-native design system)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Scroll-linked reveals)
- **Charts**: [Recharts](https://recharts.org/) (Custom-themed horizontal rankings)
- **Data**: Static JSON/CSV fetchers (Optimized for zero-database deployment)

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
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Project Structure

| Path | Purpose |
|------|---------|
| `/public/data/` | Contains the final `care_gap_ranked.json` and `.csv` |
| `/src/lib/` | `getCareGapData.js` — The logic for data loading and ranking |
| `/src/components/sections/` | Modular one-pager sections (Hero, Rankings, Insights, etc.) |
| `/src/app/globals.css` | Custom design tokens and healthcare-native styling |

---

## The Team
Built for the **DubsTech Datathon 2026** (Data Analysis Track) by **Team 25**:
- **Akshat Ghuge** 
- **Yonie Rivera-Aguilar**