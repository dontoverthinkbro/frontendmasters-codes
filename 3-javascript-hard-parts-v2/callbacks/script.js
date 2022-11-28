// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log("Hello, world!");

// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return word + "s";
}

// uncomment these to check your work
// console.log(addS("pizza"));
// console.log(addS("bagel"));

// Challenge 3
function map(array, callback) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i]));
  }
  return newArr;
}
// console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}
function Up(c) {
  console.log(c.toUpperCase());
}

// see for yourself if your forEach works!
let ar = [2, 3, 4];

// console.log(forEach("Vu Thien", Up));

// Challenge 5
function mapWith(array, callback) {
  const newArr = [];
  forEach(array, (element) => newArr.push(callback(element)));
  return newArr;
}
// console.log(mapWith([1, 2, 3], addTwo));

// Challenge 6
function reduce(array, callback, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i]);
  }
  return acc;
}
const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};
newNums = reduce(nums, add, 0); //-> 8
// console.log(newNums);
