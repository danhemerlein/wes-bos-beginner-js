console.log('it works');

const name = 'dan';
const middle = 'paul';
const last = 'hemerlein';

const sentence = "she\'s so cool";

const song = 'oh \nyeah \ni like \npizza';
const songTicks = `oh

yeah

i
like


backticks`;

console.log(sentence);
// console.log(song);
// console.log(songTicks);

// backticks - interpolation and concatination

const hello = 'hello my name is ' + name;

const helloTicks = `hello my name is ${name}`;

console.log(hello);
console.log(helloTicks);

// using backticks to create html

const html = `
  <div>
    hey
  </div>
`

// document.body.innerHTML = html;
