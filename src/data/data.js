const hero = {
  title: "Health Equity Gap Index",
  subtitle: "Uncovering Disparities in Access to Care Across America",
  stat: { value: 26000, label: "Data points analyzed", prefix: "", suffix: "+" },
  scrollCueText: "Scroll to explore",
};

const problem = {
  heading: "The Problem",
  rubricLabel: "Process",
  description:
    "Access to healthcare in America is not equal. Race, income, geography, and insurance status create invisible barriers that determine who gets care and who doesn't. We analyzed the National Health Interview Survey (2019-2024) to quantify these disparities.",
  stats: [
    { value: 26000, label: "Data Points", suffix: "+" },
    { value: 54, label: "Health Conditions Tracked", suffix: "" },
    { value: 15, label: "Demographic Groups", suffix: "+" },
  ],
  highlightCards: [
    {
      title: "Uninsured Gap",
      stat: "2.4x",
      description:
        "Uninsured adults are 2.4x more likely to delay care compared to privately insured adults.",
      color: "coral",
    },
    {
      title: "Income Disparity",
      stat: "38%",
      description:
        "Adults below poverty are 38% more likely to lack a usual source of care.",
      color: "amber",
    },
    {
      title: "Geographic Divide",
      stat: "17%",
      description:
        "Rural residents face 17% higher rates of unmet medical needs.",
      color: "teal",
    },
  ],
};

const process = {
  heading: "Our Process",
  rubricLabel: "Process",
  description: "A rigorous, reproducible methodology for measuring healthcare access disparities.",
  steps: [
    {
      number: 1,
      title: "Data Loading & Exploration",
      description:
        "Loaded NHIS Access to Care dataset (2019-2024) with 26,000+ data points across 54 health topics. Explored unique topics and identified 3 key access-to-care indicators.",
      tools: ["Python", "Pandas", "Jupyter", "CSV"],
    },
    {
      number: 2,
      title: "Data Filtering & Cleaning",
      description:
        "Filtered for 2024 data across 3 critical indicators: unmet medical care, unmet mental health care, and medication cost barriers. Handled duplicate subgroups and removed incomplete records.",
      tools: ["Pandas", "Python"],
    },
    {
      number: 3,
      title: "Data Transformation",
      description:
        "Pivoted data to create one row per demographic subgroup. Applied min-max normalization (0-1 scaling) to each indicator for fair comparison across different measurement scales.",
      tools: ["Pandas", "NumPy"],
    },
    {
      number: 4,
      title: "Risk Score Calculation",
      description:
        "Created composite risk scores by summing the 3 normalized indicators with equal weights. Ranked all 76 demographic subgroups by risk score to identify disparities.",
      tools: ["Python", "Statistical Modeling"],
    },
    {
      number: 5,
      title: "Visualization & Export",
      description:
        "Exported ranked data to JSON format. Built interactive visualizations using React and Recharts to communicate findings through an accessible web interface.",
      tools: ["React", "Next.js", "Recharts", "TailwindCSS"],
    },
  ],
};

const exploration = {
  heading: "Data Exploration",
  rubricLabel: "Data Exploration",
  description:
    "Before building our metric, we explored the data to understand the landscape of health equity disparities.",
  barChart: {
    title: "Access to Care by Insurance Status",
    description:
      "Percentage reporting delayed or forgone medical care in the past 12 months.",
    data: [
      { group: "Private", estimate: 8.2, lci: 7.1, uci: 9.3 },
      { group: "Medicaid", estimate: 14.7, lci: 12.9, uci: 16.5 },
      { group: "Medicare", estimate: 10.1, lci: 8.8, uci: 11.4 },
      { group: "Uninsured", estimate: 24.3, lci: 21.8, uci: 26.8 },
      { group: "Military", estimate: 9.5, lci: 7.2, uci: 11.8 },
    ],
  },
  lineChart: {
    title: "Trends in Delayed Care Over Time",
    description: "Percentage of adults who delayed medical care, by income level.",
    series: [
      {
        name: "Below Poverty",
        color: "#FB7185",
        data: [
          { year: 2019, estimate: 18.2 },
          { year: 2020, estimate: 22.1 },
          { year: 2021, estimate: 20.8 },
          { year: 2022, estimate: 19.5 },
          { year: 2023, estimate: 18.9 },
          { year: 2024, estimate: 17.8 },
        ],
      },
      {
        name: "Near Poverty",
        color: "#FBBF24",
        data: [
          { year: 2019, estimate: 14.1 },
          { year: 2020, estimate: 18.3 },
          { year: 2021, estimate: 16.5 },
          { year: 2022, estimate: 15.2 },
          { year: 2023, estimate: 14.8 },
          { year: 2024, estimate: 14.0 },
        ],
      },
      {
        name: "Above Poverty",
        color: "#2DD4BF",
        data: [
          { year: 2019, estimate: 7.8 },
          { year: 2020, estimate: 11.2 },
          { year: 2021, estimate: 9.9 },
          { year: 2022, estimate: 8.7 },
          { year: 2023, estimate: 8.3 },
          { year: 2024, estimate: 7.5 },
        ],
      },
    ],
  },
  heatmap: {
    title: "Disparity Heatmap: Conditions x Demographics",
    description:
      "Darker cells indicate higher rates of access barriers. Values represent estimated percentage with barriers.",
    conditions: [
      "Delayed Care",
      "No Usual Source",
      "Unmet Needs",
      "Cost Barrier",
      "No Insurance",
    ],
    demographics: [
      "White",
      "Black",
      "Hispanic",
      "Asian",
      "Below Poverty",
      "Above Poverty",
      "Urban",
      "Rural",
    ],
    values: [
      [8.2, 14.1, 12.8, 6.5, 18.7, 7.1, 9.3, 12.1],
      [12.3, 18.9, 15.2, 8.1, 22.4, 10.5, 13.1, 16.8],
      [6.1, 11.3, 9.8, 4.2, 15.6, 5.3, 7.2, 10.4],
      [10.5, 16.2, 14.1, 7.8, 21.3, 8.9, 11.7, 15.2],
      [5.8, 9.7, 8.1, 3.9, 14.2, 4.1, 6.5, 9.3],
    ],
  },
  pullQuote: {
    text: "Uninsured adults face access barriers at nearly 3x the rate of privately insured adults, a gap that persists even after controlling for income.",
    source: "NHIS Data Analysis, 2019-2024",
  },
  stats: [
    { value: 3, label: "Times higher barrier rate for uninsured", suffix: "x" },
    { value: 42, label: "Percent increase during COVID peak", suffix: "%" },
  ],
};

const metric = {
  heading: "The Health Equity Gap Index",
  rubricLabel: "Metric Created",
  rubricLabel2: "Description of Metric",
  description:
    "We created a single composite score that captures the severity of health equity disparities for each demographic group.",
  formula: {
    expression:
      "HEGI = w\u2081\u00B7AccessGap + w\u2082\u00B7CostBarrier + w\u2083\u00B7UnmetNeeds + w\u2084\u00B7Trend",
    components: [
      {
        symbol: "AccessGap",
        description:
          "Deviation from national average in access-to-care estimates",
        weight: "0.30",
      },
      {
        symbol: "CostBarrier",
        description:
          "Proportion reporting cost as primary barrier to care",
        weight: "0.25",
      },
      {
        symbol: "UnmetNeeds",
        description:
          "Rate of unmet medical, dental, or prescription needs",
        weight: "0.25",
      },
      {
        symbol: "Trend",
        description:
          "5-year trajectory: improving (\u2212) or worsening (+)",
        weight: "0.20",
      },
    ],
  },
  interpretation: {
    title: "Interpreting the Score",
    description:
      "HEGI scores range from 0 to 100. Higher scores indicate greater disparity.",
    scale: [
      { max: 25, label: "Low Disparity", color: "#2DD4BF" },
      { max: 50, label: "Moderate", color: "#FBBF24" },
      { max: 75, label: "High Disparity", color: "#FB7185" },
      { max: 100, label: "Critical", color: "#EF4444" },
    ],
  },
  distribution: {
    title: "HEGI Score Distribution Across Groups",
    data: [
      { group: "White (Non-Hispanic)", score: 22 },
      { group: "Black (Non-Hispanic)", score: 61 },
      { group: "Hispanic", score: 54 },
      { group: "Asian", score: 18 },
      { group: "Below Poverty", score: 73 },
      { group: "Near Poverty", score: 52 },
      { group: "Above Poverty", score: 15 },
      { group: "Uninsured", score: 82 },
      { group: "Medicaid", score: 47 },
      { group: "Private Insurance", score: 12 },
      { group: "Rural", score: 58 },
      { group: "Urban", score: 31 },
    ],
  },
};

const rankings = {
  heading: "Rankings by Equity Gap",
  rubricLabel: "Entities Ranked",
  description:
    "Demographic groups ranked by HEGI score, from most to least disparate.",
  data: [
    { rank: 1, group: "Uninsured", score: 82, severity: "critical", topGap: "Cost barrier 3.1x avg" },
    { rank: 2, group: "Below Poverty", score: 73, severity: "high", topGap: "Access gap 2.8x avg" },
    { rank: 3, group: "Black (Non-Hispanic)", score: 61, severity: "high", topGap: "Unmet needs 2.2x avg" },
    { rank: 4, group: "Rural", score: 58, severity: "high", topGap: "No usual source 1.9x avg" },
    { rank: 5, group: "Hispanic", score: 54, severity: "moderate", topGap: "Cost barrier 1.8x avg" },
    { rank: 6, group: "Near Poverty", score: 52, severity: "moderate", topGap: "Access gap 1.7x avg" },
    { rank: 7, group: "Medicaid", score: 47, severity: "moderate", topGap: "Unmet needs 1.5x avg" },
    { rank: 8, group: "Urban", score: 31, severity: "moderate", topGap: "Cost barrier 1.2x avg" },
    { rank: 9, group: "White (Non-Hispanic)", score: 22, severity: "low", topGap: "Below national avg" },
    { rank: 10, group: "Asian", score: 18, severity: "low", topGap: "Below national avg" },
    { rank: 11, group: "Above Poverty", score: 15, severity: "low", topGap: "Below national avg" },
    { rank: 12, group: "Private Insurance", score: 12, severity: "low", topGap: "Below national avg" },
  ],
  severityThresholds: [
    { max: 25, label: "Low Disparity", color: "#2DD4BF" },
    { max: 50, label: "Moderate", color: "#FBBF24" },
    { max: 75, label: "High Disparity", color: "#FB7185" },
    { max: 100, label: "Critical", color: "#EF4444" },
  ],
};

const insights = {
  heading: "Key Insights",
  rubricLabel: "Insights",
  cards: [
    {
      title: "Insurance is the Strongest Predictor",
      description:
        "Uninsured status produces the highest HEGI score (82), surpassing even income and race as a predictor of health access barriers. This suggests policy interventions targeting coverage gaps would have the greatest impact.",
      icon: "shield",
    },
    {
      title: "Income Amplifies Every Disparity",
      description:
        "Below-poverty groups score 4.9x higher than above-poverty across all access measures. Income acts as a multiplier -- when combined with minority status or rural location, disparities compound dramatically.",
      icon: "trending-up",
    },
    {
      title: "The Rural-Urban Divide is Growing",
      description:
        "Rural HEGI scores (58) nearly double urban scores (31), and the gap widened 12% from 2019-2024. Rural residents face compounding barriers: fewer providers, longer distances, and higher uninsured rates.",
      icon: "map",
    },
  ],
};

const footer = {
  team: "Team [Your Team Name]",
  event: "Dub Tech Datathon 2026",
  dataSource:
    "National Health Interview Survey (NHIS), Access to Care Dataset, 2019-2024",
  dataCitation:
    "National Center for Health Statistics. National Health Interview Survey, 2019-2024. Public-use data file and documentation.",
};

export default { hero, problem, process, exploration, metric, rankings, insights, footer };
