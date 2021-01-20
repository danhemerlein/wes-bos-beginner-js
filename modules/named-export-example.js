// a file is a module
// modules have their own scope

// this variable will not be available in any other file
const last = 'hemerlein';
const middle = 'paul';

export function returnHi(name) {
  return `hi ${name} ${last}`;
}

// module.exports returnHi = returnHi;

// this is a named export because it has a name on it
// curly brackets mean its a named export
// any module can have as many named exports as they want
export { last, middle }
