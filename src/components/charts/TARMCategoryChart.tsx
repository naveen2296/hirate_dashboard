'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

// TMS and ATMS are RED (special categories), others are GREEN
const chartData = [
    { category: 'TMS', actual: 9.61, benchmark: 7.6, isRed: true },
    { category: 'Structures', actual: 9.31, benchmark: 6.0, isRed: false },
    { category: 'Roadway', actual: 9.36, benchmark: 5.5, isRed: false },
    { category: 'Road Signage and Furniture', actual: 9.39, benchmark: 5.30, isRed: false },
    { category: 'Facilities', actual: 8.99, benchmark: 4.7, isRed: false },
    { category: 'Landscaping', actual: 7.22, benchmark: 1.7, isRed: false },
    { category: 'ATMS', actual: 9.50, benchmark: 7.2, isRed: true }
];

export function TARMCategoryChart() {
    const chartHeight = 230;
    const chartWidth = 520;
    const paddingLeft = 5;
    const paddingRight = 5;
    const paddingTop = 35;
    const paddingBottom = 45; // More space for labels below
    const barWidth = 60;
    const barGap = 8;
    const minY = 0;
    const maxY = 10;

    const getY = (value: number) => {
        return paddingTop + ((maxY - value) / (maxY - minY)) * (chartHeight - paddingTop - paddingBottom);
    };

    const getX = (index: number) => {
        const totalBarsWidth = chartData.length * barWidth + (chartData.length - 1) * barGap;
        const startX = (chartWidth - totalBarsWidth) / 2;
        return startX + index * (barWidth + barGap) + barWidth / 2;
    };

    const baseY = chartHeight - paddingBottom;

    // Generate benchmark line
    const benchmarkPath = useMemo(() => {
        let path = '';
        chartData.forEach((d, i) => {
            const x = getX(i);
            const y = getY(d.benchmark);
            const halfBar = barWidth / 2 + 2;

            if (i === 0) {
                path = `M ${x - halfBar},${y}`;
            }
            path += ` L ${x + halfBar},${y}`;

            if (i < chartData.length - 1) {
                const nextY = getY(chartData[i + 1].benchmark);
                path += ` L ${x + halfBar},${nextY}`;
                const nextX = getX(i + 1);
                path += ` L ${nextX - halfBar},${nextY}`;
            }
        });
        return path;
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-card p-3 h-full"
        >
            {/* Header with Legend */}
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-white/90">TARM Rating by Category</h3>
                <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded" style={{ background: 'linear-gradient(180deg, #a3c93a 0%, #7cb342 100%)' }} />
                        <span className="text-white/60">Above Benchmark</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded" style={{ background: 'linear-gradient(180deg, #ef5350 0%, #c62828 100%)' }} />
                        <span className="text-white/60">Below Benchmark</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-5 h-0 border-t-2 border-dashed border-blue-400" />
                        <span className="text-white/60">Benchmark</span>
                    </div>
                </div>
            </div>

            <div className="h-[230px]">
                <svg
                    viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                    className="w-full h-full"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <defs>
                        {/* Green gradient - for standard categories */}
                        <linearGradient id="greenBarGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#a3c93a" />
                            <stop offset="100%" stopColor="#7cb342" />
                        </linearGradient>
                        {/* Red gradient - for TMS/ATMS */}
                        <linearGradient id="redBarGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#ef5350" />
                            <stop offset="100%" stopColor="#c62828" />
                        </linearGradient>
                    </defs>

                    {/* Bars */}
                    {chartData.map((data, i) => {
                        const x = getX(i) - barWidth / 2;
                        const barHeight = ((data.actual - minY) / (maxY - minY)) * (chartHeight - paddingTop - paddingBottom);
                        const y = getY(data.actual);

                        return (
                            <g key={data.category}>
                                {/* Bar */}
                                <motion.rect
                                    x={x}
                                    y={y}
                                    width={barWidth}
                                    height={barHeight}
                                    rx={4}
                                    ry={4}
                                    fill={data.isRed ? 'url(#redBarGrad)' : 'url(#greenBarGrad)'}
                                    initial={{ height: 0, y: baseY }}
                                    animate={{ height: barHeight, y: y }}
                                    transition={{ duration: 0.8, delay: i * 0.07, ease: 'easeOut' }}
                                />

                                {/* Value label above bar */}
                                <motion.text
                                    x={getX(i)}
                                    y={y + 25}
                                    textAnchor="middle"
                                    fill={data.isRed ? '#ef5350' : '#a3c93a'}
                                    fontSize="11"
                                    fontWeight="bold"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 + i * 0.07 }}
                                >
                                    {data.actual.toFixed(2)}
                                </motion.text>

                                {/* Category label BELOW the bars */}
                                {data.category === 'Road Signage and Furniture' ? (
                                    <>
                                        <text
                                            x={getX(i)}
                                            y={baseY + 10}
                                            textAnchor="middle"
                                            fill="rgba(255,255,255,0.75)"
                                            fontSize="9"
                                        >
                                            Road Signage
                                        </text>
                                        <text
                                            x={getX(i)}
                                            y={baseY + 21}
                                            textAnchor="middle"
                                            fill="rgba(255,255,255,0.75)"
                                            fontSize="9"
                                        >
                                            and Furniture
                                        </text>
                                    </>
                                ) : (
                                    <text
                                        x={getX(i)}
                                        y={baseY + 10}
                                        textAnchor="middle"
                                        fill="rgba(255,255,255,0.75)"
                                        fontSize="10"
                                    >
                                        {data.category}
                                    </text>
                                )}
                            </g>
                        );
                    })}

                    {/* Benchmark line - blue dashed */}
                    <motion.path
                        d={benchmarkPath}
                        fill="none"
                        stroke="#4a90d9"
                        strokeWidth="2.5"
                        strokeDasharray="8 5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.8, delay: 0.4, ease: 'easeInOut' }}
                    />

                    {/* Glow effect */}
                    <motion.path
                        d={benchmarkPath}
                        fill="none"
                        stroke="#4a90d9"
                        strokeWidth="8"
                        strokeDasharray="8 5"
                        opacity={0.2}
                        filter="blur(2px)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.8, delay: 0.4, ease: 'easeInOut' }}
                    />
                </svg>
            </div>
        </motion.div>
    );
}
