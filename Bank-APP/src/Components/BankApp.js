import React, { useState } from 'react';
import Bank from '../services/Bank';

const bank = new Bank();

const BankApp = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [balance, setBalance] = useState('');
  const [message, setMessage] = useState('');

  // State for transfer inputs
  const [fromAccount, setFromAccount] = useState('');
  const [toAccount, setToAccount] = useState('');
  const [amount, setAmount] = useState('');

  // Add account handler
  const addAccountHandler = () => {
    // Convert accountNumber to number
    bank.addAccount(accountNumber, parseFloat(balance));
    setMessage('Account added successfully');
  };

  // Check balance handler
  const checkBalanceHandler = () => {
    // Convert accountNumber to number
    const balance = bank.checkBalance(accountNumber);
    setMessage(`Balance: $${balance}`);
  };

  // Transfer funds handler
  const transferFundsHandler = () => {
    // Convert account numbers and amount to numbers
    const result = bank.transferFunds(
      fromAccount,
      toAccount,
      parseFloat(amount)
    );
    setMessage(result);
  };

  return (
    <div>
      <h2>Bank Application</h2>
      
      <div>
        <h3>Add Account</h3>
        <input 
          type="number" 
          value={accountNumber} 
          onChange={(e) => setAccountNumber(e.target.value)} 
          placeholder="Account Number" 
        />
        <input 
          type="number" 
          value={balance} 
          onChange={(e) => setBalance(e.target.value)} 
          placeholder="Balance" 
        />
        <button onClick={addAccountHandler}>Add Account</button>
      </div>

      <div>
        <h3>Check Balance</h3>
        <input 
          type="number" 
          value={accountNumber} 
          onChange={(e) => setAccountNumber(e.target.value)} 
          placeholder="Account Number" 
        />
        <button onClick={checkBalanceHandler}>Check Balance</button>
      </div>

      <div>
        <h3>Transfer Funds</h3>
        <input 
          type="number" 
          value={fromAccount} 
          onChange={(e) => setFromAccount(e.target.value)} 
          placeholder="From Account Number" 
        />
        <input 
          type="number" 
          value={toAccount} 
          onChange={(e) => setToAccount(e.target.value)} 
          placeholder="To Account Number" 
        />
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          placeholder="Amount" 
        />
        <button onClick={transferFundsHandler}>Transfer Funds</button>
      </div>

      <div>{message}</div>
    </div>
  );
};

export default BankApp;
