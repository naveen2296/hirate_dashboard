'use client';

import { motion } from 'framer-motion';
import { projectMarkers } from '@/data/dashboard';

export function IndiaMap() {
    return (
        <div className="relative w-full h-full">
            <h3 className="text-sm font-semibold text-white/90 mb-2">Rise & Fall Map</h3>
            <p className="text-[10px] text-white/50 mb-3">Project Performance Jan 2026</p>

            <div className="relative w-full h-[260px]">
                {/* India Map Background */}
                <svg
                    viewBox="0 0 500 500"
                    className="w-full h-full absolute inset-0"
                    style={{ opacity: 0.15 }}
                >
                    <image
                        href="/india-map.svg"
                        width="500"
                        height="500"
                        preserveAspectRatio="xMidYMid meet"
                    />
                </svg>

                {/* Project Markers */}
                <div className="absolute inset-0">
                    {projectMarkers.map((marker, index) => (
                        <motion.div
                            key={marker.code}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="absolute group cursor-pointer"
                            style={{
                                left: `${(marker.x / 500) * 100}%`,
                                top: `${(marker.y / 450) * 100}%`,
                            }}
                        >
                            {/* Marker dot */}
                            <div
                                className={`w-2.5 h-2.5 rounded-full border border-white/50 ${marker.status === 'rise'
                                    ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]'
                                    : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]'
                                    }`}
                            />

                            {/* Label on hover */}
                            <div className="absolute left-3 top-0 hidden group-hover:block z-20 bg-black/90 rounded px-2 py-1 whitespace-nowrap">
                                <p className="text-[10px] font-semibold text-white">{marker.code}</p>
                                <p className={`text-[9px] ${marker.status === 'rise' ? 'text-green-400' : 'text-red-400'}`}>
                                    {marker.rating} ({marker.status === 'rise' ? '+' : ''}{(marker.rating - marker.prevRating).toFixed(1)})
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Legend */}
                <div className="absolute bottom-0 left-0 flex gap-4 text-xs">
                    <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.5)]"></div>
                        <span className="text-white/60">Rise</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.5)]"></div>
                        <span className="text-white/60">Fall</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
