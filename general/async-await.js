function wait (ms = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
};

async function go() {
  console.log('starting');
  // the keyword await pauses the promise generating function until that promise is resolved -- this is only available for use in an async function
  await wait(2000);
  console.log('running');
  await wait(2000);
  console.log('ending');
}

// go();

// any type of function can be marked as async

// function declaration
async function fd() {}

//arrow function
const arrowFn = async () => {}

// call back function
window.addEventListener('click', async function () { });

// methods
const person = {
  // method
  sayHi: async function() {

  },
  // method short hand
  async sayHello() {

  },
  // function property
  sayHay: async () => {

  }
}

// NOTE: you cannot do top level awaiting



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

async function makeDinner() {
  // await = async-waitiing
  // this isn't great because you're not even starting making the mushrooms pizza until the pepperoni pizza has completed

  const pizza1 = await makePizza(['pepperoni']);
  const pizza2 = await makePizza(['mushrooms']);

  // a better idea would be to:
  const pizzaPromise1 = await makePizza(['pepperoni']);
  const pizzaPromise2 = await makePizza(['mushrooms']);

  // Promise.all() returns an array of the data contained in the promises
  const [peps, mush] = await Promise.all([pizzaPromise1, pizzaPromise2]);
  console.log(peps, mush);

}

makeDinner();

async function animate2(e) {
  const el = e.currentTarget;
  el.textContent = 'go';
  await wait(200)
  el.classList.add('circle');
  await wait(500)
  el.classList.add('red');
  el.classList.remove('circle');
  await wait(500);
  el.classList.remove('red');
  el.classList.add('purple');
  await wait(500);
  el.classList.add('fade-out');
}

const go2 = document.querySelector('.go');
go2.addEventListener('click', animate2);
