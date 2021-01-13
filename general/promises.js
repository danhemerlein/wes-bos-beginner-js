// the solution to callback hell
// an I owe your for something that will happen in the future
// when we request a timer, data from a sever of a microphone to give access
// what we get back is a promise becuase all of those processes take time
// promise = at somepoint you will get some data back
// you need to wait for something to happen before you can run the rest of the code

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

// the function does not give us a pizza - it gives us the promise of pizza
// const pizza = makePizza();
// console.log(pizza);

const pepperoniPromise = makePizza(['pepperoni']);

// pending promise
console.log(pepperoniPromise);

// resolved or rejected promise
console.log('starting');

// pepperoniPromise.then(function(data) {
//   console.log('ahh got the pizza');
//   console.log(data);
// });

console.log('finishing');

console.clear();

// this is the promised land

// this is sequential
const pepperoniPromise2 = makePizza(['pepperoni'])
  .then(function(pizza) {
    console.log(pizza);
    return makePizza(['ham', 'cheese']);
  })
  .then(function(pizza) {
    console.log(pizza);
    return makePizza(['hot peppers', 'onion', 'pineapple'])
  }).then(function(pizza) {
    console.log(pizza);
    return makePizza();
  }).then(function(pizza) {
    console.log(pizza);
    return makePizza(['one', 'two', 'three', 'four','one', 'two', 'three', 'four','one', 'two', 'three', 'four','one', 'two', 'three', 'four']);
  }).then(pizza => {
    console.log('all done, this is the last pizza');
    console.log(pizza);
  })
  .catch(handleError)

// ruun them concurrently

const pizzaPromise2 = makePizza(['hot peppers', 'onion', 'feta'])
const pizzaPromise3 = makePizza(['one', 'two', 'three', 'four','one', 'two', 'three', 'four','one', 'two', 'three', 'four','one', 'two', 'three', 'four']);
const pizzaPromise4 = makePizza(['ham', 'cheese']);


// pizzaPromise2.then(pizza => {
//   console.log(pizza);
// });

// pizzaPromise3.then(pizza => {
//   console.log(pizza);
// });

// pizzaPromise4.then(pizza => {
//   console.log(pizza);
// });


// .all() is a static method
// const dinnerPromise = Promise.all([pizzaPromise2, pizzaPromise3, pizzaPromise4]);

// dinnerPromise.then(function(pizzas) {
//   const [hotOne, garbagePail, hamAndCheese] = pizzas;
//   console.log(hotOne);
//   console.log(garbagePail);
//   console.log(hamAndCheese);
// })

// // data can be destrucured in the argument too the callback
// dinnerPromise.then(function([hotOne2, garbagePail2, hamAndCheese2]) {
//   console.log(hotOne2, garbagePail2, hamAndCheese2);
// })

// const firstPizzaPromise = Promise.race([pizzaPromise2, pizzaPromise3, pizzaPromise4]);

// firstPizzaPromise.then(pizza => {
//   console.log('this is the first one ready');
//   console.log(pizza);
// })


function handleError(error) {
  console.log('oh no');
  console.log(error);
}

// not ever promise needs a catch at the end - espcially if you are doing concurent promises

makePizza(['cheese', 'pineapple'])
  // then only runs when the promise goes successfully
  .then(pizza => {
    console.log(pizza);
  // catch only runs when the promise is not successful
  }).catch(handleError)


const p1 = makePizza(['pepperoni']);
const p2 = makePizza(['pineapple']);

// this .allSettled() static method allows for some promises rejecting
const dinnerPromise2 = Promise.allSettled([p1, p2]);

// fulfilled is another word for resolved

dinnerPromise2.then(data => {
  console.log(data);
})
