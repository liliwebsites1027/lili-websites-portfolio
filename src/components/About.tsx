import React from "react";

const About = () => {
  return (
    /* 
       -mt-24 maintains the overlap. 
       md:py-24 and md:pb-32 add breathing room for a more professional feel on larger screens.
    */
    <section className="w-full bg-[#EFE7DA] flex flex-col items-center px-6 py-10 md:py-24 md:pb-32 -mt-24 relative z-10">
      {/* 
          About Us Label: 
          Scales dynamically for md, lg, xl, and 2xl viewports.
      */}
      <h2 className="text-[54px] md:text-[90px] lg:text-[120px] xl:text-[150px] 2xl:text-[180px] italic font-medium text-white mb-12 md:mb-16 drop-shadow-[-6px_4px_3px_rgba(0,0,0,0.4)] -mt-4 select-none">
        About Us
      </h2>

      {/* 
          Content Card:
          - md:max-w-[700px] to 2xl:max-w-[1000px]: Expands the width for a landscape editorial look.
          - p-10 to md:p-20: Significantly increases internal padding for a "luxury" sense of space.
      */}
      <div className="w-full max-w-100md:max-w-187.5 lg:max-w-225 xl:max-w-250 2xl:max-w-300 bg-[#FAF6F0] rounded-[50px] md:rounded-[80px] p-10 md:p-16 lg:p-20 shadow-[-10px_10px_25px_rgba(0,0,0,0.15)] -mt-4 md:-mt-8 transition-all duration-500 hover:shadow-[-20px_20px_40px_rgba(0,0,0,0.1)]">
        <div className="space-y-8 md:space-y-12">
          {/* Main Statement - Larger and more impactful on desktop */}
          <p className="font-serif text-[19px] md:text-[28px] lg:text-[34px] leading-tight text-[#4E2A13] font-medium max-w-[90%]">
            We help businesses build modern, professional brands and websites.
          </p>

          {/* Feature List - Transitions to a 2-column grid on desktop for better use of space */}
          <ul className="space-y-5 md:space-y-0 md:grid md:grid-cols-2 md:gap-12 border-t border-[#4E2A13]/10 pt-8 md:pt-12">
            <li className="flex items-start gap-3">
              <span className="text-[#4E2A13] mt-1.5 text-lg">✦</span>
              <p className="font-serif text-[17px] md:text-[20px] lg:text-[22px] text-[#4E2A13] leading-snug opacity-90">
                From logos to full websites, everything is handled in one place.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#4E2A13] mt-1.5 text-lg">✦</span>
              <p className="font-serif text-[17px] md:text-[20px] lg:text-[22px] text-[#4E2A13] leading-snug opacity-90">
                Fast, affordable, and designed to help you grow.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
