'use client';

import { motion } from 'framer-motion';
import { categories } from '@/data/dashboard';
import {
    Route,
    Signpost,
    BrickWall,
    Monitor,
    Banknote,
    TreeDeciduous,
    Bus
} from 'lucide-react';

// Different icons and colors for each category
const categoryStyles: Record<string, {
    icon: React.ComponentType<{ className?: string }>,
    color: string,
    bgColor: string,
    borderColor: string
}> = {
    'road': {
        icon: Route,
        color: 'text-blue-400',
        bgColor: 'bg-blue-500/15',
        borderColor: 'border-blue-500/30'
    },
    'signpost': {
        icon: Signpost,
        color: 'text-amber-400',
        bgColor: 'bg-amber-500/15',
        borderColor: 'border-amber-500/30'
    },
    'building': {
        icon: BrickWall,  // Bridge/Structure icon
        color: 'text-cyan-400',
        bgColor: 'bg-cyan-500/15',
        borderColor: 'border-cyan-500/30'
    },
    'radio-tower': {
        icon: Monitor,  // ATMS - monitoring system
        color: 'text-purple-400',
        bgColor: 'bg-purple-500/15',
        borderColor: 'border-purple-500/30'
    },
    'traffic-cone': {
        icon: Banknote,  // TMS - toll payment
        color: 'text-orange-400',
        bgColor: 'bg-orange-500/15',
        borderColor: 'border-orange-500/30'
    },
    'tree-deciduous': {
        icon: TreeDeciduous,
        color: 'text-emerald-400',
        bgColor: 'bg-emerald-500/15',
        borderColor: 'border-emerald-500/30'
    },
    'warehouse': {
        icon: Bus,  // Project Facilities - Bus bay/Truck lay
        color: 'text-pink-400',
        bgColor: 'bg-pink-500/15',
        borderColor: 'border-pink-500/30'
    }
};

export function CategoriesSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="glass-card p-4"
        >
            <div className="mb-3">
                <h3 className="text-sm font-semibold text-white/90">Monitoring Categories</h3>
            </div>

            <div className="grid grid-cols-7 gap-3">
                {categories.map((category, index) => {
                    const style = categoryStyles[category.icon] || categoryStyles['road'];
                    const IconComponent = style.icon;

                    return (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.08, type: 'spring', stiffness: 100 }}
                            whileHover={{
                                scale: 1.08,
                                y: -4,
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.95 }}
                            className={`
                                flex flex-col items-center gap-2 p-3 rounded-xl 
                                bg-gradient-to-br from-white/5 to-transparent 
                                border ${style.borderColor}
                                hover:from-white/10 hover:to-white/5
                                transition-all cursor-pointer group
                            `}
                        >
                            <motion.div
                                className={`p-3 rounded-xl ${style.bgColor} border ${style.borderColor} group-hover:scale-110 transition-transform`}
                                animate={{
                                    boxShadow: [
                                        '0 0 0 0 rgba(255,255,255,0)',
                                        '0 0 15px 2px rgba(255,255,255,0.1)',
                                        '0 0 0 0 rgba(255,255,255,0)'
                                    ]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: index * 0.3
                                }}
                            >
                                {IconComponent && (
                                    <IconComponent className={`w-5 h-5 ${style.color} group-hover:scale-110 transition-transform`} />
                                )}
                            </motion.div>
                            <span className="text-[10px] text-center text-white/70 group-hover:text-white transition-colors font-medium leading-tight">
                                {category.name}
                            </span>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
}
