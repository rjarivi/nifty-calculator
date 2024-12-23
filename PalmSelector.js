// src/components/PalmSelector.js
import React from 'react';

const PalmSelector = ({ palms, onPalmsChange }) => {
  const handlePalmsChange = (e) => {
    const { name, value } = e.target;
    onPalmsChange(name, Number(value));
  };

  return (
    <div>
      <h3>Palms Owned</h3>
      {Object.keys(palms).map((palm) => (
        <label key={palm}>
          {palm.charAt(0).toUpperCase() + palm.slice(1)}:
          <input
            type="number"
            name={palm}
            value={palms[palm]}
            onChange={handlePalmsChange}
            min="0"
          />
        </label>
      ))}
    </div>
  );
};

export default PalmSelector;
