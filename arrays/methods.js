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

console.log(Object.entries(meats))
console.log(Object.keys(meats))
console.log(Object.values(meats))

Object.entries(meats).forEach((entry) => {
  const [key, val] = entry;
  console.log(entry);
  console.log(key);
  console.log(val);

})
