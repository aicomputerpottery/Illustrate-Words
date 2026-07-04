import React from 'react';

type VizConnectorProps = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  type?: 'straight' | 'bezier' | 'elbow';
  color?: string;
  strokeWidth?: number;
  arrowheadId?: string;
  label?: string;
  theme?: 'light' | 'dark';
};

export const VizConnector: React.FC<VizConnectorProps> = ({
  x1,
  y1,
  x2,
  y2,
  type = 'straight',
  color = '#2A2E36',
  strokeWidth = 1.5,
  arrowheadId,
  label,
  theme = 'light'
}) => {
  let pathD = '';
  
  if (type === 'straight') {
    pathD = `M ${x1} ${y1} L ${x2} ${y2}`;
  } else if (type === 'bezier') {
    const dx = x2 - x1;
    // Curved bezier control points at 40% of horizontal distance
    const cx1 = x1 + dx * 0.4;
    const cx2 = x2 - dx * 0.4;
    pathD = `M ${x1} ${y1} C ${cx1} ${y1}, ${cx2} ${y2}, ${x2} ${y2}`;
  } else if (type === 'elbow') {
    const midX = (x1 + x2) / 2;
    pathD = `M ${x1} ${y1} L ${midX} ${y1} L ${midX} ${y2} L ${x2} ${y2}`;
  }

  const isDark = theme === 'dark';
  const labelBg = isDark ? '#0B0C0F' : '#FFFFFF';
  const labelText = isDark ? '#9AA0AC' : '#5B616E';

  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;

  return (
    <g>
      <path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        markerEnd={arrowheadId ? `url(#${arrowheadId})` : undefined}
      />
      {label && (
        <g transform={`translate(${mx}, ${my})`}>
          <rect
            x="-40"
            y="-9"
            width="80"
            height="18"
            rx="3"
            fill={labelBg}
            stroke={isDark ? '#2D3139' : '#ECECE8'}
            strokeWidth="1"
          />
          <text
            x="0"
            y="3"
            textAnchor="middle"
            fontSize="10"
            fontWeight="500"
            fill={labelText}
          >
            {label}
          </text>
        </g>
      )}
    </g>
  );
};
