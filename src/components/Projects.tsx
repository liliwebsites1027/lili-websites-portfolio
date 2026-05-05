import React from "react";

const Projects = () => {
  return (
    <section className="w-full bg-[#EFE7DA] py-6 px-6 flex flex-col items-center -mt-20 relative z-20">
      {/* 
          Projects Label: 
          Consistent with About Us and Tech Stack:
          - text-[64px]
          - Left-aligned drop shadow 
      */}
      <h2 className="font-serif text-[64px] italic font-medium text-white mb-8 drop-shadow-[-6px_4px_3px_rgba(0,0,0,0.3)]">
        Projects
      </h2>

      {/* 
          Main Brown Project Container:
          - bg-[#6F4E37]: Deep brown matching the image
          - rounded-[30px]: Soft rounded corners
      */}
      <div className="w-full max-w-[450px] bg-[#6F4E37] rounded-[30px] p-6 flex flex-col gap-6 shadow-2xl">
        {/* Project Card 1 Placeholder */}
        <div className="w-full aspect-[16/8] bg-[#EFE7DA] rounded-[20px] shadow-inner">
          {/* Your Project Image/Content will go here */}
        </div>

        {/* Project Card 2 Placeholder */}
        <div className="w-full aspect-[16/8] bg-[#EFE7DA] rounded-[20px] shadow-inner">
          {/* Your Project Image/Content will go here */}
        </div>

        {/* Project Card 3 Placeholder */}
        <div className="w-full aspect-[16/8] bg-[#EFE7DA] rounded-[20px] shadow-inner">
          {/* Your Project Image/Content will go here */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
