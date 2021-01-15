function wait (ms = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
};

function makePizza (toppings = []) {
  // promises are made immediately but they do not resolve until the data comes back
  const pizzaPromise = new Promise(function(resolve, reject) {

    // reject if people try to inclue pineapple in the toppings

    if (toppings.includes('pineapple')) {
      reject('Seriously? Get out 🍍');
    }

    const amountOfTimeToBake = 500 + (toppings.length * 200);
    // wait one second for the pizza to cook
    setTimeout(() => {
      // when you are ready, you can resolve the promise
      resolve(`here is your pizza 🍕 with the toppings: ${toppings.join(' ')}`);
    }, amountOfTimeToBake);

    // if something went wrong, the promise can be rejected
  });
  // the concept of returning and resolving
  return pizzaPromise;
}


function handleError(error) {
  console.log(error);
}

async function go() {
  // simulating a rejection
  try {
    // if anything goes wrong in here - it will just fail over to the catch block
    const pizza = await makePizza(['pineapple']);
    console.log(pizza);
  } catch(error) {
    // this is where you would display some UI to the user and send the error to some error tracking service
    console.log(error);
  }
}

go();

// .then() and .catch() can only be used on functions that return promise
// all async functions return promises - this is why the go function returns a promise
go().catch(handleError);

async function goGo() {
  const result = await go();
}

// catching an error at runtime
goGo().catch(handleError);

// handling errors with a higher order function
// higher order function - function that returns another function

// make a safe function with high order functions

function makeSafe(fn, errorHandler) {
  return function () {
    fn().catch(errorHandler)
  }
}

// unsafe
// go();

// this just returns another function with a .catch() tacked on to it
const safeGo = makeSafe(go, handleError);

safeGo();
