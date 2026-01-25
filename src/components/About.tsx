'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import styles from './About.module.css';

// SVG Icons
const ShieldIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
    </svg>
);

const BoxIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
);

const ClockIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

const WalletIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
        <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
    </svg>
);

const features = [
    {
        icon: ShieldIcon,
        title: 'Trusted Experts',
        description: 'Your belongings are in safe hands with our skilled and experienced team, ensuring a smooth and hassle-free relocation every time.'
    },
    {
        icon: BoxIcon,
        title: 'End-to-End Solutions',
        description: 'From packing to unpacking, we provide comprehensive moving services tailored to meet your specific needs and preferences.'
    },
    {
        icon: ClockIcon,
        title: 'Timely Delivery',
        description: 'We value your time. Our efficient processes guarantee on-time delivery, no matter the distance or complexity of the move.'
    },
    {
        icon: WalletIcon,
        title: 'Affordable Pricing',
        description: 'Get top-quality moving services at competitive rates, making your relocation seamless and budget-friendly.'
    }
];

const About = () => {
    const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 });
    const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });
    const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <div
                    ref={titleRef}
                    className={`${styles.header} ${titleVisible ? styles.visible : ''}`}
                >
                    <span className={styles.sectionLabel}>About Us</span>
                    <h2 className={styles.title}>
                        Your Trusted Partner for <span>All Relocation Needs</span>
                    </h2>
                </div>

                <div className={styles.contentWrapper}>
                    <div className={styles.topSection}>
                        <div className={styles.imageWrapper}>
                            <img
                                src="/services/commercial-goods.png"
                                alt="About PackersHub"
                                className={styles.aboutImage}
                            />
                            <div className={styles.experienceBadge}>
                                <span className={styles.expNumber}>10+</span>
                                <span className={styles.expText}>Years of<br />Excellence</span>
                            </div>
                        </div>

                        <div
                            ref={contentRef}
                            className={`${styles.textContent} ${contentVisible ? styles.visible : ''}`}
                        >

                            <h3 className={styles.subHeading}>
                                We Move Your Life, Not Just Your Boxes
                            </h3>

                            <p className={styles.description}>
                                PackersHub is your reliable partner for all your relocation needs. With years of expertise,
                                we specialize in providing professional, reliable, and secure moving solutions for homes,
                                offices, and commercial establishments.
                            </p>
                            <p className={styles.description}>
                                Our commitment to customer satisfaction, attention to detail, and timely delivery have made
                                us a preferred choice. Whether you&apos;re moving locally or across cities, we ensure a
                                hassle-free experience, treating your belongings with the utmost care and precision.
                            </p>

                            <a
                                href="https://wa.me/917730912913?text=Hi! I'd like to know more about your services."
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.primaryBtn}
                            >
                                Get a Free Quote
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div
                        ref={featuresRef}
                        className={`${styles.featuresGrid} ${featuresVisible ? styles.visible : ''}`}
                    >
                        {features.map((feature, index) => (
                            <div
                                key={feature.title}
                                className={styles.featureCard}
                                style={{ transitionDelay: `${index * 0.1}s` }}
                            >
                                <div className={styles.featureIcon}>
                                    <feature.icon />
                                </div>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureDesc}>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className={styles.decorCircle}></div>
        </section>
    );
};

export default About;
