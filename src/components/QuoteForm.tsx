'use client';

import { useState } from 'react';
import styles from './QuoteForm.module.css';

const QuoteForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        type: '',
        from: '',
        to: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const text = `Hi, I would like to get a quote.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Date:* ${formData.date}%0A*Type:* ${formData.type}%0A*From:* ${formData.from}%0A*To:* ${formData.to}%0A*Message:* ${formData.message}`;

        window.open(`https://wa.me/917730912913?text=${text}`, '_blank');
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    {/* Left Side Content */}
                    <div className={styles.leftContent}>
                        <span className={styles.label}>Start Your Journey</span>
                        <h2 className={styles.heading}>
                            Ready for a <span className={styles.highlight}>Seamless</span> Moving Experience?
                        </h2>
                        <p className={styles.description}>
                            Get a quick estimate for your move. We provide professional packing, safe transportation, and timely delivery across India.
                        </p>

                        <div className={styles.benefitsList}>
                            <div className={styles.benefitItem}>
                                <div className={styles.iconBox}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                </div>
                                <div className={styles.benefitContent}>
                                    <h3>Instant WhatsApp Quote</h3>
                                    <p>Get pricing details immediately directly on WhatsApp.</p>
                                </div>
                            </div>

                            <div className={styles.benefitItem}>
                                <div className={styles.iconBox}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                </div>
                                <div className={styles.benefitContent}>
                                    <h3>Safe & Secure Handling</h3>
                                    <p>Your belongings are insured and handled with extreme care.</p>
                                </div>
                            </div>

                            <div className={styles.benefitItem}>
                                <div className={styles.iconBox}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                                <div className={styles.benefitContent}>
                                    <h3>On-Time Delivery</h3>
                                    <p>We value your time and guarantee punctual service.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Form */}
                    <div className={styles.formCard}>
                        <div className={styles.formHeader}>
                            <h3 className={styles.formTitle}>Get a Free Quote</h3>
                            <p className={styles.formSubtitle}>Fill in your details below</p>
                        </div>

                        <form onSubmit={handleSubmit} className={styles.formGrid}>
                            <div className={styles.inputWrapper}>
                                <label htmlFor="name" className={styles.inputLabel}>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={styles.input}
                                    required
                                    placeholder="Full Name"
                                />
                            </div>

                            <div className={styles.inputWrapper}>
                                <label htmlFor="phone" className={styles.inputLabel}>Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={styles.input}
                                    required
                                    placeholder="Mobile Number"
                                />
                            </div>

                            <div className={`${styles.inputWrapper} ${styles.fullWidth}`}>
                                <label htmlFor="date" className={styles.inputLabel}>Moving Date</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className={styles.input}
                                    required
                                />
                            </div>

                            <div className={`${styles.inputWrapper} ${styles.fullWidth}`}>
                                <label htmlFor="type" className={styles.inputLabel}>Moving Type</label>
                                <select
                                    id="type"
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    className={styles.input}
                                    required
                                >
                                    <option value="">Select Moving Type</option>
                                    <option value="1bhk">1 BHK</option>
                                    <option value="2bhk">2 BHK</option>
                                    <option value="3bhk">3 BHK</option>
                                    <option value="villa">Villa</option>
                                    <option value="office">Office</option>
                                    <option value="car-transporting">Car Transporting</option>
                                    <option value="bike-transporting">Bike Transporting</option>
                                </select>
                            </div>

                            <div className={styles.inputWrapper}>
                                <label htmlFor="from" className={styles.inputLabel}>Moving From</label>
                                <input
                                    type="text"
                                    id="from"
                                    name="from"
                                    value={formData.from}
                                    onChange={handleChange}
                                    className={styles.input}
                                    required
                                    placeholder="City/Area"
                                />
                            </div>

                            <div className={styles.inputWrapper}>
                                <label htmlFor="to" className={styles.inputLabel}>Moving To</label>
                                <input
                                    type="text"
                                    id="to"
                                    name="to"
                                    value={formData.to}
                                    onChange={handleChange}
                                    className={styles.input}
                                    required
                                    placeholder="City/Area"
                                />
                            </div>

                            <div className={`${styles.inputWrapper} ${styles.fullWidth}`}>
                                <label htmlFor="message" className={styles.inputLabel}>Additional Details</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={styles.textarea}
                                    placeholder="Tell us about the items to verify..."
                                />
                            </div>

                            <button type="submit" className={`${styles.submitBtn} ${styles.fullWidth}`}>
                                Get Quote on WhatsApp
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2zM12.05 19.81c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.11.82.83-3.04-.19-.31c-.82-1.33-1.26-2.87-1.26-4.46 0-4.64 3.77-8.4 8.4-8.4 2.24 0 4.35.87 5.94 2.46 1.59 1.59 2.46 3.7 2.46 5.94 0 4.63-3.77 8.32-8.57 8.32zm4.58-6.26c-.25-.12-1.5-.74-1.73-.83-.23-.09-.4-.14-.58.14-.17.28-.67.83-.82.99-.15.17-.3.19-.55.07-.25-.12-1.06-.39-2.02-1.25-.76-.67-1.27-1.5-1.42-1.76-.15-.25-.02-.39.11-.51.11-.11.25-.28.37-.43.12-.14.16-.23.25-.39.08-.17.04-.32-.02-.45-.06-.13-.58-1.39-.79-1.9-.21-.51-.43-.44-.59-.45-.15-.01-.32-.01-.5-.01-.17 0-.45.06-.69.32-.23.26-.89.87-.89 2.12 0 1.25.91 2.46 1.04 2.64.12.18 1.79 2.73 4.34 3.84 2.15.93 2.58.75 3.51.66.93-.09 2.09-.85 2.38-1.67.29-.82.29-1.52.2-1.67-.08-.16-.3-.25-.55-.38z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Background Element */}
            <div className={styles.bgDecor}></div>
        </section>
    );
};

export default QuoteForm;
