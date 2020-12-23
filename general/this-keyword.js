// this keyword refers to


const button1 = document.querySelector('.one');
const button2 = document.querySelector('.two');

function tellMeAboutTheButton () {
  // as a arrow function - this is equal to the window
  console.log(this);

  // when the call back to setTimeout is an arrow function - this knows not to change its scope

  setTimeout(() => {
    this.textContent = 'you clicked me';
  }, 1000);
}

// thing to left is button 1 or button 2 - addEventListner is the method
// the tellMeAnoutTHeButton function is boung to the object
// this keyword is always scoped to a function

button1.addEventListener('click', tellMeAboutTheButton);
button2.addEventListener('click', tellMeAboutTheButton);

// this keyword refers to the instance of the thing that was made
// function that makes an object is called a constructor

function Pizza (toppings = [], customer) {
  console.log('making a 🍕');
  // save the toppings that were passed in to this instance of pizza
  this.toppings = toppings;
  this.customer = customer;
  this.id = '#'+Math.floor(Math.random()*16777215).toString(16);
}

// pepperoni pizza is an instance of pizza - with it's own internal information
// this is used for storing data on each instances
const pepperoniPizza = new Pizza(['pepperoni'], 'dan');
const canadianPizza = new Pizza(['pepperoni, mushrooms, onion'], 'jillian');
console.log(pepperoniPizza);
console.log(canadianPizza);

// this will tell us:  what function made me
// console.log(pepperoniPizza.constructor);

// console.log(pepperoniPizza instanceof Pizza);
