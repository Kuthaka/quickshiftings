'use client';

import Image from 'next/image';
import styles from './Footer.module.css';

interface Service {
    title: string;
}

interface FooterProps {
    phone?: string;
    email?: string;
    address?: string;
    services?: Service[];
}

const Footer = ({ phone, email, address, services }: FooterProps) => {
    const displayPhone = phone || '+917730912913';
    const displayEmail = email || 'kpkumar123123@gmail.com';
    const displayAddress = address || 'Nellore, Andhra Pradesh, India 524004';    
    const displayServices = services || [
        { title: 'House Shifting' },
        { title: 'Car Shifting' },
        { title: 'Bike Shifting' },
        { title: 'Commercial Goods' },
        { title: 'Packing & Unpacking' },
        { title: 'Loading & Unloading' }
    ];    
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand Column */}
                    <div className={styles.brandCol}>
                        <div className={styles.logo}>
                            <Image
                                src="/logo.png"
                                alt="Quick Shiftings"
                                width={55}
                                height={55}
                                className={styles.logoImage}
                            />
                            <span className={styles.logoText}>Quick<span>Shiftings</span></span>
                        </div>
                        <p className={styles.brandDesc}>
                            Simplify your relocation with Quick Shiftings — a name you can rely on for
                            seamless and secure packing and moving services.
                        </p>
                        <div className={styles.contactInfo}>
                            <a href={`tel:${displayPhone}`} className={styles.contactItem}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                                </svg>
                                {displayPhone}
                            </a>
                            <a href={`mailto:${displayEmail}`} className={styles.contactItem}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                                {displayEmail}
                            </a>
                            <div className={styles.contactItem}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                                {displayAddress}
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.linksCol}>
                        <h3 className={styles.colTitle}>Quick Links</h3>
                        <ul className={styles.linksList}>
                            <li><a onClick={() => scrollToSection('#home')}>Home</a></li>
                            <li><a onClick={() => scrollToSection('#about')}>About Us</a></li>
                            <li><a onClick={() => scrollToSection('#services')}>Services</a></li>
                            <li><a onClick={() => scrollToSection('#process')}>How We Work</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className={styles.linksCol}>
                        <h3 className={styles.colTitle}>Our Services</h3>
                        <ul className={styles.linksList}>
                            {displayServices.map((service) => (
                                <li key={service.title}>
                                    <a onClick={() => scrollToSection('#services')}>{service.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Column */}
                    <div className={styles.ctaCol}>
                        <h3 className={styles.colTitle}>Get in Touch</h3>
                        <p className={styles.ctaDesc}>
                            Ready to make your move? Contact us for a free quote!
                        </p>
                        <div className={styles.ctaButtons}>
                            <a
                                href={`https://wa.me/${displayPhone.replace(/[^0-9]/g, '')}?text=Hi! I'd like to get a quote.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`btn btn-whatsapp ${styles.ctaBtn}`}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                WhatsApp
                            </a>
                            <a href={`tel:${displayPhone}`} className={`btn btn-call ${styles.ctaBtn}`}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                                </svg>
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© 2024 Quick Shiftings. All rights reserved.</p>
                    <p>Professional Packers & Movers in Nellore</p>
                </div>
            </div>

            {/* Floating CTAs */}
            <div className="floating-cta">
                <a
                    href={`https://wa.me/${displayPhone.replace(/[^0-9]/g, '')}?text=Hi! I need help with moving.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="floating-btn btn-whatsapp"
                    aria-label="Chat on WhatsApp"
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                </a>
                <a
                    href={`tel:${displayPhone}`}
                    className="floating-btn btn-primary"
                    aria-label="Call us"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                    </svg>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
