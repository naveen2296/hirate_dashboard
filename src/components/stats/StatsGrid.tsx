'use client';

import { motion } from 'framer-motion';
import { statsData } from '@/data/dashboard';
import {
    Monitor,
    Calendar,
    Percent,
    AlertTriangle,
    Star
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
    'monitor': <Monitor className="w-5 h-5" />,
    'calendar': <Calendar className="w-5 h-5" />,
    'percent': <Percent className="w-5 h-5" />,
    'alert-triangle': <AlertTriangle className="w-5 h-5" />,
    'star': <Star className="w-5 h-5" />,
};

const colorMap: Record<string, { gradient: string; glow: string }> = {
    'green': { gradient: 'from-green-500 to-emerald-600', glow: 'rgba(34, 197, 94, 0.3)' },
    'blue': { gradient: 'from-blue-500 to-indigo-600', glow: 'rgba(59, 130, 246, 0.3)' },
    'purple': { gradient: 'from-purple-500 to-violet-600', glow: 'rgba(168, 85, 247, 0.3)' },
    'orange': { gradient: 'from-orange-500 to-amber-600', glow: 'rgba(249, 115, 22, 0.3)' },
    'cyan': { gradient: 'from-cyan-500 to-teal-600', glow: 'rgba(6, 182, 212, 0.3)' },
    'pink': { gradient: 'from-pink-500 to-rose-600', glow: 'rgba(236, 72, 153, 0.3)' },
};

export function StatsGrid() {
    return (
        <div className="grid grid-cols-5 gap-4">
            {statsData.map((stat, index) => {
                const colors = colorMap[stat.color] || colorMap['blue'];

                return (
                    <motion.div
                        key={stat.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="glass-card p-4 relative overflow-hidden"
                    >
                        {/* Glow effect */}
                        <div
                            className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-30"
                            style={{ background: colors.glow }}
                        />

                        <div className="relative z-10">
                            <div className="flex items-start justify-between mb-3">
                                <div className={`p-2 rounded-lg bg-gradient-to-br ${colors.gradient}`}>
                                    {iconMap[stat.icon]}
                                </div>
                                {stat.trend && (
                                    <span className={`text-xs font-medium ${stat.trend.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                                        {stat.trend.isPositive ? '↑' : '↓'} {stat.trend.value}%
                                    </span>
                                )}
                            </div>

                            <div>
                                <h3 className="text-xs font-medium text-white/60 mb-1">{stat.title}</h3>
                                <p className="text-2xl font-bold text-white">
                                    {stat.value}
                                    {stat.subtitle && (
                                        <span className="text-xs font-normal text-white/50 ml-1">
                                            {stat.subtitle}
                                        </span>
                                    )}
                                </p>
                                <p className="text-xs text-white/50 mt-1 line-clamp-2">{stat.description}</p>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
