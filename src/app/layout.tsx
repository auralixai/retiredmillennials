import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Retired Millennials | Life Beyond the 60+ Wait",
  description: "Curated network and resources for millennials ready to free themselves from the rat race and live life to the fullest now.",
  keywords: ["retired millennials", "financial independence", "location freedom", "wealth automation", "solopreneur", "digital nomad"],
  authors: [{ name: "Danny Torres" }],
  openGraph: {
    title: "Retired Millennials | Life Beyond the 60+ Wait",
    description: "Curated network and resources for millennials ready to free themselves from the rat race and live life to the fullest now.",
    url: "https://retiredmillennials.com",
    siteName: "Retired Millennials",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retired Millennials | Life Beyond the 60+ Wait",
    description: "Curated network and resources for millennials ready to free themselves from the rat race and live life to the fullest now.",
    creator: "@dvnnytorres",
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
        className={`antialiased bg-white ${inter.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
