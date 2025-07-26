import React from 'react';

const Balance = ({ transactions }) => {
  const total = transactions.reduce((acc, tx) => acc + tx.amount, 0).toFixed(2);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  );
};

export default Balance;
