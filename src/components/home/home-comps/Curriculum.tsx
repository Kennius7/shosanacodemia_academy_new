import { Courses } from "@/data";
import { Course } from "@/types";
import HomeSectionHeader from "./HomeSectionHeader";

function CourseCard({ course }: { course: Course }) {
  return (
    <div
      className="group relative bg-[#0D1629] border border-slate-800 
      hover:border-cyan-500/30 rounded-2xl p-6 transition-all duration-300 
      hover:shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-1"
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{course.icon}</span>
        <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-1 rounded-full">
          {course.duration}
        </span>
      </div>
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
        {course.name}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed">
        {course.description}
      </p>

      {/* Hover accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-24 bg-[#050A14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <HomeSectionHeader
            text={"Curriculum"}
            isRoutable={true}
            route={"Curriculum"}
          />
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            What You&apos;ll Learn
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Industry-aligned modules taught by developers and engineers who
            build the products like the ones you use every day.
          </p>
        </div>

        {/* Course grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-400 text-sm">
            All modules include live sessions, recorded replays, and hands-on
            capstone projects.
          </p>
        </div>
      </div>
    </section>
  );
}
