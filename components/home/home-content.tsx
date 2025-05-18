'use client'

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Github, Instagram, Linkedin } from "lucide-react";

export default function HomeContent() {
    const router = useRouter();

    const handleLetsTalk = () => {
        router.push("/contact");
    }
    return (

        <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 px-7   lg:pl-20">
        <h1 className="text-3xl md:text-4xl lg:6xl font-bold text-slate-300 ">Hi, I&apos;m </h1>
        <h1 className="text-3xl font-bold text-slate-300 md:text-4xl lg:6xl">Deepanshu Rawat</h1>

        <h2 className="text-2xl text-[#4cc9f0] font-bold md:text-3xl lg:4xl">
          A Full Stack Developer
        </h2>
        <p className="text-md font-medium text-gray-400 md:text-xl lg:text-lg ">
          I am a final-year BCA student with hands-on experience in building
          full-stack web applications. Passionate about creating scalable and
          impactful solutions and turning ideas into real-world, while
          continuously exploring new technologies.
        </p>

        <div className="flex gap-8 md:gap-12 lg:gap-16 mt-6">
          <Button className="relative overflow-hidden bg-[#4cc9f0] text-[#000010] font-semibold px-8 md:px-10 md:py-4 md:text-xl  md:font-bold lg:px-14 lg:py-6 lg:text-xl lg:font-semibold py-2 border border-[#4cc9f0] transition-all duration-600 group">
            {/* Background slide */}
            <span className="absolute inset-0 w-full h-full bg-[#000010] group-hover:translate-x-0 -translate-x-full transition-transform duration-600 ease-in-out z-0" />

            {/* Button text */}
            <span className="relative z-10 transition-colors duration-600 ease-in-out group-hover:text-[#4cc9f0]">
              Hire Me
            </span>
          </Button>

          <Button
          onClick={handleLetsTalk} className="relative overflow-hidden bg-[#000010] text-[#4cc9f0] font-semibold px-8 py-2 border border-[#4cc9f0] transition-all duration-500 group md:px-10 md:py-4 md:text-xl  md:font-bold lg:px-14 lg:py-6 lg:text-xl lg:font-semibold">
            {/* Slide-in background overlay from left to right */}
            <span className="absolute inset-0 w-full h-full bg-[#4cc9f0] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />

            {/* Text with smooth color transition */}
            <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-[#000010]">
              Let&apos;s Talk
            </span>
          </Button>
        </div>

        <div className="flex flex-row gap-6 md:gap-9 lg:gap-12 mt-4 md:mt-5  p-2">

           <div className="h-11 md:h-13 md:w-13 lg:h-14 lg:w-14 w-11 rounded-full  border-2 border-[#4cc9f0] flex justify-center items-center relative overflow-hidden transition-all duration-500 group">

           <span className="absolute inset-0 w-full h-full bg-[#4cc9f0] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />

            <a href="https://github.com/deepanshurwt06"
             target="_blank" 
             title="Github"
             rel="noopener noreferrer">
              <Github  className="text-[#4cc9f0] lg:p-2 relative z-10 w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12  transition-colors duration-500 ease-in-out group-hover:text-[#000010] "/>
             </a>
           </div>

           <div className="h-11 w-11 md:h-13 md:w-13 lg:h-14 lg:w-14 rounded-full  border-2 border-[#4cc9f0] flex justify-center items-center relative overflow-hidden transition-all duration-500 group">

           <span className="absolute inset-0 w-full h-full bg-[#4cc9f0] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />

            <a href="https://www.linkedin.com/in/deepanshurwt6/"
             target="_blank"
             title="Linkedin"
             rel="noopener noreferrer">
              <Linkedin  className="text-[#4cc9f0] lg:p-2 relative z-10 w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 transition-colors duration-500 ease-in-out group-hover:text-[#000010] "/>
             </a>
           </div>

           <div className="h-11 w-11 md:h-13 md:w-13 lg:h-14 lg:w-14 rounded-full  border-2 border-[#4cc9f0] flex justify-center items-center relative overflow-hidden transition-all duration-500 group">

           <span className="absolute inset-0 w-full h-full bg-[#4cc9f0] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />

            <a href="https://www.instagram.com/rwt_deepanshu__?igsh=MTJuNzZ6MWY3ZjR4MA=="
             target="_blank" 
             title="Instagram"
             rel="noopener noreferrer">
              <Instagram  className="w-6 lg:p-2 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 text-[#4cc9f0] relative z-10 transition-colors duration-500 ease-in-out group-hover:text-[#000010] "/>
             </a>
           </div>

        </div>

      </div>
      
    )
}