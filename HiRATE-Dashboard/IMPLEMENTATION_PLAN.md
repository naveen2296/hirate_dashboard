# HiRATE Dashboard Implementation Plan

## Overview
A modern, animated dashboard for Highway Infrastructure Rating and Assessment Technical Excellence (HiRATE) system.

## Design Requirements
1. **Background**: White/light with glassmorphism blur effect on all cards
2. **India Map**: Actual SVG India map with project markers positioned correctly
3. **Pyramid Chart**: Horizontal bars in triangular pyramid shape with A/B/C grade colors
4. **Heatmap**: Table grid with green/yellow/orange/red cells based on rating values
5. **All Charts**: Fit on single page at 100% zoom
6. **Animations**: Smooth auto-play animations on all elements

## Technical Stack
- HTML5
- CSS3 (Animations, Glassmorphism, Flexbox, Grid)
- JavaScript (Vanilla)
- Chart.js with datalabels plugin

## File Structure
```
├── index.html          # Main dashboard structure
├── styles.css          # All styles, animations, glassmorphism
├── data.js             # Dashboard data
├── charts.js           # Chart.js chart implementations
├── map.js              # India SVG map with markers
├── app.js              # Main initialization
├── logo-star.png       # HiRATE star logo
├── logo-highways.png   # Cube Highways logo
├── logo-tech.png       # Cube Tech logo
└── india.svg           # India map SVG (inline)
```

## Components

### 1. Header
- HiRATE star logo (animated rotation)
- Title with glow animation
- Month badge with pulse effect
- Company logos with float animation
- Live indicator with pulsing dot

### 2. Sidebar (Left)
- Stats cards (10%, 12k+) with counter animation
- Categories list
- Rating types legend

### 3. Center Section
- Overall Project Rating (Gauge chart)
- Project HO Rating by Month (Bar chart)
- Condition Rating (Line chart with CC/FC/PC)
- Sum of Issues (Area chart with brown gradient)
- TAR Count of Ratings (Horizontal bar chart)
- Parameter Ratings Heatmap (Color-coded table)

### 4. Right Section
- India Map with rise/fall markers
- TARM Rating by Category (Bar + line chart)
- Project Rankings Pyramid

### 5. Footer
- Copyright
- Last updated timestamp

## Animations
1. **Slide animations**: Cards slide in from sides
2. **Fade animations**: Elements fade up
3. **Counter animations**: Numbers count up
4. **Chart animations**: Bars/lines animate in
5. **Map markers**: Pop in with stagger
6. **Continuous animations**: 
   - Floating background shapes
   - Glowing elements
   - Pulsing badges

## Color Palette
- Primary Green: #22c55e
- Light Green: #4ade80
- Red: #ef4444
- Orange: #f97316
- Yellow: #eab308
- Purple: #a855f7
- Blue: #3b82f6
- Background: White (#ffffff)
- Glass: rgba(255,255,255,0.7) with blur

## Responsive Breakpoints
- Desktop: 1400px+
- Tablet: 768px - 1400px
- Mobile: <768px
