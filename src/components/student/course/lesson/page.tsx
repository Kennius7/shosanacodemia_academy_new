"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { EnrolStatus } from "@/types";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Note {
  heading: string;
  body: string;
}

interface Lesson {
  id: number;
  title: string;
  duration: string;
  completed: boolean;
  videoUrl: string | null; // null = placeholder
  notes: Note[];
  keyPoints: string[];
}

interface Course {
  id: number;
  title: string;
  instructor: string;
  instructorRole: string;
  instructorAvatar: string;
  totalLessons: number;
  completedLessons: number;
  lessons: Lesson[];
}

// ─── Mock data (replace with API calls using courseId) ────────────────────────

const MOCK_COURSE: Course = {
  id: 1,
  title: "Intro to Computer Science",
  instructor: "Dr. Amara Nwosu",
  instructorRole: "Senior CS Lecturer",
  instructorAvatar: "AN",
  totalLessons: 12,
  completedLessons: 5,
  lessons: [
    {
      id: 1,
      title: "What is a Computer?",
      duration: "8 min",
      completed: true,
      videoUrl: null,
      keyPoints: [
        "A computer is a programmable electronic device that processes data.",
        "Hardware is the physical components; software is the instructions.",
        "Input → Process → Output → Storage is the fundamental computing model.",
      ],
      notes: [
        {
          heading: "Definition",
          body: "A computer takes raw data (input), processes it using instructions (a program), and produces a result (output). Storage allows results to persist.",
        },
        {
          heading: "Key distinction",
          body: "Hardware without software is inert. Software without hardware has no medium to run on. The two are inseparable in practice.",
        },
      ],
    },
    {
      id: 2,
      title: "Binary & Number Systems",
      duration: "12 min",
      completed: true,
      videoUrl: null,
      keyPoints: [
        "Binary uses only 0 and 1 — one digit is called a bit.",
        "8 bits = 1 byte. A byte can represent 256 distinct values (0–255).",
        "Hexadecimal (base-16) is shorthand for binary, widely used in memory addresses and colour codes.",
      ],
      notes: [
        {
          heading: "Why binary?",
          body: "Electronic circuits are naturally binary — a transistor is either on or off. Binary maps perfectly to this physical reality.",
        },
        {
          heading: "Converting decimal to binary",
          body: "Repeatedly divide by 2 and record the remainders from bottom to top. E.g. 13 → 1101 in binary.",
        },
      ],
    },
    {
      id: 3,
      title: "Logic Gates & Circuits",
      duration: "15 min",
      completed: true,
      videoUrl: null,
      keyPoints: [
        "AND, OR, NOT are the three fundamental gates.",
        "NAND and NOR are universal — every other gate can be built from them.",
        "Combining gates produces circuits that add, compare, and route data.",
      ],
      notes: [
        {
          heading: "Truth tables",
          body: "A truth table enumerates every possible input combination and its output. They're the specification language for digital logic.",
        },
      ],
    },
    {
      id: 4,
      title: "Memory & Storage",
      duration: "10 min",
      completed: true,
      videoUrl: null,
      keyPoints: [
        "RAM is volatile — data is lost when power is cut.",
        "Storage (SSD/HDD) is non-volatile — data persists.",
        "The memory hierarchy trades speed for size: registers → cache → RAM → storage.",
      ],
      notes: [
        {
          heading: "Latency intuition",
          body: "If a CPU register access takes 1 second in human time, RAM access takes ~6 minutes, and disk access takes 11 days.",
        },
      ],
    },
    {
      id: 5,
      title: "How CPUs Work",
      duration: "18 min",
      completed: true,
      videoUrl: null,
      keyPoints: [
        "The CPU fetch–decode–execute cycle runs billions of times per second.",
        "Clock speed (GHz) measures cycles per second; more cycles = more instructions.",
        "Multiple cores allow true parallel execution of separate instruction streams.",
      ],
      notes: [
        {
          heading: "Pipeline",
          body: "Modern CPUs pipeline instructions — while one instruction executes, the next is being decoded and the one after is being fetched. This keeps all CPU units busy.",
        },
      ],
    },
    {
      id: 6,
      title: "Operating Systems Overview",
      duration: "14 min",
      completed: false,
      videoUrl: null,
      keyPoints: [
        "The OS is the intermediary between hardware and user applications.",
        "Core jobs: process scheduling, memory management, file systems, I/O handling.",
        "The kernel runs in privileged mode; user programs run in restricted mode.",
      ],
      notes: [
        {
          heading: "Abstraction",
          body: "Without an OS, every program would need to know exactly how to talk to every piece of hardware. The OS abstracts this into a consistent interface.",
        },
        {
          heading: "Scheduling",
          body: "A single-core CPU can only run one process at a time. The scheduler switches between processes so fast it feels simultaneous — this is called time-sharing.",
        },
      ],
    },
    {
      id: 7,
      title: "File Systems & I/O",
      duration: "11 min",
      completed: false,
      videoUrl: null,
      keyPoints: [],
      notes: [],
    },
    {
      id: 8,
      title: "Intro to Algorithms",
      duration: "20 min",
      completed: false,
      videoUrl: null,
      keyPoints: [],
      notes: [],
    },
    {
      id: 9,
      title: "Data Structures Basics",
      duration: "22 min",
      completed: false,
      videoUrl: null,
      keyPoints: [],
      notes: [],
    },
    {
      id: 10,
      title: "Networking Fundamentals",
      duration: "16 min",
      completed: false,
      videoUrl: null,
      keyPoints: [],
      notes: [],
    },
    {
      id: 11,
      title: "Security & Encryption",
      duration: "13 min",
      completed: false,
      videoUrl: null,
      keyPoints: [],
      notes: [],
    },
    {
      id: 12,
      title: "The Future of Computing",
      duration: "9 min",
      completed: false,
      videoUrl: null,
      keyPoints: [],
      notes: [],
    },
  ],
};

const GRAD = "from-cyan-500 to-blue-500";

// ─── Progress Ring ────────────────────────────────────────────────────────────

function ProgressRing({
  progress,
  size = 44,
}: {
  progress: number;
  size?: number;
}) {
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (progress / 100) * circ;
  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="#1e293b"
        strokeWidth={3}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="url(#rg)"
        strokeWidth={3}
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="transition-all duration-700"
      />
      <defs>
        <linearGradient id="rg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ─── Video Player Placeholder ─────────────────────────────────────────────────

function VideoPlayer({
  lesson,
  onComplete,
}: {
  lesson: Lesson;
  onComplete: () => void;
}) {
  const [playing, setPlaying] = useState(false);

  // Reset play state when lesson changes
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setPlaying(false), [lesson.id]);

  return (
    <div className="relative w-full aspect-video bg-[#0D1629] rounded-2xl overflow-hidden border border-slate-800 group">
      {/* Gradient overlay top-left watermark */}
      <div
        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${GRAD}`}
      />

      {/* Placeholder bg pattern */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
        <div className="text-center px-6">
          <p className="text-xs text-slate-600 uppercase tracking-widest font-medium mb-2">
            Lesson {lesson.id} of {MOCK_COURSE.totalLessons}
          </p>
          <p className="text-lg font-semibold text-white leading-snug">
            {lesson.title}
          </p>
          <p className="text-sm text-slate-500 mt-1">{lesson.duration}</p>
        </div>

        {/* Play button */}
        <button
          onClick={() => setPlaying((p) => !p)}
          className={`w-16 h-16 rounded-full bg-gradient-to-br ${GRAD} 
            flex items-center justify-center shadow-lg shadow-cyan-500/20
            hover:scale-105 active:scale-95 transition-transform duration-150`}
        >
          {playing ? (
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5.14v14l11-7-11-7z" />
            </svg>
          )}
        </button>

        {playing && (
          <p className="text-xs text-cyan-400 animate-pulse">
            Simulating playback…
          </p>
        )}
      </div>

      {/* Complete button — shown after "playing" */}
      {playing && !lesson.completed && (
        <button
          onClick={onComplete}
          className={`absolute bottom-4 right-4 text-xs font-semibold px-4 py-2 rounded-xl
            bg-gradient-to-r ${GRAD} text-white hover:opacity-90 transition-opacity`}
        >
          Mark complete ✓
        </button>
      )}

      {lesson.completed && (
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 text-xs text-cyan-400">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Completed
        </div>
      )}
    </div>
  );
}

// ─── Key Points ───────────────────────────────────────────────────────────────

function KeyPoints({ points }: { points: string[] }) {
  if (points.length === 0) return null;
  return (
    <div className="bg-[#0D1629] border border-slate-800 rounded-2xl overflow-hidden">
      <div className={`h-[2px] w-full bg-gradient-to-r ${GRAD}`} />
      <div className="p-5">
        <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-3">
          Key points
        </p>
        <ul className="space-y-2.5">
          {points.map((pt, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span
                className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${GRAD} flex-shrink-0`}
              />
              <span className="text-sm text-slate-300 leading-relaxed">
                {pt}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── Lesson Notes ─────────────────────────────────────────────────────────────

function LessonNotes({ notes }: { notes: Note[] }) {
  if (notes.length === 0) return null;
  return (
    <div className="bg-[#0D1629] border border-slate-800 rounded-2xl p-5">
      <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-4">
        Lesson notes
      </p>
      <div className="space-y-4">
        {notes.map((note, i) => (
          <div key={i}>
            <p className="text-sm font-semibold text-white mb-1">
              {note.heading}
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              {note.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Instructor Card ──────────────────────────────────────────────────────────

function InstructorCard({ course }: { course: Course }) {
  return (
    <div className="bg-[#0D1629] border border-slate-800 rounded-2xl p-4 flex items-center gap-3">
      <div
        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${GRAD} 
          flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
      >
        {course.instructorAvatar}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-white truncate">
          {course.instructor}
        </p>
        <p className="text-xs text-slate-500">{course.instructorRole}</p>
      </div>
      <div
        className={`ml-auto text-[10px] font-semibold px-2 py-1 rounded-lg 
        bg-gradient-to-r ${GRAD} text-white flex-shrink-0`}
      >
        Instructor
      </div>
    </div>
  );
}

// ─── Lesson Sidebar ───────────────────────────────────────────────────────────

function LessonSidebar({
  course,
  activeLessonId,
  flashId,
  onSelect,
}: {
  course: Course;
  activeLessonId: number;
  flashId: number | null;
  onSelect: (id: number) => void;
}) {
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [activeLessonId]);

  const progress = Math.round(
    (course.completedLessons / course.totalLessons) * 100,
  );

  return (
    <div className="flex flex-col h-full bg-[#0D1629] border border-slate-800 rounded-2xl overflow-hidden">
      {/* Sidebar header */}
      <div className="p-4 border-b border-slate-800 flex-shrink-0">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-slate-500 uppercase tracking-widest font-medium">
            Course content
          </p>
          <div className="flex items-center gap-2">
            <ProgressRing progress={progress} size={32} />
            <span className="text-xs text-slate-400 font-medium">
              {progress}%
            </span>
          </div>
        </div>
        <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${GRAD} rounded-full transition-all duration-700`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-slate-600 mt-1.5">
          {course.completedLessons} of {course.totalLessons} lessons complete
        </p>
      </div>

      {/* Scrollable lesson list */}
      <div className="flex-1 overflow-y-auto p-2 space-y-0.5 scrollbar-none">
        {course.lessons.map((lesson, i) => {
          const isActive = lesson.id === activeLessonId;
          const isFlashing = lesson.id === flashId;
          const currentIndex = course.lessons.findIndex((l) => !l.completed);
          const isCurrent = i === currentIndex;

          return (
            <button
              key={lesson.id}
              ref={isActive ? activeRef : undefined}
              onClick={() => onSelect(lesson.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left
                transition-all duration-200 group relative overflow-hidden
                ${
                  isActive
                    ? "bg-[#080F1E] border border-cyan-500/30"
                    : "border border-transparent hover:bg-[#080F1E]/60"
                }
                ${isFlashing ? "animate-pulse" : ""}`}
            >
              {/* Flash overlay on completion */}
              {isFlashing && (
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${GRAD} opacity-10 rounded-xl`}
                />
              )}

              {/* Step indicator */}
              <div className="flex-shrink-0 relative z-10">
                {lesson.completed ? (
                  <div
                    className={`w-7 h-7 rounded-full bg-gradient-to-br ${GRAD} flex items-center justify-center`}
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
                ) : isCurrent && !isActive ? (
                  <div className="w-7 h-7 rounded-full bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  </div>
                ) : isActive ? (
                  <div
                    className={`w-7 h-7 rounded-full bg-gradient-to-br ${GRAD} flex items-center justify-center`}
                  >
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                    <span className="text-[10px] text-slate-500 font-medium">
                      {i + 1}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0 relative z-10">
                <p
                  className={`text-xs leading-snug truncate transition-colors
                  ${
                    isActive
                      ? "text-white font-semibold"
                      : lesson.completed
                        ? "text-slate-400"
                        : isCurrent
                          ? "text-slate-300"
                          : "text-slate-500"
                  }`}
                >
                  {lesson.title}
                </p>
                <p className="text-[10px] text-slate-600 mt-0.5">
                  {lesson.duration}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Prev / Next Nav ──────────────────────────────────────────────────────────

function LessonNav({
  course,
  activeLessonId,
  onNavigate,
}: {
  course: Course;
  activeLessonId: number;
  onNavigate: (id: number) => void;
}) {
  const idx = course.lessons.findIndex((l) => l.id === activeLessonId);
  const prev = course.lessons[idx - 1] ?? null;
  const next = course.lessons[idx + 1] ?? null;

  return (
    <div className="flex items-center justify-between gap-3">
      <button
        onClick={() => prev && onNavigate(prev.id)}
        disabled={!prev}
        className={`flex items-center gap-2 text-sm px-4 py-2.5 rounded-xl border transition-colors
          ${
            prev
              ? "border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white"
              : "border-transparent text-slate-700 cursor-not-allowed"
          }`}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        {prev ? (
          <span className="hidden sm:inline truncate max-w-[140px]">
            {prev.title}
          </span>
        ) : (
          <span className="hidden sm:inline text-slate-700">First lesson</span>
        )}
      </button>

      <span className="text-xs text-slate-600">
        {idx + 1} / {course.lessons.length}
      </span>

      <button
        onClick={() => next && onNavigate(next.id)}
        disabled={!next}
        className={`flex items-center gap-2 text-sm px-4 py-2.5 rounded-xl border transition-colors
          ${
            next
              ? `border-slate-800 bg-gradient-to-r ${GRAD} border-transparent text-white hover:opacity-90`
              : "border-transparent text-slate-700 cursor-not-allowed"
          }`}
      >
        {next ? (
          <span className="hidden sm:inline truncate max-w-[140px]">
            {next.title}
          </span>
        ) : (
          <span className="hidden sm:inline">All done!</span>
        )}
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CoursePage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  // Derive initial lesson from ?lesson= query param
  const lessonParam = Number(searchParams.get("lesson"));
  const initialLesson =
    MOCK_COURSE.lessons.find((l) => l.id === lessonParam) ??
    MOCK_COURSE.lessons.find((l) => !l.completed) ??
    MOCK_COURSE.lessons[0];

  const [lessons, setLessons] = useState<Lesson[]>(MOCK_COURSE.lessons);
  const [activeLessonId, setActiveLessonId] = useState<number>(
    initialLesson.id,
  );
  const [flashId, setFlashId] = useState<number | null>(null);
  const [enrolStatus] = useState<EnrolStatus>("Enrolled");

  const course: Course = {
    ...MOCK_COURSE,
    lessons,
    completedLessons: lessons.filter((l) => l.completed).length,
  };

  const activeLesson =
    lessons.find((l) => l.id === activeLessonId) ?? lessons[0];

  function handleNavigate(id: number) {
    setActiveLessonId(id);
    // Sync URL without full navigation
    const url = new URL(window.location.href);
    url.searchParams.set("lesson", String(id));
    window.history.replaceState(null, "", url.toString());
  }

  function handleComplete() {
    setLessons((prev) =>
      prev.map((l) =>
        l.id === activeLessonId ? { ...l, completed: true } : l,
      ),
    );
    // Pulse the sidebar step briefly
    setFlashId(activeLessonId);
    setTimeout(() => setFlashId(null), 1200);

    // Auto-advance to next lesson after a beat
    const idx = lessons.findIndex((l) => l.id === activeLessonId);
    const next = lessons[idx + 1];
    if (next) {
      setTimeout(() => handleNavigate(next.id), 800);
    }
  }

  return (
    <div className="min-h-screen bg-[#080F1E] flex pt-20">
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* Back + course title breadcrumb */}
          <div className="flex items-center gap-2 mb-5">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Classroom
            </button>
            <span className="text-slate-700 text-xs">·</span>
            <span className="text-xs text-slate-400 truncate">
              {course.title}
            </span>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-6 items-start">
            {/* LEFT — Player + content */}
            <div className="space-y-5 min-w-0">
              <VideoPlayer lesson={activeLesson} onComplete={handleComplete} />

              {/* Lesson title + nav */}
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-medium">
                    Lesson{" "}
                    {course.lessons.findIndex((l) => l.id === activeLessonId) +
                      1}
                  </p>
                  <h1 className="text-xl font-bold text-white mt-1 leading-snug">
                    {activeLesson.title}
                  </h1>
                </div>
                <LessonNav
                  course={course}
                  activeLessonId={activeLessonId}
                  onNavigate={handleNavigate}
                />
              </div>

              {/* Key points */}
              <KeyPoints points={activeLesson.keyPoints} />

              {/* Notes */}
              <LessonNotes notes={activeLesson.notes} />

              {/* Instructor */}
              <InstructorCard course={course} />

              {/* Discussion shortcut */}
              <button
                onClick={() =>
                  router.push(`/student/course/${params?.courseId}/discussion`)
                }
                className="w-full bg-[#0D1629] border border-slate-800 hover:border-slate-700 
                  rounded-2xl p-4 text-left transition-colors duration-150 flex items-center justify-between group"
              >
                <div>
                  <p className="text-sm font-semibold text-white">
                    Have a question?
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Ask your classmates or instructor in the discussion board.
                  </p>
                </div>
                <svg
                  className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors flex-shrink-0 ml-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* RIGHT — Sticky lesson sidebar */}
            <div className="xl:sticky xl:top-24 xl:h-[calc(100vh-7rem)]">
              <LessonSidebar
                course={course}
                activeLessonId={activeLessonId}
                flashId={flashId}
                onSelect={handleNavigate}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
