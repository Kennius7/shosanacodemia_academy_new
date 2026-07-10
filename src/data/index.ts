import {
  Course,
  Benefit,
  Testimonial,
  Partner,
  CourseType,
  SidebarItem,
  Plan,
  SavedCard,
  Invoice,
  StudentDataType,
  MockCourse,
  PricingDataType,
} from "@/types";
import { BookOpenText } from "lucide-react";
import {
  Flame,
  Award,
  Zap,
  CheckCircle,
  LayoutDashboard,
  BookOpen,
  BarChart2,
  GraduationCap,
  Settings,
  File,
  DollarSign,
} from "lucide-react";

export const WEEKLY_ACTIVITY = [40, 75, 55, 90, 30, 65, 80]; // % heights

const INTRO_TO_COMP_SCIENCE = {
  id: "ITCS01",
  name: "Intro to Computer Science",
  slug: "intro_to_comp_science",
  desc: "The study of computers and computational systems.",
  hours: "9hrs",
};

const HTML5_AND_CSS3 = {
  id: "HTML01",
  name: "HTML5 And CSS3",
  slug: "html_and_css",
  desc: "HTML (HyperText Markup Language) is the foundational markup language and CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of HTML documents.",
  hours: "14hrs",
};

const GIT_AND_GITHUB = {
  id: "GITH01",
  name: "Git And Github",
  slug: "git_and_github",
  desc: "Git, A free, open-source, distributed version control system, and Github, a cloud-based hosting service for Git repositories.",
  hours: "14hrs",
};

const TAILWINDCSS = {
  id: "TAIL01",
  name: "Tailwind CSS",
  slug: "tailwindcss",
  desc: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs.",
  hours: "10hrs",
};

const JAVASCRIPT = {
  id: "JAVA01",
  name: "Javascript",
  slug: "javascript",
  desc: "JavaScript is a high-level, interpreted, multi-paradigm programming language that enables interactive and dynamic web experiences.",
  hours: "20hrs",
};

const TYPESCRIPT = {
  id: "TYPE01",
  name: "Typescript",
  slug: "typescript",
  desc: "TypeScript is a strongly typed superset of JavaScript developed and maintained by Microsoft.",
  hours: "12hrs",
};

const REACT = {
  id: "REACT01",
  name: "React.js",
  slug: "reactjs",
  desc: "React is a powerful, declarative JavaScript library developed by Meta (formerly Facebook) for building fast, scalable, and interactive user interfaces.",
  hours: "20hrs",
};

const REACT_NATIVE = {
  id: "RNAT01",
  name: "React Native",
  slug: "react_native",
  desc: "React Native is a powerful, declarative JavaScript library for building fast, scalable, and interactive mobile apps.",
  hours: "20hrs",
};

const NEXT = {
  id: "NEXT01",
  name: "Next.js",
  slug: "nextjs",
  desc: "Next.js is a powerful React framework that extends React with features like server-side rendering, static site generation, API routes, file-system routing, and optimized bundling.",
  hours: "20hrs",
};

const NODE_AND_EXPRESS = {
  id: "NOEX01",
  name: "Node.js And Express.js",
  slug: "node_and_express",
  desc: "Node.js is a powerful, open-source, cross-platform JavaScript runtime environment built on Chrome's high-performance V8 engine. Express.js is the most popular, minimalist, and flexible web framework for Node.js.",
  hours: "20hrs",
};

const NEST = {
  id: "NEST01",
  name: "Nest.js",
  slug: "nestjs",
  desc: "Nest.js is a progressive, TypeScript-first Node.js framework for building efficient, scalable, and maintainable server-side applications.",
  hours: "20hrs",
};

const DEVOPS = {
  id: "DEVS01",
  name: "DevOps",
  slug: "devops",
  desc: "DevOps is a cultural and technical movement that bridges Development and Operations teams to deliver software faster, more reliably, and with higher quality.",
  hours: "20hrs",
};
const CI_CD = {
  id: "CICD01",
  name: "CI/CD",
  slug: "ci_cd",
  desc: "Continuous Integration (CI) and Continuous Delivery/Deployment (CD) are practices that automate the software delivery process.",
  hours: "20hrs",
};
const TERRAFORM = {
  id: "TERA01",
  name: "Terraform",
  slug: "terraform",
  desc: "Terraform is an open-source Infrastructure as Code (IaC) tool created by HashiCorp that allows you to define and provision infrastructure using a declarative configuration language called HashiCorp Configuration Language (HCL).",
  hours: "20hrs",
};

export const STUDENT_MENU_ITEMS: SidebarItem[] = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/student" },
  { name: "Class", icon: BookOpen, href: "/student/class" },
  // { name: "Book Live Meet", icon: CloudLightning, href: "/student/live-meet" },
  { name: "Resources $ Docs", icon: File, href: "/student/resources" },
  // { name: "Community", icon: Users, href: "/student/community" },
  { name: "Payments", icon: DollarSign, href: "/student/payments" },
  // { name: "Progress", icon: BarChart2, href: "/student/progress" },
  // { name: "Certificates", icon: Award, href: "/student/certificates" },
  // { name: "Explore", icon: GraduationCap, href: "/student/explore" },
  {
    name: "Settings",
    icon: Settings,
    href: "/student/settings",
    // submenu: [
    //   {
    //     name: "Profile",
    //     icon: LayoutDashboard,
    //     href: "/student/settings/profile",
    //   },
    //   {
    //     name: "Notifications",
    //     icon: LayoutDashboard,
    //     href: "/student/settings/notifications",
    //   },
    //   {
    //     name: "Billing",
    //     icon: LayoutDashboard,
    //     href: "/student/settings/billing",
    //   },
    // ],
  },
];

export const ADMIN_MENU_ITEMS: SidebarItem[] = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/admin" },
  { name: "Students", icon: GraduationCap, href: "/admin/students" },
  { name: "Courses", icon: BookOpen, href: "/admin/courses" },
  { name: "Enrolment Access", icon: LayoutDashboard, href: "/admin/enrol" },
  { name: "Resource Editor", icon: BookOpenText, href: "/admin/resources" },
  // { name: "Comms/Community", icon: LayoutDashboard, href: "/admin/comms" },
  { name: "Payments", icon: DollarSign, href: "/admin/payments" },
  { name: "Reports", icon: BarChart2, href: "/admin/reports" },
  {
    name: "Settings",
    icon: Settings,
    href: "/admin/settings",
    // submenu: [
    //   {
    //     name: "General",
    //     icon: LayoutDashboard,
    //     href: "/admin/settings/general",
    //   },
    //   {
    //     name: "Permissions",
    //     icon: LayoutDashboard,
    //     href: "/admin/settings/permissions",
    //   },
    //   {
    //     name: "White Label",
    //     icon: LayoutDashboard,
    //     href: "/admin/settings/white-label",
    //   },
    // ],
  },
];

// export const courses: Course[] = [
//   {
//     id: "1",
//     name: "React Mastery",
//     duration: "6 weeks",
//     description:
//       "Build modern UIs with React 18+, hooks, context, and the latest patterns used at top companies.",
//     icon: "⚛️",
//   },
//   {
//     id: "2",
//     name: "Node.js & APIs",
//     duration: "5 weeks",
//     description:
//       "Design and deploy RESTful and GraphQL APIs with Node.js, Express, and serverless functions.",
//     icon: "🚀",
//   },
//   {
//     id: "3",
//     name: "TypeScript Deep Dive",
//     duration: "4 weeks",
//     description:
//       "Master type safety, generics, decorators, and advanced patterns in large-scale TypeScript projects.",
//     icon: "🔷",
//   },
//   {
//     id: "4",
//     name: "Next.js Full-Stack",
//     duration: "7 weeks",
//     description:
//       "Full-stack development with Next.js 14, App Router, server actions, and edge deployments.",
//     icon: "▲",
//   },
//   {
//     id: "5",
//     name: "Database Engineering",
//     duration: "5 weeks",
//     description:
//       "PostgreSQL, Firestore, and Redis — schema design, query optimization, and real-time data pipelines.",
//     icon: "🗄️",
//   },
//   {
//     id: "6",
//     name: "DevOps & CI/CD",
//     duration: "4 weeks",
//     description:
//       "Docker, GitHub Actions, Vercel, and cloud deployment workflows for production-grade applications.",
//     icon: "⚙️",
//   },
//   {
//     id: "7",
//     name: "System Design",
//     duration: "6 weeks",
//     description:
//       "Architecture patterns, scalability, microservices, and how to design systems that handle millions of users.",
//     icon: "🏗️",
//   },
//   {
//     id: "8",
//     name: "Mobile with React Native",
//     duration: "6 weeks",
//     description:
//       "Cross-platform iOS and Android apps using React Native, Expo, and native device APIs.",
//     icon: "📱",
//   },
// ];

export const Courses: Course[] = [
  {
    id: "1",
    name: "Front End Web Development",
    duration: "14 weeks",
    description:
      "Build modern UIs with React 18+, hooks, context, and the latest patterns used at top companies.",
    icon: "⚛️",
    track: [
      INTRO_TO_COMP_SCIENCE,
      HTML5_AND_CSS3,
      GIT_AND_GITHUB,
      TAILWINDCSS,
      JAVASCRIPT,
      TYPESCRIPT,
      REACT,
      NEXT,
    ],
    gradColor: "from-violet-500 to-blue-600",
    color: "text-violet-400",
    rawGradColor1: "#804BE9",
    rawGradColor2: "#1855E6",
  },
  {
    id: "2",
    name: "Back End Engineering",
    duration: "15 weeks",
    description:
      "Design and deploy RESTful and GraphQL APIs with Node.js, Express, and serverless functions.",
    icon: "🚀",
    track: [
      INTRO_TO_COMP_SCIENCE,
      HTML5_AND_CSS3,
      GIT_AND_GITHUB,
      TAILWINDCSS,
      JAVASCRIPT,
      TYPESCRIPT,
      NODE_AND_EXPRESS,
      NEST,
      // "GraphQL",
      // "Databases",
    ],
    gradColor: "from-yellow-500 to-orange-400",
    color: "text-yellow-400",
    rawGradColor1: "#D9A103",
    rawGradColor2: "#E77D06",
  },
  {
    id: "3",
    name: "Full Stack Engineering",
    duration: "16 weeks",
    description: "Master end to end software development.",
    icon: "🔷",
    track: [
      INTRO_TO_COMP_SCIENCE,
      HTML5_AND_CSS3,
      GIT_AND_GITHUB,
      TAILWINDCSS,
      JAVASCRIPT,
      TYPESCRIPT,
      REACT,
      NEXT,
      NODE_AND_EXPRESS,
      NEST,
    ],
    gradColor: "from-emerald-500 to-blue-300",
    color: "text-emerald-400",
    rawGradColor1: "#01AB74",
    rawGradColor2: "#1855E6",
  },
  {
    id: "4",
    name: "Mobile App Development",
    duration: "14 weeks",
    description: "Mobile app development with React Native.",
    icon: "▲",
    track: [
      INTRO_TO_COMP_SCIENCE,
      HTML5_AND_CSS3,
      GIT_AND_GITHUB,
      TAILWINDCSS,
      JAVASCRIPT,
      TYPESCRIPT,
      REACT,
      REACT_NATIVE,
    ],
    gradColor: "from-cyan-500 to-blue-600",
    color: "text-cyan-400",
    rawGradColor1: "#01A7C8",
    rawGradColor2: "#1855E6",
  },
  {
    id: "6",
    name: "DevOps & CI/CD",
    duration: "14 weeks",
    description:
      "Docker, GitHub Actions, Vercel, and cloud deployment workflows for production-grade applications.",
    icon: "⚙️",
    track: [GIT_AND_GITHUB, DEVOPS, CI_CD, TERRAFORM],
    gradColor: "from-blue-500 to-cyan-600",
    color: "text-cyan-600",
    rawGradColor1: "#1855E6",
    rawGradColor2: "#804BE9",
  },
];

export const benefits: Benefit[] = [
  {
    id: "1",
    title: "Live Mentorship",
    description:
      "Weekly 1-on-1 sessions with senior engineers from top tech companies. Get real feedback, not just video lectures.",
    icon: "🎯",
  },
  {
    id: "2",
    title: "Project-Based Learning",
    description:
      "Every module ends with a real-world project. Graduate with a portfolio that gets you hired, not just a certificate.",
    icon: "🛠️",
  },
  {
    id: "3",
    title: "Career Support",
    description:
      "Resume reviews, mock interviews, and direct introductions to our hiring partner network. We don't stop at graduation.",
    icon: "🚀",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Amara Okonkwo",
    role: "Frontend Engineer @ Flutterwave",
    text: "Shosanacodemia completely transformed my career. The project-based curriculum and mentors pushed me further than I thought possible. I landed my dream role six weeks after graduating.",
    rating: 5,
    avatar: "AO",
  },
  {
    id: "2",
    name: "Chidi Eze",
    role: "Full-Stack Developer @ Andela",
    text: "The quality of instruction here is unlike anything I've seen in other bootcamps. Real engineers teaching real problems. My salary tripled in under a year.",
    rating: 5,
    avatar: "CE",
  },
  {
    id: "3",
    name: "Ngozi Adeyemi",
    role: "Backend Engineer @ Paystack",
    text: "I was skeptical at first — I'd tried two other bootcamps. But the mentorship model here is genuinely different. You're not just watching videos; you're building things that matter.",
    rating: 5,
    avatar: "NA",
  },
  {
    id: "4",
    name: "Emeka Nwosu",
    role: "DevOps Engineer @ Microsoft",
    text: "The system design and DevOps modules alone were worth every naira. I came in as a junior dev and left ready for a senior role. The career support team is phenomenal.",
    rating: 5,
    avatar: "EN",
  },
];

export const partners: Partner[] = [
  { id: "1", name: "Flutterwave", color: "#FF6B00" },
  { id: "2", name: "Paystack", color: "#00C3F7" },
  { id: "3", name: "Andela", color: "#4A154B" },
  { id: "4", name: "Interswitch", color: "#E31837" },
  { id: "5", name: "Kuda Bank", color: "#40196B" },
  { id: "6", name: "Moniepoint", color: "#0066CC" },
];

export const COURSES: CourseType[] = [
  {
    slug: "low-level-systems-rust",
    code: "SYSTEMS-01",
    title: "Low-Level Systems in Rust",
    tagline: "Memory, concurrency, and zero-cost abstractions.",
    description:
      "A no-nonsense descent into the runtime model behind safe systems code. You will write allocators, reason about lifetimes against real benchmarks, and ship a concurrent worker pool from primitives.",
    level: "Intermediate",
    track: "Systems",
    hours: "12.5",
    price: 149,
    instructor: "Ada Okafor",
    instructorTitle: "Principal Systems Engineer, formerly Cloudflare",
    outcomes: [
      "Reason about ownership, borrowing, and lifetimes under pressure",
      "Implement Arc, Mutex, and channels from first principles",
      "Profile and eliminate allocation hotspots with flamegraphs",
      "Ship a concurrent worker pool with backpressure",
    ],
    modules: [
      {
        id: "m1",
        title: "01. Introduction",
        lessons: [
          { id: "l1", title: "What this course assumes", duration: "8m" },
          { id: "l2", title: "Setting up the toolchain", duration: "14m" },
        ],
      },
      {
        id: "m2",
        title: "02. Memory Safety",
        lessons: [
          { id: "l3", title: "The stack, the heap, and you", duration: "22m" },
          { id: "l4", title: "Lifetimes in practice", duration: "31m" },
        ],
      },
      {
        id: "m3",
        title: "03. Borrow Checker",
        lessons: [
          {
            id: "l5",
            title: "Why the borrow checker rejects this",
            duration: "26m",
          },
          { id: "l6", title: "Interior mutability patterns", duration: "29m" },
        ],
      },
      {
        id: "m4",
        title: "04. Smart Pointers",
        lessons: [
          { id: "l7", title: "Box, Rc, Arc", duration: "24m" },
          {
            id: "l8",
            title: "Building a concurrent worker pool",
            duration: "48m",
          },
        ],
      },
    ],
  },
  {
    slug: "distributed-microservices",
    code: "ARCH-04",
    title: "Distributed Microservices",
    tagline: "Scalable systems in Go, gRPC, and event-driven patterns.",
    description:
      "Move past the tutorial-shaped monolith. Design service boundaries, handle partial failure, and reason about consistency in real production topologies.",
    level: "Advanced",
    track: "Backend",
    hours: "18.2",
    price: 199,
    instructor: "Marcus Lin",
    instructorTitle: "Staff Engineer, distributed systems",
    outcomes: [
      "Design service boundaries that survive contact with reality",
      "Implement gRPC with streaming and proper deadline propagation",
      "Apply the saga and outbox patterns to event-driven flows",
      "Operate services with tracing, SLOs, and graceful degradation",
    ],
    modules: [
      {
        id: "m1",
        title: "01. Service Boundaries",
        lessons: [
          {
            id: "l1",
            title: "Why your microservices are a distributed monolith",
            duration: "18m",
          },
          { id: "l2", title: "Decomposition strategies", duration: "27m" },
        ],
      },
      {
        id: "m2",
        title: "02. gRPC in Production",
        lessons: [
          { id: "l3", title: "Schema-first APIs", duration: "22m" },
          { id: "l4", title: "Streaming and deadlines", duration: "34m" },
        ],
      },
      {
        id: "m3",
        title: "03. Event-Driven Patterns",
        lessons: [
          {
            id: "l5",
            title: "Saga, outbox, idempotency keys",
            duration: "41m",
          },
        ],
      },
    ],
  },
  {
    slug: "performance-layer",
    code: "FRONT-09",
    title: "The Performance Layer",
    tagline: "Hydration, islands, and edge rendering.",
    description:
      "A senior frontend curriculum focused on the parts most developers ship without measuring: hydration cost, bundle composition, and rendering boundaries.",
    level: "Expert",
    track: "Frontend",
    hours: "9.5",
    price: 129,
    instructor: "Priya Raman",
    instructorTitle: "Performance lead, ex-Vercel",
    outcomes: [
      "Measure and reduce hydration cost with precision",
      "Use island architecture without re-introducing waterfalls",
      "Move work to the edge without breaking interactivity",
    ],
    modules: [
      {
        id: "m1",
        title: "01. Measuring Before Optimizing",
        lessons: [
          {
            id: "l1",
            title: "What the waterfall actually says",
            duration: "16m",
          },
          { id: "l2", title: "Long tasks, INP, and you", duration: "21m" },
        ],
      },
      {
        id: "m2",
        title: "02. Islands and Streaming",
        lessons: [
          {
            id: "l3",
            title: "Selective hydration in practice",
            duration: "28m",
          },
        ],
      },
    ],
  },
  {
    slug: "infrastructure-as-code",
    code: "OPS-02",
    title: "Infrastructure as Code",
    tagline: "Declarative cloud with Terraform and Kubernetes.",
    description:
      "Treat infrastructure as a typed, reviewed, version-controlled artifact. Model real environments without copy-paste sprawl.",
    level: "Intermediate",
    track: "DevOps",
    hours: "11.0",
    price: 139,
    instructor: "Kenji Watanabe",
    instructorTitle: "Platform engineering lead",
    outcomes: [
      "Model environments with composable Terraform modules",
      "Write Kubernetes manifests that survive a real outage",
      "Set up sane CI/CD with promotion gates",
    ],
    modules: [
      {
        id: "m1",
        title: "01. Terraform Foundations",
        lessons: [
          {
            id: "l1",
            title: "State, plans, and the trust boundary",
            duration: "19m",
          },
        ],
      },
      {
        id: "m2",
        title: "02. Kubernetes That Doesn't Page You",
        lessons: [
          { id: "l2", title: "Probes, requests, limits", duration: "24m" },
        ],
      },
    ],
  },
  {
    slug: "distributed-databases",
    code: "DATA-07",
    title: "Distributed Databases",
    tagline: "CAP, Raft, and scaling Postgres past the limit.",
    description:
      "Understand the algorithms behind the databases you operate. Build intuition for consistency, partitioning, and replication tradeoffs.",
    level: "Expert",
    track: "Backend",
    hours: "14.4",
    price: 199,
    instructor: "Sofía Ramírez",
    instructorTitle: "Database internals, ex-Cockroach",
    outcomes: [
      "Reason about CAP and PACELC without hand-waving",
      "Walk through Raft step by step",
      "Choose partitioning strategies for real workloads",
    ],
    modules: [
      {
        id: "m1",
        title: "01. Consistency Models",
        lessons: [
          {
            id: "l1",
            title: "Linearizable, serializable, snapshot",
            duration: "30m",
          },
        ],
      },
    ],
  },
  {
    slug: "fullstack-foundations",
    code: "FULL-01",
    title: "Fullstack Foundations",
    tagline: "Typed end-to-end, edge-ready, no magic.",
    description:
      "A focused fullstack curriculum for developers who want to ship typed APIs, server-rendered UIs, and durable data — without learning ten frameworks first.",
    level: "Foundational",
    track: "Fullstack",
    hours: "16.0",
    price: 119,
    instructor: "Daniel Cho",
    instructorTitle: "Independent engineer",
    outcomes: [
      "Build typed APIs with end-to-end safety",
      "Model schemas, migrations, and access boundaries",
      "Ship server-rendered UIs that stay fast",
    ],
    modules: [
      {
        id: "m1",
        title: "01. The Stack From Scratch",
        lessons: [
          { id: "l1", title: "Why we choose what we choose", duration: "12m" },
        ],
      },
    ],
  },
];

// export const TRACKS: {
//   name: Track;
//   description: string;
//   courseCount: number;
// }[] = [
//   {
//     name: "Frontend",
//     description: "Rendering, performance, accessibility.",
//     courseCount: 1,
//   },
//   {
//     name: "Backend",
//     description: "Services, data, distributed systems.",
//     courseCount: 2,
//   },
//   {
//     name: "Fullstack",
//     description: "Typed end-to-end product engineering.",
//     courseCount: 1,
//   },
//   {
//     name: "DevOps",
//     description: "Infrastructure, deploys, reliability.",
//     courseCount: 1,
//   },
//   {
//     name: "Systems",
//     description: "Memory, concurrency, low-level craft.",
//     courseCount: 1,
//   },
// ];

export const CONTINUE_COURSES = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    module: "Module 6 · CSS Grid & Flexbox",
    progress: 68,
    thumbnail: "WD",
    color: "from-cyan-500 to-blue-600",
    duration: "14 min left",
    tag: "In Progress",
  },
  {
    id: 2,
    title: "Data Science & ML",
    module: "Module 3 · Pandas DataFrames",
    progress: 31,
    thumbnail: "DS",
    color: "from-violet-500 to-purple-600",
    duration: "32 min left",
    tag: "In Progress",
  },
];

export const ENROLLED_COURSES = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    instructor: "Sarah Chen",
    progress: 68,
    modules: 12,
    completed: 8,
    color: "from-cyan-500 to-blue-600",
    tag: "WD",
  },
  {
    id: 2,
    title: "Data Science & ML",
    instructor: "Dr. James Okafor",
    progress: 31,
    modules: 18,
    completed: 6,
    color: "from-violet-500 to-purple-600",
    tag: "DS",
  },
  {
    id: 3,
    title: "UI/UX Design",
    instructor: "Mia Torres",
    progress: 85,
    modules: 10,
    completed: 9,
    color: "from-pink-500 to-rose-600",
    tag: "UX",
  },
  {
    id: 4,
    title: "Cloud & DevOps",
    instructor: "Raj Patel",
    progress: 12,
    modules: 14,
    completed: 2,
    color: "from-orange-400 to-amber-500",
    tag: "CD",
  },
];

export const RECOMMENDED = [
  {
    id: 5,
    title: "Cybersecurity Essentials",
    instructor: "Lena Fischer",
    rating: 4.9,
    students: 8200,
    color: "from-emerald-500 to-teal-600",
    tag: "CS",
    reason: "Matches your DevOps interest",
  },
  {
    id: 6,
    title: "Mobile Development",
    instructor: "Kevin Wu",
    rating: 4.7,
    students: 5400,
    color: "from-sky-500 to-indigo-600",
    tag: "MD",
    reason: "Popular with Web Dev students",
  },
  {
    id: 7,
    title: "GraphQL & REST APIs",
    instructor: "Amara Diallo",
    rating: 4.8,
    students: 3100,
    color: "from-fuchsia-500 to-pink-600",
    tag: "AP",
    reason: "Next step after Web Dev",
  },
];

export const CERTIFICATES = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    issued: "Mar 2025",
    color: "from-cyan-500 to-blue-600",
    tag: "JS",
  },
  {
    id: 2,
    title: "React — The Complete Guide",
    issued: "Jan 2025",
    color: "from-violet-500 to-purple-600",
    tag: "RX",
  },
  {
    id: 3,
    title: "Git & Version Control",
    issued: "Nov 2024",
    color: "from-emerald-500 to-teal-600",
    tag: "GV",
  },
];

export const ACTIVITY = [
  {
    id: 1,
    type: "lesson",
    text: "Completed lesson: CSS Variables",
    time: "2h ago",
    icon: CheckCircle,
    color: "text-cyan-400",
  },
  {
    id: 2,
    type: "xp",
    text: "Earned 120 XP for finishing a quiz",
    time: "5h ago",
    icon: Zap,
    color: "text-yellow-400",
  },
  {
    id: 3,
    type: "streak",
    text: "12-day streak — keep it up!",
    time: "1d ago",
    icon: Flame,
    color: "text-orange-400",
  },
  {
    id: 4,
    type: "cert",
    text: "Certificate unlocked: JavaScript Fundamentals",
    time: "3d ago",
    icon: Award,
    color: "text-violet-400",
  },
  {
    id: 5,
    type: "enrolled",
    text: "Enrolled in Cloud & DevOps",
    time: "5d ago",
    icon: BookOpen,
    color: "text-emerald-400",
  },
  {
    id: 6,
    type: "lesson",
    text: "Completed lesson: Flexbox Deep Dive",
    time: "6d ago",
    icon: CheckCircle,
    color: "text-cyan-400",
  },
];

export const HTML_CSS_COURSE_OUTLINE = [
  {
    id: "HTML001",
    topic: "Introduction to the Web, HTML, and CSS",
    notes: [
      {
        id: "001",
        title: "What is the Web?",
        content:
          "The World Wide Web (WWW) is a vast, interconnected system of documents and resources linked by hyperlinks and accessed via the Internet. Invented by Tim Berners-Lee in 1989 at CERN, it operates on a client-server model where browsers (clients) request resources from web servers using protocols like HTTP/HTTPS. It powers modern digital life, enabling everything from information sharing to e-commerce and social interaction.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "What is HTML?",
        content:
          "HTML (HyperText Markup Language) is the foundational markup language for creating and structuring web pages. It uses a system of tags and attributes to define elements such as headings, paragraphs, images, links, and forms. HTML5, the current standard, introduces powerful semantic elements, native multimedia support, and APIs for dynamic web applications.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "What is CSS?",
        content:
          "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of HTML documents. It controls layout, colors, typography, spacing, animations, and responsive behavior. The 'cascading' nature means styles can inherit and override each other based on specificity, source order, and importance, giving developers precise control over design.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "How HTML and CSS Work Together",
        content:
          "HTML provides the semantic structure and content of a webpage (the 'what'), while CSS handles the visual presentation and layout (the 'how'). Browsers parse HTML to build the Document Object Model (DOM) and apply CSS rules to render styled content. This separation of concerns enables maintainable, accessible, and responsive websites that adapt across devices.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "HTML002",
    topic: "Setting Up the Development Environment",
    notes: [
      {
        id: "001",
        title: "Code Editors",
        content:
          "A good code editor accelerates development. Visual Studio Code (VS Code) is the most popular choice due to its extensive extensions (e.g., Live Server, Prettier, ESLint), IntelliSense, Git integration, and debugging tools. Other options include Sublime Text for speed, WebStorm for powerful JavaScript/TypeScript support, and Vim/Neovim for keyboard-centric workflows.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Browser Developer Tools",
        content:
          "Every modern browser includes powerful DevTools (accessed via F12 or right-click → Inspect). Use them to inspect and modify HTML/CSS in real-time, debug JavaScript, monitor network requests, analyze performance, check accessibility issues, and emulate mobile devices. Mastering Elements, Console, Network, and Application tabs is essential for efficient debugging.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Project Structure",
        content:
          "A well-organized project structure improves scalability and collaboration. Typical folders include: `index.html` (entry point), `css/` for stylesheets, `js/` for scripts, `images/` or `assets/` for media, and `components/` for reusable parts. Use tools like Live Server extension to serve files locally with automatic reloads.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "HTML003",
    topic: "HTML Document Structure",
    notes: [
      {
        id: "001",
        title: "Basic HTML Template",
        content:
          "A minimal valid HTML5 document starts with `<!DOCTYPE html>` followed by `<html lang='en'>`, `<head>`, and `<body>`. The DOCTYPE tells browsers to use standards mode. Always include `<meta charset='UTF-8'>` and `<meta name='viewport' content='width=device-width, initial-scale=1.0'>` for proper character encoding and mobile responsiveness.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Head Section",
        content:
          "The `<head>` element contains non-visible metadata: `<title>` for the browser tab, `<meta>` tags for description/keywords/robots, `<link>` for external CSS, favicon, and fonts, and `<script>` for early-loading JavaScript. It also supports Open Graph and Twitter Card meta tags for rich social sharing.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Body Section",
        content:
          "The `<body>` holds all visible content. It should follow semantic HTML principles and remain as clean as possible. Content flows top-to-bottom by default; CSS and modern layout techniques (Flexbox/Grid) are used to control positioning and visual hierarchy.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "HTML004",
    topic: "HTML Elements and Tags",
    notes: [
      {
        id: "001",
        title: "Opening and Closing Tags",
        content:
          "Most HTML elements are container tags with an opening tag (`<p>`) and closing tag (`</p>`). Everything between them is the element's content. Proper nesting and closing is crucial for valid HTML and correct rendering by browsers.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Self-Closing Elements",
        content:
          "Void/self-closing elements like `<img>`, `<br>`, `<hr>`, `<input>`, `<meta>`, and `<link>` do not wrap content and traditionally do not need a closing tag (though XHTML-style self-closing syntax `<img/>` is allowed). They are used for embedding resources or inserting breaks.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Element Nesting",
        content:
          "Elements can be nested to build complex hierarchies (e.g., lists inside articles). Follow the rule: first opened, last closed. Improper nesting can break layouts or cause accessibility issues. Tools like the W3C Markup Validator help ensure correctness.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "HTML005",
    topic: "Text Formatting and Content Elements",
    notes: [
      {
        id: "001",
        title: "Headings",
        content:
          "Headings (`<h1>` to `<h6>`) establish document hierarchy and are critical for SEO and screen readers. Use only one `<h1>` per page. Headings should reflect content structure, not just visual size—CSS can adjust appearance independently.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Paragraphs",
        content:
          "The `<p>` element defines paragraphs of text. Browsers automatically add spacing. Use `<br>` sparingly for line breaks within paragraphs (e.g., poetry). Semantic alternatives like `<blockquote>` exist for special text blocks.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Text Formatting",
        content:
          "Semantic formatting tags include `<strong>` (bold/importance), `<em>` (emphasis/italics), `<mark>` (highlight), `<small>` (fine print), `<del>` (deleted text), and `<ins>` (inserted text). Avoid purely presentational tags like `<b>` or `<i>` unless semantics are not needed.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "HTML006",
    topic: "Lists and Navigation",
    notes: [
      {
        id: "001",
        title: "Ordered Lists",
        content:
          "Use `<ol>` with `<li>` items for numbered sequences (e.g., instructions, rankings). Attributes like `type` and `start` control numbering style. Great for step-by-step guides or legal numbering.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Unordered Lists",
        content:
          "Use `<ul>` with `<li>` items for bullet-point lists (e.g., features, menus). Customize bullets with CSS `list-style-type` (none, circle, square, etc.). Ideal for navigation, feature lists, and grouping related items.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Navigation Menus",
        content:
          "Navigation is commonly built with `<nav>` containing a `<ul>` of `<a>` links. This semantic approach improves accessibility and SEO. Combine with Flexbox or CSS Grid for horizontal/vertical layouts and responsive mobile menus.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "HTML007",
    topic: "Links and Hyperlinks",
    notes: [
      {
        id: "001",
        title: "Anchor Element",
        content:
          "The `<a>` (anchor) tag creates hyperlinks using the `href` attribute. Links can point to other pages, sections (`#id`), email (`mailto:`), phone (`tel:`), or files. Descriptive, meaningful link text improves usability and SEO.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Relative vs Absolute URLs",
        content:
          "Relative URLs (e.g., `about.html` or `/images/photo.jpg`) are shorter and portable within the same site. Absolute URLs (e.g., `https://example.com/page`) include the full protocol and domain—use for external resources or when linking across domains.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Opening Links",
        content:
          "The `target='_blank'` attribute opens links in a new tab. Always pair it with `rel='noopener noreferrer'` for security. Other attributes include `download` for forcing file downloads and `title` for tooltips.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "HTML008",
    topic: "Images and Multimedia",
    notes: [
      {
        id: "001",
        title: "Adding Images",
        content:
          "The `<img>` element requires `src` (source) and `alt` attributes. Use responsive `srcset` and `sizes` for different screen densities. Modern formats like WebP and AVIF offer better compression than JPEG/PNG.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Accessibility",
        content:
          "Always provide meaningful `alt` text describing the image's purpose or content. For decorative images, use empty `alt=''`. Combine with `figure` and `figcaption` for captions and better semantic grouping.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Audio and Video",
        content:
          "Use native `<audio>` and `<video>` elements with multiple `<source>` formats for broad compatibility. Include controls, autoplay (with muted), loop, and poster attributes. Provide fallback text for unsupported browsers.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "HTML009",
    topic: "HTML Tables",
    notes: [
      {
        id: "001",
        title: "Table Structure",
        content:
          "Tables use `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, and `<td>`. `<caption>` provides a title. Tables remain excellent for tabular data but should not be used for page layout (use CSS Grid/Flexbox instead).",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Table Accessibility",
        content:
          "Use `scope='col'` or `scope='row'` on headers, `headers` attribute for complex tables, and ARIA roles when needed. Proper structure allows screen readers to navigate data meaningfully.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "HTML010",
    topic: "HTML Forms and User Input",
    notes: [
      {
        id: "001",
        title: "Form Element",
        content:
          "The `<form>` element groups inputs and includes `action` (submission URL) and `method` (GET/POST). Use `<fieldset>` and `<legend>` to group related fields semantically.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Input Types",
        content:
          "HTML5 offers rich input types: `text`, `email`, `password`, `number`, `tel`, `url`, `date`, `checkbox`, `radio`, `file`, `range`, `color`, etc. Each provides built-in validation and optimized mobile keyboards.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Validation",
        content:
          "Client-side validation attributes include `required`, `min`, `max`, `minlength`, `maxlength`, `pattern`, and `step`. Use CSS `:valid` and `:invalid` pseudo-classes for visual feedback. Always validate on the server too.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "HTML011",
    topic: "Semantic HTML",
    notes: [
      {
        id: "001",
        title: "Purpose of Semantic Elements",
        content:
          "Semantic HTML uses tags that convey meaning (e.g., `<article>`, `<section>`) rather than just presentation. This improves accessibility for screen readers, SEO, and code maintainability.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Common Semantic Tags",
        content:
          "Key elements: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<figure>`, `<figcaption>`, and `<time>`. They describe content purpose, enabling better machine understanding.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "SEO Benefits",
        content:
          "Search engines like Google reward semantic markup because it helps them understand context, hierarchy, and relevance. Proper semantics also improve rich snippets and voice search compatibility.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "HTML012",
    topic: "Introduction to CSS",
    notes: [
      {
        id: "001",
        title: "What CSS Does",
        content:
          "CSS defines the visual styling layer: colors, fonts, spacing, shadows, borders, animations, and responsive behavior. It enables consistent branding and delightful user experiences across devices.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Ways to Apply CSS",
        content:
          "1. Inline (`style` attribute) — highest specificity, least maintainable. 2. Internal (`<style>` in head). 3. External (`<link>` to .css file) — best for caching and separation of concerns.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "CSS Syntax",
        content:
          "A stylesheet consists of rule sets: `selector { property: value; }`. Comments use `/* */`. Properties are case-insensitive; values depend on the property (colors, lengths, keywords, etc.).",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "HTML013",
    topic: "CSS Selectors",
    notes: [
      {
        id: "001",
        title: "Element Selectors",
        content:
          "Target elements by tag name (e.g., `p`, `h1`, `div`). Simple and low specificity. Best for base styles that apply broadly.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Class Selectors",
        content:
          "Use `.classname` to style multiple elements sharing the same class. Highly reusable and moderate specificity. Follow BEM or similar naming conventions for scalability.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "ID Selectors",
        content:
          "Use `#unique-id` for unique elements. High specificity makes them hard to override—use sparingly and prefer classes for styling.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Advanced Selectors",
        content:
          "Attribute selectors (`[type='text']`), pseudo-classes (`:hover`, `:nth-child()`, `:focus`), pseudo-elements (`::before`, `::after`), descendant (` `), child (`>`), sibling (`~`, `+`), and combinators offer powerful, precise targeting.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "HTML014",
    topic: "Colors, Backgrounds, and Typography",
    notes: [
      {
        id: "001",
        title: "Colors",
        content:
          "Define with keywords (`red`), HEX (`#ff0000`), RGB/RGBA, HSL/HSLA. Use CSS custom properties (`--primary-color: #007bff;`) for theming and easy maintenance. Consider accessibility with tools like WebAIM Contrast Checker.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Backgrounds",
        content:
          "Properties: `background-color`, `background-image`, `background-size` (cover/contain), `background-position`, `background-repeat`, and gradients (`linear-gradient()`, `radial-gradient()`). Multiple backgrounds can be layered.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Typography",
        content:
          "Control with `font-family` (system or web fonts via @import/Google Fonts), `font-size`, `font-weight`, `line-height`, `letter-spacing`, `text-align`, `text-transform`, and `text-shadow`. Use `rem` and `em` for scalable text.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "HTML015",
    topic: "The CSS Box Model",
    notes: [
      {
        id: "001",
        title: "Content Area",
        content:
          "The innermost area where text, images, or other content lives. Its size is determined by width/height properties (content-box sizing by default).",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Padding",
        content:
          "Space between content and border. Controlled via `padding` shorthand or individual sides. Background color extends into padding area.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Border",
        content:
          "Surrounds padding. Use `border-width`, `border-style` (solid, dashed, etc.), `border-color`, and `border-radius` for rounded corners. Individual side control is possible.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Margin",
        content:
          "Outer space around the element, collapsing between vertical siblings. Use `margin: auto` for horizontal centering. Negative margins can pull elements closer.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "HTML016",
    topic: "CSS Positioning",
    notes: [
      {
        id: "001",
        title: "Static Positioning",
        content:
          "Default behavior. Elements flow naturally in the document according to normal flow (block or inline).",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Relative Positioning",
        content:
          "Element stays in normal flow but can be shifted using `top`, `right`, `bottom`, `left`. Creates a positioning context for absolutely positioned children.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Absolute Positioning",
        content:
          "Removes element from normal flow. Positioned relative to nearest positioned ancestor (or viewport). Useful for overlays, tooltips, and modals.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Fixed and Sticky Positioning",
        content:
          "`fixed` anchors to the viewport (great for headers). `sticky` starts in normal flow then becomes fixed when a scroll threshold is met. Both are powerful for persistent UI elements.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "HTML017",
    topic: "Flexbox Layout",
    notes: [
      {
        id: "001",
        title: "Flex Container",
        content:
          "Set `display: flex` on a parent. Child elements become flex items. Enables powerful one-dimensional layouts with minimal markup.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Main and Cross Axis",
        content:
          "Main axis is controlled by `flex-direction` (row/column). Cross axis is perpendicular. `justify-content` aligns along main axis; `align-items` along cross axis.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Alignment",
        content:
          "Properties: `justify-content`, `align-items`, `align-content`, `gap`, `flex-grow`, `flex-shrink`, `flex-basis`, and `order`. Perfect for centering, distributing space, and responsive navigation bars.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Responsive Layouts",
        content:
          "Flexbox shines in responsive design. Use `flex-wrap`, media queries, and percentage/grow values to adapt content beautifully across screen sizes.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "HTML018",
    topic: "CSS Grid Layout",
    notes: [
      {
        id: "001",
        title: "Grid Container",
        content:
          "Set `display: grid` on a parent. Define rows and columns with `grid-template-columns` and `grid-template-rows`. Offers two-dimensional layout control.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Rows and Columns",
        content:
          "Use `fr` unit for flexible fractions, `repeat()` for patterns, `minmax()` for responsive tracks, and `auto` for content-based sizing. Gaps are controlled with `gap` shorthand.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Grid Areas",
        content:
          "Name areas with `grid-template-areas` and place items using `grid-area`. This creates intuitive, magazine-style layouts with named regions.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Responsive Grids",
        content:
          "Combine with media queries, `auto-fit`/`auto-fill`, and `minmax()` to create adaptive multi-column layouts that gracefully reflow on mobile devices.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "HTML019",
    topic: "Responsive Web Design",
    notes: [
      {
        id: "001",
        title: "Mobile-First Design",
        content:
          "Start with mobile styles (default) and progressively enhance for larger screens using `min-width` media queries. This approach ensures performance and simplicity on smaller devices.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Media Queries",
        content:
          "Use `@media (min-width: 768px) { ... }` to apply breakpoint-based styles. Common breakpoints target mobile, tablet, desktop, and large screens. Also support `prefers-color-scheme` and `prefers-reduced-motion`.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Flexible Units",
        content:
          "Use relative units: percentages, `rem`, `em`, `vw`/`vh`, `clamp()`, and `min()`/`max()`. Avoid fixed `px` for typography and containers to ensure scalability.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "HTML020",
    topic: "CSS Transitions and Animations",
    notes: [
      {
        id: "001",
        title: "Transitions",
        content:
          "Apply smooth changes with `transition: property duration timing-function delay;`. Common properties: `all`, `transform`, `opacity`, `color`. Great for hover effects and interactive feedback.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Transforms",
        content:
          "2D/3D functions: `translate()`, `scale()`, `rotate()`, `skew()`, and `perspective()`. Combined with transitions, they create engaging interactions without JavaScript.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Keyframe Animations",
        content:
          "Define complex sequences with `@keyframes` and apply via `animation` shorthand. Control iteration, direction, fill-mode, and timing. Use for loading indicators, entrance animations, and micro-interactions.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "HTML021",
    topic: "Accessibility and Best Practices",
    notes: [
      {
        id: "001",
        title: "Accessibility Principles",
        content:
          "Follow POUR: Perceivable, Operable, Understandable, Robust (WCAG guidelines). Use semantic HTML, sufficient contrast (4.5:1 minimum), focus indicators, and ARIA attributes when necessary.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Keyboard Navigation",
        content:
          "Ensure all interactive elements are reachable via Tab, Enter, and Space. Use `tabindex` sparingly. Test with keyboard only to verify usability for users with motor impairments.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Color Contrast",
        content:
          "Text must have adequate contrast against backgrounds. Use tools like Lighthouse or WAVE to audit. Support dark/light modes via `prefers-color-scheme` media query.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "HTML022",
    topic: "SEO Fundamentals",
    notes: [
      {
        id: "001",
        title: "Metadata",
        content:
          "Optimize `<title>`, meta description, Open Graph tags, and canonical URLs. Include structured data (Schema.org) with JSON-LD for rich results.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Semantic Structure",
        content:
          "Proper heading hierarchy, alt text, semantic elements, and logical reading order help crawlers understand content relevance and context.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Performance",
        content:
          "Core Web Vitals (LCP, FID/INP, CLS) impact rankings. Optimize images, minify CSS/JS, enable compression, and use lazy loading. Faster sites improve user experience and SEO.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "HTML023",
    topic: "Final Project: Building a Complete Website",
    notes: [
      {
        id: "001",
        title: "Planning",
        content:
          "Define goals, target audience, sitemap, wireframes, and content. Choose a design system or style guide. Consider accessibility, performance, and SEO from the start.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Development",
        content:
          "Build with semantic HTML5 and modern CSS (Flexbox/Grid, custom properties, mobile-first). Implement responsive navigation, forms, and interactive elements. Use version control (Git).",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Testing",
        content:
          "Test across browsers and devices. Validate HTML/CSS, check accessibility (Lighthouse/axe), performance, and usability. Gather feedback and iterate.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Deployment",
        content:
          "Host on free platforms like GitHub Pages, Netlify, Vercel, or Cloudflare Pages. Set up custom domains, HTTPS, and performance optimizations. Monitor with analytics tools.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
];

export const JAVASCRIPT_COURSE_OUTLINE = [
  {
    id: "JS001",
    topic: "Introduction to JavaScript",
    notes: [
      {
        id: "001",
        title: "What is JavaScript?",
        content:
          "JavaScript is a high-level, interpreted, multi-paradigm programming language that enables interactive and dynamic web experiences. Originally designed for client-side scripting, it now runs on servers (Node.js), mobile devices (React Native), desktop (Electron), and even embedded systems. It supports imperative, functional, and object-oriented programming styles.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "History of JavaScript",
        content:
          "Created in just 10 days by Brendan Eich at Netscape in 1995. Initially named Mocha, then LiveScript, and finally JavaScript (for marketing reasons, despite no direct relation to Java). Standardized as ECMAScript (ES) by Ecma International. Major modern milestone: ES6/ES2015 introduced transformative features that continue shaping the language today.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "JavaScript Ecosystem",
        content:
          "JavaScript is one of the most versatile languages today. It powers frontend frameworks (React, Vue, Angular), backend runtimes (Node.js, Deno, Bun), mobile apps, desktop applications, IoT, machine learning (TensorFlow.js), and even blockchain/smart contracts. The npm registry contains over 2 million packages, making it the largest software ecosystem.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "How JavaScript Works",
        content:
          "JavaScript code is parsed, compiled just-in-time (JIT), and executed by JavaScript engines like V8 (Chrome/Node.js), SpiderMonkey (Firefox), and JavaScriptCore (Safari). It is single-threaded with an event loop that handles asynchronous operations efficiently, enabling non-blocking I/O despite being interpreted.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "JS002",
    topic: "Setting Up the Development Environment",
    notes: [
      {
        id: "001",
        title: "Code Editors",
        content:
          "Visual Studio Code is the de-facto standard with outstanding JavaScript/TypeScript support via IntelliSense, debugging, Git integration, and extensions like ESLint, Prettier, and Live Server. Alternatives include WebStorm (full-featured IDE), Vim/Neovim, or Cursor for AI-assisted development.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Running JavaScript",
        content:
          "Run code directly in the browser console, create HTML files with `<script>` tags, or use Node.js for server-side execution. Tools like Vite, Parcel, or Create React App provide fast development servers with hot module replacement (HMR) for instant feedback.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Browser Developer Tools",
        content:
          "Master the Console, Sources, Network, Performance, and Application tabs. Use breakpoints, watch expressions, call stack inspection, and console methods (`console.log`, `console.table`, `console.group`) for effective debugging and performance analysis.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "JS003",
    topic: "Variables and Data Types",
    notes: [
      {
        id: "001",
        title: "Variables",
        content:
          "`var` (function-scoped, hoisted), `let` (block-scoped), and `const` (block-scoped, immutable binding). Modern best practice: Prefer `const` by default, use `let` when reassignment is needed, and avoid `var` due to scoping issues and hoisting behavior.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Primitive Data Types",
        content:
          "Immutable primitives: String, Number, Boolean, Undefined, Null, Symbol (for unique identifiers), and BigInt (for arbitrary-precision integers). Understanding primitives vs objects is crucial for avoiding common pitfalls like unexpected mutations.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Reference Data Types",
        content:
          "Mutable complex types: Objects, Arrays, Functions, Dates, Maps, Sets, WeakMap, WeakSet. These are stored by reference, meaning assignment copies the reference, not the value — important for state management and performance.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Type Checking",
        content:
          "Use `typeof` for basic type detection (with known quirks like `typeof null === 'object'`). For deeper checks, use `instanceof`, `Array.isArray()`, or libraries like Lodash. TypeScript offers compile-time type safety for large applications.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "JS004",
    topic: "Operators and Expressions",
    notes: [
      {
        id: "001",
        title: "Arithmetic Operators",
        content:
          "Includes `+`, `-`, `*`, `/`, `%` (remainder), `**` (exponentiation), and increment/decrement (`++`, `--`). Be mindful of operator precedence and type coercion (e.g., `1 + '2' === '12'`).",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Comparison Operators",
        content:
          "Strict equality (`===` / `!==`) compares value and type without coercion — always preferred. Loose equality (`==` / `!=`) performs type coercion and is a common source of bugs.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Logical Operators",
        content:
          "`&&` (AND) returns the first falsy value or the last value. `||` (OR) returns the first truthy value. `!` (NOT) negates. Short-circuit evaluation makes them powerful for default values and conditional execution.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Assignment Operators",
        content:
          "Basic (`=`) and compound operators (`+=`, `-=`, `*=`, `/=`, `%=`, `**=`). Destructuring assignment and the nullish coalescing operator (`??`) are also essential modern tools.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "JS005",
    topic: "Control Flow",
    notes: [
      {
        id: "001",
        title: "Conditional Statements",
        content:
          "`if/else if/else` for most logic. `switch` is useful for multiple discrete cases. The ternary operator (`condition ? trueValue : falseValue`) and nullish coalescing provide concise alternatives.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Loops",
        content:
          "`for` for counted iterations, `while`/`do...while` for condition-based loops, `for...of` for iterable values (arrays, strings, maps), and `for...in` for object keys. Prefer higher-order array methods when possible.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Break and Continue",
        content:
          "`break` exits a loop entirely; `continue` skips the current iteration. Useful in complex loops, but excessive use may indicate a need for better data processing strategies like `filter` or `some`.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "JS006",
    topic: "Functions",
    notes: [
      {
        id: "001",
        title: "Function Declaration",
        content:
          "Hoisted and named functions (`function name() {}`). Reliable for most use cases and support recursion easily.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Function Expressions",
        content:
          "Functions assigned to variables. Can be named or anonymous. Often used with callbacks and higher-order functions.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Arrow Functions",
        content:
          "Concise syntax (`() => {}`) with lexical `this` binding. Ideal for callbacks, array methods, and short functions. Cannot be used as constructors.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Parameters and Return Values",
        content:
          "Default parameters, rest parameters (`...args`), and implicit returns in arrow functions. Functions are first-class citizens — they can be passed, returned, and stored like any other value.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "JS007",
    topic: "Scope and Closures",
    notes: [
      {
        id: "001",
        title: "Global Scope",
        content:
          "Variables declared outside functions. Polluting global scope is discouraged as it can cause naming conflicts and security issues.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Local Scope",
        content:
          "Block scope (`let`/`const`) and function scope. Understanding lexical scoping is fundamental to mastering closures and module patterns.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Closures",
        content:
          "A function bundled with its lexical environment. Enables data privacy, function factories, module pattern, and maintaining state in asynchronous code. One of JavaScript’s most powerful features.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "JS008",
    topic: "Arrays",
    notes: [
      {
        id: "001",
        title: "Creating Arrays",
        content:
          "Use array literals `[]` or `new Array()`. Sparse arrays and mixed data types are possible but should generally be avoided for clarity and performance.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Array Methods",
        content:
          "Mutating: `push`, `pop`, `shift`, `unshift`, `splice`. Non-mutating: `slice`, `concat`, `map`, `filter`, `reduce`. Mastering these is essential for effective data manipulation.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Array Iteration",
        content:
          "Modern methods like `forEach`, `map`, `filter`, `reduce`, `find`, `some`, `every`, and `flat` provide declarative, readable code. Prefer them over traditional loops when transforming or querying data.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "JS009",
    topic: "Objects",
    notes: [
      {
        id: "001",
        title: "Object Basics",
        content:
          "Key-value pairs where keys are strings or symbols. Objects are the foundation of JavaScript — nearly everything (arrays, functions, dates) inherits from Object.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Accessing Properties",
        content:
          "Dot notation (when key is valid identifier) vs bracket notation (dynamic keys or special characters). Use `Object.keys()`, `Object.values()`, and `Object.entries()` for iteration.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Object Methods",
        content:
          "Methods are functions attached to objects. `this` keyword refers to the object context. Arrow functions inside objects do not bind their own `this`.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Destructuring",
        content:
          "Object and array destructuring allows clean extraction of values. Supports default values, rest syntax, and nested destructuring. Extremely useful in function parameters and modern React code.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "JS010",
    topic: "DOM Manipulation",
    notes: [
      {
        id: "001",
        title: "What is the DOM?",
        content:
          "The Document Object Model is a tree-like representation of HTML elements as JavaScript objects. It serves as the bridge between JavaScript and the webpage content and structure.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Selecting Elements",
        content:
          "`document.getElementById()`, `querySelector()`, `querySelectorAll()`, `getElementsByClassName()`, etc. `querySelector` and `querySelectorAll` are most versatile with CSS selector syntax.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Modifying Elements",
        content:
          "Change content with `textContent`/`innerHTML`, styles via `style` property or classList, and attributes with `setAttribute`/`dataset`. Batch DOM updates to avoid performance issues.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Creating Elements",
        content:
          "Use `document.createElement()`, set properties, then append with `appendChild()` or modern `append()`. DocumentFragment helps optimize multiple insertions.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "JS011",
    topic: "Events and Event Handling",
    notes: [
      {
        id: "001",
        title: "Event Listeners",
        content:
          "`addEventListener(event, handler, options)`. Supports event options like `once`, `capture`, and `passive` for performance. Always remove listeners when no longer needed to prevent memory leaks.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Common Events",
        content:
          "Mouse: click, dblclick, mousemove. Keyboard: keydown, keyup. Form: submit, input, change. Window: load, resize, scroll. Media events and custom events are also widely used.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Event Object",
        content:
          "Contains `target`, `currentTarget`, `preventDefault()`, `stopPropagation()`, coordinates, and more. Understanding the event object is critical for building interactive UIs.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Event Bubbling and Capturing",
        content:
          "Events propagate in two phases: capturing (down) and bubbling (up). Use `stopPropagation()` and `stopImmediatePropagation()` carefully. Event delegation leverages bubbling for efficient dynamic UIs.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "JS012",
    topic: "Error Handling",
    notes: [
      {
        id: "001",
        title: "Types of Errors",
        content:
          "Syntax errors (parsing), runtime errors (ReferenceError, TypeError), and logical errors (incorrect behavior). Use `console.trace()` and debugger for diagnosis.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "try...catch",
        content:
          "Wrap risky code in try-catch-finally blocks. Async errors require different handling (`.catch()` on promises or try-catch with async/await).",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "throw",
        content:
          "Throw custom errors or Error instances. Create custom error classes that extend Error for better debugging and error categorization in large applications.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "JS013",
    topic: "ES6+ Features",
    notes: [
      {
        id: "001",
        title: "Template Literals",
        content:
          "Backtick strings support interpolation (`${variable}`), multiline text, and embedded expressions. Greatly improves readability over string concatenation.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Spread Operator",
        content:
          "`...` expands iterables. Useful for cloning arrays/objects, merging, and passing arguments. Shallow copy — be careful with nested objects.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Rest Parameters",
        content:
          "Collects remaining arguments into an array (`function(...args)`). Cleaner and more powerful than the `arguments` object.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Modules",
        content:
          "Native ES Modules (`import`/`export`) enable better code organization, tree-shaking, and encapsulation. Supported in modern browsers and Node.js.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "JS014",
    topic: "Asynchronous JavaScript",
    notes: [
      {
        id: "001",
        title: "Synchronous vs Asynchronous",
        content:
          "JavaScript is single-threaded and synchronous by default. Asynchronous patterns (callbacks, promises, async/await) allow non-blocking operations like network requests and timers.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Callbacks",
        content:
          "Basic async pattern but can lead to 'callback hell'. Still used in some Node.js APIs and event handlers.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Promises",
        content:
          "Represent eventual completion or failure. Chainable with `.then()`/`.catch()`. Created with `new Promise()` or returned by async functions.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Async/Await",
        content:
          "Syntactic sugar over promises that makes asynchronous code read like synchronous code. Must be used inside `async` functions. Dramatically improves readability and error handling.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "JS015",
    topic: "Working with APIs",
    notes: [
      {
        id: "001",
        title: "What is an API?",
        content:
          "An interface that allows different software systems to communicate. Web APIs (REST, GraphQL) typically use HTTP and JSON for data exchange.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Fetch API",
        content:
          "Modern, promise-based way to make HTTP requests. Simpler and more powerful than XMLHttpRequest. Supports streaming, Request/Response objects, and CORS.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Handling Responses",
        content:
          "Convert responses with `.json()`, `.text()`, or `.blob()`. Always check `response.ok` before processing. Use structured error handling for different status codes.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Error Handling",
        content:
          "Network failures, JSON parsing errors, and server errors must be handled gracefully. Consider retry logic, timeouts, and user-friendly fallback UI.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "JS016",
    topic: "Object-Oriented Programming",
    notes: [
      {
        id: "001",
        title: "Classes",
        content:
          "ES6 syntactic sugar over prototype-based inheritance. Provide a clean way to create blueprints for objects with constructors, methods, and properties.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Constructors",
        content:
          "`constructor()` method runs when creating instances with `new`. Use for initializing properties and setting up internal state.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Inheritance",
        content:
          "`extends` keyword and `super()` for calling parent constructors/methods. Prototype chain powers JavaScript’s inheritance model.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Encapsulation",
        content:
          "Use private fields (`#property`) and methods for true privacy. Getters/setters provide controlled access to internal state.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "JS017",
    topic: "JavaScript Modules and Tooling",
    notes: [
      {
        id: "001",
        title: "Modules",
        content:
          "Enable code splitting, reusability, and maintainability. Use `export`/`import` for ES Modules or `module.exports`/`require` for CommonJS.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Package Managers",
        content:
          "npm and Yarn (or pnpm) manage dependencies. Understand `package.json`, semantic versioning, and lockfiles for reproducible builds.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Bundlers",
        content:
          "Vite (fastest for development), Webpack, Parcel, or esbuild optimize, bundle, and transpile code for production. Critical for using modern JavaScript in browsers.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "JS018",
    topic: "Testing and Debugging",
    notes: [
      {
        id: "001",
        title: "Debugging Tools",
        content:
          "Browser DevTools, `debugger` statement, `console.*` methods, and source maps. Learn to use breakpoints, step-through execution, and performance profiling.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Unit Testing",
        content:
          "Test small units of code in isolation. Focus on edge cases, happy paths, and error conditions to build robust applications.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Testing Frameworks",
        content:
          "Jest (most popular), Vitest (fast Vite-native), Mocha + Chai, or Cypress/Playwright for end-to-end testing. Aim for good test coverage without over-testing.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "JS019",
    topic: "Modern JavaScript Best Practices",
    notes: [
      {
        id: "001",
        title: "Code Organization",
        content:
          "Follow modular architecture, single responsibility principle, and consistent folder structures. Use meaningful names and keep functions small and focused.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Naming Conventions",
        content:
          "Use camelCase for variables/functions, PascalCase for classes, UPPER_SNAKE_CASE for constants. Write self-documenting code with clear, intention-revealing names.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Performance Optimization",
        content:
          "Avoid memory leaks, minimize DOM access, debounce/throttle expensive operations, and use efficient data structures. Profile regularly with DevTools.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Security Considerations",
        content:
          "Sanitize user input, avoid `eval()`, use HTTPS, implement proper authentication, and protect against XSS, CSRF, and injection attacks.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "JS020",
    topic: "Final Project",
    notes: [
      {
        id: "001",
        title: "Project Planning",
        content:
          "Define requirements, user stories, tech stack, and architecture. Create wireframes, choose state management strategy, and plan for scalability and maintainability.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Implementation",
        content:
          "Build a full-featured application (e.g., todo app, e-commerce store, dashboard, or social media clone) applying modern JavaScript patterns, async handling, and clean architecture.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Deployment",
        content:
          "Deploy frontend to Netlify/Vercel and backend to Render, Railway, or Supabase. Configure environment variables, custom domains, and CI/CD pipelines.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Code Review",
        content:
          "Refactor for readability, performance, and best practices. Write documentation, add tests, and prepare for production concerns like error tracking (Sentry) and analytics.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
];

export const GIT_GITHUB_COURSE_OUTLINE = [
  {
    id: "GIT001",
    topic: "Introduction to Version Control and Git",
    notes: [
      {
        id: "001",
        title: "What is Version Control?",
        content:
          "Version control is a system that records changes to files over time, allowing you to recall specific versions, collaborate with others, and maintain a complete history of your project. It is essential for software development, documentation, and any team-based creative work.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Why Git?",
        content:
          "Git is a free, open-source, distributed version control system created by Linus Torvalds in 2005. Unlike centralized systems (like SVN), Git gives every developer a full copy of the project history, enabling fast operations, offline work, and powerful branching capabilities.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Git vs GitHub",
        content:
          "Git is the version control tool that runs locally on your machine. GitHub is a cloud-based hosting service for Git repositories that adds collaboration features like pull requests, issues, code review, CI/CD, and project management tools.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Core Concepts",
        content:
          "Key concepts include repositories, commits (snapshots), branches (parallel lines of development), staging area, and remotes. Understanding these foundational ideas is critical before diving into commands.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "GIT002",
    topic: "Setting Up Git and GitHub",
    notes: [
      {
        id: "001",
        title: "Installing Git",
        content:
          "Download and install Git from the official website (git-scm.com). On macOS use Homebrew, on Linux use package managers (apt/yum), and on Windows use the Git for Windows installer which includes Git Bash.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Initial Git Configuration",
        content:
          "Set your identity with `git config --global user.name` and `git config --global user.email`. Configure your default editor, line endings (`core.autocrlf`), and credential helper for secure authentication.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Creating a GitHub Account",
        content:
          "Sign up at github.com, verify your email, and set up two-factor authentication. Generate and add an SSH key for passwordless authentication (`ssh-keygen` and `ssh-add`).",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Connecting Local Git to GitHub",
        content:
          "Use HTTPS or SSH to link local repositories to GitHub. Learn how to manage personal access tokens (PATs) for secure API and command-line access.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "GIT003",
    topic: "Git Basics and Your First Repository",
    notes: [
      {
        id: "001",
        title: "Initializing a Repository",
        content:
          "Use `git init` to create a new repository or `git clone` to copy an existing remote repository. Understand the `.git` folder that stores all history and configuration.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Staging and Committing Changes",
        content:
          "`git add` moves changes to the staging area (index). `git commit -m 'message'` creates a snapshot with a descriptive commit message. Good commit messages follow the conventional commits standard.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Checking Status and History",
        content:
          "`git status`, `git log`, `git diff`, and `git show` are essential for understanding the current state and reviewing past changes. Use `git log --oneline --graph --all` for a visual branch overview.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Ignoring Files",
        content:
          "Create a `.gitignore` file to exclude temporary files, build artifacts, node_modules, environment variables, etc. Use global gitignore and templates for common project types.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "GIT004",
    topic: "Working with Branches",
    notes: [
      {
        id: "001",
        title: "Branching Fundamentals",
        content:
          "Branches allow parallel development. The default branch is usually `main` (formerly `master`). Create branches with `git branch` or `git checkout -b`.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Switching and Managing Branches",
        content:
          "Use `git switch` (modern) or `git checkout` to switch branches. Delete branches with `git branch -d`. Understand branch naming conventions (feature/, bugfix/, hotfix/).",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Merging Branches",
        content:
          "`git merge` integrates changes from one branch into another. Fast-forward vs three-way merges. Resolve merge conflicts by manually editing files and committing the resolution.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Branch Workflows",
        content:
          "Learn popular workflows like GitHub Flow (feature branches + PRs) and Git Flow (develop, release, hotfix branches) and when to use each.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "GIT005",
    topic: "Remote Repositories and Synchronization",
    notes: [
      {
        id: "001",
        title: "Adding and Managing Remotes",
        content:
          "`git remote add origin <url>`. Work with multiple remotes. Use `git remote -v` to inspect connections.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Pushing and Pulling Changes",
        content:
          "`git push` uploads commits to a remote. `git pull` fetches and merges changes. Understand `git fetch` for downloading without merging.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Tracking Branches",
        content:
          "Set upstream branches with `-u` flag. Learn about local vs remote tracking branches and how Git keeps them synchronized.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "GIT006",
    topic: "GitHub Collaboration Features",
    notes: [
      {
        id: "001",
        title: "Pull Requests (PRs)",
        content:
          "The heart of GitHub collaboration. Create PRs to propose changes, enable code review, discussions, and automated checks before merging.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Issues and Project Management",
        content:
          "Use Issues for bug tracking, feature requests, and tasks. GitHub Projects (beta/new version) for Kanban-style boards and roadmaps.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Code Review Best Practices",
        content:
          "Write clear PR descriptions, request reviewers, use labels and milestones. Provide constructive feedback during reviews and use GitHub’s suggestion feature.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Forking and Contributing",
        content:
          "Fork repositories to contribute to open source. Create branches in your fork, submit PRs to the upstream repository, and keep your fork synchronized.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "GIT007",
    topic: "Advanced Git Operations",
    notes: [
      {
        id: "001",
        title: "Stashing Changes",
        content:
          "`git stash` temporarily shelves changes. Use `git stash pop`, `git stash apply`, and `git stash drop`. Great for context switching.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Rebasing",
        content:
          "`git rebase` replays commits on top of another branch for cleaner history. Interactive rebase (`git rebase -i`) allows editing, reordering, squashing, and dropping commits.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Resetting and Reverting",
        content:
          "`git reset` (soft, mixed, hard) moves HEAD. `git revert` creates new commits that undo changes safely for shared history.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Cherry-picking and Reflog",
        content:
          "Cherry-pick specific commits. Use `git reflog` to recover lost commits and navigate history.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "GIT008",
    topic: "Tagging and Releases",
    notes: [
      {
        id: "001",
        title: "Git Tags",
        content:
          "Lightweight and annotated tags mark specific points in history (usually releases). Use semantic versioning (v1.2.3).",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "GitHub Releases",
        content:
          "Create Releases on GitHub with changelogs, binaries, and source code. Link releases to Git tags.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "GIT009",
    topic: "Rewriting History and Data Management",
    notes: [
      {
        id: "001",
        title: "Interactive Rebase & Amend",
        content:
          "Rewrite commit messages and combine commits. Use with caution on shared branches.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Working with Large Files",
        content:
          "Use Git LFS (Large File Storage) for binaries, images, and datasets. Understand `.gitattributes` for managing file handling.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "GIT010",
    topic: "GitHub Advanced Features",
    notes: [
      {
        id: "001",
        title: "GitHub Actions (CI/CD)",
        content:
          "Automate testing, building, and deployment with workflows. Write YAML workflow files triggered by events (push, PR, schedule).",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Security and Permissions",
        content:
          "Repository visibility (public/private), branch protection rules, CODEOWNERS, Dependabot, and secret management.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "GitHub Pages and Wikis",
        content:
          "Host static websites directly from repositories. Use Wikis for project documentation.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "GIT011",
    topic: "Collaboration Workflows and Team Practices",
    notes: [
      {
        id: "001",
        title: "GitHub Flow in Depth",
        content:
          "Main branch always deployable. Short-lived feature branches, pull requests, and continuous integration.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Code Review Culture",
        content:
          "Establish team guidelines for PR size, review turnaround time, and automated checks.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Monorepos vs Multi-repos",
        content:
          "Pros and cons of managing multiple projects in one repository versus separate repositories.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "GIT012",
    topic: "Troubleshooting and Common Git Issues",
    notes: [
      {
        id: "001",
        title: "Merge Conflicts",
        content:
          "How to identify, resolve, and prevent frequent conflicts. Use merge tools like VS Code, Meld, or Beyond Compare.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Common Errors",
        content:
          "Fix issues like 'detached HEAD', rejected pushes, permission errors, and corrupted repositories.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Debugging with Git",
        content:
          "Use `git bisect` to find buggy commits and `git blame` to see who changed specific lines.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "GIT013",
    topic: "Best Practices and Performance",
    notes: [
      {
        id: "001",
        title: "Commit Hygiene",
        content:
          "Atomic commits, meaningful messages, and keeping history clean. Use tools like commitizen.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Repository Maintenance",
        content:
          "Prune old branches, garbage collection (`git gc`), and optimize large repositories.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Security Best Practices",
        content:
          "Don’t commit secrets, use .gitignore properly, enable signed commits with GPG, and audit repository access.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "GIT014",
    topic: "Modern Tooling and Integrations",
    notes: [
      {
        id: "001",
        title: "GUI Clients",
        content:
          "GitHub Desktop, GitKraken, Sourcetree, and VS Code Git integration for visual workflows.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "CLI Enhancements",
        content:
          "Tools like gh (GitHub CLI), delta, lazygit, and tig improve productivity.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Integrations",
        content:
          "Connect GitHub with Slack, Jira, Linear, Vercel, Netlify, and other development tools.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "GIT015",
    topic: "Final Project: Collaborative Open Source Contribution",
    notes: [
      {
        id: "001",
        title: "Project Planning",
        content:
          "Choose or create a project. Define contribution guidelines, issue templates, and PR templates.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Implementation",
        content:
          "Work on features/bug fixes using proper branching, commit practices, and testing.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Collaboration",
        content:
          "Submit pull requests, participate in code reviews, and iterate based on feedback.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Documentation and Deployment",
        content:
          "Update README, add documentation, create releases, and optionally deploy the project.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
];

export const TAILWIND_CSS_COURSE_OUTLINE = [
  {
    id: "TAIL001",
    topic: "Introduction to Tailwind CSS",
    notes: [
      {
        id: "001",
        title: "What is Tailwind CSS?",
        content:
          "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your HTML. Instead of writing custom CSS for every component, you compose designs using pre-defined classes like `flex`, `bg-blue-500`, `text-xl`, and `p-4`. It promotes rapid development while maintaining full design control.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Utility-First Philosophy",
        content:
          "Unlike traditional frameworks (Bootstrap, Material UI) that provide pre-built components, Tailwind focuses on atomic utilities. This approach eliminates the need for writing custom CSS in most cases, reduces context switching, and results in highly consistent, maintainable designs.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Benefits and Trade-offs",
        content:
          "Benefits include faster prototyping, smaller final CSS size (with purging), excellent responsiveness, and easy theming. Trade-offs include longer class strings in HTML and a learning curve for memorizing utilities. Modern editor extensions and IntelliSense largely mitigate these issues.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Tailwind vs Other Frameworks",
        content:
          "Compared to Bootstrap (component-heavy), Tailwind offers greater flexibility. Compared to plain CSS or Sass, it provides a comprehensive design system out of the box while remaining fully customizable.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TAIL002",
    topic: "Setting Up Tailwind CSS",
    notes: [
      {
        id: "001",
        title: "Installation Methods",
        content:
          "Install via npm (`npm install -D tailwindcss postcss autoprefixer`), then initialize with `npx tailwindcss init -p`. Supports Create React App, Vite, Next.js, Laravel, and plain HTML projects.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Configuration File (tailwind.config.js)",
        content:
          "The central configuration file where you define content paths, custom colors, fonts, breakpoints, and extend the default theme. Critical for project-specific design systems.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Directives and Base Styles",
        content:
          "Add `@tailwind base; @tailwind components; @tailwind utilities;` to your main CSS file. Use the `@layer` directive to organize custom styles.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Development Workflow",
        content:
          "Use JIT (Just-In-Time) mode for instant class generation. Integrate with VS Code's Tailwind IntelliSense extension for autocomplete, hover previews, and linting.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TAIL003",
    topic: "Core Utility Concepts",
    notes: [
      {
        id: "001",
        title: "Utility Class Structure",
        content:
          "Most classes follow the pattern: `property-{modifier}` (e.g., `text-lg`, `bg-red-500`, `hover:scale-105`). Variants include responsive prefixes, hover/focus states, and dark mode.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Colors and Theming",
        content:
          "Default color palette with shades (50–950). Use `bg-blue-600`, `text-emerald-400`, `border-slate-200`, etc. Easily extend or override the color palette in your config file.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Spacing System",
        content:
          "Consistent spacing scale using `p-`, `m-`, `gap-`, `space-` utilities (e.g., `p-4`, `mx-auto`, `gap-6`). Based on a default scale that can be customized.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Typography Utilities",
        content:
          "Control font size (`text-2xl`), weight (`font-semibold`), line height, letter spacing, alignment, and more. Includes utilities for lists, placeholders, and text decoration.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TAIL004",
    topic: "Layout and Positioning",
    notes: [
      {
        id: "001",
        title: "Box Model and Sizing",
        content:
          "Utilities for width (`w-full`, `w-64`), height, min/max dimensions, padding, margins, and borders. Understand how Tailwind applies `box-border` by default.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Flexbox",
        content:
          "Complete Flexbox support: `flex`, `flex-col`, `justify-center`, `items-start`, `gap-4`, `flex-1`, `order-first`, etc. Makes complex layouts simple and responsive.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "CSS Grid",
        content:
          "Powerful Grid utilities: `grid`, `grid-cols-12`, `grid-rows-4`, `gap-8`, `col-span-6`, `auto-rows-fr`, etc. Ideal for complex two-dimensional layouts.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Positioning and Display",
        content:
          "Control `position` (static, relative, absolute, fixed, sticky), z-index, overflow, and visibility with intuitive utilities.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TAIL005",
    topic: "Responsive Design",
    notes: [
      {
        id: "001",
        title: "Mobile-First Breakpoints",
        content:
          "Default breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`. Use prefixes like `md:text-xl` or `lg:grid-cols-3`. Fully customizable in config.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Responsive Strategies",
        content:
          "Build mobile-first designs. Use `max-width` containers, responsive variants, and arbitrary values for fine control.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Advanced Responsive Techniques",
        content:
          "Combine responsive variants with hover, focus, and dark mode. Use `arbitrary values` like `md:[grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]` for complex cases.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TAIL006",
    topic: "Styling Components and States",
    notes: [
      {
        id: "001",
        title: "Hover, Focus, and Active States",
        content:
          "Interactive states: `hover:bg-blue-700`, `focus:ring-2`, `active:scale-95`, `group-hover:`, `peer-focus:`, etc. Enables rich interactions without custom CSS.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Dark Mode",
        content:
          "Built-in dark mode support using `dark:` prefix or `class` strategy. Customize dark mode colors in your theme configuration.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Component Extraction",
        content:
          "Use `@apply` directive in CSS layers to create reusable component classes while keeping the utility-first mindset. Best for complex, repeated patterns.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Arbitrary Values",
        content:
          "Escape limitations with square bracket notation: `bg-[#1a1a2e]`, `w-[300px]`, `text-[17px]`, or even `grid-cols-[200px,1fr,auto]`.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TAIL007",
    topic: "Customization and Theming",
    notes: [
      {
        id: "001",
        title: "Extending the Theme",
        content:
          "Add custom fonts, colors, spacing, shadows, animations, and more in `tailwind.config.js`. Create consistent design tokens for your brand.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Plugins",
        content:
          "Official and community plugins (typography, forms, aspect-ratio, etc.). Learn to create your own plugins for advanced functionality.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Purging and Optimization",
        content:
          "Tailwind's JIT compiler automatically removes unused classes in production, resulting in very small CSS bundles.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TAIL008",
    topic: "Forms and Advanced UI Elements",
    notes: [
      {
        id: "001",
        title: "Form Styling",
        content:
          "Style inputs, buttons, checkboxes, selects, and labels using utilities. Use the `@tailwindcss/forms` plugin for better defaults.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Animations and Transitions",
        content:
          "Built-in transitions (`transition`, `duration-300`, `ease-in-out`), transforms (`rotate-45`, `scale-110`), and keyframe animations.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Tables, Cards, and Common Patterns",
        content:
          "Build responsive tables, modern cards, navigation bars, modals, and dropdowns using utility combinations.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TAIL009",
    topic: "Integration with Frameworks and Tools",
    notes: [
      {
        id: "001",
        title: "React, Vue, and Svelte",
        content:
          "Best practices for using Tailwind with component-based frameworks. Dynamic class construction with template literals or `clsx`/`classnames`.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Next.js and Vite",
        content:
          "Optimized setup for Next.js (including App Router) and Vite. Leverage built-in support for fast development and production builds.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Editor and Tooling Support",
        content:
          "VS Code + Tailwind IntelliSense, Prettier plugin, Headless UI, and Radix UI for accessible component primitives.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TAIL010",
    topic: "Best Practices and Performance",
    notes: [
      {
        id: "001",
        title: "Class Organization",
        content:
          "Sort classes logically (e.g., layout → box → typography → colors → effects). Use tools like Prettier's Tailwind plugin for automatic sorting.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Performance Optimization",
        content:
          "Minimize class count, use `@apply` judiciously, enable JIT mode, and analyze bundle size. Avoid overly complex arbitrary values in production.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Accessibility",
        content:
          "Combine Tailwind with semantic HTML and ARIA attributes. Use focus utilities, proper contrast, and keyboard navigation support.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TAIL011",
    topic: "Advanced Tailwind Techniques",
    notes: [
      {
        id: "001",
        title: "Just-In-Time (JIT) Mode",
        content:
          "Enables on-demand class generation, arbitrary values, and better tree-shaking. The default in modern Tailwind versions.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Custom Plugins and Presets",
        content:
          "Create reusable design systems as Tailwind presets or plugins for large organizations or design systems.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Design Systems with Tailwind",
        content:
          "Build scalable component libraries (Storybook + Tailwind) that maintain consistency across large applications.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TAIL012",
    topic: "Final Project: Building a Modern Website",
    notes: [
      {
        id: "001",
        title: "Project Planning",
        content:
          "Choose a real-world project (SaaS landing page, dashboard, e-commerce site, or portfolio). Define design system, color palette, and typography.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Implementation",
        content:
          "Build responsive, accessible, and interactive UI using Tailwind utilities, custom components, dark mode, and animations.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Optimization and Polish",
        content:
          "Optimize performance, ensure accessibility, add micro-interactions, and implement responsive behavior across all breakpoints.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Deployment",
        content:
          "Deploy using Vercel, Netlify, or GitHub Pages. Set up proper meta tags, SEO, and performance monitoring.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
];

export const REACT_COURSE_OUTLINE = [
  {
    id: "REACT001",
    topic: "Introduction to React",
    notes: [
      {
        id: "001",
        title: "What is React?",
        content:
          "React is a powerful, declarative JavaScript library developed by Meta (formerly Facebook) for building fast, scalable, and interactive user interfaces. It emphasizes component-based architecture, allowing developers to break complex UIs into reusable, self-contained pieces. React has revolutionized frontend development by introducing the Virtual DOM, enabling efficient updates and exceptional performance in modern single-page applications (SPAs).",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Why Use React?",
        content:
          "React stands out due to its component reusability, one-way data flow, strong community support, and rich ecosystem. It powers some of the world’s most popular applications including Facebook, Instagram, Netflix, Airbnb, Shopify, and Discord. Its flexibility, excellent developer tooling, and seamless integration with other technologies make it the go-to choice for both startups and enterprise-level applications.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "React Ecosystem Overview",
        content:
          "The React ecosystem is vast and mature. It includes React DOM for web rendering, React Native for cross-platform mobile apps, Next.js for server-side rendering and full-stack development, React Router for navigation, state management solutions like Redux, Zustand, and Jotai, styling libraries like Tailwind CSS and shadcn/ui, and powerful tools such as Vite, TypeScript, and TanStack Query.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Declarative vs Imperative",
        content:
          "React embraces a declarative programming model where developers describe the desired UI state, and React automatically handles DOM manipulation and updates. This approach reduces bugs, improves readability, and contrasts sharply with traditional imperative DOM manipulation using vanilla JavaScript or jQuery, leading to more predictable and maintainable code.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "REACT002",
    topic: "Setting Up the Development Environment",
    notes: [
      {
        id: "001",
        title: "Creating a React App",
        content:
          "Modern projects start with Vite (`npm create vite@latest my-app -- --template react-ts`) for lightning-fast setup, hot module replacement, and excellent performance. While Create React App is still viable, Vite has become the industry standard due to its speed and native ES modules support.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Project Structure",
        content:
          "A well-organized structure typically includes folders like `src/components` (reusable UI), `src/pages` or `src/routes` (page-level components), `src/hooks` (custom logic), `src/utils` (helper functions), `src/lib` (services and configurations), and `src/assets`. Adopt a feature-based or domain-driven structure as the application grows.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Essential Tools",
        content:
          "Enhance productivity with VS Code + extensions (ESLint, Prettier, Tailwind CSS IntelliSense, React Snippets, ESLint Plugin React Hooks). Install React Developer Tools browser extension for inspecting component hierarchy, props, and state. Strongly consider TypeScript from day one for better scalability.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Running and Building",
        content:
          "Run `npm run dev` for a fast development server. Learn production optimization with `npm run build`, environment variables (`.env` files), proxy setup for API development, and deployment best practices.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "REACT003",
    topic: "JSX and React Elements",
    notes: [
      {
        id: "001",
        title: "What is JSX?",
        content:
          "JSX (JavaScript XML) is a syntax extension that lets you write HTML-like markup directly within JavaScript. Under the hood, it transpiles into `React.createElement()` calls. JSX makes React code more readable and expressive while combining markup and logic in the same file.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "JSX Rules and Expressions",
        content:
          "JSX expressions must return a single parent element (use fragments `<></>` when needed). Embed dynamic values with curly braces `{}`, use camelCase for attributes (`className`, `htmlFor`, `onClick`), and avoid injecting raw HTML unless using `dangerouslySetInnerHTML`.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "React Elements vs Components",
        content:
          "React Elements are immutable plain JavaScript objects representing DOM nodes. Components are functions or classes that return elements and can manage their own state and lifecycle, enabling powerful composition patterns.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "REACT004",
    topic: "Components and Props",
    notes: [
      {
        id: "001",
        title: "Functional Components",
        content:
          "The modern standard for React development. These are clean JavaScript functions that accept props and return JSX. They are lightweight, easy to test, and work seamlessly with hooks, replacing class components in nearly all scenarios.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Props (Properties)",
        content:
          "Props serve as a one-way communication channel from parent to child components. Master destructuring, default props, prop validation (with PropTypes or TypeScript), and passing functions or complex objects as props.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Component Composition",
        content:
          "Build sophisticated interfaces by composing small, focused components. Leverage the `children` prop to create flexible layouts, wrappers, and compound components that enhance reusability and maintainability.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "REACT005",
    topic: "State and Event Handling",
    notes: [
      {
        id: "001",
        title: "State with useState Hook",
        content:
          "The `useState` hook allows functional components to manage local state. Learn about state updates being asynchronous, using functional updates for complex state, and avoiding direct mutation to ensure predictable re-renders.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Handling Events",
        content:
          "React uses synthetic events for cross-browser consistency. Attach handlers like `onClick`, `onChange`, `onSubmit`, `onKeyDown`. Master passing parameters, accessing the event object, and preventing default behaviors.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "State Best Practices",
        content:
          "Keep state minimal and localized. Lift state up when multiple components need access to the same data. Prefer derived state and memoization to avoid unnecessary complexity.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "REACT006",
    topic: "Rendering and Lists",
    notes: [
      {
        id: "001",
        title: "Conditional Rendering",
        content:
          "Dynamically show or hide UI elements using `if/else`, ternary operators (`condition ? <A/> : <B/>`), and short-circuit evaluation (`condition && <Element/>`). Master patterns for loading spinners, error messages, and empty states.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Rendering Lists",
        content:
          "Transform arrays into UI elements using `.map()`. Always provide a unique, stable `key` prop to help React’s reconciliation algorithm track elements efficiently during updates, additions, or deletions.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "REACT007",
    topic: "Forms and Controlled Components",
    notes: [
      {
        id: "001",
        title: "Controlled vs Uncontrolled Components",
        content:
          "Controlled components store form data in React state, giving developers full control over input values and validation. This approach is preferred for complex forms, real-time validation, and dynamic behavior.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Form Handling",
        content:
          "Build robust forms handling text inputs, textareas, selects, checkboxes, radio groups, and file uploads. Implement client-side validation, submission logic, and user feedback mechanisms.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Advanced Form Patterns",
        content:
          "While libraries like React Hook Form offer excellent performance for large forms, mastering native controlled components builds a strong foundation for understanding form state management.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "REACT008",
    topic: "Hooks Deep Dive",
    notes: [
      {
        id: "001",
        title: "useEffect Hook",
        content:
          "The `useEffect` hook manages side effects such as data fetching, subscriptions, timers, and manual DOM updates. Master dependency arrays, cleanup functions, and avoiding infinite loops caused by improper dependencies.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Additional Built-in Hooks",
        content:
          "Explore powerful hooks including `useContext`, `useReducer` (for complex state), `useRef` (for DOM and mutable values), `useMemo`, `useCallback` (for performance), and newer additions like `useDeferredValue` and `useTransition`.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Custom Hooks",
        content:
          "Create reusable logic by extracting stateful behavior into custom hooks (e.g., `useLocalStorage`, `useWindowSize`, `useDebounce`, `useFetch`). This promotes clean, DRY, and highly testable code.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "REACT009",
    topic: "Context API and State Management",
    notes: [
      {
        id: "001",
        title: "Context API",
        content:
          "The Context API provides a built-in way to share global data (themes, authentication, user preferences) across the component tree without prop drilling, significantly simplifying data flow in medium to large applications.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "When to Use Context",
        content:
          "Use Context for truly global concerns. For most component communication, prefer props or component composition. Combine with `useReducer` for more sophisticated global state patterns.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Modern State Management",
        content:
          "For complex applications, explore lightweight and performant solutions like Zustand, Jotai, Recoil, or Redux Toolkit, each offering different trade-offs in simplicity and scalability.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "REACT010",
    topic: "Routing with React Router",
    notes: [
      {
        id: "001",
        title: "React Router Basics",
        content:
          "React Router v6+ is the de facto standard for declarative routing. Master `<BrowserRouter>`, `<Routes>`, `<Route>`, `<Link>`, `<NavLink>`, and the `useNavigate` hook for programmatic navigation.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Dynamic Routes and Nested Layouts",
        content:
          "Implement dynamic routing with URL parameters, nested layouts, outlet components, loaders, and actions for data fetching and mutations.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Advanced Routing",
        content:
          "Build protected routes, handle search parameters, implement lazy loading with `React.lazy` and `Suspense`, and create smooth page transitions.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "REACT011",
    topic: "Data Fetching and Server Communication",
    notes: [
      {
        id: "001",
        title: "Fetching Data with useEffect",
        content:
          "Learn foundational patterns for fetching data from APIs, managing loading and error states, and handling cancellation to prevent memory leaks.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Modern Data Fetching",
        content:
          "Leverage powerful libraries like TanStack Query (React Query) for automatic caching, background refetching, optimistic updates, pagination, and infinite scrolling — dramatically improving user experience.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Error Boundaries",
        content:
          "Implement class-based or modern error boundary patterns to gracefully catch JavaScript errors in the component tree and display fallback interfaces instead of breaking the entire app.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "REACT012",
    topic: "Performance Optimization",
    notes: [
      {
        id: "001",
        title: "React Reconciliation and Rendering",
        content:
          "Deeply understand React’s diffing algorithm, fiber architecture, and how re-renders propagate. This knowledge is key to writing performant React applications.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Optimization Techniques",
        content:
          "Master memoization with `React.memo`, `useMemo`, and `useCallback`. Implement code splitting, lazy loading, and virtualization for large lists using libraries like react-window.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Profiling and DevTools",
        content:
          "Use the React Profiler, browser performance tools, and Lighthouse to identify and eliminate performance bottlenecks systematically.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "REACT013",
    topic: "Styling in React",
    notes: [
      {
        id: "001",
        title: "CSS Modules and Global CSS",
        content:
          "Use CSS Modules for locally scoped styles. Combine with global stylesheets and CSS variables for consistent theming across the application.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Tailwind CSS with React",
        content:
          "Integrate Tailwind CSS for rapid, utility-first development. Use helper libraries like `clsx` or `classnames` to manage conditional and dynamic class names effectively.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Component Libraries",
        content:
          "Explore production-ready solutions such as shadcn/ui (highly customizable), Material-UI, Chakra UI, and Radix UI + Tailwind for building beautiful, accessible interfaces quickly.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "REACT014",
    topic: "Testing React Applications",
    notes: [
      {
        id: "001",
        title: "Testing Fundamentals",
        content:
          "Adopt a testing pyramid approach covering unit tests, component integration tests, and end-to-end tests. Jest + React Testing Library is the modern standard.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Testing Components and Hooks",
        content:
          "Test user interactions, state changes, side effects, and accessibility using `@testing-library/react` and `user-event`. Focus on testing behavior rather than implementation details.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Advanced Testing",
        content:
          "Mock API calls with MSW, test routing and navigation, and implement visual regression testing or full E2E suites with Cypress or Playwright.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "REACT015",
    topic: "Advanced React and Modern Features",
    notes: [
      {
        id: "001",
        title: "Server Components and Suspense",
        content:
          "Explore React Server Components (especially in Next.js), streaming server rendering, and concurrent features that fundamentally change how data is fetched and rendered.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "TypeScript with React",
        content:
          "Leverage TypeScript for type-safe components, props, hooks, context, and reducers. It catches errors early and significantly improves developer experience in large codebases.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Best Practices and Patterns",
        content:
          "Adopt modern patterns like compound components, custom hooks, folder-by-feature organization, atomic design principles, and clean architecture for maintainable, scalable applications.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "REACT016",
    topic: "Final Project: Full-Featured React Application",
    notes: [
      {
        id: "001",
        title: "Project Planning",
        content:
          "Choose and scope a comprehensive project such as a full e-commerce platform, project management tool, social media dashboard, or SaaS product. Define user stories, architecture, state management strategy, and design system.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Implementation",
        content:
          "Build using functional components, hooks, routing, advanced data fetching, authentication, forms, real-time features (if applicable), and responsive design with Tailwind CSS.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Polish and Optimization",
        content:
          "Implement comprehensive testing, performance optimizations, accessibility (a11y), dark mode, error handling, and loading states for a production-grade experience.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Deployment",
        content:
          "Deploy to Vercel, Netlify, or Render. Configure CI/CD pipelines, environment variables, custom domains, analytics, and monitoring tools like Sentry for error tracking.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
];

export const REACT_NATIVE_COURSE_OUTLINE = [
  {
    id: "RNATIVE001",
    topic: "Introduction to React Native",
    notes: [
      {
        id: "001",
        title: "What is React Native?",
        content:
          "React Native is a powerful, declarative JavaScript library developed by Meta (formerly Facebook) for building fast, scalable, and interactive user interfaces. It emphasizes component-based architecture, allowing developers to break complex UIs into reusable, self-contained pieces. React has revolutionized frontend development by introducing the Virtual DOM, enabling efficient updates and exceptional performance in modern single-page applications (SPAs).",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Why Use React Native?",
        content:
          "React stands out due to its component reusability, one-way data flow, strong community support, and rich ecosystem. It powers some of the world’s most popular applications including Facebook, Instagram, Netflix, Airbnb, Shopify, and Discord. Its flexibility, excellent developer tooling, and seamless integration with other technologies make it the go-to choice for both startups and enterprise-level applications.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "React Native Ecosystem Overview",
        content:
          "The React ecosystem is vast and mature. It includes React DOM for web rendering, React Native for cross-platform mobile apps, Next.js for server-side rendering and full-stack development, React Router for navigation, state management solutions like Redux, Zustand, and Jotai, styling libraries like Tailwind CSS and shadcn/ui, and powerful tools such as Vite, TypeScript, and TanStack Query.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Declarative vs Imperative",
        content:
          "React embraces a declarative programming model where developers describe the desired UI state, and React automatically handles DOM manipulation and updates. This approach reduces bugs, improves readability, and contrasts sharply with traditional imperative DOM manipulation using vanilla JavaScript or jQuery, leading to more predictable and maintainable code.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
];

export const TYPESCRIPT_COURSE_OUTLINE = [
  {
    id: "TYPE001",
    topic: "Introduction to TypeScript",
    notes: [
      {
        id: "001",
        title: "What is TypeScript?",
        content:
          "TypeScript is a strongly typed superset of JavaScript developed and maintained by Microsoft. It adds optional static typing, classes, interfaces, and modern ECMAScript features to JavaScript, compiling down to clean, standard JavaScript that runs anywhere JavaScript does. TypeScript catches errors at compile time rather than runtime, dramatically improving developer experience and code quality.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Why Learn TypeScript?",
        content:
          "TypeScript has become the industry standard for large-scale JavaScript applications. It offers better IntelliSense, refactoring capabilities, self-documenting code, and reduced bugs. Companies like Microsoft, Google, Airbnb, Slack, and Vercel use TypeScript extensively. It scales exceptionally well as codebases grow while maintaining the flexibility of JavaScript.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "TypeScript vs JavaScript",
        content:
          "While JavaScript is dynamically typed and flexible, TypeScript introduces a robust type system that helps catch errors early, provides excellent tooling support, and enables better collaboration in teams. You can gradually adopt TypeScript in existing JavaScript projects without rewriting everything at once.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "TypeScript Ecosystem",
        content:
          "TypeScript integrates seamlessly with React, Node.js, Next.js, Angular, Vue, Express, and thousands of libraries via DefinitelyTyped (@types packages). It works with modern bundlers like Vite, Webpack, and esbuild.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TYPE002",
    topic: "Setting Up the TypeScript Environment",
    notes: [
      {
        id: "001",
        title: "Installation and Configuration",
        content:
          "Install TypeScript globally or locally via npm (`npm install -D typescript`). Initialize a project with `npx tsc --init` to create a `tsconfig.json` file that controls compilation behavior, target ES version, module system, and strictness settings.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Development Workflow",
        content:
          "Use Vite with React + TypeScript template or create a Node.js project. Set up VS Code with the official TypeScript extension for powerful IntelliSense, error highlighting, refactoring, and inline documentation.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "tsconfig.json Essentials",
        content:
          "Master key options like `target`, `module`, `strict`, `esModuleInterop`, `skipLibCheck`, `moduleResolution`, and `paths`. Understand how `include`, `exclude`, and `files` control which files get compiled.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Compiling and Running",
        content:
          "Use `tsc` to compile TypeScript to JavaScript. For development, leverage `ts-node`, Vite, or `tsx` for direct execution. Set up watch mode (`tsc --watch`) for automatic recompilation.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TYPE003",
    topic: "Basic Types and Type Annotations",
    notes: [
      {
        id: "001",
        title: "Core Primitive Types",
        content:
          "Master `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`, and the special `any` and `unknown` types. Understand type inference and when explicit annotations are beneficial.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Arrays, Tuples, and Objects",
        content:
          "Define typed arrays (`string[]` or `Array<string>`), fixed-length tuples, and object shapes. Learn how TypeScript handles readonly arrays and readonly properties.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Type Inference",
        content:
          "TypeScript’s powerful type inference system automatically deduces types in most cases. Learn to balance explicit typing for clarity with inference for conciseness.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Type Assertions",
        content:
          "Use `as` keyword and angle bracket syntax (`<Type>value`) when you know more about a value than TypeScript does. Use with caution and prefer proper type narrowing when possible.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TYPE004",
    topic: "Interfaces and Type Aliases",
    notes: [
      {
        id: "001",
        title: "Interfaces",
        content:
          "Interfaces define the shape of objects and can be extended and implemented. They are particularly useful for defining contracts in object-oriented programming and component props.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Type Aliases",
        content:
          "Type aliases (`type Name = ...`) create reusable type definitions. They are more flexible than interfaces for complex unions, intersections, and mapped types.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Interface vs Type Alias",
        content:
          "Understand when to use each: prefer interfaces for object shapes that may need extension, and type aliases for more complex composed types. Both can often be used interchangeably in modern TypeScript.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Declaration Merging",
        content:
          "Interfaces support declaration merging, allowing you to extend existing interfaces (including from third-party libraries) across multiple files.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TYPE005",
    topic: "Functions and Advanced Function Types",
    notes: [
      {
        id: "001",
        title: "Function Types",
        content:
          "Define function signatures with parameter types, return types, and optional/default parameters. Master arrow functions, function overloads, and rest parameters.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Callbacks and Higher-Order Functions",
        content:
          "Type callbacks, event handlers, and functions that accept or return other functions. This is essential for working with asynchronous code and modern JavaScript patterns.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "this Typing and Function Contexts",
        content:
          "Control `this` context in methods and callbacks. Use `this` parameter typing and understand how arrow functions preserve lexical `this`.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TYPE006",
    topic: "Classes and Object-Oriented Programming",
    notes: [
      {
        id: "001",
        title: "Classes and Constructors",
        content:
          "Define classes with constructors, properties, methods, getters, and setters. Leverage access modifiers (`public`, `private`, `protected`) for encapsulation.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Inheritance and Polymorphism",
        content:
          "Use `extends` for class inheritance and `implements` for interfaces. Understand method overriding and the power of polymorphism in TypeScript.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Abstract Classes and Interfaces",
        content:
          "Create abstract classes and methods to define base functionality that must be implemented by subclasses. Combine with interfaces for robust contracts.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TYPE007",
    topic: "Generics",
    notes: [
      {
        id: "001",
        title: "Introduction to Generics",
        content:
          "Generics allow creating reusable components and functions that work with multiple types while maintaining type safety. They are one of TypeScript’s most powerful features.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Generic Functions and Interfaces",
        content:
          "Build generic functions, classes, and interfaces. Master constraints (`extends`), default generic types, and utility patterns like `Partial<T>`, `Pick<T,K>`, and `Omit<T,K>`.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Generic Use Cases",
        content:
          "Apply generics to data fetching, state management, React components, and utility libraries. Learn to create type-safe reusable hooks and services.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TYPE008",
    topic: "Advanced Types",
    notes: [
      {
        id: "001",
        title: "Union and Intersection Types",
        content:
          "Combine types with `|` (union) and `&` (intersection). Master discriminated unions for elegant type narrowing in real-world scenarios.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Mapped and Conditional Types",
        content:
          "Create powerful type transformations using mapped types (`{ [K in keyof T]: ... }`) and conditional types (`T extends U ? X : Y`). These form the foundation of many advanced TypeScript patterns.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Utility Types",
        content:
          "Deep dive into built-in utilities: `Partial`, `Required`, `Readonly`, `Record`, `Pick`, `Omit`, `Exclude`, `Extract`, `NonNullable`, `ReturnType`, `Parameters`, and more.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TYPE009",
    topic: "Type Narrowing and Type Guards",
    notes: [
      {
        id: "001",
        title: "Type Guards",
        content:
          "Use `typeof`, `instanceof`, `in` operator, and custom type guard functions to narrow types safely within conditional blocks.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Discriminated Unions",
        content:
          "Design data models with discriminant properties (e.g., `kind` or `type`) to enable exhaustive checking and powerful type narrowing.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Assertion Functions",
        content:
          "Create functions that narrow types using the `asserts` keyword for cleaner error handling and validation logic.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TYPE010",
    topic: "Modules, Namespaces, and Organization",
    notes: [
      {
        id: "001",
        title: "ES Modules in TypeScript",
        content:
          "Master `import`/`export` syntax, barrel files, and module resolution. Understand `export =` and `import = require()` for CommonJS compatibility.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Namespaces",
        content:
          "Organize code using namespaces (especially useful in declaration files). Learn when to prefer modules over namespaces in modern applications.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Declaration Files (.d.ts)",
        content:
          "Create ambient type declarations for JavaScript libraries. Understand triple-slash directives and how DefinitelyTyped provides types for thousands of packages.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TYPE011",
    topic: "TypeScript with React and Modern Frameworks",
    notes: [
      {
        id: "001",
        title: "React with TypeScript",
        content:
          "Type React components, props, hooks (`useState`, `useEffect`), context, and refs. Master FC vs function components and React-specific utility types.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Integration with Next.js and Other Frameworks",
        content:
          "Leverage TypeScript’s full power in Next.js (App Router and Pages Router), including API routes, server components, and server actions.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Styled Components and Tailwind",
        content:
          "Combine TypeScript with Tailwind CSS and component libraries like shadcn/ui for fully typed, scalable styling solutions.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TYPE012",
    topic: "Configuration, Tooling, and Best Practices",
    notes: [
      {
        id: "001",
        title: "Advanced tsconfig Options",
        content:
          "Explore `strictNullChecks`, `noImplicitAny`, `exactOptionalPropertyTypes`, `incremental` compilation, and project references for large monorepos.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Linting and Formatting",
        content:
          "Set up ESLint with `@typescript-eslint`, Prettier, and Husky for consistent, high-quality code. Configure `tsc` in CI/CD pipelines.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Best Practices",
        content:
          "Prefer explicit types for public APIs, avoid `any`, use proper naming conventions, embrace immutability, and maintain a strong type culture in teams.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TYPE013",
    topic: "Performance, Testing, and Migration",
    notes: [
      {
        id: "001",
        title: "Performance Considerations",
        content:
          "Understand how TypeScript affects build times and runtime. Use type-only imports, project references, and incremental compilation for large codebases.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Testing TypeScript Code",
        content:
          "Write tests with Jest, Vitest, or Cypress while leveraging TypeScript’s type checking. Test type definitions using `dtslint` or custom test utilities.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Migrating from JavaScript",
        content:
          "Strategies for gradual migration: rename files to `.ts`, use `allowJs`, and incrementally add types. Tools like `ts-migrate` can help automate the process.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TYPE014",
    topic: "Final Project: Building a Type-Safe Full-Stack Application",
    notes: [
      {
        id: "001",
        title: "Project Planning",
        content:
          "Design a comprehensive application (e.g., task management system, e-commerce platform, or blog CMS) with strong typing across frontend, backend, and shared types.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Implementation",
        content:
          "Apply advanced TypeScript features including generics, discriminated unions, mapped types, and proper module organization throughout the stack.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Polish and Architecture",
        content:
          "Implement robust error handling, validation (Zod + TypeScript), testing, and maintain clean architecture with shared type definitions.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Deployment and Best Practices",
        content:
          "Deploy the full-stack application, set up CI/CD with type checking, and document your type system for team maintainability.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
];

export const INTERNET_WEB_CS_COURSE_OUTLINE = [
  {
    id: "INT001",
    topic: "Introduction to Computer Science and Programming",
    notes: [
      {
        id: "001",
        title: "What is Computer Science?",
        content:
          "Computer Science is the study of computers and computational systems, encompassing both theoretical foundations (algorithms, computation theory, information theory) and practical applications. It is not merely programming — it involves problem-solving, system design, data management, artificial intelligence, and understanding the limits of computation.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Programming as a Core Skill",
        content:
          "Programming is the practical application of computer science principles — writing instructions (code) that tell computers how to perform tasks. It bridges human ideas and machine execution. Languages evolve from low-level (machine code, assembly) to high-level (Python, JavaScript, Rust) to increase productivity and expressiveness.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "The Relationship Between CS and Programming",
        content:
          "Computer Science provides the 'why' and 'how' behind programming: data structures, algorithms, complexity analysis, architecture, and paradigms (imperative, functional, object-oriented, declarative). Programming applies these concepts to build real-world solutions.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Why Study This History?",
        content:
          "Understanding the history of computing, the Internet, and the Web provides crucial context for modern development. It reveals why technologies exist today, inspires innovation, and highlights recurring patterns in technological evolution.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "INT002",
    topic: "Early History of Computing (Pre-1900s to 1940s)",
    notes: [
      {
        id: "001",
        title: "Foundations of Computing",
        content:
          "From ancient abacuses and mechanical calculators (Pascal’s machine, Babbage’s Analytical Engine) to Ada Lovelace’s visionary programming concepts in the 1840s. Charles Babbage and Ada Lovelace laid theoretical groundwork for programmable machines.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "The Birth of Modern Computers",
        content:
          "World War II accelerated development: Colossus (1940s, UK) for code-breaking and ENIAC (1945, USA) — the first general-purpose electronic digital computer. These room-sized machines used vacuum tubes and introduced concepts still relevant today.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Key Innovations",
        content:
          "John von Neumann’s stored-program concept (1945) allowed instructions and data to reside in the same memory, revolutionizing computer architecture and enabling the modern computing era.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "INT003",
    topic: "The Dawn of the Digital Age (1950s–1960s)",
    notes: [
      {
        id: "001",
        title: "Transistors and Integrated Circuits",
        content:
          "The invention of the transistor (1947) and integrated circuits (1958–1959) drastically reduced size, cost, and power consumption, making computers more practical. This led to mainframe computers from IBM and others.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Programming Languages Emerge",
        content:
          "Early languages like FORTRAN (1957), COBOL (1959), and LISP (1958) made programming more accessible. The concept of high-level languages abstracted away hardware details.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Time-Sharing and Early Networks",
        content:
          "Time-sharing systems allowed multiple users to interact with one computer. ARPANET (precursor to the Internet) was conceived in the 1960s under the U.S. Department of Defense’s Advanced Research Projects Agency.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "INT004",
    topic: "Birth of the Internet (1960s–1980s)",
    notes: [
      {
        id: "001",
        title: "ARPANET and Packet Switching",
        content:
          "ARPANET launched in 1969 with the first successful message sent between UCLA and Stanford. It introduced packet switching — breaking data into packets routed independently — a foundational Internet technology invented by Paul Baran and Donald Davies.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Key Protocols and Standards",
        content:
          "Development of TCP/IP by Vint Cerf and Bob Kahn (1974–1983) created the common language for networks. On January 1, 1983, ARPANET fully adopted TCP/IP, marking the true birth of the Internet.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Expansion and Academic Networks",
        content:
          "Networks like CSNET, BITNET, and NSFNET expanded access beyond military use, connecting universities and research institutions globally.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "INT005",
    topic: "The World Wide Web Revolution (1980s–1990s)",
    notes: [
      {
        id: "001",
        title: "Tim Berners-Lee and the Web",
        content:
          "In 1989–1991 at CERN, Tim Berners-Lee invented the World Wide Web with three core technologies: HTML (markup), HTTP (transfer protocol), and URLs (addressing). The first website went live in 1991.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "From Internet to Web",
        content:
          "The Internet provided connectivity; the Web made it accessible to ordinary people through hyperlinked documents viewable in browsers. Mosaic browser (1993) popularized the Web with its graphical interface.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Commercialization and Dot-com Boom",
        content:
          "Netscape Navigator (1994), Amazon (1994), and Google (1998) marked the shift to commercial use. The mid-to-late 1990s saw explosive growth and the first dot-com bubble.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "INT006",
    topic: "Evolution of Web Technologies (1990s–2000s)",
    notes: [
      {
        id: "001",
        title: "Dynamic Web and Interactivity",
        content:
          "Introduction of CGI, JavaScript (1995 by Brendan Eich), PHP, and databases enabled dynamic content. Web 2.0 (coined 2004) brought user-generated content, AJAX, and social platforms.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Browser Wars and Standards",
        content:
          "Competition between Netscape and Internet Explorer led to the rise of web standards (W3C). CSS, DOM, and XML became critical for separation of concerns and rich applications.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Search Engines and Information Access",
        content:
          "Google’s PageRank algorithm transformed information discovery. The Web evolved from static pages to powerful platforms and ecosystems.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "INT007",
    topic: "Modern Internet and Web (2010s–Present)",
    notes: [
      {
        id: "001",
        title: "Mobile Revolution and Responsive Design",
        content:
          "Smartphones (iPhone 2007) and 4G/5G shifted the Web to mobile-first. Responsive design, Progressive Web Apps (PWAs), and frameworks like React transformed user experiences.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Cloud Computing and Web Scale",
        content:
          "AWS (2006), followed by Azure and Google Cloud, enabled massive scalability. The Internet now supports streaming (Netflix, YouTube), social media, e-commerce, and real-time collaboration at global scale.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Web3, AI, and Future Directions",
        content:
          "Emerging trends include decentralized technologies (blockchain), AI integration (ChatGPT, etc.), edge computing, and concerns around privacy, security, and ethical computing.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "INT008",
    topic: "Computer Science Fundamentals for Programmers",
    notes: [
      {
        id: "001",
        title: "Algorithms and Data Structures",
        content:
          "Core building blocks: arrays, linked lists, trees, graphs, hash tables, sorting (quicksort, mergesort), searching, and Big O notation for analyzing efficiency.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Programming Paradigms",
        content:
          "Imperative, Object-Oriented, Functional (immutability, pure functions), Declarative, and Logic programming. Modern developers often use multi-paradigm approaches.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Computational Thinking",
        content:
          "Problem decomposition, pattern recognition, abstraction, and algorithm design — essential skills that transcend any specific programming language.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "INT009",
    topic: "Key Programming Concepts Across History",
    notes: [
      {
        id: "001",
        title: "Abstraction and Layers",
        content:
          "From machine code to high-level languages and frameworks, abstraction hides complexity. Understanding layers (hardware → OS → runtime → application) helps write better software.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Memory Management and Performance",
        content:
          "Evolution from manual memory management (C) to garbage collection (Java, JavaScript) to modern systems languages (Rust). Understanding this helps optimize applications.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Concurrency and Parallelism",
        content:
          "From single-threaded execution to multi-threading, async/await, and distributed systems — critical for modern responsive and scalable applications.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "INT010",
    topic: "Ethics, Society, and the Impact of Computing",
    notes: [
      {
        id: "001",
        title: "Digital Divide and Accessibility",
        content:
          "The Internet has connected the world but also highlighted inequalities. Web accessibility standards (WCAG) ensure inclusive design.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Privacy, Security, and Responsibility",
        content:
          "From early security concerns to modern challenges like data breaches, surveillance, and AI ethics. Programmers bear responsibility for building secure, privacy-respecting systems.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Open Source and Collaboration",
        content:
          "The open web and movements like Free Software (Richard Stallman) and Open Source have accelerated innovation through global collaboration.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "INT011",
    topic: "Final Project: Building a Historical Web Timeline",
    notes: [
      {
        id: "001",
        title: "Project Planning",
        content:
          "Research and design an interactive timeline or educational website covering key milestones in computing, Internet, and Web history. Incorporate modern technologies (HTML/CSS/JS or React).",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Implementation",
        content:
          "Apply programming concepts, responsive design, interactivity, and perhaps data visualization to present historical information engagingly.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Reflection and Analysis",
        content:
          "Write a report or add a section analyzing how historical developments influence current programming practices and future trends.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Presentation and Deployment",
        content:
          "Deploy the project publicly and present key learnings about the intertwined evolution of computer science, the Internet, and the Web.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
];

export const NEXTJS_COURSE_OUTLINE = [
  {
    id: "NEXT001",
    topic: "Introduction to Next.js",
    notes: [
      {
        id: "001",
        title: "What is Next.js?",
        content:
          "Next.js is a powerful React framework created by Vercel that enables developers to build high-performance, production-ready web applications with minimal configuration. It extends React with features like server-side rendering, static site generation, API routes, file-system routing, and optimized bundling, making it the leading full-stack React framework.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Why Choose Next.js?",
        content:
          "Next.js solves many challenges of building React apps at scale: SEO-friendly rendering, lightning-fast performance, built-in optimizations, automatic code splitting, and seamless deployment. It powers some of the world’s largest websites including Vercel, Hulu, TikTok, and Netflix.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Next.js vs Create React App / Vite",
        content:
          "Unlike plain React setups, Next.js provides a complete solution with server capabilities, routing, data fetching strategies, and production optimizations out of the box, significantly reducing boilerplate and configuration overhead.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "App Router vs Pages Router",
        content:
          "Next.js 13+ introduced the App Router (built on React Server Components) as the new standard, while maintaining backward compatibility with the Pages Router. Understanding both is essential for modern development.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NEXT002",
    topic: "Setting Up a Next.js Project",
    notes: [
      {
        id: "001",
        title: "Creating a Next.js Application",
        content:
          "Initialize with `npx create-next-app@latest` (choose TypeScript, Tailwind, App Router, etc.). Explore the default project structure including `app/`, `public/`, and configuration files.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Project Configuration",
        content:
          "Master `next.config.js` for custom webpack settings, image domains, redirects, rewrites, and headers. Learn environment variables (`.env.local`) and TypeScript setup.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Development Workflow",
        content:
          "Run `npm run dev` for fast refresh and server-side features. Understand hot reloading, error overlays, and the built-in development server.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NEXT003",
    topic: "Routing in Next.js",
    notes: [
      {
        id: "001",
        title: "File-System Based Routing",
        content:
          "Next.js automatically generates routes based on the file structure. Learn dynamic routes (`[slug]`), catch-all routes (`[...slug]`), and route groups for organization.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "App Router Deep Dive",
        content:
          "Explore layouts, templates, loading states, error boundaries, and parallel routes. Master the new routing architecture built on React Server Components.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Navigation and Linking",
        content:
          "Use `<Link>` component for client-side navigation, `useRouter` hook, and programmatic navigation. Implement smooth transitions and prefetching.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Middleware and Route Handlers",
        content:
          "Create middleware for authentication, redirects, and request modification. Build API endpoints using Route Handlers in the App Router.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NEXT004",
    topic: "Data Fetching and Rendering Strategies",
    notes: [
      {
        id: "001",
        title: "Server-Side Rendering (SSR)",
        content:
          "Render pages on the server for every request using dynamic functions. Ideal for personalized or frequently updated content.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Static Site Generation (SSG)",
        content:
          "Pre-render pages at build time with `generateStaticParams` for maximum performance and SEO. Perfect for blogs, marketing sites, and documentation.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Incremental Static Regeneration (ISR)",
        content:
          "Combine static generation with on-demand revalidation. Update static pages after build without full rebuilds using `revalidate` or `revalidatePath`.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Streaming and Suspense",
        content:
          "Leverage React Suspense for progressive rendering and streaming server responses, dramatically improving perceived performance.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NEXT005",
    topic: "React Server Components (RSC)",
    notes: [
      {
        id: "001",
        title: "Understanding Server Components",
        content:
          "Server Components run on the server, reducing client bundle size and enabling direct database access without exposing secrets. They are the foundation of the App Router.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Server vs Client Components",
        content:
          "Learn when to use `'use client'` directive. Master patterns for mixing server and client components effectively.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Data Fetching in Server Components",
        content:
          "Fetch data directly inside Server Components using async/await. Benefit from automatic caching, deduplication, and streaming.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NEXT006",
    topic: "API Routes and Full-Stack Capabilities",
    notes: [
      {
        id: "001",
        title: "Route Handlers",
        content:
          "Build RESTful APIs and edge functions using file-based Route Handlers (`app/api/route.ts`). Support all HTTP methods with full request/response control.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Server Actions",
        content:
          "Progressive enhancement for forms with server-side mutations. Secure, type-safe, and integrated with React forms.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Full-Stack Patterns",
        content:
          "Combine Server Components, Server Actions, and databases (e.g., Prisma, Drizzle) to build complete applications without separate backend services.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NEXT007",
    topic: "Optimization and Performance",
    notes: [
      {
        id: "001",
        title: "Image Optimization",
        content:
          "Use the built-in `next/image` component for automatic resizing, lazy loading, modern formats (WebP/AVIF), and CDN delivery.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Font Optimization and Scripts",
        content:
          "Optimize Google Fonts and third-party scripts with `next/font` and `next/script` for better Core Web Vitals.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Caching and Revalidation",
        content:
          "Master Next.js caching layers, fetch cache, and revalidation strategies to balance freshness and performance.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NEXT008",
    topic: "Styling and UI in Next.js",
    notes: [
      {
        id: "001",
        title: "CSS and Tailwind Integration",
        content:
          "Built-in CSS Modules support, global styles, and seamless Tailwind CSS integration with excellent performance.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "CSS-in-JS and Component Libraries",
        content:
          "Best practices for styled-components, Emotion, or shadcn/ui in the Next.js ecosystem.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NEXT009",
    topic: "Authentication and Security",
    notes: [
      {
        id: "001",
        title: "Authentication Patterns",
        content:
          "Implement authentication using NextAuth.js (Auth.js), Clerk, Supabase, or custom solutions with middleware protection.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Security Best Practices",
        content:
          "Handle environment variables securely, implement CSP headers, protect API routes, and prevent common vulnerabilities like XSS and CSRF.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NEXT010",
    topic: "Internationalization (i18n) and SEO",
    notes: [
      {
        id: "001",
        title: "Internationalization",
        content:
          "Built-in i18n routing, locale detection, and content management strategies for multilingual applications.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "SEO Optimization",
        content:
          "Leverage metadata API, Open Graph tags, sitemaps, robots.txt, and structured data for excellent search engine performance.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NEXT011",
    topic: "Deployment and Production",
    notes: [
      {
        id: "001",
        title: "Deployment Platforms",
        content:
          "Deploy effortlessly to Vercel (optimized for Next.js), Netlify, AWS, or Docker. Understand edge vs serverless runtimes.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "CI/CD and Monitoring",
        content:
          "Set up continuous integration, preview deployments, environment variables, and monitoring with Vercel Analytics or Sentry.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NEXT012",
    topic: "Advanced Next.js Patterns",
    notes: [
      {
        id: "001",
        title: "Parallel Routes and Intercepting Routes",
        content:
          "Build advanced layouts like modals, dashboards, and tab interfaces using parallel and intercepting routes.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Partial Prerendering",
        content:
          "Next.js 15+ feature combining static and dynamic rendering for optimal performance and freshness.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Monorepos and Turbopack",
        content:
          "Scale with Turborepo and explore Turbopack as the next-generation bundler.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NEXT013",
    topic: "Testing and Best Practices",
    notes: [
      {
        id: "001",
        title: "Testing Next.js Applications",
        content:
          "Test Server Components, Server Actions, API routes, and full pages using Jest, Vitest, React Testing Library, and Playwright.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Performance Auditing",
        content:
          "Use Lighthouse, Next.js bundle analyzer, and Vercel Speed Insights to maintain excellent performance.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NEXT014",
    topic: "Final Project: Full-Stack Next.js Application",
    notes: [
      {
        id: "001",
        title: "Project Planning",
        content:
          "Build a production-grade application (e.g., SaaS dashboard, e-commerce platform, blog with CMS, or social platform) using the App Router.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Implementation",
        content:
          "Apply Server Components, Server Actions, advanced routing, authentication, data fetching strategies, and optimizations.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Polish and Optimization",
        content:
          "Implement SEO, i18n, performance tuning, testing, and accessibility for a complete production experience.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Deployment",
        content:
          "Deploy to Vercel with custom domain, environment variables, analytics, and monitoring. Prepare for real-world scaling.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
];

export const NODE_EXPRESS_COURSE_OUTLINE = [
  {
    id: "NDEX001",
    topic: "Introduction to Node.js",
    notes: [
      {
        id: "001",
        title: "What is Node.js?",
        content:
          "Node.js is a powerful, open-source, cross-platform JavaScript runtime environment built on Chrome's high-performance V8 engine. It enables developers to execute JavaScript code on the server side, allowing for full-stack JavaScript development with a single language across frontend and backend. Released in 2009 by Ryan Dahl, Node.js introduced a revolutionary non-blocking, event-driven architecture that transformed backend development.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Why Use Node.js?",
        content:
          "Node.js shines in building highly scalable, high-performance applications, especially those involving heavy I/O operations such as APIs, real-time applications, microservices, and streaming services. Its single-threaded, asynchronous model allows it to handle thousands of concurrent connections efficiently. Major companies like Netflix, LinkedIn, PayPal, Uber, and NASA have adopted Node.js for its speed, developer productivity, and vibrant ecosystem.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Node.js Architecture",
        content:
          "At its core, Node.js uses the event loop (managed by libuv) to handle asynchronous operations without blocking the main thread. The V8 engine compiles JavaScript into machine code, while libuv provides the cross-platform abstraction for file system, networking, and threading. Understanding this architecture is crucial for writing performant and scalable applications.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Node.js Use Cases",
        content:
          "Node.js is ideal for RESTful and GraphQL APIs, real-time applications (chat, collaboration tools), command-line interfaces (CLI tools), desktop applications via Electron, IoT systems, serverless functions, and even machine learning with TensorFlow.js. Its vast npm ecosystem accelerates development significantly.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NDEX002",
    topic: "Setting Up Node.js Environment",
    notes: [
      {
        id: "001",
        title: "Installation and Version Management",
        content:
          "Install Node.js from the official website (nodejs.org) or better yet, use a version manager like nvm, fnm, or Volta to easily switch between versions. Always prefer LTS (Long Term Support) versions for production environments due to their stability and extended security updates.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Core Concepts and REPL",
        content:
          "Familiarize yourself with the Node.js REPL (Read-Eval-Print Loop) for quick testing and experimentation. Explore global objects such as `process`, `console`, `global`, and important environment variables like `NODE_ENV` that control application behavior.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Package Management with npm",
        content:
          "Master the `package.json` file, semantic versioning, scripts, and dependency management. Learn the differences between `dependencies` and `devDependencies`, and explore faster alternatives like Yarn and pnpm for large projects.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NDEX003",
    topic: "Node.js Modules and Module System",
    notes: [
      {
        id: "001",
        title: "CommonJS vs ES Modules",
        content:
          "Understand the traditional CommonJS system (`require()` and `module.exports`) and the modern ES Modules (`import/export`). Learn how to configure ES Modules using the `type: module` field or `.mjs` extensions, which is becoming the standard in modern Node.js development.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Built-in Core Modules",
        content:
          "Deep dive into essential built-in modules including `fs` (filesystem), `path` (cross-platform paths), `os` (operating system info), `events` (EventEmitter), `http`, `crypto`, `stream`, and `buffer`. These form the foundation of most Node.js applications.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Creating and Publishing Modules",
        content:
          "Learn to create well-structured, reusable modules with proper exports, documentation, and testing. Understand npm publishing workflow and best practices for maintaining open-source packages.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NDEX004",
    topic: "Asynchronous Programming in Node.js",
    notes: [
      {
        id: "001",
        title: "Callbacks and Callback Hell",
        content:
          "Explore the callback pattern that powers Node.js asynchronous operations. Learn the error-first callback convention and recognize the pitfalls of nested callbacks (callback hell) that led to the development of better patterns.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Promises and Async/Await",
        content:
          "Master modern asynchronous programming using Promises and the elegant `async/await` syntax. Learn promise chaining, parallel execution with `Promise.all()`, error handling patterns, and how async/await dramatically improves code readability.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Event Loop Deep Dive",
        content:
          "Gain a thorough understanding of the event loop phases, microtasks vs macrotasks, and how Node.js achieves high concurrency. This knowledge is essential for debugging performance issues and avoiding blocking the main thread.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NDEX005",
    topic: "File System, Streams, and Buffers",
    notes: [
      {
        id: "001",
        title: "File System Operations",
        content:
          "Work with the `fs` module for reading, writing, appending, and managing files and directories. Compare synchronous vs asynchronous methods and learn to use the modern `fs/promises` API for cleaner async code.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Streams",
        content:
          "Master the Streams API — one of Node.js’s most powerful features. Learn Readable, Writable, Duplex, and Transform streams for efficiently handling large files, network data, and real-time processing.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Buffers and Binary Data",
        content:
          "Understand how Node.js handles binary data using Buffers. Learn encoding/decoding, working with raw bytes, and when to use Buffers versus strings in performance-critical operations.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NDEX006",
    topic: "Building HTTP Servers with Core Node.js",
    notes: [
      {
        id: "001",
        title: "Creating a Basic HTTP Server",
        content:
          "Build a web server from scratch using the built-in `http` module. Learn to handle incoming requests, send appropriate responses, and understand the structure of HTTP request and response objects.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Routing and Request Handling",
        content:
          "Implement manual routing logic, parse URLs, handle different HTTP methods, and manage query parameters and request bodies. This foundation helps appreciate the convenience of frameworks like Express.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NDEX007",
    topic: "Introduction to Express.js",
    notes: [
      {
        id: "001",
        title: "What is Express.js?",
        content:
          "Express.js is the most popular, minimalist, and flexible web framework for Node.js. It provides a thin layer of fundamental web application features without imposing rigid structures, giving developers freedom while simplifying common tasks.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Why Express?",
        content:
          "Express dramatically speeds up API and web application development with its robust routing system, middleware ecosystem, and extensive community support. It remains the de facto standard for building backend services in the Node.js ecosystem.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Setting Up Express",
        content:
          "Initialize an Express application, configure the server, integrate environment variables using `dotenv`, and establish a solid project structure for scalability.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NDEX008",
    topic: "Express Routing and Middleware",
    notes: [
      {
        id: "001",
        title: "Routing Fundamentals",
        content:
          "Define clean, maintainable routes using HTTP verbs. Master route parameters, query strings, and advanced routing patterns for building complex APIs.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Middleware",
        content:
          "Understand middleware as the backbone of Express. Learn to use built-in middleware, popular third-party packages (cors, helmet, morgan, express-validator), and create custom middleware for authentication, logging, and error handling.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Advanced Routing",
        content:
          "Organize routes using the Express Router for modular, maintainable code. Implement route-level and application-level middleware effectively.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NDEX009",
    topic: "Request and Response Handling",
    notes: [
      {
        id: "001",
        title: "Request Object",
        content:
          "Deeply explore the `req` object — accessing headers, body data (with middleware), cookies, user authentication info, and more for building intelligent request processing.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Response Object",
        content:
          "Master response methods like `res.json()`, `res.send()`, `res.status()`, `res.cookie()`, and `res.download()` to craft appropriate HTTP responses with correct status codes and headers.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Error Handling Middleware",
        content:
          "Implement centralized error handling using custom error classes and dedicated error middleware. Create consistent, user-friendly error responses across your application.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NDEX010",
    topic: "Templating Engines and Static Files",
    notes: [
      {
        id: "001",
        title: "Static File Serving",
        content:
          "Efficiently serve static assets (CSS, JavaScript, images) using `express.static()`. Learn caching strategies and security considerations for production.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "View Engines",
        content:
          "Integrate server-side templating engines like EJS, Pug, or Handlebars. Understand when to use server-rendered views versus modern frontend frameworks like React with Next.js.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NDEX011",
    topic: "Databases and Data Persistence",
    notes: [
      {
        id: "001",
        title: "Connecting to Databases",
        content:
          "Connect to MongoDB using Mongoose ODM, PostgreSQL with Prisma or Sequelize, and understand trade-offs between SQL and NoSQL databases for different use cases.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "ORMs and Query Builders",
        content:
          "Leverage modern tools like Prisma (type-safe) or Drizzle ORM for elegant database interactions while maintaining performance and developer experience.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Data Validation",
        content:
          "Implement robust input validation and sanitization using Zod, Joi, or express-validator to protect your application from malicious data.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NDEX012",
    topic: "Authentication and Security",
    notes: [
      {
        id: "001",
        title: "Authentication Strategies",
        content:
          "Implement secure authentication using JWTs, session-based auth, OAuth2 with Passport.js, or modern solutions like Auth.js (formerly NextAuth).",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "001",
        title: "Security Best Practices",
        content:
          "Apply essential security measures using Helmet, rate limiting, CORS configuration, input sanitization, and follow OWASP guidelines to protect against common web vulnerabilities.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NDEX013",
    topic: "Testing and Debugging",
    notes: [
      {
        id: "001",
        title: "Testing Node.js and Express Apps",
        content:
          "Write comprehensive tests using Jest or Vitest for unit testing, Supertest for API integration testing, and tools like Playwright for end-to-end testing.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Debugging Techniques",
        content:
          "Master debugging with VS Code, Node.js inspector, structured logging (Winston or Pino), and error tracking platforms like Sentry for production monitoring.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NDEX014",
    topic: "Performance, Scaling, and Production",
    notes: [
      {
        id: "001",
        title: "Performance Optimization",
        content:
          "Implement clustering, use PM2 for process management, integrate Redis caching, and optimize database queries to achieve maximum throughput.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Deployment",
        content:
          "Deploy applications to platforms like Render, Railway, Vercel, AWS, or Docker containers. Master environment configuration and CI/CD pipeline integration.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Monitoring and Logging",
        content:
          "Set up comprehensive logging, health check endpoints, and application performance monitoring to ensure reliability in production environments.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NDEX015",
    topic: "Advanced Topics and Modern Practices",
    notes: [
      {
        id: "001",
        title: "REST vs GraphQL",
        content:
          "Build sophisticated REST APIs with Express and explore GraphQL implementation using Apollo Server or Yoga for more flexible data querying.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Real-time Applications",
        content:
          "Integrate WebSockets using Socket.io or the native WebSocket API to build real-time features like chat systems and live updates.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Architecture Patterns",
        content:
          "Apply modern architecture patterns such as MVC, Clean Architecture, Hexagonal Architecture, and microservices when building large-scale Node.js applications.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NDEX016",
    topic: "Final Project: Full-Stack REST API",
    notes: [
      {
        id: "001",
        title: "Project Planning",
        content:
          "Design a complete backend system (e.g., advanced Blog API, E-commerce backend, or Social Media platform) with authentication, authorization, file uploads, and complex business logic.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Implementation",
        content:
          "Build production-grade features including robust routing, middleware layers, database integration, validation, error handling, and comprehensive test coverage.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Polish and Optimization",
        content:
          "Add API documentation using Swagger/OpenAPI, implement rate limiting and security headers, optimize performance, and ensure thorough testing.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Deployment",
        content:
          "Deploy the API to a cloud platform, connect to a production database, configure CI/CD, set up monitoring, and prepare the application for real-world usage.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
];

export const NESTJS_COURSE_OUTLINE = [
  {
    id: "NEST001",
    topic: "Introduction to Nest.js",
    notes: [
      {
        id: "001",
        title: "What is Nest.js?",
        content:
          "Nest.js is a progressive, TypeScript-first Node.js framework for building efficient, scalable, and maintainable server-side applications. Heavily inspired by Angular's architecture, it combines the best of OOP (Object-Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming). Built on top of Express (or Fastify), Nest.js provides a powerful abstraction layer while preserving compatibility with the underlying HTTP server libraries.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Why Choose Nest.js?",
        content:
          "Nest.js excels in enterprise-grade applications due to its modular architecture, excellent TypeScript support, built-in Dependency Injection, and powerful CLI. It promotes clean, testable, and scalable code organization. Companies like Adidas, Roche, and many startups use Nest.js for its structure, performance, and developer experience.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Nest.js vs Express.js",
        content:
          "While Express is minimalist and unopinionated, Nest.js provides a full-featured, opinionated structure with decorators, modules, and enterprise patterns. It solves many architectural challenges in large codebases while still allowing direct access to the underlying Express or Fastify instance when needed.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Core Philosophy and Architecture",
        content:
          "Nest.js follows a modular, decorator-driven approach similar to Angular. Everything revolves around Modules, Controllers, Providers, and powerful metadata reflection via decorators.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NEST002",
    topic: "Setting Up Nest.js Environment",
    notes: [
      {
        id: "001",
        title: "Installation and Project Setup",
        content:
          "Create a new project using the official Nest CLI: `npx nest new project-name`. The CLI scaffolds a complete, production-ready structure with TypeScript, ESLint, Prettier, and testing configured out of the box.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Project Structure and Best Practices",
        content:
          "Explore the default structure and learn domain-driven or feature-based organization for scalability. Understand `src/`, `test/`, configuration files, and recommended folder patterns for large applications.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Nest CLI Mastery",
        content:
          "Master the powerful Nest CLI for generating modules, controllers, services, guards, interceptors, and more. Learn how it automates boilerplate and maintains consistency.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NEST003",
    topic: "Core Building Blocks",
    notes: [
      {
        id: "001",
        title: "Modules",
        content:
          "Modules are the foundation of Nest.js applications. Learn to organize code using `@Module()` decorators, imports, exports, providers, and controllers. Understand feature modules, shared modules, and global modules.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Controllers",
        content:
          "Controllers handle incoming HTTP requests and return responses. Master route decorators (`@Get()`, `@Post()`, etc.), route parameters, query strings, and request payloads.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Providers and Services",
        content:
          "Providers (typically services) contain business logic. Understand the `@Injectable()` decorator and how providers are registered and injected across the application.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NEST004",
    topic: "Dependency Injection",
    notes: [
      {
        id: "001",
        title: "Understanding DI in Nest.js",
        content:
          "Nest.js has a powerful, Angular-inspired Dependency Injection system that manages class instantiation and resolves dependencies automatically. Learn constructor injection, custom providers, tokens, and scopes (Transient, Request, Default).",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Advanced DI Patterns",
        content:
          "Master dynamic modules, async providers, circular dependencies, and custom injection tokens for flexible and testable architectures.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NEST005",
    topic: "Routing, Request Handling, and DTOs",
    notes: [
      {
        id: "001",
        title: "Advanced Routing",
        content:
          "Build clean, RESTful APIs using route decorators, route prefixes, and versioned APIs. Learn parameter decorators (`@Param()`, `@Query()`, `@Body()`, `@Headers()`).",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Data Transfer Objects (DTOs)",
        content:
          "Create strongly-typed DTOs with class-validator and class-transformer for input validation, transformation, and sanitization.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Pipes",
        content:
          "Use built-in and custom pipes for data transformation and validation. Master `ValidationPipe` for global validation and create custom pipes for specific business rules.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NEST006",
    topic: "Middleware, Interceptors, and Exception Handling",
    notes: [
      {
        id: "001",
        title: "Middleware",
        content:
          "Implement Express-style middleware and Nest-specific middleware. Learn execution order and when to use middleware vs. interceptors.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Interceptors",
        content:
          "Transform responses, add logging, handle timeouts, and implement caching using interceptors. Understand the execution flow around handlers.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Exception Filters",
        content:
          "Create custom exception filters to handle errors gracefully and return consistent, user-friendly error responses. Learn built-in exceptions and global error handling.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NEST007",
    topic: "Guards and Authorization",
    notes: [
      {
        id: "001",
        title: "Guards",
        content:
          "Implement authorization logic using Guards. Learn to protect routes based on roles, permissions, JWT tokens, or custom business rules.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Authentication Strategies",
        content:
          "Integrate Passport.js strategies (JWT, Local, OAuth) with Nest.js. Build secure authentication systems using `@nestjs/passport` and `@nestjs/jwt`.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NEST008",
    topic: "Database Integration",
    notes: [
      {
        id: "001",
        title: "TypeORM and Prisma",
        content:
          "Connect to databases using TypeORM (with decorators) or Prisma (type-safe queries). Master repositories, entities, migrations, and relations.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Mongoose for MongoDB",
        content:
          "Build NoSQL solutions with Mongoose schemas, models, and integration via `@nestjs/mongoose`.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Repository Pattern and Custom Providers",
        content:
          "Implement clean data access layers using the Repository pattern and abstract database operations.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NEST009",
    topic: "Configuration, Validation, and Logging",
    notes: [
      {
        id: "001",
        title: "Configuration Management",
        content:
          "Use `@nestjs/config` for environment-based configuration with validation using Joi or Zod.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Logging and Debugging",
        content:
          "Implement structured logging with built-in Logger or integrate Pino/Winston for production-grade observability.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NEST010",
    topic: "Testing in Nest.js",
    notes: [
      {
        id: "001",
        title: "Unit and Integration Testing",
        content:
          "Write comprehensive tests using Jest. Test services, controllers, and custom decorators with Nest's testing utilities.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "End-to-End (E2E) Testing",
        content:
          "Perform full application testing with Supertest and Nest's E2E testing module.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NEST011",
    topic: "Advanced Features",
    notes: [
      {
        id: "001",
        title: "GraphQL with Nest.js",
        content:
          "Build modern GraphQL APIs using `@nestjs/graphql`, Code First or Schema First approaches, and integrations with Apollo.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "WebSockets and Microservices",
        content:
          "Implement real-time features with WebSockets and build distributed systems using microservices architecture (TCP, Redis, MQTT, Kafka).",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "CQRS and Event Sourcing",
        content:
          "Explore advanced architectural patterns using `@nestjs/cqrs` for complex business domains.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NEST012",
    topic: "Performance, Security, and Production",
    notes: [
      {
        id: "001",
        title: "Performance Optimization",
        content:
          "Optimize Nest.js applications with Fastify adapter, caching, request compression, and proper database indexing.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Security Best Practices",
        content:
          "Implement Helmet, rate limiting, CORS, class-validator sanitization, and follow security checklists for production deployment.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Deployment Strategies",
        content:
          "Deploy to Vercel, Render, AWS, Docker, and Kubernetes. Learn about PM2, Dockerization, and CI/CD pipelines.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NEST013",
    topic: "Best Practices and Architecture",
    notes: [
      {
        id: "001",
        title: "Clean Architecture in Nest.js",
        content:
          "Apply Domain-Driven Design, Clean Architecture, and Hexagonal principles to build maintainable, scalable applications.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Monorepos with Nx",
        content:
          "Scale large applications using Nx workspace for monorepos with multiple Nest.js apps and libraries.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "NEST014",
    topic: "Final Project: Enterprise-Grade Application",
    notes: [
      {
        id: "001",
        title: "Project Planning",
        content:
          "Design a comprehensive full-stack application (e.g., SaaS platform, E-commerce system, or Task Management tool) with authentication, authorization, multiple modules, and advanced features.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Implementation",
        content:
          "Apply modular architecture, Dependency Injection, validation, security, database integration, and testing throughout the project.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Advanced Features & Polish",
        content:
          "Implement GraphQL or WebSockets, CQRS if applicable, comprehensive testing, logging, and error handling.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Deployment and Documentation",
        content:
          "Deploy the application, add OpenAPI (Swagger) documentation, set up CI/CD, and prepare production monitoring and scaling strategies.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
];

export const DEVOPS_COURSE_OUTLINE = [
  {
    id: "DEVOPS001",
    topic: "Introduction to DevOps",
    notes: [
      {
        id: "001",
        title: "What is DevOps?",
        content:
          "DevOps is a cultural and technical movement that bridges Development and Operations teams to deliver software faster, more reliably, and with higher quality. It emphasizes collaboration, automation, continuous integration, continuous delivery, and a strong feedback loop throughout the software development lifecycle.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "DevOps Principles and Values",
        content:
          "The CALMS framework (Culture, Automation, Lean, Measurement, Sharing) guides DevOps practices. Key values include shared responsibility, customer focus, and embracing failure as a learning opportunity through blameless post-mortems.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "DevOps vs Traditional IT",
        content:
          "Traditional silos between development and operations often lead to delays, finger-pointing, and fragile releases. DevOps breaks these barriers, enabling smaller, more frequent deployments with reduced risk and faster time-to-market.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Benefits and Challenges",
        content:
          "Organizations adopting DevOps see improved deployment frequency, reduced lead time, lower change failure rates, and faster recovery (as per the State of DevOps Report). Challenges include cultural resistance, tool overload, and skill gaps.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "DEVOPS002",
    topic: "Version Control and Collaboration",
    notes: [
      {
        id: "001",
        title: "Git Fundamentals",
        content:
          "Master branching strategies (GitHub Flow, Git Flow), pull requests, code reviews, and collaborative workflows. Understand rebasing, merging, and maintaining a clean commit history.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Advanced Git Workflows",
        content:
          "Implement trunk-based development, feature flags, and monorepo strategies. Learn to handle large repositories and enforce contribution guidelines.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Repository Hosting and CI Integration",
        content:
          "Work with GitHub, GitLab, or Bitbucket. Set up webhooks, protected branches, and automated checks for quality gates.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "DEVOPS003",
    topic: "Continuous Integration (CI)",
    notes: [
      {
        id: "001",
        title: "CI Concepts and Benefits",
        content:
          "Continuous Integration involves frequently integrating code changes into a shared repository, followed by automated builds and tests. This practice catches bugs early and improves code quality.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "CI Tools and Platforms",
        content:
          "Master Jenkins, GitHub Actions, GitLab CI/CD, CircleCI, and Azure DevOps Pipelines. Learn pipeline-as-code approaches.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Automated Testing in CI",
        content:
          "Implement unit, integration, contract, and static code analysis in pipelines. Achieve fast feedback loops with parallel test execution.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "DEVOPS004",
    topic: "Containerization with Docker",
    notes: [
      {
        id: "001",
        title: "Docker Fundamentals",
        content:
          "Understand containers vs virtual machines, Docker architecture (client, daemon, images, containers), and core commands for building and running containers.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Dockerfile Best Practices",
        content:
          "Write efficient, secure, and layered Dockerfiles. Use multi-stage builds, .dockerignore, and minimize image sizes for faster deployments.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Docker Compose and Multi-Container Apps",
        content:
          "Orchestrate local development environments with Docker Compose for complex applications involving databases, caches, and services.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "DEVOPS005",
    topic: "Container Orchestration with Kubernetes",
    notes: [
      {
        id: "001",
        title: "Kubernetes Architecture",
        content:
          "Master core concepts: Pods, Deployments, Services, ConfigMaps, Secrets, Volumes, and the control plane vs worker nodes.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Deploying Applications on Kubernetes",
        content:
          "Create manifests for Deployments, Services, Ingress, and Horizontal Pod Autoscalers. Understand rolling updates and canary deployments.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Advanced Kubernetes Features",
        content:
          "Explore Helm for package management, Operators, Custom Resource Definitions (CRDs), and service meshes (Istio) for observability and traffic management.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "DEVOPS006",
    topic: "Infrastructure as Code (IaC)",
    notes: [
      {
        id: "001",
        title: "IaC Principles",
        content:
          "Treat infrastructure like software: versioned, tested, and reproducible. Benefits include consistency, auditability, and faster provisioning.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Terraform Mastery",
        content:
          "Write declarative infrastructure code with Terraform. Master modules, state management, workspaces, and integration with cloud providers.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Alternative IaC Tools",
        content:
          "Compare Terraform with AWS CloudFormation, Pulumi, Ansible, and Crossplane. Understand mutable vs immutable infrastructure approaches.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "DEVOPS007",
    topic: "Continuous Delivery and Deployment (CD)",
    notes: [
      {
        id: "001",
        title: "CD Pipelines",
        content:
          "Design robust pipelines that automate building, testing, and deploying applications. Implement blue-green, canary, and rolling deployment strategies.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Feature Flags and Progressive Delivery",
        content:
          "Use tools like LaunchDarkly or Unleash to decouple deployment from release, enabling safe experimentation and targeted rollouts.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Deployment Automation",
        content:
          "Automate deployments to Kubernetes, serverless platforms, and traditional VMs with zero-downtime strategies.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "DEVOPS008",
    topic: "Cloud Computing and Platforms",
    notes: [
      {
        id: "001",
        title: "Cloud Fundamentals",
        content:
          "Understand IaaS, PaaS, SaaS, and serverless models. Explore major providers: AWS, Azure, Google Cloud, and their core services.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Cloud-Native Architecture",
        content:
          "Design applications using microservices, managed services, serverless functions (Lambda, Cloud Functions), and event-driven patterns.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Cost Optimization and Governance",
        content:
          "Implement tagging strategies, budgeting, and FinOps practices to control cloud spending while maintaining security and compliance.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "DEVOPS009",
    topic: "Monitoring, Logging, and Observability",
    notes: [
      {
        id: "001",
        title: "Observability Principles",
        content:
          "Go beyond monitoring to achieve full observability with metrics, logs, and traces (the three pillars). Understand the importance of context and correlation.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Tools and Platforms",
        content:
          "Implement Prometheus + Grafana for metrics, ELK/EFK stack or Loki for logs, Jaeger or Tempo for distributed tracing.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Alerting and Incident Response",
        content:
          "Set up intelligent alerting, on-call rotations, and incident management processes using tools like PagerDuty or Opsgenie.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "DEVOPS010",
    topic: "Configuration Management and Security",
    notes: [
      {
        id: "001",
        title: "Configuration Management",
        content:
          "Use Ansible for configuration management and orchestration. Understand idempotency and declarative vs imperative approaches.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "DevSecOps and Security Practices",
        content:
          "Integrate security into the pipeline: SAST, DAST, dependency scanning, container image scanning (Trivy), and infrastructure security (Checkov, tfsec).",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Secrets Management",
        content:
          "Securely manage credentials using HashiCorp Vault, AWS Secrets Manager, or Kubernetes Secrets with proper encryption and rotation policies.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "DEVOPS011",
    topic: "Testing Strategies in DevOps",
    notes: [
      {
        id: "001",
        title: "Automated Testing Pyramid",
        content:
          "Build comprehensive test suites covering unit, integration, contract (Pact), performance, chaos, and end-to-end tests.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Shift-Left Testing",
        content:
          "Incorporate quality gates early in the development process to prevent defects from reaching production.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "DEVOPS012",
    topic: "DevOps Culture, Team Topologies, and Best Practices",
    notes: [
      {
        id: "001",
        title: "Building DevOps Culture",
        content:
          "Foster psychological safety, blameless culture, and cross-functional collaboration. Implement practices like mob programming and inner sourcing.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Team Topologies",
        content:
          "Design effective team structures (Stream-aligned, Platform, Enabling, Complicated-subsystem teams) to optimize flow and cognitive load.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "DevOps Metrics and DORA",
        content:
          "Measure success using DORA metrics: Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "DEVOPS013",
    topic: "Final Project: End-to-End DevOps Pipeline",
    notes: [
      {
        id: "001",
        title: "Project Planning",
        content:
          "Design and implement a complete CI/CD pipeline for a sample microservices or full-stack application, including IaC, containerization, orchestration, monitoring, and security scanning.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Implementation",
        content:
          "Build infrastructure with Terraform, containerize with Docker, orchestrate with Kubernetes, and automate deployment using GitHub Actions or GitLab CI.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Observability and Optimization",
        content:
          "Add comprehensive monitoring, logging, alerting, and performance tuning. Implement chaos engineering experiments.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Documentation and Presentation",
        content:
          "Document the architecture, create runbooks, and present the project highlighting automation, reliability, and scalability achieved.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
];

export const CI_CD_COURSE_OUTLINE = [
  {
    id: "CICD001",
    topic: "Introduction to CI/CD and Modern Delivery Practices",
    notes: [
      {
        id: "001",
        title: "What is CI/CD?",
        content:
          "Continuous Integration (CI) and Continuous Delivery/Deployment (CD) are practices that automate the software delivery process. CI involves frequently integrating code changes with automated builds and tests, while CD extends this to reliably release software to production. Together, they enable faster, safer, and more frequent deployments.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Evolution of CI/CD Tools",
        content:
          "From Jenkins (the pioneer) to cloud-native solutions like GitHub Actions, GitLab CI/CD, CircleCI, and Azure DevOps. Modern pipelines emphasize declarative syntax, pipeline-as-code, scalability, and integration with cloud platforms.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Benefits and Key Metrics",
        content:
          "Adopting robust CI/CD reduces lead time, increases deployment frequency, lowers change failure rates, and improves mean time to recovery (DORA metrics). It fosters collaboration and shifts quality left.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Pipeline-as-Code Philosophy",
        content:
          "Treating pipelines as version-controlled code (stored alongside application code) brings reproducibility, auditability, reviewability, and versioning to infrastructure and delivery processes.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "CICD002",
    topic: "Jenkins - The Classic CI/CD Powerhouse",
    notes: [
      {
        id: "001",
        title: "Jenkins Fundamentals",
        content:
          "Jenkins is an open-source automation server that provides hundreds of plugins for building, deploying, and automating projects. It supports both freestyle and declarative pipelines.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Pipeline as Code with Jenkinsfile",
        content:
          "Master Declarative and Scripted Pipelines using Groovy syntax. Learn stages, steps, post actions, and environment directives for robust pipeline definition.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Jenkins Architecture and Scaling",
        content:
          "Understand master-agent architecture, distributed builds, and scaling with Kubernetes. Configure shared libraries for reusable pipeline components.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Jenkins Best Practices",
        content:
          "Implement security (Role-Based Access, credentials), pipeline optimization, Blue Ocean UI, and integration with Docker, Kubernetes, and artifact repositories.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "CICD003",
    topic: "GitHub Actions - Developer-Friendly Workflows",
    notes: [
      {
        id: "001",
        title: "GitHub Actions Core Concepts",
        content:
          "GitHub Actions is a powerful CI/CD platform deeply integrated into GitHub. It uses YAML workflows triggered by events, with jobs running on runners (GitHub-hosted or self-hosted).",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Workflow Syntax and Structure",
        content:
          "Master triggers (on:), jobs, steps, actions from the GitHub Marketplace, expressions, contexts, and secrets management. Build complex matrices for multi-platform testing.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Advanced GitHub Actions Patterns",
        content:
          "Reusable workflows, composite actions, caching strategies, environment protection rules, and deployment workflows with GitHub Environments.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Security and Best Practices",
        content:
          "Secure workflows with least-privilege permissions, OIDC for cloud authentication, and dependency review. Optimize for speed and cost.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "CICD004",
    topic: "GitLab CI/CD - All-in-One DevOps Platform",
    notes: [
      {
        id: "001",
        title: "GitLab CI/CD Overview",
        content:
          "GitLab CI/CD is tightly integrated into the GitLab platform, offering Auto DevOps, comprehensive pipeline visualization, and built-in security scanning.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: ".gitlab-ci.yml Deep Dive",
        content:
          "Learn pipeline stages, jobs, rules, includes, templates, and variables. Master child pipelines, multi-project pipelines, and dynamic child pipelines.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Advanced GitLab Features",
        content:
          "Implement Auto DevOps, environments, deployment safety, directed acyclic graphs (DAG) for parallel jobs, and GitLab Runner architecture.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Enterprise GitLab CI/CD",
        content:
          "Use compliance pipelines, protected environments, and advanced security features like SAST, DAST, dependency scanning, and container scanning.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "CICD005",
    topic: "CircleCI - Cloud-Native CI/CD",
    notes: [
      {
        id: "001",
        title: "CircleCI Fundamentals",
        content:
          "CircleCI is a cloud-first CI/CD platform known for speed, Docker support, and excellent developer experience. It offers both cloud and self-hosted options.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "CircleCI Configuration (config.yml)",
        content:
          "Master orbs (reusable packages), executors (Docker, machine, Windows), jobs, workflows, and caching strategies for optimal performance.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Advanced CircleCI Patterns",
        content:
          "Implement dynamic configuration, pipeline parameters, continuation orbs, and test splitting for parallel execution.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "CICD006",
    topic: "Azure DevOps Pipelines - Enterprise CI/CD",
    notes: [
      {
        id: "001",
        title: "Azure Pipelines Overview",
        content:
          "Azure Pipelines is part of Azure DevOps Services, offering unlimited CI/CD minutes for open source and deep integration with Azure cloud services.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "YAML Pipelines and Classic Editor",
        content:
          "Write modern YAML pipelines and understand classic visual designer pipelines. Learn stages, jobs, tasks, templates, and variables.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Azure-Specific Integrations",
        content:
          "Deploy seamlessly to Azure services (App Service, Kubernetes, Functions) using service connections, ARM templates, and Bicep.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "CICD007",
    topic: "Pipeline-as-Code Best Practices",
    notes: [
      {
        id: "001",
        title: "Declarative vs Imperative Pipelines",
        content:
          "Compare declarative approaches (most modern tools) with imperative scripting. Understand when to use each for maintainability.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Reusable Components and Templating",
        content:
          "Create shared libraries (Jenkins), orbs (CircleCI), reusable workflows (GitHub), includes/templates (GitLab), and YAML templates (Azure).",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Pipeline Security and Compliance",
        content:
          "Implement signed commits, code signing, supply chain security (SLSA), and policy-as-code for pipelines.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "CICD008",
    topic: "Comparative Analysis and Tool Selection",
    notes: [
      {
        id: "001",
        title: "Choosing the Right Tool",
        content:
          "Compare Jenkins (flexibility), GitHub Actions (ease), GitLab CI (integration), CircleCI (speed), and Azure DevOps (enterprise features) based on team size, tech stack, and requirements.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Hybrid and Multi-Tool Strategies",
        content:
          "Learn when to combine tools (e.g., GitHub Actions + Jenkins agents) and strategies for migrating between CI/CD platforms.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "CICD009",
    topic: "Advanced CI/CD Topics",
    notes: [
      {
        id: "001",
        title: "Multi-Stage and Progressive Deployments",
        content:
          "Implement blue-green, canary, and feature-flag-driven deployments with proper rollback mechanisms.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Observability in Pipelines",
        content:
          "Add pipeline analytics, tracing, and monitoring to understand build performance and failures.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Infrastructure as Code in Pipelines",
        content:
          "Integrate Terraform, Pulumi, or Crossplane into CI/CD for full GitOps workflows.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "CICD010",
    topic: "Best Practices, Security, and DevSecOps",
    notes: [
      {
        id: "001",
        title: "DevSecOps Integration",
        content:
          "Shift security left with automated SAST, DAST, SCA, and IaC scanning in every pipeline.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Performance and Cost Optimization",
        content:
          "Implement caching, parallelization, self-hosted runners, and spot instances to reduce build times and costs.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Compliance and Governance",
        content:
          "Enforce branch protection, required approvals, audit logs, and policy enforcement across pipelines.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "CICD011",
    topic: "Final Project: Multi-Tool CI/CD Implementation",
    notes: [
      {
        id: "001",
        title: "Project Planning",
        content:
          "Design a complete CI/CD strategy for a full-stack or microservices application, incorporating multiple tools and pipeline-as-code principles.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Implementation",
        content:
          "Build production-grade pipelines using GitHub Actions or GitLab CI for core workflows, with Jenkins or Azure for specialized needs, including Docker, Kubernetes, and IaC.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Advanced Features & Optimization",
        content:
          "Add security scanning, multi-environment deployments, monitoring, and automated rollback capabilities.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Documentation and Presentation",
        content:
          "Document architecture decisions, create a migration guide between tools, and present performance metrics and lessons learned.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
];

export const TERRAFORM_COURSE_OUTLINE = [
  {
    id: "TERA001",
    topic: "Introduction to Terraform and Infrastructure as Code",
    notes: [
      {
        id: "001",
        title: "What is Terraform?",
        content:
          "Terraform is an open-source Infrastructure as Code (IaC) tool created by HashiCorp that allows you to define and provision infrastructure using a declarative configuration language called HashiCorp Configuration Language (HCL). It supports hundreds of cloud providers and enables consistent, version-controlled, and reproducible infrastructure deployments.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "IaC Principles and Benefits",
        content:
          "Infrastructure as Code treats infrastructure like software. Benefits include version control, code review, automated testing, rapid provisioning, consistency across environments, and disaster recovery through recreation rather than repair.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Terraform vs Other IaC Tools",
        content:
          "Compare Terraform with AWS CloudFormation, Azure ARM/Bicep, Pulumi, and Ansible. Terraform stands out with its cloud-agnostic approach, rich ecosystem, and strong state management capabilities.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Terraform in CI/CD Context",
        content:
          "Terraform plays a central role in modern GitOps and CI/CD pipelines by enabling automated, safe infrastructure changes as part of continuous delivery workflows.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TERA002",
    topic: "Setting Up Terraform Environment",
    notes: [
      {
        id: "001",
        title: "Installation and Version Management",
        content:
          "Install Terraform CLI using official methods, package managers, or tfenv/tfswitch for version management. Understand the importance of using consistent versions across teams and CI environments.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Core Concepts: Providers and Resources",
        content:
          "Providers are plugins that interface with external APIs (AWS, Azure, Google, etc.). Resources are the building blocks that declare infrastructure components.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Terraform Workflow Basics",
        content:
          "Master the standard workflow: `terraform init`, `terraform plan`, `terraform apply`, and `terraform destroy`. Understand the role of the `.terraform` directory and lock files.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TERA003",
    topic: "Terraform Language Fundamentals",
    notes: [
      {
        id: "001",
        title: "HCL Syntax and Configuration",
        content:
          "Learn HashiCorp Configuration Language (HCL) — blocks, expressions, variables, outputs, and locals. Write clean, readable, and maintainable Terraform code.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Variables, Outputs, and Data Sources",
        content:
          "Define input variables, output values, and use data sources to fetch dynamic information from existing infrastructure.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Expressions, Functions, and Dynamic Blocks",
        content:
          "Leverage built-in functions, conditional expressions, for expressions, and dynamic blocks to create flexible and reusable configurations.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TERA004",
    topic: "State Management and Remote Backends",
    notes: [
      {
        id: "001",
        title: "Understanding Terraform State",
        content:
          "Terraform state is the source of truth that maps configuration to real-world resources. Learn how state is generated and why it must be handled with care.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Remote State Backends",
        content:
          "Configure secure remote backends (S3, Terraform Cloud, Azure Blob, GCS) with encryption, locking, and versioning to enable team collaboration.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "State Manipulation and Migration",
        content:
          "Use commands like `terraform state mv`, `terraform state rm`, and `terraform import` for refactoring and migrating resources safely.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TERA005",
    topic: "Modules and Code Organization",
    notes: [
      {
        id: "001",
        title: "Terraform Modules",
        content:
          "Modules are the foundation of reusable and scalable Terraform code. Learn to create, publish, and consume modules from the Terraform Registry or private repositories.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Module Design Patterns",
        content:
          "Explore flat modules, nested modules, and the standard module structure. Follow best practices for inputs, outputs, and dependency management.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Monorepos and Reusability",
        content:
          "Organize large infrastructures using monorepos, shared modules, and Terragrunt for advanced orchestration.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TERA006",
    topic: "Terraform in CI/CD Pipelines",
    notes: [
      {
        id: "001",
        title: "Automating Terraform Workflows",
        content:
          "Integrate Terraform into GitHub Actions, GitLab CI, Jenkins, or Azure DevOps. Implement plan/apply workflows with proper approvals and gates.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Terraform Cloud and Automation",
        content:
          "Use Terraform Cloud/Enterprise for remote state, VCS-driven workflows, run triggers, and team collaboration features.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "GitOps and Drift Detection",
        content:
          "Implement GitOps principles with Terraform. Set up scheduled runs for drift detection and automatic reconciliation.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TERA007",
    topic: "Advanced Terraform Features",
    notes: [
      {
        id: "001",
        title: "Provisioners and Lifecycle Management",
        content:
          "Use local-exec, remote-exec, and file provisioners judiciously. Master lifecycle customizations (`create_before_destroy`, `prevent_destroy`, `ignore_changes`).",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Testing Terraform Code",
        content:
          "Validate configurations with `terraform validate`, test modules using terraform-exec or Terratest, and implement policy-as-code with Sentinel or OPA.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Zero-Downtime Deployments",
        content:
          "Implement blue-green deployments, canary releases, and rolling updates using Terraform’s lifecycle features and feature flags.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TERA008",
    topic: "Security, Compliance, and Best Practices",
    notes: [
      {
        id: "001",
        title: "Security Best Practices",
        content:
          "Secure state files, manage sensitive variables, use least-privilege providers, and implement static analysis with tools like tfsec, Checkov, and Trivy.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Policy as Code",
        content:
          "Enforce governance using Sentinel (Terraform Enterprise) or Open Policy Agent (OPA) to prevent insecure configurations from reaching production.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Cost Management and Optimization",
        content:
          "Track infrastructure costs, implement tagging strategies, and use tools like Infracost for cost estimation in CI pipelines.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TERA009",
    topic: "Multi-Cloud and Advanced Deployments",
    notes: [
      {
        id: "001",
        title: "Multi-Cloud Strategies",
        content:
          "Deploy consistent infrastructure across AWS, Azure, GCP, and private clouds using Terraform’s provider ecosystem.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Kubernetes and Container Integration",
        content:
          "Provision Kubernetes clusters (EKS, AKS, GKE) and deploy applications using Terraform and Helm provider.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Serverless and Modern Architectures",
        content:
          "Manage serverless resources (Lambda, Cloud Functions, Azure Functions) and event-driven architectures with Terraform.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TERA010",
    topic: "Terraform Cloud, Enterprise, and Ecosystem",
    notes: [
      {
        id: "001",
        title: "Terraform Cloud Features",
        content:
          "Explore remote state, VCS integration, team management, policy enforcement, and cost estimation in Terraform Cloud.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Terraform Enterprise",
        content:
          "Understand the self-hosted version with advanced governance, private registry, and Sentinel policy enforcement.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Ecosystem Tools",
        content:
          "Integrate with Terragrunt, Atlantis, Spacelift, and Crossplane for enhanced workflows and GitOps.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
  {
    id: "TERA011",
    topic: "Final Project: Production-Grade Infrastructure",
    notes: [
      {
        id: "001",
        title: "Project Planning",
        content:
          "Design a complete multi-environment infrastructure (networking, databases, compute, monitoring) for a production application using modular, reusable Terraform code.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "002",
        title: "Implementation",
        content:
          "Build the infrastructure with proper state management, CI/CD integration, security scanning, and automated deployments.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "003",
        title: "Testing and Optimization",
        content:
          "Implement comprehensive validation, cost analysis, security policies, and performance optimizations.",
        imageUrl: "https://www.pics.com",
      },
      {
        id: "004",
        title: "Documentation and Handover",
        content:
          "Create detailed documentation, runbooks, and demonstrate GitOps workflows for ongoing maintenance and scaling.",
        imageUrl: "https://www.pics.com",
      },
    ],
  },
];

export const ResourceList = [
  {
    id: "ICS001",
    name: "Intro to Computer Science",
    description: "Introduction to Computer Science and Programming",
    shortName: "CS",
    data: INTERNET_WEB_CS_COURSE_OUTLINE,
    color: "text-violet-400",
    gradColor: "from-violet-500 to-blue-600",
    activeBg: "bg-violet-500/20 border-violet-500/20",
    inactiveBg: "bg-violet-500/10 border-violet-500/10",
  },
  {
    id: "HCS001",
    name: "HTML5 And CSS3",
    description: "Introduction to the Web, HTML, and CSS",
    shortName: "HC",
    data: HTML_CSS_COURSE_OUTLINE,
    color: "text-cyan-400",
    gradColor: "from-cyan-500 to-blue-600",
    activeBg: "bg-cyan-500/20 border-cyan-500/20",
    inactiveBg: "bg-cyan-500/10 border-cyan-500/10",
  },
  {
    id: "GIT001",
    name: "Git And Github",
    description: "Introduction to Version Control and Git",
    shortName: "GH",
    data: GIT_GITHUB_COURSE_OUTLINE,
    color: "text-emerald-400",
    gradColor: "from-emerald-500 to-blue-300",
    activeBg: "bg-emerald-500/30 border-emerald-500/30",
    inactiveBg: "bg-emerald-500/10 border-emerald-500/10",
  },
  {
    id: "TAL001",
    name: "Tailwind CSS",
    description: "Introduction to Tailwind CSS",
    shortName: "TW",
    data: TAILWIND_CSS_COURSE_OUTLINE,
    color: "text-yellow-400",
    gradColor: "from-yellow-500 to-orange-400",
    activeBg: "bg-yellow-500/30 border-yellow-500/30",
    inactiveBg: "bg-yellow-500/10 border-yellow-500/10",
  },
  {
    id: "JAV001",
    name: "Javascript",
    description: "Introduction to JavaScript",
    shortName: "JS",
    data: JAVASCRIPT_COURSE_OUTLINE,
    color: "text-violet-400",
    gradColor: "from-violet-500 to-blue-600",
    activeBg: "bg-violet-500/30 border-violet-500/30",
    inactiveBg: "bg-violet-500/10 border-violet-500/10",
  },
  {
    id: "TYP001",
    name: TYPESCRIPT,
    description: "Introduction to TypeScript",
    shortName: "TS",
    data: TYPESCRIPT_COURSE_OUTLINE,
    color: "text-cyan-400",
    gradColor: "from-cyan-500 to-blue-600",
    activeBg: "bg-cyan-500/30 border-cyan-500/30",
    inactiveBg: "bg-cyan-500/10 border-cyan-500/10",
  },
  {
    id: "RCT001",
    name: "React.js",
    description: "Introduction to React",
    shortName: "RE",
    data: REACT_COURSE_OUTLINE,
    color: "text-emerald-400",
    gradColor: "from-emerald-500 to-blue-300",
    activeBg: "bg-emerald-500/30 border-emerald-500/30",
    inactiveBg: "bg-emerald-500/10 border-emerald-500/10",
  },
  {
    id: "NEX001",
    name: "Next.js",
    description: "Introduction to Next.js",
    shortName: "NX",
    data: NEXTJS_COURSE_OUTLINE,
    color: "text-yellow-400",
    gradColor: "from-yellow-500 to-orange-400",
    activeBg: "bg-yellow-500/30 border-yellow-500/30",
    inactiveBg: "bg-yellow-500/10 border-yellow-500/10",
  },
  {
    id: "NOD001",
    name: "Node.js And Express.js",
    description:
      "Introduction to Back End programming using Node.js and Express.js",
    shortName: "NE",
    data: NODE_EXPRESS_COURSE_OUTLINE,
    color: "text-violet-400",
    gradColor: "from-violet-500 to-blue-600",
    activeBg: "bg-violet-500/30 border-violet-500/30",
    inactiveBg: "bg-violet-500/10 border-violet-500/10",
  },
  {
    id: "NES001",
    name: "Nest.js",
    description: "Introduction to Back End programming using Nest.js",
    shortName: "NS",
    data: NESTJS_COURSE_OUTLINE,
    color: "text-cyan-400",
    gradColor: "from-cyan-500 to-blue-600",
    activeBg: "bg-cyan-500/30 border-cyan-500/30",
    inactiveBg: "bg-cyan-500/10 border-cyan-500/10",
  },
  {
    id: "REN001",
    name: "React Native",
    description: "Introduction to React Native",
    shortName: "RN",
    data: REACT_NATIVE_COURSE_OUTLINE,
    color: "text-emerald-400",
    gradColor: "from-emerald-500 to-blue-300",
    activeBg: "bg-emerald-500/30 border-emerald-500/30",
    inactiveBg: "bg-emerald-500/10 border-emerald-500/10",
  },
  {
    id: "DEV001",
    name: "DevOps",
    description: "Introduction to DevOps",
    shortName: "DO",
    data: DEVOPS_COURSE_OUTLINE,
    color: "text-yellow-400",
    gradColor: "from-yellow-500 to-orange-400",
    activeBg: "bg-yellow-500/30 border-yellow-500/30",
    inactiveBg: "bg-yellow-500/10 border-yellow-500/10",
  },
  {
    id: "CID001",
    name: "CI/CD",
    description:
      "Introduction to Continuous Integration and Continuous Deployment",
    shortName: "CI",
    data: CI_CD_COURSE_OUTLINE,
    color: "text-violet-400",
    gradColor: "from-violet-500 to-blue-600",
    activeBg: "bg-violet-500/30 border-violet-500/30",
    inactiveBg: "bg-violet-500/10 border-violet-500/10",
  },
  {
    id: "TER001",
    name: "Terraform",
    description: "Introduction to Terraform as a DevOps tool",
    shortName: "TE",
    data: TERRAFORM_COURSE_OUTLINE,
    color: "text-cyan-400",
    gradColor: "from-cyan-500 to-blue-600",
    activeBg: "bg-cyan-500/30 border-cyan-500/30",
    inactiveBg: "bg-cyan-500/10 border-cyan-500/10",
  },
  {
    id: "EXT001",
    name: "Extra Notes",
    description: "Extra notes, docs, and resources",
    shortName: "EX",
    data: TERRAFORM_COURSE_OUTLINE,
    color: "text-emerald-400",
    gradColor: "from-emerald-500 to-blue-300",
    activeBg: "bg-emerald-500/30 border-emerald-500/30",
    inactiveBg: "bg-emerald-500/10 border-emerald-500/10",
  },
];

export const STUDENTS_DATA: StudentDataType[] = [
  {
    id: "001",
    studentId: "001EDCSFWT1",
    firstName: "Kennedy",
    lastName: "Walkman",
    email: "kennedywalkman@gmail.com",
    whatsappNumber: "2347033325279",
    courseTrack: "Front End Web Development",
    isPaid: false,
    isEnrolled: false,
    discount: 30,
    cohort: "June 2026 - September 2026",
    createdAt: "29th June 2026",
  },
  {
    id: "002",
    studentId: "001EDHSFWT1",
    firstName: "Samuel",
    lastName: "Johnson",
    email: "samueljohnson@gmail.com",
    whatsappNumber: "2347033325279",
    courseTrack: "Back End Engineering",
    isPaid: false,
    isEnrolled: false,
    discount: 30,
    cohort: "June 2026 - September 2026",
    createdAt: "29th June 2026",
  },
  {
    id: "003",
    studentId: "001EDKSFWT1",
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    whatsappNumber: "2347033325279",
    courseTrack: "Full Stack Engineering",
    isPaid: false,
    isEnrolled: false,
    discount: 30,
    cohort: "June 2026 - September 2026",
    createdAt: "29th June 2026",
  },
  {
    id: "004",
    studentId: "001PDCSFWT1",
    firstName: "Mary",
    lastName: "Edward",
    email: "maryedward@gmail.com",
    whatsappNumber: "2347033325279",
    courseTrack: "DevOps & CI/CD",
    isPaid: false,
    isEnrolled: false,
    discount: 30,
    cohort: "June 2026 - September 2026",
    createdAt: "29th June 2026",
  },
  {
    id: "005",
    studentId: "001EDCSFET1",
    firstName: "Emeka",
    lastName: "Chibuzor",
    email: "emekachibuzor@gmail.com",
    whatsappNumber: "2347033325279",
    courseTrack: "Mobile App Development",
    isPaid: false,
    isEnrolled: false,
    discount: 30,
    cohort: "June 2026 - September 2026",
    createdAt: "29th June 2026",
  },
  {
    id: "006",
    studentId: "001EDCSBWT1",
    firstName: "Ajibola",
    lastName: "Olamide",
    email: "ajibolaolamide@gmail.com",
    whatsappNumber: "2347033325279",
    courseTrack: "Front End Web Development",
    isPaid: false,
    isEnrolled: false,
    discount: 30,
    cohort: "June 2026 - September 2026",
    createdAt: "29th June 2026",
  },
  {
    id: "007",
    studentId: "001EDCSRWT1",
    firstName: "Balogun",
    lastName: "Jide",
    email: "balogunjide@gmail.com",
    whatsappNumber: "2347033325279",
    courseTrack: "Back End Engineering",
    isPaid: false,
    isEnrolled: false,
    discount: 30,
    cohort: "June 2026 - September 2026",
    createdAt: "29th June 2026",
  },
  {
    id: "008",
    studentId: "001EDCSFST1",
    firstName: "Chioma",
    lastName: "Nneoma",
    email: "chiomanneoma@gmail.com",
    whatsappNumber: "2347033325279",
    courseTrack: "Full Stack Engineering",
    isPaid: false,
    isEnrolled: false,
    discount: 30,
    cohort: "June 2026 - September 2026",
    createdAt: "29th June 2026",
  },
  {
    id: "009",
    studentId: "001EDCSSLT1",
    firstName: "Ahmed",
    lastName: "Tijani",
    email: "ahmedtijani@gmail.com",
    whatsappNumber: "2347033325279",
    courseTrack: "Mobile App Development",
    isPaid: false,
    isEnrolled: false,
    discount: 30,
    cohort: "June 2026 - September 2026",
    createdAt: "29th June 2026",
  },
  {
    id: "010",
    studentId: "001PDCSFWT1",
    firstName: "Bosun",
    lastName: "Davids",
    email: "bosundavids@gmail.com",
    whatsappNumber: "2347033325279",
    courseTrack: "Front End Web Development",
    isPaid: false,
    isEnrolled: false,
    discount: 30,
    cohort: "June 2026 - September 2026",
    createdAt: "29th June 2026",
  },
];

export const PLANS: Plan[] = [
  {
    id: "Free",
    label: "Free",
    price: 0,
    period: "forever",
    badge: "Freemium",
    features: [
      "Access to 3 beginner courses",
      "Community forum access",
      "Weekly coding challenges",
    ],
    gradColor: "from-slate-500 to-slate-600",
    accentColor: "text-slate-400",
  },
  {
    id: "Live",
    label: "Live Class",
    price: 150000,
    period: "cohort",
    badge: "Physical Classes",
    features: [
      "Unlimited course access",
      "Live mentor sessions (4/mo)",
      "Project reviews & feedback",
      "Completion certificates",
      "Priority support",
    ],
    gradColor: "from-cyan-500 to-blue-600",
    accentColor: "text-cyan-400",
  },
  {
    id: "Online",
    label: "Online Class",
    price: 200000,
    period: "cohort",
    badge: "Online Classes",
    features: [
      "Everything in Pro",
      "1-on-1 coaching sessions (2/mo)",
      "Career placement support",
      "Portfolio reviews",
      "Access to private cohorts",
      "Lifetime certificate archive",
    ],
    gradColor: "from-violet-500 to-purple-700",
    accentColor: "text-violet-400",
  },
];

export const SAVED_CARDS: SavedCard[] = [
  { id: "c1", brand: "Visa", last4: "4242", expiry: "08/27", isDefault: true },
  {
    id: "c2",
    brand: "Mastercard",
    last4: "9013",
    expiry: "02/26",
    isDefault: false,
  },
];

export const INVOICES: Invoice[] = [
  {
    id: "INV-2026-06",
    studentId: "001EDCSFWT1",
    studentName: "Kennedy Walkman",
    courseTrack: "Front End Web Development",
    plan: "Live",
    description: "Pro Plan — June 2026",
    amount: 150000,
    date: "Jun 1, 2026",
    status: "Paid",
  },
  {
    id: "INV-2026-05",
    studentId: "001EDHSFWT1",
    studentName: "Samuel Johnson",
    courseTrack: "Back End Engineering",
    plan: "Free",
    description: "Pro Plan — May 2026",
    amount: 200000,
    date: "May 1, 2026",
    status: "Pending",
  },
  {
    id: "INV-2026-04",
    studentId: "001EDKSFWT1",
    studentName: "John Doe",
    courseTrack: "Full Stack Engineering",
    plan: "Online",
    description: "Pro Plan — Apr 2026",
    amount: 150000,
    date: "Apr 1, 2026",
    status: "Failed",
  },
  {
    id: "INV-2026-03",
    studentId: "001PDCSFWT1",
    studentName: "Mary Edward",
    courseTrack: "DevOps & CI/CD",
    plan: "Online",
    description: "Pro Plan — Mar 2026",
    amount: 150000,
    date: "Mar 1, 2026",
    status: "Failed",
  },
  {
    id: "INV-2026-02",
    studentId: "001EDCSFET1",
    studentName: "Emeka Chibuzor",
    courseTrack: "Mobile App Development",
    plan: "Free",
    description: "Pro Plan — Feb 2026",
    amount: 200000,
    date: "Feb 1, 2026",
    status: "Pending",
  },
  {
    id: "INV-2026-01",
    studentId: "001EDCSBWT1",
    studentName: "Ajibola Olamide",
    courseTrack: "Front End Web Development",
    plan: "Live",
    description: "Pro Plan — Jan 2026",
    amount: 200000,
    date: "Jan 1, 2026",
    status: "Paid",
  },
  {
    id: "INV-2026-07",
    studentId: "001EDCSRWT1",
    studentName: "Balogun Jide",
    courseTrack: "Back End Engineering",
    plan: "Live",
    description: "Pro Plan — Jul 2026",
    amount: 200000,
    date: "Jul 1, 2026",
    status: "Paid",
  },
];

export const MOCK_COURSES: MockCourse[] = [
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

export const PricingData: PricingDataType[] = [
  {
    id: "01",
    pricingType: "Free plan",
    price: "0",
    priceInfo: "Beginner access to limited resources.",
    benefits: [
      "Limited access to course materials",
      "Free access to course info and resources",
      "Free access to pre-class whatsapp groups",
      "Free access to two classes",
    ],
    textColor: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    borderColor: "border-cyan-400/20",
    buttonColor: "bg-cyan-400/50",
    shadowColor: "shadow-cyan-400/20",
  },
  {
    id: "02",
    pricingType: "Front End Web Development",
    price: "200000",
    priceInfo: "Full front end development course.",
    benefits: [
      "Full access to all front end development course materials",
      "Free access to course info and resources",
      "Free access to pre-class and paid class whatsapp groups",
      "Free access to all front end classes",
      "Inclusion into community groups for job offers and deals",
      "Free access to all extra-curricular classes",
      "Refund option available until after 3 classes",
      "Deferrment option available",
      "Cancel anytime",
    ],
    textColor: "text-violet-400",
    bgColor: "bg-violet-400/10",
    borderColor: "border-violet-400/20",
    buttonColor: "bg-violet-400/50",
    shadowColor: "shadow-violet-400/20",
  },
  {
    id: "03",
    pricingType: "Back End Engineering",
    price: "200000",
    priceInfo: "Full back end development course.",
    benefits: [
      "Full access to all back end development course materials",
      "Free access to course info and resources",
      "Free access to pre-class and paid class whatsapp groups",
      "Free access to all back end classes",
      "Inclusion into community groups for job offers and deals",
      "Free access to all extra-curricular classes",
      "Refund option available until after 3 classes",
      "Deferrment option available",
      "Cancel anytime",
    ],
    textColor: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    buttonColor: "bg-orange-400/50",
    shadowColor: "shadow-orange-400/20",
  },
  {
    id: "04",
    pricingType: "Full Stack Engineering",
    price: "300000",
    priceInfo: "Full stack development course.",
    benefits: [
      "Full access to all full stack development course materials",
      "Free access to course info and resources",
      "Free access to pre-class and paid class whatsapp groups",
      "Free access to all full stack classes",
      "Inclusion into community groups for job offers and deals",
      "Free access to all extra-curricular classes",
      "Refund option available until after 3 classes",
      "Deferrment option available",
      "Cancel anytime",
    ],
    textColor: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    borderColor: "border-emerald-400/20",
    buttonColor: "bg-emerald-400/50",
    shadowColor: "shadow-emerald-400/20",
  },
  {
    id: "05",
    pricingType: "Mobile App Development",
    price: "200000",
    priceInfo: "Mobile app development course.",
    benefits: [
      "Full access to all mobile app development course materials",
      "Free access to course info and resources",
      "Free access to pre-class and paid class whatsapp groups",
      "Free access to all mobile app classes",
      "Inclusion into community groups for job offers and deals",
      "Free access to all extra-curricular classes",
      "Refund option available until after 3 classes",
      "Deferrment option available",
      "Cancel anytime",
    ],
    textColor: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
    buttonColor: "bg-blue-400/50",
    shadowColor: "shadow-blue-400/20",
  },
  {
    id: "06",
    pricingType: "DevOps & CI/CD",
    price: "100000",
    priceInfo: "DevOps & CI/CD cloud deployment course.",
    benefits: [
      "Full access to all DevOps & CI/CD course materials",
      "Free access to course info and resources",
      "Free access to pre-class and paid class whatsapp groups",
      "Free access to all DevOps & CI/CD classes",
      "Inclusion into community groups for job offers and deals",
      "Free access to all extra-curricular classes",
      "Refund option available until after 3 classes",
      "Deferrment option available",
      "Cancel anytime",
    ],
    textColor: "text-red-400",
    bgColor: "bg-red-400/10",
    borderColor: "border-red-400/20",
    buttonColor: "bg-red-400/50",
    shadowColor: "shadow-red-400/20",
  },
];
