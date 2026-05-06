import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <section
      id="services"
      className="w-full bg-[#EFE7DA] pb-12 pt-4 flex flex-col items-center overflow-hidden -mt-6 relative z-20"
    >
      {/* 
          Services Label: 
          Mobile: Exactly as your OG design.
          Desktop: Scales up to 180px for that premium aesthetic.
      */}
      <h2 className="font-serif pb-8 text-[64px] md:text-[100px] lg:text-[130px] xl:text-[160px] 2xl:text-[180px] italic font-medium text-white mb-4 drop-shadow-[-6px_4px_3px_rgba(0,0,0,0.3)]">
        Services
      </h2>

      {/* 
          Main Services Container:
          - Mobile: w-full h-[600px] shadow-none -mt-6 (OG Design).
          - Desktop: max-w limits, rounded corners, and shadow for a "framed" look.
      */}
      <div className="w-full h-[600px] md:h-auto md:aspect-[16/10] md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[1500px] bg-[#FAF6F0] relative overflow-hidden shadow-none md:shadow-2xl md:rounded-[60px] -mt-6 z-10">
        {/* Mobile View: Strictly your OG layout and p-10 */}
        <div className="md:hidden relative p-10 w-full h-full">
          <Image
            src="/services.png"
            alt="Service Image"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Tablet & Desktop View: Edge-to-edge asset for laptop screenshot */}
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
    </section>
  );
};

export default Services;
