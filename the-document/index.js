// will only give back the first matching element
const p = document.querySelector('p');

// will return a Node List
// a Node List is not an array - doesn't have the methods
const allP = document.querySelectorAll('p');

const imgs = document.querySelectorAll('.item img');
const item2 = document.querySelector('.item2');
const item2IMG = item2.querySelector('img');

// console.log(p);
// console.log(allP);
// console.log(imgs);
// console.log(item2);
// console.log(item2IMG);

// ELEMENT PROPERTIES AND METHODS

const heading = document.querySelector('h2');
// this will show the properties that will be helpful for working with the element
console.dir(heading);

// this is a getter
// text Content gets all the styles and script tags in an element -  won't return text of hidden elements

// console.log(heading.textContent);
// only gets the human readable content

// console.log(heading.innerText);

// can also be used as a setter
heading.textContent = "dan is cool";

// console.log(heading.textContent);
// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

const pizzaList = document.querySelector('.pizza');

// console.log(pizzaList);
// console.log(pizzaList.textContent);

pizzaList.textContent = `${pizzaList.textContent} 🍕`;
pizzaList.insertAdjacentText('beforeend', '🍕');
pizzaList.insertAdjacentText('afterbegin', '🍕');

// what's the difference between and element and a node
// Nodes can be anything
// an element is something that is wrapped in a tag
// (everything is a node)

// CLASSES

const img = document.querySelector('.nice-image');

// console.log(img.classList);
// not to be confused with img.className

// console.log(img.classList.add('open'));

// console.log(img.classList);
// console.log(img.classList.length);
// console.log(img.classList.remove('class2'));

// console.log(img.classList);

function toggleRound() {
  img.classList.toggle('round');
}

img.addEventListener('click', toggleRound);

console.log(img.classList.contains('nice-image'));

// BUILT IN AND CUSTOM DATA ATTRIBUTES

// many of these can be used as a getter or setter
img.alt = 'bridge pic.';
img.width = 200;

window.addEventListener('load', function() {
  // this is only a getter - not a setter
  console.log(img.naturalWidth);
})

console.log(im g.getAttribute("alt"));

img.setAttribute('alt', 'super awesome big bridge');

console.log(img.getAttribute("alt"));

// you should not do this in case the standard changes in the future and includes such and attribute that you want to create
// img.setAttribute('dan-is-cool', 'dan is really cool');

// if you do want to use you own custom attributes - use data attributes

// ex. data-[name]

const custom = document.querySelector('.custom');

// this will return an object of all the data attributes on the element
console.log(custom.dataset);

custom.addEventListener('click', function() {
  alert(`Welcome ${custom.dataset.name}`)
})
