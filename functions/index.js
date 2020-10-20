// functions

// functions allow us to group together sets of statements
// generally they are realted to each other and they produce some output
// takes in arguments - perform some work as a statement - then return some output

// different between a function and a method
// data that is passed into function is an argument

// Date.now() - returns the number of miliseconds since some date in 1970
// JavaScript uses milliseconds - some other languages only use seconds

const p = document.querySelector('p');
console.log(p);

// functions are defined...with parameters
// parameters are vaiables that are scoped to that function
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15 ) {
  // this is the function body

  // this variable is not available in the global scope
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;

  // when this function is done running - the variable gets cleaned up by the GC
  return total;
}

//...and later called or run of the function with arguments
const myTotal = calculateBill(100, 0.13);
const myTotal2 = calculateBill(200, 0.13);

const danBill = 500;
const danTaxRate = 0.3;

const danTotal = calculateBill(danBill, danTaxRate);

console.log(myTotal, myTotal2, danTotal);

// function definition
function sayHi (firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHi('dan');

console.log(greeting);

// you can pass in expresssions into a function
const myTotal3 = calculateBill(20 + 20 + 30 + 30, 0.15);

console.log(myTotal3);

function doctorize(name) {
  return `Dr. ${name}`;
}

// defining a function with default arguments
function yell(name = 'dan revolution') {
  return `HEY ${name.toUpperCase()}`;
}

console.log(yell(doctorize('dan')));

// too skip over one default argument and change another one
const myTotal4 = calculateBill(100, undefined, 0.2);

console.log(myTotal4);
