//Module package => Core

//Module package => External

// Moment()

const moment = require("moment");

const time = moment().format("YYYY-MM-DD");

setInterval(() => {
  const time = moment().format();
  //console.log(`Time is ${time} now!!!`);
}, 1000);

// inquirer() package

// const inquire_test = require("inquirer");

// inquire_test
//   .prompt([{ type: "input", name: "raqam", message: "Enter number?" }])
//   .then((answer) => {
//     console.log("Entered number:", answer.raqam);
//   })
//   .catch((err) => console.log(err));

// // validator()

const validator = require("validator");

// const test = validator.isEmail("foo@bar.com");
// const test = validator.isInt("r");
const test = validator.isIP("1.211.73.138");

//console.log(test);

// uuid() package;

const { v4: uuidv4 } = require("uuid");
const random = uuidv4();
console.log("random", random);

// chalk();

const chalk = require("chalk");
const log = console.log;
// log(chalk.blue("Hello") + random + chalk.red("!"));
log(chalk.blue(`uuid create: ${random}`));

//Module package => File

// delete the node modules folder by running rm -rf node_modules.
// delete package.lock.json file by running rm -f package-lock.json.
// clean up the NPM cache by running npm cache clean --force.
// install all packages again by running npm install.

const calculate = require("./hisob.js");

const result = calculate.add(5, 7);
console.log(result);
console.log("=================================");
const result_add = calculate.multiple(5, 7);
console.log(result_add);
console.log("=================================");
const result_substract = calculate.subtract(5, 7);
console.log(result_substract);
console.log("=================================");

//console.log(require("module").wrapper); // main nodeJS syntax '(function (exports, require, module, __filename, __dirname) { ','\n});'
//console.log(arguments); //path search

const Account = require("./account.js");
Account.tellAboutClass();
Account.tellMeTime();
console.log("===========================================");
const myAccount = new Account("David", 300000, 10021121222);
myAccount.makeDeposit(1200000);
myAccount.giveMeDetails();

//Buggati Cheyron $2.4mln

myAccount.withdrawMoney(400000);
myAccount.makeDeposit(200000);
