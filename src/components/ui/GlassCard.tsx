'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    glow?: 'green' | 'blue' | 'purple' | 'orange' | 'cyan' | 'pink' | 'red' | 'none';
    delay?: number;
    hover?: boolean;
}

export function GlassCard({
    children,
    className = '',
    glow = 'none',
    delay = 0,
    hover = true
}: GlassCardProps) {
    const glowClasses = {
        green: 'glow-green',
        blue: 'glow-blue',
        purple: 'glow-purple',
        orange: 'glow-orange',
        cyan: 'glow-cyan',
        pink: 'glow-pink',
        red: 'glow-red',
        none: ''
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay, ease: 'easeOut' }}
            whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
            className={clsx(
                'glass-card',
                glowClasses[glow],
                className
            )}
        >
            {children}
        </motion.div>
    );
}
