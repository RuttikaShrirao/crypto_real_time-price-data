import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataTable from "./components/DataTable";
import StockSelectorModal from "./components/StockSelectorModal";
import Navbar from "./components/Navbar";
import "./App.css";
import Carousel from "./components/Carousel";

const App = () => {
  const [symbol, setSymbol] = useState("bitcoin");
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // modal symbol change
  const handleSymbolChange = (newSymbol) => {
    setSymbol(newSymbol);
  };

  return (
    <div className="app">
      <Navbar openModal={openModal} />
      <Carousel />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DataTable symbol={symbol} />} />
          {/* <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>

      {isModalOpen && (
        <StockSelectorModal
          closeModal={closeModal}
          onSymbolChange={handleSymbolChange}
        />
      )}
    </div>
  );
};

export default App;
