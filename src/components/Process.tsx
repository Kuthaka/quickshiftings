'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import styles from './Process.module.css';

// SVG Icons
const PhoneIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const ClipboardIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="M9 14l2 2 4-4" />
    </svg>
);

const TruckLoadIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
);

const CheckCircleIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);

const steps = [
    {
        number: '01',
        icon: PhoneIcon,
        title: 'Get in Touch',
        description: 'Reach out to us through a quick call or WhatsApp. We\'re here to understand your needs and assist you promptly.',
        highlight: 'Instant Response'
    },
    {
        number: '02',
        icon: ClipboardIcon,
        title: 'Inspect & Proposal',
        description: 'Our team will inspect your items and provide a customized proposal with clear details, ensuring transparency.',
        highlight: 'Free Assessment'
    },
    {
        number: '03',
        icon: TruckLoadIcon,
        title: 'Pack & Load',
        description: 'We carefully pack and load your belongings using safe handling techniques, ensuring a smooth start.',
        highlight: 'Professional Care'
    },
    {
        number: '04',
        icon: CheckCircleIcon,
        title: 'Deliver & Unload',
        description: 'Enjoy a stress-free experience as we deliver and unload your items at the destination with utmost care.',
        highlight: 'Safe Delivery'
    }
];

const Process = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
    const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <section id="process" className={styles.process}>
            <div className={styles.container}>
                <div
                    ref={headerRef}
                    className={`${styles.header} ${headerVisible ? styles.visible : ''}`}
                >
                    <span className={styles.sectionLabel}>How We Work</span>
                    <h2 className={styles.title}>
                        Simple & <span>Effective Process</span>
                    </h2>
                    <p className={styles.subtitle}>
                        We follow a streamlined approach to ensure your move is smooth,
                        transparent, and hassle-free from start to finish.
                    </p>
                </div>

                <div
                    ref={stepsRef}
                    className={`${styles.stepsContainer} ${stepsVisible ? styles.visible : ''}`}
                >
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className={styles.step}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.stepCard}>
                                <div className={styles.stepHeader}>
                                    <div className={styles.stepIconWrapper}>
                                        <step.icon />
                                    </div>
                                    
                                    <div className={styles.stepBody}>
                                        <span className={styles.stepHighlight}>{step.highlight}</span>
                                        <h3 className={styles.stepTitle}>{step.title}</h3>
                                        <p className={styles.stepDesc}>{step.description}</p>
                                    </div>
                                    
                                    <div className={styles.stepNumber}>{step.number}</div>
                                </div>
                            </div>
                            
                            {index < steps.length - 1 && (
                                <div className={styles.connector}>
                                    <div className={styles.connectorLine}></div>
                                    <div className={styles.connectorDot}></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
