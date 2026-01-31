'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

// Data matching reference image
const chartData = [
    { month: 'Sep 2025', CC: 9.43, FC: 9.08, PC: 9.06 },
    { month: 'Oct 2025', CC: 9.48, FC: 9.04, PC: 9.13 },
    { month: 'Nov 2025', CC: 9.58, FC: 9.23, PC: 9.22 },
    { month: 'Dec 2025', CC: 9.66, FC: 9.21, PC: 9.43 }
];

export function ConditionChart() {
    const minY = 8.9;
    const maxY = 9.8;
    const chartHeight = 160;
    const chartWidth = 300;
    const paddingX = 35;
    const paddingTop = 25;
    const paddingBottom = 30;

    const getY = (value: number) => {
        return paddingTop + ((maxY - value) / (maxY - minY)) * chartHeight;
    };

    const getX = (index: number) => {
        const usableWidth = chartWidth - (paddingX * 2);
        return paddingX + (index / (chartData.length - 1)) * usableWidth;
    };

    const paths = useMemo(() => {
        const ccPoints = chartData.map((d, i) => `${getX(i)},${getY(d.CC)}`);
        const fcPoints = chartData.map((d, i) => `${getX(i)},${getY(d.FC)}`);
        const pcPoints = chartData.map((d, i) => `${getX(i)},${getY(d.PC)}`);

        return {
            cc: `M ${ccPoints.join(' L ')}`,
            fc: `M ${fcPoints.join(' L ')}`,
            pc: `M ${pcPoints.join(' L ')}`,
            ccArea: `M ${paddingX},${paddingTop + chartHeight} L ${ccPoints.join(' L ')} L ${chartWidth - paddingX},${paddingTop + chartHeight} Z`,
            fcArea: `M ${paddingX},${paddingTop + chartHeight} L ${fcPoints.join(' L ')} L ${chartWidth - paddingX},${paddingTop + chartHeight} Z`,
            pcArea: `M ${paddingX},${paddingTop + chartHeight} L ${pcPoints.join(' L ')} L ${chartWidth - paddingX},${paddingTop + chartHeight} Z`
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-3 h-full"
        >
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-white/90">Condition Rating</h3>
                <div className="flex items-center gap-2 text-xs">
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-white/60">CC</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                        <span className="text-white/60">FC</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-purple-500" />
                        <span className="text-white/60">PC</span>
                    </div>
                </div>
            </div>

            <div className="h-[200px]">
                <svg
                    viewBox={`0 0 ${chartWidth} ${paddingTop + chartHeight + paddingBottom}`}
                    className="w-full h-full"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <defs>
                        <linearGradient id="ccFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.1" />
                        </linearGradient>
                        <linearGradient id="fcFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.05" />
                        </linearGradient>
                        <linearGradient id="pcFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.05" />
                        </linearGradient>
                    </defs>

                    {/* Area fills */}
                    <motion.path d={paths.ccArea} fill="url(#ccFill)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} />
                    <motion.path d={paths.fcArea} fill="url(#fcFill)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }} />
                    <motion.path d={paths.pcArea} fill="url(#pcFill)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} />

                    {/* Lines */}
                    <motion.path d={paths.cc} fill="none" stroke="#22c55e" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2 }} />
                    <motion.path d={paths.fc} fill="none" stroke="#f59e0b" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.1 }} />
                    <motion.path d={paths.pc} fill="none" stroke="#a855f7" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.2 }} />

                    {/* Labels */}
                    {chartData.map((data, i) => {
                        const x = getX(i);
                        return (
                            <g key={data.month}>
                                {/* CC Label - ABOVE */}
                                <motion.text x={x} y={getY(data.CC) - 8} textAnchor="middle" fill="#22c55e" fontSize="12" fontWeight="bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 + i * 0.1 }}>
                                    {data.CC}
                                </motion.text>
                                {/* FC Label - BELOW */}
                                <motion.text x={x} y={getY(data.FC) + 16} textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 + i * 0.1 }}>
                                    {data.FC}
                                </motion.text>
                                {/* PC Label - ABOVE */}
                                <motion.text x={x} y={getY(data.PC) - 8} textAnchor="middle" fill="#a855f7" fontSize="12" fontWeight="bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 + i * 0.1 }}>
                                    {data.PC}
                                </motion.text>
                                {/* X-axis */}
                                <text x={x} y={paddingTop + chartHeight + 18} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10">
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
