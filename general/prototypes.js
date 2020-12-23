
// having a function and using the New keyword will return an object that is an instance of that object
// the way you attach properties onto that instance are with the this keyword
// adding functionality to a class

function Pizza (toppings = [], customer) {
  console.log('making a 🍕');
  // save the toppings that were passed in to this instance of pizza
  // these are instance properties
  this.toppings = toppings;
  this.customer = customer;
  this.slices = 10;
  this.id = '#'+Math.floor(Math.random()*16777215).toString(16);

  // we are creating this function once for every pizza that is made
  // the functionality for eating a pizza is the same for every pizza
  // functions like this don't need to be on every instance and can be placed on the prototype
  // everytime you create a fucntion - that takes of memory
  // we can have one eat function that is shared between all the pizzas

  // this.eat = function() {
  //   if (this.slices > 0) {
  //     this.slices = this.slices - 1;
  //     console.log(`CHOMP you now have ${this.slices} slices left!`);
  //   } else {
  //     console.log('sorry no slices left');
  //   }
  // }
}

Pizza.prototype.eat = function () {
  if (this.slices > 0) {
    this.slices = this.slices - 1;
    console.log(`CHOMP you now have ${this.slices} slices left!`);
  } else {
    console.log('sorry no slices left');
  }
}

Pizza.prototype.describe = function () {
  console.log(`this pizza has the ID of ${this.id} and is for ${this.customer} and has these toppings ${this.toppings.join(" ")} and has ${this.slices} slices remaining `);
}

const name = 'dan';

// pepperoni pizza is an instance of pizza - with it's own internal information
// this is used for storing data on each instances
const pepperoniPizza = new Pizza(['pepperoni'], 'dan');
const canadianPizza = new Pizza(['pepperoni, mushrooms, onion'], 'jillian');
console.log(pepperoniPizza);
console.log(canadianPizza);


// polyfilling is when you re-create functionality that isn't available in the enviornment
