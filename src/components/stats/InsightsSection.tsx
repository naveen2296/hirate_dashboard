'use client';

import { motion } from 'framer-motion';
import { insightsData } from '@/data/dashboard';
import {
    TrendingUp,
    BarChart2,
    Layers,
    Activity,
    Award
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    'trending-up': TrendingUp,
    'bar-chart-2': BarChart2,
    'layers': Layers,
    'activity': Activity,
    'award': Award
};

export function InsightsSection() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-3 h-full"
        >
            <div className="flex items-center justify-between mb-2">
                <div>
                    <h3 className="text-xs font-semibold text-white/90">Key Insights</h3>
                    <p className="text-[8px] text-white/50">Dashboard highlights</p>
                </div>
            </div>

            {/* Compact guidance box */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-2 p-2 rounded-lg bg-gradient-to-br from-white/5 to-transparent border border-white/10"
            >
                <div className="space-y-0.5 text-[8px]">
                    <p className="text-white/70"><span className="text-white font-medium">Guidance:</span> Direct support to close critical issues.</p>
                    <p className="text-white/70"><span className="text-white font-medium">Leadership:</span> Active senior involvement in reviews.</p>
                    <p className="text-white/70"><span className="text-white font-medium">Follow-ups:</span> Regular progress discussions.</p>
                </div>
            </motion.div>

            {/* Compact insights grid */}
            <div className="grid grid-cols-1 gap-1.5">
                {insightsData.map((insight, index) => {
                    const IconComponent = iconMap[insight.icon];

                    return (
                        <motion.div
                            key={insight.id}
                            initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                            whileHover={{ scale: 1.02, x: 4 }}
                            className="flex items-center gap-2 p-1.5 rounded-md bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 cursor-pointer group"
                        >
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                                <span className="text-[8px] font-bold text-green-400">{insight.id}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1">
                                    {IconComponent && <IconComponent className="w-3 h-3 text-green-400" />}
                                    <h4 className="text-[9px] font-medium text-white/90 group-hover:text-green-400 transition-colors truncate">
                                        {insight.title}
                                    </h4>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
}
