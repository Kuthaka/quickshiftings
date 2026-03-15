import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhyChooseFlow from '@/components/WhyChooseFlow';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Services from '@/components/Services';
import BlogPosts from '@/components/BlogPosts';
import { getSiteSettings, getServices, getBlogPosts, getFAQs } from '@/lib/sanity-queries';
import { getCityContent } from '@/lib/cityData';
import styles from './LocationPage.module.css';
import Link from 'next/link';

interface Props {
    params: Promise<{ city: string }>;
}

// Function to format city name (e.g., nellore-packers-and-movers -> Nellore)
const formatCity = (slug: string) => {
    const cityName = slug.replace('-packers-and-movers', '');
    return cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city: cityParam } = await params;
    const content = getCityContent(cityParam);
    const fullUrl = `https://www.packershub.in/${cityParam.toLowerCase()}`;

    return {
        title: content.metaTitle,
        description: content.metaDescription,
        keywords: content.focusKeywords,
        alternates: {
            canonical: fullUrl,
        },
        openGraph: {
            title: content.metaTitle,
            description: content.metaDescription,
            url: fullUrl,
            siteName: 'PackersHub',
            locale: 'en_IN',
            type: 'website',
        }
    };
}

// Pre-generate paths for common cities (optional but good for performance)
export async function generateStaticParams() {
    const cities = [
        'nellore', 'tirupati', 'bangalore', 'chennai', 'hyderabad', 'vijayawada',
        'visakhapatnam', 'coimbatore', 'kochi', 'mysuru', 'madurai', 'hubballi',
        'warangal', 'salem', 'thiruvananthapuram', 'thrissur', 'karimnagar',
        'mangalore', 'guntur', 'kakinada', 'ongole', 'rajahmundry', 'kozhikode'
    ];
    return cities.map(city => ({
        city: `${city}-packers-and-movers`
    }));
}

export default async function LocationPage({ params }: Props) {
    const { city: cityParam } = await params;
    const city = formatCity(cityParam);
    const content = getCityContent(cityParam);
    const [siteSettings, services, blogPosts, sanityFaqs] = await Promise.all([
        getSiteSettings(),
        getServices(),
        getBlogPosts(3),
        getFAQs()
    ]);

    // Merge FAQs
    const combinedFaqs = [
        ...content.faqs.map((f, i) => ({ ...f, _id: `local-${i}`, _type: 'faq' as const, isActive: true })),
        ...(sanityFaqs || []).slice(0, 3)
    ];

    const pageUrl = `https://www.packershub.in/${cityParam}`;

    // JSON-LD Schema for Location Page
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": `${pageUrl}/#breadcrumb`,
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.packershub.in/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": `Packers and Movers in ${city}`,
                        "item": pageUrl
                    }
                ]
            },
            {
                "@type": "LocalBusiness",
                "@id": `${pageUrl}/#localbusiness`,
                "name": `PackersHub - Packers and Movers in ${city}`,
                "image": "https://www.packershub.in/logo.png",
                "url": pageUrl,
                "telephone": siteSettings?.contactInfo?.phone || "+917730912913",
                "priceRange": "₹₹",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": city,
                    "addressRegion": "Andhra Pradesh", // Can be dynamic if you have state data
                    "addressCountry": "IN"
                },
                "areaServed": {
                    "@type": "City",
                    "name": city
                },
                "description": content.metaDescription
            },
            {
                "@type": "ProfessionalService",
                "name": `Packers and Movers in ${city}`,
                "description": content.metaDescription,
                "url": pageUrl,
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": city,
                    "addressRegion": "Andhra Pradesh",
                    "addressCountry": "IN"
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <main className={styles.page}>
                <Navigation />

                <section className={styles.hero}>
                    <div className={styles.heroBackground}></div>
                    <div className={styles.heroContent}>
                        <div className={styles.container}>
                            <div className={styles.breadcrumbs}>
                                <Link href="/">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M2 6L8 2l6 4v7a1 1 0 01-1 1H9v-5H7v5H3a1 1 0 01-1-1V6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Home
                                </Link>
                                <span>›</span>
                                <span className={styles.currentPage}>{city}</span>
                            </div>
                            <span className={styles.tagline}>OUR LOCATIONS</span>
                            <h1 className={styles.title}>
                                Packers and Movers in <span className={styles.highlight}>{city}</span>
                            </h1>
                            <p className={styles.subtitle}>
                                Your trusted partner for safe, reliable, and affordable relocation services in {city}.
                            </p>
                        </div>
                    </div>
                </section>


                <section className={styles.detailsSection}>
                    <div className={styles.container}>
                        <div className={styles.contentGrid}>
                            <div className={styles.textContent}>
                                <h2>{content.aboutTitle}</h2>
                                {content.aboutText.map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}

                                <h3>{content.uniqueTitle}</h3>
                                <ul className={styles.serviceList}>
                                    {content.uniquePoints.map((point, idx) => (
                                        <li key={idx}><strong>•</strong> {point}</li>
                                    ))}
                                </ul>

                                <h3>{content.servicesTitle}</h3>
                                <ul className={styles.serviceList}>
                                    {content.services.map((service, idx) => (
                                        <li key={idx}><strong>{service.title}</strong> – {service.description}</li>
                                    ))}
                                </ul>

                                <h3>{content.trustTitle}</h3>
                                <p>{content.trustText}</p>

                                <h3>{content.promiseTitle}</h3>
                                <ul className={styles.serviceList}>
                                    {content.promisePoints.map((point, idx) => (
                                        <li key={idx}><strong>•</strong> {point}</li>
                                    ))}
                                </ul>

                                <div className={styles.chargesCard}>
                                    <h3>Packers and Movers Charges in {city}</h3>
                                    <p>Charges depend on distance, quantity of goods, and service type. We offer affordable pricing with clear estimates and no hidden costs. Contact us or fill out the form today to get a free quote.</p>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <a href="tel:+917730912913" className={styles.quoteBtn}>Get a Free Quote</a>
                                    </div>
                                </div>

                                <p className={styles.ctaText} style={{ marginTop: '2rem' }}>
                                    Ready to Move in {city}? Let&apos;s Make It Simple.
                                    <br />
                                    Call or WhatsApp us to get started with a clear and honest estimate.
                                </p>
                            </div>

                            <aside className={styles.sidebar}>
                                <div className={styles.sidebarCard}>
                                    <h4>Why Work With Us?</h4>
                                    <ul className={styles.benefitList}>
                                        <li>
                                            <span className={styles.checkIcon}>✓</span>
                                            <div>
                                                <strong>Verified Packers</strong>
                                                <p>Background-checked professional team.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <span className={styles.checkIcon}>✓</span>
                                            <div>
                                                <strong>Safe Packaging</strong>
                                                <p>7-layer bubble wrap & corrugated sheets.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <span className={styles.checkIcon}>✓</span>
                                            <div>
                                                <strong>Real-time Tracking</strong>
                                                <p>Stay updated on your shipment status.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <span className={styles.checkIcon}>✓</span>
                                            <div>
                                                <strong>Insured Shifting</strong>
                                                <p>Full transit insurance for peace of mind.</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="tel:+917730912913" className={styles.contactBtn}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                                        </svg>
                                        Call for Instant Quote
                                    </a>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                <WhyChooseFlow city={city} />

                <Testimonials />

                <FAQ faqs={combinedFaqs} />

                <Services services={services} locations={siteSettings?.serviceLocations} />

                <BlogPosts posts={blogPosts} />

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
