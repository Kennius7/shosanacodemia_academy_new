"use client";

import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import { toast } from "sonner";

interface DeleteResourceModalProps {
  onClose: () => void;
  onDelete: () => void;
}

export default function DeleteResourceModal({
  onClose,
  onDelete,
}: DeleteResourceModalProps) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);

  const handleDelete = useCallback(async () => {
    try {
      setDeleting(true);
      console.log("Deleting...");
      onDelete();
      toast.success("Successfully deleted resource!", {
        duration: 4000,
        position: "top-right",
      });
    } catch (e: unknown) {
      console.log("Error:>>>>>>>", e);
    } finally {
      setTimeout(() => {
        setDeleting(false);
        console.log("Deleted!");
        onClose();
      }, 2000);

      setTimeout(() => {
        router.back();
      }, 3000);
    }
  }, [onClose, onDelete, router]);

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
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-2xl font-bold text-white">Delete Resource</h2>
              {/* <p className="text-sm text-slate-400 mt-1">
                Fill in the form to create a new resource
              </p> */}
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-white rounded-lg hover:bg-slate-800 transition-all"
            >
              ✕
            </button>
          </div>

          <div className="flex items-center justify-center mb-10">
            <div className="text-sm text-center">
              Are you really sure you want to delete this resource?
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-6">
            <button
              onClick={onClose}
              className="w-full py-3.5 bg-gradient-to-r from-cyan-200 to-cyan-400 
              cursor-pointer hover:from-cyan-300 hover:to-cyan-500 text-slate-700 
              font-semibold rounded-xl transition-all duration-500 shadow-lg 
              shadow-cyan-600/20"
            >
              Cancel
            </button>

            <button
              onClick={handleDelete}
              disabled={deleting}
              className="w-full py-3.5 bg-gradient-to-r from-red-400 to-red-600 cursor-pointer
              hover:from-red-300 hover:to-red-500 disabled:opacity-50 disabled:cursor-not-allowed 
              text-slate-700 font-semibold rounded-xl transition-all duration-500 shadow-lg shadow-red-500/20"
            >
              {deleting ? "Deleting…" : "Delete Resource"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
