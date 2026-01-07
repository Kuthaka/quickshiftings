import type { Metadata } from 'next'
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.quickshiftings.in/',
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
import { getSiteSettings, getServices, getBlogPosts, getFAQs } from "@/lib/sanity-queries";

export default async function Home() {
  const siteSettings = await getSiteSettings();
  const services = await getServices();
  const blogPosts = await getBlogPosts(3);
  const faqs = await getFAQs();

  return (
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
  );
}
