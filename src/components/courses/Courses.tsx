import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CourseCard } from "@/components/site/CourseCard";
import { COURSES, TRACKS, type Track } from "@/lib/courses";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Shosanacodemia" },
      { name: "description", content: "Browse every course in the Shosanacodemia catalog across Frontend, Backend, Fullstack, DevOps, and Systems tracks." },
      { property: "og:title", content: "Courses — Shosanacodemia" },
      { property: "og:description", content: "Browse the full course catalog." },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  const [query, setQuery] = useState("");
  const [track, setTrack] = useState<Track | "All">("All");

  const filtered = useMemo(() => {
    return COURSES.filter((c) => {
      const matchesTrack = track === "All" || c.track === track;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.tagline.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q);
      return matchesTrack && matchesQuery;
    });
  }, [query, track]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <header className="border-b border-border px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-primary">Catalog</div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">All courses</h1>
          <p className="max-w-2xl text-muted-foreground">
            {COURSES.length} courses across {TRACKS.length} tracks. Built for engineers who already know how to write a for-loop.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <input
            type="search"
            placeholder="Search courses..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary md:max-w-sm"
          />
          <div className="flex flex-wrap gap-2">
            {(["All", ...TRACKS.map((t) => t.name)] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTrack(t as Track | "All")}
                className={
                  "rounded-md border px-3 py-1.5 text-xs font-medium transition-colors " +
                  (track === t
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:text-foreground")
                }
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-xl border border-border bg-surface p-12 text-center text-muted-foreground">
            No courses match that filter.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}
