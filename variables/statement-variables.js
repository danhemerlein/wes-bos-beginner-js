console.log('hello world');

var first = 'dan';
let age = 26;
const cool = true;

// semi colons are used to terminate the line of JavaScript - creation of a statment

// code blocks bound by curly braces
if(age > 10) {
  console.log('you are old');
}

// ASI - automatic semicolon insertion

// var and let can be updated
// variable does not need to be re-declared - in most cases this will not even work

first = 'dandan';
age = 36;

// you cannont set a const variable to be equal to something else

// this will throw a TypeError
// cool = false;

// scoping - where are the variables avialable
// var variables are scoped differently
// var is function scoped - let and const are blocked scoped

