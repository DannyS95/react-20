
import React from 'react';

const GradientControls = ({ colors, angle, onColorChange, onAngleChange }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-3xl space-y-4">
      <label className="block text-gray-700 font-semibold mb-2">Angle</label>
      <input
        type="range"
        min="0"
        max="360"
        value={angle}
        onChange={(e) => onAngleChange(parseInt(e.target.value))}
        className="w-full"
      />

      {colors.map((color, index) => (
        <div key={index} className="flex items-center space-x-3">
          <input
            type="color"
            value={color.color}
            onChange={(e) =>
              onColorChange(index, { ...color, color: e.target.value })
            }
            className="w-12 h-12 border rounded"
          />
          <input
            type="number"
            value={color.position}
            onChange={(e) =>
              onColorChange(index, { ...color, position: parseInt(e.target.value) })
            }
            className="border p-2 rounded w-20"
          />
        </div>
      ))}
    </div>
  );
};

export default GradientControls;
