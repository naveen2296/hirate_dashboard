'use client';

import { motion } from 'framer-motion';
import { projectMarkers } from '@/data/dashboard';
import { TrendingUp, TrendingDown, Trophy } from 'lucide-react';

// Grade based on cumulative rating
const getGrade = (cumRating: number): 'E' | 'A' | 'B' | 'C' => {
    if (cumRating >= 9.25) return 'E';
    if (cumRating >= 9.0) return 'A';
    if (cumRating >= 8.75) return 'B';
    return 'C';
};

const gradeStyles = {
    E: { bg: 'bg-gradient-to-r from-emerald-500 to-cyan-500', text: 'text-emerald-400', border: 'border-emerald-500/30' },
    A: { bg: 'bg-gradient-to-r from-green-400 to-green-500', text: 'text-green-400', border: 'border-green-500/30' },
    B: { bg: 'bg-gradient-to-r from-amber-400 to-orange-500', text: 'text-amber-400', border: 'border-amber-500/30' },
    C: { bg: 'bg-gradient-to-r from-orange-500 to-red-500', text: 'text-red-400', border: 'border-red-500/30' }
};

export function PyramidRankings() {
    // Sort projects by cumulative rating (prevRating) descending
    const sortedProjects = [...projectMarkers]
        .map(p => ({
            ...p,
            grade: getGrade(p.prevRating)
        }))
        .sort((a, b) => b.prevRating - a.prevRating);

    // Find min/max for progress bar scaling
    const minRating = 5;
    const maxRating = 10.0;
    const getProgressWidth = (rating: number) => ((rating - minRating) / (maxRating - minRating)) * 100;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-3 h-full relative flex flex-col"
        >
            {/* Header with legend on right */}
            <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    <h3 className="text-sm font-semibold text-white/90">Performance Rankings</h3>
                </div>

                {/* Legend - Two rows on right side */}
                <div className="flex flex-col gap-0.5 text-[10px] font-bold">
                    <div className="flex gap-1.5">
                        <div className="flex items-center gap-0.5">
                            <div className={`w-2 h-2 rounded ${gradeStyles.E.bg}`} />
                            <span className={gradeStyles.E.text}>E:≥9.25</span>
                        </div>
                        <div className="flex items-center gap-0.5">
                            <div className={`w-2 h-2 rounded ${gradeStyles.A.bg}`} />
                            <span className={gradeStyles.A.text}>A:9.0-9.25</span>
                        </div>
                    </div>
                    <div className="flex gap-1.5">
                        <div className="flex items-center gap-0.5">
                            <div className={`w-2 h-2 rounded ${gradeStyles.B.bg}`} />
                            <span className={gradeStyles.B.text}>B:8.75-9.0</span>
                        </div>
                        <div className="flex items-center gap-0.5">
                            <div className={`w-2 h-2 rounded ${gradeStyles.C.bg}`} />
                            <span className={gradeStyles.C.text}>C:&lt;8.75</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scrollable Rankings List - Fixed height for exactly 9 projects */}
            <div className="max-h-[350px] overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                {sortedProjects.map((project, index) => {
                    const isRise = project.rating > project.prevRating;
                    const grade = project.grade;

                    return (
                        <motion.div
                            key={project.code}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + index * 0.02 }}
                            className="relative p-2 rounded-lg border bg-white/5 border-white/5"
                        >
                            <div className="flex items-center gap-2">
                                {/* Rank Badge */}
                                <div className={`
                                    w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0
                                    ${index === 0 ? 'bg-amber-500 text-black' :
                                        index === 1 ? 'bg-gray-300 text-black' :
                                            index === 2 ? 'bg-amber-700 text-white' :
                                                'bg-white/10 text-white/60'}
                                `}>
                                    {index + 1}
                                </div>

                                {/* Project Info - Fixed width progress bar */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-1">
                                        <span className="text-[11px] font-bold text-white">{project.code}</span>
                                        <span className={`text-[8px] px-1 py-0.5 rounded ${gradeStyles[grade].bg} font-bold`}>
                                            {grade}
                                        </span>
                                        {isRise ? (
                                            <TrendingUp className="w-3 h-3 text-green-400" />
                                        ) : (
                                            <TrendingDown className="w-3 h-3 text-red-400" />
                                        )}
                                    </div>

                                    {/* Progress Bar - Full width */}
                                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden mt-0.5">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${getProgressWidth(project.prevRating)}%` }}
                                            transition={{ delay: 0.3 + index * 0.02, duration: 0.5 }}
                                            className={`h-full rounded-full ${gradeStyles[grade].bg}`}
                                        />
                                    </div>
                                </div>

                                {/* Ratings - Fixed width columns */}
                                <div className="flex items-center gap-4 flex-shrink-0">
                                    <div className="text-right w-16">
                                        {index === 0 && <div className="text-white/60 text-[9px]">This Month</div>}
                                        <div className={`font-bold text-[12px] ${isRise ? 'text-green-400' : 'text-red-400'}`}>
                                            {project.rating.toFixed(2)}
                                        </div>
                                    </div>
                                    <div className="text-right w-16">
                                        {index === 0 && <div className="text-white/60 text-[9px]">Cumulative</div>}
                                        <div className="font-bold text-[12px] text-white">
                                            {project.prevRating.toFixed(2)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
}
