// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// ****************+ SOLUTION 1
function reverse(str) {
  const arr = str.split("");
  arr.reverse();
  return arr.join("");

  // return str
  // .split('')
  // .reverse()
  // .join('')
}

// ****************+ SOLUTION 2
function reverse(str) {
  let reversed = "";

  for (let charcter of str) {
    reversed = charcter + reversed;
    debugger;
  }
  return reversed;
}

reverse("asdf");

// ****************+ SOLUTION 3
function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

reverse("asdf");

module.exports = reverse;
