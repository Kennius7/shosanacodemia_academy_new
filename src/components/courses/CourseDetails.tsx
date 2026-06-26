// import { createFileRoute, Link, notFound } from "@tanstack/react-router";
// import { SiteNav } from "@/components/site/SiteNav";
// import { SiteFooter } from "@/components/site/SiteFooter";
// import { getCourseBySlug, type Course } from "@/lib/courses";

// export const Route = createFileRoute("/courses/$slug")({
//   loader: ({ params }): { course: Course } => {
//     const course = getCourseBySlug(params.slug);
//     if (!course) throw notFound();
//     return { course };
//   },
//   head: ({ loaderData }) => ({
//     meta: loaderData
//       ? [
//           { title: `${loaderData.course.title} — Shosanacodemia` },
//           { name: "description", content: loaderData.course.tagline },
//           { property: "og:title", content: `${loaderData.course.title} — Shosanacodemia` },
//           { property: "og:description", content: loaderData.course.tagline },
//         ]
//       : [],
//   }),
//   notFoundComponent: () => (
//     <div className="min-h-screen bg-background">
//       <SiteNav />
//       <div className="mx-auto max-w-2xl px-6 py-24 text-center">
//         <h1 className="mb-4 text-3xl font-bold">Course not found</h1>
//         <p className="mb-8 text-muted-foreground">That course doesn't exist or has been moved.</p>
//         <Link to="/courses" className="rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground">
//           Browse all courses
//         </Link>
//       </div>
//     </div>
//   ),
//   errorComponent: ({ error, reset }) => (
//     <div className="min-h-screen bg-background">
//       <SiteNav />
//       <div className="mx-auto max-w-2xl px-6 py-24 text-center">
//         <h1 className="mb-4 text-3xl font-bold">Something went wrong</h1>
//         <p className="mb-8 text-muted-foreground">{error.message}</p>
//         <button onClick={reset} className="rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground">
//           Try again
//         </button>
//       </div>
//     </div>
//   ),
//   component: CoursePage,
// });

// function CoursePage() {
//   const { course } = Route.useLoaderData();
//   const totalLessons = course.modules.reduce((n, m) => n + m.lessons.length, 0);

//   return (
//     <div className="min-h-screen bg-background text-foreground">
//       <SiteNav />

//       <header className="border-b border-border px-6 py-16">
//         <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_360px]">
//           <div>
//             <Link to="/courses" className="mb-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary">
//               ← All courses
//             </Link>
//             <div className="mb-4 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-primary">
//               <span>{course.code}</span>
//               <span className="text-muted-foreground">/</span>
//               <span>{course.track}</span>
//               <span className="text-muted-foreground">/</span>
//               <span>{course.level}</span>
//             </div>
//             <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">{course.title}</h1>
//             <p className="mb-6 text-xl text-muted-foreground">{course.tagline}</p>
//             <p className="max-w-2xl text-foreground/80">{course.description}</p>
//             <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
//               <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 font-mono text-sm font-bold text-primary">
//                 {course.instructor
//                   .split(" ")
//                   .map((n) => n[0])
//                   .join("")}
//               </div>
//               <div>
//                 <div className="text-sm font-medium">{course.instructor}</div>
//                 <div className="text-xs text-muted-foreground">{course.instructorTitle}</div>
//               </div>
//             </div>
//           </div>

//           <aside className="h-fit rounded-xl border border-border bg-surface p-6">
//             <div className="mb-1 text-3xl font-extrabold">${course.price}</div>
//             <div className="mb-6 text-sm text-muted-foreground">One-time, lifetime access</div>
//             <button className="mb-3 w-full rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:brightness-110">
//               Enroll now
//             </button>
//             <button className="w-full rounded-lg border border-border px-4 py-3 font-medium transition-colors hover:bg-white/5">
//               Add to library
//             </button>
//             <dl className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
//               <div className="flex justify-between"><dt className="text-muted-foreground">Duration</dt><dd className="font-mono">{course.hours} hrs</dd></div>
//               <div className="flex justify-between"><dt className="text-muted-foreground">Modules</dt><dd className="font-mono">{course.modules.length}</dd></div>
//               <div className="flex justify-between"><dt className="text-muted-foreground">Lessons</dt><dd className="font-mono">{totalLessons}</dd></div>
//               <div className="flex justify-between"><dt className="text-muted-foreground">Level</dt><dd>{course.level}</dd></div>
//             </dl>
//           </aside>
//         </div>
//       </header>

//       <section className="mx-auto max-w-7xl px-6 py-16">
//         <div className="grid gap-16 md:grid-cols-[1fr_360px]">
//           <div>
//             <h2 className="mb-6 text-2xl font-bold tracking-tight">What you'll be able to do</h2>
//             <ul className="mb-16 space-y-3">
//               {course.outcomes.map((o) => (
//                 <li key={o} className="flex gap-3 text-foreground/90">
//                   <span className="mt-1 font-mono text-primary">→</span>
//                   <span>{o}</span>
//                 </li>
//               ))}
//             </ul>

//             <h2 className="mb-6 text-2xl font-bold tracking-tight">Curriculum</h2>
//             <div className="overflow-hidden rounded-xl border border-border">
//               {course.modules.map((m, idx) => (
//                 <details key={m.id} open={idx === 0} className="group border-b border-border last:border-b-0">
//                   <summary className="flex cursor-pointer items-center justify-between bg-surface px-5 py-4 transition-colors hover:bg-surface-elevated">
//                     <span className="font-medium">{m.title}</span>
//                     <span className="font-mono text-xs text-muted-foreground">{m.lessons.length} lessons</span>
//                   </summary>
//                   <ul className="divide-y divide-border bg-background/50">
//                     {m.lessons.map((l) => (
//                       <li key={l.id} className="flex items-center justify-between px-5 py-3 text-sm">
//                         <span className="flex items-center gap-3">
//                           <span className="font-mono text-[10px] text-muted-foreground">▶</span>
//                           {l.title}
//                         </span>
//                         <span className="font-mono text-xs text-muted-foreground">{l.duration}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </details>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <SiteFooter />
//     </div>
//   );
// }
