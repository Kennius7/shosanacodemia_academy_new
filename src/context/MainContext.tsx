/* eslint-disable no-unused-vars */
"use client";

import { Courses, ResourceList } from "@/data";
import { getArrayFromLocalStorage, saveArrayToLocalStorage } from "@/lib/utils";
import { Course, EnrolStatus, PlanTier, ResourceListType } from "@/types";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "sonner";

type MainContextType = {
  activeTrack: Course;
  enrolStatus: EnrolStatus;
  setEnrolStatus: Dispatch<SetStateAction<EnrolStatus>>;
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  selected: PlanTier;
  setSelected: Dispatch<SetStateAction<PlanTier>>;
  isAddResourceModal: boolean;
  setIsAddResourceModal: Dispatch<SetStateAction<boolean>>;
  liveResources: Array<ResourceListType>;
  setLiveResources: Dispatch<SetStateAction<Array<ResourceListType>>>;
  isHydrated: boolean;
  setIsHydrated: Dispatch<SetStateAction<boolean>>;
  handleAddResource: (formData: ResourceListType) => void;
  handleDeleteResource: (resourceId: string) => void;
  handleEditResourceTitle: (id: string, value: string) => void;
  handleSaveResourceTopic: () => void;
};

const MainContext = createContext<MainContextType | undefined>(undefined);

export function MainProvider({ children }: { children: React.ReactNode }) {
  const [resources] = useState(ResourceList);
  const [enrolStatus, setEnrolStatus] = useState<EnrolStatus>("Enrolled");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selected, setSelected] = useState<PlanTier>("Free");
  const [isAddResourceModal, setIsAddResourceModal] = useState(false);
  const activeTrack = Courses[0];
  const [liveResources, setLiveResources] = useState<ResourceListType[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const storedResources = getArrayFromLocalStorage("live_resources");

    if (storedResources.length === 0) {
      saveArrayToLocalStorage("live_resources", resources);
    }

    if (storedResources.length > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLiveResources(storedResources as ResourceListType[]);
      setIsHydrated(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHydrated, setLiveResources]);

  const handleDeleteResource = (resourceId: string) => {
    setLiveResources((prev) => {
      const filteredData = prev.filter((res) => res.id !== resourceId);
      saveArrayToLocalStorage("live_resources", filteredData);
      return filteredData;
    });
  };

  const handleAddResource = (formData: ResourceListType) => {
    setLiveResources((prev) => [...prev, ...[formData]]);
    saveArrayToLocalStorage("live_resources", liveResources);
  };

  const handleEditResourceTitle = (id: string, value: string) => {
    setLiveResources((prev) =>
      prev.map((res) => (res.id === id ? { ...res, name: value } : res)),
    );
  };

  const handleSaveResourceTopic = () => {
    saveArrayToLocalStorage("live_resources", liveResources);
    toast.success("Successfully saved resource topic!", {
      duration: 4000,
      position: "top-right",
    });
  };

  const value: MainContextType = {
    activeTrack,
    enrolStatus,
    setEnrolStatus,
    isSidebarOpen,
    setIsSidebarOpen,
    selected,
    setSelected,
    isAddResourceModal,
    setIsAddResourceModal,
    liveResources,
    setLiveResources,
    isHydrated,
    setIsHydrated,
    handleAddResource,
    handleDeleteResource,
    handleEditResourceTitle,
    handleSaveResourceTopic,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}

export function useMain() {
  const context = useContext(MainContext);
  if (context === undefined) {
    throw new Error("useMain must be used within an MainProvider");
  }
  return context;
}
