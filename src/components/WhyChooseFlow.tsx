'use client';

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import styles from './WhyChooseFlow.module.css';

interface FlowStepProps {
    number: string;
    title: string;
    description: string;
    index: number;
}

const FlowStep = ({ number, title, description, index }: FlowStepProps) => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, once: true });
    const isEven = index % 2 === 0;

    return (
        <div
            ref={ref}
            className={`${styles.stepRow} ${isEven ? styles.left : styles.right} ${isVisible ? styles.visible : ''}`}
        >
            {isEven ? (
                <>
                    <div className={styles.cardWrapper}>
                        <div className={styles.card}>
                            <span className={styles.cardNumber}>{number}</span>
                            <h3 className={styles.stepTitle}>{title}</h3>
                            <div className={styles.description}>
                                <p>{description}</p>
                            </div>
                            <div className={styles.marker}></div>
                        </div>
                    </div>
                    <div className={styles.empty}></div>
                </>
            ) : (
                <>
                    <div className={styles.empty}></div>
                    <div className={styles.cardWrapper}>
                        <div className={styles.card}>
                            <span className={styles.cardNumber}>{number}</span>
                            <h3 className={styles.stepTitle}>{title}</h3>
                            <div className={styles.description}>
                                <p>{description}</p>
                            </div>
                            <div className={styles.marker}></div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

const WhyChooseFlow = ({ city }: { city: string }) => {
    const steps = [
        {
            number: '01',
            title: 'Experienced Team',
            description: 'Our trained professionals handle your belongings with complete care and attention. From packing to unloading, every step is managed safely and smoothly.'
        },
        {
            number: '02',
            title: 'Affordable Pricing',
            description: 'We provide budget-friendly moving solutions with clear and honest pricing. No hidden charges — you get transparent quotations every time.'
        },
        {
            number: '03',
            title: 'Timely Delivery',
            description: 'We follow a planned process to ensure on-time pickup and delivery. Quick, efficient, and hassle-free relocation services.'
        },
        {
            number: '04',
            title: 'Safe & Secure Moving',
            description: 'We use high-quality packing materials and secure transport vehicles. Your goods are protected to ensure damage-free shifting.'
        },
        {
            number: '05',
            title: '24/7 Customer Support',
            description: 'Our support team is always available to assist you at every step. We stay connected before, during, and after your move.'
        }
    ];

    return (
        <section className={styles.flowSection}>
            <div className={styles.container}>
                <h2 className={styles.mainTitle}>Why Choose PackersHub in {city}?</h2>
                <div className={styles.timelineContainer}>
                    <div className={styles.centralLine}></div>
                    <div className={styles.flowList}>
                        {steps.map((step, index) => (
                            <FlowStep
                                key={index}
                                index={index}
                                {...step}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseFlow;
