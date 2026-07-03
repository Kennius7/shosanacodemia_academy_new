"use client";

import AdminHeader from "@/components/AdminHeader";
import { useParams } from "next/navigation";
import { useMain } from "@/context/MainContext";
import SectionEditHeader from "@/components/SectionEditHeader";
import { useState } from "react";

interface ResourceContentProps {
  id: string;
  title: string;
}

function ResourceContent({ id, title }: ResourceContentProps) {
  // const router = useRouter();
  const [isEditable, setIsEditable] = useState(false);
  const { liveResources } = useMain();
  const filteredResource = liveResources.filter((res) => res.name === title)[0];

  if (!filteredResource) return null;
  const { gradColor, shortName } = filteredResource;

  return (
    <div className="mt-8">
      <SectionEditHeader
        id={id}
        title={title}
        isEditable={isEditable}
        setIsEditable={setIsEditable}
      />

      <div className="mt-6 space-y-6">
        {filteredResource.data.map((resource, i) => (
          <div
            key={i}
            className="bg-[#0D1629] border border-slate-800 hover:border-cyan-500/30 
              rounded-2xl overflow-hidden transition-colors duration-200 cursor-pointer"
          >
            {/* Gradient accent bar */}
            <div className={`h-[2px] w-full bg-gradient-to-r ${gradColor}`} />

            <div className="p-6">
              <p className="text-sm font-semibold text-white mb-4">
                {i + 1}. {resource.topic}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {resource.notes.map((note, j) => (
                  <div
                    key={j}
                    className="bg-[#0D1629] border border-slate-800 hover:border-cyan-500/30 
                      rounded-2xl overflow-hidden transition-colors duration-200"
                  >
                    <div
                      className={`h-2 w-full bg-gradient-to-r ${gradColor}`}
                    />

                    <div className="p-4 flex items-start gap-3">
                      <div
                        className={`w-8 h-8 rounded-xl bg-gradient-to-br ${gradColor} 
                          flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}
                      >
                        {shortName}
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white truncate">
                          {j + 1}. {note.title}
                        </p>
                        <p className="text-sm text-slate-500">{note.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResourceEdit() {
  const { id } = useParams();
  const { liveResources } = useMain();
  console.log("Resource Data:>>>>>>>>>", liveResources);
  const resourceId = decodeURIComponent(id as string);
  const filteredResource = liveResources.filter(
    (res) => res.id === resourceId,
  )[0];
  const title = (filteredResource && filteredResource.name) || "";
  //   const [resource, setResource] = useState<string>("Intro to Computer Science");
  // console.log("Resource ID:>>>>", typeof id);
  // console.log("Resource ID:>>>>>>>>>", typeof resourceId);

  return (
    <div className="min-h-screen bg-[#080F1E] flex pt-20">
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <AdminHeader title={title} subtitle={`Edit ${title}`} />

          <ResourceContent id={resourceId} title={title} />
        </main>
      </div>
    </div>
  );
}
