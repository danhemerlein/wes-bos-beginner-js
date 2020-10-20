// there's only one type of number in javascript
// other languages have an Integer or Float

// integers will have a typeof of number
console.log(typeof 420);
// floats will have a typeof of number
console.log(typeof 4.20);

// the only thing you can do with multiplication / division / subtraction is work on numbers so JS will convert this string to be a number
console.log(10 * '10');

// + can do concatination so the number 10 will be converted to a string
console.log(10 + '10');


// binary oporators

const smarties = 20;
const kids = 3;

const eachKidGets = smarties / kids;

console.log(`Each kid gets ${Math.floor(eachKidGets)} smarties`);

// this is where you would use the mod oporator --> %
console.log(`Dad kid gets ${smarties % kids} smarties`);

console.log(0.1 + 0.2);

// only store prices in cents -- because of how base 2 number system handles floating points

// Infinity is a number
// NaN is a number too
