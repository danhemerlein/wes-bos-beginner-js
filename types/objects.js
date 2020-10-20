// everything in JS is an object
// when something is an object - it's becuase we want to group things together

// order doesn't matter in objects
// if you need order to matter - use an array

const person = {
  first: 'dan',
  last: 'hemerlein',
  age: 26,
};

console.table(person);
// console.log(person);
// console.log(person.first);
// console.log(person.last);

const {first, last, age} = person;

console.log(first);
console.log(last);
console.log(age);
