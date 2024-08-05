import React, { useState } from 'react';
import { updateTrackedSymbol } from '../services/api';
import { fetchStockData } from '../services/api';

const StockSelectorModal = ({ closeModal, onSymbolChange }) => {
  const [symbol, setSymbol] = useState('bitcoin');

  const handleSubmit = async () => {
    await fetchStockData(symbol);
    onSymbolChange(symbol);
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Select Stock/Crypto</h2>
        <select onChange={(e) => setSymbol(e.target.value) } defaultValue={symbol} style={{padding:"10px"}}>
          <option value="bitcoin">bitcoin</option>
          <option value="ethereum">ethereum</option>
          <option value="dogecoin">dogecoin</option>
          <option value="matic-network">matic-network</option>
          <option value="decentraland">decentraland</option>
        </select>
        {/* <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          placeholder="Enter symbol"
        />
        <p>[bitcoin,ethereum,dogecoin,matic-network,decentraland]</p> */}
        <div className='modal-btn'>
        <button onClick={handleSubmit} className='btn'>Submit</button>
        <button onClick={closeModal} className='btn'>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default StockSelectorModal;
