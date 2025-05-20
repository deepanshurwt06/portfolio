'use client';

import BackgroundDisplay from "@/components/common/backgroundDisplay";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Page() {

  const router = useRouter();
  const handleReadMore = () => {
    router.push("/my-journey")
  }
  return (
    <>
      <BackgroundDisplay />

      <main className="container mx-auto min-h-screen px-4 py-12">
        {/* Heading stays at the top */}
        <h2 className="text-3xl font-bold  lg:mb-10 text-center lg:text-4xl text-white">
          About <span className="text-[#4cc9f0]">Me</span>
        </h2>

        {/* Centered content */}
        <div className=" flex flex-col items-center gap-6 sm:gap-8 md:gap-10 ">
          {/* Profile Image */}
          <div className="relative bg-zinc-700 rounded-full h-[160px] w-[160px] sm:h-[180px] sm:w-[180px] md:h-[210px] md:w-[210px] overflow-hidden mt-8 lg:mt-20 border-4 border-[#4cc9f0] ">
            <Image
              src="/assets/profilepic1.png"
              alt="profile picture"
              fill
              priority
              className="object-cover rounded-full"
            />
          </div>

          {/* Subtitle */}
          <h2 className="text-2xl sm:text-3xl font-bold text-[#4cc9f0] text-center">
            A Full Stack Developer
          </h2>

          {/* Description */}
          <p className="max-w-2xl lg:max-w-5xl text-gray-400 text-sm  md:text-md text-center px-2 sm:px-4">
          I’m a final-year BCA student with hands-on experience in full-stack development, intelligent automation, and cloud technologies. From building dynamic web apps to optimizing backend systems, I’ve worked with a diverse tech stack, including React, Firebase, Node.js, Express.js and Next.js. I thrive in Agile environments, managing sprints, collaborating with teams, and delivering scalable solutions. With a passion for problem-solving and innovation, I’m always looking to create tech that makes a real impact.
          </p>

          <Button onClick={handleReadMore}
           className="mb-20 relative overflow-hidden bg-[#4cc9f0] text-[#000010] font-semibold px-6 md:px-8 md:py-4 md:text-lg  md:font-bold lg:px-10 lg:py-4 lg:text-lg lg:font-semibold py-2 border border-[#4cc9f0] transition-all duration-600 group">
            {/* Background slide */}
            <span className="absolute inset-0 w-full h-full bg-[#000010] group-hover:translate-x-0 -translate-x-full transition-transform duration-600 ease-in-out z-0" />

            {/* Button text */}
            <span className="relative z-10 transition-colors duration-600 ease-in-out group-hover:text-[#4cc9f0]">
             Read More.
            </span>
          </Button>
        </div>
      </main>

      
    </>
  );
}
