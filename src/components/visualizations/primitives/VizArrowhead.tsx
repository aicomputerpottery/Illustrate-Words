import React from 'react';

type VizArrowheadProps = {
  id?: string;
  color?: string;
};

export const VizArrowhead: React.FC<VizArrowheadProps> = ({
  id = 'arrowhead',
  color = '#0F1115'
}) => {
  return (
    <marker
      id={id}
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="6"
      markerHeight="5"
      orient="auto-start-reverse"
    >
      <path d="M 0 1.5 L 8 5 L 0 8.5 Z" fill={color} />
    </marker>
  );
};
