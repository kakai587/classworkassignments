class KAKBank {
    constructor(balance, accountName, accountNumber) {
      this.balance = balance;
      this.accountName = accountName;
      this.accountNumber = accountNumber;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`${amount} deposited successfully. Current balance is ${this.balance}`);
    }
  
    withdraw(amount) {
      if (this.balance < amount) {
        console.log(`Insufficient funds. Current balance is ${this.balance}`);
        return;
      }
      this.balance -= amount;
      console.log(`${amount} withdrawn successfully. Current balance is ${this.balance}`);
    }
  
    checkBalance() {
      console.log(`Account Name: ${this.accountName}`);
      console.log(`Account Number: ${this.accountNumber}`);
      console.log(`Current balance is ${this.balance}`);
    }
  }
  
  
  const KAKBANK = new KAKBank(100000, "KAKBANK", "1234567890");
  KAKBANK.checkBalance(); 
  KAKBANK.deposit(56500); 
  KAKBANK.withdroaw(2200); 
  KAKBANK.checkBalance(); 
  KAKBANK.withdraw(160000); 
  