import React, { useState, useEffect } from 'react';

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
  
  // State for storing earnings and ISLAND token price
  const [dailyGains, setDailyGains] = useState(0);
  const [cycleGains, setCycleGains] = useState(0);
  const [annualGains, setAnnualGains] = useState(0);
  const [islandPrice, setIslandPrice] = useState(null);

  // Intensity settings for different levels
  const playIntensities = {
    casual: { bloomsPerDay: 1500, bloomsPerCycle: 15000 },
    medium: { bloomsPerDay: 3000, bloomsPerCycle: 30000 },
    high: { bloomsPerDay: 6000, bloomsPerCycle: 60000 },
    super: { bloomsPerDay: 14000, bloomsPerCycle: 140000 },
  };

  // Fetch the ISLAND token price from CoinGecko API
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=island-token&vs_currencies=usd')
      .then(response => response.json())
      .then(data => {
        setIslandPrice(data['island-token']?.usd || 0);
      })
      .catch(error => {
        console.error('Error fetching ISLAND token price:', error);
      });
  }, []);

  // Handle changes for intensity, staked amount, compound rate, and palms
  const handleIntensityChange = (e) => {
    setIntensity(e.target.value);
    calculateEarnings(playIntensities[e.target.value].bloomsPerDay);
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

  // Function to calculate earnings
  const calculateEarnings = (dailyBlooms) => {
    if (!islandPrice) return;

    const daily = dailyBlooms * islandPrice;  // Daily earnings
    const cycle = daily * 10;  // 10-day cycle earnings
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
        <select value={intensity} onChange={handleIntensityChange}>
          <option value="casual">Casual: 1,500 Blooms per Day</option>
          <option value="medium">Medium: 3,000 Blooms per Day</option>
          <option value="high">High: 6,000 Blooms per Day</option>
          <option value="super">Super User: 14,000 Blooms per Day</option>
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

      {/* Other inputs for staked amount, palms, etc. */}
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
    </div>
  );
}

export default PlayToEarnCalculator;
