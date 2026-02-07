"use client";

/**
 * Card explaining a measured metric.
 */
export function MetricCard({ title, value, description, why }) {
    return (
        <div className="card h-full">
            <div className="flex items-start justify-between mb-4">
                <h3 className="font-serif text-xl text-foreground">{title}</h3>
                <span className="font-mono text-2xl font-bold text-foreground">{value}</span>
            </div>

            <p className="text-foreground-secondary mb-4">{description}</p>

            <div className="pt-4 border-t border-slate-100">
                <p className="text-sm text-foreground-tertiary">
                    <strong className="text-foreground-secondary">Why it matters:</strong> {why}
                </p>
            </div>
        </div>
    );
}
