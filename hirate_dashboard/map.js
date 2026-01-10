// ===== INDIA MAP - MARKERS MATCHING REFERENCE EXACTLY =====
function initIndiaMap() {
    const container = document.getElementById('indiaMap');
    if (!container) return;

    container.innerHTML = '';
    container.style.position = 'relative';

    // Projects positioned to match reference image exactly
    const projects = [
        // Left side (top to bottom)
        { id: 'DATRL', status: 'rise', x: 42, y: 12, side: 'left' },
        { id: 'MBEL', status: 'fall', x: 43, y: 18, side: 'left' },
        { id: 'JMTL', status: 'rise', x: 38, y: 26, side: 'left' },
        { id: 'BWHPL', status: 'rise', x: 32, y: 36, side: 'left' },
        { id: 'MSHPL', status: 'rise', x: 30, y: 42, side: 'left' },
        { id: 'NDEPL', status: 'rise', x: 38, y: 50, side: 'left' },
        { id: 'APEL', status: 'rise', x: 42, y: 58, side: 'left' },
        { id: 'WVEPL', status: 'rise', x: 45, y: 70, side: 'left' },
        { id: 'KETPL', status: 'rise', x: 48, y: 85, side: 'left' },

        // Right side (top to bottom)
        { id: 'WUPTL', status: 'rise', x: 52, y: 5, side: 'right' },
        { id: 'KMTPL', status: 'retained', x: 75, y: 14, side: 'right' },
        { id: 'GAEPL', status: 'retained', x: 82, y: 24, side: 'right' },
        { id: 'FRHL', status: 'fall', x: 90, y: 34, side: 'right' },
        { id: 'BFHL', status: 'retained', x: 92, y: 40, side: 'right' },
        { id: 'MHPL', status: 'rise', x: 85, y: 48, side: 'right' },
        { id: 'SPPL', status: 'rise', x: 82, y: 53, side: 'right' },
        { id: 'NAMEL', status: 'retained', x: 78, y: 60, side: 'right' },
        { id: 'KTIPL', status: 'retained', x: 72, y: 68, side: 'right' },
        { id: 'SIPL', status: 'rise', x: 65, y: 78, side: 'right' },
        { id: 'MKTPL', status: 'retained', x: 62, y: 82, side: 'right' },
        { id: 'SMTPL', status: 'fall', x: 58, y: 88, side: 'right' },
        { id: 'NKTPL', status: 'rise', x: 55, y: 94, side: 'right' }
    ];

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:visible;';

    projects.forEach((p, idx) => {
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.style.animation = `fadeIn 0.4s ease ${idx * 0.04}s both`;

        const color = p.status === 'rise' ? '#22c55e' : p.status === 'fall' ? '#ef4444' : '#eab308';

        // Marker
        if (p.status === 'rise') {
            const tri = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
            tri.setAttribute('points', `${p.x},${p.y - 2.5} ${p.x + 2},${p.y + 1.5} ${p.x - 2},${p.y + 1.5}`);
            tri.setAttribute('fill', color);
            g.appendChild(tri);
        } else if (p.status === 'fall') {
            const tri = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
            tri.setAttribute('points', `${p.x},${p.y + 2.5} ${p.x + 2},${p.y - 1.5} ${p.x - 2},${p.y - 1.5}`);
            tri.setAttribute('fill', color);
            g.appendChild(tri);
        } else {
            const circ = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
            circ.setAttribute('cx', p.x);
            circ.setAttribute('cy', p.y);
            circ.setAttribute('rx', '2');
            circ.setAttribute('ry', '1.5');
            circ.setAttribute('fill', color);
            g.appendChild(circ);
        }

        // Connector line
        const lineEndX = p.side === 'left' ? 8 : 92;
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', p.x);
        line.setAttribute('y1', p.y);
        line.setAttribute('x2', lineEndX);
        line.setAttribute('y2', p.y);
        line.setAttribute('stroke', '#9ca3af');
        line.setAttribute('stroke-width', '0.25');
        line.setAttribute('stroke-dasharray', '1.5,0.8');
        g.appendChild(line);

        // Label
        const labelX = p.side === 'left' ? 0 : 93;
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', labelX);
        text.setAttribute('y', p.y + 0.8);
        text.setAttribute('font-size', '2.5');
        text.setAttribute('fill', '#374151');
        text.setAttribute('font-weight', '500');
        text.textContent = p.id + '-';
        g.appendChild(text);

        svg.appendChild(g);
    });

    const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
    style.textContent = '@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }';
    svg.appendChild(style);

    container.appendChild(svg);
}
