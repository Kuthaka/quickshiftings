'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './ContactModal.module.css';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    const [mounted, setMounted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        fromFloor: 'Ground floor',
        toFloor: 'Ground floor',
        from: '',
        to: '',
        message: ''
    });

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !mounted) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const text = `Hi, I would like to enquire about moving services.%0A%0A*Details:*%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Floor (From):* ${formData.fromFloor}%0A*Floor (To):* ${formData.toFloor}%0A*Moving From:* ${formData.from}%0A*Moving To:* ${formData.to}%0A*Message:* ${formData.message}`;

        window.open(`https://wa.me/917730912913?text=${text}`, '_blank');
        onClose();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return createPortal(
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>&times;</button>

                <div className={styles.modalHeader}>
                    <h2 className={styles.title}>Get a Free Quote</h2>
                    <p className={styles.subtitle}>Fill in the details and we will get back to you instantly via WhatsApp!</p>
                </div>

                <form className={styles.modalBody} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className={styles.input}
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className={styles.input}
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="fromFloor">Moving From (Floor)</label>
                            <select
                                id="fromFloor"
                                name="fromFloor"
                                className={styles.select}
                                value={formData.fromFloor}
                                onChange={handleChange}
                            >
                                <option value="Ground floor">Ground floor</option>
                                <option value="1st floor">1st floor</option>
                                <option value="2nd floor">2nd floor</option>
                                <option value="3rd floor">3rd floor</option>
                                <option value="4th floor">4th floor</option>
                                <option value="5th floor">5th floor</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="toFloor">Moving To (Floor)</label>
                            <select
                                id="toFloor"
                                name="toFloor"
                                className={styles.select}
                                value={formData.toFloor}
                                onChange={handleChange}
                            >
                                <option value="Ground floor">Ground floor</option>
                                <option value="1st floor">1st floor</option>
                                <option value="2nd floor">2nd floor</option>
                                <option value="3rd floor">3rd floor</option>
                                <option value="4th floor">4th floor</option>
                                <option value="5th floor">5th floor</option>
                            </select>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="from">Moving From</label>
                            <input
                                type="text"
                                id="from"
                                name="from"
                                required
                                className={styles.input}
                                value={formData.from}
                                onChange={handleChange}
                                placeholder="City/Area"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="to">Moving To</label>
                            <input
                                type="text"
                                id="to"
                                name="to"
                                required
                                className={styles.input}
                                value={formData.to}
                                onChange={handleChange}
                                placeholder="City/Area"
                            />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="message">Any Specific Requirements? (Optional)</label>
                        <textarea
                            id="message"
                            name="message"
                            className={styles.textarea}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="e.g. 2 BHK, 3rd floor, lift available..."
                        />
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                        <svg className={styles.btnIcon} viewBox="0 0 24 24">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.654-.698c1.025.558 1.987.775 3.106.775 3.183 0 5.775-2.586 5.775-5.766s-2.592-5.766-5.775-5.766zm0 10.424c-.958 0-1.85-.305-2.616-.76l-.608-.415-1.574.417.411-1.572-.403-.637c-.475-.765-.776-1.656-.776-2.633 0-2.64 2.138-4.782 4.776-4.782 2.645 0 4.793 2.142 4.793 4.782s-2.148 4.782-4.793 4.782zm2.937-3.924c-.161-.08-.946-.467-1.092-.52-.146-.054-.252-.08-.358.08-.106.16-.41.52-.503.626-.093.107-.186.121-.347.04-.161-.08-.682-.25-1.298-.8-.475-.423-.795-.945-.888-1.106-.093-.16-.01-.247.07-.327.072-.072.161-.187.241-.28.08-.094.106-.16.159-.267.053-.107.027-.2-.013-.28-.04-.08-.358-.863-.491-1.182-.129-.311-.26-.268-.358-.273-.093-.005-.199-.005-.306-.005-.106 0-.28.04-.426.199-.146.16-1.164.558-1.164 1.34 0 .782 1.205 2.147 1.373 2.373.167.226 2.371 3.633 5.746 5.093.802.348 1.428.375 1.918.228.546-.164 1.636-.669 1.867-1.315.231-.646.231-1.2.161-1.315-.069-.115-.252-.187-.413-.267z" />
                        </svg>
                        Send via WhatsApp
                    </button>
                </form>
            </div>
        </div>,
        document.body
    );
};

export default ContactModal;
