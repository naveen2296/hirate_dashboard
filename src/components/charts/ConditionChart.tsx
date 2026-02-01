'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

// Data matching reference image
const chartData = [
    { month: 'Sept', CC: 9.43, FC: 9.08, PC: 9.06 },
    { month: 'Oct', CC: 9.48, FC: 9.04, PC: 9.13 },
    { month: 'Nov', CC: 9.58, FC: 9.23, PC: 9.22 },
    { month: 'Dec', CC: 9.66, FC: 9.21, PC: 9.43 }
];

// Line colors for each metric
const lineColors = {
    CC: { main: '#4ade80', glow: '#22c55e', name: 'Carriageway' },
    FC: { main: '#fb923c', glow: '#f97316', name: 'Furniture' },
    PC: { main: '#c084fc', glow: '#a855f7', name: 'Pavement' }
};

interface TooltipData {
    x: number;
    y: number;
    month: string;
    CC: number;
    FC: number;
    PC: number;
}

export function ConditionChart() {
    const [tooltip, setTooltip] = useState<TooltipData | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const minY = 8.9;
    const maxY = 9.56;
    const chartHeight = 140;
    const chartWidth = 320;
    const paddingX = 30;
    const paddingTop = 10;
    const paddingBottom = 10;

    // Calculate rise/fall percentages (Nov to Dec)
    const novData = chartData[2];
    const decData = chartData[3];
    const ccChange = ((decData.CC - novData.CC) / novData.CC) * 100;
    const fcChange = ((decData.FC - novData.FC) / novData.FC) * 100;
    const pcChange = ((decData.PC - novData.PC) / novData.PC) * 100;
    const avgChange = (ccChange + fcChange + pcChange) / 3;

    const getY = (value: number) => {
        return paddingTop + ((maxY - value) / (maxY - minY)) * chartHeight;
    };

    const getX = (index: number) => {
        const usableWidth = chartWidth - (paddingX * 2);
        return paddingX + (index / (chartData.length - 1)) * usableWidth;
    };

    // Generate smooth bezier curve path for a metric
    const generateSmoothPath = (metric: 'CC' | 'FC' | 'PC') => {
        const points = chartData.map((d, i) => ({ x: getX(i), y: getY(d[metric]) }));

        if (points.length < 2) return '';

        let path = `M ${points[0].x},${points[0].y}`;

        for (let i = 0; i < points.length - 1; i++) {
            const p0 = points[i];
            const p1 = points[i + 1];
            const midX = (p0.x + p1.x) / 2;
            path += ` C ${midX},${p0.y} ${midX},${p1.y} ${p1.x},${p1.y}`;
        }

        return path;
    };

    // Generate area path for a metric
    const generateAreaPath = (metric: 'CC' | 'FC' | 'PC') => {
        const points = chartData.map((d, i) => ({ x: getX(i), y: getY(d[metric]) }));
        const baseY = paddingTop + chartHeight;

        if (points.length < 2) return '';

        let path = `M ${points[0].x},${baseY}`;
        path += ` L ${points[0].x},${points[0].y}`;

        for (let i = 0; i < points.length - 1; i++) {
            const p0 = points[i];
            const p1 = points[i + 1];
            const midX = (p0.x + p1.x) / 2;
            path += ` C ${midX},${p0.y} ${midX},${p1.y} ${p1.x},${p1.y}`;
        }

        path += ` L ${points[points.length - 1].x},${baseY}`;
        path += ' Z';

        return path;
    };

    const ccPath = generateSmoothPath('CC');
    const fcPath = generateSmoothPath('FC');
    const pcPath = generateSmoothPath('PC');

    const ccArea = generateAreaPath('CC');
    const fcArea = generateAreaPath('FC');
    const pcArea = generateAreaPath('PC');

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="glass-card p-3 h-full relative overflow-visible"
        >
            {/* Header */}
            <motion.div
                className="flex items-center justify-between mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
            >
                <h3 className="text-sm font-semibold text-white/90">Condition Rating</h3>
                <div className="flex items-center gap-2 text-xs">
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full" style={{ background: lineColors.CC.main }} />
                        <span className="text-white/60">CC</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full" style={{ background: lineColors.FC.main }} />
                        <span className="text-white/60">FC</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full" style={{ background: lineColors.PC.main }} />
                        <span className="text-white/60">PC</span>
                    </div>
                    <div className="w-px h-3 bg-white/20 mx-1" />
                    <div className={`flex items-center gap-0.5 ${avgChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {avgChange >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        <span className="font-medium text-xs">{avgChange >= 0 ? '+' : ''}{avgChange.toFixed(2)}%</span>
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
                        {/* CC Green Gradient */}
                        <linearGradient id="ccAreaGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#4ade80" stopOpacity="0.5" />
                            <stop offset="50%" stopColor="#22c55e" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#166534" stopOpacity="0.05" />
                        </linearGradient>

                        {/* FC Orange Gradient */}
                        <linearGradient id="fcAreaGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#fb923c" stopOpacity="0.5" />
                            <stop offset="50%" stopColor="#f97316" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#9a3412" stopOpacity="0.05" />
                        </linearGradient>

                        {/* PC Purple Gradient */}
                        <linearGradient id="pcAreaGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.5" />
                            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#581c87" stopOpacity="0.05" />
                        </linearGradient>

                        {/* Glow filters */}
                        <filter id="greenGlow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <filter id="orangeGlow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <filter id="purpleGlow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
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
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="1"
                            strokeDasharray="4 4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                        />
                    ))}

                    {/* Area fills */}
                    <motion.path
                        d={ccArea}
                        fill="url(#ccAreaGrad)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    />
                    <motion.path
                        d={fcArea}
                        fill="url(#fcAreaGrad)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    />
                    <motion.path
                        d={pcArea}
                        fill="url(#pcAreaGrad)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    />

                    {/* Glow lines */}
                    <motion.path
                        d={ccPath}
                        fill="none"
                        stroke={lineColors.CC.glow}
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity={0.3}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
                    />
                    <motion.path
                        d={fcPath}
                        fill="none"
                        stroke={lineColors.FC.glow}
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity={0.3}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, delay: 0.7, ease: "easeInOut" }}
                    />
                    <motion.path
                        d={pcPath}
                        fill="none"
                        stroke={lineColors.PC.glow}
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity={0.3}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
                    />

                    {/* Main lines */}
                    <motion.path
                        d={ccPath}
                        fill="none"
                        stroke={lineColors.CC.main}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#greenGlow)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
                    />
                    <motion.path
                        d={fcPath}
                        fill="none"
                        stroke={lineColors.FC.main}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#orangeGlow)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, delay: 0.7, ease: "easeInOut" }}
                    />
                    <motion.path
                        d={pcPath}
                        fill="none"
                        stroke={lineColors.PC.main}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#purpleGlow)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
                    />

                    {/* Data points and labels */}
                    {chartData.map((data, i) => {
                        const x = getX(i);
                        const isLast = i === chartData.length - 1;
                        const isHovered = hoveredIndex === i;

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
                                    onMouseEnter={() => {
                                        setHoveredIndex(i);
                                        setTooltip({ x, y: getY(data.CC), ...data });
                                    }}
                                    onMouseLeave={() => {
                                        setHoveredIndex(null);
                                        setTooltip(null);
                                    }}
                                />

                                {/* Hover highlight rings - no blinking animation */}
                                {isHovered && (
                                    <>
                                        <circle cx={x} cy={getY(data.CC)} r={10} fill="none" stroke={lineColors.CC.main} strokeWidth="1.5" opacity={0.4} style={{ pointerEvents: 'none' }} />
                                        <circle cx={x} cy={getY(data.FC)} r={10} fill="none" stroke={lineColors.FC.main} strokeWidth="1.5" opacity={0.4} style={{ pointerEvents: 'none' }} />
                                        <circle cx={x} cy={getY(data.PC)} r={10} fill="none" stroke={lineColors.PC.main} strokeWidth="1.5" opacity={0.4} style={{ pointerEvents: 'none' }} />
                                    </>
                                )}

                                {/* Point glow (always visible on last point) - CC */}
                                {isLast && (
                                    <motion.circle
                                        cx={x}
                                        cy={getY(data.CC)}
                                        r={8}
                                        fill={lineColors.CC.main}
                                        opacity={0.3}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: [1, 2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                                    />
                                )}
                                {/* Data points - CC */}
                                {isLast && (
                                    <motion.circle
                                        cx={x}
                                        cy={getY(data.CC)}
                                        r={5}
                                        fill={lineColors.CC.main}
                                        stroke="#1e1b4b"
                                        strokeWidth="1.5"
                                        filter="url(#pointGlow)"
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 1.0 + i * 0.1, type: "spring", stiffness: 200 }}
                                    />
                                )}

                                {/* Point glow (always visible on last point) - FC */}
                                {isLast && (
                                    <motion.circle
                                        cx={x}
                                        cy={getY(data.FC)}
                                        r={8}
                                        fill={lineColors.FC.main}
                                        opacity={0.3}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: [1, 2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 2.2 }}
                                    />
                                )}
                                {/* Data points - FC */}
                                {isLast && (
                                    <motion.circle
                                        cx={x}
                                        cy={getY(data.FC)}
                                        r={5}
                                        fill={lineColors.FC.main}
                                        stroke="#1e1b4b"
                                        strokeWidth="1.5"
                                        filter="url(#pointGlow)"
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 1.1 + i * 0.1, type: "spring", stiffness: 200 }}
                                    />
                                )}

                                {/* Point glow (always visible on last point) - PC */}
                                {isLast && (
                                    <motion.circle
                                        cx={x}
                                        cy={getY(data.PC)}
                                        r={8}
                                        fill={lineColors.PC.main}
                                        opacity={0.3}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: [1, 2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 2.4 }}
                                    />
                                )}
                                {/* Data points - PC */}
                                {isLast && (
                                    <motion.circle
                                        cx={x}
                                        cy={getY(data.PC)}
                                        r={5}
                                        fill={lineColors.PC.main}
                                        stroke="#1e1b4b"
                                        strokeWidth="1.5"
                                        filter="url(#pointGlow)"
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 1.2 + i * 0.1, type: "spring", stiffness: 200 }}
                                    />
                                )}

                                {/* Value labels - always visible */}
                                <motion.text x={x} y={getY(data.CC) - 10} textAnchor="middle" fill={lineColors.CC.main} fontSize="11" fontWeight="bold"
                                    initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 + i * 0.1 }}>
                                    {data.CC.toFixed(2)}
                                </motion.text>
                                <motion.text x={x} y={getY(data.FC) - 10} textAnchor="middle" fill={lineColors.FC.main} fontSize="11" fontWeight="bold"
                                    initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05 + i * 0.1 }}>
                                    {data.FC.toFixed(2)}
                                </motion.text>
                                <motion.text x={x} y={getY(data.PC) + 20} textAnchor="middle" fill={lineColors.PC.main} fontSize="11" fontWeight="bold"
                                    initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 + i * 0.1 }}>
                                    {data.PC.toFixed(2)}
                                </motion.text>

                                {/* Triangle Rise/Fall indicators on last point */}
                                {isLast && (
                                    <>
                                        {/* CC Triangle */}
                                        <motion.path
                                            d={ccChange >= 0
                                                ? `M${x + 12},${getY(data.CC) + 4} l5,-8 l5,8 Z`
                                                : `M${x + 12},${getY(data.CC) - 4} l5,8 l5,-8 Z`}
                                            fill={ccChange >= 0 ? "#4ade80" : "#f87171"}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 1.3, type: "spring", stiffness: 300 }}
                                        />

                                        {/* FC Triangle */}
                                        <motion.path
                                            d={fcChange >= 0
                                                ? `M${x + 12},${getY(data.FC) + 4} l5,-8 l5,8 Z`
                                                : `M${x + 12},${getY(data.FC) - 4} l5,8 l5,-8 Z`}
                                            fill={fcChange >= 0 ? "#4ade80" : "#f87171"}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 1.4, type: "spring", stiffness: 300 }}
                                        />

                                        {/* PC Triangle */}
                                        <motion.path
                                            d={pcChange >= 0
                                                ? `M${x + 12},${getY(data.PC) + 4} l5,-8 l5,8 Z`
                                                : `M${x + 12},${getY(data.PC) - 4} l5,8 l5,-8 Z`}
                                            fill={pcChange >= 0 ? "#4ade80" : "#f87171"}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
                                        />
                                    </>
                                )}

                                {/* X-axis label */}
                                <motion.text
                                    x={x}
                                    y={paddingTop + chartHeight + 16}
                                    textAnchor="middle" fontWeight="bold"
                                    fill="rgba(255,255,255,0.5)"
                                    fontSize="12"
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
                                ? `${(tooltip.x / chartWidth) * 100 - 10}%`
                                : tooltip.x < chartWidth * 0.3
                                    ? `${(tooltip.x / chartWidth) * 100 + 10}%`
                                    : `${(tooltip.x / chartWidth) * 100}%`,
                            top: '10%',
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
                                background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.95) 0%, rgba(49, 46, 129, 0.95) 100%)',
                                border: '1px solid rgba(255,255,255,0.15)',
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            <p className="text-xs font-semibold text-white mb-1.5">{tooltip.month} 2025</p>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full" style={{ background: lineColors.CC.main }} />
                                        <span className="text-[10px] text-white/70">CC</span>
                                    </div>
                                    <span className="text-xs font-bold" style={{ color: lineColors.CC.main }}>{tooltip.CC.toFixed(2)}</span>
                                </div>
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full" style={{ background: lineColors.FC.main }} />
                                        <span className="text-[10px] text-white/70">FC</span>
                                    </div>
                                    <span className="text-xs font-bold" style={{ color: lineColors.FC.main }}>{tooltip.FC.toFixed(2)}</span>
                                </div>
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full" style={{ background: lineColors.PC.main }} />
                                        <span className="text-[10px] text-white/70">PC</span>
                                    </div>
                                    <span className="text-xs font-bold" style={{ color: lineColors.PC.main }}>{tooltip.PC.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div >
    );
}
