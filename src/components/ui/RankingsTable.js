"use client";

import { motion } from "framer-motion";

export function RankingsTable({ data, highlight = false }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="py-3 px-4 text-xs font-mono uppercase tracking-wider text-foreground-tertiary w-16">
              Rank
            </th>
            <th className="py-3 px-4 text-xs font-mono uppercase tracking-wider text-foreground-tertiary">
              Subgroup
            </th>
            <th className="py-3 px-4 text-xs font-mono uppercase tracking-wider text-foreground-tertiary text-right">
              Medical
            </th>
            <th className="py-3 px-4 text-xs font-mono uppercase tracking-wider text-foreground-tertiary text-right">
              Mental
            </th>
            <th className="py-3 px-4 text-xs font-mono uppercase tracking-wider text-foreground-tertiary text-right">
              Medication
            </th>
            <th className="py-3 px-4 text-xs font-mono uppercase tracking-wider text-foreground-tertiary text-right">
              Risk Score
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => {
            const isTopThree = row.rank <= 3;
            const isHighlighted = highlight && !isTopThree;

            return (
              <motion.tr
                key={row.subgroup}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03 }}
                className={`
                  border-b border-slate-100
                  ${isTopThree ? "bg-red-50" : isHighlighted ? "bg-blue-50 border-blue-200" : "hover:bg-slate-50"}
                  transition-colors
                `}
              >
                <td className={`py-3 px-4 font-mono text-sm ${isTopThree ? "text-red-600 font-bold" : "text-foreground-tertiary"}`}>
                  {row.rank}
                </td>
                <td className={`py-3 px-4 font-medium ${isTopThree ? "text-red-900" : "text-foreground"}`}>
                  {row.subgroup}
                </td>
                <td className="py-3 px-4 font-mono text-sm text-foreground-secondary text-right">
                  {row.medical_unmet_pct}%
                </td>
                <td className="py-3 px-4 font-mono text-sm text-foreground-secondary text-right">
                  {row.mental_unmet_pct}%
                </td>
                <td className="py-3 px-4 font-mono text-sm text-foreground-secondary text-right">
                  {row.medication_unmet_pct}%
                </td>
                <td className={`py-3 px-4 font-mono font-bold text-right ${isTopThree ? "text-red-600" : "text-foreground"}`}>
                  {row.risk_score.toFixed(2)}
                </td>
              </motion.tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
