import { RubricTag } from "./RubricTag";

export function SectionHeading({ title, description, rubricLabel }) {
  return (
    <div className="mb-12 max-w-2xl">
      {rubricLabel && <RubricTag label={rubricLabel} className="mb-4" />}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-foreground-secondary text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
