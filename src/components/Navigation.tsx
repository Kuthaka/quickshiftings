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

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        {
            href: '/services',
            label: 'Services',
            subItems: [
                { href: '/services', label: 'House Shifting' },
                { href: '/services', label: 'Car Shifting' },
                { href: '/services', label: 'Bike Shifting' },
                { href: '/services', label: 'Commercial Goods' },
                { href: '/services', label: 'Packing & Unpacking' },
                { href: '/services', label: 'Loading & Unloading' },
            ]
        },
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
                    <span className={styles.logoText}>Quick<span>Shiftings</span></span>
                    <Image src="/logo.png" alt="Quick Shiftings" width={50} height={50} className={styles.logoImage} />
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
