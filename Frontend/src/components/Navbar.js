import React from 'react';

const Navbar = ({ openModal }) => {
  return (
    <nav>
      <h1>StockPrice Tracker</h1>
      <button onClick={openModal}>Change Stock</button>
    </nav>
  );
};

export default Navbar;
