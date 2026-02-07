"use client";
import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";

function getSeverityColor(severity) {
  const map = {
    critical: "text-accent-red",
    high: "text-accent-coral",
    moderate: "text-accent-amber",
    low: "text-accent-teal",
  };
  return map[severity] || "text-foreground-secondary";
}

function getSeverityBg(severity) {
  const map = {
    critical: "bg-accent-red/10",
    high: "bg-accent-coral/10",
    moderate: "bg-accent-amber/10",
    low: "bg-accent-teal/10",
  };
  return map[severity] || "";
}

export function RankingsTable({ data }) {
  const [sortAsc, setSortAsc] = useState(false);

  const sorted = [...data].sort((a, b) =>
    sortAsc ? a.score - b.score : b.score - a.score
  );

  return (
    <AnimatedSection>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-3 px-4 text-xs font-mono uppercase tracking-wider text-foreground-tertiary">Rank</th>
              <th className="py-3 px-4 text-xs font-mono uppercase tracking-wider text-foreground-tertiary">Group</th>
              <th
                className="py-3 px-4 text-xs font-mono uppercase tracking-wider text-foreground-tertiary cursor-pointer hover:text-accent-teal transition-colors"
                onClick={() => setSortAsc(!sortAsc)}
              >
                HEGI Score {sortAsc ? "\u2191" : "\u2193"}
              </th>
              <th className="py-3 px-4 text-xs font-mono uppercase tracking-wider text-foreground-tertiary hidden md:table-cell">Severity</th>
              <th className="py-3 px-4 text-xs font-mono uppercase tracking-wider text-foreground-tertiary hidden lg:table-cell">Top Gap</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((row, i) => (
              <AnimatedSection key={row.group} delay={i * 0.05}>
                <tr className={`border-b border-white/5 ${getSeverityBg(row.severity)} hover:bg-white/5 transition-colors`}>
                  <td className="py-3 px-4 font-mono text-foreground-tertiary text-sm">{row.rank}</td>
                  <td className="py-3 px-4 text-foreground font-medium">{row.group}</td>
                  <td className={`py-3 px-4 font-mono font-bold ${getSeverityColor(row.severity)}`}>{row.score}</td>
                  <td className={`py-3 px-4 text-sm capitalize hidden md:table-cell ${getSeverityColor(row.severity)}`}>{row.severity}</td>
                  <td className="py-3 px-4 text-sm text-foreground-tertiary hidden lg:table-cell">{row.topGap}</td>
                </tr>
              </AnimatedSection>
            ))}
          </tbody>
        </table>
      </div>
    </AnimatedSection>
  );
}
