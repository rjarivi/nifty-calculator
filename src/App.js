import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [islandPrice, setIslandPrice] = useState(null);
  const [playIntensity, setPlayIntensity] = useState('Casual');
  const [manualPrice, setManualPrice] = useState('');
  const [calculatorType, setCalculatorType] = useState('P2E');

  useEffect(() => {
    // Fetch ISLAND token price from CoinGecko API
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=island-token&vs_currencies=usd')
  .then(response => response.json())
  .then(data => {
    setIslandPrice(data['island-token']?.usd || 0);
    const islandPrice = data['island-token']?.usd || 0;
    // Use islandPrice in your application
  })
  .catch(error => {
    console.error('Error fetching ISLAND token price:', error);
    // Handle error appropriately
  });

  const handlePlayIntensityChange = (event) => {
    setPlayIntensity(event.target.value);
  };

  const handleManualPriceChange = (event) => {
    setManualPrice(event.target.value);
  };

  const handleCalculatorTypeChange = (type) => {
    setCalculatorType(type);
  };

  return (
    <div className="app">
      <header className="app-header">
      <h1>ISLAND Token Price</h1>
      <p>{islandPrice ? `$${islandPrice}` : 'Loading...'}</p>
        <h1>ISLAND Token Calculators</h1>
        <div className="calculator-selector">
          <button
            className={`calculator-button ${calculatorType === 'P2E' ? 'active' : ''}`}
            onClick={() => handleCalculatorTypeChange('P2E')}
          >
            Play to Earn Calculator
          </button>
          <button
            className={`calculator-button ${calculatorType === 'Staking' ? 'active' : ''}`}
            onClick={() => handleCalculatorTypeChange('Staking')}
          >
            Staking Calculator
          </button>
        </div>
      </header>
      <main>
        {calculatorType === 'P2E' ? (
          <div className="calculator">
            <h2>Play to Earn Calculator</h2>
            <div className="calculator-section">
              <label htmlFor="play-intensity">Play Intensity</label>
              <select
                id="play-intensity"
                value={playIntensity}
                onChange={handlePlayIntensityChange}
              >
                <option value="Casual">Casual</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Super User">Super User</option>
              </select>
            </div>
            <div className="calculator-section">
              <label htmlFor="manual-price">Manual ISLAND Price (USD)</label>
              <input
                type="number"
                id="manual-price"
                value={manualPrice}
                onChange={handleManualPriceChange}
                placeholder={islandPrice ? islandPrice : 'Loading...'}
              />
            </div>
            {/* Add calculation logic and results display here */}
          </div>
        ) : (
          <div className="calculator">
            <h2>Staking Calculator</h2>
            {/* Add staking calculator content here */}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
