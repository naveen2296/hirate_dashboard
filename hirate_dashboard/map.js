// ===== INDIA MAP WITH MARKERS OVERLAID ON IMAGE =====
function initIndiaMap() {
    const container = document.getElementById('indiaMap');
    if (!container) return;

    // Clear and set up container for overlays
    container.innerHTML = '';
    container.style.position = 'relative';

    // Projects with approximate positions on the map image (percentage based)
    const projects = [
        { id: 'WUPTL', status: 'rise', x: 52, y: 8, side: 'right' },
        { id: 'DATRL', status: 'rise', x: 42, y: 15, side: 'left' },
        { id: 'KMTPL', status: 'retained', x: 78, y: 18, side: 'right' },
        { id: 'MBEL', status: 'fall', x: 38, y: 22, side: 'left' },
        { id: 'GAEPL', status: 'retained', x: 60, y: 28, side: 'right' },
        { id: 'JMTL', status: 'rise', x: 35, y: 30, side: 'left' },
        { id: 'FRHL', status: 'fall', x: 85, y: 38, side: 'right' },
        { id: 'BFHL', status: 'retained', x: 88, y: 45, side: 'right' },
        { id: 'BWHPL', status: 'rise', x: 28, y: 42, side: 'left' },
        { id: 'MHPL', status: 'retained', x: 80, y: 52, side: 'right' },
        { id: 'MSHPL', status: 'rise', x: 26, y: 48, side: 'left' },
        { id: 'SPPL', status: 'rise', x: 75, y: 56, side: 'right' },
        { id: 'NDEPL', status: 'rise', x: 38, y: 55, side: 'left' },
        { id: 'NAMEL', status: 'retained', x: 72, y: 62, side: 'right' },
        { id: 'APEL', status: 'rise', x: 42, y: 64, side: 'left' },
        { id: 'KTIPL', status: 'retained', x: 68, y: 70, side: 'right' },
        { id: 'WVEPL', status: 'rise', x: 45, y: 75, side: 'left' },
        { id: 'SIPL', status: 'retained', x: 62, y: 80, side: 'right' },
        { id: 'KETPL', status: 'rise', x: 48, y: 88, side: 'left' },
        { id: 'MKTPL', status: 'retained', x: 58, y: 84, side: 'right' },
        { id: 'SMTPL', status: 'fall', x: 55, y: 90, side: 'right' },
        { id: 'NKTPL', status: 'rise', x: 52, y: 95, side: 'right' }
    ];

    // Create SVG overlay for markers and labels
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;';

    projects.forEach((p, idx) => {
        // Create marker
        const marker = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        marker.style.animation = `fadeIn 0.3s ease ${idx * 0.03}s both`;

        const color = p.status === 'rise' ? '#22c55e' : p.status === 'fall' ? '#ef4444' : '#eab308';

        if (p.status === 'rise') {
            const triangle = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
            triangle.setAttribute('points', `${p.x},${p.y - 2} ${p.x + 1.5},${p.y + 1} ${p.x - 1.5},${p.y + 1}`);
            triangle.setAttribute('fill', color);
            marker.appendChild(triangle);
        } else if (p.status === 'fall') {
            const triangle = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
            triangle.setAttribute('points', `${p.x},${p.y + 2} ${p.x + 1.5},${p.y - 1} ${p.x - 1.5},${p.y - 1}`);
            triangle.setAttribute('fill', color);
            marker.appendChild(triangle);
        } else {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
            circle.setAttribute('cx', p.x);
            circle.setAttribute('cy', p.y);
            circle.setAttribute('rx', '1.5');
            circle.setAttribute('ry', '1.2');
            circle.setAttribute('fill', color);
            marker.appendChild(circle);
        }

        // Add label
        const labelX = p.side === 'left' ? 2 : 82;
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', labelX);
        text.setAttribute('y', p.y + 0.5);
        text.setAttribute('font-size', '2.2');
        text.setAttribute('fill', '#374151');
        text.setAttribute('font-weight', '500');
        text.textContent = p.id + '-';
        marker.appendChild(text);

        // Connector line
        const lineEndX = p.side === 'left' ? 15 : 72;
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', p.x);
        line.setAttribute('y1', p.y);
        line.setAttribute('x2', lineEndX);
        line.setAttribute('y2', p.y);
        line.setAttribute('stroke', '#9ca3af');
        line.setAttribute('stroke-width', '0.2');
        line.setAttribute('stroke-dasharray', '1,0.5');
        marker.appendChild(line);

        svg.appendChild(marker);
    });

    // Add animation style
    const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
    style.textContent = '@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }';
    svg.appendChild(style);

    container.appendChild(svg);
}
