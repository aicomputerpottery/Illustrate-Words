import React from 'react';
import { VizFrame } from '../primitives/VizFrame';
import { VizNode } from '../primitives/VizNode';
import { VizCircleNode } from '../primitives/VizCircleNode';
import { VizConnector } from '../primitives/VizConnector';
import { VizArrowhead } from '../primitives/VizArrowhead';
import type { IWStructure } from '../../../lib/types';
import { registerComponent } from '../../../lib/visualizationRegistry';

type ProcessFlowProps = {
  data: IWStructure;
  variant?: string;
  theme?: 'light' | 'dark';
};

export const ProcessFlow: React.FC<ProcessFlowProps> = ({
  data,
  variant = 'linear-flowchart',
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

  const computedNodes: { id: string; label: string; x: number; y: number; role?: any }[] = [];
  const computedConnectors: { x1: number; y1: number; x2: number; y2: number; label?: string }[] = [];

  // ─── CIRCULAR PROCESS / CYCLE LAYOUT ──────────────────────────────────────
  if (variant === 'circular-process' || variant === 'cycle') {
    const radius = 200;
    nodes.forEach((node, i) => {
      const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;
      computedNodes.push({ id: node.id, label: node.label, x, y, role: node.role });

      // Connect to the next node
      const nextAngle = ((i + 1) / nodes.length) * Math.PI * 2 - Math.PI / 2;
      const nextX = cx + Math.cos(nextAngle) * radius;
      const nextY = cy + Math.sin(nextAngle) * radius;
      
      // Approximate tangent offsets for curved arrows
      const ox1 = Math.cos(angle + Math.PI / 2) * 20;
      const oy1 = Math.sin(angle + Math.PI / 2) * 20;
      const ox2 = Math.cos(nextAngle + Math.PI / 2) * 20;
      const oy2 = Math.sin(nextAngle + Math.PI / 2) * 20;

      computedConnectors.push({
        x1: x + ox1,
        y1: y + oy1,
        x2: nextX + ox2,
        y2: nextY + oy2
      });
    });
  }
  // ─── USER JOURNEY / HORIZONTAL TIMELINE LAYOUT ─────────────────────────────
  else if (variant === 'user-journey-map' || variant === 'horizontal-timeline' || variant === 'roadmap' || variant === 'gantt-chart') {
    const marginY = cy;
    const colSpacing = (w - 180) / Math.max(1, nodes.length);
    nodes.forEach((node, i) => {
      // Gentle S-curve or horizontal spacing
      const offsetFactor = i % 2 === 0 ? -60 : 60;
      const x = 90 + i * colSpacing + colSpacing / 2;
      const y = marginY + offsetFactor;
      computedNodes.push({ id: node.id, label: node.label, x, y, role: node.role });

      if (i < nodes.length - 1) {
        const nextX = 90 + (i + 1) * colSpacing + colSpacing / 2;
        const nextY = marginY + (i % 2 !== 0 ? -60 : 60);
        computedConnectors.push({ x1: x, y1: y, x2: nextX, y2: nextY });
      }
    });
  }
  // ─── LINEAR SEQUENTIAL FLOWCHART LAYOUT ────────────────────────────────────
  else {
    const startY = 100;
    const stepH = (h - 200) / Math.max(1, nodes.length);
    
    nodes.forEach((node, i) => {
      const x = cx;
      const y = startY + i * stepH;
      computedNodes.push({ id: node.id, label: node.label, x, y, role: node.role || (i === 0 ? 'primary' : undefined) });

      if (i < nodes.length - 1) {
        computedConnectors.push({ x1: x, y1: y + 28, x2: x, y2: y + stepH - 28 });
      }
    });
  }

  return (
    <VizFrame theme={theme} title={title} subtitle={subtitle}>
      <defs>
        <VizArrowhead id="process-arrow" color={isDark ? '#F3F4F7' : '#0F1115'} />
      </defs>
      
      {/* Connectors */}
      {computedConnectors.map((c, i) => (
        <VizConnector
          key={i}
          x1={c.x1}
          y1={c.y1}
          x2={c.x2}
          y2={c.y2}
          type="bezier"
          theme={theme}
          strokeWidth={1.75}
          color={isDark ? '#F3F4F7' : '#0F1115'}
          arrowheadId="process-arrow"
        />
      ))}

      {/* Nodes */}
      {computedNodes.map((n, i) => {
        const isCycle = variant === 'circular-process' || variant === 'cycle';
        if (isCycle) {
          return (
            <VizCircleNode
              key={n.id}
              cx={n.x}
              cy={n.y}
              r={44}
              label={n.label}
              role={n.role}
              theme={theme}
            />
          );
        }
        return (
          <VizNode
            key={n.id}
            x={n.x}
            y={n.y}
            width={140}
            height={52}
            label={n.label}
            role={n.role}
            theme={theme}
          />
        );
      })}
    </VizFrame>
  );
};

// Register sequential and workflow layouts
registerComponent('linear-flowchart', ProcessFlow);
registerComponent('circular-process', ProcessFlow);
registerComponent('user-journey-map', ProcessFlow);
registerComponent('funnel-chart', ProcessFlow);
registerComponent('horizontal-timeline', ProcessFlow);
registerComponent('vertical-timeline', ProcessFlow);
registerComponent('milestone-timeline', ProcessFlow);
registerComponent('gantt-chart', ProcessFlow);
registerComponent('roadmap', ProcessFlow);
