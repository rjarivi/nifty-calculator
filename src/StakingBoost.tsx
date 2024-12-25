// src/StakingBoost.tsx
import React, { useState } from 'react';
const StakingBoost = () => {
  const [stakedIsland, setStakedIsland] = useState(0);
  const [boost, setBoost] = useState(0);

  const handleStakedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setStakedIsland(value);
    calculateBoost(value);
  };
  const calculateBoost = (staked: number) => {
    const boostValue = staked * 0.001; // Example formula
    setBoost(boostValue > 360 ? 360 : +boostValue.toFixed(2));
  };
  return (
    <div className="staking-boost">
      <h3 className="text-xl font-semibold">Staking Boost</h3>
      <p>Boost max: +360</p>
      <p>Staked ISLAND</p>
      <p>Staking more ISLAND increases the amount of ISLAND you earn per 1,000 blooms.</p>
      <p>For example: Boost = +{boost} ISLAND (max: +360) when {stakedIsland} Staked ISLAND</p>
      <label className="block mt-4">
        Enter Staked ISLAND:
        <input
          type="number"
          value={stakedIsland}
          onChange={handleStakedChange}
          placeholder="Enter staked amount"
          className="w-full px-4 py-2 mt-2 rounded-lg bg-[#262933] border border-[#363a47] focus:outline-none focus:border-[#4fffbc]"
        />
      </label>
      <div className="staking-details mt-4">
        <h4 className="text-lg font-medium">Initial Compound</h4>
        <table className="w-full mt-2 border-collapse">
          <thead>
            <tr>
              <th className="border px-2 py-1">Initial</th>
              <th className="border px-2 py-1">Compound</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">0</td>
              <td className="border px-2 py-1">100%</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Island / Bloom</td>
              <td className="border px-2 py-1">0.00100</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Island / kBloom</td>
              <td className="border px-2 py-1">1.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4">Staking text note: Staking ISLAND increases your conversion rate from Blooms to ISLAND. Set your initial staked amount and how much of your ISLAND gains you wish to stake after each cycle.</p>
    </div>
  );
};

export default StakingBoost;
