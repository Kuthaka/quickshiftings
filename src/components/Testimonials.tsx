'use client';

import { useEffect, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import styles from './Testimonials.module.css';

// SVG Star Icon
const StarIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

// SVG Quote Icon
const QuoteIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" opacity="0.1">
        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
    </svg>
);

const testimonials = [
    {
        id: 1,
        name: 'Priya Sharma',
        rating: 5,
        text: 'Quick Shiftings made our relocation from Hyderabad to Vizag seamless. Their attention to detail and professional handling of our belongings exceeded all expectations. Highly recommended!'
    },
    {
        id: 2,
        name: 'Rajesh Kumar',
        rating: 5,
        text: 'We\'ve used several moving companies before, but Quick Shiftings stands out. Their team was punctual, efficient, and treated our office equipment with utmost care. Will definitely use them again.'
    },
    {
        id: 3,
        name: 'Anitha Reddy',
        rating: 5,
        text: 'From packing to unpacking, everything was handled professionally. The team was friendly, quick, and nothing was damaged. Best moving experience I\'ve ever had!'
    },
    {
        id: 4,
        name: 'Venkatesh Rao',
        rating: 5,
        text: 'Quick Shiftings handled our villa move from Vijayawada to Tirupati with exceptional care. Their premium service is worth every rupee. The team went above and beyond to ensure everything was perfect.'
    },
    {
        id: 5,
        name: 'Lakshmi Devi',
        rating: 5,
        text: 'Moving from Guntur to Hyderabad was stressful, but Quick Shiftings made it seamless! Their customer service is outstanding and the entire process was smooth and professional.'
    },
    {
        id: 6,
        name: 'Srinivas Chowdary',
        rating: 5,
        text: 'We relocated our entire office from Kakinada to Amaravati with Quick Shiftings. Their systematic approach, professional team, and transparent pricing made it a hassle-free experience. Truly exceptional service!'
    },
    {
        id: 7,
        name: 'Madhavi Prasad',
        rating: 5,
        text: 'Amazing service from start to finish! The packing was done with such care and everything arrived at our new home in perfect condition. The team was courteous and professional throughout.'
    },
    {
        id: 8,
        name: 'Ramesh Babu',
        rating: 5,
        text: 'Quick Shiftings lived up to their name. Our interstate move from Chennai to Bangalore was handled flawlessly. Great communication and timely delivery. Highly satisfied with their service!'
    },
    {
        id: 9,
        name: 'Kavitha Rani',
        rating: 5,
        text: 'Professional, reliable, and affordable! The team took great care of our fragile items and furniture. No hidden charges and transparent pricing. Will definitely recommend to friends and family.'
    },
    {
        id: 10,
        name: 'Suresh Reddy',
        rating: 5,
        text: 'Exceptional service for our corporate relocation. The team managed our office move efficiently with minimal downtime. Their coordination and planning skills are impressive. Top-notch service!'
    },
    {
        id: 11,
        name: 'Deepika Murthy',
        rating: 5,
        text: 'Moving my elderly parents was a big concern, but Quick Shiftings handled everything with such patience and care. They made what could have been a stressful experience completely smooth.'
    },
    {
        id: 12,
        name: 'Anil Kumar',
        rating: 5,
        text: 'Outstanding car transportation service! My vehicle was delivered safely and on time. The driver was professional and kept me updated throughout the journey. Excellent service quality!'
    },
    {
        id: 13,
        name: 'Meera Krishnan',
        rating: 5,
        text: 'Best decision to choose Quick Shiftings for our villa relocation. They handled our antique furniture and delicate items with utmost care. Professional team with great attention to detail!'
    }
];

const Testimonials = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
    const repeatedTestimonials = [...testimonials, ...testimonials];

    const marqueeRef = useRef<HTMLDivElement>(null);
    const animationFrameRef = useRef<number | null>(null);
    const offsetRef = useRef(0);
    const widthRef = useRef(0);
    const isPausedRef = useRef(false);

    useEffect(() => {
        const track = marqueeRef.current;
        if (!track) return;

        const getSpeed = () => {
            if (typeof window === 'undefined') return 32;
            if (window.innerWidth <= 480) return 70;
            if (window.innerWidth <= 768) return 55;
            return 32;
        };

        const updateWidth = () => {
            widthRef.current = track.scrollWidth / 2;
            if (widthRef.current > 0) {
                offsetRef.current = offsetRef.current % widthRef.current;
            }
        };

        let speed = getSpeed();
        let lastTime = performance.now();

        const handleResize = () => {
            updateWidth();
            speed = getSpeed();
        };

        const resizeObserver = typeof ResizeObserver !== 'undefined'
            ? new ResizeObserver(() => updateWidth())
            : null;

        resizeObserver?.observe(track);
        window.addEventListener('resize', handleResize);

        updateWidth();
        track.style.transform = 'translateX(0)';

        const animate = (time: number) => {
            const delta = time - lastTime;
            lastTime = time;

            if (!isPausedRef.current && widthRef.current > 0) {
                offsetRef.current += (speed * delta) / 1000;
                if (offsetRef.current >= widthRef.current) {
                    offsetRef.current -= widthRef.current;
                }
                track.style.transform = `translateX(${-offsetRef.current}px)`;
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            window.removeEventListener('resize', handleResize);
            resizeObserver?.disconnect();
        };
    }, []);

    const pauseMarquee = () => {
        isPausedRef.current = true;
    };

    const resumeMarquee = () => {
        isPausedRef.current = false;
    };

    return (
        <section id="testimonials" className={styles.testimonials}>
            <div className={styles.decorativeShape1}></div>
            <div className={styles.decorativeShape2}></div>
            
            <div className={styles.container}>
                <div
                    ref={headerRef}
                    className={`${styles.header} ${headerVisible ? styles.visible : ''}`}
                >
                    <span className={styles.sectionLabel}>Client Stories</span>
                    <h2 className={styles.title}>
                        Trusted by <span>Thousands</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Don't just take our word for it. Here's what our satisfied clients
                        have to say about their moving experience with us.
                    </p>
                </div>

                <div className={styles.marqueeBlock}>
                    <div className={styles.marqueeRow}>
                        <div
                            className={styles.marqueeTrack}
                            ref={marqueeRef}
                            onMouseEnter={pauseMarquee}
                            onMouseLeave={resumeMarquee}
                            onTouchStart={pauseMarquee}
                            onTouchEnd={resumeMarquee}
                        >
                            {repeatedTestimonials.map((item, idx) => (
                                <div key={`testimonial-${idx}-${item.id}`} className={styles.testimonialCard}>
                                    <div className={styles.quoteIcon}>
                                        <QuoteIcon />
                                    </div>

                                    <div className={styles.rating}>
                                        {[...Array(item.rating)].map((_, i) => (
                                            <span key={i} className={styles.star}>
                                                <StarIcon />
                                            </span>
                                        ))}
                                    </div>

                                    <p className={styles.testimonialText}>
                                        "{item.text}"
                                    </p>

                                    <div className={styles.divider}></div>

                                    <h3 className={styles.clientName}>{item.name}</h3>
                                </div>
                            ))}
                        </div>
                        <div className={styles.marqueeFade}></div>
                    </div>
                </div>

                <div className={`${styles.ctaBox} ${headerVisible ? styles.visible : ''}`}>
                    <div className={styles.ctaContent}>
                        <h3>Ready to Move?</h3>
                        <p>Get started with a free quote today. No obligations, just honest pricing.</p>
                    </div>
                    <div className={styles.ctaButtons}>
                        <a
                            href="https://wa.me/917730912913?text=Hi! I'd like to get a quote for my move."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-whatsapp"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            WhatsApp Us
                        </a>
                        <a href="tel:+917730912913" className="btn btn-gold">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                            </svg>
                            Call Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
