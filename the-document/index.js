// will only give back the first matching element
const p = document.querySelector('p');

// will return a Node List
// a Node List is not an array - doesn't have the methods
const allP = document.querySelectorAll('p');

const imgs = document.querySelectorAll('.item img');
const item2 = document.querySelector('.item2');
const item2IMG = item2.querySelector('img');

console.log(p);
console.log(allP);
console.log(imgs);
console.log(item2);
console.log(item2IMG);
