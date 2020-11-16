// if statement
// condition that is evaluated to either truthy or falsy
// block that runs

const age = 100;

if (age > 70) {
  console.log('yessir');
} else if (age > 60 ) {
  console.log('yessir 2');
} else if (age > 50) {
  console.log('yessir 3');
} else {
  console.log('nothing was true');
}

function slugify (sentence, lowercase) {
  // regex always starts and closes with a forward slash - g means finds them all
  let slug = sentence.replace(/\s/g, '-');

  if (lowercase) {
    return slug.toLowerCase();
  }

  // return means to return a value from that sentence and stop running
  return slug;
}

console.log(slugify('this is a dope sentence', true));
console.log(slugify('tHiS iS a dOpE sEnTeNcE', false));

// double equals exists because of null and undefined

let name = 'dan';
let last = 'hemerlein'
name = 'dan'

if (name === 'dan' && (name === 'dandan' || last === 'hemerlein')) {
  console.log('cool first and last name');
}

function nameIsDan(name) {
  if (name.includes('dan')) {
    return true;
  }
  return false;
}

if (nameIsDan('owirangowirjdan')) {
  console.log('you win');
} else {
  console.log('nope');
}

// concept of truthy and falsy

const dog = '';

if (dog) {
  console.log('you have the best dog');
} else {
  console.log('you don\'t have a dog');
}

if ({}.keys) {
  console.log(true);
} else {
  console.log(false);
}

console.clear();

// coersion is turning a non boolean type into a value

const firstName = 'dan';
console.log(!firstName);

const count = 2;
let word;

if (count === 1) {
  word = 'item';
} else {
  word = 'items';
}

let sentence = `you have ${count} ${word} in your cart`;

console.log(sentence);

const tCount = 1;
let tWord;

tCount === 1 ? tWord = 'item' : tWord = 'items';

let tSentence = `you have ${tCount} ${tWord} in your cart`

console.log(tSentence);

// conditional abuse
  // react example:

  // {isAdmin && showAdminBar()}

if (true){ console.log('if statement one liner'); }
if (true) console.log('if statement one liner with no brackets');
