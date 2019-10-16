// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// const word = " HI THERE ";
// word.replace(/[^\w]/g, "").toLocaleLowerCase();

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };

// Object.keys(obj).length;

const numbers = [10, 30, 5, -90, 10000];
numbers.sort();

function anagrams(stringA, stringB) {
  // SECOND SOLUTION
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLocaleLowerCase()
    .split("")
    .sort()
    .join("");
}

//FIRST SOLUTION
const aCharMap = bildCharMap(stringA);
const bCharMap = bildCharMap(stringB);
if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
  return false;
}
for (let char in aCharMap) {
  if (aCharMap[char] !== bCharMap[char]) {
    return false;
  } else {
    return true;
  }
}

function bildCharMap(str) {
  const charMap = {};
  for (let char of str.replace(/[^\w]/g, "").toLocaleLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}
