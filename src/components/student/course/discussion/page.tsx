"use client";

import { useParams, useRouter } from "next/navigation";
import StudentHeader from "@/components/StudentHeader";
import { EnrolStatus } from "@/types";
import { useState, useRef, useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Reply {
  id: number;
  author: string;
  authorRole: "student" | "instructor";
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
  liked: boolean;
}

interface Thread {
  id: number;
  lessonId: number | null;
  lessonTitle: string | null;
  title: string;
  author: string;
  authorRole: "student" | "instructor";
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
  liked: boolean;
  pinned: boolean;
  replies: Reply[];
  tags: string[];
}

type FilterTab = "All" | "Pinned" | "My Posts" | "Unanswered";

// ─── Mock data (replace with API) ─────────────────────────────────────────────

const CURRENT_USER = { name: "You", avatar: "YO", role: "student" as const };

const MOCK_THREADS: Thread[] = [
  {
    id: 1,
    lessonId: 6,
    lessonTitle: "Operating Systems Overview",
    title: "What's the difference between a process and a thread?",
    author: "Temi Adeyemi",
    authorRole: "student",
    avatar: "TA",
    content:
      "I got confused during the lecture. The slides say a process has its own memory space, but threads share it — does that mean two threads can accidentally overwrite each other's data?",
    timestamp: "2h ago",
    likes: 12,
    liked: false,
    pinned: false,
    tags: ["OS", "Concurrency"],
    replies: [
      {
        id: 1,
        author: "Dr. Amara Nwosu",
        authorRole: "instructor",
        avatar: "AN",
        content:
          "Great question! Yes — threads within the same process share heap memory, so they can overwrite each other's data. That's exactly what mutexes and locks are for. We'll cover synchronisation in lesson 9.",
        timestamp: "1h ago",
        likes: 8,
        liked: false,
      },
      {
        id: 2,
        author: "Chukwuemeka Obi",
        authorRole: "student",
        avatar: "CO",
        content:
          "I had the same question! This makes race conditions make so much more sense now.",
        timestamp: "45m ago",
        likes: 3,
        liked: false,
      },
    ],
  },
  {
    id: 2,
    lessonId: null,
    lessonTitle: null,
    title: "📌 Welcome to the Intro to CS discussion board",
    author: "Dr. Amara Nwosu",
    authorRole: "instructor",
    avatar: "AN",
    content:
      "Use this space to ask questions about any lesson, share insights, or help a classmate. Be specific — mention which lesson you're on, paste the exact error message, or describe what you expected vs. what happened. Good questions get better answers.",
    timestamp: "3d ago",
    likes: 24,
    liked: true,
    pinned: true,
    tags: ["Announcement"],
    replies: [],
  },
  {
    id: 3,
    lessonId: 5,
    lessonTitle: "How CPUs Work",
    title: "Why do we need both L1 and L2 cache?",
    author: "Fatima Bello",
    authorRole: "student",
    avatar: "FB",
    content:
      "If L1 cache is faster, why not just make it bigger instead of having L2 as a fallback?",
    timestamp: "5h ago",
    likes: 7,
    liked: false,
    pinned: false,
    tags: ["Hardware", "Performance"],
    replies: [],
  },
  {
    id: 4,
    lessonId: 3,
    lessonTitle: "Logic Gates & Circuits",
    title: "Is there a visual tool to simulate logic gates?",
    author: "Oluwaseun Martins",
    authorRole: "student",
    avatar: "OM",
    content:
      "I learn better visually. Any browser tool where I can drag and connect gates and see the output change in real time?",
    timestamp: "1d ago",
    likes: 15,
    liked: false,
    pinned: false,
    tags: ["Tools", "Logic Gates"],
    replies: [
      {
        id: 1,
        author: "Dr. Amara Nwosu",
        authorRole: "instructor",
        avatar: "AN",
        content:
          "Try logic.ly — free, browser-based, no install needed. CircuitVerse is another solid one with more gate types.",
        timestamp: "20h ago",
        likes: 11,
        liked: false,
      },
    ],
  },
];

const GRAD_COLOR = "from-cyan-500 to-blue-500";
const COURSE_TITLE = "Intro to Computer Science";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function Avatar({
  initials,
  role,
  size = "sm",
}: {
  initials: string;
  role: "student" | "instructor";
  size?: "sm" | "md";
}) {
  const dim = size === "md" ? "w-10 h-10 text-sm" : "w-8 h-8 text-xs";
  return (
    <div
      className={`${dim} rounded-xl flex items-center justify-center font-bold flex-shrink-0
        ${
          role === "instructor"
            ? `bg-gradient-to-br ${GRAD_COLOR} text-white`
            : "bg-slate-800 text-slate-300"
        }`}
    >
      {initials}
    </div>
  );
}

function RoleBadge({ role }: { role: "student" | "instructor" }) {
  if (role !== "instructor") return null;
  return (
    <span
      className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md 
        bg-gradient-to-r ${GRAD_COLOR} text-white uppercase tracking-wide`}
    >
      Instructor
    </span>
  );
}

function LessonTag({ title }: { title: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-[11px] text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-lg">
      <svg
        className="w-3 h-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      {title}
    </span>
  );
}

// ─── New Thread Composer ──────────────────────────────────────────────────────

function ThreadComposer({
  onPost,
}: {
  onPost: (title: string, content: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) titleRef.current?.focus();
  }, [open]);

  const canPost = title.trim().length > 0 && content.trim().length > 0;

  function handlePost() {
    if (!canPost) return;
    onPost(title.trim(), content.trim());
    setTitle("");
    setContent("");
    setOpen(false);
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className={`w-full flex items-center gap-3 bg-[#0D1629] border border-slate-800 
          hover:border-cyan-500/30 rounded-2xl p-4 text-left transition-colors duration-150 group`}
      >
        <Avatar initials={CURRENT_USER.avatar} role="student" />
        <span className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
          Ask a question or start a discussion…
        </span>
        <span
          className={`ml-auto text-xs font-semibold px-3 py-1.5 rounded-xl 
            bg-gradient-to-r ${GRAD_COLOR} text-white flex-shrink-0`}
        >
          New post
        </span>
      </button>
    );
  }

  return (
    <div className="bg-[#0D1629] border border-cyan-500/30 rounded-2xl overflow-hidden">
      <div className={`h-[2px] w-full bg-gradient-to-r ${GRAD_COLOR}`} />
      <div className="p-5 space-y-3">
        <input
          ref={titleRef}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What's your question or topic?"
          className="w-full bg-[#080F1E] border border-slate-800 rounded-xl px-4 py-2.5 
            text-sm text-white placeholder-slate-600 outline-none 
            focus:border-cyan-500/50 transition-colors"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Give some context — which lesson are you on, what have you tried, what's confusing you?"
          rows={4}
          className="w-full bg-[#080F1E] border border-slate-800 rounded-xl px-4 py-2.5 
            text-sm text-white placeholder-slate-600 outline-none resize-none
            focus:border-cyan-500/50 transition-colors"
        />
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => {
              setOpen(false);
              setTitle("");
              setContent("");
            }}
            className="text-sm text-slate-500 hover:text-slate-300 px-3 py-1.5 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handlePost}
            disabled={!canPost}
            className={`text-sm font-semibold px-4 py-1.5 rounded-xl transition-opacity
              bg-gradient-to-r ${GRAD_COLOR} text-white
              ${canPost ? "opacity-100" : "opacity-40 cursor-not-allowed"}`}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Reply Composer ───────────────────────────────────────────────────────────

function ReplyComposer({ onReply }: { onReply: (content: string) => void }) {
  const [content, setContent] = useState("");
  const canReply = content.trim().length > 0;

  function handleReply() {
    if (!canReply) return;
    onReply(content.trim());
    setContent("");
  }

  return (
    <div className="flex items-start gap-3 mt-4 pt-4 border-t border-slate-800">
      <Avatar initials={CURRENT_USER.avatar} role="student" />
      <div className="flex-1 space-y-2">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write a reply…"
          rows={2}
          className="w-full bg-[#080F1E] border border-slate-800 rounded-xl px-3 py-2 
            text-sm text-white placeholder-slate-600 outline-none resize-none
            focus:border-cyan-500/40 transition-colors"
        />
        <div className="flex justify-end">
          <button
            onClick={handleReply}
            disabled={!canReply}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-opacity
              bg-gradient-to-r ${GRAD_COLOR} text-white
              ${canReply ? "opacity-100" : "opacity-40 cursor-not-allowed"}`}
          >
            Reply
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Thread Card ──────────────────────────────────────────────────────────────

function ThreadCard({
  thread,
  onLikeThread,
  onLikeReply,
  onReply,
}: {
  thread: Thread;
  onLikeThread: (threadId: number) => void;
  onLikeReply: (threadId: number, replyId: number) => void;
  onReply: (threadId: number, content: string) => void;
}) {
  const [expanded, setExpanded] = useState(thread.pinned);

  return (
    <div
      className={`bg-[#0D1629] border rounded-2xl overflow-hidden transition-colors duration-150
        ${thread.pinned ? "border-cyan-500/20" : "border-slate-800 hover:border-slate-700"}`}
    >
      {thread.pinned && (
        <div className={`h-[2px] w-full bg-gradient-to-r ${GRAD_COLOR}`} />
      )}

      <div className="p-5">
        {/* Thread header */}
        <div className="flex items-start gap-3">
          <Avatar initials={thread.avatar} role={thread.authorRole} size="md" />

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-0.5">
              <span className="text-sm font-semibold text-white">
                {thread.author}
              </span>
              <RoleBadge role={thread.authorRole} />
              {thread.pinned && (
                <span className="text-[10px] text-slate-500 uppercase tracking-wide font-medium">
                  📌 Pinned
                </span>
              )}
              <span className="text-xs text-slate-600 ml-auto">
                {thread.timestamp}
              </span>
            </div>

            {/* Lesson context tag */}
            {thread.lessonTitle && (
              <div className="mb-2">
                <LessonTag title={thread.lessonTitle} />
              </div>
            )}

            {/* Title */}
            <button
              onClick={() => setExpanded((p) => !p)}
              className="text-left w-full"
            >
              <p className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors leading-snug">
                {thread.title}
              </p>
            </button>

            {/* Body */}
            {expanded && (
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                {thread.content}
              </p>
            )}

            {/* Topic tags */}
            {thread.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {thread.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-slate-500 bg-slate-800/60 px-2 py-0.5 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Action row */}
            <div className="flex items-center gap-4 mt-3">
              <button
                onClick={() => onLikeThread(thread.id)}
                className={`flex items-center gap-1.5 text-xs transition-colors
                  ${thread.liked ? "text-cyan-400" : "text-slate-500 hover:text-slate-300"}`}
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill={thread.liked ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                {thread.likes}
              </button>

              <button
                onClick={() => setExpanded((p) => !p)}
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                {thread.replies.length}{" "}
                {thread.replies.length === 1 ? "reply" : "replies"}
              </button>
            </div>
          </div>
        </div>

        {/* Replies */}
        {expanded && (
          <div className="mt-4 space-y-4 pl-4 border-l border-slate-800">
            {thread.replies.map((reply) => (
              <div key={reply.id} className="flex items-start gap-3">
                <Avatar initials={reply.avatar} role={reply.authorRole} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-xs font-semibold text-white">
                      {reply.author}
                    </span>
                    <RoleBadge role={reply.authorRole} />
                    <span className="text-xs text-slate-600 ml-auto">
                      {reply.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {reply.content}
                  </p>
                  <button
                    onClick={() => onLikeReply(thread.id, reply.id)}
                    className={`flex items-center gap-1 text-xs mt-1.5 transition-colors
                      ${reply.liked ? "text-cyan-400" : "text-slate-600 hover:text-slate-400"}`}
                  >
                    <svg
                      className="w-3 h-3"
                      fill={reply.liked ? "currentColor" : "none"}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    {reply.likes}
                  </button>
                </div>
              </div>
            ))}

            <ReplyComposer onReply={(content) => onReply(thread.id, content)} />
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Filter Tabs ──────────────────────────────────────────────────────────────

function FilterTabs({
  active,
  onChange,
  counts,
}: {
  active: FilterTab;
  onChange: (tab: FilterTab) => void;
  counts: Record<FilterTab, number>;
}) {
  const tabs: FilterTab[] = ["All", "Pinned", "My Posts", "Unanswered"];

  return (
    <div className="flex gap-1 bg-[#0D1629] border border-slate-800 rounded-2xl p-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl text-xs font-medium transition-all duration-150
            ${
              active === tab
                ? `bg-gradient-to-r ${GRAD_COLOR} text-white`
                : "text-slate-500 hover:text-slate-300"
            }`}
        >
          {tab}
          {counts[tab] > 0 && active !== tab && (
            <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded-md">
              {counts[tab]}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────

function StatsBar({ threads }: { threads: Thread[] }) {
  const totalReplies = threads.reduce((sum, t) => sum + t.replies.length, 0);
  const unanswered = threads.filter(
    (t) => t.replies.length === 0 && !t.pinned,
  ).length;

  const stats = [
    { label: "Threads", value: threads.length },
    { label: "Replies", value: totalReplies },
    { label: "Unanswered", value: unanswered },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {stats.map(({ label, value }) => (
        <div
          key={label}
          className="bg-[#0D1629] border border-slate-800 rounded-2xl px-4 py-3 text-center"
        >
          <p className="text-lg font-bold text-white">{value}</p>
          <p className="text-xs text-slate-500">{label}</p>
        </div>
      ))}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CourseDiscussion() {
  const router = useRouter();
  const params = useParams();
  const courseId = params?.courseId;

  const [enrolStatus] = useState<EnrolStatus>("Enrolled");
  const [threads, setThreads] = useState<Thread[]>(MOCK_THREADS);
  const [activeFilter, setActiveFilter] = useState<FilterTab>("All");
  const [search, setSearch] = useState("");

  // ── Derived state ──

  const filterCounts: Record<FilterTab, number> = {
    All: threads.filter((t) => !t.pinned).length,
    Pinned: threads.filter((t) => t.pinned).length,
    "My Posts": threads.filter((t) => t.author === CURRENT_USER.name).length,
    Unanswered: threads.filter((t) => t.replies.length === 0 && !t.pinned)
      .length,
  };

  const visibleThreads = threads
    .filter((t) => {
      if (activeFilter === "Pinned") return t.pinned;
      if (activeFilter === "My Posts") return t.author === CURRENT_USER.name;
      if (activeFilter === "Unanswered")
        return t.replies.length === 0 && !t.pinned;
      return true; // "All"
    })
    .filter((t) => {
      if (!search.trim()) return true;
      const q = search.toLowerCase();
      return (
        t.title.toLowerCase().includes(q) ||
        t.content.toLowerCase().includes(q) ||
        t.author.toLowerCase().includes(q)
      );
    });

  // Pinned threads always surface first in "All"
  const sortedThreads =
    activeFilter === "All"
      ? [...visibleThreads].sort((a, b) => Number(b.pinned) - Number(a.pinned))
      : visibleThreads;

  // ── Handlers ──

  function handleNewPost(title: string, content: string) {
    const newThread: Thread = {
      id: Date.now(),
      lessonId: null,
      lessonTitle: null,
      title,
      author: CURRENT_USER.name,
      authorRole: "student",
      avatar: CURRENT_USER.avatar,
      content,
      timestamp: "Just now",
      likes: 0,
      liked: false,
      pinned: false,
      tags: [],
      replies: [],
    };
    setThreads((prev) => [newThread, ...prev]);
  }

  function handleLikeThread(threadId: number) {
    setThreads((prev) =>
      prev.map((t) =>
        t.id === threadId
          ? {
              ...t,
              liked: !t.liked,
              likes: t.liked ? t.likes - 1 : t.likes + 1,
            }
          : t,
      ),
    );
  }

  function handleLikeReply(threadId: number, replyId: number) {
    setThreads((prev) =>
      prev.map((t) =>
        t.id === threadId
          ? {
              ...t,
              replies: t.replies.map((r) =>
                r.id === replyId
                  ? {
                      ...r,
                      liked: !r.liked,
                      likes: r.liked ? r.likes - 1 : r.likes + 1,
                    }
                  : r,
              ),
            }
          : t,
      ),
    );
  }

  function handleReply(threadId: number, content: string) {
    const newReply: Reply = {
      id: Date.now(),
      author: CURRENT_USER.name,
      authorRole: "student",
      avatar: CURRENT_USER.avatar,
      content,
      timestamp: "Just now",
      likes: 0,
      liked: false,
    };
    setThreads((prev) =>
      prev.map((t) =>
        t.id === threadId ? { ...t, replies: [...t.replies, newReply] } : t,
      ),
    );
  }

  return (
    <div className="min-h-screen bg-[#080F1E] flex pt-20">
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 w-full">
          {/* Back link */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors mb-4"
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
            Back to Classroom
          </button>

          <StudentHeader
            title="Discussion"
            subtitle={COURSE_TITLE}
            enrolStatus={enrolStatus}
          />

          {/* Stats */}
          <div className="mt-4 mb-5">
            <StatsBar threads={threads} />
          </div>

          {/* Composer */}
          <div className="mb-5">
            <ThreadComposer onPost={handleNewPost} />
          </div>

          {/* Search */}
          <div className="relative mb-4">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search threads…"
              className="w-full bg-[#0D1629] border border-slate-800 rounded-2xl pl-10 pr-4 py-2.5
                text-sm text-white placeholder-slate-600 outline-none
                focus:border-cyan-500/40 transition-colors"
            />
          </div>

          {/* Filter tabs */}
          <div className="mb-5">
            <FilterTabs
              active={activeFilter}
              onChange={setActiveFilter}
              counts={filterCounts}
            />
          </div>

          {/* Thread list */}
          <div className="space-y-3">
            {sortedThreads.length === 0 ? (
              <div className="text-center py-16 text-slate-600">
                <p className="text-sm">No threads match this filter.</p>
                <p className="text-xs mt-1">Be the first to post something.</p>
              </div>
            ) : (
              sortedThreads.map((thread) => (
                <ThreadCard
                  key={thread.id}
                  thread={thread}
                  onLikeThread={handleLikeThread}
                  onLikeReply={handleLikeReply}
                  onReply={handleReply}
                />
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
