import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { RotateCcw } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { components } from "@/lib/data/components";

const title = "Playground — Edit Tailwind Blocks Live | DevBlocks";
const description =
  "Paste or load any DevBlocks component, edit the Tailwind markup and see the result render instantly in the browser.";

export const Route = createFileRoute("/playground")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Playground,
});

const STARTER = `<div class="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4">
  <div>
    <p class="text-sm font-semibold text-slate-900">DevBlocks Playground</p>
    <p class="text-xs text-slate-500">Edit the markup on the left.</p>
  </div>
  <button class="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">Run</button>
</div>`;

function Playground() {
  const [code, setCode] = useState(STARTER);
  const [debounced, setDebounced] = useState(STARTER);

  useEffect(() => {
    const t = setTimeout(() => setDebounced(code), 250);
    return () => clearTimeout(t);
  }, [code]);

  const srcDoc = useMemo(
    () =>
      `<!doctype html><html><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><script src="https://cdn.tailwindcss.com"></script></head><body class="bg-white p-4">${debounced}</body></html>`,
    [debounced],
  );

  return (
    <SiteShell>
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Playground</h1>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Edit Tailwind markup and watch it render live. Load a block to start from something
              real.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <select
              onChange={(e) => {
                const found = components.find((c) => c.slug === e.target.value);
                if (found) setCode(found.preview);
              }}
              defaultValue=""
              className="rounded-lg border border-input bg-card px-3 py-2 text-sm"
            >
              <option value="" disabled>
                Load a component…
              </option>
              {components.map((c) => (
                <option key={c.id} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => setCode(STARTER)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-medium hover:bg-secondary"
            >
              <RotateCcw className="h-4 w-4" /> Reset
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="surface-card overflow-hidden">
            <div className="border-b border-border px-4 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Markup
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck={false}
              className="h-[32rem] w-full resize-none bg-code p-4 font-mono text-xs leading-relaxed text-code-foreground outline-none"
            />
          </div>
          <div className="surface-card overflow-hidden">
            <div className="border-b border-border px-4 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Result
            </div>
            <iframe
              title="Playground preview"
              srcDoc={srcDoc}
              sandbox="allow-scripts"
              className="h-[32rem] w-full bg-white"
            />
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
