// closure is the ability to access a parent function scope even after the parent function has closed

function outer() {
  const outerVar = "hey, I am the outer var";

  function inner() {
    const innerVar = "hey, I am the inner var";

    // scope look up chain allows for this
    console.log(outerVar);
    console.log(innerVar);
  }

  return inner;
}

// const innerFn = outer();
// innerFn();

function createGreeting(greeting = '') {
  // this is the magic space that is created when the function is finished running - or closed
  const myGreet = greeting.toUpperCase();

  // we've created a variable that is then accessed at a lower scope
  // because the inner scope references the variable that is created by an outer scope
  // that is what known as as a closure

  return function(name) {
    return `${myGreet} ${name}`;
  }
}

const sayHello = createGreeting('hello');
const sayHey = createGreeting('hey');

console.log(sayHello('dan'));
console.log(sayHello('jillian'));
console.log(sayHey('emily'));

function createGame(gameName) {
  // this variable
  let score = 0;
  return function win () {
    score++
    return `your name ${gameName} is ${score}`;
  }
}


const hockeyGame = createGame("hockey");
// is available in this function call
hockeyGame();

const soccerGame = createGame('soccer');

hockeyGame();
hockeyGame();
hockeyGame();

// these two will create different score variables
soccerGame();
