// src/components/TokenPriceFetcher.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TokenPriceFetcher = ({ onPriceChange }) => {
  const [currentPrice, setCurrentPrice] = useState(null);
  const [customPrice, setCustomPrice] = useState('');

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price?ids=island-token&vs_currencies=usd'
        );
        setCurrentPrice(response.data['island-token'].usd);
        onPriceChange(response.data['island-token'].usd);
      } catch (error) {
        console.error('Error fetching token price:', error);
      }
    };

    fetchPrice();
  }, [onPriceChange]);

  const handleCustomPriceChange = (e) => {
    const value = parseFloat(e.target.value);
    setCustomPrice(value);
    onPriceChange(value);
  };

  return (
    <div>
      <h3>Token Price</h3>
      <p>Current $ISLAND Price: ${currentPrice ? currentPrice.toFixed(2) : 'Loading...'}</p>
      <label>
        Custom $ISLAND Price for Prediction:
        <input
          type="number"
          value={customPrice}
          onChange={handleCustomPriceChange}
          placeholder="Enter custom price"
        />
      </label>
    </div>
  );
};

export default TokenPriceFetcher;
