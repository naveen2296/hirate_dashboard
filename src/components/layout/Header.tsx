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
                {/* Left - Logo with white background */}
                <div className="flex items-center gap-4">
                    <div className="bg-white rounded-lg p-1">
                        <Image
                            src="/logo-star.png"
                            alt="HiRATE"
                            width={44}
                            height={44}
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Center - Title */}
                <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        HiRATE Overall Summary
                    </h1>
                    <p className="text-xs text-white/50">Highway Rating & Assessment Tool for Excellence</p>
                    <div className="flex items-center justify-center gap-2 mt-1">
                        <div className="live-dot"></div>
                        <span className="text-xs font-medium text-white/60">Live Dashboard</span>
                    </div>
                </div>

                {/* Right - Company Logos with white background */}
                <div className="flex items-center gap-3">
                    <div className="bg-white rounded-lg px-2 py-1">
                        <Image
                            src="/logo-highways.png"
                            alt="Cube Highways"
                            width={100}
                            height={36}
                            className="object-contain"
                        />
                    </div>
                    <div className="bg-white rounded-lg px-2 py-1">
                        <Image
                            src="/logo-tech.png"
                            alt="Tech Partner"
                            width={80}
                            height={36}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </motion.header>
    );
}
