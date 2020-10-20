// age has a value of undefined
console.log(age);
// cool is not defined
console.log(cool);

var age = 26;

// jacascript will hoist the variable declarations but won't actually hoist the variable values

// WHAT DOES THIS FILE DO
sayHi()

// HOW DOES THIS FILE DO IT
function sayHi() {
  console.log("hey");
  console.log(add(10, 2));
}

// there are two things that can be hoisted in javascript
// functions and variables
// hoisint allows for functions and variables to be used before they are created

// this works because the complier takes the function declarations and moves them to the top of the file

function add(a, b) => {
  return a + b;
}

// hoisting is variable and function declarations that are hoisted to the top of the file
// functions must be created only using the function keyword
