"use client";

/**
 * Card explaining a measured metric.
 */
export function MetricCard({ title, description, why }) {
    return (
        <div className="card h-full flex flex-col">
            <div className="mb-6">
                <h3 className="font-serif text-xl text-foreground leading-tight">{title}</h3>
            </div>

            <p className="text-foreground-secondary mb-8 flex-grow leading-relaxed">
                {description}
            </p>

            <div className="pt-5 border-t border-slate-50">
                <p className="text-sm text-foreground-tertiary">
                    <strong className="text-red-600 font-semibold uppercase tracking-wider text-[10px] block mb-1">
                        Why it matters
                    </strong>
                    <span className="text-slate-600 italic leading-snug">
                        {why}
                    </span>
                </p>
            </div>
        </div>
    );
}
