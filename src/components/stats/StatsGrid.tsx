'use client';

import { motion } from 'framer-motion';
import { statsData } from '@/data/dashboard';
import {
    Monitor,
    Calendar,
    Percent,
    AlertTriangle,
    Star,
    TrendingUp,
    TrendingDown
} from 'lucide-react';

// Color schemes matching top bar accent
const colorMap: Record<string, { accent: string; iconBg: string; iconColor: string }> = {
    'orange': { accent: '#f97316', iconBg: 'rgba(249, 115, 22, 0.15)', iconColor: '#f97316' },
    'blue': { accent: '#3b82f6', iconBg: 'rgba(59, 130, 246, 0.15)', iconColor: '#3b82f6' },
    'cyan': { accent: '#14b8a6', iconBg: 'rgba(20, 184, 166, 0.15)', iconColor: '#14b8a6' },
    'green': { accent: '#22c55e', iconBg: 'rgba(34, 197, 94, 0.15)', iconColor: '#22c55e' },
    'purple': { accent: '#a855f7', iconBg: 'rgba(168, 85, 247, 0.15)', iconColor: '#a855f7' },
    'pink': { accent: '#ec4899', iconBg: 'rgba(236, 72, 153, 0.15)', iconColor: '#ec4899' },
};

export function StatsGrid() {
    return (
        <section className="px-6 py-2 overflow-visible">
            <div className="grid grid-cols-5 gap-3 overflow-visible">
                {statsData.map((stat, index) => {
                    const colors = colorMap[stat.color] || colorMap['blue'];

                    // Dynamic icon component
                    const IconComponent = {
                        'monitor': Monitor,
                        'calendar': Calendar,
                        'percent': Percent,
                        'alert-triangle': AlertTriangle,
                        'star': Star,
                    }[stat.icon] || Monitor;

                    return (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.08 }}
                            className="glass-card relative overflow-visible"
                        >
                            {/* Top accent bar */}
                            <div
                                className="absolute top-0 left-0 right-0 h-1"
                                style={{ backgroundColor: colors.accent }}
                            />

                            <div className="p-4 pt-5">
                                {/* Icon and Trend Row */}
                                <div className="flex items-start justify-between mb-3">
                                    {/* Icon with matching color */}
                                    <div
                                        className="p-2.5 rounded-lg"
                                        style={{ backgroundColor: colors.iconBg }}
                                    >
                                        <IconComponent
                                            className="w-5 h-5"
                                            style={{ color: colors.iconColor }}
                                        />
                                    </div>

                                    {/* Trend indicator */}
                                    {stat.trend && (
                                        <div className={`flex items-center gap-1 text-xs font-medium ${stat.trend.isPositive ? 'text-green-400' : 'text-red-400'
                                            }`}>
                                            {stat.trend.isPositive ? (
                                                <TrendingUp className="w-3 h-3" />
                                            ) : (
                                                <TrendingDown className="w-3 h-3" />
                                            )}
                                            <span>{stat.trend.value > 0 ? '+' : ''}{stat.trend.value}%</span>
                                        </div>
                                    )}
                                </div>

                                {/* Value */}
                                <div className="mb-1">
                                    <span className="text-2xl font-bold text-white">
                                        {stat.value}
                                    </span>
                                    {stat.subtitle && (
                                        <span className="text-xs font-normal text-white/50 ml-1.5">
                                            {stat.subtitle}
                                        </span>
                                    )}
                                </div>

                                {/* Title */}
                                <h3 className="text-sm font-medium text-white/80 mb-1.5">{stat.title}</h3>

                                {/* Description */}
                                <p className="text-[11px] text-white/45 leading-relaxed line-clamp-2">
                                    {stat.description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
