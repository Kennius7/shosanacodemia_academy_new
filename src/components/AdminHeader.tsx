// import TrackBanner from "./TrackBanner";
import { useAuth } from "@/context/AuthContext";
import { capitalize } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface StudentHeaderProps {
  title: string;
  subtitle: string;
}

function AdminHeader({ title, subtitle }: StudentHeaderProps) {
  const { accountType } = useAuth();
  const router = useRouter();

  return (
    <div className="mb-4 flex justify-between items-center">
      <div className="space-y-1">
        <button
          onClick={() => router.back()}
          className="flex gap-1 items-center justify-start mb-2 cursor-pointer 
          text-slate-500 hover:text-cyan-500"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-xs">Go back</span>
        </button>
        <h1 className="text-xl sm:text-2xl font-bold text-white">{title}</h1>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>

      <div className="flex flex-col justify-center items-end gap-1">
        <div className="text-sm text-slate-500">
          Role: <span className="text-cyan-500">{capitalize(accountType)}</span>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;
