import React, { useState, useEffect } from 'react';
import DataTable from './components/DataTable';
import StockSelectorModal from './components/StockSelectorModal';
import Navbar from './components/Navbar';
import { fetchTrackedSymbol } from './services/api';
import './App.css';

const App = () => {
  const [symbol, setSymbol] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const getSymbol = async () => {
      const trackedSymbol = await fetchTrackedSymbol();
      setSymbol(trackedSymbol);
    };

    getSymbol();
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSymbolChange = (newSymbol) => {
    setSymbol(newSymbol);
  };
  return (
    <div className="app">
      <Navbar openModal={openModal} />
      <DataTable symbol={symbol} />
      {isModalOpen && (
        <StockSelectorModal closeModal={closeModal} onSymbolChange={handleSymbolChange} />
      )}
    </div>
  );
};

export default App;
