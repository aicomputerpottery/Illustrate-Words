import React from 'react';
import { VizTextBlock } from './VizTextBlock';

type VizCircleNodeProps = {
  cx: number;
  cy: number;
  r?: number;
  label: string;
  role?: 'primary' | 'positive' | 'negative' | 'warning' | 'neutral';
  theme?: 'light' | 'dark';
  className?: string;
  onClick?: () => void;
};

export const VizCircleNode: React.FC<VizCircleNodeProps> = ({
  cx,
  cy,
  r = 60,
  label,
  role = 'neutral',
  theme = 'light',
  className = '',
  onClick
}) => {
  const isDark = theme === 'dark';

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
      transform={`translate(${cx}, ${cy})`}
      className={`${isInteractive ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      <circle
        cx="0"
        cy="0"
        r={r}
        fill={style.fill}
        stroke={style.stroke}
        strokeWidth="2"
        className="transition-all duration-200"
      />
      <VizTextBlock
        x={0}
        y={0}
        text={label}
        fontSize={13}
        fontWeight="600"
        fill={style.text}
        maxWidth={r * 1.6}
      />
    </g>
  );
};
