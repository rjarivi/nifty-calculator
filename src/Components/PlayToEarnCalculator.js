// src/components/PlayToEarnCalculator.js
import React, { useState } from 'react';

const PlayToEarnCalculator = () => {
  const [intensity, setIntensity] = useState('casual');
  const [stakedAmount, setStakedAmount] = useState(0);
  const [compoundRate, setCompoundRate] = useState(100);
  const [annualGains, setAnnualGains] = useState(0);
  const [palms, setPalms] = useState({
    iron: 0,
    bronze: 0,
    silver: 0,
    gold: 0,
    neon: 0,
    ultra: 0,
  });

  const playIntensities = {
    casual: { bloomsPerDay: 1500, bloomsPerCycle: 15000 },
    medium: { bloomsPerDay: 3000, bloomsPerCycle: 30000 },
    high: { bloomsPerDay: 6000, bloomsPerCycle: 60000 },
    super: { bloomsPerDay: 14000, bloomsPerCycle: 140000 },
  };

  const handleIntensityChange = (e) => {
    setIntensity(e.target.value);
  };

  const handleStakedAmountChange = (e) => {
    setStakedAmount(Number(e.target.value));
  };

  const handleCompoundRateChange = (e) => {
    setCompoundRate(Number(e.target.value));
  };

  const handlePalmsChange = (e) => {
    const { name, value } = e.target;
    setPalms((prev) => ({ ...prev, [name]: Number(value) }));
  };

 // Example function to calculate earnings
  const calculateEarnings = (dailyBlooms, price) => {
    const daily = dailyBlooms * price;  // Assuming the number of blooms is multiplied by price
    const cycle = daily * 10;  // Assuming a 10-day cycle for calculation
    const yearly = daily * 365;  // Yearly estimate based on daily earnings

    setDailyGains(daily);
    setCycleGains(cycle);
    setAnnualGains(yearly);
  };

  return (
    <div className="calculator">
      <h1>ISLAND Token Earnings Calculator</h1>
      
      {/* Dropdown for Play Intensity */}
      <div>
        <h2>Play Intensity</h2>
        <select onChange={(e) => calculateEarnings(Number(e.target.value), islandPrice)}>
          <option value="1500">Casual: 1,500 Blooms per Day</option>
          <option value="3000">Medium: 3,000 Blooms per Day</option>
          <option value="6000">High: 6,000 Blooms per Day</option>
          <option value="14000">Super User: 14,000 Blooms per Day</option>
        </select>
      </div>

      {/* Earnings Display */}
      <div className="earnings">
        <h3>Daily Earnings</h3>
        <p>{dailyGains ? `$${dailyGains.toFixed(2)}` : 'Loading...'} ISLAND</p>

        <h3>Cycle Earnings (10 days)</h3>
        <p>{cycleGains ? `$${cycleGains.toFixed(2)}` : 'Loading...'} ISLAND</p>

        <h3>Yearly Earnings</h3>
        <p>{annualGains ? `$${annualGains.toFixed(2)}` : 'Loading...'} ISLAND</p>
      </div>

      {/* Display token price */}
      <p>Current ISLAND Token Price: {islandPrice ? `$${islandPrice}` : 'Loading...'}</p>
    </div>
  );
}

export default Calculator;

  const earnings = calculateEarnings();

  return (
    <div>
      <h2>Play to Earn Calculator</h2>
      <label>
        Play Intensity:
        <select value={intensity} onChange={handleIntensityChange}>
          <option value="casual">Casual</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="super">Super User</option>
        </select>
      </label>
      <label>
        Staked Amount:
        <input
          type="number"
          value={stakedAmount}
          onChange={handleStakedAmountChange}
        />
      </label>
      <label>
        Compound Rate (%):
        <input
          type="number"
          value={compoundRate}
          onChange={handleCompoundRateChange}
        />
      </label>
      <div>
        <h3>Palms Owned:</h3>
        {Object.keys(palms).map((palm) => (
          <label key={palm}>
            {palm.charAt(0).toUpperCase() + palm.slice(1)}:
            <input
              type="number"
              name={palm}
              value={palms[palm]}
              onChange={handlePalmsChange}
            />
          </label>
        ))}
      </div>
      <div>
        <h3>Earnings:</h3>
        <p>Pre-Cap ISLAND: {earnings.preCapIsland.toFixed(2)}</p>
        <p>ISLAND Earned: {earnings.islandEarned.toFixed(2)}</p>
        <p>USD Earned: ${earnings.usdEarned.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default PlayToEarnCalculator;
