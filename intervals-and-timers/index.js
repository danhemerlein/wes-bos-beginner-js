console.log('it works');

// globaly scoped method on the window object
// these are also available in Node

// these methods take two arguments one of which is the callback
// the second argument is the number of miliseconds

// setTimeout(() => {
//   console.log('timeout');
// }, 100);

function buzzer() {
  console.log('HAAANNNNNNN');
}

function buzzer2() {
  console.log('buzzer 2');
}

const delay = 500;

// this stack lines up the code to be run
console.log('starting');
// setTimeout(buzzer, delay);
console.log('finishing');

// setInterval(() => {
//   console.log('interval');
// }, 500);

function setImmediateInterval(func, ms) {
  // right away call that function
  func();

  return setInterval(func, ms);
}

// the only gotcha with these methods is that the will not run immdiately
// setImmediateInterval(buzzer2, 500);


// clearning timeout
function destroy() {
  document.body.innerHTML = `<p>DESTROYED</p>`;
}

const bombTimer = setTimeout(destroy, 5000);
const lolliInterval = setInterval(() => {
  console.log('🍭');
}, 50);

window.addEventListener('click', function() {
  console.log('you clicked! you saved the website');
  // clearTimeout must be passed a reference to a timeout
  clearTimeout(bombTimer);
  // clearTimeout must be passed a reference to a timeout
  clearInterval(lolliInterval);
})


