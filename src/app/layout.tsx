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

  const title = siteSettings?.title || "PackersHub — Professional Packers & Movers in India";
  const description = siteSettings?.description || "PackersHub offers reliable, affordable, and secure packers & movers services across India. Get stress-free shifting solutions for home, office & vehicles.";

  return {
    metadataBase: new URL("https://www.packershub.in"),
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description: description,
    keywords: "movers and packers, relocation services, house shifting, car transport, Nellore movers, Nellore packers, packershub, packers hub, packershub.in, Packers and movers in Nellore, Packers and movers Nellore, Best packers and movers in Nellore, Nellore packers and movers, Nellore local packers and movers, Packers and movers near me Nellore, Nellore to Hyderabad packers and movers, Nellore to Bangalore packers and movers, Nellore to Chennai packers and movers, Nellore to Vijayawada packers and movers, Packers and movers services in Nellore, Household shifting services Nellore, Office shifting services Nellore, Packing and unpacking services Nellore, Loading and unloading services Nellore, Furniture shifting services Nellore, Affordable packers and movers in Nellore, Cheap packers and movers Nellore, Best packers and movers for home shifting Nellore, Reliable packers and movers in Nellore, Tirupati movers, Tirupati packers, quick shiftings, quick shift, quickshifting, Packers and movers in telangana, Packers and movers in tamilnadu, Packers and movers in Karnataka, Packers and movers in Kerala, Packers and movers in tirupati, Packers and movers tirupati, Best packers and movers in tirupati, Best packers and movers tirupati, Packers and movers services in tirupati, Household shifting services Tirupati, Office shifting services in tirupati, Packing and unpacking services tirupati, Loading and unloading services tirupati, Furniture shifting services tirupati, Affordable packers and movers in Tirupati, Cheap packers and movers tirupati, Best packers and movers for home shifting tirupati, Reliable packers and movers in tirupati, Movers near me, Moving companies near me, Local movers, Local movers near me, Local packers, Local packers near me, Local house shifting, Local house shiftings, Local house shifting near me, Relocation services near me, Packers and movers near me, Professional packers and movers, Professional packers and movers near me, South India packers and movers, packers and movers in south india, Local packers and movers nellore, Local packers and movers tirupati, Local packers and movers Hyderabad, Local packers and movers Chennai, Local packers and movers Bangalore, Household shifting services Hyderabad, Household shifting services Chennai, Household shifting services Bangalore, Packers and movers Chennai, Bangalore packers and movers, Hyderabad movers and packers, Cheap packers and movers in South India, Best home shifting services Bangalore, Office relocation Chennai, Car transportation Hyderabad, furniture movers, furniture movers near me, affordable movers, affordable movers near me, professional movers, professional movers near me, long distance moving companies, long distance moving companies near me, commercial movers, commercial movers near me, Office Shifting, Office Shiftings, Office Shifting near me, Office Shiftings near me, office movers, office movers near me, Best packers and movers Chennai, Best packers and movers in Chennai, affordable packers and movers Chennai, Relocation services Chennai, Relocation services in Chennai, Best packers in Chennai, Best movers in Chennai, Best packers and movers Bangalore, Best packers and movers in Bangalore, Packers and movers Bangalore, Packers and movers in Bangalore, affordable packers and movers Bangalore, Relocation services Bangalore, Relocation services in Bangalore, Best packers in Bangalore, Best movers in Bangalore, Best packers and movers Hyderabad, Best packers and movers in Hyderabad, Packers and movers Hyderabad, Packers and movers in Hyderabad, affordable packers and movers Hyderabad, Relocation services Hyderabad, Relocation services in Hyderabad, Best packers in Hyderabad, Best movers in Hyderabad, Best packers and movers Visakhapatnam, Best packers and movers in Visakhapatnam, Packers and movers Visakhapatnam, Packers and movers in Visakhapatnam, affordable packers and movers Visakhapatnam, Relocation services Visakhapatnam, Relocation services in Visakhapatnam, Best packers in Visakhapatnam, Best movers in Visakhapatnam, Best packers and movers Vijayawada, Best packers and movers in Vijayawada, Packers and movers Vijayawada, Packers and movers in Vijayawada, affordable packers and movers Vijayawada, Relocation services Vijayawada, Relocation services in Vijayawada, Best packers in Vijayawada, Best movers in Vijayawada, Best packers and movers Amaravati, Best packers and movers in Amaravati, Packers and movers Amaravati, Packers and movers in Amaravati, affordable packers and movers Amaravati, Relocation services Amaravati, Relocation services in Amaravati, Best packers in Amaravati, Best movers in Amaravati, Best packers and movers Kanigiri, Best packers and movers in Kanigiri, Packers and movers Kanigiri, Packers and movers in Kanigiri, affordable packers and movers Kanigiri, Relocation services Kanigiri, Relocation services in Kanigiri, Best packers in Kanigiri, Best movers in Kanigiri, Best packers and movers Ongole, Best packers and movers in Ongole, Packers and movers Ongole, Packers and movers in Ongole, affordable packers and movers Ongole, Relocation services Ongole, Relocation services in Ongole, Best packers in Ongole, Best movers in Ongole, Best packers and movers in Guntur, Packers and movers Guntur, Packers and movers in Guntur, affordable packers and movers Guntur, Relocation services Guntur, Relocation services in Guntur, Best packers in Guntur, Best movers in Guntur, Best packers and movers Bheemavaram, Best packers and movers in Bheemavaram, Packers and movers Bheemavaram, Packers and movers in Bheemavaram, affordable packers and movers Bheemavaram, Relocation services Bheemavaram, Relocation services in Bheemavaram, Best packers in Bheemavaram, Best movers in Bheemavaram, Best packers and movers kakinada, Best packers and movers in kakinada, Packers and movers kakinada, Packers and movers in kakinada, affordable packers and movers kakinada, Relocation services kakinada, Relocation services in kakinada, Best packers in kakinada, Best movers in kakinada, Best packers and movers Rajahmundry, Best packers and movers in Rajahmundry, Packers and movers Rajahmundry, Packers and movers in Rajahmundry, affordable packers and movers Rajahmundry, Relocation services Rajahmundry, Relocation services in Rajahmundry, Best packers in Rajahmundry, Best movers in Rajahmundry, Easy Shifting, Easy Shiftings, Home relocation services, Home relocation services near me, Transportation services, Transportation services near me",
    openGraph: {
      title: title,
      description: description,
      url: "https://www.packershub.in/",
      type: "website",
      siteName: "PackersHub",
      locale: "en_IN",
      images: [
        {
          url: "https://www.packershub.in/path-to-your-preview-image.jpg",
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
