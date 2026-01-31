'use client';

export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Base dark background */}
            <div className="absolute inset-0 bg-[#0a0a0f]" />

            {/* Large Green Gradient Glow - Top Left */}
            <div
                className="absolute -top-40 -left-40 w-[800px] h-[800px]"
                style={{
                    background: 'radial-gradient(circle, rgba(34, 197, 94, 0.25) 0%, rgba(34, 197, 94, 0.12) 35%, transparent 65%)',
                    filter: 'blur(80px)'
                }}
            />

            {/* Cyan/Teal Gradient Glow - Top Right */}
            <div
                className="absolute -top-32 -right-32 w-[700px] h-[700px]"
                style={{
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, rgba(20, 184, 166, 0.12) 35%, transparent 65%)',
                    filter: 'blur(80px)'
                }}
            />

            {/* Large Purple Gradient Glow - Right Side */}
            <div
                className="absolute top-1/4 -right-40 w-[900px] h-[900px]"
                style={{
                    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(147, 51, 234, 0.15) 35%, transparent 65%)',
                    filter: 'blur(100px)'
                }}
            />

            {/* Green Glow - Bottom Left */}
            <div
                className="absolute -bottom-20 left-0 w-[700px] h-[700px]"
                style={{
                    background: 'radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.1) 40%, transparent 70%)',
                    filter: 'blur(80px)'
                }}
            />

            {/* Purple Glow - Bottom Right */}
            <div
                className="absolute -bottom-40 right-1/4 w-[600px] h-[600px]"
                style={{
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.22) 0%, rgba(124, 58, 237, 0.1) 40%, transparent 65%)',
                    filter: 'blur(90px)'
                }}
            />

            {/* Subtle Blue accent - Center */}
            <div
                className="absolute top-1/2 left-1/3 w-[500px] h-[500px]"
                style={{
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                    filter: 'blur(60px)'
                }}
            />

            {/* Grid Overlay */}
            <div className="grid-overlay" />

            {/* Subtle vignette */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10, 10, 15, 0.4) 100%)'
                }}
            />
        </div>
    );
}
