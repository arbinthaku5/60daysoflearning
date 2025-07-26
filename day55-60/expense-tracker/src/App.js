import React, { useState } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (tx) => {
    setTransactions([tx, ...transactions]);
  };

  return (
    <div className="container">
      <Header />
      <Balance transactions={transactions} />
      <IncomeExpenses transactions={transactions} />
      <TransactionList transactions={transactions} />
      <AddTransaction onAdd={handleAddTransaction} />
    </div>
  );
};

export default App;
