import React, { useState } from 'react';
import GradientPreview from '../components/GradientPreview';
import GradientControls from '../components/GradientControls';

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
      // Evenly distribute the positions
      const step = 100 / (colors.length + 1);
      const newColors = colors.map((color, index) => ({
        ...color,
        position: index * step,
      }));

      // Insert the new color at the next available spot
      const newColor = { color: '#ffffff', position: colors.length * step };
      setColors([...newColors, newColor]);
    } else {
      const newColor = { color: '#ffffff', position: 50 };
      setColors((prev) => [...prev, newColor]);
    }
  };

  const generateCSS = () => {
    const gradient = colors
      .map((c) => `${c.color} ${c.position.toFixed(2)}%`)
      .join(', ');

    const css = gradientType === 'linear'
      ? `background: linear-gradient(${angle}deg, ${gradient});`
      : `background: radial-gradient(circle, ${gradient});`;

    // Add line breaks every ~50 characters
    return css.replace(/(.{50}[^,]*),/g, '$1,\n    ');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10 space-y-6 mb-4">

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

      {/* Color Pickers */}
      <GradientControls 
        colors={colors}
        angle={angle}
        onColorChange={(index, newColor) => {
          const newColors = [...colors];
          newColors[index] = newColor;
          setColors(newColors);
        }}
        onAngleChange={setAngle}
        onColorRemove={(index) => {
          const newColors = colors.filter((_, i) => i !== index);
          setColors(newColors);
        }}
      />

      {/* Add Color Button */}
      <button
        onClick={addColor}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-4"
      >
        ➕ Add Color
      </button>

      {/* Visualize Gradient */}
      <GradientPreview colors={colors} angle={angle} />

      {/* CSS Display with Line Breaks */}
      <div className="relative w-full max-w-3xl mt-4">
        <pre className="bg-gray-200 p-4 rounded-lg whitespace-pre-wrap">
          {generateCSS()}
        </pre>
        <button
          onClick={() => navigator.clipboard.writeText(generateCSS())}
          className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default GradientGenerator;
