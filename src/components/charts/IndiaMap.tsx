'use client';

import { motion } from 'framer-motion';
import { projectMarkers } from '@/data/dashboard';

export function IndiaMap() {
    return (
        <div className="relative w-full h-full">
            <h3 className="text-sm font-semibold text-white/90 mb-2">Rise & Fall Map</h3>

            <div className="relative w-full h-[280px]">
                {/* India Map SVG Background */}
                <svg viewBox="0 0 500 500" className="w-full h-full opacity-20">
                    <path
                        d="M250,50 L350,100 L400,200 L380,300 L320,380 L250,420 L180,380 L120,300 L100,200 L150,100 Z"
                        fill="none"
                        stroke="rgba(34, 197, 94, 0.5)"
                        strokeWidth="2"
                    />
                </svg>

                {/* Project Markers */}
                <div className="absolute inset-0">
                    {projectMarkers.slice(0, 10).map((marker, index) => (
                        <motion.div
                            key={marker.code}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className={`absolute w-3 h-3 rounded-full cursor-pointer ${marker.status === 'rise' ? 'bg-green-500' : 'bg-red-500'
                                }`}
                            style={{
                                left: `${(marker.x / 500) * 100}%`,
                                top: `${(marker.y / 450) * 100}%`,
                            }}
                            title={`${marker.code}: ${marker.rating}`}
                        >
                            <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[8px] text-white/70 whitespace-nowrap">
                                {marker.code}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Legend */}
                <div className="absolute bottom-0 left-0 flex gap-4 text-xs">
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-white/60">Rise</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <span className="text-white/60">Fall</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
