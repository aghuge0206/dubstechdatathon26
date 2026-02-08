"use client";

/**
 * Section heading with optional description.
 */
export function SectionHeading({ title, description }) {
  return (
    <div className="max-w-2xl">
      <div className="w-10 h-1 bg-red-600 rounded mb-4" />
      <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-foreground-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
