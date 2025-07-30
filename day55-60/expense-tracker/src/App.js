import React, { useState } from 'react';
import { useEffect } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('transactions');
    return saved ? JSON.parse(saved) : [];
  });
  const [editing, setEditing] = useState(null); // id of editing transaction

  useEffect(() => {
  localStorage.setItem('transactions', JSON.stringify(transactions));
  }, 
  [transactions]);

  const handleAddTransaction = (tx) => {
    setTransactions([tx, ...transactions]);
  };

  const handleDeleteTransaction = (id) => {
    setTransactions(transactions.filter((tx) => tx.id !== id));
  };

  const handleEditTransaction = (id) => {
    setEditing(id);
  };

  const handleUpdateTransaction = (updatedTx) => {
    setTransactions(transactions.map(tx =>
      tx.id === updatedTx.id ? updatedTx : tx
    ));
    setEditing(null);
  };

  return (
    <div className="container">
      <Header />
      <Balance transactions={transactions} />
      <IncomeExpenses transactions={transactions} />

      <p className="transaction-count">
        <h3>Total Transactions: {transactions.length}</h3>
      </p>

      <TransactionList
        transactions={transactions}
        onDelete={handleDeleteTransaction}
        onEdit={handleEditTransaction}
      />

      <AddTransaction
        onAdd={handleAddTransaction}
        onUpdate={handleUpdateTransaction}
        editing={transactions.find(tx => tx.id === editing)}
      />
    </div>
  );
};

export default App;
