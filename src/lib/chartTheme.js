export const chartTheme = {
  colors: {
    teal: "#2DD4BF",
    coral: "#FB7185",
    amber: "#FBBF24",
    red: "#EF4444",
    slate: "#94A3B8",
  },
  background: "#1E293B",
  gridColor: "rgba(148, 163, 184, 0.1)",
  axisColor: "#64748B",
  tooltip: {
    background: "#1E293B",
    border: "rgba(255, 255, 255, 0.1)",
    text: "#F1F5F9",
  },
};

export function getSeverityColor(score, thresholds) {
  for (const t of thresholds) {
    if (score <= t.max) return t.color;
  }
  return "#EF4444";
}
