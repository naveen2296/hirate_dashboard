'use client';

export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Base dark background */}
            <div className="absolute inset-0 bg-[#0a0a0f]" />

            {/* Colorful gradient glows */}
            <div
                className="absolute -top-32 -left-32 w-[600px] h-[600px]"
                style={{
                    background: 'radial-gradient(circle, rgba(34, 197, 94, 0.25) 0%, rgba(34, 197, 94, 0.1) 30%, transparent 60%)',
                    filter: 'blur(60px)'
                }}
            />
            <div
                className="absolute top-1/2 -right-32 w-[500px] h-[500px]"
                style={{
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.08) 30%, transparent 60%)',
                    filter: 'blur(60px)'
                }}
            />
            <div
                className="absolute -bottom-32 left-1/3 w-[550px] h-[550px]"
                style={{
                    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, rgba(168, 85, 247, 0.08) 30%, transparent 60%)',
                    filter: 'blur(60px)'
                }}
            />
            <div
                className="absolute top-1/3 left-1/4 w-[400px] h-[400px]"
                style={{
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
                    filter: 'blur(60px)'
                }}
            />

            {/* Grid overlay */}
            <div className="grid-overlay" />
        </div>
    );
}
