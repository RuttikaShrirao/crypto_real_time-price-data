import React, { useState } from 'react';
import { updateTrackedSymbol } from '../services/api';

const StockSelectorModal = ({ closeModal, onSymbolChange }) => {
  const [symbol, setSymbol] = useState('');

  const handleSubmit = async () => {
    await updateTrackedSymbol(symbol);
    onSymbolChange(symbol);
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Select Stock/Crypto</h2>
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          placeholder="Enter symbol (e.g., BTC, GOOG)"
        />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </div>
  );
};

export default StockSelectorModal;
