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
    /* Lifts the entire section upward for desktop/4K without cropping */
    <section className="w-full bg-[#EFE7DA] flex flex-col items-center px-0 pb-12 xl:mt-8 2xl:mt-2 relative z-10">
      {/* Fixed Sticky Icons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[100]">
        <a
          href="https://wa.me/9967754569"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative transition-transform hover:scale-110 active:scale-95"
        >
          <div className="absolute inset-0 bg-[#25D366] rounded-full blur-md opacity-40 group-hover:opacity-70 animate-pulse transition-opacity"></div>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            width={40}
            height={40}
            className="relative w-12 h-12 drop-shadow-[0_0_10px_rgba(37,211,102,0.5)]"
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
      {/* Increased height (xl:h, 2xl:h) and scaled text/video for premium 4K feel */}
      <div className="hidden md:flex w-full md:-mt-12 md:max-w-full 2xl:max-w-[99.5%] bg-white rounded-[20px] py-3 xl:h-[230px] 2xl:h-[320px] xl:py-0 px-12 shadow-2xl border-[6px] border-[#B89B89] items-center justify-between z-20 relative -mt-48">
        <div className="flex items-center">
          <div className="w-32 h-32 md:ml-24 2xl:w-56 2xl:h-56 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden">
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
          <p className="font-serif text-2xl xl:text-4xl 2xl:text-5xl italic font-bold text-[#4E2A13] whitespace-nowrap">
            Sell Anything. We Design It !
          </p>
          <a
            href="#services"
            onClick={scrollToServices}
            className="bg-[#4E2A13] text-white px-10 py-3 rounded-md font-serif text-xl 2xl:text-3xl border border-white/20 shadow-lg flex items-center gap-2 hover:brightness-110 transition-all inline-flex"
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
