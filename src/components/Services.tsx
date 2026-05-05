import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    /* h-auto on desktop allows the section to grow naturally without crowding the viewport */
    <section className="w-full bg-[#EFE7DA] pb-20 pt-12 flex flex-col items-center overflow-hidden -mt-6 relative z-20">
      {/* 
          1. Services Heading: 
          Now sits ABOVE the image in the flow, not on top of it.
      */}
      <h2 className="font-serif text-[64px] md:text-[80px] lg:text-[100px] xl:text-[120px] italic font-bold text-white mb-8 md:mb-12 drop-shadow-[-6px_4px_3px_rgba(0,0,0,0.3)] tracking-tighter">
        Services
      </h2>

      {/* 
          2. Main Content Container:
          - md:max-w-[85%] to md:max-w-[70%]: Gradually narrows the image on larger screens to keep it "small" and elegant.
          - Aspect ratio is locked to 16/10 to ensure the laptop UI looks perfect.
      */}
      <div className="w-full md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[1440px] aspect-[16/12] md:aspect-[16/10] bg-[#FAF6F0] relative overflow-hidden rounded-[40px] md:rounded-[60px] shadow-2xl z-10">
        {/* Mobile View: p-10 preserved per original design */}
        <div className="md:hidden relative w-full h-full p-10">
          <Image
            src="/services.png"
            alt="Service Image Mobile"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Tablet & Desktop View (md to 2xl): Edge-to-edge inside the container */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src="/services-laptop.png"
            alt="Service Image Desktop"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* 
          3. Sub-text or Branding:
          Added below the image to ground the section and fill the empty space elegantly.
      */}
      <p className="mt-12 hidden md:block font-serif italic text-[#4E2A13] text-xl lg:text-2xl opacity-60">
        Tailored digital solutions for your brand.
      </p>
    </section>
  );
};

export default Services;
