import { Button } from "../ui/button";
import Image from "next/image";

interface ProjectCardProps {
  imgSrc: string;
  title: string;
  description: string;
  features: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string;
}

export default function ProjectCard({
  imgSrc,
  title,
  description,
  features,
  techStack,
  githubLink,
}: ProjectCardProps) {
  return (
    <>
      {/* ✅ Changed w-full max-w-[400px] and added h-full to equalize height */}
      <div className="border-2 border-[#50b4d3] bg-transparent flex flex-col rounded-sm w-full max-w-[400px] shadow-md p-0 mx-auto h-full">
        <div className="relative w-full h-[300px] rounded-t-sm overflow-hidden">
          <Image src={imgSrc} alt={title} fill 
          style={{ objectFit: "cover" , objectPosition: "top" }} />
        </div>

        {/* ✅ Added flex flex-col h-full to stretch hover and content */}
        <div className="relative overflow-hidden py-2 px-4 group cursor-pointer flex flex-col h-full">
          {/* ✅ Changed from top-0 left-0 h-full w-full to inset-0 for better coverage */}
          <div
            className="
              absolute inset-0
              bg-slate-900/70
              -translate-x-full
              group-hover:translate-x-0
              transition-transform duration-500 ease-in-out
              z-0
            "
          />

          {/* ✅ Ensures content inside stretches full height if needed */}
          <div
            className="
              py-2 px-3
              relative z-10                    
              group-hover:shadow-lg
              transition-all duration-300 ease-in-out
              flex flex-col flex-grow
            "
          >
            <h2 className="text-xl text-white font-bold">{title}</h2>
            <p className="text-gray-300 py-1 text-md">{description}</p>
            <h4 className="text-[#4cc9f0] text-lg font-semibold">Features</h4>
            <p className="text-gray-300 py-1 text-md">{features}</p>
            <h4 className="text-[#4cc9f0] text-lg font-semibold">
              Tech Stacks
            </h4>
            <p className="text-gray-300 py-1 text-md">{techStack.join(", ")}</p>

            {/* ✅ mt-auto pushes button to bottom if there's extra space */}
            <div className="flex justify-center items-center mt-auto mb-6">
              <Button className="button-slide bg-[#4cc9f0] text-[#000010] font-bold text-lg px-5 py-2 border border-[#4cc9f0]">
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
