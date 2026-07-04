import React from 'react';
import * as Icons from 'lucide-react';

type VizIconProps = {
  name: string;
  size?: number;
  color?: string;
  className?: string;
};

export const VizIcon: React.FC<VizIconProps> = ({
  name,
  size = 16,
  color = 'currentColor',
  className = ''
}) => {
  // Safe dynamic lookup for lucide icons
  const LucideIcon = (Icons as any)[name];
  if (!LucideIcon) return null;
  
  return (
    <LucideIcon
      size={size}
      color={color}
      className={className}
      strokeWidth={1.5}
    />
  );
};
