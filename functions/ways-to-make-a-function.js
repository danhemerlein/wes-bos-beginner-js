
// console.log(doctorize('dan'));
// console.log(doctorize2('dan'));

// javascript does not hoist functions stored in a variable
const doctorize = function (name) {
  return `Dr. ${name}`;
}

// functions that are defined with the function keyword are hoisted
function doctorize2 (name) {
  return `Dr. ${name}`;
}

// arrow functions are annon functions

const inchesToCM = (inches) => inches * 2.54;

console.log(inchesToCM(3));


// implicitly returning a object
const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE
// Immediately Invoked Function Expression
// wrap the function in parens - creates a function value - then run that function
// what's the benefit of doing something like this?
  // a function decalres it's own scope - porvides it's own sheltered space
  // arguments

(function(age) {
  console.log('running the annon function');
  console.log(age);
  return `you are cool and age ${age}`;
})(26);

// Methods - a function that lives inside an object

// console.log - log is a function that lives inside the console object


const dan = {
  name: 'dan hemerlein',
  // method
  sayHi: function() {
    return `hey dan`;
  },

  // short hand method
  yellHi() {
    console.log('HEY DAN');
  },

  // shorthand with arrow - has a different scope for this keyword
  wisperHi: () => {
    console.log('hey dan im a mouse');
  }
}
