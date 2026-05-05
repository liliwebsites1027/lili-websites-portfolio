import React from "react";
import Image from "next/image";

const TechStack = () => {
  return (
    /* Removed horizontal padding so the container can touch both ends */
    <section className="w-full bg-[#EFE7DA] py-16 flex flex-col items-center overflow-hidden">
      {/* Tech Stack Label with left-side shadow */}
      <h2 className="font-serif text-5xl md:text-6xl pb-10 italic font-bold text-white mb-8 drop-shadow-[-6px_4px_3px_rgba(0,0,0,0.4)] relative z-20">
        Tech Stack
      </h2>

      {/* 
          Main Brown Container from image_124915.jpg 
          - w-full: Touches both ends of the screen
          - -mt-12: Pushes the container further up toward the label
      */}
      <div className="w-full aspect-[16/7] bg-[#4E2A13] relative overflow-hidden shadow-2xl -mt-12 z-10">
        {/* Placeholder for Background Image/Texture */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image
            src="/placeholder-code-bg.jpg"
            alt="background texture"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Empty content area */}
        <div className="relative z-10 w-full h-full"></div>
      </div>
    </section>
  );
};

export default TechStack;
