import type React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/custom-cursor";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
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
    <html lang="en" className={montserrat.variable}>
      <body className={`${montserrat.className} antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
