'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-auto py-4 px-6 bg-black/40 backdrop-blur-xl border-t border-white/5"
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="bg-white rounded-lg p-1">
                        <Image
                            src="/logo-star.png"
                            alt="HiRATE"
                            width={28}
                            height={28}
                            className="object-contain"
                        />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-white/90">HiRATE Dashboard</p>
                        <p className="text-xs text-white/50">Powered by Cube Highways</p>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-xs text-white/50">
                        Data as of December 2025 | FY 2025-26
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="bg-white rounded-lg px-2 py-1">
                        <Image
                            src="/logo-highways.png"
                            alt="Cube Highways"
                            width={80}
                            height={28}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-3 pt-3 border-t border-white/10 text-center">
                <p className="text-xs text-white/40">
                    © 2025 Cube Highways. All rights reserved. | Highway Rating and Assessment Tool for Excellence
                </p>
            </div>
        </motion.footer>
    );
}
