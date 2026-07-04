import React from 'react';
import { VizTextBlock } from './VizTextBlock';

type VizNodeProps = {
  x: number;
  y: number;
  width?: number;
  height?: number;
  label: string;
  role?: 'primary' | 'positive' | 'negative' | 'warning' | 'neutral';
  theme?: 'light' | 'dark';
  className?: string;
  onClick?: () => void;
};

export const VizNode: React.FC<VizNodeProps> = ({
  x,
  y,
  width = 160,
  height = 56,
  label,
  role = 'neutral',
  theme = 'light',
  className = '',
  onClick
}) => {
  const isDark = theme === 'dark';
  
  // Theme and role colors
  const roleStyles = {
    primary: {
      fill: isDark ? '#151C3F' : '#E4E9FB',
      stroke: '#3559E0',
      text: isDark ? '#E4E9FB' : '#3559E0',
    },
    positive: {
      fill: isDark ? '#12241C' : '#DCEEE4',
      stroke: '#1F8A5B',
      text: isDark ? '#DCEEE4' : '#1F8A5B',
    },
    negative: {
      fill: isDark ? '#2E150F' : '#FADFCF',
      stroke: '#C2410C',
      text: isDark ? '#FADFCF' : '#C2410C',
    },
    warning: {
      fill: isDark ? '#2B220C' : '#F5EBD1',
      stroke: '#B08000',
      text: isDark ? '#F5EBD1' : '#B08000',
    },
    neutral: {
      fill: isDark ? '#15171C' : '#FFFFFF',
      stroke: isDark ? '#D1D3DA' : '#0F1115',
      text: isDark ? '#F3F4F7' : '#0F1115',
    }
  };

  const style = roleStyles[role] || roleStyles.neutral;
  const isInteractive = !!onClick;

  return (
    <g
      transform={`translate(${x - width / 2}, ${y - height / 2})`}
      className={`${isInteractive ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        rx="6"
        fill={style.fill}
        stroke={style.stroke}
        strokeWidth="1.5"
        className="transition-all duration-200"
      />
      <VizTextBlock
        x={width / 2}
        y={height / 2}
        text={label}
        fontSize={12}
        fontWeight="500"
        fill={style.text}
        maxWidth={width - 24}
      />
    </g>
  );
};
