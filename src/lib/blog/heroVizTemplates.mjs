/**
 * Hero visualization templates — IIB / Napkin style
 * 
 * All templates return raw SVG strings.
 * Design rules (strictly enforced):
 *   - Dark forest background (#1F2D24)
 *   - Cream text/strokes (#F4EFE2) 
 *   - ONE accent color per viz (pulled from PALETTES data or passed as param)
 *   - Bold geometry, generous negative space
 *   - Max 20 elements
 *   - Fraunces serif for labels (embedded via inline style)
 *   - No gradients, no drop shadows, no raster images
 */

import { PALETTES } from '../../data/visualizations.js';

export function getHeroVizSvg(config, thumbnail = false) {
  const { templateId, params } = config;
  const palette = PALETTES.find(p => p.id === params.palette) || PALETTES[0];
  const accent = palette.colors[3]; // 4th stop — saturated mid-tone
  const accentLight = palette.colors[1];
  const accentDark = palette.colors[4];
  
  const w = thumbnail ? 640 : 1200;
  const h = thumbnail ? 360 : 480;

  const template = HERO_TEMPLATES[templateId] || HERO_TEMPLATES['radial-burst'];
  return template({ params, accent, accentLight, accentDark, w, h });
}

const HERO_TEMPLATES = {

  // ─── RADIAL BURST ──────────────────────────────────────────────────────────
  // For mindmap, idea, concept posts
  // params: topic (string), nodes (int 3-8), palette
  'radial-burst': ({ params, accent, accentLight, w, h }) => {
    const cx = w * 0.5, cy = h * 0.5;
    const r1 = Math.min(w, h) * 0.08;
    const r2 = Math.min(w, h) * 0.32;
    const n = Math.min(8, Math.max(3, parseInt(params.nodes || 5)));
    const topic = params.topic || 'Idea';
    
    const nodes = Array.from({ length: n }, (_, i) => {
      const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
      const jitter = (Math.random() - 0.5) * 0.15;
      return {
        x: cx + Math.cos(angle + jitter) * r2,
        y: cy + Math.sin(angle + jitter) * r2,
        label: `Node ${i + 1}`,
      };
    });

    return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <rect width="${w}" height="${h}" fill="#1F2D24"/>
  <!-- Connector lines -->
  ${nodes.map(nd => `<line x1="${cx}" y1="${cy}" x2="${nd.x}" y2="${nd.y}" stroke="${accent}" stroke-width="1.5" stroke-opacity="0.5"/>`).join('\n  ')}
  <!-- Peripheral node circles -->
  ${nodes.map((nd, i) => `
  <circle cx="${nd.x}" cy="${nd.y}" r="${r1 * 0.7}" fill="#1F2D24" stroke="${accentLight}" stroke-width="1.5"/>
  <text x="${nd.x}" y="${nd.y + 4}" text-anchor="middle" font-family="Fraunces, serif" font-size="${Math.round(r1 * 0.45)}" fill="#F4EFE2" opacity="0.7">${nd.label}</text>`).join('')}
  <!-- Central node -->
  <circle cx="${cx}" cy="${cy}" r="${r1}" fill="${accent}" stroke="#F4EFE2" stroke-width="1.5"/>
  <text x="${cx}" y="${cy + 5}" text-anchor="middle" font-family="Fraunces, serif" font-size="${Math.round(r1 * 0.55)}" fill="#1F2D24" font-style="italic">${topic}</text>
</svg>`;
  },

  // ─── RISING BARS ───────────────────────────────────────────────────────────
  // For data, statistics, comparison posts
  // params: title, data="Label:value,Label:value,..." (up to 8 bars), palette
  'rising-bars': ({ params, accent, accentLight, accentDark, w, h }) => {
    const raw = params.data || 'A:70,B:45,C:85,D:60,E:90';
    const bars = raw.split(',').map(s => {
      const [label, val] = s.split(':');
      return { label: label.trim(), value: parseFloat(val) || 50 };
    }).slice(0, 8);
    const max = Math.max(...bars.map(b => b.value));

    const margin = { top: h * 0.12, bottom: h * 0.2, left: w * 0.08, right: w * 0.06 };
    const plotW = w - margin.left - margin.right;
    const plotH = h - margin.top - margin.bottom;
    const barW = (plotW / bars.length) * 0.6;
    const gap = (plotW / bars.length) * 0.4;

    return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <rect width="${w}" height="${h}" fill="#1F2D24"/>
  <!-- Baseline -->
  <line x1="${margin.left}" y1="${margin.top + plotH}" x2="${w - margin.right}" y2="${margin.top + plotH}" stroke="#F4EFE2" stroke-width="1" stroke-opacity="0.2"/>
  <!-- Horizontal guide lines (3) -->
  ${[0.33, 0.66, 1].map(f => `<line x1="${margin.left}" y1="${margin.top + plotH * (1 - f)}" x2="${w - margin.right}" y2="${margin.top + plotH * (1 - f)}" stroke="#F4EFE2" stroke-width="0.5" stroke-dasharray="4 6" stroke-opacity="0.12"/>`).join('\n  ')}
  <!-- Bars -->
  ${bars.map((bar, i) => {
    const bh = (bar.value / max) * plotH;
    const bx = margin.left + i * (barW + gap * 1.4);
    const by = margin.top + plotH - bh;
    const isMax = bar.value === max;
    return `<rect x="${bx}" y="${by}" width="${barW}" height="${bh}" fill="${isMax ? accent : accentDark}" opacity="${isMax ? 1 : 0.65}" rx="3"/>
  <text x="${bx + barW / 2}" y="${margin.top + plotH + 18}" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#F4EFE2" opacity="0.6">${bar.label}</text>
  ${isMax ? `<text x="${bx + barW / 2}" y="${by - 8}" text-anchor="middle" font-family="Fraunces, serif" font-size="12" fill="${accent}" font-style="italic">${bar.value}</text>` : ''}`;
  }).join('\n  ')}
  <!-- Title -->
  ${params.title ? `<text x="${w / 2}" y="${margin.top - 8}" text-anchor="middle" font-family="Fraunces, serif" font-size="16" fill="#F4EFE2" font-style="italic" opacity="0.8">${params.title}</text>` : ''}
</svg>`;
  },

  // ─── FLOW LADDER ───────────────────────────────────────────────────────────
  // For process, steps, how-to posts
  // params: steps="Step1,Step2,Step3,Step4,Step5" (3-7 steps), palette
  'flow-ladder': ({ params, accent, accentLight, w, h }) => {
    const steps = (params.steps || 'Start,Middle,End').split(',').map(s => s.trim()).slice(0, 7);
    const n = steps.length;
    const cx = w / 2;
    const stepH = (h * 0.7) / n;
    const boxW = Math.min(w * 0.5, 260);
    const startY = h * 0.12;

    return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <rect width="${w}" height="${h}" fill="#1F2D24"/>
  ${steps.map((step, i) => {
    const y = startY + i * stepH;
    const isLast = i === n - 1;
    return `
  <!-- Step ${i + 1} box -->
  <rect x="${cx - boxW / 2}" y="${y}" width="${boxW}" height="${stepH * 0.65}" rx="8"
        fill="${isLast ? accent : '#1F2D24'}" stroke="${isLast ? accent : accentLight}" stroke-width="1.5" stroke-opacity="${isLast ? 1 : 0.7}"/>
  <text x="${cx}" y="${y + stepH * 0.38}" text-anchor="middle"
        font-family="Fraunces, serif" font-size="14" fill="${isLast ? '#1F2D24' : '#F4EFE2'}"
        font-style="${isLast ? 'italic' : 'normal'}">${step}</text>
  <!-- Step number pill -->
  <circle cx="${cx - boxW / 2 - 18}" cy="${y + stepH * 0.32}" r="11"
          fill="none" stroke="${accentLight}" stroke-width="1" stroke-opacity="0.4"/>
  <text x="${cx - boxW / 2 - 18}" y="${y + stepH * 0.32 + 5}" text-anchor="middle"
        font-family="Inter, sans-serif" font-size="11" fill="#F4EFE2" opacity="0.5">${i + 1}</text>
  ${!isLast ? `<!-- Arrow down -->
  <line x1="${cx}" y1="${y + stepH * 0.65}" x2="${cx}" y2="${y + stepH}" stroke="${accent}" stroke-width="1.5" stroke-opacity="0.4"/>
  <polyline points="${cx - 5},${y + stepH - 6} ${cx},${y + stepH} ${cx + 5},${y + stepH - 6}" fill="none" stroke="${accent}" stroke-width="1.5" stroke-opacity="0.4" stroke-linecap="round" stroke-linejoin="round"/>` : ''}`;
  }).join('')}
</svg>`;
  },

  // ─── SCATTER FIELD ─────────────────────────────────────────────────────────
  // For data analysis, pattern, insight posts
  // params: title, xLabel, yLabel, palette
  'scatter-field': ({ params, accent, accentLight, w, h }) => {
    const margin = { top: h * 0.1, bottom: h * 0.18, left: w * 0.1, right: w * 0.06 };
    // Generate ~25 pseudo-random dots with a gentle trend
    const dots = Array.from({ length: 25 }, (_, i) => ({
      x: margin.left + (i / 24) * (w - margin.left - margin.right) + (Math.sin(i * 7.3) * 25),
      y: margin.top + (w - margin.left - margin.right) - ((i / 24) * (h - margin.top - margin.bottom) * 0.8 + Math.cos(i * 5.1) * 20),
      r: 4 + Math.abs(Math.sin(i * 3.7)) * 5,
    }));

    return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <rect width="${w}" height="${h}" fill="#1F2D24"/>
  <!-- Axes -->
  <line x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${margin.top + h - margin.top - margin.bottom}" stroke="#F4EFE2" stroke-width="1" stroke-opacity="0.2"/>
  <line x1="${margin.left}" y1="${margin.top + h - margin.top - margin.bottom}" x2="${w - margin.right}" y2="${margin.top + h - margin.top - margin.bottom}" stroke="#F4EFE2" stroke-width="1" stroke-opacity="0.2"/>
  <!-- Trend line -->
  <line x1="${margin.left + 20}" y1="${margin.top + h - margin.top - margin.bottom - 30}" x2="${w - margin.right - 20}" y2="${margin.top + 30}" stroke="${accent}" stroke-width="1.5" stroke-dasharray="6 4" stroke-opacity="0.5"/>
  <!-- Dots -->
  ${dots.map((d, i) => `<circle cx="${d.x}" cy="${d.y}" r="${d.r}" fill="${accent}" fill-opacity="${0.4 + (i % 3) * 0.2}" stroke="${accentLight}" stroke-width="0.5" stroke-opacity="0.3"/>`).join('\n  ')}
  <!-- Axis labels -->
  ${params.xLabel ? `<text x="${w / 2}" y="${h - 10}" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" fill="#F4EFE2" opacity="0.45">${params.xLabel}</text>` : ''}
  ${params.yLabel ? `<text x="16" y="${h / 2}" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" fill="#F4EFE2" opacity="0.45" transform="rotate(-90 16 ${h / 2})">${params.yLabel}</text>` : ''}
  ${params.title ? `<text x="${w / 2}" y="${margin.top - 8}" text-anchor="middle" font-family="Fraunces, serif" font-size="16" fill="#F4EFE2" opacity="0.8" font-style="italic">${params.title}</text>` : ''}
</svg>`;
  },

  // ─── CONNECTED GRID ────────────────────────────────────────────────────────
  // For system, framework, interconnected concepts
  // params: title, nodes="Label,Label,...", palette
  'connected-grid': ({ params, accent, accentLight, w, h }) => {
    const labels = (params.nodes || 'A,B,C,D,E,F').split(',').map(s => s.trim()).slice(0, 9);
    const cols = Math.ceil(Math.sqrt(labels.length));
    const rows = Math.ceil(labels.length / cols);
    const cellW = (w * 0.7) / cols;
    const cellH = (h * 0.65) / rows;
    const startX = w * 0.15;
    const startY = h * 0.17;
    const nodeR = Math.min(cellW, cellH) * 0.22;

    const positions = labels.map((label, i) => ({
      x: startX + (i % cols) * cellW + cellW / 2,
      y: startY + Math.floor(i / cols) * cellH + cellH / 2,
      label,
    }));

    // Draw connections between adjacent nodes
    const connections = [];
    positions.forEach((p, i) => {
      if (i % cols !== cols - 1 && i + 1 < positions.length) connections.push([i, i + 1]);
      if (i + cols < positions.length) connections.push([i, i + cols]);
    });

    return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <rect width="${w}" height="${h}" fill="#1F2D24"/>
  <!-- Connections -->
  ${connections.map(([a, b]) => `<line x1="${positions[a].x}" y1="${positions[a].y}" x2="${positions[b].x}" y2="${positions[b].y}" stroke="${accent}" stroke-width="1" stroke-opacity="0.3"/>`).join('\n  ')}
  <!-- Nodes -->
  ${positions.map((p, i) => `
  <circle cx="${p.x}" cy="${p.y}" r="${nodeR}" fill="#1F2D24" stroke="${i === 0 ? accent : accentLight}" stroke-width="${i === 0 ? 2 : 1.5}" stroke-opacity="${i === 0 ? 1 : 0.65}"/>
  <text x="${p.x}" y="${p.y + 5}" text-anchor="middle" font-family="Fraunces, serif" font-size="11" fill="#F4EFE2" opacity="${i === 0 ? 1 : 0.7}" font-style="${i === 0 ? 'italic' : 'normal'}">${p.label}</text>`).join('')}
  ${params.title ? `<text x="${w / 2}" y="${startY - 18}" text-anchor="middle" font-family="Fraunces, serif" font-size="16" fill="#F4EFE2" opacity="0.8" font-style="italic">${params.title}</text>` : ''}
</svg>`;
  },

  // ─── TIMELINE SPINE ────────────────────────────────────────────────────────
  // For timeline, history, journey posts
  // params: title, events="Year:Label,Year:Label,...", palette
  'timeline-spine': ({ params, accent, accentLight, w, h }) => {
    const events = (params.events || '2020:Start,2021:Grow,2022:Pivot,2023:Scale,2024:Now')
      .split(',').map(s => { const [yr, lbl] = s.split(':'); return { yr: yr.trim(), lbl: lbl?.trim() || yr.trim() }; })
      .slice(0, 7);
    const n = events.length;
    const spineX = w * 0.42;
    const startY = h * 0.12;
    const endY = h * 0.88;
    const stepY = (endY - startY) / (n - 1);

    return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <rect width="${w}" height="${h}" fill="#1F2D24"/>
  <!-- Spine -->
  <line x1="${spineX}" y1="${startY}" x2="${spineX}" y2="${endY}" stroke="${accent}" stroke-width="2" stroke-opacity="0.4"/>
  <!-- Events -->
  ${events.map((ev, i) => {
    const y = startY + i * stepY;
    const isLast = i === n - 1;
    const side = i % 2 === 0 ? 'left' : 'right';
    const labelX = side === 'left' ? spineX - 22 : spineX + 22;
    const anchor = side === 'left' ? 'end' : 'start';
    return `
  <circle cx="${spineX}" cy="${y}" r="${isLast ? 9 : 6}" fill="${isLast ? accent : '#1F2D24'}" stroke="${accent}" stroke-width="1.5"/>
  <line x1="${spineX + (side === 'right' ? 6 : -6)}" y1="${y}" x2="${labelX}" y2="${y}" stroke="${accentLight}" stroke-width="1" stroke-opacity="0.4"/>
  <text x="${labelX + (side === 'right' ? 4 : -4)}" y="${y - 5}" text-anchor="${anchor}" font-family="Inter, sans-serif" font-size="11" fill="#F4EFE2" opacity="0.5">${ev.yr}</text>
  <text x="${labelX + (side === 'right' ? 4 : -4)}" y="${y + 10}" text-anchor="${anchor}" font-family="Fraunces, serif" font-size="13" fill="#F4EFE2" font-style="${isLast ? 'italic' : 'normal'}">${ev.lbl}</text>`;
  }).join('')}
  ${params.title ? `<text x="${w / 2}" y="24" text-anchor="middle" font-family="Fraunces, serif" font-size="16" fill="#F4EFE2" opacity="0.8" font-style="italic">${params.title}</text>` : ''}
</svg>`;
  },

  // ─── VENN BLOOM ────────────────────────────────────────────────────────────
  // For comparison, overlap, synthesis posts
  // params: a (label), b (label), c (center label), palette
  'venn-bloom': ({ params, accent, accentLight, w, h }) => {
    const cx = w / 2, cy = h / 2;
    const r = Math.min(w, h) * 0.28;
    const dx = r * 0.55;

    return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <rect width="${w}" height="${h}" fill="#1F2D24"/>
  <!-- Circle A -->
  <circle cx="${cx - dx}" cy="${cy}" r="${r}" fill="${accent}" fill-opacity="0.15" stroke="${accent}" stroke-width="1.5"/>
  <!-- Circle B -->
  <circle cx="${cx + dx}" cy="${cy}" r="${r}" fill="${accentLight}" fill-opacity="0.1" stroke="${accentLight}" stroke-width="1.5"/>
  <!-- Labels -->
  <text x="${cx - dx - r * 0.5}" y="${cy + 5}" text-anchor="middle" font-family="Fraunces, serif" font-size="14" fill="#F4EFE2" font-style="italic">${params.a || 'A'}</text>
  <text x="${cx + dx + r * 0.5}" y="${cy + 5}" text-anchor="middle" font-family="Fraunces, serif" font-size="14" fill="#F4EFE2" font-style="italic">${params.b || 'B'}</text>
  <!-- Center label -->
  <text x="${cx}" y="${cy}" text-anchor="middle" font-family="Fraunces, serif" font-size="12" fill="${accent}" font-style="italic">${params.c || 'Both'}</text>
</svg>`;
  },

  // ─── FUNNEL CASCADE ────────────────────────────────────────────────────────
  // For conversion, sales, pipeline posts
  // params: title, stages="Stage:value,Stage:value,...", palette
  'funnel-cascade': ({ params, accent, accentLight, w, h }) => {
    const stages = (params.stages || 'Awareness:100,Interest:65,Decision:40,Action:22')
      .split(',').map(s => { const [label, val] = s.split(':'); return { label: label.trim(), value: parseFloat(val) || 50 }; })
      .slice(0, 6);
    const n = stages.length;
    const maxW = w * 0.7;
    const stageH = (h * 0.72) / n;
    const startY = h * 0.12;
    const maxVal = stages[0].value;

    return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <rect width="${w}" height="${h}" fill="#1F2D24"/>
  ${stages.map((s, i) => {
    const stageW = (s.value / maxVal) * maxW;
    const x = (w - stageW) / 2;
    const y = startY + i * stageH;
    const alpha = 0.4 + (i / n) * 0.5;
    return `
  <rect x="${x}" y="${y}" width="${stageW}" height="${stageH * 0.75}" rx="4" fill="${accent}" fill-opacity="${alpha}"/>
  <text x="${w / 2}" y="${y + stageH * 0.42}" text-anchor="middle" font-family="Fraunces, serif" font-size="13" fill="#F4EFE2">${s.label}</text>
  <text x="${x + stageW + 10}" y="${y + stageH * 0.42}" text-anchor="start" font-family="Inter, sans-serif" font-size="11" fill="#F4EFE2" opacity="0.5">${s.value}</text>`;
  }).join('')}
  ${params.title ? `<text x="${w / 2}" y="${startY - 12}" text-anchor="middle" font-family="Fraunces, serif" font-size="16" fill="#F4EFE2" opacity="0.8" font-style="italic">${params.title}</text>` : ''}
</svg>`;
  },

  // ─── RADAR WEB ─────────────────────────────────────────────────────────────
  // For skills, comparison, evaluation posts
  // params: title, axes="Axis:value,...", palette
  'radar-web': ({ params, accent, accentLight, w, h }) => {
    const axes = (params.axes || 'Speed:80,Quality:65,Cost:45,Reach:70,Impact:90')
      .split(',').map(s => { const [lbl, val] = s.split(':'); return { lbl: lbl.trim(), val: Math.min(100, parseFloat(val) || 50) }; })
      .slice(0, 8);
    const n = axes.length;
    const cx = w / 2, cy = h / 2;
    const rMax = Math.min(w, h) * 0.32;

    const point = (i, r) => {
      const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
      return [cx + Math.cos(angle) * r, cy + Math.sin(angle) * r];
    };

    const webPoints = axes.map((ax, i) => point(i, (ax.val / 100) * rMax));
    const outerPoints = axes.map((_, i) => point(i, rMax));
    const guideR = [0.33, 0.66, 1];

    return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <rect width="${w}" height="${h}" fill="#1F2D24"/>
  <!-- Guide circles -->
  ${guideR.map(f => `<circle cx="${cx}" cy="${cy}" r="${rMax * f}" fill="none" stroke="#F4EFE2" stroke-width="0.5" stroke-opacity="0.1" stroke-dasharray="4 6"/>`).join('\n  ')}
  <!-- Spokes -->
  ${outerPoints.map(([x, y]) => `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="#F4EFE2" stroke-width="0.5" stroke-opacity="0.15"/>`).join('\n  ')}
  <!-- Data polygon -->
  <polygon points="${webPoints.map(([x, y]) => `${x},${y}`).join(' ')}" fill="${accent}" fill-opacity="0.2" stroke="${accent}" stroke-width="2"/>
  <!-- Data dots -->
  ${webPoints.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="${accent}"/>`).join('\n  ')}
  <!-- Axis labels -->
  ${outerPoints.map(([x, y], i) => {
    const labelR = rMax * 1.18;
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
    const lx = cx + Math.cos(angle) * labelR;
    const ly = cy + Math.sin(angle) * labelR;
    return `<text x="${lx}" y="${ly + 4}" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#F4EFE2" opacity="0.6">${axes[i].lbl}</text>`;
  }).join('\n  ')}
  ${params.title ? `<text x="${w / 2}" y="24" text-anchor="middle" font-family="Fraunces, serif" font-size="16" fill="#F4EFE2" opacity="0.8" font-style="italic">${params.title}</text>` : ''}
</svg>`;
  },

  // ─── QUADRANT MAP ──────────────────────────────────────────────────────────
  // For 2x2 matrices, business strategy, prioritization posts
  // params: title, q1/q2/q3/q4 (quadrant labels), items="Label:x:y,...", palette
  'quadrant-map': ({ params, accent, w, h }) => {
    const margin = { top: h * 0.12, bottom: h * 0.1, left: w * 0.1, right: w * 0.06 };
    const plotW = w - margin.left - margin.right;
    const plotH = h - margin.top - margin.bottom;
    const midX = margin.left + plotW / 2;
    const midY = margin.top + plotH / 2;

    const items = (params.items || '')
      .split(',').filter(Boolean)
      .map(s => { const [lbl, x, y] = s.split(':'); return { lbl: lbl.trim(), x: parseFloat(x) || 50, y: parseFloat(y) || 50 }; })
      .slice(0, 8);

    const plotX = (v) => margin.left + (v / 100) * plotW;
    const plotY = (v) => margin.top + ((100 - v) / 100) * plotH;

    return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <rect width="${w}" height="${h}" fill="#1F2D24"/>
  <!-- Quadrant fills -->
  <rect x="${margin.left}" y="${margin.top}" width="${plotW / 2}" height="${plotH / 2}" fill="${accent}" fill-opacity="0.05"/>
  <rect x="${midX}" y="${midY}" width="${plotW / 2}" height="${plotH / 2}" fill="${accent}" fill-opacity="0.08"/>
  <!-- Axes -->
  <line x1="${margin.left}" y1="${midY}" x2="${w - margin.right}" y2="${midY}" stroke="#F4EFE2" stroke-width="1" stroke-opacity="0.25"/>
  <line x1="${midX}" y1="${margin.top}" x2="${midX}" y2="${margin.top + plotH}" stroke="#F4EFE2" stroke-width="1" stroke-opacity="0.25"/>
  <!-- Quadrant labels -->
  ${[
    [params.q2 || 'High Impact\nLow Effort', midX - plotW / 4, margin.top + plotH / 4],
    [params.q1 || 'High Impact\nHigh Effort', midX + plotW / 4, margin.top + plotH / 4],
    [params.q3 || 'Low Impact\nLow Effort', midX - plotW / 4, midY + plotH / 4],
    [params.q4 || 'Low Impact\nHigh Effort', midX + plotW / 4, midY + plotH / 4],
  ].map(([lbl, x, y]) => `<text x="${x}" y="${y}" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#F4EFE2" opacity="0.2">${lbl.split('\\n')[0]}</text>`).join('\n  ')}
  <!-- Items -->
  ${items.map(it => `
  <circle cx="${plotX(it.x)}" cy="${plotY(it.y)}" r="6" fill="${accent}" fill-opacity="0.8"/>
  <text x="${plotX(it.x)}" y="${plotY(it.y) - 10}" text-anchor="middle" font-family="Fraunces, serif" font-size="11" fill="#F4EFE2" font-style="italic">${it.lbl}</text>`).join('')}
  ${params.title ? `<text x="${w / 2}" y="${margin.top - 8}" text-anchor="middle" font-family="Fraunces, serif" font-size="16" fill="#F4EFE2" opacity="0.8" font-style="italic">${params.title}</text>` : ''}
</svg>`;
  },

  // ─── LINE WAVE ─────────────────────────────────────────────────────────────
  // For trend, growth, change over time posts
  // params: title, values="v1,v2,v3,...", palette
  'line-wave': ({ params, accent, w, h }) => {
    const values = (params.values || '20,35,28,55,42,70,65,85')
      .split(',').map(v => parseFloat(v.trim()) || 0);
    const margin = { top: h * 0.15, bottom: h * 0.18, left: w * 0.08, right: w * 0.06 };
    const plotW = w - margin.left - margin.right;
    const plotH = h - margin.top - margin.bottom;
    const max = Math.max(...values);
    const min = Math.min(...values);
    const range = max - min || 1;

    const points = values.map((v, i) => [
      margin.left + (i / (values.length - 1)) * plotW,
      margin.top + plotH - ((v - min) / range) * plotH,
    ]);

    const pathD = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'} ${x} ${y}`).join(' ');
    const areaD = `${pathD} L ${points[points.length - 1][0]} ${margin.top + plotH} L ${points[0][0]} ${margin.top + plotH} Z`;

    return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <rect width="${w}" height="${h}" fill="#1F2D24"/>
  <!-- Area fill -->
  <path d="${areaD}" fill="${accent}" fill-opacity="0.12"/>
  <!-- Line -->
  <path d="${pathD}" fill="none" stroke="${accent}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Data dots -->
  ${points.map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${i === points.length - 1 ? 5 : 3}" fill="${i === points.length - 1 ? accent : '#1F2D24'}" stroke="${accent}" stroke-width="1.5"/>`).join('\n  ')}
  <!-- Baseline -->
  <line x1="${margin.left}" y1="${margin.top + plotH}" x2="${w - margin.right}" y2="${margin.top + plotH}" stroke="#F4EFE2" stroke-width="0.5" stroke-opacity="0.2"/>
  ${params.title ? `<text x="${w / 2}" y="${margin.top - 10}" text-anchor="middle" font-family="Fraunces, serif" font-size="16" fill="#F4EFE2" opacity="0.8" font-style="italic">${params.title}</text>` : ''}
</svg>`;
  },

  // ─── DONUT SPLIT ───────────────────────────────────────────────────────────
  // For part-of-whole, proportion, composition posts
  // params: title, segments="Label:value,...", palette
  'donut-split': ({ params, accent, accentLight, accentDark, w, h }) => {
    const segments = (params.segments || 'Main:60,Second:25,Rest:15')
      .split(',').map(s => { const [lbl, val] = s.split(':'); return { lbl: lbl.trim(), val: parseFloat(val) || 10 }; });
    const total = segments.reduce((s, sg) => s + sg.val, 0);
    const cx = w / 2, cy = h / 2;
    const rOuter = Math.min(w, h) * 0.3;
    const rInner = rOuter * 0.55;
    const colors = [accent, accentLight, accentDark, '#F4EFE2'];

    let startAngle = -Math.PI / 2;
    const arcs = segments.map((sg, i) => {
      const sweep = (sg.val / total) * Math.PI * 2;
      const endAngle = startAngle + sweep;
      const x1 = cx + Math.cos(startAngle) * rOuter;
      const y1 = cy + Math.sin(startAngle) * rOuter;
      const x2 = cx + Math.cos(endAngle) * rOuter;
      const y2 = cy + Math.sin(endAngle) * rOuter;
      const x3 = cx + Math.cos(endAngle) * rInner;
      const y3 = cy + Math.sin(endAngle) * rInner;
      const x4 = cx + Math.cos(startAngle) * rInner;
      const y4 = cy + Math.sin(startAngle) * rInner;
      const large = sweep > Math.PI ? 1 : 0;
      const mid = startAngle + sweep / 2;
      const lx = cx + Math.cos(mid) * (rOuter * 1.2);
      const ly = cy + Math.sin(mid) * (rOuter * 1.2);
      const arc = { d: `M ${x1} ${y1} A ${rOuter} ${rOuter} 0 ${large} 1 ${x2} ${y2} L ${x3} ${y3} A ${rInner} ${rInner} 0 ${large} 0 ${x4} ${y4} Z`, color: colors[i % colors.length], lbl: sg.lbl, lx, ly, val: sg.val, total };
      startAngle = endAngle;
      return arc;
    });

    return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <rect width="${w}" height="${h}" fill="#1F2D24"/>
  ${arcs.map(a => `<path d="${a.d}" fill="${a.color}" fill-opacity="${a.color === accent ? 1 : 0.5}"/>`).join('\n  ')}
  ${arcs.map(a => `<text x="${a.lx}" y="${a.ly + 4}" text-anchor="middle" font-family="Fraunces, serif" font-size="12" fill="#F4EFE2" opacity="0.7" font-style="italic">${a.lbl}</text>`).join('\n  ')}
  <circle cx="${cx}" cy="${cy}" r="${rInner}" fill="#1F2D24"/>
  ${params.title ? `<text x="${cx}" y="${cy + 5}" text-anchor="middle" font-family="Fraunces, serif" font-size="14" fill="#F4EFE2" font-style="italic">${params.title}</text>` : ''}
</svg>`;
  },

  // ─── HIERARCHY TREE ────────────────────────────────────────────────────────
  // For org charts, taxonomy, breakdown posts
  // params: title, root (label), children="A,B,C" (first-level), grandchildren="A1,A2,B1,B2,C1" (optional)
  'hierarchy-tree': ({ params, accent, accentLight, w, h }) => {
    const root = params.root || 'Root';
    const children = (params.children || 'Branch A,Branch B,Branch C').split(',').map(s => s.trim());
    const cx = w / 2;
    const rootY = h * 0.14;
    const childY = h * 0.44;
    const boxH = h * 0.1;
    const boxW = Math.min(120, (w * 0.85) / children.length - 12);
    const childSpacing = (w * 0.85) / children.length;
    const childXs = children.map((_, i) => w * 0.075 + i * childSpacing + childSpacing / 2);

    return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <rect width="${w}" height="${h}" fill="#1F2D24"/>
  <!-- Root box -->
  <rect x="${cx - boxW * 0.7}" y="${rootY}" width="${boxW * 1.4}" height="${boxH}" rx="8" fill="${accent}" stroke="${accent}" stroke-width="1.5"/>
  <text x="${cx}" y="${rootY + boxH * 0.55}" text-anchor="middle" font-family="Fraunces, serif" font-size="13" fill="#1F2D24" font-style="italic">${root}</text>
  <!-- Branch connectors from root -->
  ${childXs.map(cx2 => `<line x1="${cx}" y1="${rootY + boxH}" x2="${cx2}" y2="${childY}" stroke="${accent}" stroke-width="1" stroke-opacity="0.35"/>`).join('\n  ')}
  <!-- Child boxes -->
  ${children.map((ch, i) => `
  <rect x="${childXs[i] - boxW / 2}" y="${childY}" width="${boxW}" height="${boxH * 0.85}" rx="6" fill="#1F2D24" stroke="${accentLight}" stroke-width="1.5" stroke-opacity="0.7"/>
  <text x="${childXs[i]}" y="${childY + boxH * 0.5}" text-anchor="middle" font-family="Fraunces, serif" font-size="11" fill="#F4EFE2" opacity="0.85">${ch}</text>`).join('')}
  ${params.title ? `<text x="${w / 2}" y="${rootY - 12}" text-anchor="middle" font-family="Fraunces, serif" font-size="16" fill="#F4EFE2" opacity="0.8" font-style="italic">${params.title}</text>` : ''}
</svg>`;
  },
};

// Default export — one function to call

