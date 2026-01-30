'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';
import ContactModal from './ContactModal';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        handleScroll();
        // Check again after a slight delay to catch hash scrolling
        const timer = setTimeout(handleScroll, 100);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, [pathname]);

    type NavLink = {
        href: string;
        label: string;
        subItems?: { href: string; label: string }[];
    };

    const navLinks: NavLink[] = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '#process', label: 'How We Work' },
        { href: '/blog', label: 'Blog' },
        { href: '#contact', label: 'Contact' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setIsMobileMenuOpen(false);

        if (href === '#contact') {
            e.preventDefault();
            setIsContactModalOpen(true);
            return;
        }

        if (href.startsWith('#') && pathname === '/') {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const toggleMobileDropdown = (label: string) => {
        setActiveMobileDropdown(activeMobileDropdown === label ? null : label);
    };

    return (
        <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link
                    href="/"
                    className={styles.logo}
                    onClick={(e) => handleNavClick(e, '/')}
                >
                    <span className={styles.logoText}>PACKERS<span>HUB</span></span>
                    <Image src="/logo.png" alt="PackersHub" width={50} height={50} className={styles.logoImage} />
                </Link>

                <div className={styles.navLinks}>
                    {navLinks.map((link) => (
                        link.subItems ? (
                            <div key={link.href} className={styles.dropdownContainer}>
                                <Link
                                    href={link.href}
                                    className={`${styles.navLink} ${styles.hasDropdown}`}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                >
                                    {link.label}
                                    <span style={{ fontSize: '0.6em', marginLeft: '4px' }}>▼</span>
                                </Link>
                                <div className={styles.dropdownMenu}>
                                    {link.subItems.map((subItem) => (
                                        <Link
                                            key={subItem.label}
                                            href={subItem.href}
                                            className={styles.dropdownItem}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {subItem.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={link.href}
                                href={link.href.startsWith('#') ? `/${link.href}` : link.href}
                                className={styles.navLink}
                                onClick={(e) => handleNavClick(e, link.href)}
                            >
                                {link.label}
                            </Link>
                        )
                    ))}
                </div>

                <a href="tel:+917730912913" className={`btn btn-primary ${styles.ctaBtn}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                    </svg>
                    Call Now
                </a>

                <div className={styles.mobileNavIcons}>
                    <a href="tel:+917730912913" className={styles.mobilePhoneIcon} aria-label="Call Now">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
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
            </div>

            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                {navLinks.map((link) => (
                    link.subItems ? (
                        <div key={link.href} className={styles.mobileLinkWrapper}>
                            <div
                                className={styles.mobileLink}
                                onClick={() => toggleMobileDropdown(link.label)}
                                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
                            >
                                {link.label}
                                <span style={{ fontSize: '0.7em' }}>{activeMobileDropdown === link.label ? '▲' : '▼'}</span>
                            </div>
                            <div className={`${styles.mobileDropdown} ${activeMobileDropdown === link.label ? styles.open : ''}`}>
                                {link.subItems.map((subItem) => (
                                    <Link
                                        key={subItem.label}
                                        href={subItem.href}
                                        className={styles.mobileDropdownItem}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {subItem.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <Link
                            key={link.href}
                            href={link.href.startsWith('#') ? `/${link.href}` : link.href}
                            className={styles.mobileLink}
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            {link.label}
                        </Link>
                    )
                ))}
                <a href="tel:+917730912913" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                    Call Now
                </a>
            </div>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </nav>
    );
};

export default Navigation;