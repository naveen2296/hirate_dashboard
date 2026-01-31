'use client';

import { AnimatedBackground } from '@/components/layout/AnimatedBackground';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LiveTicker } from '@/components/layout/LiveTicker';
import { StatsGrid } from '@/components/stats/StatsGrid';
import { RatingGauge } from '@/components/charts/RatingGauge';
import { IndiaMap } from '@/components/charts/IndiaMap';
import { ConditionChart } from '@/components/charts/ConditionChart';
import { HORatingChart } from '@/components/charts/HORatingChart';
import { TARMCategoryChart } from '@/components/charts/TARMCategoryChart';
import { TARCountChart } from '@/components/charts/TARCountChart';
import { IssuesChart } from '@/components/charts/IssuesChart';
import { PerformanceHeatmap } from '@/components/charts/PerformanceHeatmap';
import { InsightsSection } from '@/components/stats/InsightsSection';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <AnimatedBackground />
            <Header />
            <LiveTicker />

            <main className="flex-1 px-6 py-4 space-y-4">
                {/* Row 1: Stats Grid + India Map + Rating Gauge */}
                <div className="grid grid-cols-12 gap-4">
                    {/* Stats - takes 7 columns */}
                    <div className="col-span-7">
                        <StatsGrid />
                    </div>

                    {/* India Map - takes 3 columns */}
                    <div className="col-span-3">
                        <div className="glass-card p-4 h-full">
                            <IndiaMap />
                        </div>
                    </div>

                    {/* Rating Gauge - takes 2 columns */}
                    <div className="col-span-2">
                        <RatingGauge />
                    </div>
                </div>

                {/* Row 2: Main Charts */}
                <div className="grid grid-cols-12 gap-4">
                    {/* Condition Chart */}
                    <div className="col-span-3">
                        <ConditionChart />
                    </div>

                    {/* HO Rating Chart */}
                    <div className="col-span-3">
                        <HORatingChart />
                    </div>

                    {/* TARM Category Chart - wider */}
                    <div className="col-span-6">
                        <TARMCategoryChart />
                    </div>
                </div>

                {/* Row 3: Additional Charts */}
                <div className="grid grid-cols-12 gap-4">
                    {/* TAR Count Chart */}
                    <div className="col-span-3">
                        <TARCountChart />
                    </div>

                    {/* Issues Chart */}
                    <div className="col-span-3">
                        <IssuesChart />
                    </div>

                    {/* Performance Heatmap */}
                    <div className="col-span-3">
                        <PerformanceHeatmap />
                    </div>

                    {/* Insights Section */}
                    <div className="col-span-3">
                        <InsightsSection />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
