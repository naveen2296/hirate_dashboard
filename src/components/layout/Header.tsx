'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10"
        >
            <div className="flex items-center justify-between px-6 py-4 bg-black/40 backdrop-blur-xl border-b border-white/5">
                {/* Left - Logo */}
                <div className="flex items-center gap-4">
                    <Image
                        src="/logo-star.png"
                        alt="HiRATE"
                        width={48}
                        height={48}
                        className="object-contain"
                    />
                    <div>
                        <h1 className="text-xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            HiRATE Overall Summary
                        </h1>
                        <p className="text-xs text-white/50">Highway Rating & Assessment Tool for Excellence</p>
                    </div>
                </div>

                {/* Center - Title */}
                <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
                    <div className="flex items-center gap-2">
                        <div className="live-dot"></div>
                        <span className="text-sm font-medium text-white/70">Live Dashboard</span>
                    </div>
                </div>

                {/* Right - Logos */}
                <div className="flex items-center gap-4">
                    <Image
                        src="/logo-highways.png"
                        alt="Cube Highways"
                        width={120}
                        height={40}
                        className="object-contain"
                    />
                    <Image
                        src="/logo-tech.png"
                        alt="Tech Partner"
                        width={100}
                        height={40}
                        className="object-contain"
                    />
                </div>
            </div>
        </motion.header>
    );
}
