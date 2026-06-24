export type LoginUserState = "student" | "instructor" | "admin";
export type RoleType = "user" | "instructor" | "admin";
export type Level = "Foundational" | "Intermediate" | "Advanced" | "Expert";
export type Track = "Frontend" | "Backend" | "Fullstack" | "DevOps" | "Systems";
export type EnrolStatus = "Pending" | "Paid" | "Enrolled" | "Granted";

export interface Lesson {
  id: string;
  title: string;
  duration: string;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface CourseType {
  slug: string;
  code: string;
  title: string;
  tagline: string;
  description: string;
  level: Level;
  track: Track;
  hours: string;
  price: number;
  instructor: string;
  instructorTitle: string;
  outcomes: string[];
  modules: Module[];
}

export type User = {
  id: string;
  email: string;
  fullName: string;
  avatar?: string;
  role?: RoleType;
  accountType?: LoginUserState;
};

export interface Course {
  id: string;
  name: string;
  duration: string;
  description: string;
  icon: string;
  track?: Array<string>;
  gradColor?: string;
  color?: string;
  rawGradColor1?: string;
  rawGradColor2?: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface Partner {
  id: string;
  name: string;
  color: string;
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  course: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface BannerProps {
  targetDate: string;
}

export interface RegisterUserProps {
  // Step 1
  fullName: string;
  email: string;
  password: string;
  // Step 2
  learningGoals: string[];
  experienceLevel: string;
  // Step 3
  deliveryMode: "online" | "offline" | "";
  selectedCourse: string;
  discountCode: string;
}

export interface LoginUserProps {
  email: string;
  password: string;
}
