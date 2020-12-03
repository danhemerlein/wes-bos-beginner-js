// looping methods

const people = [
  {
    id: 1,
    firstName: 'dan',
    lastName: 'hemerlein',
  },
  {
    id: 2,
    firstName: 'frank',
    lastName: 'hemerlein',
  },
  {
    id: 3,
    firstName: 'nancy',
    lastName: 'kaboolian',
  },
  {
    id: 4,
    firstName: 'jazz',
    lastName: 'theDog',
  },
  {
    id: 5,
    firstName: 'max',
    lastName: 'theDog',
  },
];


function logFirstName (person, index, array) {
  console.log(index + " " + person.id + ": " + person.firstName + " " + person.lastName);
  console.log(array);
};

people.forEach(logFirstName)
