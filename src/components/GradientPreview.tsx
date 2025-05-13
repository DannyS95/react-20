
import React from 'react';

const GradientPreview = ({ colors, angle }) => {
  const gradient = colors.map((c) => `${c.color} ${c.position}%`).join(', ');
  const gradientStyle = {
    background: `linear-gradient(${angle}deg, ${gradient})`,
    height: '200px',
    width: '100%',
    borderRadius: '8px',
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-lg w-full max-w-3xl">
      <div style={gradientStyle}></div>
    </div>
  );
};

export default GradientPreview;
