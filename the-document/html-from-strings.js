// HTML FROM STRINGS and XSS
const item = document.querySelector('.item');

// console.log(item);
// console.log(item.innerHTML);

const width = 100;

const src = `https://picsum.photos/${width}`;
const decscription = `great photo!`;

const myHTML = `
  <div class="wrapper">
    <h1>${decscription}</h1>
    <img src="${src}" alt="${decscription}">
  </div>
`;

// item.innerHTML = myHTML;

// console.log(item.innerHTML);

const itemImage = document.querySelector('.wrapper img');

// itemImage.classList.add('round');
// console.log(itemImage);

// turn a string into a DOM element


const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment)

console.log(myFragment.querySelector('img'));

console.log(myFragment);

// XSS - Cross Site Scripting
// allowing a third party to run javascript on the page
// fix this by scrubbing the html
