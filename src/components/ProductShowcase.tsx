"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";

const ProductShowcase = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  // Helper function for smooth scrolling
  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="w-full -xl:mt-4 bg-[#EFE7DA] flex flex-col items-center px-0 pb-12">
      {/* Fixed Sticky Icons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[100]">
        <a
          href="https://wa.me/your-number"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            width={40}
            height={40}
            className="w-10 h-10 drop-shadow-xl"
          />
        </a>
        <a
          href="mailto:your-email@gmail.com"
          className="transition-transform hover:scale-110"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
            alt="Email"
            width={40}
            height={40}
            className="w-10 h-10 drop-shadow-xl"
          />
        </a>
      </div>

      {/* MOBILE DESIGN */}
      <div className="md:hidden w-full max-w-105 bg-white rounded-[40px] py-4 pr-6 pl-3 shadow-2xl border-[6px] border-[#B89B89] flex items-center justify-between -mt-28 z-10 relative">
        <div className="flex-none self-start mt-2">
          <p className="font-sans text-[10px] font-bold leading-tight text-[#4E2A13] whitespace-nowrap not-italic">
            Sell Anything.
            <br />
            We Design It !
          </p>
        </div>

        <div className="flex-grow flex justify-center">
          <div className="w-32 h-32 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover scale-150"
            >
              <source src="/teddy.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="w-[60px]" />
      </div>

      <div className="md:hidden w-full bg-[#B89B89] flex flex-col items-center pt-20 pb-20 -mt-12 relative z-0">
        <a
          href="#services"
          onClick={scrollToServices}
          className="bg-[#4E2A13] text-white px-8 py-3 rounded-md font-serif text-lg border border-white/20 shadow-md flex items-center gap-2"
        >
          How We Can Help <span>→</span>
        </a>
      </div>

      {/* TABLET & 4K DESIGN */}
      <div className="hidden md:flex w-full md:-mt-20 md:max-w-full 2xl:max-w-[99.5%] bg-white rounded-[20px] py-3 xl:h-[180px] xl:py-0 px-12 shadow-2xl border-[6px] border-[#B89B89] items-center justify-between z-10 relative -mt-48 xl:mt-2">
        <div className="flex items-center">
          <div className="w-32 h-32 md:ml-24 2xl:w-44 2xl:h-44 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover scale-150"
            >
              <source src="/teddy.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <p className="font-serif text-4xl xl:text-2xl 2xl:text-6xl italic font-bold text-[#4E2A13] whitespace-nowrap">
            Sell Anything. We Design It !
          </p>
          <a
            href="#services"
            onClick={scrollToServices}
            className="bg-[#4E2A13] text-white px-10 py-3 rounded-md font-serif text-xl 2xl:text-2xl border border-white/20 shadow-lg flex items-center gap-2 hover:brightness-110 transition-all inline-flex"
          >
            How We Can Help <span>→</span>
          </a>
        </div>
      </div>

      <div className="hidden md:block w-full h-24 bg-[#B89B89] -mt-10 relative z-0" />
    </section>
  );
};

export default ProductShowcase;
