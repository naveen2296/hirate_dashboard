'use client';

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { Eye, EyeOff, LogIn, Loader2 } from 'lucide-react';
import Image from 'next/image';

export function LoginPage() {
    const { login, error } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [shake, setShake] = useState(false);
    const [currentTime, setCurrentTime] = useState('');

    // Update time every second
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: false
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        await new Promise(resolve => setTimeout(resolve, 800));

        const success = await login(username, password);
        setIsLoading(false);

        if (!success) {
            setShake(true);
            setTimeout(() => setShake(false), 500);
        }
    };

    return (
        <div className="h-screen w-full flex items-end justify-center relative overflow-hidden">
            {/* Premium Green Gradient Animated Background */}
            <div className="absolute inset-0 bg-[#020a06]">
                {/* Base gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f15] via-[#051510] to-[#020a06]" />

                {/* Animated gradient waves */}
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse 120% 80% at 50% 0%, rgba(34, 197, 94, 0.12) 0%, transparent 50%)',
                    }}
                    animate={{
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Large animated green orbs */}
                <motion.div
                    className="absolute w-[1000px] h-[1000px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(34, 197, 94, 0.08) 0%, transparent 45%)',
                        filter: 'blur(80px)',
                        top: '-40%',
                        left: '-30%',
                    }}
                    animate={{
                        x: [0, 200, 100, 0],
                        y: [0, 100, -50, 0],
                        scale: [1, 1.3, 0.9, 1],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute w-[800px] h-[800px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 45%)',
                        filter: 'blur(70px)',
                        bottom: '-30%',
                        right: '-25%',
                    }}
                    animate={{
                        x: [0, -150, -80, 0],
                        y: [0, -100, 80, 0],
                        scale: [1, 1.2, 1.4, 1],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute w-[600px] h-[600px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(74, 222, 128, 0.05) 0%, transparent 45%)',
                        filter: 'blur(60px)',
                        top: '20%',
                        right: '5%',
                    }}
                    animate={{
                        x: [0, 100, -50, 0],
                        y: [0, -80, 100, 0],
                        scale: [1, 0.8, 1.2, 1],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Emerald accent orb */}
                <motion.div
                    className="absolute w-[400px] h-[400px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(52, 211, 153, 0.1) 0%, transparent 50%)',
                        filter: 'blur(50px)',
                        bottom: '30%',
                        left: '10%',
                    }}
                    animate={{
                        x: [0, 80, -60, 0],
                        y: [0, -50, 60, 0],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Premium grid overlay */}
                <div
                    className="absolute inset-0 opacity-[0.015]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(34, 197, 94, 0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(34, 197, 94, 0.8) 1px, transparent 1px)
                        `,
                        backgroundSize: '80px 80px',
                    }}
                />

                {/* Floating Stars */}
                {[...Array(50)].map((_, i) => {
                    const size = Math.random() * 14 + 6;
                    const isLarge = Math.random() > 0.7;
                    return (
                        <motion.div
                            key={i}
                            className="absolute flex items-center justify-center"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                filter: `drop-shadow(0 0 ${isLarge ? 8 : 4}px rgba(34, 197, 94, ${0.4 + Math.random() * 0.3}))`,
                            }}
                            animate={{
                                y: [0, -40 - Math.random() * 50, 0],
                                x: [0, Math.random() * 40 - 20, 0],
                                opacity: [0.15, 0.6 + Math.random() * 0.3, 0.15],
                                scale: [1, 1.3 + Math.random() * 0.5, 1],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 8 + Math.random() * 8,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                                ease: 'easeInOut',
                            }}
                        >
                            <span
                                style={{
                                    fontSize: `${size}px`,
                                    color: isLarge ? '#4ade80' : '#22c55e',
                                    textShadow: `0 0 ${isLarge ? 12 : 6}px rgba(74, 222, 128, 0.6)`,
                                }}
                            >
                                ★
                            </span>
                        </motion.div>
                    );
                })}

                {/* Pulsing rings */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={`ring-${i}`}
                        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-green-500/10"
                        style={{
                            width: 200 + i * 200,
                            height: 200 + i * 200,
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.05, 0.1],
                        }}
                        transition={{
                            duration: 8 + i * 2,
                            repeat: Infinity,
                            delay: i * 1.5,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>

            {/* Company Logos - Top Right */}
            <motion.div
                className="absolute top-5 right-5 z-30 flex items-center gap-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                <div className="bg-white/95 px-3 py-2 rounded-lg shadow-lg shadow-green-900/30">
                    <Image
                        src="/logo-highways.png"
                        alt="Cube Highways"
                        width={140}
                        height={42}
                        className="object-contain"
                    />
                </div>
                <div className="w-px h-7 bg-green-400/30" />
                <div className="bg-white/95 px-2 py-1.5 rounded-lg shadow-lg shadow-green-900/30">
                    <Image
                        src="/logo-tech.png"
                        alt="Cube Tech"
                        width={65}
                        height={26}
                        className="object-contain"
                    />
                </div>
            </motion.div>

            {/* iPhone Half Screen - Bottom aligned */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative z-10"
            >
                <div className={`relative w-[380px] max-w-[100vw] h-[90vh] ${shake ? 'animate-shake' : ''}`}>
                    {/* Phone outer frame */}
                    <motion.div
                        className="relative rounded-t-[50px] p-[12px] pb-0 h-full flex flex-col"
                        style={{
                            background: 'linear-gradient(145deg, #1f2937 0%, #1c1c1eff 50%, #1f2124ff 100%)',
                            boxShadow: `
                                0 40px 80px -20px rgba(0, 0, 0, 0.9),
                                0 20px 50px -15px rgba(34, 197, 94, 0.15),
                                inset 0 2px 0 rgba(255,255,255,0.1),
                                inset 2px 0 0 rgba(255,255,255,0.05),
                                inset -2px 0 0 rgba(255,255,255,0.05)
                            `,
                        }}
                    >
                        {/* Side buttons */}
                        <div className="absolute left-[-3px] top-24 w-[3px] h-6 bg-gradient-to-b from-[#374151] to-[#1f2937] rounded-l-sm" />
                        <div className="absolute left-[-3px] top-36 w-[3px] h-12 bg-gradient-to-b from-[#374151] to-[#1f2937] rounded-l-sm" />
                        <div className="absolute left-[-3px] top-52 w-[3px] h-12 bg-gradient-to-b from-[#374151] to-[#1f2937] rounded-l-sm" />
                        <div className="absolute right-[-3px] top-32 w-[3px] h-20 bg-gradient-to-b from-[#374151] to-[#1f2937] rounded-r-sm" />

                        {/* Screen bezel - Same as page background */}
                        <div
                            className="relative rounded-t-[38px] overflow-hidden flex-1 flex flex-col"
                            style={{
                                background: 'linear-gradient(180deg, #0a1f15 0%, #051510 50%, #020a06 100%)',
                                boxShadow: 'inset 0 0 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
                            }}
                        >
                            {/* Screen content with green glow */}
                            <div
                                className="relative flex-1"
                                style={{
                                    background: 'radial-gradient(ellipse 200% 1000% at 60% 0%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)',
                                }}>
                                {/* Status bar */}
                                <div className="flex items-center justify-between px-7 py-3 relative z-20">
                                    <motion.span
                                        className="text-white/90 text-sm font-semibold tabular-nums"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.8 }}
                                    >
                                        {currentTime}
                                    </motion.span>

                                    {/* Dynamic Island */}
                                    <motion.div
                                        className="absolute left-1/2 transform -translate-x-1/2 w-28 h-7 bg-black rounded-full flex items-center justify-center"
                                        initial={{ width: 90, opacity: 0 }}
                                        animate={{ width: 112, opacity: 1 }}
                                        transition={{ delay: 0.6, duration: 0.4 }}
                                    >
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#1a1f28] mr-6" />
                                    </motion.div>

                                    <motion.div
                                        className="flex items-center gap-1"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.8 }}
                                    >
                                        {/* Signal bars - correct order: small to large */}
                                        <div className="flex gap-[2px] items-end">
                                            <div className="w-[3px] h-[5px] bg-white/90 rounded-sm" />
                                            <div className="w-[3px] h-[7px] bg-white/90 rounded-sm" />
                                            <div className="w-[3px] h-[9px] bg-white/90 rounded-sm" />
                                            <div className="w-[3px] h-[11px] bg-white/40 rounded-sm" />
                                        </div>
                                        {/* WiFi */}
                                        <svg className="w-4 h-4 text-white/90 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                                        </svg>
                                        {/* Battery */}
                                        <div className="w-6 h-3 bg-white/90 rounded-[3px] ml-1 relative overflow-hidden">
                                            <div className="absolute top-0.5 bottom-0.5 left-0.5 right-1 bg-green-400 rounded-[2px]" />
                                            <div className="absolute right-[-2px] top-[4px] w-[2px] h-[4px] bg-white/90 rounded-r-sm" />
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Login Content - Compact */}
                                <div className="px-7 pb-6 pt-4 relative z-10">
                                    {/* HiRATE Logo - Smaller */}
                                    <motion.div
                                        className="text-center mb-6"
                                        initial={{ opacity: 0, y: -15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <motion.div
                                            className="inline-block mb-3 relative"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <Image
                                                src="/logo-star.png"
                                                alt="HiRATE"
                                                width={75}
                                                height={75}
                                                className="object-contain"
                                            />
                                            <motion.div
                                                className="absolute inset-0 -z-10"
                                                style={{
                                                    background: 'radial-gradient(circle, rgba(34, 197, 94, 0.5) 0%, transparent 60%)',
                                                    filter: 'blur(20px)',
                                                }}
                                                animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.8, 1.1, 0.8] }}
                                                transition={{ duration: 3, repeat: Infinity }}
                                            />
                                        </motion.div>

                                        <h1 className="text-2xl font-bold tracking-wider">
                                            <span className="text-white">Hi</span>
                                            <span className="text-green-400">RATE</span>
                                        </h1>
                                        <p className="text-white/40 text-[10px] uppercase tracking-[0.25em] mt-0.5">
                                            Account Login
                                        </p>
                                    </motion.div>

                                    {/* Form - Outlined Style */}
                                    <form onSubmit={handleSubmit} className="space-y-4 px-2">
                                        {/* Username Field */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.7 }}
                                            className="relative"
                                        >
                                            <div
                                                className="rounded-xl relative"
                                                style={{
                                                    background: 'transparent',
                                                    border: '1.5px solid rgba(255, 255, 255, 0.25)',
                                                    boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.1)',
                                                }}
                                            >
                                                <input
                                                    type="text"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                    className="w-full px-4 py-3.5 bg-transparent text-white placeholder-white/50 focus:outline-none text-sm pr-12"
                                                    placeholder="Username"
                                                    required
                                                />
                                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/40">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Password Field */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.8 }}
                                            className="relative"
                                        >
                                            <div
                                                className="rounded-xl relative"
                                                style={{
                                                    background: 'transparent',
                                                    border: '1.5px solid rgba(255, 255, 255, 0.25)',
                                                    boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.1)',
                                                }}
                                            >
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    className="w-full px-4 py-3.5 bg-transparent text-white placeholder-white/50 focus:outline-none text-sm pr-12"
                                                    placeholder="Password"
                                                    required
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors"
                                                >
                                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                                </button>
                                            </div>
                                        </motion.div>

                                        {/* Error Message */}
                                        <AnimatePresence>
                                            {error && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -8 }}
                                                    className="text-red-300 text-[11px] text-center py-2 px-3 rounded-xl"
                                                    style={{
                                                        background: 'rgba(239, 68, 68, 0.15)',
                                                        backdropFilter: 'blur(10px)',
                                                        border: '1px solid rgba(239, 68, 68, 0.3)',
                                                    }}
                                                >
                                                    {error}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Sign In Button - Green Glass */}
                                        <motion.button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full py-4 rounded-2xl font-semibold text-white relative overflow-hidden group disabled:opacity-70"
                                            style={{
                                                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.9) 100%, rgba(22, 163, 74, 0.95) 100%)',
                                                backdropFilter: 'blur(10px)',
                                                boxShadow: '0 10px 40px -10px rgba(34, 197, 94, 0.5), inset 0 1px 0 rgba(255,255,255,0.2)',
                                                border: '1px solid rgba(74, 222, 128, 0.3)',
                                            }}
                                            whileHover={{ scale: 1.02, boxShadow: '0 15px 50px -10px rgba(34, 197, 94, 0.6)' }}
                                            whileTap={{ scale: 0.98 }}
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.9 }}
                                        >
                                            <span className="relative z-10 flex items-center justify-center gap-2 text-sm tracking-wider font-semibold">
                                                {isLoading ? (
                                                    <>
                                                        <Loader2 className="w-5 h-5 animate-spin" />
                                                        Signing in...
                                                    </>
                                                ) : (
                                                    <>
                                                        <LogIn className="w-5 h-5" />
                                                        Sign in
                                                    </>
                                                )}
                                            </span>
                                            <motion.div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                                style={{
                                                    background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.95) 0%, rgba(34, 197, 94, 0.95) 100%)',
                                                }}
                                            />
                                        </motion.button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Bottom fade effect */}
                        <div
                            className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-30"
                            style={{
                                background: 'linear-gradient(to bottom, transparent, rgba(2, 10, 6, 0.8), #020a06)',
                            }}
                        />
                    </motion.div>
                </div>
            </motion.div>

            {/* CSS */}
            <style jsx global>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-3px); }
                    20%, 40%, 60%, 80% { transform: translateX(3px); }
                }
                .animate-shake {
                    animation: shake 0.4s ease-in-out;
                }
            `}</style>
        </div>
    );
}
