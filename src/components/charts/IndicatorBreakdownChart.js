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

/**
 * Stacked horizontal bar chart showing the 3 cost-barrier indicators
 * for each subgroup. National avg row styled distinctly.
 */

function CustomYTick({ x, y, payload }) {
    const isNatAvg = payload.value === "National Avg (18+)";
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
            {payload.value}
        </text>
    );
}

export function IndicatorBreakdownChart({ data }) {
    // Reverse so rank 1 appears at the top
    const chartData = [...data].reverse();

    return (
        <div style={{ height: chartData.length * 100 }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={chartData}
                    layout="vertical"
                    margin={{ top: 0, right: 30, bottom: 0, left: 0 }}
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
                        width={170}
                        tick={<CustomYTick />}
                        tickLine={false}
                        axisLine={false}
                    />
                    <Tooltip
                        contentStyle={{
                            background: "#1E293B",
                            border: "1px solid rgba(255,255,255,0.2)",
                            borderRadius: 8,
                            color: "#F1F5F9",
                        }}
                        formatter={(value, name) => [`${value}%`, name]}
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
