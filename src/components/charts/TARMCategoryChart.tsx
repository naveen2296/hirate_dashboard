'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { TrendingUp, TrendingDown, Target } from 'lucide-react';

// Category data with real benchmarks (Average Rating Division) - in specified order
const chartData = [
    { category: 'Roadways', actual: 9.36, benchmark: 9.13, icon: '🛣️' },
    { category: 'Road Signage', actual: 9.39, benchmark: 9.31, icon: '🪧' },
    { category: 'Structures', actual: 9.31, benchmark: 9.12, icon: '🌉' },
    { category: 'Landscaping', actual: 7.22, benchmark: 6.56, icon: '🌳' },
    { category: 'ATMS', actual: 9.50, benchmark: 9.65, icon: '🖥️' },
    { category: 'Project Facilities', actual: 8.99, benchmark: 8.78, icon: '🏢' },
    { category: 'TMS', actual: 9.61, benchmark: 9.71, icon: '💰' }
];

const getBarColor = (actual: number, benchmark: number) => {
    const delta = actual - benchmark;
    if (delta >= 0.2) return { bar: 'from-emerald-500 to-green-500', text: 'text-emerald-400' };
    if (delta >= 0) return { bar: 'from-green-400 to-lime-400', text: 'text-green-400' };
    return { bar: 'from-red-400 to-red-500', text: 'text-red-400' };
};

export function TARMCategoryChart() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const maxRating = 10;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-card p-4 h-full flex flex-col"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-cyan-400" />
                    <h3 className="text-sm font-semibold text-white/90">TARM Rating by Category</h3>
                </div>
                <div className="flex items-center gap-3 text-[9px]">
                    <div className="flex items-center gap-1">
                        <div className="w-6 h-1.5 rounded bg-gradient-to-r from-emerald-500 to-lime-400" />
                        <span className="text-white/50">Above Avg</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-6 h-1.5 rounded bg-gradient-to-r from-red-400 to-red-500" />
                        <span className="text-white/50">Below Avg</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-0.5 h-3 bg-cyan-400" />
                        <span className="text-white/50">Div Avg</span>
                    </div>
                </div>
            </div>

            {/* Bars */}
            <div className="flex-1 flex flex-col justify-between gap-2">
                {chartData.map((data, index) => {
                    const progressWidth = (data.actual / maxRating) * 100;
                    const benchmarkPos = (data.benchmark / maxRating) * 100;
                    const delta = data.actual - data.benchmark;
                    const colors = getBarColor(data.actual, data.benchmark);
                    const isHovered = hoveredIndex === index;

                    return (
                        <motion.div
                            key={data.category}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + index * 0.08 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`
                                relative flex items-center gap-2 p-2 rounded-lg transition-all cursor-pointer
                                ${isHovered ? 'bg-white/10 scale-[1.02]' : 'bg-white/5'}
                            `}
                        >
                            {/* Category Name */}
                            <div className="w-28 flex items-center gap-1.5 shrink-0">
                                <span className="text-sm">{data.icon}</span>
                                <span className="text-[10px] text-white/70 font-medium truncate">
                                    {data.category}
                                </span>
                            </div>

                            {/* Progress Bar Container */}
                            <div className="flex-1 relative h-5">
                                {/* Background track */}
                                <div className="absolute inset-0 bg-white/10 rounded-full overflow-hidden">
                                    {/* Progress Bar */}
                                    <motion.div
                                        className={`h-full rounded-full bg-gradient-to-r ${colors.bar}`}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progressWidth}%` }}
                                        transition={{ duration: 0.8, delay: 0.2 + index * 0.08, ease: 'easeOut' }}
                                    />
                                </div>

                                {/* Benchmark Marker */}
                                <motion.div
                                    className="absolute top-0 bottom-0 w-0.5 bg-cyan-400"
                                    style={{ left: `${benchmarkPos}%` }}
                                    initial={{ opacity: 0, scaleY: 0 }}
                                    animate={{ opacity: 1, scaleY: 1 }}
                                    transition={{ delay: 0.5 + index * 0.08 }}
                                >
                                    <div className="absolute inset-0 w-1 -left-0.5 bg-cyan-400/30 blur-sm" />
                                </motion.div>

                                {/* Rating Value on bar */}
                                <motion.span
                                    className="absolute top-1/2 -translate-y-1/2 text-[10px] font-bold text-white right-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 + index * 0.08 }}
                                >
                                    {data.actual.toFixed(2)}
                                </motion.span>
                            </div>

                            {/* Delta Badge */}
                            <div className={`
                                w-14 flex items-center justify-end gap-0.5 shrink-0
                                ${delta >= 0 ? 'text-emerald-400' : 'text-red-400'}
                            `}>
                                {delta >= 0 ? (
                                    <TrendingUp className="w-3 h-3" />
                                ) : (
                                    <TrendingDown className="w-3 h-3" />
                                )}
                                <span className="text-[10px] font-bold">
                                    {delta >= 0 ? '+' : ''}{delta.toFixed(2)}
                                </span>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Summary Footer */}
            <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[9px]">
                <span className="text-white/40">Division HO Rating vs Avg</span>
                <span className="text-emerald-400 font-bold">
                    Avg: {(chartData.reduce((sum, d) => sum + d.actual, 0) / chartData.length).toFixed(2)}
                </span>
            </div>
        </motion.div>
    );
}
