"use client";

/**
 * Prominent card highlighting the #1 highest-risk subgroup.
 */
export function KeyFindingCard({ topGroup }) {
  if (!topGroup) return null;

  return (
    <div className="card-elevated risk-highlight p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        {/* Rank badge */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center">
            <span className="text-2xl font-bold">#1</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <p className="text-sm font-mono uppercase tracking-wider text-red-600 mb-1">
            Highest Risk Group
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
            {topGroup.subgroup}
          </h2>
          <p className="text-foreground-secondary">
            Risk Score: <strong className="font-mono text-foreground">{topGroup.risk_score.toFixed(2)}</strong>
            {" "} with {topGroup.medical_unmet_pct}% unmet medical, {topGroup.mental_unmet_pct}% unmet mental health,
            and {topGroup.medication_unmet_pct}% unmet medication needs.
          </p>
        </div>

        {/* Score display */}
        <div className="flex-shrink-0 text-right">
          <p className="text-sm text-foreground-tertiary mb-1">Care Gap Score</p>
          <p className="font-mono text-4xl font-bold text-red-600">
            {topGroup.risk_score.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
