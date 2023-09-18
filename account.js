const moment = require("moment");
class Account {
  #amount;
  #account_id;
  constructor(name, amount, account_id) {
    this.name = name;
    this.#amount = amount;
    this.#account_id = account_id;
  }
  tellMeBalance() {
    console.log(`Your balance leftover: ${this.#amount}$`);
    return this.#amount;
  }
  withdrawMoney(amount) {
    if (this.#amount > amount) {
      this.#amount -= amount;
      console.log(`${amount} is wthdrawed and ${this.#amount}$`);
    } else {
      console.log(`Your balance is not enough: ${this.#amount}$`);
    }
  }
  makeDeposit(amount) {
    this.#amount += amount;
    console.log(`Your balance is deposited and your balance is ${amount}$ now`);
  }
  giveMeDetails() {
    console.log(`Hi dear ${this.name} your balance is ${this.#amount}$`);
    console.log(`Your bank acoounrt number is ${this.#account_id}`);
  }
  static tellAboutClass() {
    console.log("This class makes accounts");
  }
  static tellMeTime() {
    console.log(`Time is ${moment().format("YYYY MM DD HH:mm:ss")} now!`);
  }
}

module.exports = Account;
