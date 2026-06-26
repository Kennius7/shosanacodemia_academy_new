/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Courses, ResourceList } from "@/data";
import { ResourceListType } from "@/types";
import { BookIcon, EditIcon, LoaderIcon, Trash2 } from "lucide-react";
import { ellipsis } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function CourseTable({
  isDashboardView,
}: {
  isDashboardView: boolean;
}) {
  const router = useRouter();
  const [resourceData, setResourceData] = useState<Array<any>>([]);
  const [activeName, setActiveName] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const loadResource = setTimeout(() => {
      if (isDashboardView) {
        setResourceData(ResourceList.slice(0, 3));
      } else {
        setResourceData(ResourceList);
      }
    }, 3000);

    return () => clearTimeout(loadResource);
  }, [isDashboardView]);

  const getTrack = (courseName: string) => {
    const filteredTracks = Courses.filter((c) => c.track?.includes(courseName));

    const track =
      filteredTracks.length > 0 ? (
        filteredTracks.map((track) => (
          <div
            key={track.id}
            className="text-xs w-fit border border-slate-800 rounded-sm py-1 
            px-2 cursor-pointer hover:bg-cyan-400/10"
          >
            {ellipsis(track.name, 10)}
          </div>
        ))
      ) : (
        <p className="text-xs">General Notes</p>
      );

    return track;
  };

  const getNumberOfTopics = (arr: Array<any>) => {
    return arr.length;
  };

  const handleViewCourseDetails = (resourceName: string) => {
    router.push(`/admin/courses/view?name=${encodeURIComponent(resourceName)}`);
  };

  const handleEditCourse = (resourceName: string) => {
    router.push(`/admin/courses/edit?name=${encodeURIComponent(resourceName)}`);
  };

  const handleDeleteCourse = (resourceName: string) => {
    console.log("Deleting course....", resourceName);
    setActiveName(resourceName);
    setIsDeleting(true);
    setTimeout(() => {
      toast.success("Successfully deleted!", {
        position: "top-right",
        duration: 5000,
      });
      setIsDeleting(false);
    }, 6000);
  };

  return (
    <div className="overflow-x-auto">
      <Table className="w-full border border-cyan-700 rounded-xl">
        <TableHeader>
          <TableRow className="text-left text-sm text-slate-500 border-b border-cyan-700">
            <TableHead className="px-3 py-2 pl-2">Course Name</TableHead>
            <TableHead className="px-3 py-2">Course Tracks</TableHead>
            <TableHead className="px-3 py-2">Creation Date</TableHead>
            <TableHead className="px-3 py-2">No. of Topics</TableHead>
            <TableHead className="px-4 py-2 text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="transition-all duration-500">
          {resourceData?.length > 0 ? (
            resourceData?.map((resource: ResourceListType, index: number) => (
              <TableRow
                key={index}
                className="border border-cyan-700 cursor-pointer"
              >
                <TableCell className="py-3">
                  <div className="flex items-center space-x-2 text-cyan-300 text-md">
                    <BookIcon className="w-4 h-4 text-cyan-500" />
                    <span>{resource.name}</span>
                  </div>
                </TableCell>
                <TableCell className="py-3">
                  <div className="text-slate-500 grid grid-cols-3 gap-[2px] w-fit">
                    {getTrack(resource.name)}
                  </div>
                </TableCell>
                <TableCell className="py-3 text-sm text-slate-500">
                  {"25th June 2026"}
                </TableCell>
                <TableCell className="py-3 pl-6 text-sm text-slate-500">
                  {getNumberOfTopics(resource.data)}
                </TableCell>
                <TableCell className="py-3">
                  <div className="gap-1 flex items-center justify-center">
                    <button
                      onClick={() => handleViewCourseDetails(resource.name)}
                      className="w-20 py-1 text-cyan-500 border border-cyan-500 rounded-sm cursor-pointer
                            hover:bg-cyan-500/20 transition-colors duration-500 text-xs gap-1"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleEditCourse(resource.name)}
                      className="w-20 py-1 text-gray-700 bg-cyan-300 rounded-sm cursor-pointer
                            hover:bg-cyan-600 transition-colors duration-500 text-xs gap-2 flex 
                            items-center justify-center"
                    >
                      <EditIcon className="text-gray-700 text-xs w-4 h-4" />{" "}
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteCourse(resource.name)}
                      className="w-20 py-1 text-white bg-red-500 rounded-sm cursor-pointer
                            hover:bg-red-800 transition-colors duration-500 text-xs gap-2 flex 
                            items-center justify-center"
                    >
                      {isDeleting && activeName === resource.name ? (
                        <LoaderIcon className="text-white text-xs w-4 h-4 animate-spin" />
                      ) : (
                        <Trash2 className="text-white text-xs w-4 h-4" />
                      )}{" "}
                      Delete
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow className="">
              <TableCell
                colSpan={5}
                className="text-slate-500 text-sm text-center py-6"
              >
                No Courses at the moment
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
