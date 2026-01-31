'use client';

import { motion } from 'framer-motion';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell
} from 'recharts';
import { tarCountData } from '@/data/dashboard';

export function TARCountChart() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="glass-card p-4 h-full"
        >
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h3 className="text-sm font-semibold text-white/90">TAR Count by Rating</h3>
                    <p className="text-xs text-white/50">Project count per rating level</p>
                </div>
                <div className="text-right">
                    <span className="text-lg font-bold text-white">22</span>
                    <span className="text-xs text-white/50 ml-1">Total</span>
                </div>
            </div>

            <div className="h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={tarCountData} layout="vertical" barSize={20}>
                        <XAxis
                            type="number"
                            stroke="rgba(255,255,255,0.3)"
                            fontSize={11}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            dataKey="rating"
                            type="category"
                            stroke="rgba(255,255,255,0.3)"
                            fontSize={11}
                            tickLine={false}
                            axisLine={false}
                            width={30}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(20, 20, 30, 0.95)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                fontSize: '12px'
                            }}
                            cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                        />
                        <Bar
                            dataKey="count"
                            name="Projects"
                            radius={[0, 4, 4, 0]}
                            animationDuration={1500}
                            animationEasing="ease-out"
                        >
                            {tarCountData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-3 mt-2 pt-2 border-t border-white/5">
                <div className="flex items-center gap-1 text-xs">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-white/60">Excellent (10)</span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span className="text-white/60">Good (8-9)</span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="text-white/60">Needs Improvement (≤7)</span>
                </div>
            </div>
        </motion.div>
    );
}
