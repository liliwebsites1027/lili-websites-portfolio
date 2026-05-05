const Hero = () => {
  return (
    <section className="w-full h-auto bg-[#EFE7DA] flex items-start justify-center p-1 md:p-2 2xl:p-3">
      <div className="max-w-105 md:max-w-[99%] 2xl:max-w-[99.5%] w-full bg-[#4E2A13] rounded-[40px] md:rounded-[30px] overflow-hidden text-center md:text-left text-white shadow-2xl flex flex-col md:grid md:grid-cols-2 border-[8px] border-[#EFE7DA] pb-20 md:pb-12">
        <div className="pt-16 pb-10 px-4 md:pl-16 md:pt-24 flex flex-col items-center md:items-start">
          <p className="text-2xl mb-2 font-serif italic md:text-3xl">2026</p>
          <h1 className="text-6xl sm:text-7xl md:text-[120px] font-serif font-bold italic tracking-tighter leading-none drop-shadow-2xl">
            Portfolio
          </h1>
          <p className="text-3xl mt-4 font-serif italic opacity-95 md:text-5xl">
            lili_websites
          </p>
        </div>

        <div className="flex flex-col justify-end md:pr-12">
          <div className="py-10 px-8 border-y border-[#EFE7DA]/10 md:border-none md:bg-[#744A36] md:rounded-2xl md:p-10 md:mb-12">
            <h2 className="text-xl font-sans font-semibold leading-tight mb-4 tracking-tight not-italic text-shadow-none md:text-2xl">
              Give Your Business a 5 ⭐ Digital Address.
            </h2>
            <p className="text-[14px] font-sans font-normal leading-relaxed opacity-90 max-w-75 mx-auto md:max-w-none md:mx-0 not-italic md:text-base">
              From professional websites to custom logos and catalogues—we build
              the tools you need to grow, at prices that make sense for your
              budget.
            </p>
          </div>

          <div className="py-12 px-4 md:py-0 flex flex-row justify-center md:justify-end items-center gap-3 md:gap-6">
            <button className="bg-white text-black whitespace-nowrap px-6 py-2.5 md:px-10 md:py-4 rounded-full text-[13px] md:text-base font-bold shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
              View Our Work
            </button>
            <button className="bg-white text-black whitespace-nowrap px-6 py-2.5 md:px-10 md:py-4 rounded-full text-[13px] md:text-base font-bold shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
