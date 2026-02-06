'use client';

import React from 'react';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { urlFor } from '@/lib/sanity';
import type { Service } from '@/lib/sanity';
import styles from './Services.module.css';

// SVG Icons
const HomeIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
);

const CarIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
        <circle cx="6.5" cy="16.5" r="2.5" />
        <circle cx="16.5" cy="16.5" r="2.5" />
    </svg>
);

const BikeIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18.5" cy="17.5" r="3.5" />
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="15" cy="5" r="1" />
        <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </svg>
);

const BuildingIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" />
        <path d="M16 6h.01" />
        <path d="M12 6h.01" />
        <path d="M12 10h.01" />
        <path d="M12 14h.01" />
        <path d="M16 10h.01" />
        <path d="M16 14h.01" />
        <path d="M8 10h.01" />
        <path d="M8 14h.01" />
    </svg>
);

const PackageIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16.5 9.4l-9-5.19" />
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
);

const LoadingIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
    </svg>
);

const services = [
    {
        icon: HomeIcon,
        title: 'House Shifting',
        description: 'We ensure a stress-free and efficient relocation of your home, carefully handling all your belongings with utmost care and professionalism.',
        features: ['Safe Packing', 'Careful Handling', 'Timely Delivery'],
        image: '/services/house-shifting.png'
    },
    {
        icon: CarIcon,
        title: 'Car Shifting',
        description: 'Your car is precious. Our specialized vehicle transportation service guarantees safe and timely delivery to your desired location.',
        features: ['Door-to-Door', 'Insured Transit', 'GPS Tracking'],
        image: '/services/car-shifting.png'
    },
    {
        icon: BikeIcon,
        title: 'Bike Shifting',
        description: 'We provide secure and reliable bike shifting solutions, ensuring your two-wheeler reaches its destination in perfect condition.',
        features: ['Secure Loading', 'Protected Transport', 'On-time Delivery'],
        image: '/services/bike-shifting.png'
    },
    {
        icon: BuildingIcon,
        title: 'Commercial Goods',
        description: 'From office equipment to industrial goods, we handle all types of commercial relocations with precision and on-time execution.',
        features: ['Office Setup', 'Industrial Moving', 'Warehouse Services'],
        image: '/services/commercial-goods.png'
    },
    {
        icon: PackageIcon,
        title: 'Packing & Unpacking',
        description: 'Our expert team ensures safe and organized packing, along with hassle-free unpacking at your new location, saving you time and effort.',
        features: ['Quality Materials', 'Expert Packing', 'Organized Setup'],
        image: '/services/packing-unpacking.png'
    },
    {
        icon: LoadingIcon,
        title: 'Loading & Unloading',
        description: 'With the right tools and techniques, we manage the loading and unloading of your items safely, minimizing any risk of damage.',
        features: ['Professional Crew', 'Right Equipment', 'Zero Damage'],
        image: '/services/loading-unloading.png'
    }
];

interface ServicesProps {
    services?: Service[];
    locations?: string[];
}

const Services = ({ services: sanityServices, locations }: ServicesProps) => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
    const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

    // Icon mapping
    const iconMap: Record<string, () => React.JSX.Element> = {
        'home': HomeIcon,
        'car': CarIcon,
        'bike': BikeIcon,
        'building': BuildingIcon,
        'package': PackageIcon,
        'loading': LoadingIcon,
    };

    // Use Sanity services if available, otherwise fallback to hardcoded
    const displayServices = sanityServices && sanityServices.length > 0
        ? sanityServices.map(service => ({
            icon: iconMap[service.icon || 'package'] || PackageIcon,
            title: service.title,
            description: service.description,
            features: service.features || [],
            image: service.image ? urlFor(service.image).width(400).height(300).url() : '/services/default.png'
        }))
        : services;

    // Locations - ensure extra cities are always included
    const extraCities = ['Coimbatore', 'Kochi', 'Mysuru', 'Madurai', 'Hubballi'];
    const cityLocations = locations && locations.length > 0
        ? [...new Set([...locations, ...extraCities])]
        : ['Nellore', 'Tirupati', 'Hyderabad', 'Chennai', 'Bangalore', 'Vijayawada', 'Visakhapatnam', 'Guntur', 'Ongole', 'Coimbatore', 'Kochi', 'Mysuru', 'Madurai', 'Hubballi'];

    return (
        <section id="services" className={styles.services}>
            <div className={styles.container}>
                <div
                    ref={headerRef}
                    className={`${styles.header} ${headerVisible ? styles.visible : ''}`}
                >
                    <span className={styles.sectionLabel}>Our Services</span>
                    <h2 className={styles.title}>
                        Comprehensive Moving <span>Solutions</span>
                    </h2>
                    <p className={styles.subtitle}>
                        From residential moves to commercial relocations, we offer a full range of
                        services to make your transition seamless.
                    </p>
                </div>

                <div
                    ref={gridRef}
                    className={`${styles.grid} ${gridVisible ? styles.visible : ''}`}
                >
                    {displayServices.map((service, index) => (
                        <div
                            key={service.title}
                            className={styles.card}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.cardImageWrapper}>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className={styles.cardImage}
                                />
                            </div>

                            <div className={styles.cardContent}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconWrapper}>
                                        <service.icon />
                                    </div>
                                    <h3 className={styles.cardTitle}>{service.title}</h3>
                                </div>

                                <p className={styles.cardDesc}>{service.description}</p>

                                <ul className={styles.features}>
                                    {service.features.map((feature) => (
                                        <li key={feature}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--secondary-blue)">
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

                {/* Service Locations - After Cards */}
                {cityLocations.length > 0 && (
                    <div className={styles.locationsSection}>
                        <div className={styles.locationsContent}>
                            <h3 className={styles.locationsTitle}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                                We Serve Across Multiple Cities
                            </h3>
                            <div className={styles.locationsList}>
                                {cityLocations.map((location, index) => (
                                    <span key={index} className={styles.locationBadge}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                        </svg>
                                        {location}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                <div className={styles.viewAllWrapper}>
                    <Link href="/services" className={styles.viewAllBtn}>
                        View All Services
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Background decoration */}
            <div className={styles.bgDecor}></div>
        </section>
    );
};

export default Services;
