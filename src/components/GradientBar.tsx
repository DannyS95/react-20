
import React, { useState, useRef } from 'react';

const GradientBar = ({ colors, onColorAdd, onColorChange, onColorRemove, onDrag }) => {
  const barRef = useRef(null);

  const handleBarClick = (e) => {
    if (!barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const position = ((e.clientX - rect.left) / rect.width) * 100;
    onColorAdd(position);
  };

  const handleDrag = (index, event) => {
    if (!barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const newPosition = ((event.clientX - rect.left) / rect.width) * 100;
    onDrag(index, Math.min(Math.max(newPosition, 0), 100));
  };

  return (
    <div
      ref={barRef}
      onClick={handleBarClick}
      className="w-full h-12 bg-gray-300 relative rounded-md overflow-hidden cursor-crosshair"
      style={{ background: `linear-gradient(90deg, ${colors.map(c => `${c.color} ${c.position}%`).join(', ')})` }}
    >
      {colors.map((color, index) => (
        <div
          key={index}
          className="absolute -top-2 w-5 h-5 rounded-full border-2 border-white cursor-pointer"
          style={{
            backgroundColor: color.color,
            left: `calc(${color.position}% - 10px)`,
          }}
          draggable
          onDrag={(e) => handleDrag(index, e)}
          onClick={(e) => e.stopPropagation()} // Prevent bar click when dragging
        />
      ))}
    </div>
  );
};

export default GradientBar;
