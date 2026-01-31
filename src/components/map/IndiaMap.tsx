'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { projectMarkers } from '@/data/dashboard';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface TooltipData {
    code: string;
    name: string;
    rating: number;
    prevRating: number;
    status: 'rise' | 'fall';
    posX: number;
    posY: number;
}

// Project positions matched exactly to reference map (percentage-based)
const projectPositions: Record<string, { x: number; y: number; labelX: number; labelY: number; labelSide: 'left' | 'right' }> = {
    // North India - matching reference image exactly
    'WUPTL': { x: 39, y: 28, labelX: 48, labelY: 13, labelSide: 'right' },  // Uttarakhand - top center
    'DATRL': { x: 36, y: 33, labelX: 25, labelY: 24, labelSide: 'left' },    // Rajasthan - north west
    'KMTPL': { x: 60, y: 43, labelX: 65, labelY: 30, labelSide: 'right' },  // Assam - far east top

    // West India  
    'MBEL': { x: 38, y: 38, labelX: 10, labelY: 40, labelSide: 'left' },     // Gujarat - left side
    'JMTPL': { x: 35, y: 35, labelX: 10, labelY: 32, labelSide: 'left' },     // Gujarat West - far left

    // Central-North - UP/Bihar area
    'GAEPL': { x: 40, y: 32, labelX: 50, labelY: 30, labelSide: 'right' },  // UP area - center
    'FRHL': { x: 63, y: 45, labelX: 85, labelY: 40, labelSide: 'right' },   // Bihar - east
    'BFHL': { x: 62, y: 48, labelX: 85, labelY: 46, labelSide: 'right' },   // West Bengal - east

    // West Central - Maharashtra
    'BWHPL': { x: 33, y: 64, labelX: 20, labelY: 60, labelSide: 'left' },    // Maharashtra West
    'MSHP': { x: 30, y: 66, labelX: 20, labelY: 66, labelSide: 'left' },    // Maharashtra

    // Central-East - Chhattisgarh/Odisha
    'MHPL': { x: 42, y: 64, labelX: 63, labelY: 58, labelSide: 'right' },   // Chhattisgarh
    'SPPL': { x: 42, y: 67, labelX: 73, labelY: 61, labelSide: 'right' },   // Odisha

    // South Central - Telangana/AP
    'NDEPL': { x: 34, y: 75, labelX: 20, labelY: 73, labelSide: 'left' },    // Karnataka North
    'NAM': { x: 45, y: 70, labelX: 60, labelY: 66, labelSide: 'right' },  // Telangana
    'APEL': { x: 44, y: 74, labelX: 20, labelY: 80, labelSide: 'left' },     // AP West
    'THPL': { x: 43, y: 79, labelX: 54, labelY: 72, labelSide: 'right' },  // AP Center

    // South - Kerala/Tamil Nadu
    'WVEL': { x: 34, y: 85, labelX: 20, labelY: 86, labelSide: 'left' },    // Kerala
    'KETPL': { x: 40, y: 87, labelX: 20, labelY: 92, labelSide: 'left' },    // Kerala South
    'SIPL': { x: 42, y: 84, labelX: 56, labelY: 78, labelSide: 'right' },   // Tamil Nadu North
    'MKTPL': { x: 41, y: 86, labelX: 52, labelY: 84, labelSide: 'right' },  // Tamil Nadu
    'SMTPL': { x: 39, y: 90, labelX: 50, labelY: 90, labelSide: 'right' },  // Tamil Nadu South
    'NKTPL': { x: 39, y: 94, labelX: 48, labelY: 97, labelSide: 'right' },  // Tamil Nadu East
};

export function IndiaMap() {
    const [tooltip, setTooltip] = useState<TooltipData | null>(null);
    const [svgPaths, setSvgPaths] = useState<string>('');

    const riseCount = projectMarkers.filter(p => p.status === 'rise').length;
    const fallCount = projectMarkers.filter(p => p.status === 'fall').length;

    useEffect(() => {
        fetch('/india-map.svg')
            .then(res => res.text())
            .then(svg => {
                // Parse and filter out island territories
                const parser = new DOMParser();
                const doc = parser.parseFromString(svg, 'image/svg+xml');

                // Remove Andaman, Nicobar, and Lakshadweep groups
                const islandsToRemove = [
                    'Andaman_and_Nicobar_Islands_group',
                    'Lakshadweep_group',
                    'Andaman_and_Nicobar_Islands',
                    'Lakshadweep'
                ];

                islandsToRemove.forEach(id => {
                    const element = doc.getElementById(id);
                    if (element) element.remove();
                });

                // Extract all remaining path elements
                const paths = doc.querySelectorAll('path');
                let pathsHtml = '';
                paths.forEach(path => {
                    const d = path.getAttribute('d');
                    if (d) {
                        // Neutral gray outline with subtle fill
                        pathsHtml += `<path d="${d}" fill="rgba(100,116,139,0.1)" stroke="rgba(148,163,184,0.7)" stroke-width="1.5" />`;
                    }
                });
                setSvgPaths(pathsHtml);
            })
            .catch(() => setSvgPaths(''));
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-3 h-full relative overflow-hidden"
        >
            <div className="flex items-center justify-between mb-1">
                <div>
                    <h3 className="text-sm font-semibold text-white/90">Rise & Fall Map</h3>
                    <p className="text-xs text-white/50">This Month Rating vs Cumulative Rating</p>
                </div>
                <div className="flex gap-4 text-xs">
                    <div className="flex items-center gap-1">
                        <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[8px] border-b-green-500" />
                        <span className="text-white/70">Rise</span>
                        <span className="font-bold text-green-400">{riseCount}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-red-500" />
                        <span className="text-white/70">Fall</span>
                        <span className="font-bold text-red-400">{fallCount}</span>
                    </div>
                </div>
            </div>

            {/* Map Container */}
            <div className="relative w-full h-[340px]">
                {/* India Map SVG - bold borders */}
                <svg
                    viewBox="0 0 860 1021"
                    className="absolute inset-0 w-full h-full"
                    preserveAspectRatio="xMidYMid meet"
                    dangerouslySetInnerHTML={{ __html: svgPaths }}
                />

                {/* SVG for connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {projectMarkers.map((project) => {
                        const pos = projectPositions[project.code];
                        if (!pos) return null;

                        return (
                            <g key={`line-${project.code}`}>
                                <line
                                    x1={pos.x}
                                    y1={pos.y}
                                    x2={pos.labelX}
                                    y2={pos.labelY}
                                    stroke={project.status === 'rise' ? 'rgba(74,222,128,0.5)' : 'rgba(248,113,113,0.5)'}
                                    strokeWidth="0.12"
                                    strokeDasharray="0.4,0.2"
                                />
                            </g>
                        );
                    })}
                </svg>

                {/* Project Markers and Labels */}
                <div className="absolute inset-0">
                    {projectMarkers.map((project, index) => {
                        const pos = projectPositions[project.code];
                        if (!pos) return null;

                        return (
                            <motion.div
                                key={project.code}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 + index * 0.02 }}
                                className="absolute"
                                style={{ left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
                            >
                                {/* Small Triangle Marker with animation */}
                                <div
                                    className="absolute cursor-pointer"
                                    style={{
                                        left: `${pos.x}%`,
                                        top: `${pos.y}%`,
                                        transform: 'translate(-50%, -50%)',
                                        pointerEvents: 'auto'
                                    }}
                                    onMouseEnter={() => setTooltip({ ...project, posX: pos.x, posY: pos.y })}
                                    onMouseLeave={() => setTooltip(null)}
                                >
                                    <div
                                        className={`
                                            w-0 h-0 
                                            ${project.status === 'rise'
                                                ? 'border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-green-500 drop-shadow-[0_0_4px_rgba(34,197,94,0.8)]'
                                                : 'border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-red-500 drop-shadow-[0_0_4px_rgba(239,68,68,0.8)]'
                                            }
                                        `}
                                        style={{
                                            animation: `${project.status === 'rise' ? 'bounceUp' : 'bounceDown'} 2s ease-in-out infinite`,
                                            animationDelay: `${index * 0.1}s`
                                        }}
                                    />
                                </div>

                                {/* Label Box */}
                                <div
                                    className="absolute cursor-pointer"
                                    style={{
                                        left: `${pos.labelX}%`,
                                        top: `${pos.labelY}%`,
                                        transform: pos.labelSide === 'left' ? 'translate(-100%, -50%)' : 'translate(0%, -50%)',
                                        pointerEvents: 'auto'
                                    }}
                                    onMouseEnter={() => setTooltip({ ...project, posX: pos.labelX, posY: pos.labelY })}
                                    onMouseLeave={() => setTooltip(null)}
                                >
                                    <div className={`
                    px-1.5 py-0.5 rounded-sm border text-[7px] font-semibold whitespace-nowrap
                    ${project.status === 'rise'
                                            ? 'border-green-500/50 bg-green-500/10 text-green-400'
                                            : 'border-red-500/50 bg-red-500/10 text-red-400'
                                        }
                  `}>
                                        {project.code}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Tooltip - positioned near marker */}
                {tooltip && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute z-30 pointer-events-none"
                        style={{
                            left: `${tooltip.posX}%`,
                            top: `${Math.max(tooltip.posY - 12, 5)}%`,
                            transform: 'translate(-50%, -100%)'
                        }}
                    >
                        <div className="bg-gray-900/95 backdrop-blur-sm border border-white/20 rounded px-2 py-1.5 shadow-xl">
                            <div className="flex items-center gap-1 mb-1">
                                <span className={`text-[10px] font-bold ${tooltip.status === 'rise' ? 'text-green-400' : 'text-red-400'}`}>
                                    {tooltip.code}
                                </span>
                                {tooltip.status === 'rise' ? (
                                    <TrendingUp className="w-2.5 h-2.5 text-green-400" />
                                ) : (
                                    <TrendingDown className="w-2.5 h-2.5 text-red-400" />
                                )}
                            </div>
                            <div className="flex justify-between gap-3 text-[9px]">
                                <span className="text-white/60">This Month</span>
                                <span className={`font-semibold ${tooltip.status === 'rise' ? 'text-green-400' : 'text-red-400'}`}>
                                    {tooltip.rating.toFixed(2)}
                                </span>
                            </div>
                            <div className="flex justify-between gap-3 text-[9px]">
                                <span className="text-white/60">Cum Month</span>
                                <span className="text-white/80 font-semibold">
                                    {tooltip.prevRating.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>


        </motion.div>
    );
}
