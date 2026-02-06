'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useHeader } from '@/context/HeaderContext';

export function Header() {
    const { isHeaderVisible, hideHeader } = useHeader();

    return (
        <AnimatePresence>
            {isHeaderVisible && (
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.3 }}
                    className="sticky top-0 z-50 px-6 py-3"
                    style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        backdropFilter: 'blur(24px)',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                    }}
                >
                    <div className="flex items-center justify-between relative">
                        {/* Logo Section */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                <motion.div
                                    className="relative"
                                    animate={{
                                        boxShadow: [
                                            '0 0 10px rgba(74, 222, 128, 0.3), 0 0 20px rgba(74, 222, 128, 0.2), 0 0 30px rgba(74, 222, 128, 0.1)',
                                            '0 0 15px rgba(74, 222, 128, 0.5), 0 0 30px rgba(74, 222, 128, 0.3), 0 0 45px rgba(74, 222, 128, 0.2)',
                                            '0 0 10px rgba(74, 222, 128, 0.3), 0 0 20px rgba(74, 222, 128, 0.2), 0 0 30px rgba(74, 222, 128, 0.1)'
                                        ]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    style={{ borderRadius: '12px' }}
                                >
                                    <Image
                                        src="/logo-star.png"
                                        alt="HiRATE"
                                        width={40}
                                        height={40}
                                        className="rounded-lg"
                                    />
                                </motion.div>
                                <div>
                                    <h1
                                        className="text-xl font-bold"
                                        style={{
                                            background: 'linear-gradient(90deg, #4ade80 0%, #22c55e 50%, #4ade80 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            textShadow: '0 0 20px rgba(74, 222, 128, 0.5), 0 0 40px rgba(74, 222, 128, 0.3)'
                                        }}
                                    >
                                        HiRATE
                                    </h1>
                                    <p className="text-[10px] text-white/50 -mt-0.5">Performance Analytics</p>
                                </div>
                            </div>
                        </div>

                        {/* Title + Date Badges - Centered */}
                        <div className="hidden md:flex items-center gap-4 absolute left-1/2 -translate-x-1/2">
                            <motion.h2
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
                            >
                                HiRATE Overall Summary
                            </motion.h2>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="flex items-center gap-2"
                            >
                                <div className="px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30">
                                    <span className="text-xs font-semibold text-green-400">JANUARY</span>
                                </div>
                                <div className="px-2 py-1 rounded-lg bg-white/5 border border-white/10">
                                    <span className="text-[10px] text-white/60">FY 25-26</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center gap-4">
                            {/* Live Indicator - Premium Style */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, type: "spring" }}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(16, 185, 129, 0.1) 100%)',
                                    border: '1px solid rgba(34, 197, 94, 0.3)',
                                    boxShadow: '0 0 20px rgba(34, 197, 94, 0.15), inset 0 1px 0 rgba(255,255,255,0.1)'
                                }}
                            >
                                {/* Animated Pulse Dot */}
                                <div className="relative flex items-center justify-center">
                                    {/* Outer pulse ring */}
                                    <span
                                        className="absolute w-3 h-3 rounded-full bg-green-400/30 animate-ping"
                                        style={{ animationDuration: '1.5s' }}
                                    />
                                    {/* Middle glow ring */}
                                    <span
                                        className="absolute w-2.5 h-2.5 rounded-full bg-green-400/50 animate-pulse"
                                        style={{ animationDuration: '1s' }}
                                    />
                                    {/* Core dot with glow */}
                                    <span
                                        className="relative w-2 h-2 rounded-full bg-green-400"
                                        style={{
                                            boxShadow: '0 0 6px rgba(74, 222, 128, 0.8), 0 0 12px rgba(74, 222, 128, 0.4)'
                                        }}
                                    />
                                </div>
                                {/* Live Text */}
                                <span
                                    className="text-xs font-semibold tracking-wide"
                                    style={{
                                        background: 'linear-gradient(90deg, #4ade80 0%, #22c55e 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        textShadow: '0 0 20px rgba(74, 222, 128, 0.3)'
                                    }}
                                >
                                    LIVE
                                </span>
                            </motion.div>

                            {/* Company Logos - Click to hide header */}
                            <div className="hidden lg:flex items-center gap-2">
                                <div
                                    className="bg-white/90 px-2 py-1 rounded cursor-pointer hover:bg-white transition-colors"
                                    onClick={hideHeader}
                                    title="Click to hide header"
                                >
                                    <Image
                                        src="/logo-highways.png"
                                        alt="Cube Highways"
                                        width={130}
                                        height={36}
                                        className="opacity-100"
                                    />
                                </div>
                                <div className="w-px h-4 bg-white/20" />
                                <div className="bg-white/90 px-1.5 py-0.5 rounded">
                                    <Image
                                        src="/logo-tech.png"
                                        alt="Cube Tech"
                                        width={60}
                                        height={20}
                                        className="opacity-100"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.header>
            )}
        </AnimatePresence>
    );
}
