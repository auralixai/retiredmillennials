import { Inter } from "next/font/google";
import "./globals.css";

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
    images: [
      {
        url: "https://retiredmillennials.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Retired Millennials - The New Standard of Living",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retired Millennials | Life Beyond the 60+ Wait",
    description: "Curated network and resources for millennials ready to free themselves from the rat race and live life to the fullest now.",
    images: ["https://retiredmillennials.com/og-image.png"],
    creator: "@dvnnytorres",
  },
  icons: {
    icon: "/favicon.ico",
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
        {children}
      </body>
    </html>
  );
}
