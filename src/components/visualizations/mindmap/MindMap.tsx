import React from 'react';
import { VizFrame } from '../primitives/VizFrame';
import { VizNode } from '../primitives/VizNode';
import { VizCircleNode } from '../primitives/VizCircleNode';
import { VizConnector } from '../primitives/VizConnector';
import type { IWStructure } from '../../../lib/types';
import { registerComponent } from '../../../lib/visualizationRegistry';

type MindMapProps = {
  data: IWStructure;
  variant?: string;
  theme?: 'light' | 'dark';
};

export const MindMap: React.FC<MindMapProps> = ({
  data,
  variant = 'central-node-map',
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

  // Extract root and children
  const rootNode = nodes[0];
  const children = nodes.slice(1);

  // Layout node coordinates
  const computedNodes: { id: string; label: string; x: number; y: number; role?: any }[] = [];
  const computedConnectors: { x1: number; y1: number; x2: number; y2: number }[] = [];

  // ─── RADIAL / CENTRAL NODE LAYOUT ──────────────────────────────────────────
  if (variant === 'central-node-map' || variant === 'concept-web') {
    computedNodes.push({ id: rootNode.id, label: rootNode.label, x: cx, y: cy, role: 'primary' });

    const radius = 220;
    children.forEach((child, i) => {
      const angle = (i / children.length) * Math.PI * 2 - Math.PI / 2;
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;
      computedNodes.push({ id: child.id, label: child.label, x, y, role: child.role });
      computedConnectors.push({ x1: cx, y1: cy, x2: x, y2: y });
    });
  }
  // ─── TREE / TOP-DOWN HIERARCHY LAYOUT ──────────────────────────────────────
  else if (variant === 'tree-mindmap' || variant === 'vertical-timeline') {
    const startY = 120;
    computedNodes.push({ id: rootNode.id, label: rootNode.label, x: cx, y: startY, role: 'primary' });

    const rowY = 320;
    const colSpacing = (w - 160) / Math.max(1, children.length);
    children.forEach((child, i) => {
      const x = 80 + i * colSpacing + colSpacing / 2;
      computedNodes.push({ id: child.id, label: child.label, x, y: rowY, role: child.role });
      computedConnectors.push({ x1: cx, y1: startY + 28, x2: x, y2: rowY - 28 });
    });
  }
  // ─── HORIZONTAL MIRRORED LAYOUT ────────────────────────────────────────────
  else {
    // Default to horizontal mirrored (or left/right depending on variant)
    computedNodes.push({ id: rootNode.id, label: rootNode.label, x: cx, y: cy, role: 'primary' });

    const leftChildren = children.filter((_, i) => i % 2 === 0);
    const rightChildren = children.filter((_, i) => i % 2 !== 0);

    // Right-side nodes
    if (rightChildren.length > 0) {
      const rightSpacing = (h - 180) / rightChildren.length;
      rightChildren.forEach((child, i) => {
        const x = cx + 240;
        const y = 90 + i * rightSpacing + rightSpacing / 2;
        computedNodes.push({ id: child.id, label: child.label, x, y, role: child.role });
        computedConnectors.push({ x1: cx, y1: cy, x2: x, y2: y });
      });
    }

    // Left-side nodes
    if (leftChildren.length > 0) {
      const leftSpacing = (h - 180) / leftChildren.length;
      leftChildren.forEach((child, i) => {
        const x = cx - 240;
        const y = 90 + i * leftSpacing + leftSpacing / 2;
        computedNodes.push({ id: child.id, label: child.label, x, y, role: child.role });
        computedConnectors.push({ x1: cx, y1: cy, x2: x, y2: y });
      });
    }
  }

  return (
    <VizFrame theme={theme} title={title} subtitle={subtitle}>
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
          color={isDark ? '#5B616E' : '#8A909C'}
        />
      ))}
      
      {/* Nodes */}
      {computedNodes.map((n) => {
        const isRoot = n.id === rootNode.id;
        if (isRoot) {
          return (
            <VizCircleNode
              key={n.id}
              cx={n.x}
              cy={n.y}
              r={56}
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
            width={150}
            height={50}
            label={n.label}
            role={n.role}
            theme={theme}
          />
        );
      })}
    </VizFrame>
  );
};

// Register the mindmap components
registerComponent('central-node-map', MindMap);
registerComponent('tree-mindmap', MindMap);
registerComponent('concept-web', MindMap);
registerComponent('fishbone-mindmap', MindMap);
