import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Wand2, MessageSquare, Layers } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/ai-builder")({
  head: () => ({
    meta: [
      { title: "AI Builder — DevBlocks" },
      {
        name: "description",
        content:
          "Describe a UI in plain English and get a Tailwind block back. The DevBlocks AI Builder is coming soon.",
      },
      { property: "og:title", content: "AI Builder — DevBlocks" },
      {
        property: "og:description",
        content: "Generate Tailwind UI blocks from a prompt. Coming soon to DevBlocks.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AiBuilderPage,
});

const STEPS = [
  {
    icon: MessageSquare,
    title: "Describe it",
    body: "Type what you need — “pricing table with three tiers and a highlighted plan”.",
  },
  {
    icon: Wand2,
    title: "Generate",
    body: "Get clean, responsive Tailwind markup that matches the DevBlocks style.",
  },
  {
    icon: Layers,
    title: "Refine and ship",
    body: "Tweak it in the playground, copy the code, drop it into your project.",
  },
];

function AiBuilderPage() {
  return (
    <SiteShell>
      <section className="grid-bg border-b border-border">
        <div className="mx-auto w-full max-w-4xl px-4 py-20 text-center sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Coming soon
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            AI Builder
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Prompt-to-component generation is on the way. Until then, the whole DevBlocks library is
            free to browse, preview and copy.
          </p>

          <div className="mx-auto mt-8 max-w-xl surface-card p-3 text-left">
            <div className="rounded-lg bg-code p-4 font-mono text-sm text-code-foreground">
              <span className="text-primary">&gt;</span> build me a dashboard stats row with four
              cards
              <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-primary" />
            </div>
            <button
              type="button"
              disabled
              className="mt-3 w-full cursor-not-allowed rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground opacity-60"
            >
              Generate (soon)
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.title} className="surface-card p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <s.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-display text-lg font-bold">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/components"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Browse components
          </Link>
          <Link
            to="/playground"
            className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold hover:bg-secondary"
          >
            Open playground
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
