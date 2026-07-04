import React from 'react';
import { VizFrame } from '../primitives/VizFrame';
import { VizNode } from '../primitives/VizNode';
import { VizConnector } from '../primitives/VizConnector';
import { VizTextBlock } from '../primitives/VizTextBlock';
import type { IWStructure } from '../../../lib/types';
import { registerComponent } from '../../../lib/visualizationRegistry';

type BrainstormProps = {
  data: IWStructure;
  variant?: string;
  theme?: 'light' | 'dark';
};

export const Brainstorming: React.FC<BrainstormProps> = ({
  data,
  variant = 'idea-cluster',
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
  const textColor = isDark ? '#F3F4F7' : '#0F1115';

  const computedNodes: { id: string; label: string; x: number; y: number; role?: any; width?: number; height?: number }[] = [];
  const computedConnectors: { x1: number; y1: number; x2: number; y2: number }[] = [];
  let customSvgContent: React.ReactNode = null;

  // ─── PROBLEM TO SOLUTION / TRANSFORMATION LAYOUT ───────────────────────────
  if (variant === 'problem-to-solution' || variant === 'before-after' || variant === 'transformation') {
    const leftNode = nodes[0];
    const rightNode = nodes[1] || { id: 's', label: 'Solution details...' };

    computedNodes.push({ id: leftNode.id, label: leftNode.label, x: cx - 240, y: cy, role: 'negative', width: 320, height: 180 });
    computedNodes.push({ id: rightNode.id, label: rightNode.label, x: cx + 240, y: cy, role: 'positive', width: 320, height: 180 });
    
    // Directional Arrow between them
    computedConnectors.push({ x1: cx - 60, y1: cy, x2: cx + 40, y2: cy });
    
    customSvgContent = (
      <g>
        <text x={cx - 240} y={cy - 110} textAnchor="middle" fontSize="16" fontWeight="700" fill="#C2410C">PROBLEM</text>
        <text x={cx + 240} y={cy - 110} textAnchor="middle" fontSize="16" fontWeight="700" fill="#1F8A5B">SOLUTION</text>
      </g>
    );
  }
  // ─── ICEBERG MODEL LAYOUT ──────────────────────────────────────────────────
  else if (variant === 'iceberg-model') {
    const visibleNode = nodes[0];
    const hiddenNodes = nodes.slice(1);
    
    customSvgContent = (
      <g>
        {/* Iceberg Polygon */}
        <polygon
          points={`${cx},100 ${cx - 200},350 ${cx - 280},680 ${cx + 280},680 ${cx + 200},350`}
          fill={isDark ? '#1F2D24' : '#E4E9FB'}
          fillOpacity="0.4"
          stroke="#3559E0"
          strokeWidth="2"
        />
        {/* Waterline */}
        <line x1="100" y1="350" x2={w - 100} y2="350" stroke="#3559E0" strokeWidth="2" strokeDasharray="8 6" />
        <text x={w - 110} y="340" textAnchor="end" fontSize="11" fontWeight="700" fill="#3559E0">WATERLINE</text>
        
        {/* Visible items labels */}
        <text x={cx} y="150" textAnchor="middle" fontSize="12" fontWeight="700" fill={textColor}>ON THE SURFACE</text>
        <text x={cx} y="220" textAnchor="middle" fontSize="14" fontWeight="600" fill={textColor}>{visibleNode.label}</text>
        
        {/* Hidden items labels */}
        <text x={cx} y="410" textAnchor="middle" fontSize="12" fontWeight="700" fill={textColor}>UNDER THE SURFACE (ROOTS)</text>
        {hiddenNodes.map((n, i) => (
          <text key={n.id} x={cx} y={470 + i * 50} textAnchor="middle" fontSize="13" fontWeight="500" fill={textColor}>
            • {n.label}
          </text>
        ))}
      </g>
    );
  }
  // ─── FLAT LIST / KEY IDEAS LAYOUT ──────────────────────────────────────────
  else if (variant === 'list' || variant === 'affinity-diagram' || variant === 'how-might-we') {
    const rowH = 68;
    const startY = 160;
    nodes.forEach((n, i) => {
      computedNodes.push({ id: n.id, label: `${i + 1}. ${n.label}`, x: cx, y: startY + i * rowH, role: n.role, width: 680, height: 48 });
    });
  }
  // ─── MASONRY NOTE CARDS PACKED GRID ────────────────────────────────────────
  else {
    // Default to packed card grid (masonry)
    const colW = 280;
    const rowH = 160;
    const startY = 180;
    const cols = 3;

    nodes.forEach((n, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = cx - colW + col * colW;
      const y = startY + row * rowH;
      computedNodes.push({ id: n.id, label: n.label, x, y, role: n.role, width: 240, height: 120 });
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
          strokeWidth={2}
          color={isDark ? '#F3F4F7' : '#0F1115'}
        />
      ))}
      
      {/* Nodes */}
      {computedNodes.map((n) => (
        <VizNode
          key={n.id}
          x={n.x}
          y={n.y}
          width={n.width}
          height={n.height}
          label={n.label}
          role={n.role}
          theme={theme}
        />
      ))}
    </VizFrame>
  );
};

// Register brainstorming, lists, and metaphors
registerComponent('idea-cluster', Brainstorming);
registerComponent('how-might-we', Brainstorming);
registerComponent('crazy-eights', Brainstorming);
registerComponent('affinity-diagram', Brainstorming);
registerComponent('lotus-blossom', Brainstorming);
registerComponent('list', Brainstorming);
registerComponent('tables', Brainstorming);
registerComponent('iceberg-model', Brainstorming);
registerComponent('problem-to-solution', Brainstorming);
registerComponent('before-after', Brainstorming);
registerComponent('transformation', Brainstorming);
registerComponent('challenges', Brainstorming);
registerComponent('bridge-diagram', Brainstorming);
registerComponent('vision', Brainstorming);
registerComponent('impact-map', Brainstorming);
registerComponent('performance', Brainstorming);
registerComponent('bottleneck', Brainstorming);
registerComponent('hole', Brainstorming);
registerComponent('root-cause-analysis', Brainstorming);
registerComponent('fishbone-diagram', Brainstorming);
registerComponent('problem-tree', Brainstorming);
registerComponent('solution-matrix', Brainstorming);
registerComponent('risk-matrix', Brainstorming);
registerComponent('flywheel', Brainstorming);
registerComponent('funnel-metaphor', Brainstorming);
registerComponent('story-arc', Brainstorming);
registerComponent('heros-journey', Brainstorming);
registerComponent('problem-agitate-solution', Brainstorming);
registerComponent('theory-of-change', Brainstorming);
registerComponent('causal-loop-diagram', Brainstorming);
registerComponent('decision-tree', Brainstorming);
registerComponent('taxonomy-tree', Brainstorming);
registerComponent('sitemap', Brainstorming);
