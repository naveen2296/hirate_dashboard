'use client';

import { motion } from 'framer-motion';
import { insightsData } from '@/data/dashboard';
import { TrendingUp, BarChart2, Layers, Activity, Award } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
    'trending-up': <TrendingUp className="w-5 h-5" />,
    'bar-chart-2': <BarChart2 className="w-5 h-5" />,
    'layers': <Layers className="w-5 h-5" />,
    'activity': <Activity className="w-5 h-5" />,
    'award': <Award className="w-5 h-5" />,
};

export function InsightsSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="glass-card p-4"
        >
            <h3 className="text-sm font-semibold text-white/90 mb-3">Key Insights</h3>

            <div className="grid grid-cols-5 gap-4">
                {insightsData.map((insight, index) => (
                    <motion.div
                        key={insight.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-green-500/30 transition-all"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="p-1.5 rounded-lg bg-green-500/20 text-green-400">
                                {iconMap[insight.icon]}
                            </div>
                            <h4 className="text-xs font-medium text-white/90">{insight.title}</h4>
                        </div>
                        <p className="text-[10px] text-white/60 leading-relaxed">
                            {insight.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
