'use client';

import { motion } from 'framer-motion';
import { overallRating } from '@/data/dashboard';

export function RatingGauge() {
    const percentage = (overallRating.current / overallRating.max) * 100;
    const circumference = 2 * Math.PI * 80;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 flex flex-col items-center justify-center h-full"
        >
            <h3 className="text-sm font-semibold text-white/70 mb-4">Overall Rating</h3>

            <div className="relative">
                <svg width="180" height="180" viewBox="0 0 180 180">
                    {/* Background circle */}
                    <circle
                        cx="90"
                        cy="90"
                        r="80"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="12"
                    />

                    {/* Progress circle */}
                    <motion.circle
                        cx="90"
                        cy="90"
                        r="80"
                        fill="none"
                        stroke="url(#gaugeGradient)"
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        transform="rotate(-90 90 90)"
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                    />

                    <defs>
                        <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#22c55e" />
                            <stop offset="50%" stopColor="#10b981" />
                            <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.span
                        className="text-4xl font-bold text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        {overallRating.current.toFixed(2)}
                    </motion.span>
                    <span className="text-sm text-white/50">out of {overallRating.max}</span>
                </div>
            </div>

            <div className="mt-4 flex items-center gap-4 text-sm">
                <div className="text-center">
                    <p className="text-white/50">Target</p>
                    <p className="font-semibold text-blue-400">{overallRating.target}</p>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-center">
                    <p className="text-white/50">Previous</p>
                    <p className="font-semibold text-white/80">{overallRating.previousMonth}</p>
                </div>
            </div>
        </motion.div>
    );
}
