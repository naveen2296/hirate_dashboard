'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Footer() {
    const currentDate = new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="glass-card px-6 py-4 mt-6"
        >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Left - Branding */}
                <div className="flex items-center gap-3">
                    <Image
                        src="/logo-star.png"
                        alt="HiRATE"
                        width={32}
                        height={32}
                        className="rounded-lg"
                    />
                    <div>
                        <span className="text-sm font-semibold text-white/90">
                            HiRATE Dashboard
                        </span>
                        <p className="text-[10px] text-white/40">Performance Analytics Platform</p>
                    </div>
                </div>

                {/* Center - Update info */}
                <div className="text-center">
                    <p className="text-xs text-white/50">
                        Last updated: <span className="text-white/70">{currentDate}</span>
                    </p>
                    <p className="text-[10px] text-white/30 mt-1">
                        Data refreshes every month
                    </p>
                </div>

                {/* Right - Company logos */}
                <div className="flex items-center gap-2">
                    <div className="bg-white/90 px-2 py-1 rounded">
                        <Image
                            src="/logo-highways.png"
                            alt="Cube Highways"
                            width={130}
                            height={36}
                            className="opacity-100"
                        />
                    </div>
                    <div className="w-px h-6 bg-white/20" />
                    <div className="bg-white/90 px-2 py-1 rounded">
                        <Image
                            src="/logo-tech.png"
                            alt="Cube Technologies"
                            width={60}
                            height={24}
                            className="opacity-100"
                        />
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-4 pt-3 border-t border-white/5 text-center">
                <p className="text-[10px] text-white/30">
                    © 2025 Cube Highways Technologies. All rights reserved. | HiRATE v2.0
                </p>
            </div>
        </motion.footer>
    );
}
