import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { PreviewPane } from "@/components/preview-pane";
import { Chip, DifficultyBadge } from "@/components/item-card";
import { projects } from "@/lib/data/projects";
import { components } from "@/lib/data/components";

const title = "Project Kits — DevBlocks";
const description =
  "Student-ready project UI kits: student management, library system, LMS, job portal and e-commerce storefront.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <SiteShell>
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold">Project Kits</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Complete screen sets for classic academic and portfolio projects — assembled from
          DevBlocks components.
        </p>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {projects.map((p) => (
            <article key={p.id} className="surface-card overflow-hidden">
              <PreviewPane html={p.preview} height="h-44" className="rounded-none border-0 border-b" />
              <div className="space-y-4 p-5">
                <div>
                  <h2 className="font-display text-lg font-semibold">{p.name}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Chip>{p.category}</Chip>
                  <DifficultyBadge level={p.difficulty} />
                  {p.technologies.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Pages
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.pages.map((s) => (
                      <span key={s} className="rounded-md bg-secondary px-2 py-0.5 text-xs">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Built from
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                    {p.components.map((name) => {
                      const match = components.find((c) => c.name === name);
                      return match ? (
                        <li key={name}>
                          <Link
                            to="/components/$slug"
                            params={{ slug: match.slug }}
                            className="text-primary hover:underline"
                          >
                            {name}
                          </Link>
                        </li>
                      ) : (
                        <li key={name} className="text-muted-foreground">
                          {name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
