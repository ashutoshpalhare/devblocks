import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Search } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PreviewPane } from "@/components/preview-pane";
import { Chip, DifficultyBadge } from "@/components/item-card";
import { COMPONENT_CATEGORIES, components } from "@/lib/data/components";
import { useFavorites } from "@/lib/favorites";
import { cn } from "@/lib/utils";

const title = "UI Components — DevBlocks";
const description =
  "Browse free Tailwind UI components: logins, navbars, heroes, tables, dashboards, modals and more. Live preview and copy-ready code.";

export const Route = createFileRoute("/components/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ComponentsPage,
});

const TECHS = ["All", "HTML", "React", "Tailwind CSS", "JavaScript"] as const;
const LEVELS = ["All", "Beginner", "Intermediate", "Advanced"] as const;

function ComponentsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const [tech, setTech] = useState<string>("All");
  const [level, setLevel] = useState<string>("All");
  const { has, toggle } = useFavorites();

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return components.filter((c) => {
      if (cat !== "All" && c.category !== cat) return false;
      if (tech !== "All" && !c.technologies.includes(tech as never)) return false;
      if (level !== "All" && c.difficulty !== level) return false;
      if (!needle) return true;
      return (
        c.name.toLowerCase().includes(needle) ||
        c.description.toLowerCase().includes(needle) ||
        c.tags.some((t) => t.includes(needle))
      );
    });
  }, [q, cat, tech, level]);

  return (
    <SiteShell>
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold">UI Components</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          {components.length} free blocks with live previews. Filter, preview, copy.
        </p>

        <div className="mt-8 space-y-4">
          <div className="relative max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search components, tags…"
              className="w-full rounded-xl border border-input bg-card py-2.5 pl-9 pr-3 text-sm outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {COMPONENT_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                className={cn(
                  "rounded-full border border-border px-3 py-1.5 text-xs font-medium transition-colors",
                  cat === c ? "bg-primary text-primary-foreground" : "hover:bg-secondary",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <FilterGroup label="Tech" options={TECHS} value={tech} onChange={setTech} />
            <FilterGroup label="Level" options={LEVELS} value={level} onChange={setLevel} />
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">{results.length} results</p>

        {results.length === 0 ? (
          <div className="surface-card mt-6 p-12 text-center">
            <p className="font-display text-lg font-semibold">No components match those filters</p>
            <p className="mt-1 text-sm text-muted-foreground">Try clearing search or category.</p>
          </div>
        ) : (
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {results.map((c) => (
              <article key={c.id} className="surface-card flex flex-col overflow-hidden">
                <PreviewPane html={c.preview} height="h-44" className="rounded-none border-0 border-b" />
                <div className="flex flex-1 flex-col gap-3 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="font-display text-base font-semibold">{c.name}</h2>
                      <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                    </div>
                    <button
                      type="button"
                      aria-label={has("component", c.id) ? "Remove from saved" : "Save component"}
                      onClick={() => toggle("component", c.id)}
                      className="shrink-0 rounded-lg border border-border p-2 text-muted-foreground hover:text-foreground"
                    >
                      <Heart
                        className={cn("h-4 w-4", has("component", c.id) && "fill-primary text-primary")}
                      />
                    </button>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Chip>{c.category}</Chip>
                    <DifficultyBadge level={c.difficulty} />
                  </div>
                  <div className="mt-auto pt-2">
                    <Link
                      to="/components/$slug"
                      params={{ slug: c.slug }}
                      className="inline-flex rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
                    >
                      Preview & copy
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </SiteShell>
  );
}

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            className={cn(
              "rounded-lg border border-border px-2.5 py-1 text-xs transition-colors",
              value === o ? "bg-secondary font-semibold text-foreground" : "text-muted-foreground",
            )}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}
