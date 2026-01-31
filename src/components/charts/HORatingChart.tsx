'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

// Data matching reference image
const chartData = [
    { month: 'Sept', rating: 8.88 },
    { month: 'Oct', rating: 8.92 },
    { month: 'Nov', rating: 9.00 },
    { month: 'Dec', rating: 8.88 }
];

interface TooltipData {
    x: number;
    month: string;
    rating: number;
    change: number;
}

export function HORatingChart() {
    const [tooltip, setTooltip] = useState<TooltipData | null>(null);

    const minY = 8.8;
    const maxY = 9.0;
    const chartHeight = 160;
    const chartWidth = 300;
    const paddingX = 35;
    const paddingTop = 25;
    const paddingBottom = 0;
    const baseline = 8.82;

    // Calculate rise/fall percentage (Nov to Dec)
    // Formula: ((Dec - Nov) / Nov) * 100
    const novData = chartData[2]; // Nov
    const decData = chartData[3]; // Dec
    const ratingChange = ((decData.rating - novData.rating) / novData.rating) * 100;

    const getY = (value: number) => {
        return paddingTop + ((maxY - value) / (maxY - minY)) * chartHeight;
    };

    const getX = (index: number) => {
        const usableWidth = chartWidth - (paddingX * 2);
        return paddingX + (index / (chartData.length - 1)) * usableWidth;
    };

    const paths = useMemo(() => {
        const points = chartData.map((d, i) => ({ x: getX(i), y: getY(d.rating) }));
        const linePath = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;

        const baselineY = getY(baseline);
        const greenArea = `M ${paddingX},${baselineY} L ${points.map(p => `${p.x},${Math.min(p.y, baselineY)}`).join(' L ')} L ${chartWidth - paddingX},${baselineY} Z`;

        const lastTwo = points.slice(-2);
        const redArea = `M ${lastTwo[0].x},${baselineY} L ${lastTwo[0].x},${lastTwo[0].y} L ${lastTwo[1].x},${lastTwo[1].y} L ${lastTwo[1].x},${baselineY} Z`;

        return { linePath, greenArea, redArea, points };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-3 h-full relative"
        >
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-white/90">Project HO Rating by Month</h3>
                <div className="flex items-center gap-2 text-xs">
                    {/* Rating Change Indicator - Icon with label */}
                    <div className="w-px h-3 bg-white/20" />
                    <div className={`flex items-center gap-0.5 ${ratingChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {ratingChange >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        <span className="font-semibold text-xs">{ratingChange >= 0 ? '+' : ''}{ratingChange.toFixed(2)}%</span>
                    </div>
                </div>
            </div>

            <div className="h-[200px] relative">
                <svg
                    viewBox={`0 0 ${chartWidth} ${paddingTop + chartHeight + paddingBottom}`}
                    className="w-full h-full"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <defs>
                        {/* Green gradient - top to bottom (light to dark) */}
                        <linearGradient id="greenAreaGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.9" />
                            <stop offset="50%" stopColor="#16a34a" stopOpacity="0.7" />
                            <stop offset="100%" stopColor="#166534" stopOpacity="0.5" />
                        </linearGradient>
                        {/* Red/Coral gradient - top to bottom (light to dark) */}
                        <linearGradient id="redAreaGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#f87171" stopOpacity="0.9" />
                            <stop offset="50%" stopColor="#dc2626" stopOpacity="0.7" />
                            <stop offset="100%" stopColor="#991b1b" stopOpacity="0.5" />
                        </linearGradient>
                    </defs>

                    {/* Green gradient fill */}
                    <motion.path
                        d={paths.greenArea}
                        fill="url(#greenAreaGrad)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    />

                    {/* Red gradient fill */}
                    <motion.path
                        d={paths.redArea}
                        fill="url(#redAreaGrad)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />

                    {/* Labels - Always visible + Invisible hover areas */}
                    {chartData.map((data, i) => {
                        const x = getX(i);
                        const y = getY(data.rating);
                        const prevRating = i > 0 ? chartData[i - 1].rating : data.rating;
                        const change = data.rating - prevRating;
                        const isLast = i === chartData.length - 1;

                        return (
                            <g key={data.month}>
                                {/* Invisible hover area */}
                                <rect
                                    x={x - 25}
                                    y={paddingTop}
                                    width={50}
                                    height={chartHeight}
                                    fill="transparent"
                                    className="cursor-pointer"
                                    onMouseEnter={() => setTooltip({ x, month: data.month, rating: data.rating, change })}
                                    onMouseLeave={() => setTooltip(null)}
                                />

                                {/* Value label - green if rising, red if falling */}
                                <motion.text
                                    x={x}
                                    y={y - 10}
                                    textAnchor="middle"
                                    fill={i > 0 && data.rating < chartData[i - 1].rating ? "#f87171" : "#22c55e"}
                                    fontSize="12"
                                    fontWeight="bold"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 + i * 0.15 }}
                                >
                                    {data.rating.toFixed(2)}
                                </motion.text>

                                {/* Rise/Fall % at the end */}
                                {isLast && (
                                    <motion.text
                                        x={x + 18}
                                        y={y}
                                        textAnchor="start"
                                        fill={ratingChange >= 0 ? "#22c55e" : "#ef4444"}
                                        fontSize="11"
                                        fontWeight="bold"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1.3 }}
                                    >
                                        {ratingChange >= 0 ? '↑' : '↓'}
                                    </motion.text>
                                )}

                                {/* X-axis */}
                                <text x={x} y={paddingTop + chartHeight + 2} textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="12">
                                    {data.month}
                                </text>
                            </g>
                        );
                    })}
                </svg>

                {/* Hover Tooltip */}
                {tooltip && (
                    <div
                        className="absolute z-50 pointer-events-none"
                        style={{
                            left: `${(tooltip.x / chartWidth) * 100}%`,
                            top: '10%',
                            transform: 'translateX(-50%)'
                        }}
                    >
                        <div className="bg-gray-900/95 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 shadow-xl">
                            <p className="text-xs font-semibold text-white mb-1">{tooltip.month} 2025</p>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-white/70">Rating:</span>
                                    <span className="text-sm font-bold text-white">{tooltip.rating.toFixed(2)}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-white/70">Change:</span>
                                    <span className={`text-xs font-bold ${tooltip.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                        {tooltip.change >= 0 ? '+' : ''}{tooltip.change.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
