import type { Metadata } from 'next'
import Script from "next/script";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.packershub.in/',
  },
}

import Hero from "@/components/Hero";
import QuoteForm from "@/components/QuoteForm";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import BlogPosts from "@/components/BlogPosts";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import {
  getSiteSettings,
  getServices,
  getBlogPosts,
  getFAQs
} from "@/lib/sanity-queries";

export const revalidate = 60;

export default async function Home() {
  const [siteSettings, services, blogPosts, faqs] = await Promise.all([
    getSiteSettings(),
    getServices(),
    getBlogPosts(3),
    getFAQs()
  ]);

  // ✅ JSON-LD Schema (Homepage)
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.packershub.in/#website",
        "url": "https://www.packershub.in/",
        "name": "PackersHub",
        "description": "Professional Packers & Movers in South India",
        "publisher": {
          "@id": "https://www.packershub.in/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.packershub.in/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-IN"
      },
      {
        "@type": "Organization",
        "@id": "https://www.packershub.in/#organization",
        "name": "PackersHub",
        "url": "https://www.packershub.in/",
        "logo": {
          "@type": "ImageObject",
          "inLanguage": "en-IN",
          "@id": "https://www.packershub.in/#logo",
          "url": "https://www.packershub.in/logo.png",
          "contentUrl": "https://www.packershub.in/logo.png",
          "width": 512,
          "height": 512,
          "caption": "PackersHub"
        },
        "image": {
          "@id": "https://www.packershub.in/#logo"
        },
        "telephone": siteSettings?.contactInfo?.phone || "+917730912913",
        "email": siteSettings?.contactInfo?.email || "kpkumar123123@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteSettings?.contactInfo?.address || "Nellore, Andhra Pradesh",
          "addressLocality": "Nellore",
          "addressRegion": "Andhra Pradesh",
          "postalCode": "524004",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.packershub.in/#localbusiness",
        "name": "PackersHub",
        "url": "https://www.packershub.in/",
        "telephone": siteSettings?.contactInfo?.phone || "+917730912913",
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteSettings?.contactInfo?.address || "Nellore, Andhra Pradesh",
          "addressLocality": "Nellore",
          "addressRegion": "Andhra Pradesh",
          "postalCode": "524004",
          "addressCountry": "IN"
        },
        "image": "https://www.packershub.in/logo.png",
        "areaServed": [
          "Nellore", "Tirupati", "Hyderabad", "Chennai", "Bangalore", "Vijayawada", "Visakhapatnam", "Guntur", "Ongole", "Coimbatore", "Kochi", "Mysuru", "Madurai", "Hubballi"
        ],
        "knowsAbout": ["Packers and Movers", "House Shifting", "Car Transportation", "Office Relocation", "Cargo Services"]
      }
    ]
  };

  return (
    <>
      {/* ✅ Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <main>
        <Navigation />
        <Hero
          title={siteSettings?.hero?.title}
          subtitle={siteSettings?.hero?.subtitle}
          ctaText={siteSettings?.hero?.ctaText}
          phone={siteSettings?.contactInfo?.phone}
          backgroundImage={siteSettings?.hero?.backgroundImage}
        />
        <QuoteForm />
        <About />
        <Services services={services} locations={siteSettings?.serviceLocations} />
        <Process />
        <Testimonials />
        <BlogPosts posts={blogPosts} />
        <FAQ faqs={faqs} />
        <Footer
          phone={siteSettings?.contactInfo?.phone}
          email={siteSettings?.contactInfo?.email}
          address={siteSettings?.contactInfo?.address}
          services={services}
        />
      </main>
    </>
  );
}
