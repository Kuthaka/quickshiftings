import type { Metadata } from "next";
import Script from "next/script";
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
  metadataBase: new URL("https://www.packershub.in"),

  title: {
    default: "Best Packers and Movers in Nellore | PackersHub",
    template: "%s | PackersHub",
  },

  description:
    "PackersHub – Trusted packers and movers in Nellore, Hyderabad, Bangalore, Chennai and 20+ cities across South India. Safe packing, GPS tracking, on-time delivery. Call +917730912913.",

  keywords: [
    "packers and movers nellore",
    "packers and movers hyderabad",
    "packers and movers bangalore",
    "packers and movers chennai",
    "house shifting nellore",
    "car transport south india",
    "packers movers andhra pradesh",
    "office relocation south india",
    "best movers nellore",
    "reliable packers south india",
  ],

  authors: [{ name: "PackersHub", url: "https://www.packershub.in" }],
  creator: "PackersHub",
  publisher: "PackersHub",

  // ✅ THIS IS THE CRITICAL FIX — robots must be index: true
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.packershub.in",
    siteName: "PackersHub",
    title: "Best Packers and Movers in Nellore | PackersHub",
    description:
      "Trusted packers and movers serving 23 cities across South India. Safe, fast, on-time relocation. Call now: +917730912913.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PackersHub – Best Packers and Movers in South India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Packers and Movers in Nellore | PackersHub",
    description:
      "Trusted packers and movers serving 23 cities across South India. Safe, fast, on-time delivery.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://www.packershub.in",
  },

  verification: {
    google: "3D8qFAYGruRsC1TU-5h5FqPfGaaynQSzD-ZCgC_jCkA",
  },

  category: "Moving and Relocation Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7TJ4FBXGC6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7TJ4FBXGC6', {
              page_path: window.location.pathname,
              send_page_view: true,
              anonymize_ip: true,
            });
          `}
        </Script>
      </head>
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        {/* ===== GLOBAL SEO SCHEMAS — DO NOT REMOVE ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.packershub.in/#organization",
                  name: "PackersHub",
                  url: "https://www.packershub.in",
                  logo: {
                    "@type": "ImageObject",
                    "@id": "https://www.packershub.in/#logo",
                    url: "https://www.packershub.in/logo.png",
                    contentUrl: "https://www.packershub.in/logo.png",
                    width: 200,
                    height: 60,
                    caption: "PackersHub",
                  },
                  image: { "@id": "https://www.packershub.in/#logo" },
                  description:
                    "PackersHub is a trusted packers and movers company headquartered in Nellore, Andhra Pradesh, serving 23 cities across South India.",
                  telephone: "+917730912913",
                  email: "info@packershub.com",
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone: "+917730912913",
                      contactType: "customer service",
                      areaServed: "IN",
                      availableLanguage: ["English", "Telugu", "Hindi"],
                    },
                  ],
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Nellore",
                    addressLocality: "Nellore",
                    addressRegion: "Andhra Pradesh",
                    postalCode: "524001",
                    addressCountry: "IN",
                  },
                  foundingDate: "2014",
                  // Update these URLs once social pages are created:
                  sameAs: [
                    "https://www.facebook.com/packershub",
                    "https://www.instagram.com/packershub",
                  ],
                },
                {
                  "@type": ["LocalBusiness", "MovingCompany"],
                  "@id": "https://www.packershub.in/#business",
                  name: "PackersHub",
                  alternateName: "Packers Hub",
                  image: "https://www.packershub.in/og-image.jpg",
                  url: "https://www.packershub.in",
                  telephone: "+917730912913",
                  email: "info@packershub.com",
                  priceRange: "₹₹",
                  currenciesAccepted: "INR",
                  paymentAccepted: "Cash, UPI, Bank Transfer",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Nellore",
                    addressLocality: "Nellore",
                    addressRegion: "Andhra Pradesh",
                    postalCode: "524001",
                    addressCountry: "IN",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 14.4426,
                    longitude: 79.9865,
                  },
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: [
                        "Monday","Tuesday","Wednesday",
                        "Thursday","Friday","Saturday","Sunday",
                      ],
                      opens: "06:00",
                      closes: "22:00",
                    },
                  ],
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.8",
                    reviewCount: "247",
                    bestRating: "5",
                    worstRating: "1",
                  },
                  areaServed: [
                    "Nellore","Tirupati","Hyderabad","Bangalore","Chennai",
                    "Vijayawada","Visakhapatnam","Coimbatore","Kochi","Mysuru",
                    "Madurai","Hubballi","Warangal","Salem","Thiruvananthapuram",
                    "Thrissur","Karimnagar","Mangalore","Guntur","Kakinada",
                    "Ongole","Rajahmundry","Kozhikode",
                  ],
                  parentOrganization: {
                    "@id": "https://www.packershub.in/#organization",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.packershub.in/#website",
                  url: "https://www.packershub.in",
                  name: "PackersHub",
                  description: "Best Packers and Movers in South India",
                  publisher: { "@id": "https://www.packershub.in/#organization" },
                  inLanguage: "en-IN",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate:
                        "https://www.packershub.in/search?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                },
              ],
            }),
          }}
        />
        {/* ===== END SCHEMAS ===== */}
        {children}
      </body>
    </html>
  );
}
