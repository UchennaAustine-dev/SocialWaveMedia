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
  metadataBase: new URL("https://social-wave-media.vercel.app"),
  title: {
    default: "Social Wave Media | Premium Digital Marketing & Growth Agency",
    template: "%s | Social Wave Media",
  },
  description:
    "Dominate the digital space with Social Wave Media. We offer premium social media management, strategic paid advertising, and cinematic content creation to scale your brand.",
  keywords: [
    "Social Wave Media",
    "Digital Marketing Agency",
    "Social Media Management",
    "Paid Advertising",
    "Content Creation Agency",
    "Brand Growth Strategy",
    "Vercel Marketing Agency",
  ],
  authors: [{ name: "Social Wave Media Team" }],
  creator: "Social Wave Media",
  publisher: "Social Wave Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://social-wave-media.vercel.app",
    siteName: "Social Wave Media",
    title: "Social Wave Media | Premium Digital Marketing & Growth Agency",
    description:
      "Transform your digital presence with Social Wave Media. Premium management, strategic advertising, and elite content creation.",
    images: [
      {
        url: "/images/branding-flyer.jpeg",
        width: 1200,
        height: 630,
        alt: "Social Wave Media - Digital Growth Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Wave Media | Premium Digital Marketing & Growth Agency",
    description:
      "Dominate the digital currents. Social Wave Media scale brands through elite strategy and cinematic content.",
    images: ["/images/branding-flyer.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
