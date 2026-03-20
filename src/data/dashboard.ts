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
        value: 11,
        subtitle: 'FY 25-26',
        description: 'So far 11 months audited and continuing',
        trend: { value: 92, isPositive: true, status: 'rise' },
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
        value: '15K+',
        subtitle: '147K+ parameters',
        description: '15k+ issues were found upon 147k+ parameters in month of February 2026',
        trend: { value: 2.0, isPositive: true, status: 'rise' },
        color: 'cyan',
        icon: 'alert-triangle'
    },
    {
        id: 'average-rating',
        title: 'Average Rating',
        value: 9.25,
        description: 'Overall project average rating is 9.25 for FY 25-26',
        trend: { value: 0.11, isPositive: false, status: 'fall' },
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
    { code: 'APEL', name: 'Andhra Pradesh Expressway Limited', status: 'fall', rating: 8.49, prevRating: 9.04, x: 155, y: 320 },
    { code: 'BFHL', name: 'Baharampore Farakka Highways Limited', status: 'rise', rating: 9.54, prevRating: 9.40, x: 425, y: 195 },
    { code: 'BWHPL', name: 'DBL Borgaon Watambare Highways Private Limited', status: 'fall', rating: 9.20, prevRating: 9.29, x: 145, y: 220 },
    { code: 'DATRL', name: 'Delhi Agra Tollway Limited', status: 'fall', rating: 8.42, prevRating: 8.78, x: 260, y: 110 },
    { code: 'FRHL', name: 'Farakka-Raiganj Highways Ltd', status: 'rise', rating: 9.08, prevRating: 9.07, x: 430, y: 165 },
    { code: 'GAEPL', name: 'Ghaziabad Aligarh Expressway Private Limited', status: 'fall', rating: 9.07, prevRating: 9.17, x: 360, y: 130 },
    { code: 'JMTPL', name: 'Jaipur-Mahua Tollway Private Limited', status: 'rise', rating: 9.20, prevRating: 9.10, x: 170, y: 155 },
    { code: 'KETPL', name: 'Kanyakumari-Etturavattam Tollway Private Limited', status: 'fall', rating: 8.89, prevRating: 9.41, x: 170, y: 405 },
    { code: 'KMTPL', name: 'Kotwa-Muzaffarpur Tollway Private Limited', status: 'fall', rating: 8.89, prevRating: 9.11, x: 420, y: 95 },
    { code: 'THPL', name: 'Tirumala Infra Private Limited', status: 'rise', rating: 9.15, prevRating: 8.94, x: 130, y: 245 },
    { code: 'MBEL', name: 'Mahua Bharatpur Expressway Limited', status: 'fall', rating: 9.34, prevRating: 9.37, x: 235, y: 125 },
    { code: 'MHPL', name: 'Mangloor Highways Private Limited', status: 'fall', rating: 9.40, prevRating: 9.43, x: 380, y: 255 },
    { code: 'MKTPL', name: 'Madurai-Kanyakumari Tollway Private Limited', status: 'rise', rating: 9.51, prevRating: 9.49, x: 275, y: 420 },
    { code: 'MSHP', name: 'Mangalwedha Solapur Highways Private Limited', status: 'fall', rating: 9.14, prevRating: 9.35, x: 350, y: 275 },
    { code: 'NAM', name: 'N.A.M. Expressway Limited', status: 'fall', rating: 9.00, prevRating: 9.02, x: 395, y: 295 },
    { code: 'NDEPL', name: 'Nelamangala Devihalli Expressway Private Limited', status: 'fall', rating: 8.75, prevRating: 9.06, x: 160, y: 290 },
    { code: 'NKTPL', name: 'Nanguneri-Kanyakumari Tollway Private Limited', status: 'fall', rating: 9.41, prevRating: 9.54, x: 295, y: 420 },
    { code: 'SIPL', name: 'Srirangam Infra Private Limited', status: 'fall', rating: 9.11, prevRating: 9.49, x: 340, y: 400 },
    { code: 'SMTPL', name: 'Salaipudhur-Madurai Tollway Private Limited', status: 'rise', rating: 9.73, prevRating: 9.70, x: 255, y: 445 },
    { code: 'SPPL', name: 'Shankarampet Projects Private Limited', status: 'rise', rating: 9.49, prevRating: 9.43, x: 360, y: 325 },
    { code: 'WUPTL', name: 'Western UP Tollway Limited', status: 'rise', rating: 9.15, prevRating: 8.94, x: 280, y: 85 },
    { code: 'WVEL', name: 'Walayar Tollways Pvt Ltd', status: 'rise', rating: 9.60, prevRating: 9.34, x: 130, y: 375 }
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
    { category: 'TMS', actual: 9.95, target: 9.78, isRed: false },
    { category: 'Structures', actual: 9.41, target: 9.24, isRed: false },
    { category: 'Roadway', actual: 9.59, target: 9.29, isRed: false },
    { category: 'Road Signage and Furniture', actual: 9.46, target: 9.37, isRed: false },
    { category: 'Project Facilities', actual: 8.38, target: 8.67, isRed: true },
    { category: 'Landscaping', actual: 8.67, target: 7.10, isRed: false },
    { category: 'ATMS', actual: 9.74, target: 9.68, isRed: false }
];

// Element-wise Performance Data (categorized by rating)
export interface HeatmapElement {
    name: string;
    value: number;
    category: 'top' | 'onTrack' | 'attention';
}

export const heatmapData = {
    topPerformers: [
        { name: 'Anti Glazers', value: 10.00 },
        { name: 'UFD (User Fare Display)', value: 10.00 },
        { name: 'AVCC (Automatic Vehicle Classifica)', value: 10.00 },
        { name: 'VASD', value: 10.00 },
        { name: 'Automatic Boom Barrier', value: 10.00 },
        { name: 'WIM (Weigh in Motion)', value: 10.00 },
        { name: 'LPIC (License Plate Indicatory Cam)', value: 10.00 },
        { name: 'Stagnation Of Rain Water', value: 10.00 },
        { name: 'PTZ', value: 10.00 },
        { name: 'Approach Settlements', value: 10.00 },
        { name: 'Traffic Lights', value: 10.00 },
        { name: 'SWB (Static Weigh Bridge)', value: 9.99 },
        { name: 'Incident Camera', value: 9.93 },
        { name: 'OHLS (Overhead Lane Status Light)', value: 9.88 },
        { name: 'Wearing Coat On Deck Slab', value: 9.88 },
        { name: 'MBCB', value: 9.88 },
        { name: 'Lightings', value: 9.87 },
        { name: 'Operator Monitor', value: 9.86 },
        { name: 'Pavement', value: 9.82 },
        { name: 'Embankment', value: 9.81 },
        { name: 'Drainage Spouts', value: 9.80 },
        { name: 'Toilet Block', value: 9.79 },
        { name: 'Shoulder', value: 9.77 },
        { name: 'Row', value: 9.72 },
        { name: 'Operator Customized Keyboard', value: 9.52 },
    ],
    onTrack: [
        { name: 'Delineators', value: 9.71 },
        { name: 'PGR-Pedestrain Guardrail', value: 9.65 },
        { name: 'Rigid Crash Barriers', value: 9.65 },
        { name: 'Traffic Blinkers', value: 9.56 },
        { name: 'Signages', value: 9.54 },
        { name: 'Condition Of Clearance Of Vent', value: 9.50 },
        { name: 'Drainage', value: 9.42 },
        { name: 'Quadrant Pitching', value: 9.29 },
    ],
    needsAttention: [
        { name: 'Variable Message Sign', value: 9.25 },
        { name: 'Object Hazard Marker', value: 9.22 },
        { name: 'Kilometer Stones', value: 9.13 },
        { name: 'Kerb', value: 9.12 },
        { name: 'Pavement Markings', value: 8.99 },
        { name: 'Hectometer Stones', value: 8.73 },
        { name: 'Bus Bay', value: 8.41 },
        { name: 'Median', value: 8.22 },
        { name: 'Truck Lay', value: 7.17 },
        { name: 'Structure Numbering', value: 5.39 }
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
    // Top row - Excellence (Cum >= 9.25)
    [{ code: 'SMTPL', rating: 9.73, prevRating: 9.70, grade: 'E' }],
    // Second row - E grade
    [
        { code: 'KETPL', rating: 8.89, prevRating: 9.41, grade: 'E' },
        { code: 'SIPL', rating: 9.11, prevRating: 9.49, grade: 'E' }
    ],
    // Third row - E and A grade
    [
        { code: 'NKTPL', rating: 9.41, prevRating: 9.54, grade: 'E' },
        { code: 'MKTPL', rating: 9.51, prevRating: 9.49, grade: 'A' },
        { code: 'SPPL', rating: 9.49, prevRating: 9.43, grade: 'A' }
    ],
    // Fourth row - A grade (9.0-9.25)
    [
        { code: 'MBEL', rating: 9.34, prevRating: 9.37, grade: 'A' },
        { code: 'MSHP', rating: 9.14, prevRating: 9.35, grade: 'A' },
        { code: 'MHPL', rating: 9.40, prevRating: 9.43, grade: 'A' },
        { code: 'BFHL', rating: 9.54, prevRating: 9.40, grade: 'A' }
    ],
    // Fifth row - A grade
    [
        { code: 'WVEL', rating: 9.60, prevRating: 9.34, grade: 'A' },
        { code: 'BWHPL', rating: 9.20, prevRating: 9.29, grade: 'A' },
        { code: 'GAEPL', rating: 9.07, prevRating: 9.17, grade: 'B' },
        { code: 'KMTPL', rating: 8.89, prevRating: 9.11, grade: 'B' },
        { code: 'APEL', rating: 8.49, prevRating: 9.04, grade: 'B' }
    ],
    // Sixth row - B grade (8.75-9.0)
    [
        { code: 'FRHL', rating: 9.08, prevRating: 9.07, grade: 'B' },
        { code: 'NDEPL', rating: 8.75, prevRating: 9.06, grade: 'B' },
        { code: 'THPL', rating: 9.15, prevRating: 8.94, grade: 'B' },
        { code: 'JMTPL', rating: 9.20, prevRating: 9.10, grade: 'B' },
        { code: 'NAM', rating: 9.00, prevRating: 9.02, grade: 'C' },
        { code: 'WUPTL', rating: 9.15, prevRating: 8.94, grade: 'C' }
    ],
    // Bottom row - C grade (<8.75)
    [
        { code: 'DATRL', rating: 8.42, prevRating: 8.78, grade: 'C' }
    ]
];

// Live ticker data
export const tickerData = [
    { code: 'APEL', value: 8.49, change: -0.33, isPositive: false, status: 'fall' },
    { code: 'BFHL', value: 9.54, change: 0.13, isPositive: true, status: 'rise' },
    { code: 'BWHPL', value: 9.20, change: 0.23, isPositive: true, status: 'rise' },
    { code: 'DATRL', value: 8.42, change: -0.51, isPositive: false, status: 'fall' },
    { code: 'FRHL', value: 9.08, change: 0.27, isPositive: true, status: 'rise' },
    { code: 'GAEPL', value: 9.07, change: 0.02, isPositive: true, status: 'rise' },
    { code: 'JMTPL', value: 9.20, change: -0.14, isPositive: false, status: 'fall' },
    { code: 'KETPL', value: 8.89, change: 0.44, isPositive: true, status: 'rise' },
    { code: 'KMTPL', value: 8.89, change: 0.05, isPositive: true, status: 'rise' },
    { code: 'THPL', value: 9.15, change: 1.53, isPositive: true, status: 'rise' },
    { code: 'MBEL', value: 9.34, change: 0.42, isPositive: true, status: 'rise' },
    { code: 'MHPL', value: 9.40, change: 0.26, isPositive: true, status: 'rise' },
    { code: 'MKTPL', value: 9.51, change: 0.17, isPositive: true, status: 'rise' },
    { code: 'MSHP', value: 9.14, change: 0.01, isPositive: true, status: 'rise' },
    { code: 'NAM', value: 9.00, change: 0.27, isPositive: true, status: 'rise' },
    { code: 'NDEPL', value: 8.75, change: -0.38, isPositive: false, status: 'fall' },
    { code: 'NKTPL', value: 9.41, change: -0.04, isPositive: false, status: 'fall' },
    { code: 'SIPL', value: 9.11, change: -0.04, isPositive: false, status: 'fall' },
    { code: 'SMTPL', value: 9.73, change: 0.00, isPositive: true, status: 'rise' },
    { code: 'SPPL', value: 9.49, change: 0.35, isPositive: true, status: 'rise' },
    { code: 'WUPTL', value: 9.15, change: 0.26, isPositive: true, status: 'rise' },
    { code: 'WVEL', value: 9.60, change: 0.53, isPositive: true, status: 'rise' },
];

// Overall rating gauge
export const overallRating = {
    current: 9.16,
    max: 10,
    previousMonth: 9.02
};
