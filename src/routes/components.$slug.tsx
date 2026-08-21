import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Heart, Monitor, Smartphone, Tablet } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { CodeBlock } from "@/components/code-block";
import { Chip, DifficultyBadge } from "@/components/item-card";
import { components, getComponent } from "@/lib/data/components";
import { useFavorites } from "@/lib/favorites";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/components/$slug")({
  loader: ({ params }) => {
    const component = getComponent(params.slug);
    if (!component) throw notFound();
    return { component };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Component not found — DevBlocks" }, { name: "robots", content: "noindex" }] };
    }
    const t = `${loaderData.component.name} — DevBlocks`;
    return {
      meta: [
        { title: t },
        { name: "description", content: loaderData.component.description },
        { property: "og:title", content: t },
        { property: "og:description", content: loaderData.component.description },
      ],
    };
  },
  component: ComponentDetail,
});

const WIDTHS = [
  { id: "desktop", label: "Desktop", icon: Monitor, width: "100%" },
  { id: "tablet", label: "Tablet", icon: Tablet, width: "768px" },
  { id: "mobile", label: "Mobile", icon: Smartphone, width: "375px" },
] as const;

function ComponentDetail() {
  const { component } = Route.useLoaderData();
  const [device, setDevice] = useState<(typeof WIDTHS)[number]["id"]>("desktop");
  const { has, toggle } = useFavorites();
  const saved = has("component", component.id);
  const related = components
    .filter((c) => c.category === component.category && c.id !== component.id)
    .slice(0, 3);

  const width = WIDTHS.find((w) => w.id === device)!.width;

  return (
    <SiteShell>
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <Link
          to="/components"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> All components
        </Link>

        <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">{component.name}</h1>
            <p className="mt-2 max-w-2xl text-muted-foreground">{component.description}</p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <Chip>{component.category}</Chip>
              <DifficultyBadge level={component.difficulty} />
              {component.technologies.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => toggle("component", component.id)}
            className="inline-flex items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm font-medium hover:bg-secondary"
          >
            <Heart className={cn("h-4 w-4", saved && "fill-primary text-primary")} />
            {saved ? "Saved" : "Save"}
          </button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div className="space-y-6">
            <div className="surface-card overflow-hidden">
              <div className="flex items-center justify-between border-b border-border px-4 py-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Live preview
                </span>
                <div className="flex gap-1">
                  {WIDTHS.map((w) => (
                    <button
                      key={w.id}
                      type="button"
                      aria-label={w.label}
                      onClick={() => setDevice(w.id)}
                      className={cn(
                        "rounded-md p-1.5 text-muted-foreground transition-colors hover:text-foreground",
                        device === w.id && "bg-secondary text-foreground",
                      )}
                    >
                      <w.icon className="h-4 w-4" />
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex justify-center bg-surface p-4">
                <div
                  style={{ width, maxWidth: "100%" }}
                  className="overflow-hidden rounded-xl border border-border bg-white transition-all"
                >
                  <div dangerouslySetInnerHTML={{ __html: component.preview }} />
                </div>
              </div>
            </div>

            <CodeBlock code={component.preview} />
          </div>

          <aside className="space-y-6">
            <div className="surface-card p-5">
              <h2 className="font-display text-base font-semibold">What you'll learn</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {component.learn.map((l) => (
                  <li key={l} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
            <div className="surface-card p-5">
              <h2 className="font-display text-base font-semibold">Tags</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {component.tags.map((t) => (
                  <Chip key={t}>#{t}</Chip>
                ))}
              </div>
            </div>
            {related.length > 0 && (
              <div className="surface-card p-5">
                <h2 className="font-display text-base font-semibold">Related blocks</h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {related.map((r) => (
                    <li key={r.id}>
                      <Link
                        to="/components/$slug"
                        params={{ slug: r.slug }}
                        className="text-primary hover:underline"
                      >
                        {r.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>
    </SiteShell>
  );
}
