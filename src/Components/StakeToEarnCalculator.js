// src/components/StakeToEarnCalculator.js
import React, { useState } from 'react';

const StakeToEarnCalculator = () => {
  const [stakedAmount, setStakedAmount] = useState(0);
  const [compoundRate, setCompoundRate] = useState(100);

  const handleStakedAmountChange = (e) => {
    setStakedAmount(Number(e.target.value));
  };

  const handleCompoundRateChange = (e) => {
    setCompoundRate(Number(e.target.value));
  };

  const calculateEarnings = () => {
    const dailyEarnings = stakedAmount * 0.01; // Example calculation
    const cycleEarnings = dailyEarnings * 10;
    const compoundedEarnings = cycleEarnings * (compoundRate / 100);
    const usdEarned = compoundedEarnings * 0.1; // Example token price

    return
