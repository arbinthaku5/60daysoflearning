
import React, { useState } from 'react';

const AddTransaction = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: parseFloat(amount),
    };

    onAdd(newTransaction);
    setText('');
    setAmount('');
  };

  return (
    <div className="add-transaction">
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter description..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter amount..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
