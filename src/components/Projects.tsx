import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-[#EFE7DA] py-6 md:py-24 px-6 flex flex-col items-center -mt-20 relative z-20"
    >
      <h2 className="font-serif text-[64px] md:text-[100px] lg:text-[130px] xl:text-[160px] 2xl:text-[180px] italic font-medium text-white mb-4 md:mb-6 drop-shadow-[-6px_4px_3px_rgba(0,0,0,0.4)] select-none">
        Projects
      </h2>

      <div className="w-full max-w-[450px] md:max-w-[95%] lg:max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1800px] bg-[#CAB0A0] rounded-[24px] md:rounded-[32px] p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 shadow-2xl">
        {/* Project Card 1 - LDC Enterprises */}
        <a
          href="https://ldcenterprises.in"
          target="_blank"
          rel="noopener noreferrer"
          className="group cursor-pointer block"
        >
          <div className="w-full aspect-16/8 md:aspect-4/5 bg-[#EFE7DA] rounded-[12px] md:rounded-[16px] shadow-inner overflow-hidden transition-transform duration-500 group-hover:scale-[1.01] relative">
            <Image
              src="/ldc-banner.png"
              alt="LDC Enterprises"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="mt-4 hidden md:block">
            <p className="text-white/50 text-sm uppercase tracking-widest">
              Client Project
            </p>
            <h3 className="font-serif text-white text-2xl italic mt-1">
              LDC Enterprises
            </h3>
          </div>
        </a>

        {/* Project Card 2 - Urban Edge */}
        <a
          href="https://urban-edge-techwear.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group cursor-pointer block"
        >
          <div className="w-full aspect-16/8 md:aspect-4/5 bg-[#EFE7DA] rounded-[12px] md:rounded-[16px] shadow-inner overflow-hidden transition-transform duration-500 group-hover:scale-[1.01] relative">
            <Image
              src="/urban-edge.png"
              alt="Urban Edge"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-4 hidden md:block">
            <p className="text-white/50 text-sm uppercase tracking-widest">
              Project
            </p>
            <h3 className="font-serif text-white text-2xl italic mt-1">
              Urban Edge
            </h3>
          </div>
        </a>

        {/* Project Card 3 - Boba Bliss */}
        <a
          href="https://www.figma.com/proto/xt5636xbzFnTgYXLS3tITo/MCA54-Boba-Bliss?node-id=87-1221&starting-point-node-id=755%3A425&t=raOyACap0lwJ5ENW-1"
          target="_blank"
          rel="noopener noreferrer"
          className="group cursor-pointer block md:col-span-2 lg:col-span-1"
        >
          <div className="w-full aspect-16/8 md:aspect-16/8 lg:aspect-4/5 bg-[#EFE7DA] rounded-[12px] md:rounded-[16px] shadow-inner overflow-hidden transition-transform duration-500 group-hover:scale-[1.01] relative">
            <Image
              src="/bb-cover.png"
              alt="Boba Bliss"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-4 hidden md:block">
            <p className="text-white/50 text-sm uppercase tracking-widest">
              Case Study
            </p>
            <h3 className="font-serif text-white text-2xl italic mt-1">
              Boba Bliss
            </h3>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
