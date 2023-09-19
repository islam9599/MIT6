//Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin.

//MASALAN checkSimilarity("laepp", "apple") true return qiladi.

//Solution

//methods were used during solution;

// 1. toLowerCase() => the same case letters should be used to prevent case senstive issues
// 2. split() => The split() method splits a string into an array of substrings.
// 3. sort() => The sort() method sorts an array alphabetically.
// 4. join() => The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

const checkSimilarity = (a, b) => {
  const a_string = a.toLowerCase().split("");
  const b_string = b.toLowerCase().split("");
  // if (a_string.sort().join("") === b_string.sort().join("")) {
  //   console.log(a_string, b_string);
  //   return true;
  // }
  return a_string.sort().join("") === b_string.sort().join("");
};

const test1 = checkSimilarity("lngsie", "single");
console.log(test1);

// //delete the node modules folder by running rm -rf node_modules.
// delete package.lock.json file by running rm -f package-lock.json.
// clean up the NPM cache by running npm cache clean --force.
// install all packages again by running npm install.
