"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ResourceList } from "@/data";
import { useState } from "react";
import ProgressRing from "@/components/ProgressRing";
import { useAuth } from "@/context/AuthContext";
import AdminHeader from "@/components/AdminHeader";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Lesson {
  id: number;
  title: string;
  duration: string;
  completed: boolean;
}

interface Course {
  id: number;
  title: string;
  instructor: string;
  instructorRole: string;
  progress: number; // 0–100
  totalLessons: number;
  completedLessons: number;
  lessons: Lesson[];
  discussionCount: number;
}

// ─── Mock data (replace with API) ────────────────────────────────────────────

const MOCK_COURSES: Course[] = [
  {
    id: 1,
    title: "Intro to Computer Science",
    instructor: "Dr. Amara Nwosu",
    instructorRole: "Senior CS Lecturer",
    progress: 42,
    totalLessons: 12,
    completedLessons: 5,
    discussionCount: 14,
    lessons: [
      {
        id: 1,
        title: "What is a Computer?",
        duration: "8 min",
        completed: true,
      },
      {
        id: 2,
        title: "Binary & Number Systems",
        duration: "12 min",
        completed: true,
      },
      {
        id: 3,
        title: "Logic Gates & Circuits",
        duration: "15 min",
        completed: true,
      },
      { id: 4, title: "Memory & Storage", duration: "10 min", completed: true },
      { id: 5, title: "How CPUs Work", duration: "18 min", completed: true },
      {
        id: 6,
        title: "Operating Systems Overview",
        duration: "14 min",
        completed: false,
      },
      {
        id: 7,
        title: "File Systems & I/O",
        duration: "11 min",
        completed: false,
      },
      {
        id: 8,
        title: "Intro to Algorithms",
        duration: "20 min",
        completed: false,
      },
      {
        id: 9,
        title: "Data Structures Basics",
        duration: "22 min",
        completed: false,
      },
      {
        id: 10,
        title: "Networking Fundamentals",
        duration: "16 min",
        completed: false,
      },
      {
        id: 11,
        title: "Security & Encryption",
        duration: "13 min",
        completed: false,
      },
      {
        id: 12,
        title: "The Future of Computing",
        duration: "9 min",
        completed: false,
      },
    ],
  },
  {
    id: 2,
    title: "Web Design Fundamentals",
    instructor: "Kofi Mensah",
    instructorRole: "UI/UX Designer & Instructor",
    progress: 75,
    totalLessons: 8,
    completedLessons: 6,
    discussionCount: 22,
    lessons: [
      {
        id: 1,
        title: "Colour Theory for the Web",
        duration: "10 min",
        completed: true,
      },
      {
        id: 2,
        title: "Typography That Works",
        duration: "12 min",
        completed: true,
      },
      {
        id: 3,
        title: "Layout & Grid Systems",
        duration: "14 min",
        completed: true,
      },
      {
        id: 4,
        title: "Spacing & Visual Rhythm",
        duration: "9 min",
        completed: true,
      },
      {
        id: 5,
        title: "Component Design Patterns",
        duration: "16 min",
        completed: true,
      },
      {
        id: 6,
        title: "Responsive Design",
        duration: "18 min",
        completed: true,
      },
      {
        id: 7,
        title: "Dark Mode & Theming",
        duration: "11 min",
        completed: false,
      },
      {
        id: 8,
        title: "Design Handoff to Dev",
        duration: "13 min",
        completed: false,
      },
    ],
  },
];

function CourseCard({
  course,
  isActive,
  gradColor,
  rawGradColor1,
  rawGradColor2,
  onSelect,
  onNavigate,
}: {
  course: Course;
  isActive: boolean;
  gradColor: string;
  rawGradColor1: string;
  rawGradColor2: string;
  onSelect: () => void;
  onNavigate: () => void;
}) {
  const currentLesson =
    course.lessons.find((l) => !l.completed) ??
    course.lessons[course.lessons.length - 1];

  return (
    <div
      onClick={() => {
        onSelect();
        onNavigate();
      }}
      className={`bg-[#0D1629] border rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-200
        ${isActive ? "border-cyan-500/40" : "border-slate-800 hover:border-slate-700"}`}
    >
      <div className={`h-[2px] w-full bg-gradient-to-r ${gradColor}`} />

      <div className="p-4">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white leading-snug">
              {course.title}
            </p>
            <p className="text-xs text-slate-500 mt-0.5">{course.instructor}</p>
          </div>
          <ProgressRing
            progress={course.progress}
            size={36}
            gradColor1={rawGradColor1}
            gradColor2={rawGradColor2}
          />
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-slate-800 rounded-full overflow-hidden mb-3">
          <div
            className={`h-full bg-gradient-to-r ${gradColor} rounded-full transition-all duration-500`}
            style={{ width: `${course.progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500">
            {course.completedLessons}/{course.totalLessons} lessons
          </span>
          <span className="text-xs text-slate-500">
            {course.progress}% complete
          </span>
        </div>

        {/* Current lesson pill */}
        {isActive && (
          <div className="mt-3 flex items-center gap-2 bg-[#080F1E] border border-slate-800 rounded-xl px-3 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
            <span className="text-xs text-slate-400 truncate">
              Up next: {currentLesson.title}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Lesson List ──────────────────────────────────────────────────────────────

function LessonList({
  course,
  gradColor,
  onNavigate,
}: {
  course: Course;
  gradColor: string;
  onNavigate: (courseId: number, lessonId: number) => void;
}) {
  const currentLessonIndex = course.lessons.findIndex((l) => !l.completed);

  return (
    <div className="space-y-2">
      {course.lessons.map((lesson, i) => {
        const isCurrent = i === currentLessonIndex;
        const isCompleted = lesson.completed;

        return (
          <button
            key={lesson.id}
            onClick={() => onNavigate(course.id, lesson.id)}
            className={`w-full flex items-center gap-3 p-3 rounded-xl border text-left
              transition-all duration-150 group
              ${
                isCurrent
                  ? "bg-[#080F1E] border-cyan-500/30"
                  : isCompleted
                    ? "bg-transparent border-transparent hover:border-slate-800"
                    : "bg-transparent border-transparent hover:border-slate-800 opacity-60"
              }`}
          >
            {/* Step indicator */}
            <div className="flex-shrink-0 relative">
              {isCompleted ? (
                <div
                  className={`w-7 h-7 rounded-full bg-gradient-to-br ${gradColor} flex items-center justify-center`}
                >
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              ) : isCurrent ? (
                <div className="w-7 h-7 rounded-full bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                </div>
              ) : (
                <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                  <span className="text-[10px] text-slate-500 font-medium">
                    {i + 1}
                  </span>
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <p
                className={`text-sm truncate ${isCurrent ? "text-white font-medium" : isCompleted ? "text-slate-400" : "text-slate-500"}`}
              >
                {lesson.title}
              </p>
            </div>

            <span className="text-xs text-slate-600 flex-shrink-0">
              {lesson.duration}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ─── Instructor Card ──────────────────────────────────────────────────────────

function InstructorCard({
  course,
  gradColor,
}: {
  course: Course;
  gradColor: string;
}) {
  return (
    <div className="bg-[#0D1629] border border-slate-800 rounded-2xl p-4">
      <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-3">
        Instructor
      </p>
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
        >
          {course.instructor
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">
            {course.instructor}
          </p>
          <p className="text-xs text-slate-500">{course.instructorRole}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Discussion Card ──────────────────────────────────────────────────────────

function DiscussionCard({
  course,
  gradColor,
  onNavigate,
}: {
  course: Course;
  gradColor: string;
  onNavigate: () => void;
}) {
  return (
    <button
      onClick={onNavigate}
      className="w-full bg-[#0D1629] border border-slate-800 hover:border-slate-700 rounded-2xl p-4 text-left transition-colors duration-150"
    >
      <div className="flex items-center justify-between">
        <p className="text-xs text-slate-500 uppercase tracking-widest font-medium">
          Discussion
        </p>
        <span
          className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r ${gradColor} text-white`}
        >
          {course.discussionCount} posts
        </span>
      </div>
      <p className="text-sm text-slate-300 mt-2">
        Join the conversation with your classmates.
      </p>
      <p className="text-xs text-cyan-400 mt-2">View all threads →</p>
    </button>
  );
}

// ─── Next Lesson CTA ──────────────────────────────────────────────────────────

function NextLessonCTA({
  course,
  gradColor,
  onNavigate,
}: {
  course: Course;
  gradColor: string;
  onNavigate: (courseId: number, lessonId: number) => void;
}) {
  const nextLesson = course.lessons.find((l) => !l.completed);
  if (!nextLesson)
    return (
      <div
        className={`bg-gradient-to-r ${gradColor} rounded-2xl p-4 text-center`}
      >
        <p className="text-white font-semibold text-sm">🎉 Course complete!</p>
        <p className="text-white/70 text-xs mt-1">
          You&apos;ve finished all lessons.
        </p>
      </div>
    );

  return (
    <button
      onClick={() => onNavigate(course.id, nextLesson.id)}
      className={`w-full bg-gradient-to-r ${gradColor} rounded-2xl p-4 text-left 
        hover:opacity-90 transition-opacity duration-150`}
    >
      <p className="text-white/70 text-xs uppercase tracking-widest font-medium mb-1">
        Continue learning
      </p>
      <p className="text-white font-semibold text-sm">{nextLesson.title}</p>
      <div className="flex items-center gap-1 mt-2">
        <span className="text-white/60 text-xs">{nextLesson.duration}</span>
        <span className="text-white/40 text-xs">·</span>
        <span className="text-white/80 text-xs font-medium">Start now →</span>
      </div>
    </button>
  );
}

export default function CourseDetails() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const resourceName = decodeURIComponent(name || "");
  const fetchedResourceData = ResourceList.find(
    (res) => res.name === resourceName,
  );

  const [activeCourseId, setActiveCourseId] = useState<number>(
    MOCK_COURSES[0].id,
  );

  const { activeTrack } = useAuth();
  const activeCourse =
    MOCK_COURSES.find((c) => c.id === activeCourseId) ?? MOCK_COURSES[0];

  const handleNavigateToCourse = (courseId: number, lessonId?: number) => {
    router.push(
      `/student/course/${courseId}/lesson/${lessonId ? `?lesson=${lessonId}` : ""}`,
    );
  };

  const handleNavigateToDiscussion = () => {
    router.push(`/student/course/${activeCourse.id}/discussion`);
  };

  return (
    <div className="min-h-screen bg-[#080F1E] flex pt-20">
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <AdminHeader
            title={fetchedResourceData?.name || ""}
            subtitle={fetchedResourceData?.description || ""}
          />

          {/* Sticky track banner */}
          {/* <TrackBanner
                    track={activeTrack.name}
                    gradColor={activeTrack.gradColor ?? "from-blue-500 to-cyan-600"}
                    color={activeTrack.color ?? "text-cyan-600"}
                /> */}

          {/* Two-column layout */}
          <div className="mt-6 grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-6">
            {/* LEFT — Lesson list + syllabus */}
            <div className="space-y-6">
              {/* Course selector cards */}
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-3">
                  Your Courses
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {MOCK_COURSES.map((course) => (
                    <CourseCard
                      key={course.id}
                      course={course}
                      isActive={course.id === activeCourseId}
                      gradColor={
                        activeTrack.gradColor ?? "from-blue-500 to-cyan-600"
                      }
                      rawGradColor1={activeTrack.rawGradColor1 ?? ""}
                      rawGradColor2={activeTrack.rawGradColor2 ?? ""}
                      onSelect={() => setActiveCourseId(course.id)}
                      onNavigate={() => handleNavigateToCourse(course.id)}
                    />
                  ))}
                </div>
              </div>

              {/* Syllabus for active course */}
              <div className="bg-[#0D1629] border border-slate-800 rounded-2xl overflow-hidden">
                <div
                  className={`h-[2px] w-full bg-gradient-to-r ${activeTrack.gradColor}`}
                />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-white">
                      {activeCourse.title}
                    </p>
                    <span className="text-xs text-slate-500">
                      {activeCourse.completedLessons}/
                      {activeCourse.totalLessons} done
                    </span>
                  </div>
                  <LessonList
                    course={activeCourse}
                    gradColor={
                      activeTrack.gradColor ?? "from-blue-500 to-cyan-600"
                    }
                    onNavigate={handleNavigateToCourse}
                  />
                </div>
              </div>
            </div>

            {/* RIGHT — Instructor, Next lesson, Discussion */}
            <div className="space-y-4">
              <NextLessonCTA
                course={activeCourse}
                gradColor={activeTrack.gradColor ?? "from-blue-500 to-cyan-600"}
                onNavigate={handleNavigateToCourse}
              />
              <InstructorCard
                course={activeCourse}
                gradColor={activeTrack.gradColor ?? "from-blue-500 to-cyan-600"}
              />
              <DiscussionCard
                course={activeCourse}
                gradColor={activeTrack.gradColor ?? "from-blue-500 to-cyan-600"}
                onNavigate={handleNavigateToDiscussion}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

// export default function StudentClassRoom() {
//   const router = useRouter();
//   const [activeCourseId, setActiveCourseId] = useState<number>(
//     MOCK_COURSES[0].id,
//   );
//   const [enrolStatus] = useState<EnrolStatus>("Enrolled");

//   // Active track is derived from ResourceList (reuse existing data)
//   // const activeTrack = ResourceList[0];
//   // const activeTrack = Courses[1];
//   const { activeTrack } = useAuth();
//   const activeCourse =
//     MOCK_COURSES.find((c) => c.id === activeCourseId) ?? MOCK_COURSES[0];

//   const handleNavigateToCourse = (courseId: number, lessonId?: number) => {
//     router.push(
//       `/student/course/${courseId}/lesson/${lessonId ? `?lesson=${lessonId}` : ""}`,
//     );
//   };

//   const handleNavigateToDiscussion = () => {
//     router.push(`/student/course/${activeCourse.id}/discussion`);
//   };

//   return (
//     <div className="min-h-screen bg-[#080F1E] flex pt-20">
//       <div className="flex-1 flex flex-col min-w-0">
//         <main className="flex-1 overflow-y-auto p-4 sm:p-6">
//           <StudentHeader
//             title="Classroom"
//             subtitle="Learn and practice code"
//             enrolStatus={enrolStatus}
//           />

//           {/* Sticky track banner */}
//           {/* <TrackBanner
//             track={activeTrack.name}
//             gradColor={activeTrack.gradColor ?? "from-blue-500 to-cyan-600"}
//             color={activeTrack.color ?? "text-cyan-600"}
//           /> */}

//           {/* Two-column layout */}
//           <div className="mt-6 grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-6">
//             {/* LEFT — Lesson list + syllabus */}
//             <div className="space-y-6">
//               {/* Course selector cards */}
//               <div>
//                 <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-3">
//                   Your Courses
//                 </p>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                   {MOCK_COURSES.map((course) => (
//                     <CourseCard
//                       key={course.id}
//                       course={course}
//                       isActive={course.id === activeCourseId}
//                       gradColor={
//                         activeTrack.gradColor ?? "from-blue-500 to-cyan-600"
//                       }
//                       rawGradColor1={activeTrack.rawGradColor1 ?? ""}
//                       rawGradColor2={activeTrack.rawGradColor2 ?? ""}
//                       onSelect={() => setActiveCourseId(course.id)}
//                       onNavigate={() => handleNavigateToCourse(course.id)}
//                     />
//                   ))}
//                 </div>
//               </div>

//               {/* Syllabus for active course */}
//               <div className="bg-[#0D1629] border border-slate-800 rounded-2xl overflow-hidden">
//                 <div
//                   className={`h-[2px] w-full bg-gradient-to-r ${activeTrack.gradColor}`}
//                 />
//                 <div className="p-5">
//                   <div className="flex items-center justify-between mb-4">
//                     <p className="text-sm font-semibold text-white">
//                       {activeCourse.title}
//                     </p>
//                     <span className="text-xs text-slate-500">
//                       {activeCourse.completedLessons}/
//                       {activeCourse.totalLessons} done
//                     </span>
//                   </div>
//                   <LessonList
//                     course={activeCourse}
//                     gradColor={
//                       activeTrack.gradColor ?? "from-blue-500 to-cyan-600"
//                     }
//                     onNavigate={handleNavigateToCourse}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT — Instructor, Next lesson, Discussion */}
//             <div className="space-y-4">
//               <NextLessonCTA
//                 course={activeCourse}
//                 gradColor={activeTrack.gradColor ?? "from-blue-500 to-cyan-600"}
//                 onNavigate={handleNavigateToCourse}
//               />
//               <InstructorCard
//                 course={activeCourse}
//                 gradColor={activeTrack.gradColor ?? "from-blue-500 to-cyan-600"}
//               />
//               <DiscussionCard
//                 course={activeCourse}
//                 gradColor={activeTrack.gradColor ?? "from-blue-500 to-cyan-600"}
//                 onNavigate={handleNavigateToDiscussion}
//               />
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
