import type React from "react";
import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/custom-cursor";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Social Wave Media - Premium Digital Marketing Agency",
  description:
    "Transform your brand with cutting-edge digital marketing strategies. Social media management, paid advertising, and content creation that drives results.",
  keywords:
    "digital marketing, social media management, paid ads, content creation, marketing agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable}`}>
      <body className={`${outfit.className} antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
