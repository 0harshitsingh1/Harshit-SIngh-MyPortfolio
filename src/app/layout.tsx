import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050508",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://harshitsingh.vercel.app"),
  title: {
    default: "Harshit Singh | Full Stack Developer",
    template: "%s | Harshit Singh",
  },
  description: "Portfolio of Harshit Singh, a Full Stack Developer specializing in Java, Spring Boot, React, and Next.js.",
  keywords: ["Harshit Singh", "Full Stack Developer", "Java Developer", "React Developer", "Next.js", "Portfolio", "Software Engineer", "Bangalore"],
  authors: [{ name: "Harshit Singh", url: "https://github.com/0harshitsingh1" }],
  creator: "Harshit Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harshitsingh.vercel.app",
    title: "Harshit Singh | Full Stack Developer",
    description: "Portfolio of Harshit Singh, a Full Stack Developer specializing in Java, Spring Boot, React, and Next.js.",
    siteName: "Harshit Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshit Singh | Full Stack Developer",
    description: "Portfolio of Harshit Singh, a Full Stack Developer specializing in Java, Spring Boot, React, and Next.js.",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
