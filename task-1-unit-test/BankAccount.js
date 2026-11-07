class BankAccount {
    #balance;
    #owner;
    constructor(balance, owner) {
        this.#balance = balance;
        this.#owner = owner;
    }

    //Validating the amount input > adding to the balance + showing status in the console
    deposit(amount) {
        if (Number.isFinite(amount) && amount > 0) {
            console.log(`Balance: ${this.#balance} | Deposit: ${amount}`)
            this.#balance += amount 
            console.log(`Balance updated: ${this.#balance}`)
        } else {
            throw new Error(`The [${amount}] is incorrect value`)
        }
    }

    //Note1: I updated the this.balance to this.#balance because task requires the private "balance ,and owner" fields
    withdraw(amount) {
    // BUG: Does not check for negative amounts!
    if (amount > this.#balance) {
        throw new Error("Insufficient funds!");
    }
    this.#balance -= amount;
}

    //shows the balance in the console + returns the balance
    getBalance() {
        console.log(`Balance: ${this.#balance}`)
        return this.#balance
    }
}

module.exports = { BankAccount };
