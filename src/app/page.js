import data from "@/data/data";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ExplorationSection } from "@/components/sections/ExplorationSection";
import { MetricSection } from "@/components/sections/MetricSection";
import { RankingsSection } from "@/components/sections/RankingsSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { ProgressBar } from "@/components/layout/ProgressBar";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <Navigation />
      <main>
        <HeroSection data={data.hero} />
        <ProblemSection data={data.problem} />
        <ProcessSection data={data.process} />
        <ExplorationSection data={data.exploration} />
        <MetricSection data={data.metric} />
        <RankingsSection data={data.rankings} />
        <InsightsSection data={data.insights} />
      </main>
      <Footer data={data.footer} />
    </>
  );
}
