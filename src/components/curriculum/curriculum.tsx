// import { createFileRoute, Link } from "@tanstack/react-router";
// import { SiteNav } from "@/components/site/SiteNav";
// import { SiteFooter } from "@/components/site/SiteFooter";
// import { COURSES, TRACKS } from "@/lib/courses";
import Link from "next/link";
import { COURSES, TRACKS } from "@/data";

// export const Route = createFileRoute("/curriculum")({
//   head: () => ({
//     meta: [
//       { title: "Curriculum — Shosanacodemia" },
//       { name: "description", content: "Structured learning paths across Frontend, Backend, Fullstack, DevOps, and Systems." },
//       { property: "og:title", content: "Curriculum — Shosanacodemia" },
//       { property: "og:description", content: "Structured paths, not a pile of disconnected videos." },
//     ],
//   }),
//   component: CurriculumPage,
// });

export default function CurriculumPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <SiteNav /> */}
      <header className="border-b border-border px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-primary">
            Curriculum
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Learning paths
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            A path is a sequence of courses ordered by what you need to know to
            take the next one.
          </p>
        </div>
      </header>
      <section className="mx-auto max-w-7xl space-y-16 px-6 py-16">
        {TRACKS.map((track) => {
          const courses = COURSES.filter((c) => c.track === track.name);
          if (!courses.length) return null;
          return (
            <div key={track.name}>
              <div className="mb-6 flex items-baseline gap-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  {track.name}
                </h2>
                <span className="font-mono text-xs text-muted-foreground">
                  {track.description}
                </span>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {courses.map((c, i) => (
                  <Link
                    key={c.slug}
                    href="/courses/$slug"
                    // params={{ slug: c.slug }}
                    className="group flex items-center gap-4 rounded-xl border border-border 
                    bg-surface p-5 transition-colors hover:border-primary/40"
                  >
                    <div className="font-mono text-xl font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium group-hover:text-primary">
                        {c.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {c.tagline}
                      </div>
                    </div>
                    <div className="font-mono text-xs text-muted-foreground">
                      {c.hours} hrs
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>
      {/* <SiteFooter /> */}
    </div>
  );
}
