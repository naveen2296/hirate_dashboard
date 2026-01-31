'use client';

import { motion } from 'framer-motion';

// TAR Count data - waterfall style
const chartData = [
    { rating: '10', count: 117525 },
    { rating: '5', count: 7289 },
    { rating: '1', count: 5389 },
    { rating: 'Total', count: 130203, isTotal: true }
];

export function IssuesChart() {
    const chartHeight = 180;
    const chartWidth = 340;
    const paddingTop = 35;
    const paddingBottom = 25;
    const barWidth = 60;

    const maxCount = chartData[3].count; // Total is max
    const maxBarHeight = chartHeight - paddingTop - paddingBottom;
    const baseY = chartHeight - paddingBottom;

    // Calculate cumulative positions for waterfall
    const getBarHeight = (count: number) => {
        return (count / maxCount) * maxBarHeight;
    };

    const formatNumber = (num: number) => num.toLocaleString();

    // Calculate waterfall positions
    const bars = [];
    let runningY = baseY;

    // Rating 10 - starts from bottom
    const bar10Height = getBarHeight(chartData[0].count);
    bars.push({
        ...chartData[0],
        height: bar10Height,
        y: baseY - bar10Height,
        x: 30
    });

    // Rating 5 - stacks on top (floating)
    const bar5Height = getBarHeight(chartData[1].count);
    bars.push({
        ...chartData[1],
        height: bar5Height,
        y: bars[0].y - bar5Height - 2,
        x: 110
    });

    // Rating 1 - stacks further (floating)
    const bar1Height = getBarHeight(chartData[2].count);
    bars.push({
        ...chartData[2],
        height: bar1Height,
        y: bars[1].y - bar1Height - 2,
        x: 190
    });

    // Total - full height from bottom
    const totalHeight = getBarHeight(chartData[3].count);
    bars.push({
        ...chartData[3],
        height: totalHeight,
        y: baseY - totalHeight,
        x: 275
    });

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="glass-card p-4 h-full"
        >
            <h3 className="text-sm font-semibold text-white/90 mb-2">Issues Distribution</h3>

            <div className="h-[185px]">
                <svg
                    viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                    className="w-full h-full"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <defs>
                        {/* Orange gradient */}
                        <linearGradient id="waterfallOrange" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#fb923c" />
                            <stop offset="100%" stopColor="#ea580c" />
                        </linearGradient>
                        {/* Gray gradient */}
                        <linearGradient id="waterfallGray" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#cbd5e1" />
                            <stop offset="100%" stopColor="#94a3b8" />
                        </linearGradient>
                    </defs>

                    {/* Connector lines between bars */}
                    {/* Line from 10 to 5 */}
                    <motion.line
                        x1={bars[0].x + barWidth}
                        y1={bars[0].y}
                        x2={bars[1].x}
                        y2={bars[0].y}
                        stroke="rgba(255,255,255,0.3)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.8, duration: 0.3 }}
                    />
                    <motion.line
                        x1={bars[1].x}
                        y1={bars[0].y}
                        x2={bars[1].x}
                        y2={bars[1].y + bars[1].height}
                        stroke="rgba(255,255,255,0.3)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.9, duration: 0.2 }}
                    />

                    {/* Line from 5 to 1 */}
                    <motion.line
                        x1={bars[1].x + barWidth}
                        y1={bars[1].y}
                        x2={bars[2].x}
                        y2={bars[1].y}
                        stroke="rgba(255,255,255,0.3)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 1.0, duration: 0.3 }}
                    />
                    <motion.line
                        x1={bars[2].x}
                        y1={bars[1].y}
                        x2={bars[2].x}
                        y2={bars[2].y + bars[2].height}
                        stroke="rgba(255,255,255,0.3)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 1.1, duration: 0.2 }}
                    />

                    {/* Bars */}
                    {bars.map((bar, i) => (
                        <g key={bar.rating}>
                            {/* Bar */}
                            <motion.rect
                                x={bar.x}
                                y={bar.y}
                                width={barWidth}
                                height={bar.height}
                                rx={4}
                                ry={4}
                                fill={bar.isTotal ? 'url(#waterfallGray)' : 'url(#waterfallOrange)'}
                                initial={{ height: 0, y: baseY }}
                                animate={{ height: bar.height, y: bar.y }}
                                transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
                            />

                            {/* Value label above bar */}
                            <motion.text
                                x={bar.x + barWidth / 2}
                                y={bar.y - 6}
                                textAnchor="middle"
                                fill="white"
                                fontSize="11"
                                fontWeight="bold"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 + i * 0.15 }}
                            >
                                {formatNumber(bar.count)}
                            </motion.text>

                            {/* Rating label below bar */}
                            <text
                                x={bar.x + barWidth / 2}
                                y={baseY + 15}
                                textAnchor="middle"
                                fill="rgba(255,255,255,0.7)"
                                fontSize="12"
                                fontWeight="500"
                            >
                                {bar.rating}
                            </text>
                        </g>
                    ))}
                </svg>
            </div>
        </motion.div>
    );
}
