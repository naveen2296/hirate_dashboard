'use client';

import { motion } from 'framer-motion';
import { tickerData } from '@/data/dashboard';
import { TrendingUp, TrendingDown } from 'lucide-react';

export function LiveTicker() {
    // Double data for seamless infinite loop - all 22 projects will scroll through
    const items = [...tickerData, ...tickerData];

    return (
        <div
            className="relative overflow-hidden py-3"
            style={{
                background: 'rgba(15, 20, 25, 0.4)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            }}
        >
            <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: 'linear'
                }}
                className="flex whitespace-nowrap"
                style={{ width: 'fit-content' }}
            >
                {items.map((item, index) => (
                    <div
                        key={`${item.code}-${index}`}
                        className="flex items-center gap-3 px-6 flex-shrink-0"
                    >
                        <span className="font-semibold text-white/90">{item.code}</span>
                        <span className={`font-mono font-bold ${item.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                            {item.value.toFixed(2)}
                        </span>
                        <div className={`flex items-center gap-1 text-xs ${item.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                            {item.isPositive ? (
                                <TrendingUp className="w-3 h-3" />
                            ) : (
                                <TrendingDown className="w-3 h-3" />
                            )}
                            <span>{item.isPositive ? '+' : ''}{item.change.toFixed(2)}</span>
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Gradient fade edges */}
            <div
                className="absolute left-0 top-0 bottom-0 w-20 pointer-events-none"
                style={{ background: 'linear-gradient(to right, rgba(10, 10, 15, 0.9), transparent)' }}
            />
            <div
                className="absolute right-0 top-0 bottom-0 w-20 pointer-events-none"
                style={{ background: 'linear-gradient(to left, rgba(10, 10, 15, 0.9), transparent)' }}
            />
        </div>
    );
}
