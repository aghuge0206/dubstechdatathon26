"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Cell,
    Tooltip,
} from "recharts";

import { COLORS } from "@/data/constants";
import { useIsMobile } from "@/hooks/useIsMobile";

/**
 * Horizontal bar chart showing risk scores.
 * Top 3 bars are highlighted in red.
 */
export function RiskScoreChart({ data }) {
    const isMobile = useIsMobile();
    // Reverse for horizontal bar chart (highest at top)
    const chartData = [...data].reverse();

    return (
        <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={chartData}
                    layout="vertical"
                    margin={{ top: 0, right: isMobile ? 10 : 20, bottom: 0, left: 0 }}
                >
                    <XAxis
                        type="number"
                        domain={[0, 3]}
                        tick={{ fontSize: 12, fill: "#64748B" }}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        type="category"
                        dataKey="subgroup"
                        width={isMobile ? 90 : 150}
                        tick={{ fontSize: 12, fill: "#475569" }}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={isMobile ? (v) => (v.length > 12 ? v.slice(0, 12) + "\u2026" : v) : undefined}
                    />
                    <Tooltip
                        content={({ payload, active }) => {
                            if (!active || !payload || !payload.length) return null;
                            const d = payload[0].payload;
                            return (
                                <div className="bg-slate-800 text-white text-xs px-3 py-2 rounded shadow-lg">
                                    <p className="font-medium mb-1">{d.subgroup}</p>
                                    <div className="space-y-0.5 text-slate-300">
                                        <p>Medical: {d.medical_unmet_pct}%</p>
                                        <p>Mental: {d.mental_unmet_pct}%</p>
                                        <p>Medication: {d.medication_unmet_pct}%</p>
                                    </div>
                                    <p className="mt-1 pt-1 border-t border-slate-600 font-bold text-white">
                                        Risk Score: {d.risk_score.toFixed(2)} / 3.00
                                    </p>
                                </div>
                            );
                        }}
                        cursor={{ fill: "rgba(0,0,0,0.05)" }}
                    />
                    <Bar
                        dataKey="risk_score"
                        radius={[0, 4, 4, 0]}
                        isAnimationActive={false}
                    >
                        {chartData.map((entry, index) => {
                            let fill = "#CBD5E1"; // default grey
                            if (entry.isNationalAvg) fill = COLORS.nationalAvg; // indigo for national avg baseline
                            else if (entry.rank <= 3) fill = "#F87171"; // red for top 3
                            return (
                                <Cell
                                    key={entry.subgroup}
                                    fill={fill}
                                />
                            );
                        })}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
