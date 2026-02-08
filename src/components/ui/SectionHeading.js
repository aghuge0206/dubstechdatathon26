"use client";

/**
 * Section heading with optional description.
 */
export function SectionHeading({ title, description, centered = false }) {
  return (
    <div className={`${centered ? "text-center" : "text-left"} w-full`}>
      <div className={`w-10 h-1 bg-red-600 rounded mb-4 ${centered ? "mx-auto" : ""}`} />
      <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
        {title}
      </h2>
      {description && (
        <p className={`text-foreground-secondary ${centered ? "mx-auto" : ""} max-w-3xl`}>
          {description}
        </p>
      )}
    </div>
  );
}
