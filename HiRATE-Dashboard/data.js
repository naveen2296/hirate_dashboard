// ===== DASHBOARD DATA - EXACT MATCH TO REFERENCES =====
const dashboardData = {
    overallRating: 8.94,

    // Pyramid chart data - exact match
    projectRatings: [
        { name: 'SMTPL', monthly: 9.49, cumulative: 9.71, grade: 'A' },
        { name: 'KETPL', monthly: 9.68, cumulative: 9.68, grade: 'A' },
        { name: 'SIPL', monthly: 9.47, cumulative: 9.65, grade: 'A' },
        { name: 'NKTPL', monthly: 9.14, cumulative: 9.54, grade: 'A' },
        { name: 'MKTPL', monthly: 9.58, cumulative: 9.52, grade: 'A' },
        { name: 'SPPL', monthly: 9.24, cumulative: 9.51, grade: 'A' },
        { name: 'MSHP', monthly: 9.17, cumulative: 9.48, grade: 'B' },
        { name: 'MHPL', monthly: 9.33, cumulative: 9.48, grade: 'B' },
        { name: 'MBEL', monthly: 9.27, cumulative: 9.44, grade: 'B' },
        { name: 'BWHPL', monthly: 9.09, cumulative: 9.40, grade: 'B' },
        { name: 'WVEPL', monthly: 9.06, cumulative: 9.40, grade: 'B' },
        { name: 'BFHL', monthly: 9.01, cumulative: 9.36, grade: 'B' },
        { name: 'APEL', monthly: 8.83, cumulative: 9.25, grade: 'B' },
        { name: 'GAEPL', monthly: 8.35, cumulative: 9.21, grade: 'C' },
        { name: 'KMTPL', monthly: 8.06, cumulative: 9.20, grade: 'C' },
        { name: 'FRHL', monthly: 9.16, cumulative: 9.15, grade: 'C' },
        { name: 'KTIPL', monthly: 8.49, cumulative: 9.14, grade: 'C' },
        { name: 'NDEPL', monthly: 9.21, cumulative: 9.14, grade: 'C' },
        { name: 'JMTPL', monthly: 8.16, cumulative: 9.11, grade: 'C' },
        { name: 'NAMEL', monthly: 8.93, cumulative: 9.11, grade: 'C' },
        { name: 'WUPTL', monthly: 9.04, cumulative: 8.94, grade: 'C' },
        { name: 'DATRL', monthly: 8.39, cumulative: 8.89, grade: 'C' }
    ],

    // Sum of Issues - exact match from reference
    issuesData: {
        labels: ['Pavement Markings', 'Signages', 'Delineators', 'Rigid Crash Barriers', 'Median', 'HM Stones',
            'Wearing Coat On...', 'Quadrant Pitching', 'Kerb', 'Lightings', 'Object Hazard Ma...',
            'Structure Number...', 'Shoulder', 'Incident Camera', 'ROW', 'Rain water stagnati...',
            'MBCB', 'AVCC', 'Static Weigh Bridge', 'Traffic Lights', 'Operator Monitor',
            'Approach Settleme...', 'Embankment', 'Overhead Lane Sta...', 'User Fare Display',
            'Truck Lay', 'Pedestrian Guard R...', 'WIM', 'Toilet Block'],
        values: [7662, 772, 548, 356, 328, 319, 250, 226, 213, 187, 179, 172, 39, 32, 30, 28, 26, 16, 15, 14, 12, 11, 11, 9, 8, 8, 7]
    },

    // Heatmap - exact match from reference (6 rows x 10 columns)
    heatmapRows: [
        [
            { name: 'MET', value: 10.00 },
            { name: 'WIM', value: 9.90 },
            { name: 'Lightings', value: 9.80 },
            { name: 'Pedestrian Guard Rail', value: 9.71 },
            { name: 'Quadrant Pitching', value: 9.40 },
            { name: 'Traffic Blinkers', value: 9.23 },
            { name: 'Pavement', value: 9.21 },
            { name: 'Rigid Crash Barri...', value: 9.18 },
            { name: 'Variable Message...', value: 9.10 },
            { name: null, value: null }
        ],
        [
            { name: 'PTZ', value: 10.00 },
            { name: 'Traffic Lights', value: 9.89 },
            { name: 'MBCB', value: 9.77 },
            { name: 'Boom Barrier', value: 9.67 },
            { name: 'Object Hazard Marker', value: 9.07 },
            { name: 'ROW', value: 8.97 },
            { name: 'Truck Lay', value: 8.93 },
            { name: 'Kerb', value: 8.87 },
            { name: 'Clearance of vent', value: 8.82 },
            { name: null, value: null }
        ],
        [
            { name: 'Anti glazers', value: 10.00 },
            { name: 'User Fare Display', value: 9.89 },
            { name: 'LPIC', value: 9.76 },
            { name: 'Wearing Coat On Deck Slab', value: 9.65 },
            { name: 'Drainage', value: 9.02 },
            { name: null, value: null },
            { name: 'KM Stones', value: 8.65 },
            { name: 'HM Stones', value: 8.35 },
            { name: 'Operator keybo...', value: 8.03 },
            { name: null, value: null }
        ],
        [
            { name: 'Approach Settlements', value: 9.95 },
            { name: 'AVCC', value: 9.85 },
            { name: 'Incident Camera', value: 9.76 },
            { name: 'Signages', value: 9.65 },
            { name: 'VASD', value: 9.00 },
            { name: null, value: null },
            { name: 'Shoulder', value: 8.64 },
            { name: null, value: null },
            { name: null, value: null },
            { name: null, value: null }
        ],
        [
            { name: 'Overhead Lane Status Light', value: 9.92 },
            { name: 'Rain water stagnation', value: 9.83 },
            { name: 'Toilet Block', value: 9.72 },
            { name: 'Drainage Spouts', value: 9.54 },
            { name: 'Pavement Markings', value: 8.99 },
            { name: 'Bus Bay', value: 8.58 },
            { name: 'Structure Numbering', value: 6.35 },
            { name: 'Median', value: 5.21 },
            { name: null, value: null },
            { name: null, value: null }
        ],
        [
            { name: 'Embankment', value: 9.91 },
            { name: 'Operator Monitor', value: 9.81 },
            { name: 'Static Weigh Bridge', value: 9.72 },
            { name: 'Delineators', value: 9.52 },
            { name: null, value: null },
            { name: null, value: null },
            { name: null, value: null },
            { name: null, value: null },
            { name: null, value: null },
            { name: null, value: null }
        ]
    ]
};
