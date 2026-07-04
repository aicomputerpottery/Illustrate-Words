import React from 'react';

type VizFrameProps = {
  width?: number;
  height?: number;
  theme?: 'light' | 'dark';
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

export const VizFrame: React.FC<VizFrameProps> = ({
  width = 1200,
  height = 750,
  theme = 'light',
  title,
  subtitle,
  children,
  className = ''
}) => {
  const isDark = theme === 'dark';
  const bgColor = isDark ? '#0B0C0F' : '#FFFFFF';
  const textColor = isDark ? '#F3F4F7' : '#0F1115';
  const subColor = isDark ? '#9AA0AC' : '#5B616E';

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height="100%"
      className={`select-none ${className}`}
      style={{ backgroundColor: bgColor }}
      role="img"
      aria-label={title || 'Visual Diagram'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Load Inter font natively */}
        <style dangerouslySetInnerHTML={{ __html: `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          text {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            user-select: none;
          }
        `}} />
      </defs>

      {/* Render Title/Subtitle block if provided */}
      {title && (
        <g transform="translate(24, 40)">
          <text
            x="0"
            y="0"
            fontSize="20"
            fontWeight="600"
            letterSpacing="-0.01em"
            fill={textColor}
          >
            {title}
          </text>
          {subtitle && (
            <text
              x="0"
              y="22"
              fontSize="12"
              fontWeight="400"
              fill={subColor}
            >
              {subtitle}
            </text>
          )}
        </g>
      )}

      {/* Watermark in bottom right */}
      <g transform={`translate(${width - 150}, ${height - 24})`} opacity="0.4">
        <text
          x="0"
          y="0"
          fontSize="11"
          fontWeight="500"
          letterSpacing="0.06em"
          fill={isDark ? '#6C7280' : '#8A909C'}
        >
          ILLUSTRATEWORDS
        </text>
      </g>

      {/* Render actual visualizer components */}
      <g>{children}</g>
    </svg>
  );
};
