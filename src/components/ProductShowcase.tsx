"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";

const ProductShowcase = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Sets video playback speed to 0.8x
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    /* Removed px-2 to allow container to touch screen edges */
    <section className="w-full bg-[#EFE7DA] flex flex-col items-center px-0 pb-12">
      {/* Container: Changed w-[96%] to w-full to touch mobile edges */}
      <div className="w-full max-w-[420px] bg-white rounded-[40px] py-4 pr-6 pl-3 shadow-2xl border-[6px] border-[#EFE7DA] flex items-center justify-between -mt-28 z-10 relative">
        {/* Left: Tagline pushed to the far left edge */}
        <div className="flex-none self-start">
          <p className="font-serif text-[10px] italic font-bold leading-tight text-[#4E2A13] whitespace-nowrap not-italic [text-shadow:none]">
            Sell Anything.
            <br />
            We Design It !
          </p>
        </div>

        {/* Center: Video Component centered within the available space */}
        <div className="flex-1 flex justify-start">
          <div className="w-32 h-32 bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover scale-150"
            >
              <source src="/teddy.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Right: Contact Icons pinned to the right edge */}
        <div className="flex-none flex flex-col items-end gap-4">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            width={32}
            height={32}
            className="w-8 h-8 cursor-pointer"
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
            alt="Email"
            width={32}
            height={32}
            className="w-8 h-8 cursor-pointer"
          />
        </div>
      </div>

      {/* Increased pt-10 to pt-20 to push the button further down inside the container */}
      <div className="w-full bg-[#A89482] flex flex-col items-center pt-20 pb-20 -mt-12 relative z-0">
        <button className="bg-[#4E2A13] text-white px-8 py-3 rounded-md font-serif text-lg border border-white/20 shadow-[4px_4px_0px_rgba(0,0,0,0.1)] flex items-center gap-2 active:scale-95 transition-transform [text-shadow:none]">
          How We Can Help <span>→</span>
        </button>
      </div>
    </section>
  );
};

export default ProductShowcase;
