
import React, { useState } from 'react';

const GradientGenerator = () => {
  const [colors, setColors] = useState([
    { color: '#3F5EFB', position: 0 },
    { color: '#FC466B', position: 100 },
  ]);
  const [angle, setAngle] = useState(90);
  const [gradientType, setGradientType] = useState('linear');

  const updateColor = (index: number, newColor: string) => {
    const updatedColors = [...colors];
    updatedColors[index].color = newColor;
    setColors(updatedColors);
  };

  const updateAngle = (newAngle: number) => {
    setAngle(newAngle);
  };

  const addColor = () => {
    if (colors.length > 1) {
      // Find the biggest gap and insert in the middle
      let maxGap = 0;
      let insertIndex = 0;

      for (let i = 0; i < colors.length - 1; i++) {
        const gap = colors[i + 1].position - colors[i].position;
        if (gap > maxGap) {
          maxGap = gap;
          insertIndex = i + 1;
        }
      }

      // Calculate midpoint
      const newPosition = (colors[insertIndex - 1].position + colors[insertIndex].position) / 2;
      const newColor = { color: '#ffffff', position: newPosition };

      // Insert and sort
      setColors((prev) => [...prev, newColor].sort((a, b) => a.position - b.position));
    }
  };

  const generateCSS = () => {
    const gradient = colors.map((c) => `${c.color} ${c.position}%`).join(', ');
    if (gradientType === 'linear') {
      return `background: linear-gradient(${angle}deg, ${gradient});`;
    } else {
      return `background: radial-gradient(circle, ${gradient});`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10 space-y-6">

      {/* Gradient Type Selector */}
      <div className="w-full max-w-3xl space-y-4">
        <label className="block text-gray-700 font-semibold mb-2">Gradient Type</label>
        <select
          value={gradientType}
          onChange={(e) => setGradientType(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option value="linear">Linear</option>
          <option value="radial">Radial</option>
        </select>
      </div>

      {/* Angle Control (only for linear) */}
      {gradientType === 'linear' && (
        <div className="w-full max-w-3xl space-y-4">
          <label className="block text-gray-700 font-semibold mb-2">Angle</label>
          <input
            type="range"
            min="0"
            max="360"
            value={angle}
            onChange={(e) => updateAngle(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
      )}

      {/* Color Pickers */}
      <div className="w-full max-w-3xl space-y-4">
        {colors.map((color, index) => (
          <div key={index} className="flex items-center space-x-3">
            <input
              type="color"
              value={color.color}
              onChange={(e) => updateColor(index, e.target.value)}
              className="w-12 h-12 border rounded"
            />
            <span className="text-gray-700 font-medium">{color.position.toFixed(2)}%</span>
          </div>
        ))}
      </div>

      {/* Add Color Button */}
      <button
        onClick={addColor}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-4"
      >
        ➕ Add Color
      </button>

      {/* Visualize Gradient */}
      <div
        className="w-full max-w-3xl h-40 mt-4 rounded-lg shadow-md"
        style={{ background: gradientType === 'linear'
          ? `linear-gradient(${angle}deg, ${colors.map((c) => `${c.color} ${c.position}%`).join(', ')})`
          : `radial-gradient(circle, ${colors.map((c) => `${c.color} ${c.position}%`).join(', ')})`
        }}
      />

      {/* CSS Display */}
      <pre className="bg-gray-200 p-4 rounded-lg w-full max-w-3xl mt-4">
        {generateCSS()}
      </pre>
    </div>
  );
};

export default GradientGenerator;
