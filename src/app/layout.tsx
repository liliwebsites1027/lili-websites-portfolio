import "./globals.css";
import { ReactNode } from "react";
import Image from "next/image";

export const metadata = {
  title: "Portfolio | 2026",
  description: "Professional digital address",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f3e9dc] relative">
        {/* Global WhatsApp Icon - Stays on top of everything */}
        <div className="fixed bottom-8 right-8 z-[9999] flex flex-col gap-4">
          <a
            href="https://wa.me/9967754569"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block transition-transform hover:scale-110 active:scale-95"
          >
            <div className="absolute inset-0 bg-[#25D366] rounded-full blur-md opacity-40 group-hover:opacity-70 animate-pulse transition-opacity"></div>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              width={48}
              height={48}
              className="relative w-12 h-12 drop-shadow-[0_0_10px_rgba(37,211,102,0.5)]"
            />
          </a>
        </div>

        <main className="max-w-[1440px] mx-auto w-full">{children}</main>
      </body>
    </html>
  );
}
