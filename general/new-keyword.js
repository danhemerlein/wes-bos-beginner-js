// what is the new keyword

const myDate = new Date("August 11, 2025");

console.dir(myDate);

// where did this method getFullYear() come from?
console.log(myDate.getFullYear());

// everything in JavaScript is an object
// when you create a new number - they're also an object because of the methods they have

typeof myDate;
myDate instanceof Date;
// myDate is an object but its an instance of a special object called DATe

// array literal syntax
const names = ['dan', 'jillian'];

// object literal syntax
const dan = {
  name: 'dan',
  age: 26
}

// under the hood this is creating a NEW object
const span = document.createElement('span');

function Pizza () {
  console.log('making a 🍕');
}

const pepperoniPizza = new Pizza();
console.log(pepperoniPizza);

// this will tell us:  what function made me
console.log(pepperoniPizza.constructor);

console.log(pepperoniPizza instanceof Pizza);

// new keyword creates a new object that is an instance of whatever function you have created it from
