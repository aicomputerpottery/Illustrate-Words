import React from 'react';

type VizTextBlockProps = {
  x: number;
  y: number;
  text: string;
  fontSize?: number;
  fontWeight?: string;
  fill?: string;
  maxWidth?: number;
  lineHeight?: number;
  align?: 'start' | 'middle' | 'end';
};

export const VizTextBlock: React.FC<VizTextBlockProps> = ({
  x,
  y,
  text,
  fontSize = 14,
  fontWeight = '400',
  fill = '#0F1115',
  maxWidth = 200,
  lineHeight = 1.35,
  align = 'middle'
}) => {
  // Estimate line wraps based on standard character width calculations
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';
  
  const charWidth = fontSize * 0.55;
  const maxChars = Math.max(8, Math.floor(maxWidth / charWidth));

  for (const word of words) {
    if (word.length > maxChars) {
      // Force split extremely long words
      if (currentLine) {
        lines.push(currentLine);
        currentLine = '';
      }
      lines.push(word);
      continue;
    }

    if ((currentLine ? currentLine + ' ' : '') + word.length <= maxChars) {
      currentLine = currentLine ? currentLine + ' ' + word : word;
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) lines.push(currentLine);

  const dy = fontSize * lineHeight;
  // Shift y upwards to center the entire text block vertically
  const startY = y - ((lines.length - 1) * dy) / 2;

  return (
    <text
      x={x}
      y={startY + fontSize * 0.35} // baseline adjustment
      fontSize={fontSize}
      fontWeight={fontWeight}
      fill={fill}
      textAnchor={align}
    >
      {lines.map((line, idx) => (
        <tspan
          key={idx}
          x={x}
          dy={idx === 0 ? 0 : dy}
        >
          {line}
        </tspan>
      ))}
    </text>
  );
};
