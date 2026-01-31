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
        trend: { value: 3, isPositive: true },
        color: 'orange',
        icon: 'monitor'
    },
    {
        id: 'months-audited',
        title: 'Months Audited',
        value: 9,
        subtitle: 'FY 25-26',
        description: 'So far 9 months audited and continuing',
        color: 'blue',
        icon: 'calendar'
    },
    {
        id: 'audit-percentage',
        title: 'Audit Percentage',
        value: '10%',
        description: 'Initiated 10% auditing for all divisions since September 2025',
        trend: { value: 1.5, isPositive: true },
        color: 'purple',
        icon: 'percent'
    },
    {
        id: 'issues-found',
        title: 'HiRATE 2.0',
        value: '12K+',
        subtitle: '130K+ parameters',
        description: '12k+ issues were found upon 130k+ parameters in month of December 2025',
        color: 'cyan',
        icon: 'alert-triangle'
    },
    {
        id: 'average-rating',
        title: 'Average Rating',
        value: 9.28,
        description: 'Overall project average rating is 9.28 for FY 25-26',
        trend: { value: 0.15, isPositive: true },
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
    { code: 'WUPTL', name: 'Western UP Tollway Private Limited', status: 'rise', rating: 9.4, prevRating: 9.1, x: 280, y: 85 },
    { code: 'DATRL', name: 'Delhi Agra Toll Road Limited', status: 'rise', rating: 9.3, prevRating: 9.0, x: 260, y: 110 },
    { code: 'KMTPL', name: 'Kolkata Madhya Tollway Private Limited', status: 'rise', rating: 9.5, prevRating: 9.2, x: 420, y: 95 },
    { code: 'MBEL', name: 'MB Eastern Limited', status: 'rise', rating: 9.2, prevRating: 8.9, x: 235, y: 125 },
    { code: 'GAEPL', name: 'Ganga Expressway Private Limited', status: 'rise', rating: 9.6, prevRating: 9.3, x: 360, y: 130 },
    { code: 'JMTL', name: 'Jaipur Mahua Toll Road Limited', status: 'rise', rating: 9.1, prevRating: 8.8, x: 170, y: 155 },
    { code: 'FRHL', name: 'Farakka Raiganj Highway Limited', status: 'rise', rating: 9.3, prevRating: 9.0, x: 430, y: 165 },
    { code: 'BFHL', name: 'Baharampore Farakka Highway Limited', status: 'fall', rating: 8.7, prevRating: 8.9, x: 425, y: 195 },
    { code: 'BWHPL', name: 'Bharuch Waghodia Highway Private Limited', status: 'rise', rating: 9.4, prevRating: 9.1, x: 145, y: 220 },
    { code: 'MSHPL', name: 'Mundra SH Highway Private Limited', status: 'fall', rating: 8.5, prevRating: 8.8, x: 130, y: 245 },
    { code: 'MHPL', name: 'Mumbai Highway Private Limited', status: 'fall', rating: 8.6, prevRating: 8.9, x: 380, y: 255 },
    { code: 'SPPL', name: 'Surat Pune Private Limited', status: 'fall', rating: 8.4, prevRating: 8.7, x: 350, y: 275 },
    { code: 'NDEPL', name: 'Nashik Dhule Expressway Private Limited', status: 'fall', rating: 8.3, prevRating: 8.6, x: 160, y: 290 },
    { code: 'APEL', name: 'Ahmednagar Pune Expressway Limited', status: 'fall', rating: 8.5, prevRating: 8.8, x: 155, y: 320 },
    { code: 'NAMEL', name: 'Nagpur Amravati Expressway Limited', status: 'fall', rating: 8.4, prevRating: 8.7, x: 395, y: 295 },
    { code: 'KTIPL', name: 'Kota Toll Infrastructure Private Limited', status: 'fall', rating: 8.6, prevRating: 8.9, x: 360, y: 325 },
    { code: 'WVEPL', name: 'Wardha Vidarbha Expressway Private Limited', status: 'fall', rating: 8.2, prevRating: 8.5, x: 130, y: 375 },
    { code: 'KETPL', name: 'Kurnool Expressway Toll Private Limited', status: 'rise', rating: 9.6, prevRating: 9.3, x: 170, y: 405 },
    { code: 'MKTPL', name: 'Mysore Kochi Toll Private Limited', status: 'fall', rating: 8.5, prevRating: 8.8, x: 275, y: 420 },
    { code: 'SIPL', name: 'Salem Infrastructure Private Limited', status: 'fall', rating: 8.3, prevRating: 8.6, x: 340, y: 400 },
    { code: 'SMTPL', name: 'Salem Madurai Toll Private Limited', status: 'rise', rating: 9.6, prevRating: 9.4, x: 255, y: 445 },
    { code: 'NKTPL', name: 'Nellore Kavali Toll Private Limited', status: 'fall', rating: 8.4, prevRating: 8.7, x: 295, y: 420 }
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
    // Top row - Excellence
    [{ code: 'SMTPL', rating: 9.6, prevRating: 9.4, grade: 'E' }],
    // Second row
    [
        { code: 'KETPL', rating: 9.6, prevRating: 9.3, grade: 'E' },
        { code: 'GAEPL', rating: 9.6, prevRating: 9.3, grade: 'E' }
    ],
    // Third row
    [
        { code: 'KMTPL', rating: 9.5, prevRating: 9.2, grade: 'E' },
        { code: 'WUPTL', rating: 9.4, prevRating: 9.1, grade: 'E' },
        { code: 'BWHPL', rating: 9.4, prevRating: 9.1, grade: 'E' }
    ],
    // Fourth row
    [
        { code: 'DATRL', rating: 9.3, prevRating: 9.0, grade: 'A' },
        { code: 'FRHL', rating: 9.3, prevRating: 9.0, grade: 'A' },
        { code: 'MBEL', rating: 9.2, prevRating: 8.9, grade: 'A' },
        { code: 'JMTL', rating: 9.1, prevRating: 8.8, grade: 'A' }
    ],
    // Fifth row
    [
        { code: 'BFHL', rating: 8.7, prevRating: 8.9, grade: 'B' },
        { code: 'MHPL', rating: 8.6, prevRating: 8.9, grade: 'B' },
        { code: 'KTIPL', rating: 8.6, prevRating: 8.9, grade: 'B' },
        { code: 'MSHPL', rating: 8.5, prevRating: 8.8, grade: 'B' },
        { code: 'APEL', rating: 8.5, prevRating: 8.8, grade: 'B' }
    ],
    // Sixth row
    [
        { code: 'MKTPL', rating: 8.5, prevRating: 8.8, grade: 'B' },
        { code: 'NKTPL', rating: 8.4, prevRating: 8.7, grade: 'B' },
        { code: 'NAMEL', rating: 8.4, prevRating: 8.7, grade: 'B' },
        { code: 'SPPL', rating: 8.4, prevRating: 8.7, grade: 'B' },
        { code: 'SIPL', rating: 8.3, prevRating: 8.6, grade: 'C' },
        { code: 'NDEPL', rating: 8.3, prevRating: 8.6, grade: 'C' }
    ],
    // Bottom row
    [
        { code: 'WVEPL', rating: 8.2, prevRating: 8.5, grade: 'C' }
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
    { code: 'NAMEL', value: 8.53, change: -0.40, isPositive: false },
    { code: 'NDEPL', value: 8.73, change: -0.48, isPositive: false },
    { code: 'NKTPL', value: 9.75, change: 0.61, isPositive: true },
    { code: 'SIPL', value: 8.89, change: -0.58, isPositive: false },
    { code: 'SMTPL', value: 9.37, change: 0.08, isPositive: true },
    { code: 'SPPL', value: 9.04, change: -0.20, isPositive: false },
    { code: 'WUPTL', value: 8.79, change: -0.25, isPositive: false },
    { code: 'WVEPL', value: 8.93, change: -0.13, isPositive: false },
];

// Overall rating gauge
export const overallRating = {
    current: 9.28,
    max: 10,
    target: 9.0,
    previousMonth: 9.15
};
