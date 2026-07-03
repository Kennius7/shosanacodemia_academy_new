import { useMain } from "@/context/MainContext";
import DeleteResourceModal from "@/modals/DeleteResourceModal";
import { Edit, Save, Trash } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

interface SectionEditHeaderProps {
  id: string;
  title: string;
  isEditable: boolean;
  setIsEditable: Dispatch<SetStateAction<boolean>>;
}

function SectionEditHeader({
  id,
  title,
  isEditable,
  setIsEditable,
}: SectionEditHeaderProps) {
  const {
    handleEditResourceTitle,
    handleSaveResourceTopic,
    handleDeleteResource,
  } = useMain();
  const [isDeleteResourceModal, setIsDeleteResourceModal] = useState(false);

  return (
    <div className="flex items-center justify-between mb-4">
      {isEditable ? (
        <div className="w-1/2 h-6 px-2">
          <input
            type="text"
            value={title}
            onChange={(e) => handleEditResourceTitle(id, e.target.value)}
            placeholder="Eg. Intro to Computer Science"
            className="w-full h-full px-2 py-2 bg-[#0A0F1E] border border-slate-700 
                    focus:border-cyan-500 rounded-sm text-white placeholder-slate-600 
                    text-base font-bold outline-none transition-colors"
          />
        </div>
      ) : (
        <div className="w-1/2 h-6 px-4">
          <h2 className="w-full h-full text-base font-bold text-white">
            {title}
          </h2>
        </div>
      )}

      <div className="flex items-center justify-end gap-4">
        <button
          onClick={() => setIsEditable((prev) => !prev)}
          className="flex items-center gap-1 text-md text-cyan-200 hover:text-cyan-500 
            font-medium transition-colors cursor-pointer border border-slate-700 rounded-sm px-2 py-1"
        >
          <Edit className="w-3.5 h-3.5" /> Edit
        </button>
        <button
          onClick={handleSaveResourceTopic}
          className="flex items-center gap-1 text-md text-cyan-200 hover:text-cyan-500 
            font-medium transition-colors cursor-pointer border border-slate-700 rounded-sm px-2 py-1"
        >
          <Save className="w-3.5 h-3.5" /> Save
        </button>
        <button
          onClick={() => setIsDeleteResourceModal(true)}
          className="flex items-center gap-1 text-md text-red-300 hover:text-red-600 
            font-medium transition-colors cursor-pointer border border-red-200 rounded-sm px-2 py-1"
        >
          <Trash className="w-3.5 h-3.5" /> Delete
        </button>
      </div>

      {isDeleteResourceModal && (
        <DeleteResourceModal
          onClose={() => {
            setIsDeleteResourceModal(false);
          }}
          onDelete={() => handleDeleteResource(id)}
        />
      )}
    </div>
  );
}

export default SectionEditHeader;
