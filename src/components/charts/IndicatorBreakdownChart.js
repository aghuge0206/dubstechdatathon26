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
            style={{
                fontSize: 12,
                fill: isNatAvg ? "#3B82F6" : "#475569",
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
        <div style={{ height: chartData.length * 45 }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={chartData}
                    layout="vertical"
                    margin={{ top: 0, right: 30, bottom: 0, left: 0 }}
                >
                    <XAxis
                        type="number"
                        domain={[0, 70]}
                        ticks={[0, 10, 20, 30, 40, 50, 60, 70]}
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
                        height={36}
                        wrapperStyle={{ fontSize: 13 }}
                    />
                    <Bar
                        dataKey="medical_unmet_pct"
                        name="Medical"
                        stackId="a"
                        fill="#60A5FA"
                        barSize={20}
                        isAnimationActive={false}
                    />
                    <Bar
                        dataKey="medication_unmet_pct"
                        name="Medication"
                        stackId="a"
                        fill="#FBBF24"
                        barSize={20}
                        isAnimationActive={false}
                    />
                    <Bar
                        dataKey="mental_unmet_pct"
                        name="Mental Health"
                        stackId="a"
                        fill="#F472B6"
                        radius={[0, 4, 4, 0]}
                        barSize={20}
                        isAnimationActive={false}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
