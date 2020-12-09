// reduce takes in an array of data and returns a single value

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];
const strings = ['dan', 'frank', 'nancy', 'helen'];

let total = 0;

// this callback method relies on a variable that exists outside the function
// this is not optimal
orderTotals.forEach(t => total += t );

console.log(total);

console.clear()

// accumulator - the thing that has been handed to you from the last instance of the loop
// currentValue -
function tallyNumbers (accumulator, currentValue) {
  // return the current tally plus the ammount of this order
  return accumulator + currentValue;
}

// reduce takes an optional second argument of where you want to start the tally at - if you don't provide - it will just take the first two numbers
const allOrders = orderTotals.reduce(tallyNumbers, 0)
const allNames = strings.reduce(tallyNumbers, '')

console.log(allOrders);
console.log(allNames);

console.clear()

const inventory = [
  {type: 'shirt', price: 4000},
  {type: 'pants', price: 4532},
  {type: 'socks', price: 234},
  {type: 'shirt', price: 2343},
  {type: 'pants', price: 2343},
  {type: 'socks', price: 542},
  {type: 'pants', price: 123},
];

// count the instances of something in inventory array

function inventoryReducer(totals, item) {

  // increment the type by one
  // if totals.shirt + 1 evaulates to NaN - the program will fallback to the or oporator
  // square brackets look up the property on the object
  totals[item.type] = totals[item.type] + 1 || 1;

  // write this out as an if statement
    // if (totals.shirt) {
    //   totals.shirt = totals.shirt + 1;
    //   // or totals.shirt++
    // } else {
    //   totals.shirt = 1;
    // }


  // return the totals so the next loop can use it
  return totals;
}

const inventoryCounts = inventory.reduce(inventoryReducer, {})

console.log(inventoryCounts);

const totalInventoryPrice = inventory.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(totalInventoryPrice);

// expected output

/*
  {
    shirts: 3,
    pants: 0,
    socks: 0,
  }
*/

// console.clear();

const text = `
dan hemerlein
web developer / music producer
keep in touchabout
code
moodboard
music
keep in touch
github
working not working
medium
twitter
instagram
© Dan Hemerlein 2020
`

function isValidCharacter(char) {
  // if that character is a-z or 0-9, then we want to keep it
  // use a match function - regex function

  // case insensitve with the i flag
  return char.match(/[a-z0-9]/i);
}

function lowercase(char) {
  return char.toLowerCase();
}

function instanceCounter (counts, letter) {
  counts[letter] ? counts[letter] = counts[letter] + 1 : counts[letter] = 1;
  return counts
}

const result = text
                .split('') // split each char into an item of an array
                .filter(isValidCharacter)
                .map(lowercase) // convert every letter to lowercase
                .reduce(instanceCounter, {});

console.log(result);

function sortByValue(a, b) {
  return b[1] - a[1];
}

const sortedResult = Object.entries(result).sort(sortByValue);

console.log(Object.entries(result));
console.log(sortedResult);
