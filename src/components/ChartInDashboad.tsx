import React from "react";
import {Card} from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartConfig,ChartContainer,ChartTooltip,ChartTooltipContent,ChartLegend, ChartLegendContent } from "@/components/ui/chart";


const ChartInDashboard = () => {
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "June", desktop: 214, mobile: 140 }
]
 
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig

return (
<React.Fragment>
<div className=" w-1/2 flex-1 p-3">
  <Card className="flex-1 space-y-4 p-6 pt-4 w-2/2 h-1/1">
  <ChartContainer config={chartConfig} className="w-2/2 h-2/2">
  <BarChart accessibilityLayer data={chartData}>
    <CartesianGrid vertical={false} />
    <XAxis
      dataKey="month"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 3)}
    />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Bar dataKey="desktop" fill="var(--color)" radius={4} />
    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
  </BarChart>
</ChartContainer>
    </Card>
    </div>

</React.Fragment>

  )
}

export default ChartInDashboard;