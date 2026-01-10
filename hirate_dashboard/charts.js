// ===== CHARTS - FIXED WITH BETTER SIZING AND PYRAMID =====
Chart.register(ChartDataLabels);

const colors = {
    green: '#8bc34a',
    greenDark: '#4caf50',
    purple: '#9c27b0',
    orange: '#ff9800',
    red: '#f44336',
    pink: '#e57373',
    blue: '#2196f3',
    brown: '#cd8564'
};

Chart.defaults.color = '#333';
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
                backgroundColor: ['#8bc34a', '#e8e8e8'],
                borderWidth: 0,
                circumference: 180,
                rotation: 270
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '68%',
            animation: { duration: 2000, easing: 'easeOutQuart' },
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
                backgroundColor: colors.greenDark,
                borderRadius: 2,
                barThickness: 18
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 1500, delay: ctx => ctx.dataIndex * 300 },
            plugins: {
                legend: { display: false },
                datalabels: { anchor: 'end', align: 'top', font: { weight: 'bold', size: 10 }, color: '#333', formatter: v => v.toFixed(2) }
            },
            scales: {
                x: { grid: { display: false }, ticks: { font: { size: 9 } } },
                y: { display: false, min: 8.5, max: 9.2 }
            }
        }
    });
}

// ===== 3. CONDITION RATING LINE CHART =====
function initConditionChart() {
    const ctx = document.getElementById('conditionChart');
    if (!ctx) return;

    const ccGradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 60);
    ccGradient.addColorStop(0, 'rgba(139,195,74,0.5)');
    ccGradient.addColorStop(1, 'rgba(139,195,74,0.05)');

    const pcGradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 60);
    pcGradient.addColorStop(0, 'rgba(255,152,0,0.25)');
    pcGradient.addColorStop(1, 'rgba(255,152,0,0.02)');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Sep 2025', 'Oct 2025', 'Nov 2025'],
            datasets: [
                { label: 'CC', data: [9.43, 9.48, 9.58], borderColor: '#8bc34a', backgroundColor: ccGradient, fill: true, tension: 0, pointRadius: 4, pointBackgroundColor: '#8bc34a', pointBorderColor: '#fff', pointBorderWidth: 1, borderWidth: 2, order: 3 },
                { label: 'FC', data: [9.06, 9.13, 9.22], borderColor: '#9c27b0', fill: false, tension: 0, pointRadius: 4, pointBackgroundColor: '#9c27b0', pointBorderColor: '#fff', pointBorderWidth: 1, borderWidth: 2, order: 1 },
                { label: 'PC', data: [9.08, 9.04, 9.22], borderColor: '#ff9800', backgroundColor: pcGradient, fill: true, tension: 0, pointRadius: 4, pointBackgroundColor: '#ff9800', pointBorderColor: '#fff', pointBorderWidth: 1, borderWidth: 2, order: 2 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 2500, easing: 'easeOutQuart' },
            plugins: {
                legend: { display: false },
                datalabels: { align: 'top', offset: 4, font: { size: 8, weight: 'bold' }, color: ctx => ctx.dataset.borderColor, formatter: v => v.toFixed(2) }
            },
            scales: {
                x: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { font: { size: 8 } } },
                y: { min: 8.9, max: 9.7, grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { font: { size: 8 } } }
            }
        }
    });
}

// ===== 4. SUM OF ISSUES AREA CHART - MORE DATA POINTS =====
function initIssuesChart() {
    const ctx = document.getElementById('issuesChart');
    if (!ctx) return;

    const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 95);
    gradient.addColorStop(0, 'rgba(205,133,100,0.9)');
    gradient.addColorStop(1, 'rgba(205,133,100,0.2)');

    // More data points from reference
    const labels = ['Pavement', 'Signages', 'Delineat...', 'Crash Bar', 'Median', 'HM Stones', 'Wearing', 'Quadrant', 'Kerb', 'Lightings', 'Obj Haz', 'Struct', 'Shoulder', 'Incident', 'ROW'];
    const values = [7662, 772, 548, 356, 328, 319, 250, 226, 213, 187, 179, 172, 159, 156, 130];

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                { data: values, backgroundColor: gradient, borderColor: '#8bc34a', borderWidth: 2, fill: true, tension: 0.35, pointRadius: 2.5, pointBackgroundColor: '#8bc34a', pointBorderColor: '#fff', pointBorderWidth: 1 },
                { data: values.map(() => 200), borderColor: colors.red, borderDash: [4, 3], borderWidth: 1.5, pointRadius: 2, pointBackgroundColor: colors.red, fill: false }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 3000, easing: 'easeOutQuart' },
            plugins: {
                legend: { display: false },
                datalabels: { display: ctx => ctx.datasetIndex === 0 && ctx.dataIndex < 12, align: 'top', offset: 2, font: { size: 7, weight: 'bold' }, color: '#555' }
            },
            scales: {
                x: { grid: { display: false }, ticks: { font: { size: 6 }, maxRotation: 45 } },
                y: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { font: { size: 7 } }, min: 0 }
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
                backgroundColor: [colors.greenDark, colors.orange, colors.red, colors.green],
                borderRadius: 3
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 1800, delay: ctx => ctx.dataIndex * 200 },
            plugins: {
                legend: { display: false },
                datalabels: { anchor: 'end', align: 'right', font: { size: 8, weight: 'bold' }, color: '#333', formatter: v => v.toLocaleString() }
            },
            scales: { x: { display: false }, y: { grid: { display: false }, ticks: { font: { size: 9 } } } }
        }
    });
}

// ===== 6. TARM RATING BAR CHART =====
function initTarmChart() {
    const ctx = document.getElementById('tarmChart');
    if (!ctx) return;

    const values = [9.61, 9.22, 9.10, 9.34, 8.60, 6.34, 9.40];
    const barColors = values.map(v => v >= 9.0 ? colors.green : colors.pink);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['TMS', 'Struct', 'Road', 'Sign', 'Facil', 'Land', 'ATMS'],
            datasets: [
                { data: values, backgroundColor: barColors, borderRadius: 2, barThickness: 14 },
                { data: values.map(() => 9.0), type: 'line', borderColor: colors.blue, borderDash: [4, 3], borderWidth: 1.5, pointRadius: 0, fill: false }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 2000, delay: ctx => ctx.dataIndex * 150 },
            plugins: {
                legend: { display: false },
                datalabels: { display: ctx => ctx.datasetIndex === 0, anchor: 'end', align: 'top', font: { size: 7, weight: 'bold' }, color: '#333', formatter: v => v.toFixed(2) }
            },
            scales: {
                x: { grid: { display: false }, ticks: { font: { size: 7 } } },
                y: { min: 5, max: 10.5, grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { font: { size: 7 } } }
            }
        }
    });
}

// ===== 7. PYRAMID CHART - TWO-SIDED TRIANGLE SHAPE =====
function initPyramidChart() {
    const container = document.getElementById('pyramidContainer');
    if (!container) return;

    const data = dashboardData.projectRatings;
    let html = '';

    // Pyramid: widest at bottom (last item), narrowest at top (first item)
    const totalRows = data.length;

    data.forEach((p, i) => {
        // Calculate width - narrow at top, wide at bottom (triangle shape)
        const minWidth = 15;
        const maxWidth = 70;
        const widthPercent = minWidth + (i / (totalRows - 1)) * (maxWidth - minWidth);

        // Calculate left margin to center the bars (creating triangle shape)
        const marginPercent = (maxWidth - widthPercent) / 2;

        const gradeClass = p.grade === 'A' ? 'grade-a' : p.grade === 'B' ? 'grade-b' : 'grade-c';

        html += `<div class="pyramid-row ${gradeClass}" style="animation-delay:${i * 0.035}s">
            <span class="pyramid-values">
                <span class="monthly">${p.monthly.toFixed(2)}</span>
                <span class="cumulative">${p.cumulative.toFixed(2)}</span>
            </span>
            <div class="pyramid-bar" style="width:${widthPercent}%; margin-left:${marginPercent}%"></div>
            <span class="pyramid-label">${p.name} <span class="grade-badge">${p.grade}</span></span>
        </div>`;
    });

    container.innerHTML = html;
}

// ===== 8. HEATMAP =====
function initHeatmap() {
    const container = document.getElementById('heatmapContainer');
    if (!container) return;

    const rows = dashboardData.heatmapRows;

    function getColor(v) {
        if (v === null) return '';
        if (v >= 9.7) return 'heatmap-green';
        if (v >= 9.5) return 'heatmap-green-light';
        if (v >= 9.0) return 'heatmap-yellow';
        if (v >= 8.5) return 'heatmap-orange';
        return 'heatmap-red';
    }

    let html = '<table class="heatmap-table"><tbody>';
    let cellIdx = 0;

    rows.forEach(row => {
        html += '<tr>';
        row.forEach(cell => {
            const delay = cellIdx * 0.01;
            if (!cell.name && cell.value === null) {
                html += '<td class="heatmap-cell"></td>';
            } else {
                html += `<td class="heatmap-cell ${getColor(cell.value)}" style="animation-delay:${delay}s">
                    <span class="heatmap-name">${cell.name || ''}</span>
                    <span class="heatmap-value">${cell.value !== null ? cell.value.toFixed(2) : ''}</span>
                </td>`;
            }
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
