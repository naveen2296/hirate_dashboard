'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useHeader } from '@/context/HeaderContext';

export function Footer() {
    const { showHeader } = useHeader();

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
            className="glass-card px-4 py-3 flex-1 flex flex-col justify-between"
        >
            <div className="flex items-center justify-between gap-4">
                {/* Left - Branding */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/logo-star.png"
                        alt="HiRATE"
                        width={28}
                        height={28}
                        className="rounded-lg"
                    />
                    <div>
                        <span className="text-xs font-semibold text-white/90">
                            HiRATE Dashboard
                        </span>
                        <p className="text-[9px] text-white/40">Performance Analytics</p>
                    </div>
                </div>

                {/* Center - Update info */}
                <div className="text-center">
                    <p className="text-[10px] text-white/50">
                        Last updated: <span className="text-white/70">{currentDate}</span>
                    </p>
                    <p className="text-[9px] text-white/30">
                        Data refreshes every month
                    </p>
                </div>

                {/* Right - Company logos - Click to show header */}
                <div className="flex items-center gap-2">
                    <div
                        className="bg-white/90 px-2 py-1 rounded cursor-pointer hover:bg-white transition-colors"
                        onClick={showHeader}
                    >
                        <Image
                            src="/logo-highways.png"
                            alt="Cube Highways"
                            width={130}
                            height={36}
                            className="opacity-100"
                        />
                    </div>
                    <div className="w-px h-6 bg-white/20" />
                    <div className="bg-white/90 px-1.5 py-0.5 rounded">
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
            <div className="mt-2 pt-2 border-t border-white/5 text-center">
                <p className="text-[9px] text-white/30">
                    © 2025 Cube Highways Technologies. All rights reserved. | HiRATE v2.0
                </p>
            </div>
        </motion.footer>
    );
}
