'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import type { FAQ as FAQType } from '@/lib/sanity';
import styles from './FAQ.module.css';

interface FAQProps {
    faqs?: FAQType[];
}

const FAQ = ({ faqs }: FAQProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
    const { ref: listRef, isVisible: listVisible } = useScrollAnimation({ threshold: 0.1 });

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    if (!faqs || faqs.length === 0) return null;

    return (
        <section className={styles.faq}>
            <div className={styles.container}>
                <div
                    ref={headerRef}
                    className={`${styles.header} ${headerVisible ? styles.visible : ''}`}
                >
                    <span className={styles.sectionLabel}>FAQ</span>
                    <h2 className={styles.title}>
                        Frequently Asked <span>Questions</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Got questions? We've got answers. Find everything you need to know about our moving services.
                    </p>
                </div>

                <div
                    ref={listRef}
                    className={`${styles.faqList} ${listVisible ? styles.visible : ''}`}
                >
                    {faqs.map((faq, index) => (
                        <div
                            key={faq._id}
                            className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
                            style={{ transitionDelay: `${index * 0.05}s` }}
                        >
                            <button
                                className={styles.question}
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{faq.question}</span>
                                <svg
                                    className={styles.icon}
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>
                            <div className={styles.answerWrapper}>
                                <p className={styles.answer}>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
