import React, { useState, useEffect } from 'react';

const AddTransaction = ({ onAdd, onUpdate, editing }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  // Populate form fields when editing a transaction
  useEffect(() => {
    if (editing) {
      setText(editing.text);
      setAmount(editing.amount.toString());
    } else {
      setText('');
      setAmount('');
    }
  }, [editing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    const transactionData = {
      id: editing ? editing.id : Date.now(),
      text,
      amount: parseFloat(amount),
    };

    if (editing) {
      onUpdate(transactionData);
    } else {
      onAdd(transactionData);
    }

    setText('');
    setAmount('');
  };

  return (
    <div className="add-transaction">
      <h3>{editing ? 'Edit Transaction' : 'Add New Transaction'}</h3>
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
        <button type="submit">
          {editing ? 'Update Transaction' : 'Add Transaction'}
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
