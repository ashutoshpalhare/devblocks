import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileCode2, Rocket, Sparkles } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { CodeBlock } from "@/components/code-block";
import { PreviewPane } from "@/components/preview-pane";
import {
  DOC_STEPS,
  STARTER_FAQ,
  STARTER_HTML,
  STARTER_PREVIEW,
  STARTER_REACT,
} from "@/lib/data/starter";

const title = "Starter Template & Docs — DevBlocks";
const description =
  "Copy a ready-made Tailwind starter page, then paste DevBlocks blocks into it. Step-by-step documentation for building your first website.";

export const Route = createFileRoute("/starter")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StarterPage,
});

function StarterPage() {
  return (
    <SiteShell>
      <section className="grid-bg border-b border-border">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-primary" /> Starter template · Copy & paste
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl">
                One file. Then paste blocks.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                This starter is a complete, responsive page with a navbar, hero, features, contact
                form and footer. Copy it into an <code className="font-mono text-sm">index.html</code>,
                open it in your browser, and drop DevBlocks components in wherever you like.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#starter-code"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Get the code <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/components"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  Find blocks to add
                </Link>
              </div>
            </div>
            <PreviewPane html={STARTER_PREVIEW} height="h-[22rem]" className="shadow-sm" />
          </div>
        </div>
      </section>

      <section id="starter-code" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">The starter file</h2>
            <p className="mt-2 text-muted-foreground">
              Plain HTML + Tailwind. Nothing to install.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <FileCode2 className="h-3.5 w-3.5" /> index.html
          </span>
        </div>
        <CodeBlock code={STARTER_HTML} language="html" className="mt-6" />

        <h3 className="mt-12 font-display text-lg font-bold">Prefer React?</h3>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Same structure, split into components. Use this when your project already has Vite and
          Tailwind configured.
        </p>
        <CodeBlock code={STARTER_REACT} language="tsx" className="mt-4" />
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold">Documentation</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Six steps from an empty folder to a page you can share.
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {DOC_STEPS.map((s) => (
              <article key={s.step} className="surface-card p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent font-mono text-xs font-bold text-accent-foreground">
                    {s.step}
                  </span>
                  <h3 className="font-display text-base font-bold">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                {s.code && (
                  <CodeBlock code={s.code} language={s.language ?? "html"} className="mt-4" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold">Common questions</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {STARTER_FAQ.map((f) => (
            <div key={f.q} className="surface-card p-5">
              <h3 className="font-display text-base font-semibold">{f.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 surface-card flex flex-wrap items-center justify-between gap-4 p-8">
          <div>
            <h2 className="font-display text-xl font-bold">Starter ready? Go get blocks.</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              20+ components, full templates and project kits — all free to copy.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/components"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Rocket className="h-4 w-4" /> Browse components
            </Link>
            <Link
              to="/playground"
              className="rounded-xl border border-border px-5 py-3 text-sm font-semibold hover:bg-secondary"
            >
              Test in playground
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
