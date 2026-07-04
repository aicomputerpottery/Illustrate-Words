import React from 'react';
import { VizFrame } from '../primitives/VizFrame';
import { VizNode } from '../primitives/VizNode';
import { VizCircleNode } from '../primitives/VizCircleNode';
import { VizConnector } from '../primitives/VizConnector';
import type { IWStructure } from '../../../lib/types';
import { registerComponent } from '../../../lib/visualizationRegistry';

type FrameworkProps = {
  data: IWStructure;
  variant?: string;
  theme?: 'light' | 'dark';
};

export const Framework: React.FC<FrameworkProps> = ({
  data,
  variant = 'swot-analysis',
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

  // ─── SWOT ANALYSIS LAYOUT ──────────────────────────────────────────────────
  if (variant === 'swot-analysis') {
    const swotLabels = ['STRENGTHS', 'WEAKNESSES', 'OPPORTUNITIES', 'THREATS'];
    const roles = ['positive', 'warning', 'primary', 'negative'] as const;
    const quadSize = 240;
    const ox = 140;
    const oy = 110;

    // TL, TR, BL, BR
    const positions = [
      { x: cx - ox, y: cy - oy },
      { x: cx + ox, y: cy - oy },
      { x: cx - ox, y: cy + oy },
      { x: cx + ox, y: cy + oy }
    ];

    positions.forEach((pos, idx) => {
      const node = nodes[idx] || { id: `swot-${idx}`, label: `Add ${swotLabels[idx].toLowerCase()}...` };
      computedNodes.push({
        id: node.id,
        label: `${swotLabels[idx]}\n\n${node.label}`,
        x: pos.x,
        y: pos.y,
        role: roles[idx],
        width: quadSize,
        height: 180
      });
    });
  }
  // ─── PORTER'S FIVE FORCES LAYOUT ──────────────────────────────────────────
  else if (variant === 'porters-five-forces') {
    // 5 nodes: center, top, left, right, bottom
    const centerNode = nodes[0];
    const topNode = nodes[1] || { id: 't', label: 'New Entrants' };
    const leftNode = nodes[2] || { id: 'l', label: 'Suppliers' };
    const rightNode = nodes[3] || { id: 'r', label: 'Buyers' };
    const bottomNode = nodes[4] || { id: 'b', label: 'Substitutes' };

    // Center
    computedNodes.push({ id: centerNode.id, label: centerNode.label, x: cx, y: cy, role: 'primary', width: 220, height: 80 });

    // Top
    computedNodes.push({ id: topNode.id, label: topNode.label, x: cx, y: cy - 180, role: 'neutral', width: 200, height: 50 });
    computedConnectors.push({ x1: cx, y1: cy - 155, x2: cx, y2: cy - 40 });

    // Left
    computedNodes.push({ id: leftNode.id, label: leftNode.label, x: cx - 260, y: cy, role: 'neutral', width: 200, height: 50 });
    computedConnectors.push({ x1: cx - 160, y1: cy, x2: cx - 110, y2: cy });

    // Right
    computedNodes.push({ id: rightNode.id, label: rightNode.label, x: cx + 260, y: cy, role: 'neutral', width: 200, height: 50 });
    computedConnectors.push({ x1: cx + 160, y1: cy, x2: cx + 110, y2: cy });

    // Bottom
    computedNodes.push({ id: bottomNode.id, label: bottomNode.label, x: cx, y: cy + 180, role: 'neutral', width: 200, height: 50 });
    computedConnectors.push({ x1: cx, y1: cy + 155, x2: cx, y2: cy + 40 });
  }
  // ─── PYRAMID LAYOUT ────────────────────────────────────────────────────────
  else if (variant === 'pyramid-diagram') {
    const n = Math.min(5, nodes.length);
    const layers = nodes.slice(0, n);
    const startY = 160;
    const layerH = 90;

    layers.forEach((layer, i) => {
      // Ascending width
      const width = 280 + i * 80;
      const y = startY + i * layerH;
      computedNodes.push({ id: layer.id, label: `Level ${n - i}: ${layer.label}`, x: cx, y, role: i === 0 ? 'primary' : 'neutral', width, height: layerH - 12 });
    });
  }
  // ─── PESTEL ANALYSIS LAYOUT (3x2 Honeycomb Grid) ───────────────────────────
  else {
    const colSpacing = (w - 180) / 3;
    const rowSpacing = 240;
    const startY = 220;

    nodes.forEach((node, i) => {
      const col = i % 3;
      const row = Math.floor(i / 3);
      const x = 90 + col * colSpacing + colSpacing / 2;
      const y = startY + row * rowSpacing;
      computedNodes.push({ id: node.id, label: node.label, x, y, role: node.role, width: 240, height: 160 });
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

// Register frameworks
registerComponent('swot-analysis', Framework);
registerComponent('pestel-analysis', Framework);
registerComponent('porters-five-forces', Framework);
registerComponent('pyramid-diagram', Framework);
registerComponent('business-model-canvas', Framework);
registerComponent('value-proposition-canvas', Framework);
registerComponent('okr-framework', Framework);
registerComponent('bcg-matrix', Framework);
registerComponent('ansoff-matrix', Framework);
registerComponent('bullseye', Framework);
