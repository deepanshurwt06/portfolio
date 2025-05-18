"use client";
import { useEffect, useState } from "react";

import { Menu, X } from "lucide-react";
import NavLink from "./nav-link";
import { AnimatePresence ,motion } from "framer-motion";
import { usePathname } from "next/navigation";


export default function Header() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setOpen(false); // close mobile menu on route change
  }, [pathname]); 

  return (
    <header className="sticky bg-[#000010] top-0 left-0 w-full z-50">
      <nav className="flex items-center max-w-7xl mx-auto py-5 px-10 mt-2">
        <div className=" flex flex-1">
          <NavLink href="/" className="">
            <h1 className="text-gradient-to-r from-[#4cc9f0] to-[#0e1518] text-xl md:text-2xl font-bold hover:shadow-md hover:scale-x-105 transform transition duration-300 ease-in-out ">
              Deepanshu.
            </h1>
          </NavLink>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-1 rounded-full bg-transparent border border-[#4cc9f0] hover:bg-blue-950/70"
          aria-label="Toggle Menu"
        >
          <Menu className=" w-7 h-7 text-gray-200 lg:hidden" />
        </button>

        {/* desktop view  */}

        <div className="hidden lg:flex lg:flex-row lg:items-center lg:gap-6 ">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/my-journey">My Journey</NavLink>
          <NavLink href="/skills">Skills</NavLink>
          <NavLink href="/projects">Project</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
        </nav>
        {/* mobile and medium size device view  */}
        <AnimatePresence >

       
        {open && (
            <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
           className="fixed top-0 left-0 w-full bg-slate-900 bg-opacity-95 flex flex-col items-left gap-2 z-30 lg:hidden p-4">
            <button
              onClick={() => setOpen(false)}
              aria-label="close menu"
              className="bg-slate-900  w-8 h-8 absolute top-5 right-5"
            >
              <X className="font-black w-7 h-7 text-gray-200 lg:hidden" />
            </button>
            
            <NavLink className=" p-1 hover:bg-slate-800/60" href="/" onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink className="p-1 hover:bg-slate-800/60"  href="/about" onClick={() => setOpen(false)}>
              About
            </NavLink>
            <NavLink className=" p-1 hover:bg-slate-800/60" href="/my-journey" onClick={() => setOpen(false)}>
              My Journey
            </NavLink>
            <NavLink className=" p-1 hover:bg-slate-800/60" href="/skills" onClick={() => setOpen(false)}>
              Skills
            </NavLink>
            <NavLink className=" p-1 hover:bg-slate-800/60" href="/projects" onClick={() => setOpen(false)}>
              Project
            </NavLink>
            <NavLink className=" p-1 hover:bg-slate-800/60" href="/contact" onClick={() => setOpen(false)}>
              Contact
            </NavLink>
          </motion.div>
        )}
       </AnimatePresence>
    </header>
  );
}
