'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-0 z-50 px-6 py-3"
            style={{
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(24px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            }}
        >
            <div className="flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                        <Image
                            src="/logo-star.png"
                            alt="HiRATE"
                            width={40}
                            height={40}
                            className="rounded-lg"
                        />
                        <div>
                            <h1 className="text-xl font-bold text-white">
                                HiRATE
                            </h1>
                            <p className="text-[10px] text-white/50 -mt-0.5">Performance Analytics</p>
                        </div>
                    </div>
                </div>

                {/* Title + Date Badges */}
                <div className="hidden md:flex items-center gap-4">
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
                            <span className="text-xs font-semibold text-green-400">DECEMBER</span>
                        </div>
                        <div className="px-2 py-1 rounded-lg bg-white/5 border border-white/10">
                            <span className="text-[10px] text-white/60">FY 25-26</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    {/* Live Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20"
                    >
                        <div className="live-dot" />
                        <span className="text-xs font-medium text-green-400">Live</span>
                    </motion.div>

                    {/* Company Logos */}
                    <div className="hidden lg:flex items-center gap-2">
                        <div className="bg-white/90 px-2 py-1 rounded">
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
    );
}
