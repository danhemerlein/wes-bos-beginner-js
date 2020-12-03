// static methods
  // utility methods - have to be accessed like this
  // Array.from()
  // Array.isArray()
  // Array.of()

// instance methods
  // prototype methods

// looping methods
  // .map()
  // .filter()
  // .reduce()

console.log([]);

const numbers = [1,2,3,4,5];

console.log(numbers);

// Array.of() creates an array from the arguments that you pass it
const ex = Array.of('dan', 'dandan');;
console.log(ex);;
const ex2 = Array.of(...'dan');
console.log(ex2);

// second argument is the map argument
function createRange (start, end) {
  return Array.from({ length: end - start + 1 }, function(item, index) {
    return index + start;
  });
}

console.log(createRange(3,7));

const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
}

// console.log(Object.entries(meats))
// console.log(Object.keys(meats))
// console.log(Object.values(meats))

// Object.entries(meats).forEach((entry) => {
//   const [key, val] = entry;
//   console.log(entry);
//   console.log(key);
//   console.log(val);
// })

const buns = ['egg', 'wonder', 'sesame'];
const lunch = "hot dogs,hamburgers,sausages,corn";

// instance methods

console.log(buns.join(' or '));
// you can't split something with an emoji
console.log(lunch.split(','));

// mutable - recall that push and pop are like a stack - like the call stack
const lastItem = buns.pop();
// console.log(lastItem);
// console.log(buns);
buns.push(lastItem);
// console.log(buns);

// take the first item off an array with shift
const firstItem = buns.shift();
// console.log(firstItem);
// console.log(buns);
buns.unshift(firstItem);
// console.log(buns);

// slice is immutable
const newBuns = buns.slice(0, buns.length - 1);
// console.log(newBuns);
// console.log(buns);

// make a copy of the array with slice

const bunsCopy = buns.slice(0);
console.log(bunsCopy);
buns.push('ahhh')
console.log(buns);

const bunsCopy2 = [...buns];
console.log(bunsCopy2);

const spl = bunsCopy2.splice(1,2);
console.log(spl);
console.log(bunsCopy2);

// reference versus value - something to keep in mind when working with objects

