"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
    Cell,
    LabelList,
} from "recharts";

const CHART_DATA = [
    { name: "Medication", value: 7.8, fill: "#F87171" },
    { name: "Medical", value: 7.4, fill: "#FBBF24" },
    { name: "Mental Health", value: 5.9, fill: "#F472B6" },
];

/**
 * Simple vertical bar chart showing the national average %
 * for each of the 3 cost-barrier indicators.
 */
export function IndicatorImportanceChart() {
    return (
        <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={CHART_DATA}
                    margin={{ top: 20, right: 20, bottom: 0, left: 20 }}
                >
                    <XAxis
                        dataKey="name"
                        tick={{ fontSize: 13, fill: "#475569" }}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        domain={[0, 10]}
                        tick={{ fontSize: 12, fill: "#64748B" }}
                        tickLine={false}
                        axisLine={false}
                        unit="%"
                    />
                    <Tooltip
                        contentStyle={{
                            background: "#1E293B",
                            border: "1px solid rgba(255,255,255,0.2)",
                            borderRadius: 8,
                            color: "#F1F5F9",
                        }}
                        labelStyle={{ color: "#F1F5F9" }}
                        itemStyle={{ color: "#F1F5F9" }}
                        formatter={(value) => [`${value}%`, "National Avg"]}
                        cursor={{ fill: "rgba(0,0,0,0.05)" }}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={60}>
                        {CHART_DATA.map((entry) => (
                            <Cell key={entry.name} fill={entry.fill} />
                        ))}
                        <LabelList
                            dataKey="value"
                            position="top"
                            formatter={(value) => `${value}%`}
                            style={{ fontSize: 13, fontWeight: 600, fill: "#0F172A" }}
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
