import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Blocks, Code2, GraduationCap, Layers, Rocket, Search } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PreviewPane } from "@/components/preview-pane";
import { components } from "@/lib/data/components";
import { templates } from "@/lib/data/templates";
import { lessons } from "@/lib/data/lessons";

const title = "DevBlocks — Free Tailwind UI Blocks for Developers";
const description =
  "Discover, preview, copy and learn from free Tailwind UI components, templates and project kits. Build. Learn. Ship.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

const LOOP = [
  { icon: Search, title: "Discover", text: "Search 20+ blocks by category, tech and difficulty." },
  { icon: Layers, title: "Preview", text: "See every block rendered live before you commit." },
  { icon: Code2, title: "Copy", text: "Grab clean Tailwind markup with one click." },
  { icon: GraduationCap, title: "Learn", text: "Short lessons explain the why behind the code." },
  { icon: Rocket, title: "Ship", text: "Full templates and project kits to finish faster." },
];

function Index() {
  const featured = components.slice(0, 6);

  return (
    <SiteShell>
      <section className="grid-bg border-b border-border">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Blocks className="h-3.5 w-3.5 text-primary" /> Free forever · No sign-up to copy
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] sm:text-6xl">
            Build. Learn. Ship.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            DevBlocks is a free Tailwind UI library for CS students, beginner developers and
            teachers — with live previews, copy-ready code and lessons that explain every block.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/components"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Browse components <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/learn"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Start learning
            </Link>
          </div>
          <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              [components.length + "+", "UI components"],
              [templates.length + "", "Templates"],
              [lessons.length + "", "Lessons"],
              ["100%", "Free"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-2xl font-bold">{value}</dt>
                <dd className="text-sm text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold">The DevBlocks loop</h2>
        <p className="mt-2 text-muted-foreground">From finding a block to understanding it.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {LOOP.map((step) => (
            <div key={step.title} className="surface-card p-5">
              <step.icon className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-display text-base font-semibold">{step.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">Featured blocks</h2>
              <p className="mt-2 text-muted-foreground">Live previews — click through to copy.</p>
            </div>
            <Link to="/components" className="text-sm font-semibold text-primary hover:underline">
              View all components
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((c) => (
              <Link
                key={c.id}
                to="/components/$slug"
                params={{ slug: c.slug }}
                className="surface-card overflow-hidden transition-shadow hover:shadow-md"
              >
                <PreviewPane html={c.preview} height="h-44" className="rounded-none border-0 border-b" />
                <div className="p-4">
                  <h3 className="font-display text-base font-semibold">{c.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
