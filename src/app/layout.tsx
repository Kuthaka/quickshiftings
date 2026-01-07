import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { getSiteSettings } from "@/lib/sanity-queries";

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

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettings();

  const title = siteSettings?.title || "Quick Shiftings — Professional Packers & Movers in India";
  const description = siteSettings?.description || "Quick Shiftings offers reliable, affordable, and secure packers & movers services across India. Get stress-free shifting solutions for home, office & vehicles.";

  return {
    metadataBase: new URL("https://www.quickshiftings.in"),
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description: description,
    keywords: "movers and packers, relocation services, house shifting, car transport, Nellore movers, Nellore packers, quick shiftings, quick shift, quickshiftings, quickshift, quickshifting, quick shifting",
    openGraph: {
      title: title,
      description: description,
      url: "https://www.quickshiftings.in/",
      type: "website",
      siteName: "Quick Shiftings",
      locale: "en_IN",
      images: [
        {
          url: "https://www.quickshiftings.in/path-to-your-preview-image.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    verification: {
      google: "aSGdYPhLWHKHnxuWewIpJ7GBI9mgJWFVJxzHR8KT1po",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-V7YY0LCYVH"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V7YY0LCYVH');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
