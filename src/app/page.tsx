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
                {/* Stats Grid */}
                <StatsGrid />

                {/* Main Charts Grid */}
                <div className="grid grid-cols-12 gap-4">
                    {/* Left Column - Map & Gauge */}
                    <div className="col-span-3 space-y-4">
                        <RatingGauge />
                        <div className="glass-card p-4 h-[320px]">
                            <IndiaMap />
                        </div>
                    </div>

                    {/* Center Column - Main Charts */}
                    <div className="col-span-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <ConditionChart />
                            <HORatingChart />
                        </div>
                        <TARMCategoryChart />
                    </div>

                    {/* Right Column - Additional Charts */}
                    <div className="col-span-3 space-y-4">
                        <TARCountChart />
                        <IssuesChart />
                        <PerformanceHeatmap />
                    </div>
                </div>

                {/* Insights Section */}
                <InsightsSection />
            </main>

            <Footer />
        </div>
    );
}
