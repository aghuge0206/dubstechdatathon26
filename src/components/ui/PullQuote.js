"use client";
import { AnimatedSection } from "./AnimatedSection";

export function PullQuote({ text, source }) {
  return (
    <AnimatedSection>
      <blockquote className="border-l-4 border-accent-teal pl-6 py-4 my-8">
        <p className="text-xl md:text-2xl font-serif text-foreground italic leading-relaxed">
          &ldquo;{text}&rdquo;
        </p>
        {source && (
          <cite className="block mt-3 text-sm text-foreground-tertiary not-italic">
            -- {source}
          </cite>
        )}
      </blockquote>
    </AnimatedSection>
  );
}
