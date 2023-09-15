// Module packages 3 types

// 1. Core module package
// setTimeout(function () {
//   console.log("Ishga tushdi");
// }, 5000);

//=========================
// let number = 0;
// setInterval(function () {
//   console.log("Count", number);
//   number++;
// }, 1000);
// File system
const fs = require("fs");
const data = fs.readFileSync("./input.txt", "utf8");
console.log(data);
console.log("=================================================");
fs.writeFileSync("./input.txt", `${data} \n\t\t by BekzodAli `);
const new_data = fs.readFileSync("./input.txt", "utf8");
console.log(new_data);
// 2. External module package

// 3. File module package
