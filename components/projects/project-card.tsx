'use client'

import { Button } from "../ui/button";
import Image from "next/image";
// import { useRouter } from "next/navigation";

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
  

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    // Prevent redirect if the clicked element is inside the button/link
    if (target.closest("button") || target.closest("a")) return;

    // Open GitHub link in new tab
    window.open(githubLink, "_blank");
  };

  return (
    <div
      onClick={handleCardClick}
      className="border-2 border-[#50b4d3] bg-transparent flex flex-col rounded-sm w-[330px] sm:w-full max-w-[400px] shadow-md p-0 mx-auto h-auto sm:h-[580px]  cursor-pointer group"
    >
      <div className="relative w-full h-[300px] rounded-t-sm overflow-hidden">
        <Image
          src={imgSrc}
          alt={title}
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>

      <div className="relative overflow-hidden p-2 flex flex-col h-full">
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
          <h4 className="text-[#4cc9f0] text-lg font-semibold">Tech Stacks</h4>
          <p className="text-gray-300 py-1 text-md">{techStack.join(", ")}</p>

          <div className="flex justify-center items-center mt-auto mb-6">
            <Button className="button-slide bg-[#4cc9f0] text-[#000010] font-bold text-lg px-5 py-2 border border-[#4cc9f0]">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // Prevent bubbling to parent
              >
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
