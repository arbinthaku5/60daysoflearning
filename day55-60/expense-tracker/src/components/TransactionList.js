// TransactionList.js
import React from 'react';
import './TransactionList.css'; // optional, for styling

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div>
      <h3>Transaction History</h3>
      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <ul className="transaction-list">
          {transactions.map((tx) => (
            <li key={tx.id} className={tx.amount < 0 ? 'minus' : 'plus'}>
              {tx.text} 
              <span>
                {tx.amount < 0 ? '-' : '+'}${Math.abs(tx.amount)}
              </span>
              <button onClick={() => onDelete(tx.id)} className="delete-btn">x</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;
