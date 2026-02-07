"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Cell,
    LabelList,
} from "recharts";

/**
 * Horizontal bar chart showing risk scores.
 * Top 3 bars are highlighted in red.
 */
export function RiskScoreChart({ data }) {
    // Reverse for horizontal bar chart (highest at top)
    const chartData = [...data].reverse();

    return (
        <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={chartData}
                    layout="vertical"
                    margin={{ top: 0, right: 60, bottom: 0, left: 0 }}
                >
                    <XAxis
                        type="number"
                        domain={[0, "dataMax"]}
                        tick={{ fontSize: 12, fill: "#64748B" }}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        type="category"
                        dataKey="subgroup"
                        width={150}
                        tick={{ fontSize: 12, fill: "#475569" }}
                        tickLine={false}
                        axisLine={false}
                    />
                    <Bar dataKey="risk_score" radius={[0, 4, 4, 0]}>
                        {chartData.map((entry, index) => {
                            const isTopThree = entry.rank <= 3;
                            return (
                                <Cell
                                    key={entry.subgroup}
                                    fill={isTopThree ? "#DC2626" : "#CBD5E1"}
                                />
                            );
                        })}
                        <LabelList
                            dataKey="risk_score"
                            position="right"
                            formatter={(value) => value.toFixed(2)}
                            style={{ fontSize: 12, fontFamily: "monospace", fill: "#0F172A" }}
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
