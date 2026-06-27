import * as React from "react";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Clock } from "lucide-react";
import { Input } from "./input";
import { Label } from "./label";

interface DateTimePickerProps {
  date?: Date;
  setDate: (date: Date | undefined) => void;
  className?: string;
}

export function DateTimePicker({
  date,
  setDate,
  className,
}: DateTimePickerProps) {
  // Initialize time from date prop or default to current time
  const [selectedTime, setSelectedTime] = React.useState<string>(
    date ? format(date, "HH:mm") : format(new Date(), "HH:mm"),
  );

  // Handle calendar date selection
  const handleDateSelect = (newDate: Date | undefined) => {
    if (newDate) {
      const [hours, minutes] = selectedTime.split(":").map(Number);
      newDate.setHours(hours);
      newDate.setMinutes(minutes);
    }
    setDate(newDate);
  };

  // Handle time selection
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = e.target.value;
    setSelectedTime(newTime);

    if (date) {
      const [hours, minutes] = newTime.split(":").map(Number);
      const newDate = new Date(date);
      newDate.setHours(hours);
      newDate.setMinutes(minutes);
      setDate(newDate);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground",
            className,
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP HH:mm") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="p-2 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <Clock className="h-4 w-4 opacity-50" />
            <Label htmlFor="time" className="text-xs font-medium">
              Time
            </Label>
            <Input
              id="time"
              type="time"
              value={selectedTime}
              onChange={handleTimeChange}
              className="w-[120px]"
            />
          </div>
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          // initialFocus
          className=""
        />
      </PopoverContent>
    </Popover>
  );
}
