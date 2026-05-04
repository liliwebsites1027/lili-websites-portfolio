const Hero = () => {
  return (
    /* Changed items-center to items-start and added pt-12 for that top gap */
    <section className="w-full min-h-screen bg-[#EFE7DA] flex items-start justify-center p-2">
      {/* Container maintains the wide 96% width for small mobiles */}
      <div className="w-[96%] max-w-[420px] bg-[#4E2A13] rounded-[40px] overflow-hidden text-center text-white shadow-2xl flex flex-col border-[8px] border-[#EFE7DA]">
        {/* Top Branding Section */}
        <div className="pt-16 pb-10 px-4 flex flex-col items-center">
          <p className="text-2xl mb-2 font-serif italic">2026</p>
          <h1 className="text-6xl sm:text-7xl font-serif font-bold italic tracking-tighter leading-none drop-shadow-2xl">
            Portfolio
          </h1>
          <p className="text-3xl mt-4 font-serif italic opacity-95">
            lili_websites
          </p>
        </div>

        {/* Middle Banner - Clean font with explicit shadow removal */}
        <div className="py-10 px-8 border-y border-[#EFE7DA]/10">
          <h2 className="text-xl font-sans font-semibold leading-tight mb-4 tracking-tight not-italic [text-shadow:none]">
            Give Your Business a 5 ⭐ Digital Address.
          </h2>
          <p className="text-[14px] font-sans font-normal leading-relaxed opacity-90 max-w-[300px] mx-auto not-italic">
            From professional websites to custom logos and catalogues, we build
            the tools you need to grow, at prices that make sense for your
            budget.
          </p>
        </div>

        {/* Action Buttons - Horizontally Aligned */}
        <div className="py-12 px-4 flex flex-row justify-center items-center gap-3">
          <button className="bg-white text-black whitespace-nowrap px-6 py-2.5 rounded-full text-[13px] font-bold shadow-[0_4px_12px_rgba(0,0,0,0.4)] active:scale-95 transition-transform">
            View Our Work
          </button>
          <button className="bg-white text-black whitespace-nowrap px-6 py-2.5 rounded-full text-[13px] font-bold shadow-[0_4px_12px_rgba(0,0,0,0.4)] active:scale-95 transition-transform">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
