// what are modules?
// the ability to share code across multiple JS files and projects
// structure / oprganize JS - share functionality and data across files and projects
// modules have their own scope
// ESM - ES6 modules

// how do you take a function that exists in another file and access it in a different file -- importing
// you can do a named export and default export in the same file

// this is a named import - you must know the object name
import { returnHi as sayHi, last, middle } from './named-export-example.js'

// default exports can be imported as whatever you want

import dan from './default-export-example.js'
// this will give you named and default exports together
// import * as everything from './default-export-example.js'

import { handleButtonClick } from './handlers.js'

const name = 'dan';

// console.log(last);
// console.log(middle);
// console.log(sayHi(name));

// on demand importing
const button = document.querySelector('button');

button.addEventListener('click', handleButtonClick)


