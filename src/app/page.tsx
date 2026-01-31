'use client';

import { motion } from 'framer-motion';
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
import { TARCountChart } from '@/components/charts/TARCountChart';
import { TARMCategoryChart } from '@/components/charts/TARMCategoryChart';
import { PyramidRankings } from '@/components/charts/PyramidRankings';
import { PerformanceHeatmap } from '@/components/charts/PerformanceHeatmap';

export default function Dashboard() {
    return (
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

                {/* Row 4: TAR Charts */}
                <section className="px-6 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <TARCountChart />
                        <TARMCategoryChart />
                    </div>
                </section>

                {/* Row 5: Monitoring Categories - Full Row */}
                <section className="px-6 py-4">
                    <CategoriesSection />
                </section>

                {/* Footer */}
                <div className="px-6 pb-6">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
