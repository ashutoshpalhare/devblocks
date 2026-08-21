import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { PreviewPane } from "./preview-pane";
import { cn } from "@/lib/utils";
import type { Difficulty, FavoriteType } from "@/lib/types";
import { useFavorites } from "@/lib/favorites";

export function DifficultyBadge({ level }: { level: Difficulty }) {
  const tone =
    level === "Beginner"
      ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
      : level === "Intermediate"
        ? "bg-amber-500/10 text-amber-700 dark:text-amber-300"
        : "bg-rose-500/10 text-rose-700 dark:text-rose-300";
  return (
    <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium", tone)}>{level}</span>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
      {children}
    </span>
  );
}

export function ItemCard(props: {
  id: string;
  type: FavoriteType;
  name: string;
  description: string;
  category: string;
  difficulty: Difficulty;
  technologies: string[];
  preview: string;
  to: string;
  params: Record<string, string>;
}) {
  const { has, toggle } = useFavorites();
  const saved = has(props.type, props.id);

  return (
    <article className="surface-card group flex flex-col overflow-hidden">
      <PreviewPane html={props.preview} height="h-44" className="rounded-none border-0 border-b" />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-base font-semibold">{props.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{props.description}</p>
          </div>
          <button
            type="button"
            aria-label={saved ? "Remove from saved" : "Save"}
            onClick={() => toggle(props.type, props.id)}
            className="shrink-0 rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Heart className={cn("h-4 w-4", saved && "fill-primary text-primary")} />
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Chip>{props.category}</Chip>
          <DifficultyBadge level={props.difficulty} />
          {props.technologies.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
        <div className="mt-auto pt-2">
          <Link
            to={props.to}
            params={props.params}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Preview & copy
          </Link>
        </div>
      </div>
    </article>
  );
}
