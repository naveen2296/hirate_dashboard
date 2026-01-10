// ===== MAIN APP =====
document.addEventListener('DOMContentLoaded', () => {
    initAllCharts();
    initIndiaMap();
    animateCounters();
    updateDateTime();
    setInterval(updateDateTime, 60000);
});

function animateCounters() {
    document.querySelectorAll('.animate-count').forEach((el, idx) => {
        const target = parseInt(el.dataset.count);
        const duration = 2000;
        const delay = idx * 400;

        setTimeout(() => {
            const startTime = performance.now();

            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);

                el.textContent = Math.floor(target * easeOut);

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    el.textContent = target;
                }
            }

            requestAnimationFrame(update);
        }, delay);
    });
}

function updateDateTime() {
    const el = document.getElementById('lastUpdated');
    if (el) {
        el.textContent = new Date().toLocaleString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}
