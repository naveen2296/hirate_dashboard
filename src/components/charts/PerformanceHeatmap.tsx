'use client';

import { motion } from 'framer-motion';
import { heatmapData } from '@/data/dashboard';
import { useState } from 'react';
import { Activity, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

// Combine all data with category info
const allParameters = [
    ...heatmapData.topPerformers.map(p => ({ ...p, category: 'top' as const })),
    ...heatmapData.onTrack.map(p => ({ ...p, category: 'onTrack' as const })),
    ...heatmapData.needsAttention.map(p => ({ ...p, category: 'attention' as const }))
];

// Get color based on value - smooth gradient
const getColor = (value: number) => {
    if (value >= 9.5) return 'from-emerald-500 to-green-500';
    if (value >= 9.0) return 'from-green-400 to-lime-400';
    if (value >= 8.5) return 'from-amber-400 to-orange-400';
    if (value >= 7.0) return 'from-orange-500 to-red-400';
    return 'from-red-500 to-red-600';
};

const getBgColor = (value: number) => {
    if (value >= 9.5) return 'bg-gradient-to-br from-emerald-500/90 to-green-500/90';
    if (value >= 9.0) return 'bg-gradient-to-br from-green-400/90 to-lime-400/90';
    if (value >= 8.5) return 'bg-gradient-to-br from-amber-400/90 to-orange-400/90';
    if (value >= 7.0) return 'bg-gradient-to-br from-orange-500/90 to-red-400/90';
    return 'bg-gradient-to-br from-red-500/90 to-red-600/90';
};

const getTextColor = (value: number) => {
    if (value >= 9.0) return 'text-gray-900';
    return 'text-white';
};

export function PerformanceHeatmap() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [activeFilter, setActiveFilter] = useState<'all' | 'top' | 'onTrack' | 'attention'>('all');

    const filteredData = activeFilter === 'all'
        ? allParameters
        : allParameters.filter(p => p.category === activeFilter);

    // Summary stats
    const avgRating = (allParameters.reduce((sum, p) => sum + p.value, 0) / allParameters.length).toFixed(2);
    const topCount = heatmapData.topPerformers.length;
    const attentionCount = heatmapData.needsAttention.length;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-3 h-full overflow-hidden flex flex-col"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    <div>
                        <h3 className="text-sm font-semibold text-white/90">Performance Heatmap</h3>
                        <p className="text-[8px] text-white/50">{allParameters.length} Parameters</p>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="flex gap-2 text-[9px]">
                    <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-500/20">
                        <TrendingUp className="w-2.5 h-2.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">{topCount}</span>
                    </div>
                    <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-orange-500/20">
                        <AlertTriangle className="w-2.5 h-2.5 text-orange-400" />
                        <span className="text-orange-400 font-bold">{attentionCount}</span>
                    </div>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-1 mb-2">
                {[
                    { key: 'all', label: 'All', count: allParameters.length },
                    { key: 'top', label: '9.5+', count: topCount },
                    { key: 'onTrack', label: '9.0-9.5', count: heatmapData.onTrack.length },
                    { key: 'attention', label: '<9.0', count: attentionCount }
                ].map(tab => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveFilter(tab.key as typeof activeFilter)}
                        className={`
                            px-2 py-0.5 rounded text-[8px] font-medium transition-all
                            ${activeFilter === tab.key
                                ? 'bg-cyan-500/30 text-cyan-300 border border-cyan-500/50'
                                : 'bg-white/5 text-white/50 hover:bg-white/10 border border-transparent'}
                        `}
                    >
                        {tab.label} ({tab.count})
                    </button>
                ))}
            </div>

            {/* Color Legend - with category legend */}
            <div className="flex items-center justify-between mb-2 text-[7px] flex-wrap gap-1">
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                        <div className="w-10 h-1.5 rounded-full bg-gradient-to-r from-red-500 via-amber-400 via-lime-400 to-emerald-500" />
                        <span className="text-white/40">Low→High</span>
                    </div>
                    <span className="text-white/30">|</span>
                    <span className="text-emerald-400">● Excellent: 9.5+</span>
                    <span className="text-lime-400">● Good: 9.0-9.5</span>
                    <span className="text-orange-400">● Attention: &lt;9.0</span>
                </div>
                <span className="text-white/40">Avg: <span className="text-cyan-400 font-bold">{avgRating}</span></span>
            </div>

            {/* Heatmap Grid */}
            <div className="flex-1 overflow-auto custom-scrollbar">
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-1">
                    {filteredData.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.015, duration: 0.2 }}
                            onMouseEnter={() => setHoveredItem(item.name)}
                            onMouseLeave={() => setHoveredItem(null)}
                            className={`
                                relative p-1.5 rounded cursor-pointer transition-all duration-200
                                ${getBgColor(item.value)}
                                ${hoveredItem === item.name ? 'scale-110 z-10 shadow-lg ring-2 ring-white/30' : 'hover:scale-105'}
                            `}
                        >
                            {/* Parameter Name */}
                            <p className={`text-[7px] font-bold truncate leading-tight ${getTextColor(item.value)}`}>
                                {item.name}
                            </p>

                            {/* Value */}
                            <p className={`text-[7px] font-bold mt-0.5 ${getTextColor(item.value)}`}>
                                {item.value.toFixed(2)}
                            </p>

                            {/* Hover Tooltip */}
                            {hoveredItem === item.name && (
                                <motion.div
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 px-2 py-1 rounded bg-gray-900/95 backdrop-blur border border-white/20 whitespace-nowrap shadow-xl"
                                >
                                    <p className="text-[9px] text-white font-medium">{item.name}</p>
                                    <p className="text-[8px] text-white/70">Rating: <span className="text-cyan-400 font-bold">{item.value.toFixed(2)}</span></p>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>


        </motion.div>
    );
}
