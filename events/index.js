const button = document.querySelector('.button');
const button2 = document.querySelector('.button-2');

function handleClick () {
  console.log('handling the mf clickk');
}

// this will also run on keyboard events
// the callback is anonymous function - it cannot be referenced
button.addEventListener('click', function() {
  console.log('clicking on the button');
});

// this is how you would pass a non anonymous function
// why is not written as handleClick() - because the browser willr run the function when we want it

button.addEventListener('click', handleClick);

// what benefit does having the event listener outside the event listener
// you can add the same function to multiple elements - DRY code
button2.addEventListener('click', handleClick);

// you have to have a named reference to the callback in order to remove - unbinding
button.removeEventListener('click', handleClick);

const buyButtons = document.querySelectorAll('button.buy');

function buyItem() {
  console.log('buying item !!');
}

function handleBuyButtonClick(button) {
  button.addEventListener('click', buyItem);
}

// buyButtons.forEach(button => {
//   button.addEventListener('click', buyItem);
// });

// params for the callback are sent automatically by the browser
// buyButtons.forEach(handleBuyButtonClick)


// EVENTS - Targets, Bubbling, Propagation and Capture

function handleBuyButtonClick2 (event) {
  const button = event.target
  // target is the node that triggered the event
  // console.log(button);
  console.log(event);
  console.log(parseFloat(event.target.dataset.price));
  // console.log(event.currentTarget);
  // console.log(button === event.currentTarget);
  // stop this event from bubbling up - this event will not bubble to the window level
  // event.stopPropagation();
};

// what is the difference between event.target and event.currentTarget
// comes into play when you're cicking on elements that might be nested in side another element that has an event handler

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick2);
});

// propogation - events bubble up
// capture - pass an options object as the third argument to addEventListener
// capturing makes the window event fire before the button event listener
// bubble up, capture down
window.addEventListener('click', function(event) {
  // console.log(event.target);
  console.log('you clicked the window');
  // this will stop all button event handlers
  // event.stopPropagation();
}, {
  capture: true,
});

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mousemove', (event) => {
  // console.log(event.currentTarget);
  // this is a keyword in JavaScript - this keyword will surface the element
  // will always reference whatever is to the left of the dot in addEventListener

  // IF THE CALLBACK is an arrow function - THIS is no longer scoped to this function - it will return the window object
  // some people don't use THIS in event listener callbacks
  console.log(this);
});
