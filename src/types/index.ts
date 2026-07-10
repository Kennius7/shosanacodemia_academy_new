export type LoginUserState = "student" | "instructor" | "admin";
export type RoleType = "user" | "instructor" | "admin";
export type Level = "Foundational" | "Intermediate" | "Advanced" | "Expert";
export type Track = "Frontend" | "Backend" | "Fullstack" | "DevOps" | "Systems";
export type CourseTrack =
  | "Front End Web Development"
  | "Back End Engineering"
  | "Full Stack Engineering"
  | "Mobile App Development"
  | "DevOps & CI/CD";
export type EnrolStatus = "Pending" | "Paid" | "Enrolled" | "Granted";
export type PlanTier = "Free" | "Live" | "Online";
export type InvoiceStatus = "Paid" | "Pending" | "Failed";
export type CardBrand = "Visa" | "Mastercard" | "Verve";
export type NavRouteType =
  | "Curriculum"
  | "Benefits"
  | "Reviews"
  | "About"
  | "Contact"
  | "Pricing";
export type selectedCourseType =
  | "Free plan"
  | "Front End Web Development"
  | "Back End Engineering"
  | "Full Stack Engineering"
  | "Mobile App Development"
  | "DevOps & CI/CD";

export interface Plan {
  id: PlanTier;
  label: string;
  price: number;
  period: string;
  features: string[];
  gradColor: string;
  accentColor: string;
  badge?: string;
}

export interface SavedCard {
  id: string;
  brand: CardBrand;
  last4: string;
  expiry: string;
  isDefault: boolean;
}

export interface Invoice {
  id: string;
  studentId: string;
  studentName: string;
  courseTrack: CourseTrack;
  plan: PlanTier;
  description: string;
  amount: number;
  date: string;
  status: InvoiceStatus;
}

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

export interface TrackType {
  id: string;
  name: string;
  slug: string;
  desc: string;
  hours: string;
}

export interface Course {
  id: string;
  name: selectedCourseType;
  duration: string;
  description: string;
  icon: string;
  track?: Array<TrackType>;
  gradColor?: string;
  color?: string;
  rawGradColor1?: string;
  rawGradColor2?: string;
}

export interface ResourceNotesType {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
}

export interface ResourceType {
  id: string;
  topic: string;
  notes: Array<ResourceNotesType>;
}

export interface ResourceListType {
  id: string;
  name: string;
  description: string;
  shortName: string;
  data: Array<ResourceType>;
  color: string;
  gradColor: string;
  activeBg: string;
  inactiveBg: string;
}

export interface StudentDataType {
  id: string;
  studentId: string;
  firstName: string;
  lastName: string;
  email: string;
  whatsappNumber: string;
  courseTrack: CourseTrack;
  isPaid: boolean;
  isEnrolled: boolean;
  discount: number;
  cohort: string;
  createdAt: string;
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
  selectedCourse: selectedCourseType;
  discountCode: string;
}

export interface LoginUserProps {
  email: string;
  password: string;
}

export interface SubMenuItem {
  name: string;
  icon: React.ElementType;
  href: string;
}

export interface SidebarItem {
  name: string;
  icon: React.ElementType;
  href: string;
  submenu?: SubMenuItem[];
}

export interface MockLesson {
  id: number;
  title: string;
  duration: string;
  completed: boolean;
}

export interface MockCourse {
  id: number;
  title: string;
  instructor: string;
  instructorRole: string;
  progress: number; // 0–100
  totalLessons: number;
  completedLessons: number;
  lessons: MockLesson[];
  discussionCount: number;
}

export interface PricingDataType {
  id: string;
  pricingType: selectedCourseType;
  price: string;
  priceInfo: string;
  benefits: Array<string>;
  textColor: string;
  bgColor: string;
  borderColor: string;
  buttonColor: string;
  shadowColor: string;
}
