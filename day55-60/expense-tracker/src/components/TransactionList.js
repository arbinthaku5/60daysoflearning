import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((tx) => (
          <li
            key={tx.id}
            className={tx.amount < 0 ? 'minus' : 'plus'}
          >
            {tx.text} <span>{tx.amount < 0 ? '-' : '+'}${Math.abs(tx.amount)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
