// Copy of an array
let a = [1, 2, 3, 4];

let b = [];

for (let i = 0; i < a.length; i++) {
  b.push(a[i]);
}

let b = Object.assign([], a);
let b = [...a];

// FIND DUPLICATES
// First Solution
let a = [1, 2, 5, 2, 1, 8];
let b = [];
let len = length.a;

for (let i = 0; i < len; i++) {
  if (b.indexOf(a[i] === -1)) {
    b.push(a[i]);
  }
}

// Selcond Solution
a.sort();
let temp;
for (let i = 0; i < len; i++) {
  if (a[i] !== temp) {
    b.push(a[i]);
    temp = a[i];
  }
}

// Third Solution
obj = {};

for (let i of a) {
  obj[i] = true;
}
let b = Object.keys(obj);
console.log(obj);

// Fourth Solution
let bSet = [...new Set(a)];
