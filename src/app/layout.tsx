import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Quick Shiftings - Professional Relocation Services in Nellore",
  description: "Quick Shiftings in Nellore offers professional and affordable moving services. 10+ years of experience in house shifting, car transport, and commercial relocations.",
  keywords: "movers and packers, relocation services, house shifting, car transport, Nellore movers, Nellore packers",
  openGraph: {
    title: "Quick Shiftings - Professional Relocation Services",
    description: "Your trusted partner for seamless and secure packing and moving services in Nellore.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
