import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full bg-[#EFE7DA] px-6 py-12 md:py-24 flex flex-col items-center"
    >
      {/* 1. Main Heading */}
      <h2 className="font-serif text-[40px] md:text-[52px] leading-tight text-[#4E2A13] mb-12 text-center">
        Thinking about <br /> working with us?
      </h2>

      {/* 2. Contact Form Container */}
      <div className="w-full max-w-[400px] md:max-w-[600px] space-y-6 mb-8">
        <input
          type="text"
          placeholder="Name"
          className="w-full bg-[#C5B49E] border-none rounded-sm p-5 placeholder-[#4E2A13]/60 text-[#4E2A13] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),4px_4px_8px_rgba(0,0,0,0.1)] outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-[#C5B49E] border-none rounded-sm p-5 placeholder-[#4E2A13]/60 text-[#4E2A13] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),4px_4px_8px_rgba(0,0,0,0.1)] outline-none"
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="w-full bg-[#C5B49E] border-none rounded-sm p-5 placeholder-[#4E2A13]/60 text-[#4E2A13] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),4px_4px_8px_rgba(0,0,0,0.1)] outline-none resize-none"
        />
      </div>

      {/* 3. Send Message Button */}
      <button className="w-full max-w-[400px] md:max-w-[600px] bg-[#6F4E37] text-[#EFE7DA] py-4 rounded-sm flex items-center justify-center gap-3 font-serif text-xl shadow-lg hover:brightness-110 transition-all mb-16">
        Send message <FaPaperPlane className="text-lg" />
      </button>

      {/* 4. Contact Information Section - HIDDEN ON MOBILE */}
      <div className="hidden md:block w-full max-w-[600px] space-y-4 mb-12 text-left">
        <h3 className="font-serif text-[28px] font-bold text-[#4E2A13]">
          Contact Information
        </h3>
        <p className="font-sans text-[#4E2A13] opacity-80 leading-relaxed">
          We&apos;re here to help and answer any question you might have. We
          look forward to hearing from you.
        </p>

        {/* Decorative placeholders from Screenshot 2026-05-05 184251.png */}
        <div className="w-full h-20 bg-[#C5B49E]/50 rounded-md shadow-[4px_4px_8px_rgba(0,0,0,0.1)]"></div>
        <div className="w-full h-20 bg-[#C5B49E]/50 rounded-md shadow-[4px_4px_8px_rgba(0,0,0,0.1)]"></div>
      </div>

      {/* 5. Social Media Dock */}
      <div className="w-full max-w-[400px] md:max-w-[600px] border border-[#B0A08A] rounded-md p-4 flex flex-col items-center gap-4 mb-20">
        <span className="font-serif text-[#6F4E37] text-lg">Social Media</span>
        <div className="flex justify-around w-full text-[#4E2A13] text-3xl">
          <FaInstagram className="cursor-pointer hover:opacity-70 transition-opacity" />
          <FaLinkedinIn className="cursor-pointer hover:opacity-70 transition-opacity" />
          <FaXTwitter className="cursor-pointer hover:opacity-70 transition-opacity" />
          <FaFacebookF className="cursor-pointer hover:opacity-70 transition-opacity" />
          <FaYoutube className="cursor-pointer hover:opacity-70 transition-opacity" />
        </div>
      </div>

      {/* 6. Footer Branding */}
      <div className="text-center w-full overflow-hidden">
        <h1 className="font-serif text-[64px] md:text-[120px] lg:text-[180px] italic font-light text-white drop-shadow-md tracking-tight opacity-95 whitespace-nowrap">
          lili websites
        </h1>
      </div>
    </section>
  );
};

export default Contact;
