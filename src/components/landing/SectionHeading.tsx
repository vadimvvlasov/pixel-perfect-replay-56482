import { cn } from "@/lib/utils";

export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  className,
  inverse = false,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  className?: string;
  inverse?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className={cn("eyebrow flex items-center gap-3", inverse && "text-surface-inverse-muted")}>
          <span aria-hidden="true" className="brand-rule" />
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "mt-4 text-3xl leading-[1.12] font-semibold sm:text-4xl",
          inverse && "text-surface-inverse-foreground",
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed text-muted-foreground",
            inverse && "text-surface-inverse-muted",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
