'use client';

import { trackWhatsAppClick, trackCallClick } from '@/lib/analytics';
import React from 'react';

interface TrackingLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    type: 'whatsapp' | 'call';
    children: React.ReactNode;
}

export default function TrackingLink({ type, children, ...props }: TrackingLinkProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (type === 'whatsapp') {
            trackWhatsAppClick();
        } else if (type === 'call') {
            trackCallClick();
        }
        if (props.onClick) {
            props.onClick(e);
        }
    };

    return (
        <a {...props} onClick={handleClick}>
            {children}
        </a>
    );
}
