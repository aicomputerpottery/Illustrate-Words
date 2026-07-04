import React from 'react';
import { VizFrame } from '../primitives/VizFrame';
import { VizTextBlock } from '../primitives/VizTextBlock';
import type { IWStructure } from '../../../lib/types';
import { registerComponent } from '../../../lib/visualizationRegistry';

type DataChartProps = {
  data: IWStructure;
  variant?: string;
  theme?: 'light' | 'dark';
};

export const DataChart: React.FC<DataChartProps> = ({
  data,
  variant = 'bar-chart',
  theme = 'light'
}) => {
  const { title, subtitle, nodes } = data;

  if (nodes.length === 0) {
    return null;
  }

  const w = 1200;
  const h = 750;
  const isDark = theme === 'dark';
  const textColor = isDark ? '#F3F4F7' : '#0F1115';
  const accentColor = '#3559E0';
  const accentSoft = isDark ? '#151C3F' : '#E4E9FB';

  let chartContent: React.ReactNode = null;

  // ─── PIE / DONUT CHART LAYOUT ──────────────────────────────────────────────
  if (variant === 'pie-chart' || variant === 'donut-chart') {
    const cx = w / 2;
    const cy = h / 2 + 20;
    const r = 200;
    const isDonut = variant === 'donut-chart';

    let cumulativeAngle = -Math.PI / 2;
    const totalWeight = nodes.reduce((sum, n) => sum + (n.weight || 3), 0);

    const slices = nodes.map((node, i) => {
      const weight = node.weight || 3;
      const angle = (weight / totalWeight) * Math.PI * 2;
      const startX = cx + Math.cos(cumulativeAngle) * r;
      const startY = cy + Math.sin(cumulativeAngle) * r;
      
      cumulativeAngle += angle;
      const endX = cx + Math.cos(cumulativeAngle) * r;
      const endY = cy + Math.sin(cumulativeAngle) * r;
      
      const largeArcFlag = angle > Math.PI ? 1 : 0;
      const pathD = `M ${cx} ${cy} L ${startX} ${startY} A ${r} ${r} 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;
      
      // Label coordinates at midpoint of slice
      const midAngle = cumulativeAngle - angle / 2;
      const lx = cx + Math.cos(midAngle) * (r * 0.7);
      const ly = cy + Math.sin(midAngle) * (r * 0.7);
      
      // Determine color opacity slice by slice
      const fillOpacity = 0.3 + (i / nodes.length) * 0.6;

      return (
        <g key={node.id}>
          <path
            d={pathD}
            fill={accentColor}
            fillOpacity={fillOpacity}
            stroke={isDark ? '#0B0C0F' : '#FFFFFF'}
            strokeWidth="2"
          />
          <text
            x={lx}
            y={ly}
            fill={isDark ? '#F3F4F7' : '#0F1115'}
            fontSize="11"
            fontWeight="600"
            textAnchor="middle"
          >
            {node.label.slice(0, 15)}
          </text>
        </g>
      );
    });

    chartContent = (
      <g>
        {slices}
        {isDonut && (
          <circle cx={cx} cy={cy} r={r * 0.5} fill={isDark ? '#0B0C0F' : '#FFFFFF'} stroke={textColor} strokeWidth="1.5" />
        )}
      </g>
    );
  }
  // ─── LINE / AREA CHART LAYOUT ──────────────────────────────────────────────
  else if (variant === 'line-chart' || variant === 'area-chart') {
    const margin = { top: 160, bottom: 120, left: 120, right: 120 };
    const chartW = w - margin.left - margin.right;
    const chartH = h - margin.top - margin.bottom;
    
    const colSpacing = chartW / Math.max(1, nodes.length - 1);
    const points = nodes.map((node, i) => {
      const weight = node.weight || 3; // 1-5 scale
      const px = margin.left + i * colSpacing;
      const py = margin.top + chartH - (weight / 5) * chartH;
      return { x: px, y: py, label: node.label };
    });

    const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
    const areaD = `${pathD} L ${points[points.length - 1].x} ${margin.top + chartH} L ${points[0].x} ${margin.top + chartH} Z`;

    chartContent = (
      <g>
        {/* Baseline & Ticks */}
        <line x1={margin.left} y1={margin.top + chartH} x2={margin.left + chartW} y2={margin.top + chartH} stroke={textColor} strokeWidth="1.5" />
        
        {variant === 'area-chart' && (
          <path d={areaD} fill={accentColor} fillOpacity="0.15" />
        )}
        
        <path d={pathD} fill="none" stroke={accentColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="5" fill={isDark ? '#0B0C0F' : '#FFFFFF'} stroke={accentColor} strokeWidth="2" />
            <text x={p.x} y={margin.top + chartH + 24} textAnchor="middle" fontSize="11" fill={textColor}>{p.label.slice(0, 12)}</text>
          </g>
        ))}
      </g>
    );
  }
  // ─── VERTICAL BAR CHART LAYOUT ─────────────────────────────────────────────
  else {
    const margin = { top: 160, bottom: 120, left: 120, right: 120 };
    const chartW = w - margin.left - margin.right;
    const chartH = h - margin.top - margin.bottom;

    const barSpacing = chartW / nodes.length;
    const barW = barSpacing * 0.6;

    chartContent = (
      <g>
        {/* Baseline */}
        <line x1={margin.left} y1={margin.top + chartH} x2={margin.left + chartW} y2={margin.top + chartH} stroke={textColor} strokeWidth="1.5" />

        {nodes.map((node, i) => {
          const weight = node.weight || 3;
          const barH = (weight / 5) * chartH;
          const bx = margin.left + i * barSpacing + (barSpacing - barW) / 2;
          const by = margin.top + chartH - barH;

          return (
            <g key={node.id}>
              <rect
                x={bx}
                y={by}
                width={barW}
                height={barH}
                rx="4"
                fill={accentSoft}
                stroke={accentColor}
                strokeWidth="1.5"
              />
              <VizTextBlock
                x={bx + barW / 2}
                y={margin.top + chartH + 22}
                text={node.label}
                fontSize={10}
                fontWeight="500"
                fill={textColor}
                maxWidth={barW + 16}
              />
              {/* Highlight value label */}
              <text x={bx + barW / 2} y={by - 8} textAnchor="middle" fontSize="10" fontWeight="600" fill={accentColor}>
                {weight * 20}%
              </text>
            </g>
          );
        })}
      </g>
    );
  }

  return (
    <VizFrame theme={theme} title={title} subtitle={subtitle}>
      {chartContent}
    </VizFrame>
  );
};

// Register data visualizer loaders
registerComponent('bar-chart', DataChart);
registerComponent('horizontal-bar-chart', DataChart);
registerComponent('grouped-bar-chart', DataChart);
registerComponent('stacked-bar-chart', DataChart);
registerComponent('line-chart', DataChart);
registerComponent('area-chart', DataChart);
registerComponent('pie-chart', DataChart);
registerComponent('donut-chart', DataChart);
registerComponent('scatter-plot', DataChart);
registerComponent('bubble-chart', DataChart);
registerComponent('waterfall-chart', DataChart);
registerComponent('heatmap', DataChart);
registerComponent('treemap', DataChart);
registerComponent('sankey-diagram', DataChart);
