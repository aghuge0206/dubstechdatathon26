"use client";

import { useState, useEffect } from "react";
import { getCareGapData } from "@/lib/getCareGapData";
import { TitleSection } from "@/components/sections/TitleSection";
import { IntroductionSection } from "@/components/sections/IntroductionSection";
import { WhatWeMeasuredSection } from "@/components/sections/WhatWeMeasuredSection";
import { HowScoreWorksSection } from "@/components/sections/HowScoreWorksSection";
import { KeyFindingSection } from "@/components/sections/KeyFindingSection";
import { RankingsSection } from "@/components/sections/RankingsSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { WhyItMattersSection } from "@/components/sections/WhyItMattersSection";
import { NextStepsSection } from "@/components/sections/NextStepsSection";
import { LimitationsSection } from "@/components/sections/LimitationsSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const [data, setData] = useState(null);
  const [isPlaceholder, setIsPlaceholder] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const result = await getCareGapData();
        setData(result.data);
        setIsPlaceholder(result.isPlaceholder);
      } catch (err) {
        setError(err.message);
      }
    }
    loadData();
  }, []);

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-foreground mb-2">Error Loading Data</h1>
          <p className="text-foreground-secondary">{error}</p>
        </div>
      </main>
    );
  }

  if (!data) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-foreground-secondary">Loading data...</p>
        </div>
      </main>
    );
  }

  return (
    <>
      <main>
        <TitleSection isPlaceholder={isPlaceholder} />
        <IntroductionSection />
        <WhatWeMeasuredSection data={data} />
        <HowScoreWorksSection />
        <KeyFindingSection data={data} />
        <RankingsSection data={data} />
        <InsightsSection />
        <WhyItMattersSection />
        <NextStepsSection />
        <LimitationsSection />
      </main>
      <Footer />
    </>
  );
}
