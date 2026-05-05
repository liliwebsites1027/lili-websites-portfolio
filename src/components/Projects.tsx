import React from "react";

const Projects = () => {
  return (
    <section className="w-full bg-[#EFE7DA] py-12 md:py-24 px-6 flex flex-col items-center -mt-20 relative z-20">
      {/* 
          Projects Label: 
          Scales dynamically from 64px up to 180px for 2xl displays.
      */}
      <h2 className="font-serif text-[64px] md:text-[100px] lg:text-[130px] xl:text-[160px] 2xl:text-[180px] italic font-medium text-white mb-12 md:mb-20 drop-shadow-[-6px_4px_3px_rgba(0,0,0,0.3)] select-none">
        Projects
      </h2>

      {/* 
          Main Brown Project Container:
          - Mobile: Single column stack.
          - MD: 2-column grid.
          - LG/XL/2XL: 3-column grid for a professional showcase.
      */}
      <div className="w-full max-w-[450px] md:max-w-[95%] lg:max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1800px] bg-[#6F4E37] rounded-[30px] md:rounded-[50px] p-6 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 shadow-2xl">
        {/* Project Card 1 */}
        <div className="group cursor-pointer">
          <div className="w-full aspect-[16/8] md:aspect-[4/5] bg-[#EFE7DA] rounded-[20px] md:rounded-[30px] shadow-inner overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
            {/* Project Image/Content */}
          </div>
          <div className="mt-4 hidden md:block">
            <p className="font-serif text-white/50 text-sm uppercase tracking-widest">
              Case Study 01
            </p>
            <h3 className="font-serif text-white text-2xl italic mt-1">
              Premium E-commerce
            </h3>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="group cursor-pointer">
          <div className="w-full aspect-[16/8] md:aspect-[4/5] bg-[#EFE7DA] rounded-[20px] md:rounded-[30px] shadow-inner overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
            {/* Project Image/Content */}
          </div>
          <div className="mt-4 hidden md:block">
            <p className="font-serif text-white/50 text-sm uppercase tracking-widest">
              Case Study 02
            </p>
            <h3 className="font-serif text-white text-2xl italic mt-1">
              Modern Brand Identity
            </h3>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="group cursor-pointer md:col-span-2 lg:col-span-1">
          <div className="w-full aspect-[16/8] md:aspect-[16/8] lg:aspect-[4/5] bg-[#EFE7DA] rounded-[20px] md:rounded-[30px] shadow-inner overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
            {/* Project Image/Content */}
          </div>
          <div className="mt-4 hidden md:block">
            <p className="font-serif text-white/50 text-sm uppercase tracking-widest">
              Case Study 03
            </p>
            <h3 className="font-serif text-white text-2xl italic mt-1">
              Industrial Showcase
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
