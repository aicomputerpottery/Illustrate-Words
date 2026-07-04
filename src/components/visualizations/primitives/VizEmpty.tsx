import React from 'react';
import { VizFrame } from './VizFrame';

type VizEmptyProps = {
  theme?: 'light' | 'dark';
  message?: string;
  subMessage?: string;
};

export const VizEmpty: React.FC<VizEmptyProps> = ({
  theme = 'light',
  message = 'Paste text to generate a visual.',
  subMessage = 'Or pick an example.'
}) => {
  const isDark = theme === 'dark';
  const strokeColor = isDark ? '#2D3139' : '#ECECE8';
  const textColor = isDark ? '#9AA0AC' : '#5B616E';
  
  return (
    <VizFrame theme={theme}>
      <g transform="translate(100, 100)">
        <rect
          x="0"
          y="0"
          width="1000"
          height="550"
          rx="12"
          fill="transparent"
          stroke={strokeColor}
          strokeWidth="2"
          strokeDasharray="8 8"
        />
        <text
          x="500"
          y="260"
          textAnchor="middle"
          fontSize="20"
          fontWeight="500"
          fill={textColor}
        >
          {message}
        </text>
        <text
          x="500"
          y="300"
          textAnchor="middle"
          fontSize="14"
          fontWeight="400"
          fill={textColor}
          opacity="0.7"
        >
          {subMessage}
        </text>
      </g>
    </VizFrame>
  );
};
