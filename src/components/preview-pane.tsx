import { cn } from "@/lib/utils";

/**
 * Renders a Tailwind markup snippet as a live preview.
 * The markup lives in src/lib/data/* so Tailwind scans and compiles its classes.
 */
export function PreviewPane({
  html,
  className,
  height = "h-56",
}: {
  html: string;
  className?: string;
  height?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-border bg-white", className)}>
      <div
        className={cn("overflow-auto", height)}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
