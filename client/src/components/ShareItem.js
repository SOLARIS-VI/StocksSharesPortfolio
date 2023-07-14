import React from 'react';

const ShareItem = ({ share }) => {
  const { name, quantity, price, symbol, performance } = share;

  return (
    <div>
      <h3>{name}</h3>
      <p>Symbol: {symbol}</p>
      <p>Quantity: {quantity}</p>
      <p>Price: {price}</p>
      <p>Performance: {performance}</p>
      {/* Add more details here as we go and if required */}
    </div>
  );
};

export default ShareItem;
