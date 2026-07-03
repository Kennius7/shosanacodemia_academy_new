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
import { BookIcon, EditIcon, LoaderIcon, Trash2 } from "lucide-react";
import { ellipsis } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { STUDENTS_DATA } from "@/data";
import { StudentDataType } from "@/types";

export default function StudentsTable({
  isDashboardView,
}: {
  isDashboardView: boolean;
}) {
  const router = useRouter();
  const [studentsData, setStudentsData] = useState<Array<any>>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const loadStudents = setTimeout(() => {
      if (isDashboardView) {
        setStudentsData(STUDENTS_DATA.slice(0, 3));
      } else {
        setStudentsData(STUDENTS_DATA);
      }
    }, 3000);

    return () => clearTimeout(loadStudents);
  }, [isDashboardView]);

  const handleViewStudentDetails = (studentId: string) => {
    router.push(`/admin/students/${studentId}`);
  };

  const handleEditStudent = (studentId: string) => {
    router.push(`/admin/students/edit?name=${encodeURIComponent(studentId)}`);
  };

  const handleDeleteStudent = (studentId: string) => {
    console.log("Deleting student....", studentId);
    setActiveId(studentId);
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
          <TableRow className="text-left text-xs text-slate-500 border-b border-cyan-700">
            <TableHead className="px-3 py-2">Std. ID</TableHead>
            <TableHead className="px-3 py-2 pl-2">Student Name</TableHead>
            <TableHead className="px-3 py-2">Number</TableHead>
            <TableHead className="px-3 py-2">Email</TableHead>
            <TableHead className="px-3 py-2">Selected Track</TableHead>
            <TableHead className="px-3 py-2">Paid</TableHead>
            <TableHead className="px-3 py-2">Discount</TableHead>
            <TableHead className="px-3 py-2">Creation Date</TableHead>
            <TableHead className="px-3 py-2">Cohort</TableHead>
            <TableHead className="px-4 py-2 text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="transition-all duration-500">
          {studentsData?.length > 0 ? (
            studentsData?.map((student: StudentDataType) => (
              <TableRow
                key={student.id}
                onClick={() => handleViewStudentDetails(student.studentId)}
                className="border border-cyan-700 cursor-pointer"
              >
                <TableCell className="py-3">
                  <div className="flex items-center text-cyan-300 text-[10px]">
                    {ellipsis(student.studentId, 8)}
                  </div>
                </TableCell>
                <TableCell className="py-3">
                  <div className="flex items-center text-cyan-300 text-[12px] w-[100px]">
                    <span>
                      {ellipsis(student.firstName + " " + student.lastName, 12)}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="py-3">
                  <div className="flex items-center text-cyan-300 text-xs">
                    <span>+{ellipsis(student.whatsappNumber, 10)}</span>
                  </div>
                </TableCell>
                <TableCell className="py-3">
                  <div className="flex items-center text-cyan-300 text-xs">
                    <span>{ellipsis(student.email, 12)}</span>
                  </div>
                </TableCell>
                <TableCell className="py-3">
                  <div className="flex items-center space-x-2 text-cyan-300 text-xs">
                    <BookIcon className="w-4 h-4 text-cyan-500" />
                    <span>{ellipsis(student.courseTrack, 10)}</span>
                  </div>
                </TableCell>
                <TableCell className="py-3">
                  <div className="text-slate-500 text-xs">
                    {student.isPaid ? "Has Paid" : "Hasn't Paid"}
                  </div>
                </TableCell>
                <TableCell className="py-3">
                  <div className="text-slate-500 text-xs">
                    {student.discount !== 0
                      ? `${student.discount}% disc.`
                      : "No disc."}
                  </div>
                </TableCell>
                <TableCell className="py-3">
                  <div className="text-slate-500 text-xs">
                    {student.createdAt}
                  </div>
                </TableCell>
                <TableCell className="py-3">
                  <div className="text-slate-500 text-xs">{student.cohort}</div>
                </TableCell>

                <TableCell className="py-3">
                  <div className="gap-[6px] flex flex-col items-center justify-center w-[80px]">
                    <button
                      onClick={() =>
                        handleViewStudentDetails(student.studentId)
                      }
                      className="w-full py-1 text-cyan-500 border border-cyan-500 rounded-xs cursor-pointer
                            hover:bg-cyan-500/20 transition-colors duration-500 text-[10px] gap-1"
                    >
                      View Details
                    </button>

                    <div className="flex items-center justify-between w-full">
                      <button
                        onClick={() => handleEditStudent(student.studentId)}
                        className="w-[40px] py-1 text-gray-700 bg-cyan-300 rounded-xs cursor-pointer
                              hover:bg-cyan-600 transition-colors duration-500 text-xs gap-2 flex 
                              items-center justify-center"
                      >
                        <EditIcon className="text-gray-700 text-xs w-3 h-3" />
                      </button>
                      <button
                        onClick={() => handleDeleteStudent(student.studentId)}
                        className="w-[30px] py-1 text-white bg-red-500 rounded-xs cursor-pointer
                              hover:bg-red-800 transition-colors duration-500 text-xs gap-2 flex 
                              items-center justify-center"
                      >
                        {isDeleting && activeId === student.studentId ? (
                          <LoaderIcon className="text-white text-xs w-3 h-3 animate-spin" />
                        ) : (
                          <Trash2 className="text-white text-xs w-3 h-3" />
                        )}
                      </button>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow className="">
              <TableCell
                colSpan={10}
                className="text-slate-500 text-sm text-center py-6"
              >
                No students at the moment
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
