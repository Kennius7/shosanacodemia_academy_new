import type { Metadata } from "next";
import "../globals.css";
import { Toaster } from "sonner";
import QueryProvider from "@/components/provider/QueryProvider";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "Shosanacodemia — Train. Build. Get Hired.",
  description:
    "Intensive software engineering training for Africa's next generation of developers. Live mentorship, real projects, career support.",
  keywords: [
    "software engineering",
    "coding bootcamp",
    "Nigeria",
    "Africa",
    "React",
    "Next.js",
    "tech training",
  ],
  openGraph: {
    title: "Shosanacodemia — Train. Build. Get Hired.",
    description:
      "Join the next cohort. Intensive, mentored software engineering training.",
    type: "website",
  },
  icons: {
    icon: "/favicon.png", // path relative to the `public` folder
    // Optional: different sizes or formats
    // icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#050A14]">
        <AuthProvider>
          <QueryProvider>
            {children}
            <div className="fixed z-60 top-8 right-4">
              <Toaster position="top-right" richColors />
            </div>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
