import LinkedList from "../data-structures/LinkedList";
class Bank {
    constructor() {
      this.accounts = new LinkedList();  // Store accounts in LinkedList
    }
  
    addAccount(accountNumber, balance) {
      // Ensure accountNumber is a number
      const account = { accountNumber: Number(accountNumber), balance };
      this.accounts.addAccount(account);  // Adds account to linked list
      this.accounts.logAllAccounts();  // Log all accounts for debugging
    }
  
    checkBalance(accountNumber) {
      // Ensure accountNumber is a number when searching
      const account = this.accounts.findAccount(Number(accountNumber));
      return account ? account.balance : 'Account not found';
    }
  
    // Method to transfer funds from one account to another
    transferFunds(fromAccountNumber, toAccountNumber, amount) {
      // Ensure account numbers are numbers
      const fromAccount = this.accounts.findAccount(Number(fromAccountNumber));  // Find the sender's account
      const toAccount = this.accounts.findAccount(Number(toAccountNumber));  // Find the recipient's account
  
      // Check if both accounts exist and if the sender has enough balance
      if (fromAccount && toAccount) {
        if (fromAccount.balance >= amount) {
          fromAccount.balance -= amount;  // Deduct the amount from the sender's account
          toAccount.balance += amount;    // Add the amount to the recipient's account
          return `Transfer of $${amount} successful!`;
        } else {
          return 'Insufficient funds in the sender account';
        }
      } else {
        return 'One or both account(s) not found';
      }
    }
  }
  
  export default Bank;
  