import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Lightbulb } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { CodeBlock } from "@/components/code-block";
import { Chip, DifficultyBadge } from "@/components/item-card";
import { getLesson, lessons } from "@/lib/data/lessons";

export const Route = createFileRoute("/learn/$slug")({
  loader: ({ params }) => {
    const lesson = getLesson(params.slug);
    if (!lesson) throw notFound();
    return { lesson };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Lesson not found — DevBlocks" }, { name: "robots", content: "noindex" }] };
    }
    const t = `${loaderData.lesson.title} — DevBlocks Learn`;
    const d = loaderData.lesson.content.slice(0, 150);
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
      ],
    };
  },
  component: LessonDetail,
});

function LessonDetail() {
  const { lesson } = Route.useLoaderData();
  const index = lessons.findIndex((l) => l.id === lesson.id);
  const next = lessons[index + 1];

  return (
    <SiteShell>
      <article className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
        <Link
          to="/learn"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> All lessons
        </Link>
        <h1 className="mt-4 text-3xl font-bold">{lesson.title}</h1>
        <div className="mt-3 flex items-center gap-2">
          <Chip>{lesson.category}</Chip>
          <DifficultyBadge level={lesson.difficulty} />
        </div>

        <p className="mt-6 text-base leading-relaxed text-muted-foreground">{lesson.content}</p>

        <h2 className="mt-8 text-lg font-semibold">Example</h2>
        <div className="mt-3">
          <CodeBlock code={lesson.code} />
        </div>

        <div className="surface-card mt-8 flex gap-3 p-5">
          <Lightbulb className="h-5 w-5 shrink-0 text-primary" />
          <div>
            <h2 className="font-display text-base font-semibold">Your challenge</h2>
            <p className="mt-1 text-sm text-muted-foreground">{lesson.challenge}</p>
            <Link
              to="/playground"
              className="mt-3 inline-flex rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Try it in the playground
            </Link>
          </div>
        </div>

        {next && (
          <div className="mt-10 border-t border-border pt-6">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Next lesson</p>
            <Link
              to="/learn/$slug"
              params={{ slug: next.slug }}
              className="font-display text-lg font-semibold text-primary hover:underline"
            >
              {next.title}
            </Link>
          </div>
        )}
      </article>
    </SiteShell>
  );
}
