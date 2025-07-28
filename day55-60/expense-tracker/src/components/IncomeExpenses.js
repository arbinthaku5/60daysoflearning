import React from 'react';

const IncomeExpenses = ({ transactions }) => {
  const amounts = transactions.map((tx) => tx.amount);
  const income = amounts
    .filter((amt) => amt > 0)
    .reduce((acc, val) => acc + val, 0)
    .toFixed(2);
  const expense = (
    amounts
      .filter((amt) => amt < 0)
      .reduce((acc, val) => acc + val, 0) * -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expense}</p>
      </div>
    </div>
  );
};


export default IncomeExpenses;
