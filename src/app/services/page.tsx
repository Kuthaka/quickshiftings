import { getServices, getSiteSettings } from '@/lib/sanity-queries'
import { urlFor } from '@/lib/sanity'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import styles from './ServicesPage.module.css'
import { servicesData } from '@/lib/servicesData'

// SVG Icons
const HomeIcon = () => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>);
const CarIcon = () => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" /><circle cx="6.5" cy="16.5" r="2.5" /><circle cx="16.5" cy="16.5" r="2.5" /></svg>);
const BikeIcon = () => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18.5" cy="17.5" r="3.5" /><circle cx="5.5" cy="17.5" r="3.5" /><circle cx="15" cy="5" r="1" /><path d="M12 17.5V14l-3-3 4-3 2 3h2" /></svg>);
const BuildingIcon = () => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /></svg>);
const PackageIcon = () => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.5 9.4l-9-5.19" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>);
const LoadingIcon = () => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4" /><path d="M12 18v4" /><path d="M4.93 4.93l2.83 2.83" /><path d="M16.24 16.24l2.83 2.83" /><path d="M2 12h4" /><path d="M18 12h4" /><path d="M4.93 19.07l2.83-2.83" /><path d="M16.24 7.76l2.83-2.83" /></svg>);

const iconMap: Record<string, () => React.JSX.Element> = {
    'home': HomeIcon,
    'car': CarIcon,
    'bike': BikeIcon,
    'building': BuildingIcon,
    'package': PackageIcon,
    'loading': LoadingIcon,
};

// Fallback services if Sanity fails
const fallbackServices = [
    {
        icon: HomeIcon,
        title: 'House Shifting',
        description: 'Stress-free relocation with careful handling of your belongings.',
        features: ['Safe Packing', 'Timely Delivery'],
        image: '/services/house-shifting.png'
    },
    {
        icon: CarIcon,
        title: 'Car Transport',
        description: 'Specialized vehicle transportation to any location safely.',
        features: ['Door-to-Door', 'Insured Transit'],
        image: '/services/car-shifting.png'
    },
    {
        icon: BuildingIcon,
        title: 'Office Move',
        description: 'Efficient commercial relocation with minimal downtime.',
        features: ['Office Setup', 'Industrial Moving'],
        image: '/services/commercial-goods.png'
    }
];

export default async function ServicesPage() {
    const sanityServices = await getServices();
    const siteSettings = await getSiteSettings();

    const displayServices = sanityServices && sanityServices.length > 0
        ? sanityServices.map(service => ({
            icon: iconMap[service.icon || 'package'] || PackageIcon,
            title: service.title,
            description: service.description,
            features: service.features || [],
            image: service.image ? urlFor(service.image).width(400).height(300).url() : '/services/default.png'
        }))
        : fallbackServices;

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
                            <span className={styles.currentPage}>Services</span>
                        </div>
                        <span className={styles.tagline}>WHAT WE DO BEST</span>
                        <h1 className={styles.title}>
                            Our Premium <span className={styles.highlight}>Services</span>
                        </h1>
                        <p className={styles.subtitle}>
                            {servicesData.intro.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Summary Grid */}
            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {displayServices.map((service, index) => (
                            <div key={service.title} className={styles.card}>
                                <div className={styles.cardImageWrapper}>
                                    <img src={service.image} alt={service.title} className={styles.cardImage} />
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={styles.cardHeader}>
                                        <div className={styles.iconWrapper}><service.icon /></div>
                                        <h3 className={styles.cardTitle}>{service.title}</h3>
                                    </div>
                                    <p className={styles.cardDesc}>{service.description}</p>
                                    <ul className={styles.features}>
                                        {service.features.slice(0, 3).map((feature: string) => (
                                            <li key={feature}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href={`https://wa.me/917730912913?text=Hi! I'm interested in your ${service.title} service.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.cardCta}
                                    >
                                        Get Quote
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table Section */}
            <section className={styles.detailedSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>{servicesData.comparison.title}</h2>
                    </div>
                    <div className={styles.tableWrapper}>
                        <table className={styles.comparisonTable}>
                            <thead>
                                <tr>
                                    {servicesData.comparison.columns.map((col, idx) => (
                                        <th key={idx}>{col}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {servicesData.comparison.rows.map((row, idx) => (
                                    <tr key={idx}>
                                        <td><strong>{row.aspect}</strong></td>
                                        <td>{row.regular}</td>
                                        <td><strong>{row.emergency}</strong></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.sectionCtaWrapper}>
                        <a
                            href="https://wa.me/917730912913?text=Hi! I'm interested in getting a quote for moving services."
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.sectionCta}
                        >
                            Get Quote
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* Quick Shifting Services */}
            <section className={styles.detailedSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>{servicesData.quickShifting.title}</h2>
                        <p className={styles.sectionSubtitle}>{servicesData.quickShifting.subtitle}</p>
                    </div>

                    <div className={styles.featureGrid}>
                        {servicesData.quickShifting.types.map((type, idx) => (
                            <div key={idx} className={styles.featureCard}>
                                <h3 className={styles.featureTitle}>{type.title}</h3>
                                <ul className={styles.featureList}>
                                    {(type.idealFor || type.features || []).map((item, i) => (
                                        <li key={i}>
                                            <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className={styles.sectionCtaWrapper}>
                        <a
                            href="https://wa.me/917730912913?text=Hi! I am interested in Quick Shifting services."
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.sectionCta}
                        >
                            Get Quote
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* Home Shifting Process */}
            <section className={styles.detailedSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>{servicesData.homeShifting.title}</h2>
                        <p className={styles.sectionSubtitle}>{servicesData.homeShifting.subtitle}</p>
                    </div>
                    <div className={styles.processSteps}>
                        {servicesData.homeShifting.process.map((step, idx) => (
                            <div key={idx} className={styles.step}>
                                <div className={styles.stepNumber}>{idx + 1}</div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.sectionCtaWrapper}>
                        <a
                            href="https://wa.me/917730912913?text=Hi! I'm interested in Home Shifting services."
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.sectionCta}
                        >
                            Get Quote
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* Packing Techniques - 2 Col + Text */}
            <section className={styles.detailedSection} style={{ background: '#f8fafc' }}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>{servicesData.packing.title}</h2>
                        <p className={styles.sectionSubtitle}>{servicesData.packing.description}</p>
                    </div>
                    <div className={styles.featureGrid}>
                        {servicesData.packing.techniques.map((tech, idx) => (
                            <div key={idx} className={styles.featureCard} style={{ background: 'white' }}>
                                <h3 className={styles.featureTitle}>{tech.title}</h3>
                                <p className={styles.sectionSubtitle}>{tech.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.sectionCtaWrapper}>
                        <a
                            href="https://wa.me/917730912913?text=Hi! I want to know more about your Packing services."
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.sectionCta}
                        >
                            Get Quote
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* Cities Grid */}
            <section className={styles.detailedSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Serving South India</h2>
                        <p className={styles.sectionSubtitle}>Expert relocation services across major cities</p>
                    </div>
                    <div className={styles.cityGrid}>
                        {servicesData.cities.map((city, idx) => (
                            <div key={idx} className={styles.cityCard}>
                                <div className={styles.cityName}>
                                    {city.name}
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                                        <circle cx="12" cy="9" r="2.5" />
                                    </svg>
                                </div>
                                <p className={styles.cityDesc}>{city.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.sectionCtaWrapper}>
                        <a
                            href="https://wa.me/917730912913?text=Hi! I'm looking for movers in my city."
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.sectionCta}
                        >
                            Get Quote
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <Footer
                phone={siteSettings?.contactInfo?.phone}
                email={siteSettings?.contactInfo?.email}
                address={siteSettings?.contactInfo?.address}
                services={sanityServices}
            />
        </main>
    )
}
