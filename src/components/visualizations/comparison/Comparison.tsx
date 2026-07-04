import React from 'react';
import { VizFrame } from '../primitives/VizFrame';
import { VizNode } from '../primitives/VizNode';
import { VizCircleNode } from '../primitives/VizCircleNode';
import { VizConnector } from '../primitives/VizConnector';
import type { IWStructure } from '../../../lib/types';
import { registerComponent } from '../../../lib/visualizationRegistry';

type ComparisonProps = {
  data: IWStructure;
  variant?: string;
  theme?: 'light' | 'dark';
};

export const Comparison: React.FC<ComparisonProps> = ({
  data,
  variant = 'pros-cons-list',
  theme = 'light'
}) => {
  const { title, subtitle, nodes } = data;

  if (nodes.length === 0) {
    return null;
  }

  const w = 1200;
  const h = 750;
  const cx = w / 2;
  const cy = h / 2;
  const isDark = theme === 'dark';

  const computedNodes: { id: string; label: string; x: number; y: number; role?: any; width?: number; height?: number }[] = [];
  const computedConnectors: { x1: number; y1: number; x2: number; y2: number }[] = [];
  let customSvgContent: React.ReactNode = null;

  // ─── PROS AND CONS LIST LAYOUT ─────────────────────────────────────────────
  if (variant === 'pros-cons-list' || variant === 'side-by-side-table') {
    const leftNodes = nodes.filter(n => n.group === 'pros' || n.role === 'positive');
    const rightNodes = nodes.filter(n => n.group === 'cons' || n.role === 'negative' || (!leftNodes.includes(n) && n !== nodes[0]));
    
    // Fallback if none mapped to groups/roles
    const leftList = leftNodes.length > 0 ? leftNodes : nodes.slice(0, Math.ceil(nodes.length / 2));
    const rightList = rightNodes.length > 0 ? rightNodes : nodes.slice(Math.ceil(nodes.length / 2));

    // Pros Column (Left)
    const leftX = w * 0.28;
    const leftStartY = 160;
    const leftSpacing = 68;
    leftList.forEach((n, i) => {
      computedNodes.push({ id: n.id, label: n.label, x: leftX, y: leftStartY + i * leftSpacing, role: 'positive', width: 280, height: 48 });
    });

    // Cons Column (Right)
    const rightX = w * 0.72;
    const rightStartY = 160;
    const rightSpacing = 68;
    rightList.forEach((n, i) => {
      computedNodes.push({ id: n.id, label: n.label, x: rightX, y: rightStartY + i * rightSpacing, role: 'negative', width: 280, height: 48 });
    });

    customSvgContent = (
      <g>
        {/* Column Headers */}
        <text x={leftX} y="110" textAnchor="middle" fontSize="16" fontWeight="700" fill="#1F8A5B">PROS</text>
        <text x={rightX} y="110" textAnchor="middle" fontSize="16" fontWeight="700" fill="#C2410C">CONS</text>
        <line x1={cx} y1="120" x2={cx} y2={h - 100} stroke={isDark ? '#2D3139' : '#ECECE8'} strokeWidth="1.5" strokeDasharray="6 6" />
      </g>
    );
  }
  // ─── VENN DIAGRAM LAYOUT ───────────────────────────────────────────────────
  else if (variant === 'venn-diagram') {
    const nodeA = nodes[0];
    const nodeB = nodes[1] || { id: 'b', label: 'B' };
    const nodeC = nodes[2] || { id: 'c', label: 'Overlap' };

    const r = 180;
    const dx = 100;

    customSvgContent = (
      <g>
        {/* Left circle */}
        <circle cx={cx - dx} cy={cy} r={r} fill={isDark ? '#1F2D24' : '#DCEEE4'} fillOpacity="0.45" stroke="#1F8A5B" strokeWidth="2" />
        {/* Right circle */}
        <circle cx={cx + dx} cy={cy} r={r} fill={isDark ? '#151C3F' : '#E4E9FB'} fillOpacity="0.4" stroke="#3559E0" strokeWidth="2" />
        
        {/* Text anchors inside Venn intersections */}
        <text x={cx - dx - 40} y={cy + 5} textAnchor="middle" fontSize="14" fontWeight="600" fill={isDark ? '#F3F4F7' : '#0F1115'}>{nodeA.label}</text>
        <text x={cx + dx + 40} y={cy + 5} textAnchor="middle" fontSize="14" fontWeight="600" fill={isDark ? '#F3F4F7' : '#0F1115'}>{nodeB.label}</text>
        <text x={cx} y={cy + 5} textAnchor="middle" fontSize="12" fontWeight="600" fill="#5B4B8A">{nodeC.label}</text>
      </g>
    );
  }
  // ─── VS / HEAD-TO-HEAD LAYOUT ──────────────────────────────────────────────
  else if (variant === 'vs-diagram') {
    const leftHero = nodes[0];
    const rightHero = nodes[1] || { id: 'b', label: 'Option B' };

    computedNodes.push({ id: leftHero.id, label: leftHero.label, x: cx - 220, y: cy, role: 'primary', width: 220, height: 60 });
    computedNodes.push({ id: rightHero.id, label: rightHero.label, x: cx + 220, y: cy, role: 'neutral', width: 220, height: 60 });

    customSvgContent = (
      <g>
        <text x={cx} y={cy + 12} textAnchor="middle" fontSize="36" fontWeight="800" fill={isDark ? '#D1D3DA' : '#0F1115'} opacity="0.6">VS</text>
        <line x1={cx - 80} y1={cy} x2={cx - 10} y2={cy} stroke={isDark ? '#2D3139' : '#ECECE8'} strokeWidth="1.5" />
        <line x1={cx + 10} y1={cy} x2={cx + 80} y2={cy} stroke={isDark ? '#2D3139' : '#ECECE8'} strokeWidth="1.5" />
      </g>
    );
  }
  // ─── QUADRANT CHART LAYOUT ─────────────────────────────────────────────────
  else {
    // Default to quadrant layout
    customSvgContent = (
      <g>
        {/* Quadrant Axes */}
        <line x1="150" y1={cy} x2={w - 150} y2={cy} stroke={isDark ? '#D1D3DA' : '#0F1115'} strokeWidth="2" />
        <line x1={cx} y1="120" x2={cx} y2={h - 120} stroke={isDark ? '#D1D3DA' : '#0F1115'} strokeWidth="2" />
        
        {/* Axis Labels */}
        <text x={w - 140} y={cy + 4} textAnchor="start" fontSize="12" fontWeight="600" fill={isDark ? '#9AA0AC' : '#5B616E'}>High Value</text>
        <text x="140" y={cy + 4} textAnchor="end" fontSize="12" fontWeight="600" fill={isDark ? '#9AA0AC' : '#5B616E'}>Low Value</text>
        <text x={cx} y="100" textAnchor="middle" fontSize="12" fontWeight="600" fill={isDark ? '#9AA0AC' : '#5B616E'}>High Feasibility</text>
        <text x={cx} y={h - 100} textAnchor="middle" fontSize="12" fontWeight="600" fill={isDark ? '#9AA0AC' : '#5B616E'}>Low Feasibility</text>
      </g>
    );

    // Place nodes in quadrants
    nodes.forEach((n, i) => {
      // Alternate quadrant positions
      const qx = i % 2 === 0 ? cx + 180 : cx - 180;
      const qy = Math.floor(i / 2) % 2 === 0 ? cy - 140 : cy + 140;
      computedNodes.push({ id: n.id, label: n.label, x: qx, y: qy, role: n.role });
    });
  }

  return (
    <VizFrame theme={theme} title={title} subtitle={subtitle}>
      {customSvgContent}
      
      {/* Connectors */}
      {computedConnectors.map((c, i) => (
        <VizConnector
          key={i}
          x1={c.x1}
          y1={c.y1}
          x2={c.x2}
          y2={c.y2}
          theme={theme}
        />
      ))}
      
      {/* Nodes */}
      {computedNodes.map((n) => (
        <VizNode
          key={n.id}
          x={n.x}
          y={n.y}
          width={n.width || 140}
          height={n.height || 52}
          label={n.label}
          role={n.role}
          theme={theme}
        />
      ))}
    </VizFrame>
  );
};

// Register comparison layouts
registerComponent('pros-cons-list', Comparison);
registerComponent('side-by-side-table', Comparison);
registerComponent('vs-diagram', Comparison);
registerComponent('venn-diagram', Comparison);
registerComponent('quadrant-chart', Comparison);
registerComponent('radar-chart', Comparison);
registerComponent('feature-matrix', Comparison);
registerComponent('ranking-chart', Comparison);
