import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
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
      <h2 className="text-[40px] md:text-[52px] leading-tight text-[#4E2A13] mb-12 text-center font-sans not-italic">
        Thinking about <br /> working with us?
      </h2>

      {/* 2. Contact Form - Using NEXT_PUBLIC environment variable */}
      <form
        action={`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`}
        method="POST"
        className="w-full max-w-100 md:max-w-150 flex flex-col items-center"
      >
        <div className="w-full space-y-6 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            maxLength={50} // Limits name to 100 characters
            className="w-full bg-[#C5B49E] border-none rounded-sm p-5 placeholder-[#4E2A13]/60 text-[#4E2A13] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),4px_4px_8px_rgba(0,0,0,0.1)] outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            maxLength={50} // Limits email to 150 characters
            className="w-full bg-[#C5B49E] border-none rounded-sm p-5 placeholder-[#4E2A13]/60 text-[#4E2A13] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),4px_4px_8px_rgba(0,0,0,0.1)] outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            required
            maxLength={2000} // Prevents "novel-length" spam submissions
            className="w-full bg-[#C5B49E] border-none rounded-sm p-5 placeholder-[#4E2A13]/60 text-[#4E2A13] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),4px_4px_8px_rgba(0,0,0,0.1)] outline-none resize-none"
          />
        </div>

        {/* 3. Send Message Button */}
        <button
          type="submit"
          className="w-full bg-[#6F4E37] text-[#EFE7DA] py-4 rounded-sm flex items-center justify-center gap-3 font-serif text-xl shadow-lg hover:brightness-110 transition-all mb-16"
        >
          Send message <FaPaperPlane className="text-lg" />
        </button>
      </form>

      {/* 5. Social Media Dock */}
      <div className="w-full max-w-100 md:max-w-150 border border-[#B0A08A] rounded-md p-4 flex flex-col items-center gap-4 mb-20">
        <span className="font-serif text-[#6F4E37] text-lg">Social Media</span>
        <div className="flex justify-around w-full text-[#4E2A13] text-3xl">
          <a
            href="https://www.instagram.com/lili_websites/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-all hover:scale-110 active:scale-95"
          >
            <FaInstagram className="cursor-pointer" />
          </a>
          <a
            href="https://twitter.com/lili_websites"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-all hover:scale-110 active:scale-95"
          >
            <FaXTwitter className="cursor-pointer" />
          </a>
          <a
            href="https://linkedin.com/in/lili-websites"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-all hover:scale-110 active:scale-95"
          >
            <FaLinkedinIn className="cursor-pointer" />
          </a>
          <a
            href="https://youtube.com/@LiliWebsites"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-all hover:scale-110 active:scale-95"
          >
            <FaYoutube className="cursor-pointer" />
          </a>
        </div>
      </div>

      {/* 6. Footer Branding */}
      <div className="text-center w-full overflow-hidden">
        <h1 className="font-serif text-[42px] md:text-[120px] lg:text-[180px] italic font-light text-white drop-shadow-md tracking-tight opacity-95 whitespace-nowrap">
          Lili_Websites
        </h1>
      </div>
    </section>
  );
};

export default Contact;
