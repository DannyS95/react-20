
import React from 'react';

const CSSCodeDisplay = ({ cssCode }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(cssCode);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-3xl space-y-3">
      <pre className="bg-gray-100 p-3 rounded">{cssCode}</pre>
      <button
        onClick={copyToClipboard}
        className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
      >
        📋 Copy CSS
      </button>
    </div>
  );
};

export default CSSCodeDisplay;
