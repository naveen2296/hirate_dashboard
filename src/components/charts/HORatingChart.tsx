'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
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
    y: number;
    month: string;
    rating: number;
    change: number;
}

export function HORatingChart() {
    const [tooltip, setTooltip] = useState<TooltipData | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const minY = 8.75;
    const maxY = 9.02;
    const chartHeight = 160;
    const chartWidth = 320;
    const paddingX = 35;
    const paddingTop = 15;
    const paddingBottom = 25;

    // Calculate rise/fall percentage (Nov to Dec)
    const novData = chartData[2];
    const decData = chartData[3];
    const ratingChange = ((decData.rating - novData.rating) / novData.rating) * 100;

    const getY = (value: number) => {
        return paddingTop + ((maxY - value) / (maxY - minY)) * chartHeight;
    };

    const getX = (index: number) => {
        const usableWidth = chartWidth - (paddingX * 2);
        return paddingX + (index / (chartData.length - 1)) * usableWidth;
    };

    // Generate smooth bezier curve path
    const generateSmoothPath = () => {
        const points = chartData.map((d, i) => ({ x: getX(i), y: getY(d.rating) }));

        if (points.length < 2) return '';

        let path = `M ${points[0].x},${points[0].y}`;

        for (let i = 0; i < points.length - 1; i++) {
            const p0 = points[i];
            const p1 = points[i + 1];
            const midX = (p0.x + p1.x) / 2;

            // Create smooth curve using cubic bezier
            path += ` C ${midX},${p0.y} ${midX},${p1.y} ${p1.x},${p1.y}`;
        }

        return path;
    };

    // Generate area paths for rising (green) and falling (red) segments
    const generateSegmentAreas = () => {
        const points = chartData.map((d, i) => ({
            x: getX(i),
            y: getY(d.rating),
            rating: d.rating
        }));
        const baseY = paddingTop + chartHeight;

        const risingAreas: string[] = [];
        const fallingAreas: string[] = [];

        for (let i = 0; i < points.length - 1; i++) {
            const p0 = points[i];
            const p1 = points[i + 1];
            const midX = (p0.x + p1.x) / 2;
            const isRising = p1.rating >= p0.rating;

            // Create closed area for this segment
            let segmentPath = `M ${p0.x},${baseY}`;
            segmentPath += ` L ${p0.x},${p0.y}`;
            segmentPath += ` C ${midX},${p0.y} ${midX},${p1.y} ${p1.x},${p1.y}`;
            segmentPath += ` L ${p1.x},${baseY}`;
            segmentPath += ' Z';

            if (isRising) {
                risingAreas.push(segmentPath);
            } else {
                fallingAreas.push(segmentPath);
            }
        }

        // Also generate line segments for coloring
        const risingLines: string[] = [];
        const fallingLines: string[] = [];

        for (let i = 0; i < points.length - 1; i++) {
            const p0 = points[i];
            const p1 = points[i + 1];
            const midX = (p0.x + p1.x) / 2;
            const isRising = p1.rating >= p0.rating;

            const lineSeg = `M ${p0.x},${p0.y} C ${midX},${p0.y} ${midX},${p1.y} ${p1.x},${p1.y}`;

            if (isRising) {
                risingLines.push(lineSeg);
            } else {
                fallingLines.push(lineSeg);
            }
        }

        return { risingAreas, fallingAreas, risingLines, fallingLines };
    };

    const linePath = generateSmoothPath();
    const { risingAreas, fallingAreas, risingLines, fallingLines } = generateSegmentAreas();
    const points = chartData.map((d, i) => ({ x: getX(i), y: getY(d.rating) }));

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="glass-card p-3 h-full relative overflow-visible"
        >
            {/* Header */}
            <motion.div
                className="flex items-center justify-between mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
            >
                <h3 className="text-sm font-semibold text-white/90">Project HO Rating by Month</h3>
                <div className="flex items-center gap-2 text-xs">
                    <div className="w-px h-3 bg-white/20" />
                    <div className={`flex items-center gap-0.5 ${ratingChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {ratingChange >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        <span className="font-semibold text-xs">{ratingChange >= 0 ? '+' : ''}{ratingChange.toFixed(2)}%</span>
                    </div>
                </div>
            </motion.div>

            <div className="h-[200px] relative">
                <svg
                    viewBox={`0 0 ${chartWidth} ${paddingTop + chartHeight + paddingBottom}`}
                    className="w-full h-full"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <defs>
                        {/* Green gradient for rising areas */}
                        <linearGradient id="risingAreaGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.7" />
                            <stop offset="50%" stopColor="#16a34a" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#14532d" stopOpacity="0.1" />
                        </linearGradient>

                        {/* Red gradient for falling areas */}
                        <linearGradient id="fallingAreaGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.7" />
                            <stop offset="50%" stopColor="#dc2626" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#7f1d1d" stopOpacity="0.1" />
                        </linearGradient>

                        {/* Line glow filter */}
                        <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>

                        {/* Point glow filter */}
                        <filter id="pointGlow" x="-100%" y="-100%" width="300%" height="300%">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Vertical grid lines - dotted */}
                    {chartData.map((_, i) => (
                        <motion.line
                            key={`grid-${i}`}
                            x1={getX(i)}
                            y1={paddingTop}
                            x2={getX(i)}
                            y2={paddingTop + chartHeight}
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="1"
                            strokeDasharray="4 4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                        />
                    ))}

                    {/* Rising Areas (Green) */}
                    {risingAreas.map((path, i) => (
                        <motion.path
                            key={`rising-${i}`}
                            d={path}
                            fill="url(#risingAreaGrad)"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                        />
                    ))}

                    {/* Falling Areas (Red) */}
                    {fallingAreas.map((path, i) => (
                        <motion.path
                            key={`falling-${i}`}
                            d={path}
                            fill="url(#fallingAreaGrad)"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                        />
                    ))}

                    {/* Rising Lines (Green) - Glow */}
                    {risingLines.map((path, i) => (
                        <motion.path
                            key={`rising-line-glow-${i}`}
                            d={path}
                            fill="none"
                            stroke="#22c55e"
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            opacity={0.3}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 + i * 0.15, ease: "easeInOut" }}
                        />
                    ))}

                    {/* Falling Lines (Red) - Glow */}
                    {fallingLines.map((path, i) => (
                        <motion.path
                            key={`falling-line-glow-${i}`}
                            d={path}
                            fill="none"
                            stroke="#ef4444"
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            opacity={0.3}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: 0.7 + i * 0.15, ease: "easeInOut" }}
                        />
                    ))}

                    {/* Rising Lines (Green) - Main */}
                    {risingLines.map((path, i) => (
                        <motion.path
                            key={`rising-line-${i}`}
                            d={path}
                            fill="none"
                            stroke="#4ade80"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            filter="url(#lineGlow)"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 + i * 0.15, ease: "easeInOut" }}
                        />
                    ))}

                    {/* Falling Lines (Red) - Main */}
                    {fallingLines.map((path, i) => (
                        <motion.path
                            key={`falling-line-${i}`}
                            d={path}
                            fill="none"
                            stroke="#f87171"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            filter="url(#lineGlow)"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: 0.7 + i * 0.15, ease: "easeInOut" }}
                        />
                    ))}

                    {/* Data points and labels */}
                    {chartData.map((data, i) => {
                        const x = getX(i);
                        const y = getY(data.rating);
                        const prevRating = i > 0 ? chartData[i - 1].rating : data.rating;
                        const change = data.rating - prevRating;
                        const isLast = i === chartData.length - 1;
                        const isHovered = hoveredIndex === i;
                        const isRising = i === 0 || data.rating >= chartData[i - 1].rating;

                        return (
                            <g key={data.month}>
                                {/* Invisible hover area */}
                                <rect
                                    x={x - 30}
                                    y={paddingTop}
                                    width={60}
                                    height={chartHeight}
                                    fill="transparent"
                                    className="cursor-pointer"
                                    onMouseEnter={() => {
                                        setHoveredIndex(i);
                                        setTooltip({ x, y, month: data.month, rating: data.rating, change });
                                    }}
                                    onMouseLeave={() => {
                                        setHoveredIndex(null);
                                        setTooltip(null);
                                    }}
                                />

                                {/* Outer pulse ring on hover */}
                                {isHovered && (
                                    <motion.circle
                                        cx={x}
                                        cy={y}
                                        r={12}
                                        fill="none"
                                        stroke={isRising ? "#4ade80" : "#f87171"}
                                        strokeWidth="2"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: [0.5, 0], scale: [0.8, 1.5] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    />
                                )}

                                {/* Point glow (always visible on last point) */}
                                {isLast && (
                                    <motion.circle
                                        cx={x}
                                        cy={y}
                                        r={8}
                                        fill={isRising ? "#4ade80" : "#f87171"}
                                        opacity={0.3}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: [1, 2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                                    />
                                )}

                                {/* Data point - only on last point */}
                                {isLast && (
                                    <motion.circle
                                        cx={x}
                                        cy={y}
                                        r={6}
                                        fill={isRising ? "#4ade80" : "#f87171"}
                                        stroke="#1e1b4b"
                                        strokeWidth="2"
                                        filter="url(#pointGlow)"
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            delay: 1.2 + i * 0.15,
                                            type: "spring",
                                            stiffness: 200
                                        }}
                                        style={{ cursor: 'pointer' }}
                                    />
                                )}

                                {/* Value label */}
                                <motion.text
                                    x={x}
                                    y={y - 14}
                                    textAnchor="middle"
                                    fill={isRising ? "#4ade80" : "#f87171"}
                                    fontSize="11"
                                    fontWeight="bold"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.3 + i * 0.15 }}
                                >
                                    {data.rating.toFixed(2)}
                                </motion.text>

                                {/* Triangle Rise/Fall indicator on last point */}
                                {isLast && (
                                    <motion.path
                                        d={isRising
                                            ? `M${x + 12},${y + 4} l5,-8 l5,8 Z`
                                            : `M${x + 12},${y - 4} l5,8 l5,-8 Z`}
                                        fill={isRising ? "#4ade80" : "#f87171"}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
                                    />
                                )}

                                {/* X-axis label (month) */}
                                <motion.text
                                    x={x}
                                    y={paddingTop + chartHeight + 16}
                                    textAnchor="middle"
                                    fill="rgba(255,255,255,0.6)"
                                    fontSize="12" fontWeight="bold"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                >
                                    {data.month}
                                </motion.text>
                            </g>
                        );
                    })}
                </svg>

                {/* Hover Tooltip */}
                {tooltip && (
                    <motion.div
                        className="absolute z-[100] pointer-events-none"
                        style={{
                            left: tooltip.x > chartWidth * 0.7
                                ? `${(tooltip.x / chartWidth) * 100 - 5}%`
                                : tooltip.x < chartWidth * 0.3
                                    ? `${(tooltip.x / chartWidth) * 100 + 5}%`
                                    : `${(tooltip.x / chartWidth) * 100}%`,
                            top: '15%',
                            transform: tooltip.x > chartWidth * 0.7
                                ? 'translateX(-100%)'
                                : tooltip.x < chartWidth * 0.3
                                    ? 'translateX(0)'
                                    : 'translateX(-50%)'
                        }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.15 }}
                    >
                        <div
                            className="rounded-xl px-3 py-2 shadow-2xl"
                            style={{
                                background: tooltip.change >= 0
                                    ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.95) 0%, rgba(22, 163, 74, 0.95) 100%)'
                                    : 'linear-gradient(135deg, rgba(239, 68, 68, 0.95) 0%, rgba(220, 38, 38, 0.95) 100%)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            <p className="text-xs font-semibold text-white mb-1">{tooltip.month} 2025</p>
                            <div className="flex flex-col gap-0.5">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-white/80">Rating:</span>
                                    <span className="text-sm font-bold text-white">{tooltip.rating.toFixed(2)}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-white/80">Change:</span>
                                    <span className={`text-xs font-bold ${tooltip.change >= 0 ? 'text-green-300' : 'text-red-300'}`}>
                                        {tooltip.change >= 0 ? '+' : ''}{tooltip.change.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}
