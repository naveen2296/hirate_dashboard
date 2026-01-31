'use client';

import { motion } from 'framer-motion';
import { heatmapData } from '@/data/dashboard';

export function PerformanceHeatmap() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-3 h-full overflow-hidden flex flex-col"
        >
            <div className="mb-2">
                <h3 className="text-sm font-semibold text-white/90">Performance Heatmap</h3>
                <p className="text-xs text-white/50">Parameter-wise Ratings</p>
            </div>

            <div className="flex-1 flex flex-col gap-1 overflow-auto">
                {/* Top Performers (9.5+) */}
                <div>
                    <h4 className="text-[9px] font-medium text-green-400 mb-1 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        Top Performers (9.5+)
                    </h4>
                    <div className="grid grid-cols-4 gap-1">
                        {heatmapData.topPerformers.map((item) => (
                            <div
                                key={item.name}
                                className="px-1 py-1 rounded bg-green-500/90"
                                title={`${item.name}: ${item.value}`}
                            >
                                <p className="text-[7px] font-medium text-white truncate leading-none">
                                    {item.name}
                                </p>
                                <p className="text-[8px] font-bold text-white/90 leading-none mt-0.5">
                                    {item.value.toFixed(2)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* On Track (9.0-9.5) */}
                <div>
                    <h4 className="text-[9px] font-medium text-lime-400 mb-1 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime-500"></span>
                        On Track (9.0-9.5)
                    </h4>
                    <div className="grid grid-cols-4 gap-1">
                        {heatmapData.onTrack.map((item, idx) => (
                            <div
                                key={`${item.name}-${idx}`}
                                className="px-1 py-1 rounded bg-lime-500/90"
                                title={`${item.name}: ${item.value}`}
                            >
                                <p className="text-[7px] font-medium text-gray-900 truncate leading-none">
                                    {item.name}
                                </p>
                                <p className="text-[8px] font-bold text-gray-900/80 leading-none mt-0.5">
                                    {item.value.toFixed(2)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Needs Attention (<9.0) */}
                <div>
                    <h4 className="text-[9px] font-medium text-orange-400 mb-1 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                        Needs Attention (&lt;9.0)
                    </h4>
                    <div className="grid grid-cols-4 gap-1">
                        {heatmapData.needsAttention.map((item, idx) => (
                            <div
                                key={`${item.name}-${idx}`}
                                className="px-1 py-1 rounded"
                                style={{ backgroundColor: item.value < 7 ? 'rgba(239, 68, 68, 0.95)' : 'rgba(249, 115, 22, 0.95)' }}
                                title={`${item.name}: ${item.value}`}
                            >
                                <p className="text-[7px] font-medium text-white truncate leading-none">
                                    {item.name}
                                </p>
                                <p className="text-[8px] font-bold text-white/90 leading-none mt-0.5">
                                    {item.value.toFixed(2)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
