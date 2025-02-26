// accounts = [];
class BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.accountBalance = accountBalance;
    }
    deposit(amount) {
        this.accountBalance += amount;
    }
    withdraw(amount) {
        if (this.accountBalance < amount) {
            console.log("Insufficient balance");
            return;
        }
        else {
            this.accountBalance -= amount;
        }
    }
    transfer(amount, account) {
        if (this.accountBalance < amount) {
            console.log("Insufficient balance");
            return;
        }
        else {
            this.accountBalance -= amount;
            account.accountBalance += amount;
        }
    }
}
console.log(deposit(500));
console.log(withdraw(200));

var account1 = new BankAccount(1, "John", 1000);
