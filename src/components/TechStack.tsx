import React from "react";
import Image from "next/image";

const TechStack = () => {
  return (
    <section className="w-full bg-[#EFE7DA] py-20 -mt-10 flex flex-col items-center overflow-hidden">
      <h2 className="font-serif text-5xl md:text-6xl pb-16 italic font-bold text-white mb-8 drop-shadow-[-6px_4px_3px_rgba(0,0,0,0.4)] relative z-20 -mt-10">
        Tech Stack
      </h2>

      {/* 
          Main Container:
          - w-full: Touches both edges
          - aspect-[16/12]: Increased height ratio for a taller container
      */}
      <div className="w-full aspect-[18/10] bg-[#4E2A13] relative overflow-hidden shadow-2xl -mt-12 z-10">
        <div className="relative w-full h-full">
          <Image
            src="/tech-stack.png"
            alt="Tech Stack"
            fill
            className="object-cover object-top" // object-top prevents the bottom from being the first thing cut
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
