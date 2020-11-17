// objects are another fundamental building block in javascript
// everything in JS is an object
// group togther keys and values AKA properties and values
// store related data
// the order of the properties DOES NOT MATTER
  // if they do matter...

// this is known as the object literal syntax
let age = 26
const person = {
  name: "dan",
  // age: age,
  age,
  // can use hyphens in keys if they are a string - text wrapped in quotes
  "is-cool": true,
  "really cool": false,
  clothing: {
    shirts: 10,
    pants: 2,
    plants: 1,
  },

  // remember that this is not scoped to the object its attached to
  sayHello: function(greeting="howdy") {
    // what is this - literally what is THIS
    return `${greeting} ${this.name}`
  }
}

// this is not guaranteed to give the properties in the order in which they are defined
console.log(person);

const person2 = new Object({
  name: 'hannah',
  age: 25,
});

console.log(person2);

// the values of a key can be any type - all seven of them

// the argument for trailing commas - the next time you come around, you can add things without having to remember to do so
  // more lines will be modifed in git

// adding a property after the object has been created - DOT NOTATION
person.job = 'programmer';
console.log(person);

// overriding the key - even if the object is bound to a const
  // const just means that the binding cannot be overwritten
  // const doesn't mean that the value can change
person.job = 'coder'
console.log(person);

// const personFreeze = Object.freeze(person);

// mutation is changing a value - you can't do that to a frozen object
// personFreeze.age = 1000;
// console.log(personFreeze);

// a DOM element is just an object

// square brackets to access properties
  // why do we have this - to programatically call up the values of some properties in an object
  // could also be used if data is coming from another laguage or something like that

console.log(person['job']);

for (let key of Object.keys(person)) {
  console.log(person[`${key}`]);
}

console.clear();

// to remove a property from an object - use the delete keyword

const jobless = delete person.job;

// will return true or false
console.log(jobless);

console.log(person.job);

// methods
  // what's the difference between a method and a function
  // a method is just a function that lives inside an object

