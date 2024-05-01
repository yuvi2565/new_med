import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useOutletContext } from "react-router-dom";

export function Result() {
  const [allHooks] = useOutletContext();
  // console.log(allHooks);
  const brain_image = allHooks[2];
  const file = allHooks[0];
  console.log();
  console.log(file);

  const data = allHooks[13];
  return (
    <div className="w-[350px] m-auto py-5 my-8 rounded-md border">
      {/* <img
        src={`data:image/png;base64,${brain_image}`}
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      /> */}
      <div className="p-4">
        {data.prob?<h1 className="text-lg text-center font-semibold"> MedInsight Probability :   {data.prob}%</h1> : <h3 className="font-bold text-center">Summary</h3>}
        <p className="mt-3 text-sm font-sans text-gray-600">{data.content}</p>
       
      </div>
    </div>
  );
}
