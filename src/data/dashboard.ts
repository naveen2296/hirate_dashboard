// Dashboard data - Based on HiRATE December 2025 Summary

export interface StatCard {
    id: string;
    title: string;
    value: string | number;
    subtitle?: string;
    description: string;
    trend?: {
        value: number;
        isPositive: boolean;
        status: 'rise' | 'fall';
    };
    color: 'green' | 'blue' | 'purple' | 'orange' | 'cyan' | 'pink';
    icon: string;
}

export const statsData: StatCard[] = [
    {
        id: 'projects-audited',
        title: 'Projects Audited',
        value: 22,
        description: 'A total of 22 projects were audited',
        color: 'orange',
        icon: 'monitor'
    },
    {
        id: 'months-audited',
        title: 'Months Audited',
        value: 12,
        subtitle: 'FY 25-26',
        description: 'So far 12 months audited and continuing',
        trend: { value: 100, isPositive: true, status: 'rise' },
        color: 'blue',
        icon: 'calendar'
    },
    {
        id: 'audit-percentage',
        title: 'Audit Percentage',
        value: '10%',
        description: 'Initiated 10% auditing for all divisions since September 2025',
        color: 'purple',
        icon: 'percent'
    },
    {
        id: 'observations',
        title: 'Observations',
        value: '12K+',
        subtitle: '143K+ parameters',
        description: '12k+ issues were found upon 143k+ parameters in month of March 2026',
        trend: { value: 2.0, isPositive: true, status: 'rise' },
        color: 'cyan',
        icon: 'alert-triangle'
    },
    {
        id: 'average-rating',
        title: 'Average Rating',
        value: 9.25,
        description: 'Overall project average rating is 9.25 for FY 25-26',
        trend: { value: 0, isPositive: true, status: 'rise' },
        color: 'pink',
        icon: 'star'
    }
];

export interface InsightCard {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export const insightsData: InsightCard[] = [
    {
        id: 1,
        title: 'Rise & Fall Map',
        description: "Rise/fall visualization compares each project's rating against its own benchmark relative to the previous month.",
        icon: 'trending-up'
    },
    {
        id: 2,
        title: 'Issue Trend Analysis',
        description: 'Issue counts presented as last-three-month average versus the current month reveal project performance.',
        icon: 'bar-chart-2'
    },
    {
        id: 3,
        title: 'Division-Based Issues',
        description: 'Division-wise issue concentration points to priority areas requiring immediate attention.',
        icon: 'layers'
    },
    {
        id: 4,
        title: 'Condition Trend',
        description: 'Condition-rating progression shows how Cleanliness, Functional, and Physical conditions have significant improvement.',
        icon: 'activity'
    },
    {
        id: 5,
        title: 'HO Rating Trend',
        description: 'Month-on-month HO Rating trend highlights progressive improvement in overall project performance.',
        icon: 'award'
    }
];

export interface ProjectMarker {
    code: string;
    name: string;
    status: 'rise' | 'fall';
    rating: number;
    prevRating: number;
    x: number;
    y: number;
}

export const projectMarkers: ProjectMarker[] = [
    { code: 'APEL', name: 'Andhra Pradesh Expressway Limited', status: 'rise', rating: 9.26, prevRating: 9.06, x: 155, y: 320 },
    { code: 'BFHL', name: 'Baharampore Farakka Highways Limited', status: 'fall', rating: 9.39, prevRating: 9.40, x: 425, y: 195 },
    { code: 'BWHPL', name: 'DBL Borgaon Watambare Highways Private Limited', status: 'fall', rating: 8.87, prevRating: 9.25, x: 145, y: 220 },
    { code: 'DATRL', name: 'Delhi Agra Tollway Limited', status: 'fall', rating: 8.42, prevRating: 8.75, x: 260, y: 110 },
    { code: 'FRHL', name: 'Farakka-Raiganj Highways Ltd', status: 'rise', rating: 9.48, prevRating: 9.10, x: 430, y: 165 },
    { code: 'GAEPL', name: 'Ghaziabad Aligarh Expressway Private Limited', status: 'fall', rating: 9.11, prevRating: 9.17, x: 360, y: 130 },
    { code: 'JMTPL', name: 'Jaipur-Mahua Tollway Private Limited', status: 'fall', rating: 8.99, prevRating: 9.09, x: 170, y: 155 },
    { code: 'KETPL', name: 'Kanyakumari-Etturavattam Tollway Private Limited', status: 'rise', rating: 9.53, prevRating: 9.42, x: 170, y: 405 },
    { code: 'KMTPL', name: 'Kotwa-Muzaffarpur Tollway Private Limited', status: 'fall', rating: 8.90, prevRating: 9.10, x: 420, y: 95 },
    { code: 'THPL', name: 'Tirumala Infra Private Limited', status: 'rise', rating: 9.08, prevRating: 8.95, x: 130, y: 245 },
    { code: 'MBEL', name: 'Mahua Bharatpur Expressway Limited', status: 'fall', rating: 9.30, prevRating: 9.37, x: 235, y: 125 },
    { code: 'MHPL', name: 'Mangloor Highways Private Limited', status: 'rise', rating: 9.71, prevRating: 9.45, x: 380, y: 255 },
    { code: 'MKTPL', name: 'Madurai-Kanyakumari Tollway Private Limited', status: 'fall', rating: 9.36, prevRating: 9.48, x: 275, y: 420 },
    { code: 'MSHP', name: 'Mangalwedha Solapur Highways Private Limited', status: 'fall', rating: 9.22, prevRating: 9.33, x: 350, y: 275 },
    { code: 'NAM', name: 'N.A.M. Expressway Limited', status: 'rise', rating: 9.15, prevRating: 9.03, x: 395, y: 295 },
    { code: 'NDEPL', name: 'Nelamangala Devihalli Expressway Private Limited', status: 'fall', rating: 8.90, prevRating: 9.05, x: 160, y: 290 },
    { code: 'NKTPL', name: 'Nanguneri-Kanyakumari Tollway Private Limited', status: 'rise', rating: 9.65, prevRating: 9.55, x: 295, y: 420 },
    { code: 'SIPL', name: 'Srirangam Infra Private Limited', status: 'fall', rating: 9.30, prevRating: 9.47, x: 340, y: 400 },
    { code: 'SMTPL', name: 'Salaipudhur-Madurai Tollway Private Limited', status: 'fall', rating: 9.21, prevRating: 9.66, x: 255, y: 445 },
    { code: 'SPPL', name: 'Shankarampet Projects Private Limited', status: 'rise', rating: 9.47, prevRating: 9.44, x: 360, y: 325 },
    { code: 'WUPTL', name: 'Western UP Tollway Limited', status: 'rise', rating: 9.20, prevRating: 8.96, x: 280, y: 85 },
    { code: 'WVEL', name: 'Walayar Tollways Pvt Ltd', status: 'fall', rating: 9.32, prevRating: 9.34, x: 130, y: 375 }
];


export const categories = [
    { id: 1, name: 'Roadways', icon: 'road' },
    { id: 2, name: 'Road Signage and Furniture', icon: 'signpost' },
    { id: 3, name: 'Structures', icon: 'building' },
    { id: 4, name: 'ATMS', icon: 'radio-tower' },
    { id: 5, name: 'TMS', icon: 'traffic-cone' },
    { id: 6, name: 'Landscaping', icon: 'tree-deciduous' },
    { id: 7, name: 'Project Facilities', icon: 'warehouse' }
];

export const conditionTypes = [
    { code: 'CC', name: 'Cleanliness', color: '#22c55e' },
    { code: 'FC', name: 'Functional', color: '#f59e0b' },
    { code: 'PC', name: 'Physical', color: '#a855f7' }
];

// Chart data
export const conditionChartData = [
    { month: 'Sep 2025', CC: 9.43, FC: 9.08, PC: 9.06 },
    { month: 'Oct 2025', CC: 9.48, FC: 9.04, PC: 9.13 },
    { month: 'Nov 2025', CC: 9.58, FC: 9.23, PC: 9.22 },
    { month: 'Dec 2025', CC: 9.66, FC: 9.21, PC: 9.43 },
    { month: 'Jan 2026', CC: 9.64, FC: 9.29, PC: 9.25 },
];

export const hoRatingData = [
    { month: 'Sep', rating: 8.9, target: 9.0 },
    { month: 'Oct', rating: 9.1, target: 9.0 },
    { month: 'Nov', rating: 9.2, target: 9.0 },
    { month: 'Dec', rating: 9.3, target: 9.0 }
];

export const issuesChartData = [
    { month: 'Sep', issues: 8500, avg: 9200 },
    { month: 'Oct', issues: 10200, avg: 9500 },
    { month: 'Nov', issues: 11800, avg: 10100 },
    { month: 'Dec', issues: 12400, avg: 10800 },
];

export const tarCountData = [
    { rating: '10', count: 8, color: '#22c55e' },
    { rating: '9', count: 6, color: '#4ade80' },
    { rating: '8', count: 5, color: '#fbbf24' },
    { rating: '7', count: 2, color: '#f59e0b' },
    { rating: '≤6', count: 1, color: '#ef4444' }
];

export const tarmCategoryData = [
    { category: 'TMS', actual: 9.88, target: 9.80, isRed: false },
    { category: 'Structures', actual: 9.34, target: 9.26, isRed: false },
    { category: 'Roadway', actual: 9.62, target: 9.34, isRed: false },
    { category: 'Road Signage and Furniture', actual: 9.63, target: 9.41, isRed: false },
    { category: 'Project Facilities', actual: 8.65, target: 8.67, isRed: true },
    { category: 'Landscaping', actual: 8.85, target: 7.37, isRed: false },
    { category: 'ATMS', actual: 9.94, target: 9.72, isRed: false }
];

// Element-wise Performance Data (categorized by rating)
export interface HeatmapElement {
    name: string;
    value: number;
    category: 'top' | 'onTrack' | 'attention';
}

export const heatmapData = {
    topPerformers: [
        { name: 'PTZ', value: 10.00 },
        { name: 'UFD (User Fare Display)', value: 10.00 },
        { name: 'VASD', value: 10.00 },
        { name: 'Stagnation Of Rain Water', value: 9.99 },
        { name: 'Automatic Boom Barrier', value: 9.99 },
        { name: 'OHLS (Overhead Lane Status Light)', value: 9.98 },
        { name: 'WIM (Weigh in Motion)', value: 9.97 },
        { name: 'MBCB', value: 9.97 },
        { name: 'Approach Settlements', value: 9.96 },
        { name: 'Traffic Lights', value: 9.95 },
        { name: 'Toilet Block', value: 9.94 },
        { name: 'AVCC (Automatic Vehicle Classifica)', value: 9.91 },
        { name: 'Operator Monitor', value: 9.90 },
        { name: 'Pavement', value: 9.89 },
        { name: 'SWB (Static Weigh Bridge)', value: 9.89 },
        { name: 'Lightings', value: 9.87 },
        { name: 'Incident Camera', value: 9.87 },
        { name: 'Wearing Coat On Deck Slab', value: 9.87 },
        { name: 'LPIC (License Plate Indicatory Cam)', value: 9.87 },
        { name: 'Traffic Blinkers', value: 9.81 },
        { name: 'Embankment', value: 9.77 },
        { name: 'Signages', value: 9.72 },
        { name: 'Delineators', value: 9.69 },
        { name: 'Shoulder', value: 9.69 },
        { name: 'Row', value: 9.68 },
        { name: 'Variable Message Sign', value: 9.63 },
    ],
    onTrack: [
        { name: 'Kerb', value: 9.47 },
        { name: 'PGR-Pedestrain Guardrail', value: 9.46 },
        { name: 'Rigid Crash Barriers', value: 9.45 },
        { name: 'Kilometer Stones', value: 9.40 },
        { name: 'Operator Customized Keyboard', value: 9.33 },
        { name: 'Pavement Markings', value: 9.29 },
        { name: 'Drainage', value: 9.28 },
        { name: 'Quadrant Pitching', value: 9.23 },
    ],
    needsAttention: [
        { name: 'Clearance of vent', value: 9.12 },
        { name: 'Drainage Spouts', value: 9.12 },
        { name: 'Hectometer Stones', value: 9.03 },
        { name: 'Object Hazard Marker', value: 8.78 },
        { name: 'Median', value: 8.50 },
        { name: 'Truck Lay', value: 8.69 },
        { name: 'Bus Bay', value: 8.25 },
        { name: 'Structure Numbering', value: 6.07 }
    ]
};

// Pyramid ranking data
export interface RankingProject {
    code: string;
    rating: number;
    prevRating: number;
    grade: 'E' | 'A' | 'B' | 'C';
}

export const pyramidRankings: RankingProject[][] = [
    // Top row - Rank 1 (E grade)
    [{ code: 'SMTPL', rating: 9.21, prevRating: 9.66, grade: 'E' }],
    // Second row - Ranks 2-3 (E grade)
    [
        { code: 'NKTPL', rating: 9.65, prevRating: 9.55, grade: 'E' },
        { code: 'MKTPL', rating: 9.36, prevRating: 9.48, grade: 'E' }
    ],
    // Third row - Ranks 4-6 (E grade)
    [
        { code: 'SIPL', rating: 9.30, prevRating: 9.47, grade: 'E' },
        { code: 'MHPL', rating: 9.71, prevRating: 9.45, grade: 'E' },
        { code: 'SPPL', rating: 9.47, prevRating: 9.44, grade: 'E' }
    ],
    // Fourth row - Ranks 7-10 (E grade)
    [
        { code: 'KETPL', rating: 9.53, prevRating: 9.42, grade: 'E' },
        { code: 'BFHL', rating: 9.39, prevRating: 9.40, grade: 'E' },
        { code: 'MBEL', rating: 9.30, prevRating: 9.37, grade: 'E' },
        { code: 'WVEL', rating: 9.32, prevRating: 9.34, grade: 'E' }
    ],
    // Fifth row - Ranks 11-15 (E and A grade)
    [
        { code: 'MSHP', rating: 9.22, prevRating: 9.33, grade: 'E' },
        { code: 'BWHPL', rating: 8.87, prevRating: 9.25, grade: 'E' },
        { code: 'GAEPL', rating: 9.11, prevRating: 9.17, grade: 'A' },
        { code: 'FRHL', rating: 9.48, prevRating: 9.10, grade: 'A' },
        { code: 'KMTPL', rating: 8.90, prevRating: 9.10, grade: 'A' }
    ],
    // Sixth row - Ranks 16-21 (A and B grade)
    [
        { code: 'JMTPL', rating: 8.99, prevRating: 9.09, grade: 'A' },
        { code: 'APEL', rating: 9.26, prevRating: 9.06, grade: 'A' },
        { code: 'NDEPL', rating: 8.90, prevRating: 9.05, grade: 'A' },
        { code: 'NAM', rating: 9.15, prevRating: 9.03, grade: 'A' },
        { code: 'WUPTL', rating: 9.20, prevRating: 8.96, grade: 'B' },
        { code: 'THPL', rating: 9.08, prevRating: 8.95, grade: 'B' }
    ],
    // Bottom row - Rank 22 (B grade)
    [
        { code: 'DATRL', rating: 8.42, prevRating: 8.75, grade: 'B' }
    ]
];

// Live ticker data
export const tickerData = [
    { code: 'APEL', value: 9.26, change: 0.77, isPositive: true, status: 'rise' },
    { code: 'BFHL', value: 9.39, change: -0.15, isPositive: false, status: 'fall' },
    { code: 'BWHPL', value: 8.87, change: -0.34, isPositive: false, status: 'fall' },
    { code: 'DATRL', value: 8.42, change: -0.002, isPositive: false, status: 'fall' },
    { code: 'FRHL', value: 9.48, change: 0.40, isPositive: true, status: 'rise' },
    { code: 'GAEPL', value: 9.11, change: 0.04, isPositive: true, status: 'rise' },
    { code: 'JMTPL', value: 8.99, change: -0.21, isPositive: false, status: 'fall' },
    { code: 'KETPL', value: 9.53, change: 0.63, isPositive: true, status: 'rise' },
    { code: 'KMTPL', value: 8.90, change: 0.01, isPositive: true, status: 'rise' },
    { code: 'THPL', value: 9.08, change: -0.06, isPositive: false, status: 'fall' },
    { code: 'MBEL', value: 9.30, change: -0.04, isPositive: false, status: 'fall' },
    { code: 'MHPL', value: 9.71, change: 0.31, isPositive: true, status: 'rise' },
    { code: 'MKTPL', value: 9.36, change: -0.16, isPositive: false, status: 'fall' },
    { code: 'MSHP', value: 9.22, change: 0.07, isPositive: true, status: 'rise' },
    { code: 'NAM', value: 9.15, change: 0.14, isPositive: true, status: 'rise' },
    { code: 'NDEPL', value: 8.90, change: 0.14, isPositive: true, status: 'rise' },
    { code: 'NKTPL', value: 9.65, change: 0.24, isPositive: true, status: 'rise' },
    { code: 'SIPL', value: 9.30, change: 0.19, isPositive: true, status: 'rise' },
    { code: 'SMTPL', value: 9.21, change: -0.52, isPositive: false, status: 'fall' },
    { code: 'SPPL', value: 9.47, change: -0.02, isPositive: false, status: 'fall' },
    { code: 'WUPTL', value: 9.20, change: 0.05, isPositive: true, status: 'rise' },
    { code: 'WVEL', value: 9.32, change: -0.28, isPositive: false, status: 'fall' },
];

// Overall rating gauge
export const overallRating = {
    current: 9.22,
    max: 10,
    previousMonth: 9.16
};
