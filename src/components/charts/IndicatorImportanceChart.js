"use client";

import React, { memo } from "react";
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
import { useIsMobile } from "@/hooks/useIsMobile";

const CHART_DATA = [
    { name: "Medication", value: 7.8, fill: "#F87171" },
    { name: "Medical", value: 7.4, fill: "#FBBF24" },
    { name: "Mental Health", value: 5.9, fill: "#F472B6" },
];

/**
 * Simple vertical bar chart showing the national average %
 * for each of the 3 cost-barrier indicators.
 */
export const IndicatorImportanceChart = memo(function IndicatorImportanceChart() {
    const isMobile = useIsMobile();

    return (
        <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={CHART_DATA}
                    margin={{ top: 20, right: isMobile ? 10 : 20, bottom: 0, left: isMobile ? 10 : 20 }}
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
                    <Bar
                        dataKey="value"
                        radius={[4, 4, 0, 0]}
                        barSize={isMobile ? 40 : 60}
                        isAnimationActive={false}
                    >
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
});
