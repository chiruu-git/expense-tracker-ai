import React from 'react';
import { FaWallet } from 'react-icons/fa';

const ExpenseSummary = ({ total }) => {
  return (
    <div className="custom-card mb-4">
      <h5 className="mb-2" style={{ color: 'var(--text-color)', fontWeight: '400' }}>
        <FaWallet className="me-2" /> Total Expenses
      </h5>
      <h2 className="mb-0" style={{ color: 'var(--headline-color)', fontWeight: '600' }}>
        ₹{total.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </h2>
    </div>
  );
};

export default ExpenseSummary;