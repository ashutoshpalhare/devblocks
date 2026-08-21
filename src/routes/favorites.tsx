import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PreviewPane } from "@/components/preview-pane";
import { components } from "@/lib/data/components";
import { useFavorites } from "@/lib/favorites";

const title = "Saved Blocks — DevBlocks";
const description = "Your saved DevBlocks components, stored right in this browser.";

export const Route = createFileRoute("/favorites")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: FavoritesPage,
});

function FavoritesPage() {
  const { favorites, toggle } = useFavorites();
  const saved = components.filter((c) => favorites.includes(`component:${c.id}`));

  return (
    <SiteShell>
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold">Saved blocks</h1>
        <p className="mt-2 text-muted-foreground">
          Saved on this device. Tap the heart on any component to add it here.
        </p>

        {saved.length === 0 ? (
          <div className="surface-card mt-8 p-12 text-center">
            <Heart className="mx-auto h-6 w-6 text-muted-foreground" />
            <p className="mt-3 font-display text-lg font-semibold">Nothing saved yet</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Browse the library and save the blocks you want to reuse.
            </p>
            <Link
              to="/components"
              className="mt-5 inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Browse components
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {saved.map((c) => (
              <article key={c.id} className="surface-card overflow-hidden">
                <PreviewPane html={c.preview} height="h-40" className="rounded-none border-0 border-b" />
                <div className="flex items-center justify-between gap-3 p-4">
                  <Link
                    to="/components/$slug"
                    params={{ slug: c.slug }}
                    className="font-display text-base font-semibold hover:text-primary"
                  >
                    {c.name}
                  </Link>
                  <button
                    type="button"
                    onClick={() => toggle("component", c.id)}
                    className="rounded-lg border border-border p-2 text-primary"
                    aria-label="Remove from saved"
                  >
                    <Heart className="h-4 w-4 fill-primary" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </SiteShell>
  );
}
