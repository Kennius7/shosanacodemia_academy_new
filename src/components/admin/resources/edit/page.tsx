// "use client";

// import AdminHeader from "@/components/AdminHeader";
// import { useParams } from "next/navigation";
// import { useMain } from "@/context/MainContext";
// import SectionEditHeader from "@/components/SectionEditHeader";
// import { useState } from "react";

// interface ResourceContentProps {
//   id: string;
//   title: string;
// }

// function ResourceContent({ id, title }: ResourceContentProps) {
//   // const router = useRouter();
//   const [isEditable, setIsEditable] = useState(false);
//   const { liveResources } = useMain();
//   const filteredResource = liveResources.filter((res) => res.name === title)[0];

//   if (!filteredResource) return null;
//   const { gradColor, shortName } = filteredResource;

//   return (
//     <div className="mt-8">
//       <SectionEditHeader
//         id={id}
//         title={title}
//         isEditable={isEditable}
//         setIsEditable={setIsEditable}
//       />

//       <div className="mt-6 space-y-6">
//         {filteredResource.data.map((resource, i) => (
//           <div
//             key={i}
//             className="bg-[#0D1629] border border-slate-800 hover:border-cyan-500/30
//               rounded-2xl overflow-hidden transition-colors duration-200 cursor-pointer"
//           >
//             {/* Gradient accent bar */}
//             <div className={`h-[2px] w-full bg-gradient-to-r ${gradColor}`} />

//             <div className="p-6">
//               <p className="text-sm font-semibold text-white mb-4">
//                 {i + 1}. {resource.topic}
//               </p>

//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//                 {resource.notes.map((note, j) => (
//                   <div
//                     key={j}
//                     className="bg-[#0D1629] border border-slate-800 hover:border-cyan-500/30
//                       rounded-2xl overflow-hidden transition-colors duration-200"
//                   >
//                     <div
//                       className={`h-2 w-full bg-gradient-to-r ${gradColor}`}
//                     />

//                     <div className="p-4 flex items-start gap-3">
//                       <div
//                         className={`w-8 h-8 rounded-xl bg-gradient-to-br ${gradColor}
//                           flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}
//                       >
//                         {shortName}
//                       </div>

//                       <div className="flex-1 min-w-0">
//                         <p className="text-sm font-semibold text-white truncate">
//                           {j + 1}. {note.title}
//                         </p>
//                         <p className="text-sm text-slate-500">{note.content}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // ─── Page ─────────────────────────────────────────────────────────────────────

// export default function ResourceEdit() {
//   const { id } = useParams();
//   const { liveResources } = useMain();
//   console.log("Resource Data:>>>>>>>>>", liveResources);
//   const resourceId = decodeURIComponent(id as string);
//   const filteredResource = liveResources.filter(
//     (res) => res.id === resourceId,
//   )[0];
//   const title = (filteredResource && filteredResource.name) || "";
//   //   const [resource, setResource] = useState<string>("Intro to Computer Science");
//   // console.log("Resource ID:>>>>", typeof id);
//   // console.log("Resource ID:>>>>>>>>>", typeof resourceId);

//   return (
//     <div className="min-h-screen bg-[#080F1E] flex pt-20">
//       <div className="flex-1 flex flex-col min-w-0">
//         <main className="flex-1 overflow-y-auto p-4 sm:p-6">
//           <AdminHeader title={title} subtitle={`Edit ${title}`} />

//           <ResourceContent id={resourceId} title={title} />
//         </main>
//       </div>
//     </div>
//   );
// }

// "use client";

// import AdminHeader from "@/components/AdminHeader";
// import { useParams } from "next/navigation";
// import { useMain } from "@/context/MainContext";
// import SectionEditHeader from "@/components/SectionEditHeader";
// import { useState, useEffect, useRef, useCallback } from "react";
// import { Bold, Italic, Underline, List } from "lucide-react";

// // ─── Types ────────────────────────────────────────────────────────────────────

// interface ResourceNote {
//   title: string;
//   content: string;
// }

// interface ResourceTopic {
//   topic: string;
//   notes: ResourceNote[];
// }

// interface ResourceContentProps {
//   id: string;
//   title: string;
// }

// // ─── Rich text editor ──────────────────────────────────────────────────────────
// // Lightweight, dependency-free contentEditable editor. Stores/returns HTML.
// // NOTE: if this HTML is ever persisted and re-rendered for other users,
// // sanitize it server-side (e.g. with DOMPurify) before writing it to the DOM.

// interface RichTextEditorProps {
//   value: string;
//   onChange: (html: string) => void;
//   placeholder?: string;
//   variant?: "title" | "body";
// }

// function RichTextEditor({
//   value,
//   onChange,
//   placeholder = "Start typing...",
//   variant = "body",
// }: RichTextEditorProps) {
//   const editorRef = useRef<HTMLDivElement>(null);
//   const hasMounted = useRef(false);

//   // Set initial HTML once so React doesn't clobber the cursor position
//   // on every keystroke by re-diffing the DOM.
//   useEffect(() => {
//     if (!hasMounted.current && editorRef.current) {
//       editorRef.current.innerHTML = value || "";
//       hasMounted.current = true;
//     }
//   }, [value]);

//   const exec = useCallback(
//     (command: string) => {
//       document.execCommand(command, false);
//       editorRef.current?.focus();
//       if (editorRef.current) onChange(editorRef.current.innerHTML);
//     },
//     [onChange],
//   );

//   const handleInput = () => {
//     if (editorRef.current) onChange(editorRef.current.innerHTML);
//   };

//   return (
//     <div
//       className="bg-[#080F1E] border border-slate-800 focus-within:border-cyan-500/50
//         rounded-xl overflow-hidden transition-colors duration-200"
//     >
//       {/* Toolbar */}
//       <div className="flex items-center gap-1 px-2 py-1.5 border-b border-slate-800 bg-[#0D1629]">
//         <button
//           type="button"
//           onMouseDown={(e) => e.preventDefault()}
//           onClick={() => exec("bold")}
//           className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
//           aria-label="Bold"
//         >
//           <Bold className="w-3.5 h-3.5" />
//         </button>
//         <button
//           type="button"
//           onMouseDown={(e) => e.preventDefault()}
//           onClick={() => exec("italic")}
//           className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
//           aria-label="Italic"
//         >
//           <Italic className="w-3.5 h-3.5" />
//         </button>
//         <button
//           type="button"
//           onMouseDown={(e) => e.preventDefault()}
//           onClick={() => exec("underline")}
//           className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
//           aria-label="Underline"
//         >
//           <Underline className="w-3.5 h-3.5" />
//         </button>
//         {variant === "body" && (
//           <button
//             type="button"
//             onMouseDown={(e) => e.preventDefault()}
//             onClick={() => exec("insertUnorderedList")}
//             className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
//             aria-label="Bulleted list"
//           >
//             <List className="w-3.5 h-3.5" />
//           </button>
//         )}
//       </div>

//       {/* Editable surface */}
//       <div
//         ref={editorRef}
//         contentEditable
//         suppressContentEditableWarning
//         onInput={handleInput}
//         data-placeholder={placeholder}
//         className={`px-3 py-2 outline-none text-white
//           empty:before:content-[attr(data-placeholder)] empty:before:text-slate-600
//           [&_ul]:list-disc [&_ul]:pl-5 [&_a]:text-cyan-400
//           ${variant === "title" ? "text-sm font-semibold" : "text-sm text-slate-300"}`}
//       />
//     </div>
//   );
// }

// // ─── Resource content ──────────────────────────────────────────────────────────

// function ResourceContent({ id, title }: ResourceContentProps) {
//   const [isEditable, setIsEditable] = useState(false);
//   const { liveResources } = useMain();
//   const filteredResource = liveResources.filter((res) => res.name === title)[0];

//   // Local editable copy of the topics/notes. Kept separate from context state
//   // so edits can be drafted, then committed (or discarded) via Save / Cancel.
//   const [draftTopics, setDraftTopics] = useState<ResourceTopic[]>([]);

//   useEffect(() => {
//     if (filteredResource) {
//       // eslint-disable-next-line react-hooks/set-state-in-effect
//       setDraftTopics(structuredClone(filteredResource.data));
//     }
//   }, [filteredResource]);

//   if (!filteredResource) return null;
//   const { gradColor, shortName } = filteredResource;

//   const updateTopic = (topicIndex: number, html: string) => {
//     setDraftTopics((prev) => {
//       const next = [...prev];
//       next[topicIndex] = { ...next[topicIndex], topic: html };
//       return next;
//     });
//   };

//   const updateNote = (
//     topicIndex: number,
//     noteIndex: number,
//     field: "title" | "content",
//     html: string,
//   ) => {
//     setDraftTopics((prev) => {
//       const next = [...prev];
//       const notes = [...next[topicIndex].notes];
//       notes[noteIndex] = { ...notes[noteIndex], [field]: html };
//       next[topicIndex] = { ...next[topicIndex], notes };
//       return next;
//     });
//   };

//   const handleSetIsEditable = (next: boolean) => {
//     // Leaving edit mode without a dedicated cancel action commits the draft.
//     // TODO: replace with a real mutation (e.g. useSWR mutate / API call) once
//     // the backend endpoint for updating resource content exists.
//     if (!next) {
//       console.log("Saving resource content:>>>>>>>>>", draftTopics);
//     }
//     setIsEditable(next);
//   };

//   return (
//     <div className="mt-8">
//       <SectionEditHeader
//         id={id}
//         title={title}
//         isEditable={isEditable}
//         setIsEditable={handleSetIsEditable}
//       />

//       <div className="mt-6 space-y-6">
//         {draftTopics.map((resource, i) => (
//           <div
//             key={i}
//             className="bg-[#0D1629] border border-slate-800 hover:border-cyan-500/30
//               rounded-2xl overflow-hidden transition-colors duration-200"
//           >
//             {/* Gradient accent bar */}
//             <div className={`h-[2px] w-full bg-gradient-to-r ${gradColor}`} />

//             <div className="p-6">
//               {isEditable ? (
//                 <div className="mb-4 flex items-start gap-2">
//                   <span className="text-sm font-semibold text-slate-500 pt-2 shrink-0">
//                     {i + 1}.
//                   </span>
//                   <div className="flex-1">
//                     <RichTextEditor
//                       value={resource.topic}
//                       onChange={(html) => updateTopic(i, html)}
//                       placeholder="Topic name"
//                       variant="title"
//                     />
//                   </div>
//                 </div>
//               ) : (
//                 <p className="text-sm font-semibold text-white mb-4">
//                   {i + 1}. {resource.topic}
//                 </p>
//               )}

//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//                 {resource.notes.map((note, j) => (
//                   <div
//                     key={j}
//                     className="bg-[#0D1629] border border-slate-800 hover:border-cyan-500/30
//                       rounded-2xl overflow-hidden transition-colors duration-200"
//                   >
//                     <div
//                       className={`h-2 w-full bg-gradient-to-r ${gradColor}`}
//                     />

//                     <div className="p-4 flex items-start gap-3">
//                       <div
//                         className={`w-8 h-8 rounded-xl bg-gradient-to-br ${gradColor}
//                           flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}
//                       >
//                         {shortName}
//                       </div>

//                       <div className="flex-1 min-w-0">
//                         {isEditable ? (
//                           <div className="space-y-2">
//                             <RichTextEditor
//                               value={note.title}
//                               onChange={(html) =>
//                                 updateNote(i, j, "title", html)
//                               }
//                               placeholder={`${j + 1}. Note title`}
//                               variant="title"
//                             />
//                             <RichTextEditor
//                               value={note.content}
//                               onChange={(html) =>
//                                 updateNote(i, j, "content", html)
//                               }
//                               placeholder="Note content"
//                               variant="body"
//                             />
//                           </div>
//                         ) : (
//                           <>
//                             <p className="text-sm font-semibold text-white truncate">
//                               {j + 1}.{" "}
//                               <span
//                                 dangerouslySetInnerHTML={{ __html: note.title }}
//                               />
//                             </p>
//                             <p
//                               className="text-sm text-slate-500"
//                               dangerouslySetInnerHTML={{ __html: note.content }}
//                             />
//                           </>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // ─── Page ─────────────────────────────────────────────────────────────────────

// export default function ResourceEdit() {
//   const { id } = useParams();
//   const { liveResources } = useMain();
//   const resourceId = decodeURIComponent(id as string);
//   const filteredResource = liveResources.filter(
//     (res) => res.id === resourceId,
//   )[0];
//   const title = (filteredResource && filteredResource.name) || "";

//   return (
//     <div className="min-h-screen bg-[#080F1E] flex pt-20">
//       <div className="flex-1 flex flex-col min-w-0">
//         <main className="flex-1 overflow-y-auto p-4 sm:p-6">
//           <AdminHeader title={title} subtitle={`Edit ${title}`} />

//           <ResourceContent id={resourceId} title={title} />
//         </main>
//       </div>
//     </div>
//   );
// }

"use client";

import AdminHeader from "@/components/AdminHeader";
import { useParams } from "next/navigation";
import { useMain } from "@/context/MainContext";
import SectionEditHeader from "@/components/SectionEditHeader";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  ArrowDown,
  ArrowUp,
  Bold,
  Italic,
  Plus,
  Underline,
  List,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ResourceNote {
  title: string;
  content: string;
}

interface ResourceTopic {
  topic: string;
  notes: ResourceNote[];
}

interface ResourceContentProps {
  id: string;
  title: string;
}

type MoveDirection = "up" | "down";

// ─── Rich text editor ──────────────────────────────────────────────────────────
// Lightweight, dependency-free contentEditable editor. Stores/returns HTML.
// NOTE: if this HTML is ever persisted and re-rendered for other users,
// sanitize it server-side (e.g. with DOMPurify) before writing it to the DOM.

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  variant?: "title" | "body";
}

function RichTextEditor({
  value,
  onChange,
  placeholder = "Start typing...",
  variant = "body",
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const hasMounted = useRef(false);

  // Set initial HTML once so React doesn't clobber the cursor position
  // on every keystroke by re-diffing the DOM.
  useEffect(() => {
    if (!hasMounted.current && editorRef.current) {
      editorRef.current.innerHTML = value || "";
      hasMounted.current = true;
    }
  }, [value]);

  const exec = useCallback(
    (command: string) => {
      document.execCommand(command, false);
      editorRef.current?.focus();
      if (editorRef.current) onChange(editorRef.current.innerHTML);
    },
    [onChange],
  );

  const handleInput = () => {
    if (editorRef.current) onChange(editorRef.current.innerHTML);
  };

  return (
    <div
      className="bg-[#080F1E] border border-slate-800 focus-within:border-cyan-500/50
        rounded-xl overflow-hidden transition-colors duration-200"
    >
      {/* Toolbar */}
      <div className="flex items-center gap-1 px-2 py-1.5 border-b border-slate-800 bg-[#0D1629]">
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => exec("bold")}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
          aria-label="Bold"
        >
          <Bold className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => exec("italic")}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
          aria-label="Italic"
        >
          <Italic className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => exec("underline")}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
          aria-label="Underline"
        >
          <Underline className="w-3.5 h-3.5" />
        </button>
        {variant === "body" && (
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => exec("insertUnorderedList")}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            aria-label="Bulleted list"
          >
            <List className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Editable surface */}
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        data-placeholder={placeholder}
        className={`px-3 py-2 outline-none text-white
          empty:before:content-[attr(data-placeholder)] empty:before:text-slate-600
          [&_ul]:list-disc [&_ul]:pl-5 [&_a]:text-cyan-400
          ${variant === "title" ? "text-sm font-semibold" : "text-sm text-slate-300"}`}
      />
    </div>
  );
}

// ─── Reorder controls ──────────────────────────────────────────────────────────
// Small up/down arrow pair shared by both topics and notes.

interface ReorderControlsProps {
  onMoveUp: () => void;
  onMoveDown: () => void;
  disableUp: boolean;
  disableDown: boolean;
  label: string;
}

function ReorderControls({
  onMoveUp,
  onMoveDown,
  disableUp,
  disableDown,
  label,
}: ReorderControlsProps) {
  return (
    <div className="flex flex-col shrink-0">
      <button
        type="button"
        onClick={onMoveUp}
        disabled={disableUp}
        aria-label={`Move ${label} up`}
        className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80
          transition-colors disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-slate-400"
      >
        <ArrowUp className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        onClick={onMoveDown}
        disabled={disableDown}
        aria-label={`Move ${label} down`}
        className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80
          transition-colors disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-slate-400"
      >
        <ArrowDown className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

function swap<T>(arr: T[], i: number, j: number): T[] {
  const next = [...arr];
  [next[i], next[j]] = [next[j], next[i]];
  return next;
}

const emptyNote = (): ResourceNote => ({ title: "", content: "" });
const emptyTopic = (): ResourceTopic => ({ topic: "", notes: [emptyNote()] });

// ─── Resource content ──────────────────────────────────────────────────────────

function ResourceContent({ id, title }: ResourceContentProps) {
  const [isEditable, setIsEditable] = useState(false);
  const { liveResources } = useMain();
  const filteredResource = liveResources.filter((res) => res.name === title)[0];

  // Local editable copy of the topics/notes. Kept separate from context state
  // so edits can be drafted, then committed (Save) or discarded (Cancel).
  const [draftTopics, setDraftTopics] = useState<ResourceTopic[]>([]);

  useEffect(() => {
    if (filteredResource) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDraftTopics(structuredClone(filteredResource.data));
    }
  }, [filteredResource]);

  if (!filteredResource) return null;
  const { gradColor, shortName } = filteredResource;

  const updateTopic = (topicIndex: number, html: string) => {
    setDraftTopics((prev) => {
      const next = [...prev];
      next[topicIndex] = { ...next[topicIndex], topic: html };
      return next;
    });
  };

  const updateNote = (
    topicIndex: number,
    noteIndex: number,
    field: "title" | "content",
    html: string,
  ) => {
    setDraftTopics((prev) => {
      const next = [...prev];
      const notes = [...next[topicIndex].notes];
      notes[noteIndex] = { ...notes[noteIndex], [field]: html };
      next[topicIndex] = { ...next[topicIndex], notes };
      return next;
    });
  };

  const addTopic = () => {
    setDraftTopics((prev) => [...prev, emptyTopic()]);
  };

  const addNote = (topicIndex: number) => {
    setDraftTopics((prev) => {
      const next = [...prev];
      next[topicIndex] = {
        ...next[topicIndex],
        notes: [...next[topicIndex].notes, emptyNote()],
      };
      return next;
    });
  };

  const moveTopic = (topicIndex: number, direction: MoveDirection) => {
    setDraftTopics((prev) => {
      const target = direction === "up" ? topicIndex - 1 : topicIndex + 1;
      if (target < 0 || target >= prev.length) return prev;
      return swap(prev, topicIndex, target);
    });
  };

  const moveNote = (
    topicIndex: number,
    noteIndex: number,
    direction: MoveDirection,
  ) => {
    setDraftTopics((prev) => {
      const notes = prev[topicIndex].notes;
      const target = direction === "up" ? noteIndex - 1 : noteIndex + 1;
      if (target < 0 || target >= notes.length) return prev;
      const next = [...prev];
      next[topicIndex] = {
        ...next[topicIndex],
        notes: swap(notes, noteIndex, target),
      };
      return next;
    });
  };

  const handleSetIsEditable = (next: boolean) => {
    // Leaving edit mode via Save commits the draft.
    // TODO: replace with a real mutation (e.g. useSWR mutate / API call) once
    // the backend endpoint for updating resource content exists.
    if (!next) {
      console.log("Saving resource content:>>>>>>>>>", draftTopics);
    }
    setIsEditable(next);
  };

  const handleCancel = () => {
    // Discard the draft entirely and revert to the last saved data.
    if (filteredResource) {
      setDraftTopics(structuredClone(filteredResource.data));
    }
    setIsEditable(false);
  };

  return (
    <div className="mt-8">
      <SectionEditHeader
        id={id}
        title={title}
        isEditable={isEditable}
        setIsEditable={handleSetIsEditable}
        onCancel={handleCancel}
        onAddTopic={addTopic}
      />

      <div className="mt-6 space-y-6">
        {draftTopics.map((resource, i) => (
          <div
            key={i}
            className="bg-[#0D1629] border border-slate-800 hover:border-cyan-500/30
              rounded-2xl overflow-hidden transition-colors duration-200"
          >
            {/* Gradient accent bar */}
            <div className={`h-[2px] w-full bg-gradient-to-r ${gradColor}`} />

            <div className="p-6">
              {isEditable ? (
                <div className="mb-4 flex items-start gap-2">
                  <ReorderControls
                    label="topic"
                    onMoveUp={() => moveTopic(i, "up")}
                    onMoveDown={() => moveTopic(i, "down")}
                    disableUp={i === 0}
                    disableDown={i === draftTopics.length - 1}
                  />
                  <span className="text-sm font-semibold text-slate-500 pt-2 shrink-0">
                    {i + 1}.
                  </span>
                  <div className="flex-1">
                    <RichTextEditor
                      value={resource.topic}
                      onChange={(html) => updateTopic(i, html)}
                      placeholder="Topic name"
                      variant="title"
                    />
                  </div>
                </div>
              ) : (
                <p className="text-sm font-semibold text-white mb-4">
                  {i + 1}. {resource.topic}
                </p>
              )}

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
                      {isEditable && (
                        <ReorderControls
                          label="note"
                          onMoveUp={() => moveNote(i, j, "up")}
                          onMoveDown={() => moveNote(i, j, "down")}
                          disableUp={j === 0}
                          disableDown={j === resource.notes.length - 1}
                        />
                      )}

                      <div
                        className={`w-8 h-8 rounded-xl bg-gradient-to-br ${gradColor}
                          flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}
                      >
                        {shortName}
                      </div>

                      <div className="flex-1 min-w-0">
                        {isEditable ? (
                          <div className="space-y-2">
                            <RichTextEditor
                              value={note.title}
                              onChange={(html) =>
                                updateNote(i, j, "title", html)
                              }
                              placeholder={`${j + 1}. Note title`}
                              variant="title"
                            />
                            <RichTextEditor
                              value={note.content}
                              onChange={(html) =>
                                updateNote(i, j, "content", html)
                              }
                              placeholder="Note content"
                              variant="body"
                            />
                          </div>
                        ) : (
                          <>
                            <p className="text-sm font-semibold text-white truncate">
                              {j + 1}.{" "}
                              <span
                                dangerouslySetInnerHTML={{ __html: note.title }}
                              />
                            </p>
                            <p
                              className="text-sm text-slate-500"
                              dangerouslySetInnerHTML={{ __html: note.content }}
                            />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {isEditable && (
                  <button
                    type="button"
                    onClick={() => addNote(i)}
                    className="flex items-center justify-center gap-2 min-h-[72px]
                      border border-dashed border-slate-700 hover:border-cyan-500/50
                      rounded-2xl text-sm text-slate-400 hover:text-cyan-300
                      transition-colors duration-200"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Note
                  </button>
                )}
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
  const resourceId = decodeURIComponent(id as string);
  const filteredResource = liveResources.filter(
    (res) => res.id === resourceId,
  )[0];
  const title = (filteredResource && filteredResource.name) || "";

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
