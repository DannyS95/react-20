import React from 'react';

interface Color {
  color: string;
  position: number;
}

interface GradientPreviewProps {
  colors: Color[];
  angle: number;
}

const GradientPreview = ({ colors, angle }: GradientPreviewProps) => {
  const gradient = colors.map((c) => `${c.color} ${c.position}%`).join(', ');
  const gradientStyle = {
    background: `linear-gradient(${angle}deg, ${gradient})`,
  };

  return (
    <div className="w-full max-w-3xl h-40 mt-4 rounded-lg shadow-md">
      <div style={gradientStyle} className="w-full h-full"></div>
    </div>
  );
};

export default GradientPreview;
  