"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from "recharts";
import { COLORS } from "@/data/constants";
import { useIsMobile } from "@/hooks/useIsMobile";

/**
 * Stacked horizontal bar chart showing the 3 cost-barrier indicators
 * for each subgroup. National avg row styled distinctly.
 */

function CustomYTick({ x, y, payload, isMobile }) {
    const isNatAvg = payload.value === "National Avg (18+)";
    let label = payload.value;
    if (isMobile && label.length > 12) {
        label = label.slice(0, 12) + "\u2026";
    }
    return (
        <text
            x={x}
            y={y}
            textAnchor="end"
            dominantBaseline="middle"
            fill={isNatAvg ? COLORS.nationalAvg : "#475569"}
            style={{
                fontSize: 12,
                fontWeight: isNatAvg ? 700 : 400,
            }}
        >
            {label}
        </text>
    );
}

export function IndicatorBreakdownChart({ data }) {
    const isMobile = useIsMobile();
    // Reverse so rank 1 appears at the top
    const chartData = [...data].reverse();
    const rowHeight = isMobile ? 80 : 100;

    return (
        <div style={{ height: chartData.length * rowHeight }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={chartData}
                    layout="vertical"
                    margin={{ top: 0, right: isMobile ? 10 : 30, bottom: 0, left: 0 }}
                    barGap={4}
                >
                    <XAxis
                        type="number"
                        domain={[0, 30]}
                        ticks={[0, 5, 10, 15, 20, 25, 30]}
                        tick={{ fontSize: 12, fill: "#64748B" }}
                        tickLine={false}
                        axisLine={false}
                        unit="%"
                    />
                    <YAxis
                        type="category"
                        dataKey="subgroup"
                        width={isMobile ? 90 : 170}
                        tick={<CustomYTick isMobile={isMobile} />}
                        tickLine={false}
                        axisLine={false}
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
                    />
                    <Legend
                        verticalAlign="top"
                        height={48}
                        wrapperStyle={{ fontSize: 13, paddingBottom: "20px" }}
                    />
                    <Bar
                        dataKey="medical_unmet_pct"
                        name="Medical"
                        fill="#FBBF24"
                        barSize={18}
                        radius={[0, 4, 4, 0]}
                        isAnimationActive={false}
                    />
                    <Bar
                        dataKey="medication_unmet_pct"
                        name="Medication"
                        fill="#F87171"
                        barSize={18}
                        radius={[0, 4, 4, 0]}
                        isAnimationActive={false}
                    />
                    <Bar
                        dataKey="mental_unmet_pct"
                        name="Mental Health"
                        fill="#60A5FA"
                        barSize={18}
                        radius={[0, 4, 4, 0]}
                        isAnimationActive={false}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
