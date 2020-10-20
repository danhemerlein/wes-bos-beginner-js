// console.log('scope');

const name = 'dan';

// scope answers the question - where are our variable and functions available to me
// global variables - any time you declare a variable, it will be available anywhere in the application
// in javascript - the global scope is reffered to as the window
// window.setTimeout(); var variables are attached to the window object
// let and const are not attached to the window

// in almost all cases - using global scope is not a good idea

// this function is available on the window
function sayHi() {
  console.log('hi');
}

const age = 26;

// when variables are defined inside a function those variables are only available within that function
// curly brackets are fenses and do not allow the vairables to leak out
// if variables are not available in a scope - the lauguage will bubble up and look for it at parent levels

function go() {
  // you can name variables the same thing as long as they are not in the same scope
  const age = 200;
  console.log(age);
  const hair = 'dirty blonde';
}

go();

console.log(age);
// console.log(hair);

if (true) {
  // let and const are block scoped - they are not available outside the curly braces
  let cool      = true;
  const cool2   = true;

  // var is avialable in the function or global scope
  var cool3     = true;
}

// console.log(cool);
// console.log(cool2);
// console.log(cool3);

function isCool(name) { // function scope block
  let cool;

  if (name === 'dan') { // if statement block
    cool = true;
  }

  console.log(cool);
  return cool;
}

isCool('dan');

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

const dog = 'jazz';

function logDog() {
  console.log(dog);
}

function go() {
  const dog = 'jazz2';
  logDog();
}

go();

// don't add anything to the global scope
// a function inside another function will only be available in the parent function
// most functions are just written at the top level though
