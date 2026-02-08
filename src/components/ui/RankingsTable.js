"use client";

import { motion, AnimatePresence } from "framer-motion";
import { COLORS } from "@/data/constants";

export function RankingsTable({ data, highlight = false }) {
  return (
    <div className="overflow-x-auto md:no-scrollbar">
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
        <AnimatePresence mode="wait">
          <motion.tbody
            key={data.map(d => d.subgroup).join(',')}
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.06
                }
              }
            }}
          >
            {data.map((row, i) => {
              const isTopThree = row.rank <= 3;
              const isHighlighted = highlight && !isTopThree;

              return (
                <motion.tr
                  key={row.subgroup}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  style={isHighlighted ? { backgroundColor: COLORS.nationalAvgBg } : {}}
                  className={`
                    border-b border-slate-100
                    ${isTopThree ? "bg-red-50" : isHighlighted ? "border-indigo-300" : "hover:bg-slate-50"}
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
                    <span className="text-[10px] text-slate-400 font-normal ml-0.5">/3</span>
                  </td>
                </motion.tr>
              );
            })}
          </motion.tbody>
        </AnimatePresence>
      </table>
    </div>
  );
}
