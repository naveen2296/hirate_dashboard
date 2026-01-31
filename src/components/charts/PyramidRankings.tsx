'use client';

import { motion } from 'framer-motion';
import { pyramidRankings } from '@/data/dashboard';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useState } from 'react';

const gradeColors = {
    E: 'bg-gradient-to-r from-green-500 to-cyan-500 text-white',
    A: 'bg-gradient-to-r from-green-400/80 to-green-500/80 text-white',
    B: 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white',
    C: 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
};

const gradeBorders = {
    E: 'border-green-400/50',
    A: 'border-green-400/30',
    B: 'border-yellow-400/30',
    C: 'border-red-400/30'
};

interface TooltipData {
    code: string;
    rating: number;
    prevRating: number;
    grade: 'E' | 'A' | 'B' | 'C';
}

export function PyramidRankings() {
    const [activeTooltip, setActiveTooltip] = useState<TooltipData | null>(null);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-3 h-full"
        >
            <div className="flex items-center justify-between mb-2">
                <div>
                    <h3 className="text-sm font-semibold text-white/90">Performance Rankings</h3>
                    <p className="text-[10px] text-white/50">Pyramid view by project rating</p>
                </div>
                <div className="flex gap-2">
                    {(['E', 'A', 'B', 'C'] as const).map((grade) => (
                        <div key={grade} className="flex items-center gap-0.5 text-[9px]">
                            <div className={`w-2 h-2 rounded ${gradeColors[grade]}`} />
                            <span className="text-white/60">{grade}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-1 py-1">
                {pyramidRankings.map((row, rowIndex) => (
                    <motion.div
                        key={rowIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.4 + rowIndex * 0.08,
                            duration: 0.3,
                            type: 'spring'
                        }}
                        className="flex justify-center gap-1"
                    >
                        {row.map((project) => {
                            const isRise = project.rating > project.prevRating;

                            return (
                                <motion.div
                                    key={project.code}
                                    whileHover={{ scale: 1.08, y: -1 }}
                                    onMouseEnter={() => setActiveTooltip(project)}
                                    onMouseLeave={() => setActiveTooltip(null)}
                                    className={`px-2 py-1 rounded ${gradeColors[project.grade]} border ${gradeBorders[project.grade]} cursor-pointer min-w-[52px] text-center`}
                                >
                                    <div className="flex items-center justify-center gap-0.5">
                                        <span className="font-semibold text-[9px]">{project.code}</span>
                                        {isRise ? (
                                            <TrendingUp className="w-2.5 h-2.5" />
                                        ) : (
                                            <TrendingDown className="w-2.5 h-2.5" />
                                        )}
                                    </div>
                                    <div className="text-[8px] opacity-80">
                                        {project.rating.toFixed(1)}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                ))}
            </div>

            {/* Grade legend - Compact */}
            <div className="flex justify-center gap-3 pt-2 border-t border-white/5 text-[9px] flex-wrap">
                <div>
                    <span className="text-green-400 font-medium">Excellence (E):</span>
                    <span className="text-white/50 ml-0.5">≥9.5</span>
                </div>
                <div>
                    <span className="text-green-300 font-medium">Grade A:</span>
                    <span className="text-white/50 ml-0.5">9.0-9.4</span>
                </div>
                <div>
                    <span className="text-yellow-400 font-medium">Grade B:</span>
                    <span className="text-white/50 ml-0.5">8.5-8.9</span>
                </div>
                <div>
                    <span className="text-red-400 font-medium">Grade C:</span>
                    <span className="text-white/50 ml-0.5">&lt;8.5</span>
                </div>
            </div>
        </motion.div>
    );
}
