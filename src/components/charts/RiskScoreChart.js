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
                    margin={{ top: 0, right: 20, bottom: 0, left: 0 }}
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
                        width={150}
                        tick={{ fontSize: 12, fill: "#475569" }}
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
                        labelStyle={{ color: "#F1F5F9" }}
                        formatter={(value) => [value.toFixed(2), "Risk Score"]}
                        itemStyle={{ color: "#F1F5F9" }}
                        cursor={{ fill: "rgba(0,0,0,0.05)" }}
                    />
                    <Bar 
                        dataKey="risk_score" 
                        radius={[0, 4, 4, 0]}
                        isAnimationActive={false}
                    >
                        {chartData.map((entry, index) => {
                            let fill = "#CBD5E1"; // default grey
                            if (entry.isNationalAvg) fill = "#60A5FA"; // blue for national avg
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
