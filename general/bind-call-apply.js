// bind, call and apply change the scope of what the
// this key word is equal to inside a function or method

const person = {
  name: 'dan hemerlein',
  // this is always equal to whatever is left of the dot
  sayHi() {
    console.log(this);
    return `hi ${this.name}`;
  }
}

const jenna = { name: "Jenna" };

// in this example - this is bound to the window
const sayHi = person.sayHi;

// this is defined by where the function is being called - not where the function is defined


// bind is a method that lives on all functions
// change the this keyword to be this function
// use the bind keyword to change where the this keyword is defined

// this example will work as intended
const sayHi2 = person.sayHi.bind(person);

// query selector example
const $ = document.querySelector;

const wrapper = document.querySelector('.wrapper');
// this will be equal to either the document or the wrapper
const p = wrapper.querySelector('p');
console.log(p);

// by calling bind against querySelector - we say when the $$ function is run
// use 'document' as the this value
const $$ = document.querySelector.bind(document);

const bill = {
  total: 1000,
  calculate: function(taxRate) {
    console.log(this);
    return this.total + (this.total * taxRate);
  },
  describe(mealType, drinkType, taxRate) {
    return `your meal of ${mealType} with a drink of ${drinkType} was ${this.calculate(taxRate)}`
  }
}

const total = bill.calculate(0.13);
const calc = bill.calculate;

console.log(total);
console.log(calc(0.13));

console.clear();

// you can pass additional arguments to bind() - first one is always the this
// .bind() returns a function that then needs to be called
const calc2 = bill.calculate.bind({total: 500}, 0.06);

console.log(calc2());

// call returns a function and then runs it
const calc3 = bill.calculate.call({total: 200}, 0.06);
console.log(calc3);

// apply accepts a single array of arguments beind
const calc4 = bill.calculate.apply({total: 100}, [0.06]);
console.log(calc4)

const myMeal = bill.describe.call(bill, 'pizza', 'beer', 0.13);
console.log(myMeal);

const myMeal2 = bill.describe.apply(bill, ['pizza', 'beer', 0.13]);
console.log(myMeal2);
