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
  const siteSettings = await getSiteSettings();
  const services = await getServices();
  const blogPosts = await getBlogPosts(3);
  const faqs = await getFAQs();

  // ✅ JSON-LD Schema (Homepage)
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.packershub.in/#organization",
        "name": "PackersHub",
        "url": "https://www.packershub.in/",
        "logo": "https://www.packershub.in/assets/logo.png",
        "telephone": siteSettings?.contactInfo?.phone,
        "email": siteSettings?.contactInfo?.email
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.packershub.in/#localbusiness",
        "name": "PackersHub",
        "url": "https://www.packershub.in/",
        "telephone": siteSettings?.contactInfo?.phone,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteSettings?.contactInfo?.address,
          "addressLocality": siteSettings?.contactInfo?.address,
          "addressRegion": siteSettings?.contactInfo?.address,
          "postalCode": siteSettings?.contactInfo?.address,
          "addressCountry": "IN"
        },
        "parentOrganization": {
          "@id": "https://www.packershub.in/#organization"
        }
      }
    ]
  };

  return (
    <>
      {/* ✅ Schema Injection */}
      <Script
        id="schema-home"
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
