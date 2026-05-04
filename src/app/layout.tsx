import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Portfolio | 2026",
  description: "Professional digital address",
};

// Defining the Interface for props to fix the 'any' type error
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f3e9dc]">
        <main>{children}</main>
      </body>
    </html>
  );
}
