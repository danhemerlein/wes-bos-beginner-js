// TRAVERSING THE DOM

const dan = document.querySelector('.dan');

console.log(dan);
// returns child elements
console.log(dan.children);
// returns nodes
// nodes can be anything
console.log(dan.childNodes);

const p = document.createElement('p');
p.textContent = 'I will be removed'
document.body.appendChild(p);
// this element will still be available in the console as it is still in javascript memory
p.remove();

