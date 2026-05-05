import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    /* py-10 and -mt-20 to keep the section pushed high and consistent */
    <section className="w-full bg-[#EFE7DA] pb-12 pt-4 flex flex-col items-center overflow-hidden -mt-6 relative z-20">
      {/* 
          Services Label: 
          Consistent with previous sections.
      */}
      <h2 className="font-serif pb-8 text-[64px] italic font-medium text-white mb-4 drop-shadow-[-6px_4px_3px_rgba(0,0,0,0.3)]">
        Services
      </h2>

      {/* 
          Main Services Container:
          - w-full: Touches both ends.
          - aspect-[16/12]: Increased height (taller than previous 16/9).
          - shadow-none: Removed all shadows as requested.
      */}
      <div className="w-full h-[600px] bg-[#FAF6F0] relative overflow-hidden shadow-none -mt-6 z-10">
        {/* 
            Image Placeholder:
            Update the 'src' path below with your service image.
        */}
        <div className="relative p-10 w-full h-full">
          <Image
            src="/services.png"
            alt="Service Image"
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
