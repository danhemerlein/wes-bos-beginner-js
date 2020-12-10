const numbers = [2,34,3,23,42,3,1,65,364,5,645,6];

const name = 'dan👨‍👩‍👧👪';

const dan = {
  name: 'dan',
  age: 26,
  cool: true,
}

// for

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// this is probably the most useful case for a for loop - incrementing by non-1 value
for (let i = 100; i <= 120; i += 2) {
  console.log(i);
}

console.clear();

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// for of - used for looping over iteribles

console.clear();

// big advantange of for of loops is that they can handle emojis
// if you ever need to squence some events - squencing promises
for (const letter of name) {
  console.log(letter);
}

console.clear();

for (const number of numbers) {
  console.log(number);
}

// for in - used for looping over keys of an object

for (const number in numbers) {
  console.log(number)
}

console.clear();

for (const prop in dan) {
  console.log(prop);
  console.log(dan[prop]);
}

const baseHuman = {
  feet: 2,
  arms: 2,
  eyes: 2,
  head: 1
}

function Human(name) {
  this.name = name;
}

Human.prototype = baseHuman;

const dan2 = new Human('dan');

console.log(dan2);

// Object.keys and Object.enteries ignores the prototype

console.clear();

// while
let cool = true;
let i = 0;
while(cool) {
  console.log('you are cool');
  i++;
  if (i >= 100) {
    cool = false;
  }
}

// do while
// this always runs at least once

do {

} while ()
