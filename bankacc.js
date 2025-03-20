// var accounts = [];
// class BankAccount {
//     constructor(accountNumber, accountBalance) {
//         this.accountNumber = accountNumber;
//         this.accountBalance = accountBalance;
//         if(!accountNumber.startsWith("IN")  && accountNumber.length !== 12) {
//             throw new console.error(' The account number must start with "IN" and be exactly 12 characters long.');
//     }
//     deposit(amount) {
//         this.accountBalance += amount;
//         console.log(`You have deposited the amount RS ${amount} and the balance is RS ${this.initialBalance} `);

//     }
//     withdraw(amount) {
//         if (amount > this.accountBalance) {
//             console.log("You don't have that much Amount in your bank");
//         } else {
//             this.accountBalance -= amount
//             console.log(`You have withdrawed the Amount RS ${amount}  and You balance is RS ${this.accountBalance}`);
//         }
//         // if (this.accountBalance < amount) {
//         //     console.log("Insufficient balance");
//         //     return;
//         // }
//         // else {
//         //     this.accountBalance -= amount;
//         // }
//     }
// }}

// function createAccount(accountNumber, accountHolderName, initialAmount) {
//     if (!accountNumber.startsWith("IN") && accountNumber.length === 10) {
//         console.log("Account number must start with 'IN' and be 10 characters long.");
//         return null;
//     }
//     if (initialAmount < 1000) {
//         console.log("Initial amount must be at least ₹1000.");
//         return null;
//     }
//     let account = new BankAccount(accountNumber, accountHolderName, initialAmount);
//     accounts.push(account);
//     return account;
// }

// let account1 = new BankAccount(101, "Ramesh", 5000);
// let account2 = new BankAccount(102, "Suresh", 3000);
// let account3 = new BankAccount(103, "Mahesh", 7000);

// console.log(accounts);
// account1.deposit(5000);