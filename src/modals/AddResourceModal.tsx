"use client";

import { useState, useEffect, useCallback } from "react";
import { ResourceListType } from "@/types";
import { useMain } from "@/context/MainContext";
import { toast } from "sonner";

interface AddResourceModalProps {
  onClose: () => void;
}

export default function AddResourceModal({ onClose }: AddResourceModalProps) {
  const { liveResources, handleAddResource } = useMain();
  const [localError, setLocalError] = useState("");
  const [color, setColor] = useState("violet");
  const [submitting, setSubmitting] = useState(false);
  const [resourceFormData, setResourceFormData] = useState<ResourceListType>({
    id: "",
    name: "",
    description: "",
    shortName: "",
    data: [],
    color: `text-${color}-400`,
    gradColor: `from-${color}-500 to-blue-600`,
    activeBg: `bg-${color}-500/20 border-${color}-500/20`,
    inactiveBg: `bg-${color}-500/10 border-${color}-500/10`,
  });

  const handleChange = (key: keyof ResourceListType, value: string) => {
    setResourceFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleColorChange = (value: string) => {
    setColor(value);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setResourceFormData((prev) => ({
      ...prev,
      color: `text-${color}-400`,
      gradColor: `from-${color}-500 to-blue-600`,
      activeBg: `bg-${color}-500/20 border-${color}-500/20`,
      inactiveBg: `bg-${color}-500/10 border-${color}-500/10`,
    }));
  }, [color]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleSubmit = useCallback(async () => {
    setLocalError("");
    const { name, description, shortName, id } = resourceFormData;
    const isResourceNameExist = liveResources.filter(
      (res) => res.name === resourceFormData.name,
    );
    const isResourceIdExist = liveResources.filter(
      (res) => res.id === resourceFormData.id,
    );
    console.log(
      "Does Resource Name and ID exist:>>>>>>>>>>",
      isResourceNameExist.length > 0,
      isResourceIdExist.length > 0,
    );
    console.log("Resource Form Data:>>>>>>>>>>>>", resourceFormData.name);

    if (name === "" || description === "" || shortName === "" || id === "") {
      setLocalError("Fill in the empty spaces");
      return;
    }
    if (resourceFormData.shortName.length > 2) {
      setLocalError("Short Name must not be more than 2 letters.");
      return;
    }
    if (isResourceNameExist.length > 0 || isResourceIdExist.length > 0) {
      setLocalError("Resource name or ID exists. Choose another.");
      return;
    }

    try {
      setSubmitting(true);
      console.log("Submitting...");
      handleAddResource(resourceFormData);
      toast.success("Successfully saved resource!", {
        duration: 4000,
        position: "top-right",
      });
    } catch (e: unknown) {
      console.log("Error:>>>>>>>", e);
    } finally {
      setTimeout(() => {
        setSubmitting(false);
        console.log("Submitted!");
        onClose();
      }, 2000);
    }
  }, [resourceFormData, liveResources, handleAddResource, onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-3xl bg-[#0D1629] border border-cyan-500/20 
        rounded-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden"
      >
        {/* Top accent */}
        <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600" />
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Create New Resource
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Fill in the form to create a new resource
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-white rounded-lg hover:bg-slate-800 transition-all"
            >
              ✕
            </button>
          </div>

          {localError && (
            <div className="text-red-500 text-sm text-left mb-4">
              {localError}
            </div>
          )}

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 pl-1">
                    Resource Name
                  </label>
                  <input
                    type="text"
                    value={resourceFormData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Eg. Intro to Computer Science"
                    className="w-full px-4 py-3 bg-[#0A0F1E] border border-slate-700 
                    focus:border-cyan-500 rounded-xl text-white placeholder-slate-600 
                    text-sm outline-none transition-colors"
                    // onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 pl-1">
                    Short Name
                  </label>
                  <input
                    type="text"
                    value={resourceFormData.shortName}
                    onChange={(e) => handleChange("shortName", e.target.value)}
                    placeholder="Eg. CS"
                    className="w-full px-4 py-3 bg-[#0A0F1E] border border-slate-700 
                  focus:border-cyan-500 rounded-xl text-white placeholder-slate-600 
                  text-sm outline-none transition-colors"
                    // onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 pl-1">
                  Description
                </label>
                <textarea
                  value={resourceFormData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  placeholder="Eg. Intro to Computer Science"
                  className="w-full h-[130px] px-4 pt-2 bg-[#0A0F1E] border border-slate-700 
                  focus:border-cyan-500 rounded-xl text-white placeholder-slate-600 
                  text-sm outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 pl-1">
                  Resource ID
                </label>
                <input
                  type="text"
                  value={resourceFormData.id}
                  onChange={(e) => handleChange("id", e.target.value)}
                  placeholder="Eg. RES001"
                  className="w-full px-4 py-3 bg-[#0A0F1E] border border-slate-700 
                  focus:border-cyan-500 rounded-xl text-white placeholder-slate-600 
                  text-sm outline-none transition-colors"
                  // onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 pl-1">
                  Color
                </label>
                <input
                  type="text"
                  value={color}
                  onChange={(e) => handleColorChange(e.target.value)}
                  placeholder="Eg. red"
                  className="w-full px-4 py-3 bg-[#0A0F1E] border border-slate-700 
                  focus:border-cyan-500 rounded-xl text-white placeholder-slate-600 
                  text-sm outline-none transition-colors"
                  // onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="mt-6 w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer
            hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed 
            text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20"
          >
            {submitting ? "Please wait…" : "Create Resource"}
          </button>
        </div>
      </div>
    </div>
  );
}
