
import React from 'react';

const ColorInputs = ({ selectedColor, onColorChange }) => {
  if (!selectedColor) return null;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-3xl space-y-3">
      <label className="block text-gray-700 font-semibold mb-2">RGBA</label>
      <input
        type="color"
        value={selectedColor.color}
        onChange={(e) =>
          onColorChange({ ...selectedColor, color: e.target.value })
        }
        className="w-full h-10"
      />
      <input
        type="number"
        value={selectedColor.position}
        onChange={(e) =>
          onColorChange({ ...selectedColor, position: parseFloat(e.target.value) })
        }
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

export default ColorInputs;
