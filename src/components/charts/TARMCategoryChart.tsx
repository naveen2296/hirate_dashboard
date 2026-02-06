'use client';

import { motion } from 'framer-motion';

// Category data - Green if above benchmark, Orange if below (attention)
// offsetX/offsetY: Adjust individual benchmark line position for each category
const chartData = [
    { category: 'Roadways', actual: 9.53, benchmark: 9.36, offsetX: 0, offsetY: 35 },
    { category: 'Road Signage', actual: 9.48, benchmark: 9.39, offsetX: 0, offsetY: 40 },
    { category: 'Structures', actual: 9.49, benchmark: 9.31, offsetX: 0, offsetY: 50 },
    { category: 'Landscaping', actual: 7.64, benchmark: 7.22, offsetX: 0, offsetY: 65 },
    { category: 'ATMS', actual: 9.77, benchmark: 9.50, offsetX: 0, offsetY: 30 },
    { category: 'Project Facilities', actual: 8.51, benchmark: 8.99, offsetX: 0, offsetY: 40 },
    { category: 'TMS', actual: 9.92, benchmark: 9.61, offsetX: 0, offsetY: 25 }
];

export function TARMCategoryChart() {
    const chartHeight = 200;
    const chartWidth = 520;
    const paddingTop = 25;
    const paddingBottom = 15;
    const barWidth = 60;
    const barGap = 14;

    // Scale to show differences better - minY of 0 ensures all bars are visible
    const minY = 0;
    const maxY = 10;

    // ===== GLOBAL BENCHMARK LINE CONFIG =====
    const benchmarkLineOffsetY = 0;      // Global Y offset (+ve = down, -ve = up)
    const benchmarkLineOffsetX = 5;      // Global X padding from bar edges
    // =========================================

    const baseY = chartHeight - paddingBottom;

    const getY = (value: number) => {
        const clampedValue = Math.max(minY, Math.min(maxY, value));
        return paddingTop + ((maxY - clampedValue) / (maxY - minY)) * (baseY - paddingTop);
    };

    const getBarHeight = (value: number) => {
        const clampedValue = Math.max(minY, value);
        return ((clampedValue - minY) / (maxY - minY)) * (baseY - paddingTop);
    };

    const getX = (index: number) => {
        const totalBarsWidth = chartData.length * barWidth + (chartData.length - 1) * barGap;
        const startX = (chartWidth - totalBarsWidth) / 2;
        return startX + index * (barWidth + barGap) + barWidth / 2;
    };

    // Generate benchmark line path (uses individual offsets per category)
    const benchmarkPath = (() => {
        let path = '';
        chartData.forEach((d, i) => {
            const x = getX(i) + (d.offsetX || 0);
            const y = getY(d.benchmark) + benchmarkLineOffsetY + (d.offsetY || 0);
            const halfBar = barWidth / 2 + benchmarkLineOffsetX;

            if (i === 0) {
                path = `M ${x - halfBar},${y}`;
            }
            path += ` L ${x + halfBar},${y}`;

            if (i < chartData.length - 1) {
                const nextD = chartData[i + 1];
                const nextY = getY(nextD.benchmark) + benchmarkLineOffsetY + (nextD.offsetY || 0);
                path += ` L ${x + halfBar},${nextY}`;
                const nextX = getX(i + 1) + (nextD.offsetX || 0);
                path += ` L ${nextX - halfBar},${nextY}`;
            }
        });
        return path;
    })();

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94] // Custom easing
            }}
            className="glass-card p-3 h-full flex flex-col overflow-visible"
        >
            {/* Header with Legend - slide in from left */}
            <motion.div
                className="flex items-center justify-between mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
            >
                <h3 className="text-sm font-semibold text-white/90">TARM Rating by Category</h3>
                <div className="flex items-center gap-3 text-[10px]">
                    <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded" style={{ background: 'linear-gradient(180deg, #4ade80 0%, #a3e635 100%)' }} />
                        <span className="text-white/60">Above Benchmark</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded" style={{ background: 'linear-gradient(180deg, #f97316 0%, #f87171 100%)' }} />
                        <span className="text-white/60">Below Benchmark</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-4 h-0 border-t-2" style={{ border: '1.4px dashed #ef3d3dff' }} />
                        <span className="text-white/60">Division Avg</span>
                    </div>
                </div>
            </motion.div>

            <div className="flex-1">
                <svg
                    viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                    className="w-full h-full"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <defs>
                        {/* Above benchmark - heatmap 9.0-9.5 gradient (green-400 to lime-400) */}
                        <linearGradient id="greenBarGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#6ae497ff" />
                            <stop offset="50%" stopColor="#aee751ff" />
                        </linearGradient>
                        {/* Below benchmark - heatmap attention gradient (orange-500 to red-400) */}
                        <linearGradient id="redBarGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#f97316" />
                            <stop offset="100%" stopColor="#f87171" />
                        </linearGradient>
                    </defs>

                    {/* Bars */}
                    {chartData.map((data, i) => {
                        const x = getX(i) - barWidth / 2;
                        const barHeight = getBarHeight(data.actual);
                        const y = baseY - barHeight;
                        const isAboveBenchmark = data.actual >= data.benchmark;
                        const delta = data.actual - data.benchmark;

                        return (
                            <g key={data.category}>
                                {/* Bar with spring animation */}
                                <motion.rect
                                    x={x}
                                    y={y}
                                    width={barWidth}
                                    height={barHeight}
                                    rx={6}
                                    ry={6}
                                    fill={isAboveBenchmark ? 'url(#greenBarGrad)' : 'url(#redBarGrad)'}
                                    initial={{ height: 0, y: baseY, opacity: 0 }}
                                    animate={{ height: barHeight, y: y, opacity: 1 }}
                                    transition={{
                                        height: { type: "spring", stiffness: 100, damping: 15, delay: i * 0.1 },
                                        y: { type: "spring", stiffness: 100, damping: 15, delay: i * 0.1 },
                                        opacity: { duration: 0.3, delay: i * 0.1 }
                                    }}
                                    whileHover={{
                                        scale: 1.02,
                                        filter: "brightness(1.1)",
                                        transition: { duration: 0.2 }
                                    }}
                                />

                                {/* Delta % with trending icon - slide up animation */}
                                <motion.g
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.5 + i * 0.1,
                                        duration: 0.4,
                                        ease: "easeOut"
                                    }}
                                >
                                    {/* Trending icon */}
                                    <g transform={`translate(${getX(i) - 28}, ${y - 26})`}>
                                        {isAboveBenchmark ? (
                                            <path
                                                d="M2 8l4-4 4 4 6-6m0 0v4m0-4h-4"
                                                stroke="#4ade80"
                                                strokeWidth="1.5"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        ) : (
                                            <path
                                                d="M2 2l4 4 4-4 6 6m0 0v-4m0 4h-4"
                                                stroke="#f97316"
                                                strokeWidth="1.5"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        )}
                                    </g>
                                    {/* Percentage text */}
                                    <text
                                        x={getX(i) + 8}
                                        y={y - 18}
                                        textAnchor="middle"
                                        fill={isAboveBenchmark ? '#4ade80' : '#f97316'}
                                        fontSize="9"
                                        fontWeight="bold"
                                    >
                                        {isAboveBenchmark ? '+' : ''}{((delta / data.benchmark) * 100).toFixed(1)}%
                                    </text>
                                </motion.g>

                                {/* Value label - pop in animation */}
                                <motion.text
                                    x={getX(i)}
                                    y={y - 0}
                                    textAnchor="middle"
                                    fill="white"
                                    fontSize="12"
                                    fontWeight="bold"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: 0.6 + i * 0.1,
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 15
                                    }}
                                    style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
                                >
                                    {data.actual.toFixed(2)}
                                </motion.text>

                                {/* Category label inside bar - fade in */}
                                <motion.text
                                    x={getX(i)}
                                    y={baseY - 8}
                                    textAnchor="middle"
                                    fill="#1a1a2e"
                                    fontSize="9"
                                    fontWeight="600"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                >
                                    {data.category.split(' ')[0]}
                                </motion.text>
                                {data.category.split(' ').length > 1 && (
                                    <motion.text
                                        x={getX(i)}
                                        y={baseY + 2}
                                        textAnchor="middle"
                                        fill="#1a1a2e"
                                        fontSize="9"
                                        fontWeight="600"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.35 + i * 0.1 }}
                                    >
                                        {data.category.split(' ').slice(1).join(' ')}
                                    </motion.text>
                                )}
                            </g>
                        );
                    })}

                    {/* Benchmark line - fade in animation */}
                    <motion.path
                        d={benchmarkPath}
                        fill="none"
                        stroke="#ef3d3dff"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    />

                    {/* Glow effect */}
                    <motion.path
                        d={benchmarkPath}
                        fill="none"
                        stroke="#ed3c3cff"
                        strokeWidth="5"
                        strokeDasharray="4 4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    />
                </svg>
            </div>
        </motion.div>
    );
}
