let accounts = [];

class BankAccount{
    constructor(accountNumber, initialBalance) {
        if(!accountNumber.startsWith("IN")  && accountNumber.length !== 12) {
            throw new console.error(' A string that must start with "IN" and be exactly 12 characters long.');
        }
        this.accountNumber = accountNumber;
        this.initialBalance = initialBalance;
    }

    deposit(amount) {
        if(amount>0) {
            this.initialBalance+=amount;
            console.log(`You have deposited the amount RS ${amount} and the balance is RS ${this.initialBalance} `);
        } else {
            console.log("Please Enter a Valid Amount");
            
        }
    }

    withdraw(amount) {
        if(amount>this.initialBalance) {
            console.log("You don't have that much Amount in your bank");
        } else {
            this.initialBalance-=amount
            console.log('You have withdrawed the Amount RS ${amount}  and You balance is RS ${this.initialBalance}');
        }
    }

    transfer(amount, targetAccountNumber) {
        if(amount>=0 && this.initialBalance - amount >= 1000) {
            accounts.forEach((item)=>{
                if(targetAccountNumber === item.accountNumber ) {
                    this.initialBalance-=amount
                    item.initialBalance+=amount
                }
            })
            
            this.initialBalance-=amount;
            this.initialBalance+= amount;
            console.log(`You have Transfered the Amount of RS ${amount} to RS ${targetAccountNumber}`);
            console.log(`Now Your Balance is RS ${this.initialBalance} `);
            
            
        } else {
            console.log("Transaction Failed...Please Try Again");
            
        }
    }
}


function createAccount(accountNumber, initialAmount) {
    if(accountNumber.startsWith("IN") && accountNumber.length === 12 && initialAmount >= 1000) {
        
        const accountHolders = new BankAccount(accountNumber,initialAmount)
        accounts.push(accountHolders)
        console.log("successfully created",accountHolders);
        
    } else{
        console.log("The Minimum initial Balance Should be 1000 RS");
        
    }
}

createAccount("IN9381398490",2000)
createAccount("IN9502571445",5000)
createAccount("IN5874123698",1000)
accounts[0].transfer(500,"IN9502571445")
accounts[1].transfer(1000,"IN5874123698")
accounts[2].transfer(500,"ININ9381398490")
console.log(accounts);