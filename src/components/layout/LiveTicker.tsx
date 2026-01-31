'use client';

import { motion } from 'framer-motion';
import { tickerData } from '@/data/dashboard';
import { TrendingUp, TrendingDown } from 'lucide-react';

export function LiveTicker() {
    const items = [...tickerData, ...tickerData];

    return (
        <div className="relative overflow-hidden py-3 border-y border-white/5 bg-black/30">
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
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />
        </div>
    );
}
