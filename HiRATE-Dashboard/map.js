// ===== INDIA MAP - SIMPLE TEXT LABELS WITH CONNECTORS =====
function initIndiaMap() {
    const container = document.getElementById('indiaMap');
    if (!container) return;

    // Projects from updated reference - status based on image
    const projects = [
        { id: 'WUPTL', status: 'rise', x: 48, y: 6, side: 'right' },
        { id: 'DATRL', status: 'rise', x: 35, y: 12, side: 'left' },
        { id: 'KMTPL', status: 'retained', x: 70, y: 14, side: 'right' },
        { id: 'MBEL', status: 'fall', x: 28, y: 20, side: 'left' },
        { id: 'GAEPL', status: 'retained', x: 62, y: 22, side: 'right' },
        { id: 'JMTL', status: 'rise', x: 25, y: 28, side: 'left' },
        { id: 'FRHL', status: 'fall', x: 78, y: 38, side: 'right' },
        { id: 'BFHL', status: 'retained', x: 80, y: 45, side: 'right' },
        { id: 'BWHPL', status: 'rise', x: 22, y: 42, side: 'left' },
        { id: 'MHPL', status: 'retained', x: 75, y: 52, side: 'right' },
        { id: 'MSHPL', status: 'rise', x: 20, y: 48, side: 'left' },
        { id: 'SPPL', status: 'rise', x: 72, y: 58, side: 'right' },
        { id: 'NDEPL', status: 'rise', x: 28, y: 56, side: 'left' },
        { id: 'NAMEL', status: 'retained', x: 68, y: 64, side: 'right' },
        { id: 'APEL', status: 'rise', x: 30, y: 64, side: 'left' },
        { id: 'KTIPL', status: 'retained', x: 65, y: 70, side: 'right' },
        { id: 'WVEPL', status: 'rise', x: 32, y: 76, side: 'left' },
        { id: 'SIPL', status: 'retained', x: 60, y: 78, side: 'right' },
        { id: 'KETPL', status: 'rise', x: 38, y: 86, side: 'left' },
        { id: 'MKTPL', status: 'retained', x: 55, y: 82, side: 'right' },
        { id: 'SMTPL', status: 'fall', x: 52, y: 88, side: 'right' },
        { id: 'NKTPL', status: 'rise', x: 48, y: 95, side: 'right' }
    ];

    // Proper India shape
    let svg = `<svg viewBox="-25 -2 150 104" style="width:100%;height:100%;overflow:visible;">
        <defs>
            <filter id="mapShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0.5" dy="0.5" stdDeviation="0.8" flood-opacity="0.15"/>
            </filter>
        </defs>
        
        <!-- India Shape -->
        <path d="M45,2 L55,3 L65,6 L72,10 L78,16 L82,24 L85,35 L86,48 L84,60 
                 L80,70 L72,78 L62,86 L52,92 L48,96 L45,98 L42,96 L38,90 
                 L32,82 L26,72 L20,60 L16,48 L14,36 L16,24 L20,16 L28,10 L38,5 Z" 
              fill="#d1d5db" stroke="#9ca3af" stroke-width="0.6" filter="url(#mapShadow)"/>`;

    // Add connectors, markers and simple text labels
    projects.forEach((p, idx) => {
        const delay = idx * 0.025;
        const labelX = p.side === 'left' ? -22 : 88;
        const lineEndX = p.side === 'left' ? 2 : 78;

        // Connector line
        svg += `<line x1="${p.x}" y1="${p.y}" x2="${lineEndX}" y2="${p.y}" 
                      stroke="#888" stroke-width="0.3" stroke-dasharray="2,1" 
                      opacity="0" style="animation: lineIn 0.3s ease ${delay}s forwards;"/>`;

        // Marker
        const markerColor = p.status === 'rise' ? '#22c55e' : p.status === 'fall' ? '#ef4444' : '#eab308';
        if (p.status === 'rise') {
            svg += `<polygon points="${p.x},${p.y - 3.5} ${p.x + 3},${p.y + 2} ${p.x - 3},${p.y + 2}" 
                           fill="${markerColor}" opacity="0" style="animation: markerPop 0.4s ease ${delay}s forwards;"/>`;
        } else if (p.status === 'fall') {
            svg += `<polygon points="${p.x},${p.y + 3.5} ${p.x + 3},${p.y - 2} ${p.x - 3},${p.y - 2}" 
                           fill="${markerColor}" opacity="0" style="animation: markerPop 0.4s ease ${delay}s forwards;"/>`;
        } else {
            svg += `<ellipse cx="${p.x}" cy="${p.y}" rx="3" ry="2.5" fill="${markerColor}" 
                           opacity="0" style="animation: markerPop 0.4s ease ${delay}s forwards;"/>`;
        }

        // Simple text label (no box)
        const textAnchor = p.side === 'left' ? 'start' : 'start';
        svg += `<text x="${labelX}" y="${p.y + 1}" font-size="3.5" fill="#374151" font-weight="500"
                      opacity="0" style="animation: labelIn 0.4s ease ${delay + 0.08}s forwards;">${p.id}-</text>`;
    });

    svg += `
        <style>
            @keyframes lineIn { to { opacity: 0.6; } }
            @keyframes markerPop { to { opacity: 1; } }
            @keyframes labelIn { to { opacity: 1; } }
        </style>
    </svg>`;

    container.innerHTML = svg;
}
