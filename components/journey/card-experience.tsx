// src/components/CardEducation.tsx
import { Calendar } from "lucide-react";
import { Card } from "../ui/card";
import {  ExperienceItem } from "@/src/types";

export default function CardExperience({ role , year , description }: ExperienceItem) {
  return (
    <>
    <div className="relative group ">
    {/* timeline dot */}
    <span className="absolute -left-[2.1rem] top-0 w-5 h-5 bg-[#50b4d3] rounded-full  shadow-md" />
   {/* transition hover */}
    <span className="absolute inset-0 bg-slate-700/30 scale-x-0 origin-left transition-transform duration-800 ease-in-out group-hover:scale-x-100 z-0" />
    
    <Card className="border-2 border-[#50b4d3] bg-transparent flex flex-col gap-2 p-4 shadow-md">
      <div className="flex gap-2">
      <span>
        <Calendar className="text-[#50b4d3]"/>
       </span>
      <p className="text-md text-[#50b4d3] font-semibold">
        {year}</p>
      </div>
      <h4 className="text-lg font-semibold text-white">{role}</h4>
      
      
      <p className="text-md text-gray-400">{description}</p>
    </Card>
    </div>
    </>
  );
}
