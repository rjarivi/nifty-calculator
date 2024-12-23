// src/components/PlayToEarnCalculator.js
import React, { useState } from 'react';
import TokenPriceFetcher from './TokenPriceFetcher';
import PalmSelector from './PalmSelector';

const PlayToEarnCalculator = () => {
  const [intensity, setIntensity] = useState('casual');
  const [stakedAmount, setStakedAmount] = useState(0);
  const [compoundRate, setCompoundRate] = useState(100);
  const [tokenPrice, setTokenPrice] = useState(0);
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

  const handleTokenPriceChange = (price) => {
    setTokenPrice(price);
  };

  const handlePalmsChange = (palmType, value) => {
    setPalms((prev) => ({ ...prev, [palmType]: value }));
  };

  const calculateEarnings = () => {
    const blooms = playIntensities[intensity].bloomsPerCycle;
    const earningRate = stakedAmount * 0.001; // Example calculation
    const cycleCap =
      100 +
      palms.iron * 300 +
      palms.bronze * 500 +
      palms.silver * 900 +
      palms.gold * 1700 +
      palms.neon * 3300 +
      palms.ultra * 6400; // Simplified example
    const preCapIsland = blooms * earningRate
