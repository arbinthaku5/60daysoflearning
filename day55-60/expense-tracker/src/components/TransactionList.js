import React from 'react';
import './TransactionList.css';

const TransactionList = ({ transactions, onDelete, onEdit }) => {
  return (
    <div>
      <h3>Transaction History</h3>
      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <ul className="transaction-list">
          {transactions.map((tx) => (
            <li key={tx.id} className={tx.amount < 0 ? 'minus' : 'plus'}>
              <span>{tx.text}</span>
              <span>${Math.abs(tx.amount)}</span>
              <div className="btn-group">
                <button onClick={() => onEdit(tx.id)} className="edit-btn">Edit</button>
                <button onClick={() => onDelete(tx.id)} className="delete-btn">X</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;
