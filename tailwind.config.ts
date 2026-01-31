import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Dark theme colors
                background: {
                    primary: '#0a0a0f',
                    secondary: '#12121a',
                    tertiary: '#1a1a24',
                    card: 'rgba(20, 20, 30, 0.7)',
                },
                // Accent colors - Share market inspired
                accent: {
                    green: '#22c55e',
                    'green-glow': '#22c55e40',
                    red: '#ef4444',
                    'red-glow': '#ef444440',
                    blue: '#3b82f6',
                    purple: '#a855f7',
                    orange: '#f59e0b',
                    cyan: '#06b6d4',
                    pink: '#ec4899',
                    yellow: '#eab308',
                },
                // Glass effect colors
                glass: {
                    bg: 'rgba(255, 255, 255, 0.03)',
                    border: 'rgba(255, 255, 255, 0.08)',
                    'border-hover': 'rgba(255, 255, 255, 0.15)',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            boxShadow: {
                'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
                'glow-green': '0 0 20px rgba(34, 197, 94, 0.3)',
                'glow-red': '0 0 20px rgba(239, 68, 68, 0.3)',
                'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
                'glow-purple': '0 0 20px rgba(168, 85, 247, 0.3)',
                'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.3)',
            },
            animation: {
                'float': 'float 20s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-down': 'slideDown 0.5s ease-out',
                'fade-in': 'fadeIn 0.5s ease-out',
                'scale-in': 'scaleIn 0.3s ease-out',
                'ticker': 'ticker 30s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                    '33%': { transform: 'translateY(-20px) rotate(5deg)' },
                    '66%': { transform: 'translateY(20px) rotate(-5deg)' },
                },
                glow: {
                    '0%': { opacity: '0.5' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                ticker: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
};

export default config;
