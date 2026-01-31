'use client';

import { motion } from 'framer-motion';
import { categories } from '@/data/dashboard';
import {
    Route,
    Signpost,
    Building2,
    Radio,
    TrafficCone,
    TreeDeciduous,
    Warehouse
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    'road': Route,
    'signpost': Signpost,
    'building': Building2,
    'radio-tower': Radio,
    'traffic-cone': TrafficCone,
    'tree-deciduous': TreeDeciduous,
    'warehouse': Warehouse
};

export function CategoriesSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="glass-card p-4"
        >
            <div className="mb-4">
                <h3 className="text-sm font-semibold text-white/90">Monitoring Categories</h3>
                <p className="text-xs text-white/50">Active inspection areas</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                {categories.map((category, index) => {
                    const IconComponent = iconMap[category.icon];

                    return (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + index * 0.05 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 0 20px rgba(34, 197, 94, 0.2)'
                            }}
                            className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-green-500/30 transition-all cursor-pointer group"
                        >
                            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                                {IconComponent && (
                                    <IconComponent className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors" />
                                )}
                            </div>
                            <span className="text-xs text-center text-white/70 group-hover:text-white transition-colors font-medium">
                                {category.name}
                            </span>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
}
