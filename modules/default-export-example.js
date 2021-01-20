// modules can have ONE DEFAULT EXPORT
const person = {
  first: 'dan',
  last: 'hemerlein',
};

// if this module does one thing
export default person;

export const dog = 'snickers';
export const food = 'pizza'

export function eat() {
  console.log('chomp chomp');
}
