import Node from "./Node";
class LinkedList {
    constructor() {
      this.head = null;  // Head of the linked list
    }
  
    // Add an account to the linked list
    addAccount(account) {
      const newNode = new Node(account);  // Create a new node for the account
      if (this.head === null) {
        this.head = newNode;  // If the list is empty, set new node as the head
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;  // Traverse to the end of the list
        }
        current.next = newNode;  // Add the new node to the end of the list
      }
      console.log("Account added to linked list: ", account);
    }
  
    // Find account by account number
    findAccount(accountNumber) {
      let current = this.head;
      while (current) {
        if (current.account.accountNumber === accountNumber) {
          return current.account;  // Return the account if found
        }
        current = current.next;
      }
      return null;  // Return null if the account is not found
    }
  
    // For debugging: Log all accounts
    logAllAccounts() {
      let current = this.head;
      const accounts = [];
      while (current) {
        accounts.push(current.account);
        current = current.next;
      }
      console.log("Current accounts in linked list: ", accounts);
    }
  }
  
  export default LinkedList;
  