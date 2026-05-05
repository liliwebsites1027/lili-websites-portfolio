import React from "react";

const About = () => {
  return (
    /* -mt-24 pulls the entire section significantly higher into the section above */
    <section className="w-full bg-[#EFE7DA] flex flex-col items-center px-6 py-10 -mt-24 relative z-10">
      {/* 
          About Us Label: 
          - drop-shadow-[-6px_4px_4px_rgba(0,0,0,0.3)]: 
            The negative first value (-6px) pushes the shadow to the LEFT.
      */}
      <h2 className="font-serif text-[64px] italic font-medium text-white mb-12 drop-shadow-[-6px_4px_3px_rgba(0,0,0,0.4)] -mt-4">
        About Us
      </h2>

      {/* 
          Content Card:
          - shadow-[-10px_10px_25px_rgba(0,0,0,0.15)]: 
            Moves the card shadow to the LEFT and makes it darker/deeper.
          - -mt-4: Pulls the card itself closer to the "About Us" text.
      */}
      <div className="w-full max-w-[400px] bg-[#FAF6F0] rounded-[50px] p-10 shadow-[-10px_10px_25px_rgba(0,0,0,0.15)] -mt-4">
        <div className="space-y-6">
          <p className="font-serif text-[19px] leading-tight text-[#4E2A13] font-medium">
            We help businesses build modern, professional brands and websites.
          </p>

          <ul className="space-y-5">
            <li className="flex items-start gap-2">
              <span className="text-[#4E2A13] mt-1 text-sm">✦</span>
              <p className="font-serif text-[17px] text-[#4E2A13] leading-snug">
                From logos to full websites, everything is handled in one place.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#4E2A13] mt-1 text-sm">✦</span>
              <p className="font-serif text-[17px] text-[#4E2A13] leading-snug">
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
