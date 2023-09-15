// B-Task: Shunday function tuzing, u 1ta parametr ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini return qilsin.
// Masalan: getDigits("ag1aw5g6") return qilsin 3

//Solution_ways
//#1st
function getDigits1(inputString) {
  let numCount = 0;
  for (let i = 0; i < inputString.length; i++) {
    if (!isNaN(inputString[i])) {
      numCount++;
    }
  }
  return numCount;
}

// Test the function
// const result = getDigits("ag1aw5g6");
// console.log(result);

// #2nd
const result1 = getDigits1("ag1aw5g6");
console.log(result1);

function getNum(str) {
  let countNum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].replace(/\D/g, "")) {
      countNum++;
    }
  }
  return countNum;
}

let test1 = getNum("dbjsdhbfjsdfbh88");
console.log(test1);
