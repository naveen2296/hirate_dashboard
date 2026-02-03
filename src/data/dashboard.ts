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
        value: 9,
        subtitle: 'FY 25-26',
        description: 'So far 9 months audited and continuing',
        trend: { value: 77, isPositive: true },
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
        subtitle: '130K+ parameters',
        description: '12k+ issues were found upon 130k+ parameters in month of December 2025',
        trend: { value: 0.27, isPositive: true },
        color: 'cyan',
        icon: 'alert-triangle'
    },
    {
        id: 'average-rating',
        title: 'Average Rating',
        value: 9.28,
        description: 'Overall project average rating is 9.28 for FY 25-26',
        trend: { value: 0.54, isPositive: true },
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
    { code: 'APEL', name: 'Andhra Pradesh Expressway Limited', status: 'fall', rating: 8.11, prevRating: 8.83, x: 155, y: 320 },
    { code: 'BFHL', name: 'Baharampore Farakka Highways Limited', status: 'rise', rating: 9.41, prevRating: 9.06, x: 425, y: 195 },
    { code: 'BWHPL', name: 'DBL Borgaon Watambare Highways Private Limited', status: 'fall', rating: 8.66, prevRating: 9.02, x: 145, y: 220 },
    { code: 'DATRL', name: 'Delhi Agra Tollway Limited', status: 'fall', rating: 8.08, prevRating: 8.50, x: 260, y: 110 },
    { code: 'FRHL', name: 'Farakka-Raiganj Highways Ltd', status: 'fall', rating: 8.69, prevRating: 8.80, x: 430, y: 165 },
    { code: 'GAEPL', name: 'Ghaziabad Aligarh Expressway Private Limited', status: 'rise', rating: 9.11, prevRating: 8.90, x: 360, y: 130 },
    { code: 'JMTPL', name: 'Jaipur-Mahua Tollway Private Limited', status: 'fall', rating: 8.61, prevRating: 8.76, x: 170, y: 155 },
    { code: 'KETPL', name: 'Kanyakumari-Etturavattam Tollway Private Limited', status: 'fall', rating: 8.68, prevRating: 9.27, x: 170, y: 405 },
    { code: 'KMTPL', name: 'Kotwa-Muzaffarpur Tollway Private Limited', status: 'rise', rating: 8.89, prevRating: 8.87, x: 420, y: 95 },
    { code: 'THPL', name: 'Tirumala Infra Private Limited', status: 'fall', rating: 8.45, prevRating: 8.76, x: 130, y: 245 },
    { code: 'MBEL', name: 'Mahua Bharatpur Expressway Limited', status: 'rise', rating: 9.30, prevRating: 9.12, x: 235, y: 125 },
    { code: 'MHPL', name: 'Mangloor Highways Private Limited', status: 'fall', rating: 8.56, prevRating: 9.08, x: 380, y: 255 },
    { code: 'MKTPL', name: 'Madurai-Kanyakumari Tollway Private Limited', status: 'rise', rating: 9.36, prevRating: 9.21, x: 275, y: 420 },
    { code: 'MSHP', name: 'Mangalwedha Solapur Highways Private Limited', status: 'fall', rating: 8.64, prevRating: 9.09, x: 350, y: 275 },
    { code: 'NAM', name: 'N.A.M. Expressway Limited', status: 'fall', rating: 8.53, prevRating: 8.75, x: 395, y: 295 },
    { code: 'NDEPL', name: 'Nelamangala Devihalli Expressway Private Limited', status: 'fall', rating: 8.73, prevRating: 8.79, x: 160, y: 290 },
    { code: 'NKTPL', name: 'Nanguneri-Kanyakumari Tollway Private Limited', status: 'rise', rating: 9.75, prevRating: 9.27, x: 295, y: 420 },
    { code: 'SIPL', name: 'Srirangam Infra Private Limited', status: 'fall', rating: 8.89, prevRating: 9.27, x: 340, y: 400 },
    { code: 'SMTPL', name: 'Salaipudhur-Madurai Tollway Private Limited', status: 'rise', rating: 9.57, prevRating: 9.40, x: 255, y: 445 },
    { code: 'SPPL', name: 'Shankarampet Projects Private Limited', status: 'fall', rating: 9.04, prevRating: 9.16, x: 360, y: 325 },
    { code: 'WUPTL', name: 'Western UP Tollway Limited', status: 'rise', rating: 8.79, prevRating: 8.62, x: 280, y: 85 },
    { code: 'WVEL', name: 'Walayar Tollways Pvt Ltd', status: 'fall', rating: 8.93, prevRating: 9.04, x: 130, y: 375 }
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
    { month: 'Dec 2025', CC: 9.66, FC: 9.21, PC: 9.43 }
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
    { month: 'Dec', issues: 12400, avg: 10800 }
];

export const tarCountData = [
    { rating: '10', count: 8, color: '#22c55e' },
    { rating: '9', count: 6, color: '#4ade80' },
    { rating: '8', count: 5, color: '#fbbf24' },
    { rating: '7', count: 2, color: '#f59e0b' },
    { rating: '≤6', count: 1, color: '#ef4444' }
];

export const tarmCategoryData = [
    { category: 'TMS', actual: 9.61, target: 9.50, isRed: true },
    { category: 'Structures', actual: 9.31, target: 9.25, isRed: false },
    { category: 'Roadway', actual: 9.36, target: 9.30, isRed: false },
    { category: 'Road Signage and Furniture', actual: 9.39, target: 9.30, isRed: false },
    { category: 'Project Facilities', actual: 8.99, target: 8.95, isRed: false },
    { category: 'Landscaping', actual: 7.22, target: 8.50, isRed: false },
    { category: 'ATMS', actual: 9.50, target: 9.40, isRed: true }
];

// Element-wise Performance Data (categorized by rating)
export interface HeatmapElement {
    name: string;
    value: number;
    category: 'top' | 'onTrack' | 'attention';
}

export const heatmapData = {
    topPerformers: [
        { name: 'MET', value: 10.00 },
        { name: 'Overhead Lane Status Light', value: 10.00 },
        { name: 'PTZ', value: 10.00 },
        { name: 'VASD', value: 10.00 },
        { name: 'VIDS', value: 10.00 },
        { name: 'Rain water stagnation', value: 10.00 },
        { name: 'Traffic Lights', value: 9.96 },
        { name: 'User Fare Display', value: 9.96 },
        { name: 'AVCC', value: 9.95 },
        { name: 'LPIC', value: 9.91 },
        { name: 'Toilet Block', value: 9.90 },
        { name: 'Approach Settlements', value: 9.89 },
        { name: 'WIM', value: 9.88 },
        { name: 'Lightings', value: 9.86 },
        { name: 'Boom Barrier', value: 9.85 },
        { name: 'Operator Monitor', value: 9.83 },
        { name: 'Incident Camera', value: 9.83 },
        { name: 'Static Weigh Bridge', value: 9.82 },
        { name: 'MBCB', value: 9.82 },
        { name: 'Wearing Coat On Deck Slab', value: 9.81 },
        { name: 'Pavement', value: 9.73 },
        { name: 'Clearance of vent', value: 9.71 },
        { name: 'Signages', value: 9.65 },
        { name: 'Drainage', value: 9.60 },
        { name: 'Delineators', value: 9.56 },
    ],
    onTrack: [
        { name: 'Quadrant Pitching', value: 9.47 },
        { name: 'Drainage Spouts', value: 9.46 },
        { name: 'Embankment', value: 9.41 },
        { name: 'ROW', value: 9.26 },
        { name: 'Object Hazard Marker', value: 9.26 },
        { name: 'Operator keyboard', value: 9.22 },
        { name: 'Traffic Blinkers', value: 9.20 },
        { name: 'Rigid Crash Barriers', value: 9.18 },
        { name: 'Shoulder', value: 9.13 },
        { name: 'Pavement Markings', value: 9.09 },
        { name: 'Kerb', value: 9.00 },

    ],
    needsAttention: [
        { name: 'Truck Lay', value: 8.92 },
        { name: 'KM Stones', value: 8.87 },
        { name: 'Pedestrian Guard Rail', value: 8.84 },
        { name: 'Bus Bay', value: 8.80 },
        { name: 'HM Stones', value: 8.63 },
        { name: 'Variable Message Sign', value: 8.53 },
        { name: 'Median', value: 6.34 },
        { name: 'Structure Numbering', value: 6.31 },
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
    [{ code: 'SMTPL', rating: 9.57, prevRating: 9.40, grade: 'E' }],
    // Second row - E grade
    [
        { code: 'KETPL', rating: 8.68, prevRating: 9.27, grade: 'E' },
        { code: 'SIPL', rating: 8.89, prevRating: 9.27, grade: 'E' }
    ],
    // Third row - E and A grade
    [
        { code: 'NKTPL', rating: 9.75, prevRating: 9.27, grade: 'E' },
        { code: 'MKTPL', rating: 9.36, prevRating: 9.21, grade: 'A' },
        { code: 'SPPL', rating: 9.04, prevRating: 9.16, grade: 'A' }
    ],
    // Fourth row - A grade (9.0-9.25)
    [
        { code: 'MBEL', rating: 9.30, prevRating: 9.12, grade: 'A' },
        { code: 'MSHP', rating: 8.64, prevRating: 9.09, grade: 'A' },
        { code: 'MHPL', rating: 8.56, prevRating: 9.08, grade: 'A' },
        { code: 'BFHL', rating: 9.41, prevRating: 9.06, grade: 'A' }
    ],
    // Fifth row - A grade
    [
        { code: 'WVEL', rating: 8.93, prevRating: 9.04, grade: 'A' },
        { code: 'BWHPL', rating: 8.66, prevRating: 9.02, grade: 'A' },
        { code: 'GAEPL', rating: 9.11, prevRating: 8.90, grade: 'B' },
        { code: 'KMTPL', rating: 8.89, prevRating: 8.87, grade: 'B' },
        { code: 'APEL', rating: 8.11, prevRating: 8.83, grade: 'B' }
    ],
    // Sixth row - B grade (8.75-9.0)
    [
        { code: 'FRHL', rating: 8.69, prevRating: 8.80, grade: 'B' },
        { code: 'NDEPL', rating: 8.73, prevRating: 8.79, grade: 'B' },
        { code: 'THPL', rating: 8.45, prevRating: 8.76, grade: 'B' },
        { code: 'JMTPL', rating: 8.61, prevRating: 8.76, grade: 'B' },
        { code: 'NAM', rating: 8.53, prevRating: 8.75, grade: 'C' },
        { code: 'WUPTL', rating: 8.79, prevRating: 8.62, grade: 'C' }
    ],
    // Bottom row - C grade (<8.75)
    [
        { code: 'DATRL', rating: 8.08, prevRating: 8.50, grade: 'C' }
    ]
];

// Live ticker data
export const tickerData = [
    { code: 'APEL', value: 8.11, change: -0.72, isPositive: false },
    { code: 'BFHL', value: 9.41, change: 0.40, isPositive: true },
    { code: 'BWHPL', value: 8.66, change: -0.43, isPositive: false },
    { code: 'DATRL', value: 8.08, change: -0.31, isPositive: false },
    { code: 'FRHL', value: 8.69, change: -0.47, isPositive: false },
    { code: 'GAEPL', value: 9.11, change: 0.76, isPositive: true },
    { code: 'JMTPL', value: 8.61, change: 0.45, isPositive: true },
    { code: 'KETPL', value: 8.68, change: -1.00, isPositive: false },
    { code: 'KMTPL', value: 8.89, change: 0.83, isPositive: true },
    { code: 'THPL', value: 8.45, change: -0.04, isPositive: false },
    { code: 'MBEL', value: 9.30, change: 0.03, isPositive: true },
    { code: 'MHPL', value: 8.56, change: -0.77, isPositive: false },
    { code: 'MKTPL', value: 9.36, change: -0.22, isPositive: false },
    { code: 'MSHP', value: 8.64, change: -0.73, isPositive: false },
    { code: 'NAM', value: 8.53, change: -0.40, isPositive: false },
    { code: 'NDEPL', value: 8.73, change: -0.48, isPositive: false },
    { code: 'NKTPL', value: 9.75, change: 0.61, isPositive: true },
    { code: 'SIPL', value: 8.89, change: -0.58, isPositive: false },
    { code: 'SMTPL', value: 9.37, change: 0.08, isPositive: true },
    { code: 'SPPL', value: 9.04, change: -0.20, isPositive: false },
    { code: 'WUPTL', value: 8.79, change: -0.25, isPositive: false },
    { code: 'WVEL', value: 8.93, change: -0.13, isPositive: false },
];

// Overall rating gauge
export const overallRating = {
    current: 8.88,
    max: 10,
    previousMonth: 9.00
};
