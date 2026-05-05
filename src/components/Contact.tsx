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
    <section className="w-full bg-[#EFE7DA] py-20 px-6 flex flex-col items-center">
      {/* Heading */}
      <h2 className="font-serif text-[40px] leading-tight text-[#1A1A1A] mb-12 text-center">
        Thinking about <br /> working with us?
      </h2>

      {/* Form Fields */}
      <div className="w-full max-w-[400px] space-y-6 mb-8">
        <input
          type="text"
          placeholder="Name"
          className="w-full bg-[#C5B49E] border border-[#B0A08A] rounded-md p-4 placeholder-[#4E2A13] text-[#4E2A13] shadow-sm outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-[#C5B49E] border border-[#B0A08A] rounded-md p-4 placeholder-[#4E2A13] text-[#4E2A13] shadow-sm outline-none"
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="w-full bg-[#C5B49E] border border-[#B0A08A] rounded-md p-4 placeholder-[#4E2A13] text-[#4E2A13] shadow-sm outline-none resize-none"
        />
      </div>

      {/* Send Button */}
      <button className="w-full max-w-[400px] bg-[#6F4E37] text-white py-4 rounded-md flex items-center justify-center gap-3 font-serif text-xl hover:bg-[#5D402D] transition-colors mb-16">
        Send message <FaPaperPlane className="text-lg" />
      </button>

      {/* Social Media Dock */}
      <div className="w-full max-w-[380px] border border-[#B0A08A] rounded-2xl p-4 flex flex-col items-center gap-4 mb-20">
        <span className="font-serif text-[#6F4E37] text-sm">Social Media</span>
        <div className="flex justify-between w-full px-4 text-[#6F4E37] text-2xl">
          <FaInstagram className="cursor-pointer" />
          <FaLinkedinIn className="cursor-pointer" />
          <FaXTwitter className="cursor-pointer" />
          <FaFacebookF className="cursor-pointer" />
          <FaYoutube className="cursor-pointer" />
        </div>
      </div>

      {/* Footer Branding */}
      <h1 className="font-serif text-[64px] italic font-bold text-white drop-shadow-[-6px_4px_3px_rgba(0,0,0,0.2)]">
        lili_websites
      </h1>
    </section>
  );
};

export default Contact;
