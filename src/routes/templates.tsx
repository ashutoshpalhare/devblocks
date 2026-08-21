import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { PreviewPane } from "@/components/preview-pane";
import { CodeBlock } from "@/components/code-block";
import { Chip, DifficultyBadge } from "@/components/item-card";
import { TEMPLATE_CATEGORIES, templates } from "@/lib/data/templates";
import { cn } from "@/lib/utils";

const title = "Page Templates — DevBlocks";
const description =
  "Free multi-section Tailwind page templates: portfolios, dashboards, auth flows, storefronts and SaaS marketing pages.";

export const Route = createFileRoute("/templates")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: TemplatesPage,
});

function TemplatesPage() {
  const [cat, setCat] = useState<string>("All");
  const [openId, setOpenId] = useState<string | null>(null);
  const list = templates.filter((t) => cat === "All" || t.category === cat);

  return (
    <SiteShell>
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold">Page Templates</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Full page layouts you can copy in one go and adapt to your project.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {TEMPLATE_CATEGORIES.map((c) => (
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

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {list.map((t) => (
            <article key={t.id} className="surface-card overflow-hidden">
              <PreviewPane html={t.preview} height="h-52" className="rounded-none border-0 border-b" />
              <div className="space-y-3 p-5">
                <div>
                  <h2 className="font-display text-lg font-semibold">{t.name}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{t.description}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Chip>{t.category}</Chip>
                  <DifficultyBadge level={t.difficulty} />
                  {t.technologies.map((x) => (
                    <Chip key={x}>{x}</Chip>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.sections.map((s) => (
                    <span key={s} className="rounded-md bg-secondary px-2 py-0.5 text-xs">
                      {s}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setOpenId(openId === t.id ? null : t.id)}
                  className="rounded-lg border border-border px-3 py-2 text-sm font-semibold hover:bg-secondary"
                >
                  {openId === t.id ? "Hide code" : "View code"}
                </button>
                {openId === t.id && <CodeBlock code={t.preview} />}
              </div>
            </article>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
