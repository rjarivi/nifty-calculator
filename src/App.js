// src/App.js
import React, { useState } from 'react';
import PlayToEarnCalculator from './components/PlayToEarnCalculator';
import StakeToEarnCalculator from './components/StakeToEarnCalculator';
import TokenPriceFetcher from './components/TokenPriceFetcher';
import './App.css';

function App() {
  const [tokenPrice, setTokenPrice] = useState(0);

  const handleTokenPriceChange = (price) => {
    setTokenPrice(price);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Nifty Island Earnings Calculator</h1>
      </header>
      <main>
        <TokenPriceFetcher onPriceChange={handleTokenPriceChange} />
        <PlayToEarnCalculator tokenPrice={tokenPrice} />
        <StakeToEarnCalculator tokenPrice={tokenPrice} />
      </main>
    </div>
  );
}

export default App;
