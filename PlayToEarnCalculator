// src/components/PlayToEarnCalculator.js
import React, { useState } from 'react';

const PlayToEarnCalculator = () => {
  const [intensity, setIntensity] = useState('casual');
  const [stakedAmount, setStakedAmount] = useState(0);
  const [compoundRate, setCompoundRate] = useState(100);
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

  const calculateEarnings = () => {
    const blooms = playIntensities[intensity].bloomsPerCycle;
    const earningRate = stakedAmount * 0.001; // Example calculation
    const cycleCap = 100 + palms.iron * 200 + palms.bronze * 400; // Simplified example
    const preCapIsland = blooms * earningRate;
    const islandEarned = Math.min(preCapIsland, cycleCap);
    const usdEarned = islandEarned * 0.1; // Example token price

    return {
      preCapIsland,
      islandEarned,
      usdEarned,
    };
  };

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
