// maps
// how does it work and what does it do, why to use one over an object

const myMap = new Map();
const person1 = {
  name: 'dan',
  age: 26
}

// .set()
myMap.set('name', 'dan');
// keys can be any type
myMap.set(100, 'keep it one-hundred');
// dictionaries are ways to store additional meta data about something else
myMap.set(person1, 'really cool')
console.log(myMap);

console.log(myMap.get(person1))

const score = 100;
const prizes = new Map();

prizes.set(100, 'bear');
prizes.set(200, 'duck');
prizes.set(300, 'cat');

console.log(`you win a ${prizes.get(score)}`);
console.log(myMap.size);
// order is guranteed in a map

// select the ul
const ul = document.querySelector('.prizes');
// prizes.forEach(entry => {
//   console.log(entry);
// })

// array destructuring
for (const [points, prize] of prizes) {
  const li = `<li>${points} - ${prize}</li>`;
  ul.insertAdjacentHTML('beforeend', li)
  console.log(points, prize);
}

// you should use a map if you need to maintain the order of the items
// there is no literal of a map
// maps can be created by passing an array of arrays
// maps can't have function (methods) they are simply for storing data

// the universal way to move data from one place to another
const convert = JSON.stringify(person1);
console.log(convert);
console.log(JSON.parse(convert));

// JSON does not handle maps - YET


// .has()

// .delete()
