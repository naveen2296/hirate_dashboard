'use client';

import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { HeaderProvider } from '@/context/HeaderContext';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { AnimatedBackground } from '@/components/layout/AnimatedBackground';
import { Header } from '@/components/layout/Header';
import { LiveTicker } from '@/components/layout/LiveTicker';
import { Footer } from '@/components/layout/Footer';
import { StatsGrid } from '@/components/stats/StatsGrid';
import { CategoriesSection } from '@/components/stats/CategoriesSection';
import { IndiaMap } from '@/components/map/IndiaMap';
import { ConditionChart } from '@/components/charts/ConditionChart';
import { HORatingChart } from '@/components/charts/HORatingChart';
import { RatingGauge } from '@/components/charts/RatingGauge';
import { IssuesChart } from '@/components/charts/IssuesChart';
import { TARMCategoryChart } from '@/components/charts/TARMCategoryChart';
import { PerformanceHeatmap } from '@/components/charts/PerformanceHeatmap';
import { LoginPage } from '@/components/auth/LoginPage';

// Dynamic import to avoid hydration issues with Framer Motion
const PyramidRankings = dynamic(
    () => import('@/components/charts/PyramidRankings').then(mod => ({ default: mod.PyramidRankings })),
    { ssr: false }
);

// Page transition variants
const pageVariants = {
    initial: {
        opacity: 0,
        scale: 0.95,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut' as const,
        },
    },
    exit: {
        opacity: 0,
        scale: 1.05,
        transition: {
            duration: 0.3,
            ease: 'easeInOut' as const,
        },
    },
};

function DashboardContent() {
    const { isAuthenticated } = useAuth();

    return (
        <AnimatePresence mode="wait">
            {!isAuthenticated ? (
                <motion.div
                    key="login"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                >
                    <LoginPage />
                </motion.div>
            ) : (
                <motion.div
                    key="dashboard"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                >
                    <HeaderProvider>
                        <div className="min-h-screen relative">
                            {/* Animated Background */}
                            <AnimatedBackground />

                            {/* Main Content */}
                            <div className="relative z-10">
                                {/* Header */}
                                <Header />

                                {/* Live Ticker */}
                                <LiveTicker />

                                {/* Row 1: Stats Grid - Moved up closer to ticker */}
                                <StatsGrid />

                                {/* Row 2: Charts (Condition, HO Rating, Gauge, Issues) */}
                                <section className="px-6 py-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        <ConditionChart />
                                        <HORatingChart />
                                        <RatingGauge />
                                        <IssuesChart />
                                    </div>
                                </section>

                                {/* Row 3: India Map + Pyramid Rankings + Performance Heatmap */}
                                <section className="px-6 py-4">
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                        <div>
                                            <IndiaMap />
                                        </div>
                                        <div>
                                            <PyramidRankings />
                                        </div>
                                        <div>
                                            <PerformanceHeatmap />
                                        </div>
                                    </div>
                                </section>

                                {/* Row 4: TARM Category Chart (left) + Monitoring Categories & Footer (right) */}
                                <section className="px-6 py-3 pb-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <TARMCategoryChart />
                                        <div className="flex flex-col gap-3">
                                            <CategoriesSection />
                                            <Footer />
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </HeaderProvider>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default function Dashboard() {
    return (
        <AuthProvider>
            <DashboardContent />
        </AuthProvider>
    );
}
