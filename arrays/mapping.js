// mapping

// side effects are when you are in a function and you reach outside that function to do something else

// map, filter and reduce
// pure functions - take in data and return data - don't reach outside themselves and always produce the same output given the same input

const faces = ['😬', '😏', '😩', '😍', '🥺', '🤯', '🥰', '😎', '😔', '😊', '🥶', '💀'];

function addArms(face) {
  return `👋 ${face}👋`;
}

// you take in something and you return something else
const toys = faces.map(addArms);

console.log(toys);

function hemerleinIfy (name) {
  return `${name} hemerlein`;
}

function capitalize(word) {
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}

// chaining maps on to each other
const fullNames = ['dan', 'frank']
  .map(capitalize)
  .map(hemerleinIfy);

console.log(fullNames);

const totals = [100, 200, 300];

const totalsWithTax = totals.map(total => total += (total * 0.15));

console.log(totalsWithTax);

const people = [
  {
    birthday: 'August 6, 1994',
    names: {
      first: 'Dan',
      last: 'Hemerlein',
    }
  },
  {
    birthday: 'August 7, 1970',
    names: {
      first: 'Young',
      last: 'Nauseous',
    }
  },
  {
    birthday: 'August 8, 1986',
    names: {
      first: 'Poppin',
      last: 'Champagne',
    }
  }
];

console.clear();

const peopleWash = people.map(person => {

  // the difference between date objects and timestamps

  // get birthday
  const birthday =  new Date(person.birthday).getTime();
  const now = Date.now();

  // figure out how old they are
  const miliSecondsInYear = 31536000000;
  const age = Math.floor((now - birthday) / miliSecondsInYear);

  // return their full name and bday in an object
  return {
    age,
    name: `${person.names.first} ${person.names.last}`
  }

});

console.table(peopleWash);

// conditions evaluate to true or false so we can simply return that implicitly
const overForty = peopleWash.filter(person => person.age > 40);

// find only returns one thing if it satisfys the condition
const underFifty = peopleWash.find(person => person.age < 50);

console.table(overForty);
console.table(underFifty);

// higher order function - a function that takes a function or returns a function
