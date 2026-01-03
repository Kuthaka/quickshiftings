'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Navigation.module.css';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks: Array<{href: string; label: string; external?: boolean}> = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#services', label: 'Services' },
        { href: '#process', label: 'How We Work' },
        { href: '/blog', label: 'Blog', external: true },
        { href: '#contact', label: 'Contact' },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <a href="#home" className={styles.logo} onClick={(e) => scrollToSection(e, '#home')}>
                    <span className={styles.logoText}>Quick<span>Shiftings</span></span>
                    <Image src="/logo.png" alt="Quick Shiftings" width={50} height={50} className={styles.logoImage} />
                </a>

                <div className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={styles.navLink}
                            onClick={(e) => {
                                if (!link.external) {
                                    scrollToSection(e, link.href);
                                }
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <a href="tel:+917730912913" className={`btn btn-primary ${styles.ctaBtn}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                    </svg>
                    Call Now
                </a>

                <button
                    className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.open : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className={styles.mobileLink}
                        onClick={(e) => {
                            if (!link.external) {
                                scrollToSection(e, link.href);
                            } else {
                                setIsMobileMenuOpen(false);
                            }
                        }}
                    >
                        {link.label}
                    </a>
                ))}
                <a href="tel:+917730912913" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                    Call Now
                </a>
            </div>
        </nav>
    );
};

export default Navigation;
