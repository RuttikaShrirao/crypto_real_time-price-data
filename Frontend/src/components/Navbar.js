import React from 'react';

const Navbar = ({ openModal }) => {
  return (
    <nav>
      <h1>Stock/Crypto Price Tracker</h1>
      <button onClick={openModal}>Change Stock/Crypto</button>
    </nav>
  );
};

export default Navbar;
