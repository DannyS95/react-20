import React from 'react';

interface Color {
  color: string;
  position: number;
}

interface GradientControlsProps {
  colors: Color[];
  angle: number;
  onColorChange: (index: number, color: Color) => void;
  onAngleChange: (angle: number) => void;
  onColorRemove: (index: number) => void;
}

const GradientControls = ({ colors, angle, onColorChange, onAngleChange, onColorRemove }: GradientControlsProps) => {
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
          <button
            onClick={() => onColorRemove(index)}
            className="text-red-500 hover:text-red-700 p-2"
            disabled={colors.length <= 2}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};

export default GradientControls;
