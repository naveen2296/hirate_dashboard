'use client';

import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { overallRating } from '@/data/dashboard';

export function RatingGauge() {
    const [isVisible, setIsVisible] = useState(false);

    const progress = useSpring(0, { duration: 1500, bounce: 0 });
    const displayValue = useTransform(progress, (v) => v.toFixed(2));

    useEffect(() => {
        setIsVisible(true);
        progress.set(overallRating.current);
    }, [progress]);

    const percentage = (overallRating.current / overallRating.max) * 100;
    const strokeDasharray = 283; // Circumference for r=45
    const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage) / 100;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-card p-4 h-full flex flex-col"
        >
            <div className="mb-2">
                <h3 className="text-sm font-semibold text-white/90">Overall Project Rating</h3>
                <p className="text-xs text-white/50">FY 25-26 Average</p>
            </div>

            <div className="flex-1 flex items-center justify-center">
                <div className="relative w-40 h-40">
                    {/* Background arc */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="8"
                            strokeLinecap="round"
                        />
                        {/* Progress arc */}
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="url(#gaugeGradient)"
                            strokeWidth="8"
                            strokeLinecap="round"
                            initial={{ strokeDasharray: strokeDasharray, strokeDashoffset: strokeDasharray }}
                            animate={{ strokeDashoffset: isVisible ? strokeDashoffset : strokeDasharray }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                        />
                        <defs>
                            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#22c55e" />
                                <stop offset="50%" stopColor="#06b6d4" />
                                <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Center content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <motion.span
                            className="text-3xl font-bold text-white number-animate"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            {displayValue}
                        </motion.span>
                        <span className="text-xs text-white/50">out of {overallRating.max}</span>
                    </div>
                </div>
            </div>

            {/* Stats row */}
            <div className="flex justify-between text-xs mt-2 pt-3 border-t border-white/5">
                <div>
                    <span className="text-white/50">Target</span>
                    <span className="ml-2 text-yellow-400 font-medium">{overallRating.target}</span>
                </div>
                <div>
                    <span className="text-white/50">Prev Month</span>
                    <span className="ml-2 text-white/80 font-medium">{overallRating.previousMonth}</span>
                </div>
                <div className="flex items-center gap-1 text-green-400">
                    <span>+{(overallRating.current - overallRating.previousMonth).toFixed(2)}</span>
                </div>
            </div>
        </motion.div>
    );
}
