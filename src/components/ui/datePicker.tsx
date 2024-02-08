// "use client"

// import * as React from "react"
// import { format } from "date-fns"
// import { Calendar as CalendarIcon } from "lucide-react"

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Calendar } from "@/components/ui/calendar"
// import { Popover, PopoverContent, PopoverTrigger } from "./popover"

// interface DatePickerProps extends React.ComponentProps<"input"> {
//   value?: Date | undefined
//   onChange?: (date: Date | undefined) => void
// }

// export function DatePicker({ value, onChange, ...props }: DatePickerProps) {
//   const [date, setDate] = React.useState<Date | undefined>(value)
//   console.log("date", date)

//   React.useEffect(() => {
//     if (value !== undefined) {
//       setDate(value)
//     }
//   }, [value])

//   const handleDateChange = (newDate: Date | undefined) => {
//     setDate(newDate)
//     if (onChange) {
//       onChange(newDate)
//     }
//   }

//   return (
//     <Popover>
//       <PopoverTrigger asChild>
//         <Button
//           variant={"outline"}
//           className={cn(" justify-start text-left font-normal")}
//         >
//           <CalendarIcon className="mr-2 h-4 w-4" />
//           {date ? format(date, "PPP") : <span>Pick a date</span>}
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-auto p-0">
//         <Calendar
//           {...props}
//           mode="single"
//           selected={date}
//           onSelect={handleDateChange}
//           initialFocus
//         />
//       </PopoverContent>
//     </Popover>
//   )
// }

// // "use client"

// // import * as React from "react"
// // import { format } from "date-fns"
// // import { Calendar as CalendarIcon } from "lucide-react"

// // import { cn } from "@/lib/utils"
// // // import { Button } from "@/components/ui/button"
// // import { Calendar } from "@/components/ui/calendar"
// // import {
// //   Popover,
// //   PopoverContent,
// //   PopoverTrigger,
// // } from "@/components/ui/popover"
// // import { Button } from "./button"

// // export function DatePicker() {
// //   const [date, setDate] = React.useState<Date>()

// //   return (
// //     <Popover>
// //       <PopoverTrigger asChild>
// //         <Button
// //           variant={"outline"}
// //           className={cn(
// //             "w-[280px] justify-start text-left font-normal",
// //             !date && "text-muted-foreground"
// //           )}
// //         >
// //           <CalendarIcon className="mr-2 h-4 w-4" />
// //           {date ? format(date, "PPP") : <span>Pick a date</span>}
// //         </Button>
// //       </PopoverTrigger>
// //       <PopoverContent className="w-auto p-0">
// //         <Calendar
// //           mode="single"
// //           selected={date}
// //           onSelect={setDate}
// //           initialFocus
// //         />
// //       </PopoverContent>
// //     </Popover>
// //   )
// // }

import { useState } from "react";
import { DatePickerInput as MantineDatePicker } from "@mantine/dates";
import "@mantine/dates/styles.css";

function DatePicker({ value, onChange, ...props }) {
  // const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <MantineDatePicker
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={onChange}
      {...props}

    />
  );
}

export default DatePicker;
