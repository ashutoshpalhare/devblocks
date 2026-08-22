import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Blocks,
  Code2,
  FileCode2,
  GraduationCap,
  Layers,
  LayoutTemplate,
  Rocket,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PreviewPane } from "@/components/preview-pane";
import { COMPONENT_CATEGORIES, components } from "@/lib/data/components";
import { templates } from "@/lib/data/templates";
import { projects } from "@/lib/data/projects";
import { lessons } from "@/lib/data/lessons";
import { STARTER_PREVIEW } from "@/lib/data/starter";

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

const categoryCount = (category: string) => components.filter((c) => c.category === category).length;

function Index() {
  const featured = components.slice(0, 6);
  const categories = COMPONENT_CATEGORIES.slice(1);

  return (
    <SiteShell>
      <section className="grid-bg border-b border-border">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
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
                  to="/starter"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  <FileCode2 className="h-4 w-4" /> Get the starter
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
            <div className="hidden lg:block">
              <PreviewPane html={STARTER_PREVIEW} height="h-[24rem]" className="shadow-lg" />
            </div>
          </div>
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

      <section className="border-y border-border bg-surface">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <PreviewPane html={STARTER_PREVIEW} height="h-80" className="shadow-sm" />
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-primary" /> Starter template
              </span>
              <h2 className="mt-4 text-3xl font-bold">Start with one file.</h2>
              <p className="mt-3 text-muted-foreground">
                Copy a complete HTML starter with navbar, hero, features, contact and footer. Then
                paste DevBlocks components between the markers.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" /> No build tools or installs
                </li>
                <li className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-primary" /> Tailwind CDN included
                </li>
                <li className="flex items-center gap-2">
                  <LayoutTemplate className="h-4 w-4 text-primary" /> Ready for any block
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/starter"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Get the starter <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/components"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  Browse blocks
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Browse by category</h2>
            <p className="mt-2 text-muted-foreground">Jump to the kind of block you need.</p>
          </div>
          <Link to="/components" className="text-sm font-semibold text-primary hover:underline">
            View all components
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat}
              to="/components"
              className="surface-card p-5 transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-base font-semibold">{cat}</h3>
                <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                  {categoryCount(cat)}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Free {cat.toLowerCase()} blocks ready to copy.
              </p>
            </Link>
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

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Full templates & project kits</h2>
            <p className="mt-2 text-muted-foreground">
              Skip scaffolding and start with a complete page or student project.
            </p>
          </div>
          <Link to="/templates" className="text-sm font-semibold text-primary hover:underline">
            View templates
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {templates.slice(0, 2).map((t) => (
            <Link
              key={t.id}
              to="/templates"
              className="surface-card overflow-hidden transition-shadow hover:shadow-md"
            >
              <PreviewPane html={t.preview} height="h-48" className="rounded-none border-0 border-b" />
              <div className="p-4">
                <h3 className="font-display text-base font-semibold">{t.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.description}</p>
              </div>
            </Link>
          ))}
          {projects.slice(0, 2).map((p) => (
            <Link
              key={p.id}
              to="/projects"
              className="surface-card overflow-hidden transition-shadow hover:shadow-md"
            >
              <PreviewPane html={p.preview} height="h-48" className="rounded-none border-0 border-b" />
              <div className="p-4">
                <h3 className="font-display text-base font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid-bg border-t border-border">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
          <div className="surface-card flex flex-col items-start justify-between gap-6 p-8 lg:flex-row lg:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold">Ready to ship your idea?</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Copy a block, learn how it works, and publish your first site this weekend.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
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
                <GraduationCap className="h-4 w-4" /> Start learning
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
