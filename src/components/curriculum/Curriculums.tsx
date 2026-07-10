"use client";

import { Courses } from "@/data";
import { ellipsis } from "@/lib/utils";
import HomeSectionHeader from "../home/home-comps/HomeSectionHeader";
import { useRouter } from "next/navigation";

export default function CurriculumPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#050A14] text-foreground">
      <header className="border-b border-border px-4 md:px-6 pt-20 md:pt-28 pb-10">
        <div className="mx-auto max-w-7xl">
          <HomeSectionHeader
            text={"Curriculum"}
            isRoutable={false}
            route={"Curriculum"}
          />
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Learning paths
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            A path is a sequence of courses ordered by what you need to know to
            take the next one.
          </p>
        </div>
      </header>
      <section className="mx-auto max-w-8xl space-y-16 px-2 md:px-6 py-10 md:py-16">
        {Courses.map((course) => {
          // const courses = COURSES.filter((c) => c.track === course.name);
          // if (!courses.length) return null;

          return (
            <div key={course.name}>
              <div
                className="mb-6 flex flex-col md:flex-row items-start md:items-end 
                justify-center md:justify-between"
              >
                <div className="flex flex-col items-baseline gap-2">
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                    {course.name}
                  </h2>
                  <span className="font-mono text-xs text-muted-foreground">
                    {course.description}
                  </span>
                </div>

                <div className="md:px-5 px-4 mt-6 w-full">
                  <button
                    onClick={() => router.push("/signup")}
                    className="w-full md:w-[120px] h-[35px] md:h-[40px] text-sm font-medium text-slate-300 
                    hover:text-white border border-cyan-800 hover:border-cyan-400 
                    rounded-lg transition-all duration-500 bg-cyan-500/20 
                    hover:bg-cyan-500/40 animate-pulse cursor-pointer"
                  >
                    Enrol
                  </button>
                </div>
              </div>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                {course?.track?.map((c, i) => (
                  <button
                    key={i}
                    // href="/courses/$slug"
                    // params={{ slug: c.slug }}
                    className="group flex items-start gap-4 rounded-xl border border-border p-3 
                      md:p-4 hover:border-cyan-500/30 transition-all duration-300 
                      hover:shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-1"
                  >
                    <div className="text-xl font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1 flex flex-col item-start justify-center gap-2">
                      <div className="text-left font-medium group-hover:text-cyan-500">
                        {c.name}
                      </div>
                      <div className="text-left text-xs text-muted-foreground h-[50px]">
                        {ellipsis(c.desc, 100)}
                      </div>
                    </div>
                    <div className="font-mono text-xs text-muted-foreground mt-16">
                      {c.hours}
                    </div>
                  </button>
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
