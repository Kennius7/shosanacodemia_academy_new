"use client";

import SectionHeader from "@/components/SectionHeader";
import { Dispatch, SetStateAction, useState } from "react";
import { useScreenDimension } from "@/hooks/useScreenDimension";
import AdminHeader from "@/components/AdminHeader";
import { useRouter } from "next/navigation";
import AddResourceModal from "@/modals/AddResourceModal";
import { useMain } from "@/context/MainContext";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ResourceTabsProps {
  resource: string;
  setResource: Dispatch<SetStateAction<string>>;
}

function ResourceTabs({ resource, setResource }: ResourceTabsProps) {
  const screen = useScreenDimension();
  const { liveResources, setIsAddResourceModal } = useMain();

  const AddResource = [
    {
      id: "ADD001",
      name: "Add Resource",
      description: "Add Resource",
      shortName: "+",
      data: [],
      color: "text-yellow-400",
      gradColor: "from-yellow-500 to-orange-600",
      activeBg: "bg-yellow-500/20 border-yellow-500/20",
      inactiveBg: "bg-yellow-500/10 border-yellow-500/10",
    },
  ];

  return (
    <div style={{ width: screen.width - (64 * 4 + 40) }} className="relative">
      {/* Fade-out hint on the right edge */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-12 
        bg-gradient-to-l from-[#080F1E] to-transparent z-10"
      />

      <div className="flex gap-3 overflow-x-auto scrollbar-none pb-1 border-b border-slate-800 pb-3">
        {[...AddResource, ...liveResources].map(
          ({ id, name, shortName, color, activeBg, inactiveBg }) => {
            const isActive = resource === id;
            const isAddResource = name === "Add Resource";
            const handleClick = () => {
              if (isAddResource) {
                setIsAddResourceModal(true);
              } else {
                setResource(id);
              }
            };

            return (
              <button
                key={id}
                onClick={handleClick}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl whitespace-nowrap 
                flex-shrink-0 transition-colors duration-1000 cursor-pointer
                ${isActive ? activeBg + " border-5" : inactiveBg + " border"}`}
              >
                <div
                  className={`w-6 h-6 rounded-xl flex items-center justify-center 
                  border flex-shrink-0 overflow-hidden
                  ${isActive ? activeBg : inactiveBg}`}
                >
                  <span
                    className={`font-bold 
                      ${isActive ? color : "text-slate-400"} 
                      ${isAddResource ? "text-xl" : "text-xs"}
                    `}
                  >
                    {shortName}
                  </span>
                </div>
                <span
                  className={`text-xs ${isActive ? color : "text-slate-500"}`}
                >
                  {name}
                </span>
              </button>
            );
          },
        )}
      </div>
    </div>
  );
}

// ─── Resource Content ─────────────────────────────────────────────────────────

function ResourceContent({ resourceId }: { resourceId: string }) {
  const router = useRouter();
  const { liveResources } = useMain();
  const filteredResource = liveResources.find((res) => res.id === resourceId);
  if (!filteredResource) return null;
  const { gradColor, shortName, id, name } = filteredResource;

  return (
    <div className="mt-8">
      <SectionHeader
        title={name}
        actionLabel={`Edit: ${name}`}
        action={() => router.push(`/admin/resources/${id}`)}
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

export default function AdminResourcesEditor() {
  const { isAddResourceModal, setIsAddResourceModal, liveResources } =
    useMain();
  console.log("Resource Data:.....", liveResources);
  const fetchedResourceData = (liveResources.length > 0 && liveResources) || [
    { id: "" },
  ];
  console.log("Fetched Resource Data:.....", fetchedResourceData);
  const [resource, setResource] = useState<string>(fetchedResourceData[0].id);

  return (
    <div className="min-h-screen bg-[#080F1E] flex pt-20">
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <AdminHeader
            title="Resources Editor"
            subtitle="View and Update resources"
          />

          <div className="mb-6">
            <ResourceTabs resource={resource} setResource={setResource} />
          </div>

          <ResourceContent resourceId={resource} />
        </main>
      </div>

      {isAddResourceModal && (
        <AddResourceModal
          onClose={() => {
            setIsAddResourceModal(false);
          }}
        />
      )}
    </div>
  );
}
