"use client";

import Image from "next/image";

export default function HomePropic() {
  return (
    <div className="hidden md:block pr-8 lg:pr-24 lg:pl-10">
      <div className="relative h-[250px] w-[250px] ">
        {/* Spinner Ring 1 */}
        
        
        <div className="absolute border-4 border-[#4cc9f0] inset-0 rounded-full bg-gray-300 overflow-hidden z-10">
          <Image
            src="/assets/profilepic1.png"
            alt="profile picture"
            fill
            priority
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
