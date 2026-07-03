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
import { AlertCircle, BookIcon, CheckCircle2, Clock } from "lucide-react";
import { ellipsis, formatter } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { INVOICES } from "@/data";
import { Invoice, InvoiceStatus } from "@/types";

export default function PaymentsTable({
  isDashboardView,
}: {
  isDashboardView: boolean;
}) {
  const router = useRouter();
  const [paymentData, setPaymentData] = useState<Array<any>>([]);
  // const [activeId, setActiveId] = useState<string>("");
  // const [isDeleting, setIsDeleting] = useState(false);

  const statusConfig: Record<
    InvoiceStatus,
    { icon: React.ElementType; color: string; bg: string; label: string }
  > = {
    Paid: {
      icon: CheckCircle2,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
      label: "Paid",
    },
    Pending: {
      icon: Clock,
      color: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/20",
      label: "Pending",
    },
    Failed: {
      icon: AlertCircle,
      color: "text-red-400",
      bg: "bg-red-500/10 border-red-500/20",
      label: "Failed",
    },
  };

  useEffect(() => {
    const loadPayments = setTimeout(() => {
      if (isDashboardView) {
        setPaymentData(INVOICES.slice(0, 3));
      } else {
        setPaymentData(INVOICES);
      }
    }, 3000);

    return () => clearTimeout(loadPayments);
  }, [isDashboardView]);

  const handleViewInvoice = (paymentId: string) => {
    router.push(`/admin/payments/${paymentId}`);
  };

  // const handleEditStudent = (paymentId: string) => {
  //   router.push(`/admin/students/edit?name=${encodeURIComponent(paymentId)}`);
  // };

  // const handleDeleteStudent = (paymentId: string) => {
  //   console.log("Deleting student....", paymentId);
  //   setActiveId(paymentId);
  //   setIsDeleting(true);
  //   setTimeout(() => {
  //     toast.success("Successfully deleted!", {
  //       position: "top-right",
  //       duration: 5000,
  //     });
  //     setIsDeleting(false);
  //   }, 6000);
  // };

  return (
    <div className="overflow-x-auto">
      <Table className="w-full border border-cyan-700 rounded-xl">
        <TableHeader>
          <TableRow className="text-left text-xs text-slate-500 border-b border-cyan-700">
            <TableHead className="px-3 py-2">Invoice ID</TableHead>
            <TableHead className="px-3 py-2 pl-2">Student Name</TableHead>
            <TableHead className="px-3 py-2">Selected Track</TableHead>
            <TableHead className="px-3 py-2">Amount</TableHead>
            <TableHead className="px-3 py-2">Date</TableHead>
            <TableHead className="px-3 py-2">Status</TableHead>
            <TableHead className="px-4 py-2 text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="transition-all duration-500">
          {paymentData?.length > 0 ? (
            paymentData?.map((payment: Invoice) => {
              const cfg = statusConfig[payment.status];
              const Icon = cfg.icon;

              return (
                <TableRow
                  key={payment.id}
                  onClick={() => handleViewInvoice(payment.studentId)}
                  className="border border-cyan-700 cursor-pointer"
                >
                  <TableCell className="py-3">
                    <div className="flex items-center text-cyan-300 text-[10px]">
                      {payment.id}
                    </div>
                  </TableCell>
                  <TableCell className="py-3">
                    <div className="flex items-center text-cyan-300 text-[12px] w-[130px]">
                      <span>{ellipsis(payment.studentName, 15)}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-3">
                    <div className="flex items-center space-x-2 text-cyan-300 text-xs">
                      <BookIcon className="w-4 h-4 text-cyan-500" />
                      <span>{ellipsis(payment.courseTrack, 25)}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-3">
                    <div className="text-slate-500 text-xs">
                      {formatter.format(payment.amount)}
                    </div>
                  </TableCell>
                  <TableCell className="py-3">
                    <div className="text-slate-500 text-xs">{payment.date}</div>
                  </TableCell>
                  <TableCell className="py-3 px-2">
                    <div
                      className={`flex items-center justify-center gap-1.5 
                        px-1.5 py-1 rounded-lg border ${cfg.bg}`}
                    >
                      <Icon className={`w-3 h-3 ${cfg.color}`} />
                      <span className={`text-xs font-medium ${cfg.color}`}>
                        {payment.status}
                      </span>
                    </div>
                    {/* <div className="text-slate-500 text-xs">
                    </div> */}
                  </TableCell>

                  <TableCell className="py-3 flex items-center justify-center">
                    <div className="w-[80px]">
                      <button
                        onClick={() => handleViewInvoice(payment.id)}
                        className="w-full py-1 text-cyan-500 border border-cyan-500 rounded-xs cursor-pointer
                        hover:bg-cyan-500/20 transition-colors duration-500 text-[10px] gap-1"
                      >
                        View Invoice
                      </button>

                      {/* <div className="flex items-center justify-between w-full">
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
                    </div> */}
                    </div>
                  </TableCell>
                </TableRow>
              );
            })
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
