// javascript is aysnc and non blocking
// JS is a single threaded language
// only one thing can run at one time
// other languages have multiple threads

// the call stack can only run one thing at a time - if there are multiple things
// queued up - the call stack checks the callback queue

// this logs first
// console.log("starting");

// this logs third - becuase this has a callback function
// the call back goes into the Web API - this is what JS being async means
// the callstack is what Javascript is doing - the web API are things that are waiting or things we are listening for - when something happens in the WEB API - the callback enters the callback queue and pulls the callback into the callstack
// setTimeout(() => {
//   console.log('running');
// }, 2000);

// this logs second
// console.log("ending");

const go = document.querySelector('.go');

// this is what is reffered to as callback hell
// you must nest the callbacks inside each other
// the solution to callback hell is the promised land
// promises allow us to write code that is much nicer to read
// go.addEventListener('click', function(e) {
//   // const el = e.currentTarget;

//   // el.textContent = 'go';
//   setTimeout(() => {
//     // el.classList.add('circle');

//     setTimeout(() => {
//       el.classList.add('red');

//       setTimeout(() => {
//         el.classList.remove('circle');

//         setTimeout(() => {

//           el.classList.remove('red');
//           el.classList.add('purple');

//           setTimeout(() => {
//             el.classList.add('fade-out')
//           }, 500);
//         }, 300);
//       }, 250);
//     }, 500);
//   }, 2000);
// })

function animate(e) {
  const el = e.currentTarget;
  el.textContent = 'go';
  wait(200).then(() => {
    el.classList.add('circle');
    return wait(500)
  }).then(() => {
    el.classList.add('red');
    return wait (250)
  }).then(() => {
    el.classList.remove('circle');
    return wait(500);
  }).then(() => {
    el.classList.remove('red');
    el.classList.add('purple');
    wait(500);
  }).then(() => {
    el.classList.add('fade-out');
  })
}

go.addEventListener('click', animate);

const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms))

wait(200).then(() => console.log('done'));
wait(2000).then(() => console.log('done'));
