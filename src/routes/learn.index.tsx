import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { DifficultyBadge, Chip } from "@/components/item-card";
import { LESSON_CATEGORIES, lessons } from "@/lib/data/lessons";
import { cn } from "@/lib/utils";

const title = "Learn — Short Frontend Lessons | DevBlocks";
const description =
  "Bite-sized lessons on HTML, CSS, Tailwind, JavaScript and React with example code and a practice challenge in every lesson.";

export const Route = createFileRoute("/learn/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: LearnPage,
});

function LearnPage() {
  const [cat, setCat] = useState<string>("All");
  const list = lessons.filter((l) => cat === "All" || l.category === cat);

  return (
    <SiteShell>
      <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold">Learn</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Short, practical lessons — read it, run the code, do the challenge.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {LESSON_CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={cn(
                "rounded-full border border-border px-3 py-1.5 text-xs font-medium",
                cat === c ? "bg-primary text-primary-foreground" : "hover:bg-secondary",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {list.map((l) => (
            <Link
              key={l.id}
              to="/learn/$slug"
              params={{ slug: l.slug }}
              className="surface-card flex flex-col gap-3 p-5 transition-shadow hover:shadow-md"
            >
              <BookOpen className="h-5 w-5 text-primary" />
              <h2 className="font-display text-base font-semibold">{l.title}</h2>
              <p className="line-clamp-2 text-sm text-muted-foreground">{l.content}</p>
              <div className="mt-auto flex items-center gap-2">
                <Chip>{l.category}</Chip>
                <DifficultyBadge level={l.difficulty} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
