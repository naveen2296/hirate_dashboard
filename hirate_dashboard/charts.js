// ===== FRESH CHARTS =====
Chart.register(ChartDataLabels);
Chart.defaults.color = '#374151';
Chart.defaults.font.family = 'Inter';
Chart.defaults.font.size = 9;

// 1. GAUGE
function initGaugeChart() {
    const ctx = document.getElementById('gaugeChart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'doughnut',
        data: { datasets: [{ data: [89.4, 10.6], backgroundColor: ['#4caf50', '#e5e7eb'], borderWidth: 0, circumference: 180, rotation: 270 }] },
        options: { responsive: true, maintainAspectRatio: false, cutout: '70%', plugins: { legend: { display: false }, tooltip: { enabled: false }, datalabels: { display: false } } }
    });
}

// 2. HO RATING
function initHoRatingChart() {
    const ctx = document.getElementById('hoChart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'bar',
        data: { labels: ['Sep', 'Oct', 'Nov'], datasets: [{ data: [8.88, 8.92, 9.00], backgroundColor: '#4caf50', borderRadius: 4, barThickness: 25 }] },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false }, datalabels: { anchor: 'end', align: 'top', font: { weight: 'bold', size: 9 }, formatter: v => v.toFixed(2) } },
            scales: { x: { grid: { display: false } }, y: { display: false, min: 8.5, max: 9.2 } }
        }
    });
}

// 3. CONDITION RATING
function initConditionChart() {
    const ctx = document.getElementById('conditionChart');
    if (!ctx) return;
    const g = ctx.getContext('2d');
    const ccFill = g.createLinearGradient(0, 0, 0, 70);
    ccFill.addColorStop(0, 'rgba(139,195,74,0.4)');
    ccFill.addColorStop(1, 'rgba(139,195,74,0.1)');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Sep 2025', 'Oct 2025', 'Nov 2025'],
            datasets: [
                { label: 'CC', data: [9.43, 9.48, 9.58], borderColor: '#8bc34a', backgroundColor: ccFill, fill: true, tension: 0, pointRadius: 3, borderWidth: 2 },
                { label: 'FC', data: [9.06, 9.13, 9.22], borderColor: '#9333ea', fill: false, tension: 0, pointRadius: 3, borderWidth: 2 },
                { label: 'PC', data: [9.08, 9.04, 9.22], borderColor: '#ef4444', fill: false, tension: 0, pointRadius: 3, borderWidth: 2 }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false }, datalabels: { align: 'top', font: { size: 7, weight: 'bold' }, color: ctx => ctx.dataset.borderColor, formatter: v => v.toFixed(2) } },
            scales: { x: { grid: { display: false }, ticks: { font: { size: 7 } } }, y: { min: 8.9, max: 9.7, grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { font: { size: 7 } } } }
        }
    });
}

// 4. SUM OF ISSUES
function initIssuesChart() {
    const ctx = document.getElementById('issuesChart');
    if (!ctx) return;
    const g = ctx.getContext('2d');
    const fill = g.createLinearGradient(0, 0, 0, 110);
    fill.addColorStop(0, 'rgba(205,133,100,0.9)');
    fill.addColorStop(1, 'rgba(205,133,100,0.5)');

    const labels = ['Pavement', 'Signages', 'Delineators', 'Crash Bar', 'Median', 'HM Stones', 'Wearing', 'Quadrant', 'Kerb', 'Lightings', 'Obj Haz', 'Struct', 'Shoulder', 'Clearance'];
    const values = [7662, 772, 548, 356, 328, 319, 250, 226, 213, 187, 179, 172, 159, 156];

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                { data: values, backgroundColor: fill, borderColor: '#8bc34a', borderWidth: 2, fill: true, tension: 0.2, pointRadius: 2 },
                { data: values.map(() => 100), borderColor: '#ef4444', borderDash: [4, 3], borderWidth: 1.5, pointRadius: 1.5, fill: false }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false }, datalabels: { display: ctx => ctx.datasetIndex === 0, align: 'top', font: { size: 6, weight: 'bold' }, color: '#374151' } },
            scales: { x: { grid: { display: false }, ticks: { font: { size: 6 }, maxRotation: 45 } }, y: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { font: { size: 7 } } } }
        }
    });
}

// 5. TARM RATING
function initTarmChart() {
    const ctx = document.getElementById('tarmChart');
    if (!ctx) return;
    const vals = [9.61, 9.22, 9.10, 9.34, 8.60, 6.34, 9.40];
    const colors = vals.map(v => v >= 9 ? '#4caf50' : v >= 8 ? '#ff9800' : '#f8a5a5');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['TMS', 'Struct', 'Road', 'Sign', 'Facil', 'Land', 'ATMS'],
            datasets: [
                { data: vals, backgroundColor: colors, borderRadius: 3, barThickness: 18 },
                { data: vals.map(() => 9.0), type: 'line', borderColor: '#1976d2', borderDash: [4, 3], borderWidth: 1.5, pointRadius: 0, fill: false }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false }, datalabels: { display: ctx => ctx.datasetIndex === 0, anchor: 'end', align: 'top', font: { size: 6, weight: 'bold' }, formatter: v => v.toFixed(2) } },
            scales: { x: { grid: { display: false }, ticks: { font: { size: 6 } } }, y: { min: 5, max: 10.5, grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { font: { size: 6 } } } }
        }
    });
}

// 6. TAR COUNT
function initTarChart() {
    const ctx = document.getElementById('tarChart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['10', '5', '1', 'Total'],
            datasets: [{ data: [95796, 6983, 5661, 108440], backgroundColor: ['#4caf50', '#ff9800', '#f8a5a5', '#8bc34a'], borderRadius: 3, barThickness: 14 }]
        },
        options: {
            indexAxis: 'y', responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false }, datalabels: { anchor: 'end', align: 'right', font: { size: 7, weight: 'bold' }, formatter: v => v.toLocaleString() } },
            scales: { x: { display: false, max: 130000 }, y: { grid: { display: false }, ticks: { font: { size: 8 } } } }
        }
    });
}

// 7. PYRAMID
function initPyramidChart() {
    const el = document.getElementById('pyramid');
    if (!el) return;
    const data = dashboardData.projectRatings;
    let html = '';
    data.forEach((p, i) => {
        const w = 10 + (i / (data.length - 1)) * 55;
        const ml = (65 - w) / 2;
        const g = p.grade.toLowerCase();
        html += `<div class="pyr-row">
            <span class="pyr-vals"><span class="m">${p.monthly.toFixed(2)}</span><span class="c">${p.cumulative.toFixed(2)}</span></span>
            <div class="pyr-bar ${g}" style="width:${w}%;margin-left:${ml}%"></div>
            <span class="pyr-lbl">${p.name} <span class="grade ${g}">${p.grade}</span></span>
        </div>`;
    });
    el.innerHTML = html;
}

// 8. HEATMAP
function initHeatmap() {
    const el = document.getElementById('heatmap');
    if (!el) return;

    const rows = [
        [{ n: 'MET', v: 10 }, { n: 'WIM', v: 9.90 }, { n: 'Lightings', v: 9.80 }, { n: 'Ped Guard Rail', v: 9.71 }, { n: 'Quad Pitch', v: 9.40 }, { n: 'Traffic Blink', v: 9.23 }, { n: 'Pavement', v: 9.21 }, { n: 'Crash Barrier', v: 9.18 }, { n: 'Var Message', v: 9.10 }],
        [{ n: 'PTZ', v: 10 }, { n: 'Traffic Lights', v: 9.89 }, { n: 'MBCB', v: 9.77 }, { n: 'Boom Barrier', v: 9.67 }, { n: 'Obj Haz Mark', v: 9.07 }, { n: 'ROW', v: 8.97 }, { n: 'Truck Lay', v: 8.93 }, { n: 'Kerb', v: 8.87 }, { n: 'Clearance', v: 8.82 }],
        [{ n: 'Anti glazers', v: 10 }, { n: 'User Display', v: 9.89 }, { n: 'LPIC', v: 9.76 }, { n: 'Wearing Coat', v: 9.65 }, { n: 'Drainage', v: 9.02 }, { n: 'KM Stones', v: 8.65 }, { n: 'HM Stones', v: 8.35 }, { n: 'Op Keybo', v: 8.03 }],
        [{ n: 'Approach Settle', v: 9.95 }, { n: 'AVCC', v: 9.85 }, { n: 'Incident Cam', v: 9.76 }, { n: 'Signages', v: 9.65 }, { n: 'VASD', v: 9.00 }, { n: 'Shoulder', v: 8.64 }, { n: 'Struct Num', v: 6.35 }, { n: 'Median', v: 5.21 }],
        [{ n: 'OH Lane Light', v: 9.92 }, { n: 'Rain Stag', v: 9.83 }, { n: 'Toilet Block', v: 9.72 }, { n: 'Drain Spouts', v: 9.54 }, { n: 'Pave Marks', v: 8.99 }, { n: 'Bus Bay', v: 8.58 }],
        [{ n: 'Embankment', v: 9.91 }, { n: 'Op Monitor', v: 9.81 }, { n: 'Weigh Bridge', v: 9.72 }, { n: 'Delineators', v: 9.52 }]
    ];

    function cls(v) {
        if (v >= 9.7) return 'heat-green';
        if (v >= 9.4) return 'heat-lime';
        if (v >= 9.0) return 'heat-yellow';
        if (v >= 8.5) return 'heat-orange';
        return 'heat-red';
    }

    let html = '<table>';
    rows.forEach(row => {
        html += '<tr>';
        row.forEach(c => html += `<td class="${cls(c.v)}"><span class="name">${c.n}</span><span class="val">${c.v.toFixed(2)}</span></td>`);
        html += '</tr>';
    });
    html += '</table>';
    el.innerHTML = html;
}

// INIT ALL
function initAllCharts() {
    initGaugeChart();
    initHoRatingChart();
    initConditionChart();
    initIssuesChart();
    initTarmChart();
    initTarChart();
    initPyramidChart();
    initHeatmap();
}
