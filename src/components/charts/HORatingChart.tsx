'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

// Data matching reference image
const chartData = [
    { month: 'Sept', rating: 8.88 },
    { month: 'Oct', rating: 8.92 },
    { month: 'Nov', rating: 9.00 },
    { month: 'Dec', rating: 8.88 }
];

export function HORatingChart() {
    const minY = 8.8;
    const maxY = 9.0;
    const chartHeight = 160;
    const chartWidth = 300;
    const paddingX = 35;
    const paddingTop = 25;
    const paddingBottom = 0;
    const baseline = 8.82;

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
            className="glass-card p-3 h-full"
        >
            <div className="mb-2">
                <h3 className="text-sm font-semibold text-white/90">Project HO Rating by Month</h3>
            </div>

            <div className="h-[200px]">
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

                    {/* Labels */}
                    {chartData.map((data, i) => {
                        const x = getX(i);
                        const y = getY(data.rating);

                        return (
                            <g key={data.month}>
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
                                {/* X-axis */}
                                <text x={x} y={paddingTop + chartHeight + 2} textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="12">
                                    {data.month}
                                </text>
                            </g>
                        );
                    })}
                </svg>
            </div>
        </motion.div>
    );
}
