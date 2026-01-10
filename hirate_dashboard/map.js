// ===== INDIA MAP WITH DETAILED SVG =====
function initIndiaMap() {
    const container = document.getElementById('indiaMap');
    if (!container) return;

    // Projects with positions matching map
    const projects = [
        { id: 'WUPTL', status: 'rise', x: 52, y: 8, side: 'right' },
        { id: 'DATRL', status: 'rise', x: 38, y: 15, side: 'left' },
        { id: 'KMTPL', status: 'retained', x: 75, y: 18, side: 'right' },
        { id: 'MBEL', status: 'fall', x: 35, y: 22, side: 'left' },
        { id: 'GAEPL', status: 'retained', x: 58, y: 25, side: 'right' },
        { id: 'JMTL', status: 'rise', x: 32, y: 30, side: 'left' },
        { id: 'FRHL', status: 'fall', x: 82, y: 38, side: 'right' },
        { id: 'BFHL', status: 'retained', x: 84, y: 45, side: 'right' },
        { id: 'BWHPL', status: 'rise', x: 28, y: 44, side: 'left' },
        { id: 'MHPL', status: 'retained', x: 78, y: 52, side: 'right' },
        { id: 'MSHPL', status: 'rise', x: 26, y: 50, side: 'left' },
        { id: 'SPPL', status: 'rise', x: 72, y: 58, side: 'right' },
        { id: 'NDEPL', status: 'rise', x: 35, y: 56, side: 'left' },
        { id: 'NAMEL', status: 'retained', x: 68, y: 64, side: 'right' },
        { id: 'APEL', status: 'rise', x: 38, y: 65, side: 'left' },
        { id: 'KTIPL', status: 'retained', x: 65, y: 72, side: 'right' },
        { id: 'WVEPL', status: 'rise', x: 42, y: 76, side: 'left' },
        { id: 'SIPL', status: 'retained', x: 58, y: 82, side: 'right' },
        { id: 'KETPL', status: 'rise', x: 45, y: 88, side: 'left' },
        { id: 'MKTPL', status: 'retained', x: 54, y: 85, side: 'right' },
        { id: 'SMTPL', status: 'fall', x: 52, y: 90, side: 'right' },
        { id: 'NKTPL', status: 'rise', x: 50, y: 96, side: 'right' }
    ];

    // Detailed India map SVG path
    let svg = `<svg viewBox="-30 -5 160 115" style="width:100%;height:100%;overflow:visible;">
        <defs>
            <filter id="mapShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0.5" dy="0.5" stdDeviation="1" flood-opacity="0.15"/>
            </filter>
        </defs>
        
        <!-- India Map - Detailed Outline with States -->
        <g filter="url(#mapShadow)">
            <!-- Main India shape -->
            <path d="M45,0 L48,1 L52,0 L58,2 L62,5 L68,4 L75,8 L80,12 L85,18 
                     L90,22 L92,28 L95,35 L93,40 L90,45 L92,50 L90,55 
                     L85,60 L80,65 L75,70 L68,75 L62,80 L55,85 L50,92 
                     L48,98 L45,100 L42,98 L38,92 L32,85 L28,78 L22,70 
                     L18,62 L15,55 L12,48 L10,40 L12,32 L15,25 L18,18 
                     L22,12 L28,8 L35,5 L42,2 Z" 
                  fill="#d1d5db" stroke="#9ca3af" stroke-width="0.4"/>
            
            <!-- Northeast region -->
            <path d="M90,22 L95,20 L100,22 L105,28 L108,35 L105,42 L100,45 L95,42 L92,38 L90,32 Z" 
                  fill="#d1d5db" stroke="#9ca3af" stroke-width="0.3"/>
            
            <!-- State boundaries (simplified) -->
            <path d="M35,25 L45,28 L55,25 M28,45 L40,48 L55,45 M35,65 L48,68 L60,65" 
                  stroke="#9ca3af" stroke-width="0.2" fill="none"/>
        </g>`;

    // Add connectors, markers and labels
    projects.forEach((p, idx) => {
        const delay = idx * 0.025;
        const labelX = p.side === 'left' ? -28 : 92;
        const lineEndX = p.side === 'left' ? 5 : 80;

        // Connector line
        svg += `<line x1="${p.x}" y1="${p.y}" x2="${lineEndX}" y2="${p.y}" 
                      stroke="#888" stroke-width="0.3" stroke-dasharray="2,1" 
                      opacity="0" style="animation: lineIn 0.3s ease ${delay}s forwards;"/>`;

        // Marker
        const markerColor = p.status === 'rise' ? '#22c55e' : p.status === 'fall' ? '#ef4444' : '#eab308';
        if (p.status === 'rise') {
            svg += `<polygon points="${p.x},${p.y - 3} ${p.x + 2.5},${p.y + 1.5} ${p.x - 2.5},${p.y + 1.5}" 
                           fill="${markerColor}" opacity="0" style="animation: markerPop 0.4s ease ${delay}s forwards;"/>`;
        } else if (p.status === 'fall') {
            svg += `<polygon points="${p.x},${p.y + 3} ${p.x + 2.5},${p.y - 1.5} ${p.x - 2.5},${p.y - 1.5}" 
                           fill="${markerColor}" opacity="0" style="animation: markerPop 0.4s ease ${delay}s forwards;"/>`;
        } else {
            svg += `<ellipse cx="${p.x}" cy="${p.y}" rx="2.5" ry="2" fill="${markerColor}" 
                           opacity="0" style="animation: markerPop 0.4s ease ${delay}s forwards;"/>`;
        }

        // Simple text label
        svg += `<text x="${labelX}" y="${p.y + 1}" font-size="3" fill="#374151" font-weight="500"
                      opacity="0" style="animation: labelIn 0.4s ease ${delay + 0.08}s forwards;">${p.id}-</text>`;
    });

    svg += `
        <style>
            @keyframes lineIn { to { opacity: 0.5; } }
            @keyframes markerPop { to { opacity: 1; } }
            @keyframes labelIn { to { opacity: 1; } }
        </style>
    </svg>`;

    container.innerHTML = svg;
}
