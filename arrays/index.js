// arrays
// an array is used to holding a list of things where the order matters
// an item as an index
// number of items is the length
// items in an array can be any type

// array literal
// looks a lot like an object - except that an array does not have indexes
// even though typeof names ==> object
// array is not it's own type - it can hold data and has bunch of methods
const names = ['dan', 'jillian', 'hannah'];

console.log(Array.isArray(names));

// use the index to access items in an array
// indexes are 0 based -- counting starts at 0 - getting the first item
console.log(names[0]);
// length is not 0 based
console.log(names.length);
// get the last item
console.log(names[names.length -1]);

// push does mutate the original array
names.push('isabel');

const names2 = [...names, 'isabel'];

console.log(names);
console.log('names2', names2);

// mutable method - once again
names.unshift('grayce');
console.log(names);

// the difference betwen splice and slice
  // slice is immutable
    // returns a shallow copy, the end is not included
  // splice is mutable
    // this has a start and how many to go to

const numbers2 = [0,1,2,3,4,5,6,7,8,9];
// numbers2.splice(2,3)
// console.log(numbers2);
// console.log('number2 after splice', numbers2);

// adding an item to an array with spread and slice
const newNumbers = [...numbers2.slice(0,2), 1.5, ...numbers2.slice(2)];
console.log('new numbers', newNumbers);


const comments = [
  {text: 'fuck', id: 123},
  {text: 'fuck 2', id: 124},
  {text: 'fuck 3', id: 125},
  {text: 'fuck 4', id: 126},
  {text: 'fuck 5', id: 127},
]

function deleteComment(id, comments) {
  // first find the index of the item in the array
  const commentIndex = comments.findIndex(comment => comment.id === id);
  // make a new array without that item in it
  return [
    ...comments.slice(0, commentIndex),
    ...comments.slice(commentIndex + 1)
  ]
  // return the new array
}



// arrays have methods - for adding, removing and finding things within the array
// mutable vs immutabe
  // mutable methods perfom mutations (like in graphQL) - the original version is changed
  // immutable - the methods do not change the original thing - they simply return a new array

// example of a mutation method

const numbers = [0,1,2,3,4,5,6,7,8,9];
// const numbersBackwards = numbers.reverse();
// console.log(numbersBackwards);
// the numbers array has been mutated - this is a mutation, the original data was changed
  // this is not necessarily bad - just something to be aware of
  // functional programmers prefer to create new versions that are the modified version
console.log(numbers);

// this is an immutable method
  // the original data is not changed
const slc = numbers.slice(2,4);
console.log(slc);
console.log(numbers);

// anytime you want to use a mutation method but NOT mutate the data
  // you need to take a copy of the original array using spread

const numbersReversed = [...numbers].reverse();
console.log(numbersReversed);
console.log(numbers);
