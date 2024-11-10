
import {Card,CardDescription,CardHeader,CardTitle,} from "@/components/ui/card";
import React from "react";


const CardInDashboard = () => {

  const data=[
    {
      title:"Revernue",
      amount:"50000",
      Margin:"21%",
      id:"revernue"
    },
    {
      title:"Cost",
      amount:"50000",
      Margin:"21%",
      id:"cost"
    },
    {
      title:"Pending",
      amount:"50000",
      Margin:"21%",
      id:"pending"
    },
    {
      title:"Pending",
      amount:"50000",
      Margin:"21%",
      id:"pending"
    },
  ]

return(
<React.Fragment>
<div className="flex-1 space-y-4 p-3 pt-4">
<div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  {data.map((id)=>(
    <Card key={id.id} className="rounded-xl border bg-card text-card-foreground shadow md:w-1/1 sm:w-1/1">
    <CardHeader>
      <CardTitle>
      {id.title}
      </CardTitle>
    </CardHeader>
    <div className="p-6 pt-0">
    <CardTitle className=" font-bold">
     {id.amount}
    </CardTitle>
    <CardDescription>{id.Margin}</CardDescription>
    </div>
  </Card> 
  ))}

  </div> 
  </div>
  </React.Fragment>
  )
}

export default CardInDashboard;