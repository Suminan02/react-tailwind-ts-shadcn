import React from "react";
import { Button } from "@/components/ui/button";
import {Card,CardHeader,CardTitle,} from "@/components/ui/card";
import {Popover,PopoverContent,PopoverTrigger,} from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import InformationDashboard from "./CardInDashboard";
import ChartInDashboard from "./ChartInDashboad";
import { DataTableDemo } from "./tableInDahboard";


const Dashboard = () => {

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  
  return (
    <React.Fragment>
      <Card className="flex-col md:fled w-2/2 h-2/2">
        <div className="">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-3xl font-bold tracking-tight">Dashboard</CardTitle>
    
          <div className="flex items-center ">
            <div className={cn("grid gap-2")}>
    <Popover>
        <PopoverTrigger asChild className="flex items-center space-x-2">
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              " justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>

    <Button>Print</Button>
    </div>
    </div>
  </CardHeader>
  </div>
  <></>

  <InformationDashboard/>
  <div className="flex items-center justify-between">
  <ChartInDashboard/> 
  <DataTableDemo/>
  </div>
  
</Card>
    </React.Fragment>
  );
};

export default Dashboard;