import React from 'react';

const Balance = ({ transactions }) => {
  const amounts = transactions.map((tx) => tx.amount);
  const total = amounts.reduce((acc, val) => acc + val, 0).toFixed(2);

  return (
    <div className="balance">
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  );
};


export default Balance;
