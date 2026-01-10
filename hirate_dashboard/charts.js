// ===== CHARTS - MATCHING REFERENCE EXACTLY =====
Chart.register(ChartDataLabels);

const colors = {
    green: '#8bc34a',
    greenDark: '#4caf50',
    purple: '#9c27b0',
    orange: '#ff9800',
    red: '#ef4444',
    pink: '#f8a5a5',
    brown: '#cd8564',
    blue: '#2196f3'
};

Chart.defaults.color = '#374151';
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.font.size = 10;

// ===== 1. GAUGE CHART =====
function initGaugeChart() {
    const ctx = document.getElementById('gaugeChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [89.4, 10.6],
                backgroundColor: ['#8bc34a', '#e5e7eb'],
                borderWidth: 0,
                circumference: 180,
                rotation: 270
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            animation: { duration: 2000, easing: 'easeOutElastic' },
            plugins: { legend: { display: false }, tooltip: { enabled: false }, datalabels: { display: false } }
        }
    });
}

// ===== 2. HO RATING BAR CHART =====
function initHoRatingChart() {
    const ctx = document.getElementById('hoRatingChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Sep', 'Oct', 'Nov'],
            datasets: [{
                data: [8.88, 8.92, 9.00],
                backgroundColor: ['#4caf50', '#4caf50', '#4caf50'],
                borderRadius: 4,
                barThickness: 30
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 1500, delay: ctx => ctx.dataIndex * 200 },
            plugins: {
                legend: { display: false },
                datalabels: { anchor: 'end', align: 'top', offset: -4, font: { weight: 'bold', size: 10 }, color: '#374151', formatter: v => v.toFixed(2) }
            },
            scales: {
                x: { grid: { display: false }, ticks: { font: { size: 10 } } },
                y: { display: false, min: 8.5, max: 9.3 }
            }
        }
    });
}

// ===== 3. CONDITION RATING - FILLED AREA CHART (Matching reference image 1) =====
function initConditionChart() {
    const ctx = document.getElementById('conditionChart');
    if (!ctx) return;

    const context = ctx.getContext('2d');

    // CC gradient (green, light fill)
    const ccGradient = context.createLinearGradient(0, 0, 0, ctx.height || 65);
    ccGradient.addColorStop(0, 'rgba(139, 195, 74, 0.35)');
    ccGradient.addColorStop(1, 'rgba(139, 195, 74, 0.1)');

    // PC gradient (purple/pink fill underneath)
    const pcGradient = context.createLinearGradient(0, 0, 0, ctx.height || 65);
    pcGradient.addColorStop(0, 'rgba(180, 120, 140, 0.4)');
    pcGradient.addColorStop(1, 'rgba(180, 120, 140, 0.15)');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Sep 2025', 'Oct 2025', 'Nov 2025'],
            datasets: [
                {
                    label: 'CC',
                    data: [9.43, 9.48, 9.58],
                    borderColor: '#8bc34a',
                    backgroundColor: ccGradient,
                    fill: true,
                    tension: 0,
                    pointRadius: 4,
                    pointBackgroundColor: '#8bc34a',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 1,
                    borderWidth: 2
                },
                {
                    label: 'FC',
                    data: [9.06, 9.13, 9.22],
                    borderColor: '#9c27b0',
                    fill: false,
                    tension: 0,
                    pointRadius: 4,
                    pointBackgroundColor: '#9c27b0',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 1,
                    borderWidth: 2
                },
                {
                    label: 'PC',
                    data: [9.08, 9.04, 9.22],
                    borderColor: '#ff6b6b',
                    backgroundColor: pcGradient,
                    fill: true,
                    tension: 0,
                    pointRadius: 4,
                    pointBackgroundColor: '#ff6b6b',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 1,
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 2000 },
            plugins: {
                legend: { display: false },
                datalabels: {
                    align: 'top',
                    offset: 4,
                    font: { size: 8, weight: 'bold' },
                    color: ctx => ctx.dataset.borderColor,
                    formatter: v => v.toFixed(2)
                }
            },
            scales: {
                x: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { font: { size: 8 } } },
                y: { min: 8.9, max: 9.7, grid: { color: 'rgba(0,0,0,0.05)', drawBorder: false }, ticks: { font: { size: 8 }, stepSize: 0.1 } }
            }
        }
    });
}

// ===== 4. SUM OF ISSUES - AREA CHART (Matching reference image 2) =====
function initIssuesChart() {
    const ctx = document.getElementById('issuesChart');
    if (!ctx) return;

    const context = ctx.getContext('2d');
    const gradient = context.createLinearGradient(0, 0, 0, ctx.height || 140);
    gradient.addColorStop(0, 'rgba(205, 133, 100, 0.95)');
    gradient.addColorStop(1, 'rgba(205, 133, 100, 0.7)');

    // Full data from reference
    const labels = ['Pavement Mar...', 'Signages', 'Delineators', 'Rigid Crash Bar...', 'Median', 'HM Stones', 'Wearing Coat...', 'Quadrant Pitch...', 'Kerb', 'Lightings', 'Object Hazard...', 'Structure Num...', 'Shoulder', 'Clearance of vent', 'Operator keyb...', 'Pavement', 'KM Stones', 'Bus Bay', 'Drainage Spouts', 'Traffic Blinkers', 'Drainage', 'Boom Barrier', 'LPIC', 'Incident Camera', 'ROW', 'Rain water stag...', 'MBCB'];
    const values = [7662, 772, 548, 356, 328, 319, 250, 226, 213, 187, 179, 172, 159, 156, 130, 106, 101, 96, 80, 62, 41, 40, 39, 32, 30, 28, 28];

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Sum of Issues',
                    data: values,
                    backgroundColor: gradient,
                    borderColor: '#8bc34a',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.2,
                    pointRadius: 3,
                    pointBackgroundColor: '#8bc34a',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 1
                },
                {
                    label: 'Average',
                    data: values.map(() => 50),
                    borderColor: '#ef4444',
                    borderDash: [4, 3],
                    borderWidth: 2,
                    pointRadius: 2,
                    pointBackgroundColor: '#ef4444',
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 2500 },
            plugins: {
                legend: { display: false },
                datalabels: {
                    display: ctx => ctx.datasetIndex === 0 && ctx.dataIndex < 15,
                    align: 'top',
                    offset: 2,
                    font: { size: 7, weight: 'bold' },
                    color: '#374151',
                    formatter: v => v
                }
            },
            scales: {
                x: { grid: { display: false }, ticks: { font: { size: 6 }, maxRotation: 45, minRotation: 45 } },
                y: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { font: { size: 8 } }, min: 0 }
            }
        }
    });
}

// ===== 5. TAR COUNT HORIZONTAL BAR =====
function initTarChart() {
    const ctx = document.getElementById('tarChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['10', '5', '1', 'Total'],
            datasets: [{
                data: [95796, 6983, 5661, 108440],
                backgroundColor: ['#4caf50', '#ff9800', '#f8a5a5', '#8bc34a'],
                borderRadius: 4,
                barThickness: 18
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 1800 },
            plugins: {
                legend: { display: false },
                datalabels: { anchor: 'end', align: 'right', offset: 4, font: { size: 9, weight: 'bold' }, color: '#374151', formatter: v => v.toLocaleString() }
            },
            scales: { x: { display: false, max: 140000 }, y: { grid: { display: false }, ticks: { font: { size: 10, weight: '600' } } } }
        }
    });
}

// ===== 6. TARM RATING BY CATEGORY BAR CHART =====
function initTarmChart() {
    const ctx = document.getElementById('tarmChart');
    if (!ctx) return;

    const values = [9.61, 9.22, 9.10, 9.34, 8.60, 6.34, 9.40];
    const barColors = values.map(v => v >= 9.0 ? '#4caf50' : v >= 8.0 ? '#ff9800' : '#f8a5a5');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['TMS', 'Structures', 'Roadways', 'Road Signs', 'Proj Facilities', 'Landscaping', 'ATMS'],
            datasets: [
                { data: values, backgroundColor: barColors, borderRadius: 3, barThickness: 22 },
                { data: values.map(() => 9.0), type: 'line', borderColor: '#1976d2', borderDash: [5, 3], borderWidth: 2, pointRadius: 0, fill: false }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 2000 },
            plugins: {
                legend: { display: false },
                datalabels: { display: ctx => ctx.datasetIndex === 0, anchor: 'end', align: 'top', offset: -3, font: { size: 8, weight: 'bold' }, color: '#374151', formatter: v => v.toFixed(2) }
            },
            scales: {
                x: { grid: { display: false }, ticks: { font: { size: 7 }, maxRotation: 45 } },
                y: { min: 5, max: 10.5, grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { font: { size: 8 } } }
            }
        }
    });
}

// ===== 7. PYRAMID CHART - Matching reference exactly =====
function initPyramidChart() {
    const container = document.getElementById('pyramidContainer');
    if (!container) return;

    const data = dashboardData.projectRatings;
    let html = '';
    const totalRows = data.length;

    data.forEach((p, i) => {
        const minWidth = 12;
        const maxWidth = 70;
        const widthPercent = minWidth + (i / (totalRows - 1)) * (maxWidth - minWidth);
        const marginPercent = (maxWidth - widthPercent) / 2;
        const gradeClass = p.grade === 'A' ? 'grade-a' : p.grade === 'B' ? 'grade-b' : 'grade-c';
        const delay = i * 0.04;

        html += `<div class="pyramid-row ${gradeClass}" style="animation-delay:${delay}s">
            <span class="pyramid-values">
                <span class="monthly">${p.monthly.toFixed(2)}</span>
                <span class="cumulative">${p.cumulative.toFixed(2)}</span>
            </span>
            <div class="pyramid-bar" style="width:${widthPercent}%;margin-left:${marginPercent}%;animation-delay:${delay}s"></div>
            <span class="pyramid-label">${p.name} <span class="grade-badge">${p.grade}</span></span>
        </div>`;
    });

    container.innerHTML = html;
}

// ===== 8. HEATMAP - Square cells with exact colors (Matching reference image 3) =====
function initHeatmap() {
    const container = document.getElementById('heatmapContainer');
    if (!container) return;

    // Full heatmap data from reference
    const rows = [
        [{ n: 'MET', v: 10.00 }, { n: 'WIM', v: 9.90 }, { n: 'Lightings', v: 9.80 }, { n: 'Pedestrian Guard Rail', v: 9.71 }, { n: 'Quadrant Pitching', v: 9.40 }, { n: 'Traffic Blinkers', v: 9.23 }, { n: 'Pavement', v: 9.21 }, { n: 'Rigid Crash Barri...', v: 9.18 }, { n: 'Variable Message...', v: 9.10 }],
        [{ n: 'PTZ', v: 10.00 }, { n: 'Traffic Lights', v: 9.89 }, { n: 'MBCB', v: 9.77 }, { n: 'Boom Barrier', v: 9.67 }, { n: 'Object Hazard Marker', v: 9.07 }, { n: 'ROW', v: 8.97 }, { n: 'Truck Lay', v: 8.93 }, { n: 'Kerb', v: 8.87 }, { n: 'Clearance of vent', v: 8.82 }],
        [{ n: 'Anti glazers', v: 10.00 }, { n: 'User Fare Display', v: 9.89 }, { n: 'LPIC', v: 9.76 }, { n: 'Wearing Coat On Deck Slab', v: 9.65 }, { n: 'Drainage', v: 9.02 }, { n: 'KM Stones', v: 8.65 }, { n: 'HM Stones', v: 8.35 }, { n: 'Operator keybo...', v: 8.03 }],
        [{ n: 'Approach Settlements', v: 9.95 }, { n: 'AVCC', v: 9.85 }, { n: 'Incident Camera', v: 9.76 }, { n: 'Signages', v: 9.65 }, { n: 'VASD', v: 9.00 }, { n: 'Shoulder', v: 8.64 }, { n: 'Structure Numbering', v: 6.35 }, { n: 'Median', v: 5.21 }],
        [{ n: 'Overhead Lane Status Light', v: 9.92 }, { n: 'Rain water stagnation', v: 9.83 }, { n: 'Toilet Block', v: 9.72 }, { n: 'Drainage Spouts', v: 9.54 }, { n: 'Pavement Markings', v: 8.99 }, { n: 'Bus Bay', v: 8.58 }],
        [{ n: 'Embankment', v: 9.91 }, { n: 'Operator Monitor', v: 9.81 }, { n: 'Static Weigh Bridge', v: 9.72 }, { n: 'Delineators', v: 9.52 }]
    ];

    function getColor(v) {
        if (v >= 9.7) return 'heatmap-green';
        if (v >= 9.4) return 'heatmap-green-light';
        if (v >= 9.0) return 'heatmap-yellow';
        if (v >= 8.5) return 'heatmap-orange';
        return 'heatmap-red';
    }

    let html = '<table class="heatmap-table"><tbody>';
    let cellIdx = 0;

    rows.forEach(row => {
        html += '<tr>';
        row.forEach(cell => {
            const delay = cellIdx * 0.02;
            html += `<td class="heatmap-cell ${getColor(cell.v)}" style="animation-delay:${delay}s">
                <span class="heatmap-name">${cell.n}</span>
                <span class="heatmap-value">${cell.v.toFixed(2)}</span>
            </td>`;
            cellIdx++;
        });
        html += '</tr>';
    });

    html += '</tbody></table>';
    container.innerHTML = html;
}

// ===== INIT ALL =====
function initAllCharts() {
    initGaugeChart();
    initHoRatingChart();
    initConditionChart();
    initIssuesChart();
    initTarChart();
    initTarmChart();
    initPyramidChart();
    initHeatmap();
}
