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
buyButtons.forEach(handleBuyButtonClick)
