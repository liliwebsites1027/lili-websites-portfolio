import React from "react";
import Image from "next/image";

const TechStack = () => {
  return (
    <section className="w-full bg-[#EFE7DA] pt-8 md:py-24 lg:py-32 flex flex-col items-center overflow-hidden -mt-8 relative z-20">
      {/* 
          Tech Stack Heading: 
          Scales dynamically for high-resolution displays.
      */}
      <h2 className="pb-12 text-[17vw] xs:text-[64px] md:text-[100px] lg:text-[130px] xl:text-[160px] 2xl:text-[180px] italic  text-white mb-8 drop-shadow-[-6px_4px_3px_rgba(0,0,0,0.4)] relative z-30 whitespace-nowrap">
        Tech Stack
      </h2>

      {/* 
          Main Container:
          - md+: Switched to a contained, rounded aesthetic to feel like a premium "card".
          - max-w limits the stretch on ultra-wide monitors.
      */}
      <div className="w-full h-auto aspect-18/14 md:aspect-21/9 md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] 2xl:max-w-[1600px] bg-[#37250F] relative overflow-hidden md:rounded-[40px] lg:rounded-[60px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] -mt-12 md:-mt-16 z-10">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent z-20 pointer-events-none" />

          <Image
            src="/tech-stack.png"
            alt="Tech Stack Showcase"
            fill
            /* 
               - pb-20 md:pb-0: Applies the shift only to mobile.
               - object-contain: Keeps the image proportional inside the padded area.
               - md:object-cover: Restores your original desktop filling behavior.
            */
            className="object-contain pb-20 md:pb-0 object-top md:object-cover md:object-center transition-transform duration-1000"
            priority
          />
        </div>

        {/* Decorative branding for xl+ screens */}
        <div className="hidden xl:block absolute bottom-10 right-12 z-30">
          <p className="font-serif italic text-white/30 text-lg tracking-widest uppercase">
            Modern Tech // Optimized Performance
          </p>
        </div>
      </div>

      {/* Bottom spacing to bridge with the next section */}
      <div className="mt-12 hidden md:flex gap-4 items-center">
        <div className="w-12 h-[1px] bg-[#4E2A13]/20" />
        <span className="font-serif italic text-[#4E2A13]/40 text-lg">
          Next.js • TypeScript • Tailwind
        </span>
        <div className="w-12 h-[1px] bg-[#4E2A13]/20" />
      </div>
    </section>
  );
};

export default TechStack;
