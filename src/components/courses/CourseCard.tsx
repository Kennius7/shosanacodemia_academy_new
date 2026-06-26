import { CourseType } from "@/types";
import Link from "next/link";

export function CourseCard({ course }: { course: CourseType }) {
  return (
    <Link
      href="/courses/$slug"
      // params={{ slug: course.slug }}
      className="group flex flex-col rounded-xl border border-border bg-white/[0.02] p-6 transition-all hover:border-white/20 hover:bg-white/[0.04]"
    >
      <div className="mb-4 flex justify-between font-mono text-[10px] text-primary">
        <span>{course.code}</span>
        <span>{course.hours} HRS</span>
      </div>
      <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground">
        {course.title}
      </h3>
      <p className="mb-6 flex-1 text-sm text-muted-foreground">
        {course.tagline}
      </p>
      <div className="flex items-center justify-between border-t border-border pt-6">
        <span className="text-sm font-medium text-foreground">
          {course.level}
        </span>
        <span className="font-bold text-foreground">${course.price}</span>
      </div>
    </Link>
  );
}
