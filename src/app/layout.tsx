import "./globals.css";
import { ReactNode } from "react";

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
      <body className="min-h-screen bg-[#f3e9dc]">
        {/* 
            max-w-[1440px]: Caps the width at your requested 1440px
            mx-auto: Centers the entire block on 4K/Ultrawide screens
            w-full: Ensures it still takes up the full space on mobile/tablet
        */}
        <main className="max-w-[1440px] mx-auto w-full">{children}</main>
      </body>
    </html>
  );
}
