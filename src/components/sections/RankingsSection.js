"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RankingsTable } from "@/components/ui/RankingsTable";
import { RiskScoreChart } from "@/components/charts/RiskScoreChart";
import { IndicatorBreakdownChart } from "@/components/charts/IndicatorBreakdownChart";
import { IndicatorImportanceChart } from "@/components/charts/IndicatorImportanceChart";
import { SECTION_IDS } from "@/data/constants";

import { COLORS } from "@/data/constants";

const FILTERS = [
  { key: "top5", label: "Top 5" },
  { key: "top10", label: "Top 10" },
  { key: "top15", label: "Top 15" },
  { key: "bottom5", label: "Bottom 5" },
  { key: "bottom10", label: "Bottom 10" },
  { key: "bottom15", label: "Bottom 15" },
  { key: "nationalAvg", label: "National Avg" },
  { key: "all", label: "All" },
];

function getFilteredData(data, activeFilter) {
  switch (activeFilter) {
    case "top5": return data.slice(0, 5);
    case "top10": return data.slice(0, 10);
    case "top15": return data.slice(0, 15);
    case "bottom5": return data.slice(-5);
    case "bottom10": return data.slice(-10);
    case "bottom15": return data.slice(-15);
    case "nationalAvg": return data.filter((d) => d.subgroup === "18 years and older");
    case "all": return data;
    default: return data.slice(0, 15);
  }
}

export function RankingsSection({ data }) {
  const [activeFilter, setActiveFilter] = useState("top15");
  const [searchTerm, setSearchTerm] = useState("");

  // Download as CSV
  const downloadCSV = () => {
    const headers = ["Rank", "Subgroup", "Medical (%)", "Mental (%)", "Medication (%)", "Risk Score"];
    const rows = data.map(d => [
      d.rank,
      `"${d.subgroup}"`,
      d.medical_unmet_pct,
      d.mental_unmet_pct,
      d.medication_unmet_pct,
      d.risk_score.toFixed(2)
    ]);
    const csv = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "care_gap_rankings.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  // Chart data: top 10 + National Avg row (friend's visualization logic)
  const nationalAvg = data.find((d) => d.subgroup === "18 years and older");
  const topForChart = [
    ...data.slice(0, 10),
    ...(nationalAvg ? [{ ...nationalAvg, subgroup: "National Avg (18+)", isNationalAvg: true }] : []),
  ];

  // Table data: pill-filtered then search-filtered
  let filteredData = getFilteredData(data, activeFilter);
  if (searchTerm.trim()) {
    const term = searchTerm.toLowerCase();
    filteredData = filteredData.filter(d => d.subgroup.toLowerCase().includes(term));
  }
  const isNationalAvg = activeFilter === "nationalAvg";

  return (
    <section id={SECTION_IDS.rankings} className="bg-white border-b border-slate-200">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            title="Who Has the Worst Access?"
          />
        </AnimatedSection>

        {/* Chart */}
        <AnimatedSection delay={0.1}>
          <div className="mt-8 mb-12">
            <h3 className="font-serif text-lg text-foreground mb-4">Top 10 Highest-Risk Groups</h3>
            <RiskScoreChart data={topForChart} />
          </div>
        </AnimatedSection>

        {/* Indicator Breakdown */}
        <AnimatedSection delay={0.15}>
          <div className="mt-8 mb-12">
            <h3 className="font-serif text-lg text-foreground mb-4">What Drives Each Group&apos;s Score?</h3>
            <IndicatorBreakdownChart data={topForChart} />
          </div>
        </AnimatedSection>

        {/* Indicator Importance */}
        <AnimatedSection delay={0.18}>
          <div className="mt-8 mb-12">
            <h3 className="font-serif text-lg text-foreground mb-4">Which Barrier Hits Hardest Nationally?</h3>
            <IndicatorImportanceChart />
          </div>
        </AnimatedSection>

        {/* Pill Filters */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap gap-2 mb-6">
            {FILTERS.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`rounded-full px-4 py-2.5 text-sm font-mono transition-colors ${activeFilter === filter.key
                  ? "bg-slate-800 text-white"
                  : "bg-slate-100 text-foreground-secondary hover:bg-slate-200"
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Table */}
        <AnimatedSection delay={0.3}>
          <h3 className="font-serif text-xl text-foreground mb-2">Explore The Full Rankings</h3>
          <p className="text-foreground-secondary text-sm mb-4">
            All {data.length} demographic subgroups ranked by Care Gap Risk Score. Higher = worse access.
          </p>

          {/* Search and Download */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <input
              type="text"
              placeholder="Search subgroups..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 max-w-sm px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
            <button
              onClick={downloadCSV}
              className="px-4 py-2.5 bg-slate-800 text-white text-sm rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Cleaned CSV
            </button>
          </div>

          {isNationalAvg && (
            <p
              className="text-sm text-black border-l-4 border-indigo-500 p-4 mb-6 italic leading-relaxed shadow-sm"
              style={{ backgroundColor: COLORS.nationalAvgBg }}
            >
              The &ldquo;18 years and older&rdquo; row represents all adults in the NHIS survey, providing a population-level baseline for comparing high-risk and low-risk subgroups.
            </p>
          )}
          <div className="min-h-[400px]">
            <RankingsTable data={filteredData} highlight={isNationalAvg} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
