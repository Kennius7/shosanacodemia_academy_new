"use client";

// import SectionHeader from "@/components/SectionHeader";
import StudentHeader from "@/components/StudentHeader";
import { EnrolStatus } from "@/types";
import { useState, useRef } from "react";
import {
  User,
  Mail,
  Lock,
  Bell,
  Globe,
  Moon,
  Eye,
  EyeOff,
  Camera,
  Check,
  AlertTriangle,
  Smartphone,
  Monitor,
  Shield,
  LogOut,
  Trash2,
  ChevronRight,
  Sun,
  Languages,
  Volume2,
  VolumeX,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type SettingsTab =
  | "profile"
  | "account"
  | "notifications"
  | "appearance"
  | "privacy"
  | "sessions";

interface TabItem {
  id: SettingsTab;
  label: string;
  icon: React.ElementType;
  description: string;
}

interface ToggleProps {
  enabled: boolean;
  onChange: (v: boolean) => void;
  accentClass?: string;
}

interface SessionDevice {
  id: string;
  device: string;
  browser: string;
  location: string;
  lastSeen: string;
  isCurrent: boolean;
  icon: React.ElementType;
}

// ─── Mock data ────────────────────────────────────────────────────────────────

const TABS: TabItem[] = [
  {
    id: "profile",
    label: "Profile",
    icon: User,
    description: "Name, photo, bio",
  },
  {
    id: "account",
    label: "Account",
    icon: Lock,
    description: "Email, password, 2FA",
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: Bell,
    description: "Email & push alerts",
  },
  {
    id: "appearance",
    label: "Appearance",
    icon: Moon,
    description: "Theme & language",
  },
  {
    id: "privacy",
    label: "Privacy",
    icon: Shield,
    description: "Visibility & data",
  },
  {
    id: "sessions",
    label: "Sessions",
    icon: Monitor,
    description: "Active devices",
  },
];

const SESSIONS: SessionDevice[] = [
  {
    id: "s1",
    device: "MacBook Pro 16",
    browser: "Chrome 124",
    location: "Lagos, Nigeria",
    lastSeen: "Now",
    isCurrent: true,
    icon: Monitor,
  },
  {
    id: "s2",
    device: "iPhone 15 Pro",
    browser: "Safari 17",
    location: "Lagos, Nigeria",
    lastSeen: "2 hours ago",
    isCurrent: false,
    icon: Smartphone,
  },
  {
    id: "s3",
    device: "Windows PC",
    browser: "Edge 123",
    location: "Abuja, Nigeria",
    lastSeen: "3 days ago",
    isCurrent: false,
    icon: Monitor,
  },
];

// ─── Shared primitives ────────────────────────────────────────────────────────

function Toggle({
  enabled,
  onChange,
  accentClass = "bg-gradient-to-r from-cyan-500 to-blue-600",
}: ToggleProps) {
  return (
    <button
      role="switch"
      aria-checked={enabled}
      onClick={() => onChange(!enabled)}
      className={`relative w-10 h-5 rounded-full transition-all duration-300 flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500
        ${enabled ? accentClass : "bg-slate-700"}`}
    >
      <span
        className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-300
          ${enabled ? "translate-x-5" : "translate-x-0.5"}`}
      />
    </button>
  );
}

function SettingRow({
  label,
  description,
  children,
  danger = false,
}: {
  label: string;
  description?: string;
  children: React.ReactNode;
  danger?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-6 py-4 border-b border-slate-800/70 last:border-0">
      <div className="min-w-0">
        <p
          className={`text-sm font-medium ${danger ? "text-red-400" : "text-white"}`}
        >
          {label}
        </p>
        {description && (
          <p className="text-xs text-slate-500 mt-0.5">{description}</p>
        )}
      </div>
      <div className="flex-shrink-0">{children}</div>
    </div>
  );
}

function Card({
  children,
  gradColor = "from-cyan-500 to-blue-600",
}: {
  children: React.ReactNode;
  gradColor?: string;
}) {
  return (
    <div className="bg-[#0D1629] border border-slate-800 rounded-2xl overflow-hidden mb-6">
      <div className={`h-[2px] w-full bg-gradient-to-r ${gradColor}`} />
      <div className="p-6">{children}</div>
    </div>
  );
}

function SaveButton({
  label = "Save changes",
  onClick,
}: {
  label?: string;
  onClick?: () => void;
}) {
  const [saved, setSaved] = useState(false);
  function handle() {
    setSaved(true);
    onClick?.();
    setTimeout(() => setSaved(false), 2000);
  }
  return (
    <button
      onClick={handle}
      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
        ${
          saved
            ? "bg-emerald-500/20 border border-emerald-500/30 text-emerald-400"
            : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90"
        }`}
    >
      {saved ? (
        <>
          <Check className="w-4 h-4" /> Saved
        </>
      ) : (
        label
      )}
    </button>
  );
}

// ─── Tab panels ───────────────────────────────────────────────────────────────

function ProfilePanel() {
  const [name, setName] = useState("Shosan Adeola");
  const [handle, setHandle] = useState("shosan_dev");
  const [bio, setBio] = useState(
    "Aspiring full-stack dev. Building in public 🚀",
  );
  const [phone, setPhone] = useState("+234 801 234 5678");
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <>
      {/* Avatar */}
      <Card>
        <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-5">
          Profile photo
        </p>
        <div className="flex items-center gap-5">
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xl font-bold text-white">
              SA
            </div>
            <button
              onClick={() => fileRef.current?.click()}
              className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-lg bg-[#080F1E] border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors duration-150"
            >
              <Camera className="w-3 h-3" />
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Shosan Adeola</p>
            <p className="text-xs text-slate-500 mt-0.5">
              JPG, PNG or WebP · Max 2 MB
            </p>
            <button
              onClick={() => fileRef.current?.click()}
              className="mt-2 text-xs text-cyan-400 hover:underline"
            >
              Upload new photo
            </button>
          </div>
        </div>
      </Card>

      {/* Personal info */}
      <Card>
        <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-5">
          Personal info
        </p>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-slate-400 mb-1.5">
                Full name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#080F1E] border border-slate-700 focus:border-cyan-500/50 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 outline-none transition-colors duration-150"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1.5">
                Username
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 text-sm">
                  @
                </span>
                <input
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  className="w-full bg-[#080F1E] border border-slate-700 focus:border-cyan-500/50 rounded-xl pl-8 pr-4 py-2.5 text-sm text-white placeholder-slate-600 outline-none transition-colors duration-150"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1.5">
              Phone number
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-[#080F1E] border border-slate-700 focus:border-cyan-500/50 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 outline-none transition-colors duration-150"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1.5">
              Bio <span className="text-slate-600">({bio.length}/160)</span>
            </label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value.slice(0, 160))}
              rows={3}
              className="w-full bg-[#080F1E] border border-slate-700 focus:border-cyan-500/50 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 outline-none transition-colors duration-150 resize-none"
            />
          </div>

          <div className="pt-1 flex justify-end">
            <SaveButton />
          </div>
        </div>
      </Card>
    </>
  );
}

function AccountPanel() {
  const [email, setEmail] = useState("shosan@codeacademy.ng");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [twoFA, setTwoFA] = useState(false);
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  const strength =
    newPw.length === 0
      ? 0
      : newPw.length < 6
        ? 1
        : newPw.length < 10
          ? 2
          : /[A-Z]/.test(newPw) && /[0-9]/.test(newPw)
            ? 4
            : 3;
  const strengthLabel = ["", "Weak", "Fair", "Good", "Strong"];
  const strengthColor = [
    "",
    "bg-red-500",
    "bg-amber-500",
    "bg-cyan-500",
    "bg-emerald-500",
  ];

  return (
    <>
      {/* Email */}
      <Card>
        <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-5">
          Email address
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-slate-400 mb-1.5">
              Current email
            </label>
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#080F1E] border border-slate-700 focus:border-cyan-500/50 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white outline-none transition-colors duration-150"
                />
              </div>
              <SaveButton label="Update" />
            </div>
          </div>
        </div>
      </Card>

      {/* Password */}
      <Card>
        <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-5">
          Change password
        </p>
        <div className="space-y-4">
          {[
            {
              label: "Current password",
              value: currentPw,
              set: setCurrentPw,
              show: showCurrent,
              toggle: () => setShowCurrent((v) => !v),
            },
            {
              label: "New password",
              value: newPw,
              set: setNewPw,
              show: showNew,
              toggle: () => setShowNew((v) => !v),
            },
            {
              label: "Confirm password",
              value: confirmPw,
              set: setConfirmPw,
              show: showConfirm,
              toggle: () => setShowConfirm((v) => !v),
            },
          ].map(({ label, value, set, show, toggle }) => (
            <div key={label}>
              <label className="block text-xs text-slate-400 mb-1.5">
                {label}
              </label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  value={value}
                  onChange={(e) => set(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#080F1E] border border-slate-700 focus:border-cyan-500/50 rounded-xl px-4 py-2.5 pr-10 text-sm text-white placeholder-slate-600 outline-none transition-colors duration-150"
                />
                <button
                  onClick={toggle}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {show ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          ))}

          {/* Strength meter */}
          {newPw.length > 0 && (
            <div>
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4].map((s) => (
                  <div
                    key={s}
                    className={`h-1 flex-1 rounded-full transition-all duration-300 ${strength >= s ? strengthColor[strength] : "bg-slate-800"}`}
                  />
                ))}
              </div>
              <p
                className={`text-xs ${strengthColor[strength].replace("bg-", "text-")}`}
              >
                {strengthLabel[strength]}
              </p>
            </div>
          )}

          {confirmPw && newPw !== confirmPw && (
            <p className="text-xs text-red-400 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" /> Passwords don&apos;t
              match
            </p>
          )}

          <div className="flex justify-end pt-1">
            <SaveButton label="Update password" />
          </div>
        </div>
      </Card>

      {/* Two-factor auth */}
      <Card gradColor="from-violet-500 to-purple-700">
        <SettingRow
          label="Two-factor authentication"
          description="Add a second layer of security to your account via SMS or authenticator app."
        >
          <Toggle
            enabled={twoFA}
            onChange={setTwoFA}
            accentClass="bg-gradient-to-r from-violet-500 to-purple-700"
          />
        </SettingRow>
        {twoFA && (
          <div className="mt-4 p-4 bg-violet-500/10 border border-violet-500/20 rounded-xl">
            <p className="text-xs text-violet-300 leading-relaxed">
              Scan the QR code in your authenticator app (Google Authenticator,
              Authy) or receive a code via SMS every time you log in.
            </p>
            <button className="mt-3 flex items-center gap-1.5 text-xs text-violet-400 hover:underline font-medium">
              Set up 2FA <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        )}
      </Card>
    </>
  );
}

function NotificationsPanel() {
  const [settings, setSettings] = useState({
    courseUpdates: true,
    newMessages: true,
    mentorSessions: true,
    weeklyDigest: false,
    promotions: false,
    pushCourse: true,
    pushMessages: true,
    pushReminders: false,
    soundAlerts: true,
  });

  const toggle = (key: keyof typeof settings) =>
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <>
      <Card>
        <div className="flex items-center gap-2 mb-5">
          <Mail className="w-4 h-4 text-cyan-400" />
          <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
            Email notifications
          </p>
        </div>
        <SettingRow
          label="Course updates"
          description="Lesson releases, syllabus changes, and instructor notes."
        >
          <Toggle
            enabled={settings.courseUpdates}
            onChange={() => toggle("courseUpdates")}
          />
        </SettingRow>
        <SettingRow
          label="New messages"
          description="When a mentor or peer sends you a message."
        >
          <Toggle
            enabled={settings.newMessages}
            onChange={() => toggle("newMessages")}
          />
        </SettingRow>
        <SettingRow
          label="Mentor session reminders"
          description="24 hours and 1 hour before a scheduled session."
        >
          <Toggle
            enabled={settings.mentorSessions}
            onChange={() => toggle("mentorSessions")}
          />
        </SettingRow>
        <SettingRow
          label="Weekly learning digest"
          description="A summary of your progress, new courses, and tips."
        >
          <Toggle
            enabled={settings.weeklyDigest}
            onChange={() => toggle("weeklyDigest")}
          />
        </SettingRow>
        <SettingRow
          label="Promotions & offers"
          description="Discounts, referral bonuses, and special events."
        >
          <Toggle
            enabled={settings.promotions}
            onChange={() => toggle("promotions")}
          />
        </SettingRow>
      </Card>

      <Card gradColor="from-violet-500 to-purple-700">
        <div className="flex items-center gap-2 mb-5">
          <Smartphone className="w-4 h-4 text-violet-400" />
          <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
            Push notifications
          </p>
        </div>
        <SettingRow
          label="Course activity"
          description="New lessons, quizzes, and project deadlines."
        >
          <Toggle
            enabled={settings.pushCourse}
            onChange={() => toggle("pushCourse")}
            accentClass="bg-gradient-to-r from-violet-500 to-purple-700"
          />
        </SettingRow>
        <SettingRow
          label="Direct messages"
          description="Instant push when someone messages you."
        >
          <Toggle
            enabled={settings.pushMessages}
            onChange={() => toggle("pushMessages")}
            accentClass="bg-gradient-to-r from-violet-500 to-purple-700"
          />
        </SettingRow>
        <SettingRow
          label="Study reminders"
          description="Daily nudge based on your learning schedule."
        >
          <Toggle
            enabled={settings.pushReminders}
            onChange={() => toggle("pushReminders")}
            accentClass="bg-gradient-to-r from-violet-500 to-purple-700"
          />
        </SettingRow>
        <SettingRow
          label="Sound alerts"
          description="Play a sound for incoming notifications."
        >
          <div className="flex items-center gap-2">
            {settings.soundAlerts ? (
              <Volume2 className="w-4 h-4 text-slate-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-600" />
            )}
            <Toggle
              enabled={settings.soundAlerts}
              onChange={() => toggle("soundAlerts")}
              accentClass="bg-gradient-to-r from-violet-500 to-purple-700"
            />
          </div>
        </SettingRow>
      </Card>

      <div className="flex justify-end">
        <SaveButton label="Save preferences" />
      </div>
    </>
  );
}

function AppearancePanel() {
  const [theme, setTheme] = useState<"dark" | "light" | "system">("dark");
  const [language, setLanguage] = useState("en");
  const [timezone, setTimezone] = useState("Africa/Lagos");
  const [fontSize, setFontSize] = useState<"sm" | "md" | "lg">("md");

  const themes = [
    {
      id: "dark",
      label: "Dark",
      icon: Moon,
      desc: "Easy on the eyes at night",
    },
    { id: "light", label: "Light", icon: Sun, desc: "Crisp and clean" },
    {
      id: "system",
      label: "System",
      icon: Monitor,
      desc: "Follows your OS setting",
    },
  ] as const;

  return (
    <>
      {/* Theme */}
      <Card>
        <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-5">
          Theme
        </p>
        <div className="grid grid-cols-3 gap-3">
          {themes.map(({ id, label, icon: Icon, desc }) => (
            <button
              key={id}
              onClick={() => setTheme(id)}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-200 cursor-pointer
                ${
                  theme === id
                    ? "border-cyan-500/50 bg-cyan-500/5 shadow-[0_0_16px_-4px_rgba(6,182,212,0.2)]"
                    : "border-slate-800 hover:border-slate-700 bg-[#080F1E]"
                }`}
            >
              <Icon
                className={`w-5 h-5 ${theme === id ? "text-cyan-400" : "text-slate-500"}`}
              />
              <span
                className={`text-xs font-semibold ${theme === id ? "text-white" : "text-slate-400"}`}
              >
                {label}
              </span>
              <span className="text-[10px] text-slate-600 text-center leading-tight">
                {desc}
              </span>
            </button>
          ))}
        </div>
      </Card>

      {/* Language & timezone */}
      <Card>
        <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-5">
          Language & region
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-slate-400 mb-1.5">
              <span className="inline-flex items-center gap-1.5">
                <Languages className="w-3.5 h-3.5" /> Language
              </span>
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full bg-[#080F1E] border border-slate-700 focus:border-cyan-500/50 rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors duration-150 appearance-none cursor-pointer"
            >
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="yo">Yorùbá</option>
              <option value="ha">Hausa</option>
              <option value="ig">Igbo</option>
            </select>
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1.5">
              <span className="inline-flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" /> Timezone
              </span>
            </label>
            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="w-full bg-[#080F1E] border border-slate-700 focus:border-cyan-500/50 rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors duration-150 appearance-none cursor-pointer"
            >
              <option value="Africa/Lagos">Africa/Lagos (WAT, UTC+1)</option>
              <option value="Africa/Accra">Africa/Accra (GMT, UTC+0)</option>
              <option value="Europe/London">Europe/London (BST, UTC+1)</option>
              <option value="America/New_York">
                America/New_York (EDT, UTC-4)
              </option>
            </select>
          </div>
        </div>
      </Card>

      {/* Font size */}
      <Card>
        <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-5">
          Text size
        </p>
        <div className="flex gap-3">
          {(["sm", "md", "lg"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFontSize(s)}
              className={`flex-1 py-3 rounded-xl border text-center transition-all duration-200 cursor-pointer
                ${
                  fontSize === s
                    ? "border-cyan-500/50 bg-cyan-500/5 text-cyan-400"
                    : "border-slate-800 hover:border-slate-700 text-slate-500"
                }`}
            >
              <span
                className={`font-semibold ${s === "sm" ? "text-xs" : s === "md" ? "text-sm" : "text-base"}`}
              >
                {s === "sm" ? "Small" : s === "md" ? "Default" : "Large"}
              </span>
            </button>
          ))}
        </div>
      </Card>

      <div className="flex justify-end">
        <SaveButton label="Save appearance" />
      </div>
    </>
  );
}

function PrivacyPanel() {
  const [settings, setSettings] = useState({
    profilePublic: true,
    showProgress: true,
    showCertificates: true,
    allowMessages: true,
    activityStatus: false,
    dataCollection: true,
  });

  const toggle = (key: keyof typeof settings) =>
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  return (
    <>
      <Card>
        <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-5">
          Profile visibility
        </p>
        <SettingRow
          label="Public profile"
          description="Other students can view your profile and enrolled courses."
        >
          <Toggle
            enabled={settings.profilePublic}
            onChange={() => toggle("profilePublic")}
          />
        </SettingRow>
        <SettingRow
          label="Show learning progress"
          description="Display completed courses and current streaks on your profile."
        >
          <Toggle
            enabled={settings.showProgress}
            onChange={() => toggle("showProgress")}
          />
        </SettingRow>
        <SettingRow
          label="Show certificates"
          description="Allow others to see your earned certificates."
        >
          <Toggle
            enabled={settings.showCertificates}
            onChange={() => toggle("showCertificates")}
          />
        </SettingRow>
        <SettingRow
          label="Allow direct messages"
          description="Let mentors and peers send you messages."
        >
          <Toggle
            enabled={settings.allowMessages}
            onChange={() => toggle("allowMessages")}
          />
        </SettingRow>
        <SettingRow
          label="Show activity status"
          description="Let others see when you're active on the platform."
        >
          <Toggle
            enabled={settings.activityStatus}
            onChange={() => toggle("activityStatus")}
          />
        </SettingRow>
      </Card>

      <Card>
        <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-5">
          Data & analytics
        </p>
        <SettingRow
          label="Usage analytics"
          description="Help us improve the platform by sharing anonymised usage data."
        >
          <Toggle
            enabled={settings.dataCollection}
            onChange={() => toggle("dataCollection")}
          />
        </SettingRow>
        <div className="pt-4">
          <button className="text-xs text-cyan-400 hover:underline flex items-center gap-1.5">
            Download my data <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </Card>

      <div className="flex justify-between items-center gap-4">
        <SaveButton label="Save privacy settings" />
        <button
          onClick={() => setShowDeleteConfirm((v) => !v)}
          className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1.5 transition-colors"
        >
          <Trash2 className="w-3.5 h-3.5" /> Delete account
        </button>
      </div>

      {showDeleteConfirm && (
        <div className="mt-5 bg-red-500/5 border border-red-500/20 rounded-2xl p-5">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-red-400 mb-1">
                Delete your account?
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                This permanently removes all your courses, progress,
                certificates, and messages. This action cannot be undone.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex-1 py-2.5 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-semibold hover:bg-red-500/30 transition-colors duration-150">
              Yes, delete everything
            </button>
            <button
              onClick={() => setShowDeleteConfirm(false)}
              className="flex-1 py-2.5 rounded-xl border border-slate-700 text-slate-400 text-sm hover:text-white hover:bg-slate-800 transition-colors duration-150"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function SessionsPanel() {
  const [sessions, setSessions] = useState<SessionDevice[]>(SESSIONS);

  function revoke(id: string) {
    setSessions((prev) =>
      prev.filter((s) => (s.id === id ? s.isCurrent : true)),
    );
  }

  return (
    <>
      <Card>
        <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-5">
          Active sessions
        </p>
        <div className="space-y-3">
          {sessions.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className={`flex items-center gap-4 p-4 rounded-xl border transition-colors duration-200
                  ${s.isCurrent ? "border-cyan-500/30 bg-cyan-500/5" : "border-slate-800 hover:border-slate-700"}`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                  ${s.isCurrent ? "bg-cyan-500/10" : "bg-slate-800"}`}
                >
                  <Icon
                    className={`w-5 h-5 ${s.isCurrent ? "text-cyan-400" : "text-slate-500"}`}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm font-semibold text-white">
                      {s.device}
                    </p>
                    {s.isCurrent && (
                      <span className="text-[10px] text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full">
                        This device
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {s.browser} · {s.location}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Last active: {s.lastSeen}
                  </p>
                </div>

                {!s.isCurrent && (
                  <button
                    onClick={() => revoke(s.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-red-400 border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 transition-colors duration-150 flex-shrink-0"
                  >
                    <LogOut className="w-3 h-3" /> Revoke
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </Card>

      <Card gradColor="from-red-500 to-rose-700">
        <SettingRow
          label="Sign out of all other devices"
          description="Keeps you logged in here, but ends every other active session immediately."
          danger
        >
          <button
            onClick={() =>
              setSessions((prev) => prev.filter((s) => s.isCurrent))
            }
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-red-400 border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 transition-colors duration-150 whitespace-nowrap"
          >
            <LogOut className="w-3.5 h-3.5" /> Sign out all
          </button>
        </SettingRow>
      </Card>
    </>
  );
}

// ─── Panel map ────────────────────────────────────────────────────────────────

const PANELS: Record<SettingsTab, React.ReactNode> = {
  profile: <ProfilePanel />,
  account: <AccountPanel />,
  notifications: <NotificationsPanel />,
  appearance: <AppearancePanel />,
  privacy: <PrivacyPanel />,
  sessions: <SessionsPanel />,
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function StudentSettings() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("profile");
  const [enrolStatus] = useState<EnrolStatus>("Enrolled");

  const active = TABS.find((t) => t.id === activeTab)!;

  return (
    <div className="min-h-screen bg-[#080F1E] flex pt-20">
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <StudentHeader
            title="Settings"
            subtitle="Manage your profile, security, and preferences"
            enrolStatus={enrolStatus}
          />

          <div className="flex flex-col lg:flex-row gap-6 mt-2">
            {/* ── Sidebar nav ── */}
            <aside className="lg:w-56 flex-shrink-0">
              <div className="bg-[#0D1629] border border-slate-800 rounded-2xl overflow-hidden">
                <div className="h-[2px] w-full bg-gradient-to-r from-cyan-500 to-blue-600" />
                <nav className="p-2">
                  {TABS.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = tab.id === activeTab;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all duration-150 cursor-pointer
                          ${
                            isActive
                              ? "bg-cyan-500/10 border border-cyan-500/20"
                              : "hover:bg-slate-800/60 border border-transparent"
                          }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0
                          ${isActive ? "bg-gradient-to-br from-cyan-500 to-blue-600" : "bg-slate-800"}`}
                        >
                          <Icon
                            className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-slate-500"}`}
                          />
                        </div>
                        <div className="min-w-0">
                          <p
                            className={`text-xs font-semibold leading-none ${isActive ? "text-cyan-400" : "text-slate-300"}`}
                          >
                            {tab.label}
                          </p>
                          <p className="text-[10px] text-slate-600 mt-0.5 truncate">
                            {tab.description}
                          </p>
                        </div>
                        {isActive && (
                          <ChevronRight className="w-3.5 h-3.5 text-cyan-400 ml-auto flex-shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* ── Content area ── */}
            <div className="flex-1 min-w-0">
              {/* Section eyebrow */}
              <div className="mb-5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <active.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{active.label}</p>
                  <p className="text-xs text-slate-500">{active.description}</p>
                </div>
              </div>

              {PANELS[activeTab]}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
