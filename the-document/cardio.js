// make a div

const div = document.createElement('div');

div.classList.add('wrapper');

document.body.appendChild(div);

// make an unordered list and add to the above wrapper div

// this is not a node - it's just text
const ul = `
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
`;

div.innerHTML = ul;

const image = document.createElement('img');

image.src = "https://source.unsplash.com/random/500x500";

image.width = 250;

image.classList.add('cute');

image.alt = 'Cute puppy';

div.appendChild(image);

const divPara = `
  <div class="divPara">
    <p>para one</p>
    <p>para two</p>
  </div>
`

const ulElement = div.querySelector('ul');

// console.log(ulElement);

// need this method since divPara is not a node
ulElement.insertAdjacentHTML('beforebegin', divPara);

const myDiv = div.querySelector(".divPara");

myDiv.children[1].classList.add('warning');

myDiv.firstElementChild.remove();

function generatePlayerCard(name, age, height) {

  const html =  `
    <div class="player-card">
      <h2>${name.toUpperCase()} - ${age.toString().toUpperCase()}</h2>
      <p>
        they are ${height} and ${age} years old. in dog years this person would be
        ${age * 7}. that would be a tall dog!
      </p>
      <button class="delete" type="button">&times; delete</button>
    </div>
  `
  return html;
}

const cardsDiv = document.createElement('div');

div.insertAdjacentElement('beforebegin', cardsDiv);

cardsDiv.classList.add('cards');

let cardsHTML = generatePlayerCard('dan', 26, `5'10"`);
cardsHTML = cardsHTML + generatePlayerCard('jillian', 23, `5'5"`);
cardsHTML = cardsHTML + generatePlayerCard('dan-2', 25, `5'10"`);
cardsHTML = cardsHTML + generatePlayerCard('jillian-2', 24, `5'5"`);

cardsDiv.innerHTML = cardsHTML;

const buttons = document.querySelectorAll('.delete');
console.log(buttons);

function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  buttonThatGotClicked.parentElement.remove();
}

buttons.forEach(button => {
  button.addEventListener('click', deleteCard)
})
