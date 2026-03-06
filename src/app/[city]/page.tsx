import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ReadyToMove from '@/components/ReadyToMove';
import WhyChooseFlow from '@/components/WhyChooseFlow';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Services from '@/components/Services';
import BlogPosts from '@/components/BlogPosts';
import { getSiteSettings, getServices, getBlogPosts, getFAQs } from '@/lib/sanity-queries';
import styles from './LocationPage.module.css';
import Link from 'next/link';

interface Props {
    params: Promise<{ city: string }>;
}

// Function to format city name (e.g., nellore -> Nellore)
const formatCity = (city: string) => city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city: cityParam } = await params;
    const city = formatCity(cityParam);
    return {
        title: `Best Packers and Movers in ${city} | PackersHub`,
        description: `Looking for safe and reliable ${city} packers and movers? We provide trusted packers and movers in ${city} for home and office relocations at affordable prices.`,
        alternates: {
            canonical: `https://www.packershub.in/${cityParam.toLowerCase()}`,
        },
    };
}

// Pre-generate paths for common cities (optional but good for performance)
export async function generateStaticParams() {
    return [
        { city: 'nellore' },
        { city: 'tirupati' },
        { city: 'bangalore' },
        { city: 'chennai' },
        { city: 'hyderabad' },
        { city: 'vijayawada' },
        { city: 'visakhapatnam' },
        { city: 'coimbatore' },
        { city: 'kochi' },
        { city: 'mysuru' },
        { city: 'madurai' },
        { city: 'hubballi' },
        { city: 'warangal' },
        { city: 'salem' },
        { city: 'thiruvananthapuram' },
        { city: 'thrissur' },
        { city: 'karimnagar' },
        { city: 'mangalore' },
        { city: 'guntur' },
        { city: 'kakinada' },
        { city: 'ongole' },
    ];
}

export default async function LocationPage({ params }: Props) {
    const { city: cityParam } = await params;
    const city = formatCity(cityParam);
    const [siteSettings, services, blogPosts, faqs] = await Promise.all([
        getSiteSettings(),
        getServices(),
        getBlogPosts(3),
        getFAQs()
    ]);

    return (
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

            <div style={{ marginTop: '2.5rem', marginBottom: '0', position: 'relative', zIndex: 10 }}>
                <ReadyToMove />
            </div>

            <section className={styles.detailsSection}>
                <div className={styles.container}>
                    <div className={styles.contentGrid}>
                        <div className={styles.textContent}>
                            <h2>Looking for safe and reliable {city} packers and movers?</h2>
                            <p>
                                We provide trusted packers and movers in {city} for home and office relocations. Our team understands how important your belongings are, and we handle every item with care. If you are searching for packers and movers near me, we are here to give you quick and professional service at affordable prices.
                            </p>
                            <p>
                                We are known as the Best packers and movers in {city} because of our safe packing, timely delivery, and friendly support. Our Household shifting services {city} are designed to make your move simple and stress-free. We also handle Office Shiftings {city} with proper planning to avoid business interruption. When you choose packers and movers {city}, you choose safety and peace of mind.
                            </p>

                            <h3>Our Services</h3>
                            <ul className={styles.serviceList}>
                                <li><strong>House Shifting</strong> – Safe packing and careful transport of household items.</li>
                                <li><strong>Car Shifting</strong> – Secure vehicle transport with proper protection.</li>
                                <li><strong>Bike Shifting</strong> – Safe two-wheeler moving without damage.</li>
                                <li><strong>Commercial Goods</strong> – Office items, machinery, and business materials shifting.</li>
                                <li><strong>Packing and Unpacking</strong> – Quality materials used for safe packing.</li>
                                <li><strong>Loading and Unloading</strong> – Skilled staff for damage-free handling.</li>
                            </ul>

                            <p className={styles.ctaText}>
                                Get your personalized quote today! Contact us or fill out the form for a fast, free estimate tailored to your moving needs.
                            </p>

                            <div className={styles.chargesCard}>
                                <h3>Packers and Movers Charges in {city}</h3>
                                <p>Charges depend on distance, quantity of goods, and service type. We offer affordable pricing with clear estimates and no hidden costs. Contact us or fill out the form today to get a free quote.</p>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <a href="tel:+917730912913" className={styles.quoteBtn}>Get a Free Quote</a>
                                </div>
                            </div>
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

            <FAQ faqs={faqs} />

            <Services services={services} locations={siteSettings?.serviceLocations} />

            <BlogPosts posts={blogPosts} />

            <Footer
                phone={siteSettings?.contactInfo?.phone}
                email={siteSettings?.contactInfo?.email}
                address={siteSettings?.contactInfo?.address}
                services={services}
            />
        </main>
    );
}
