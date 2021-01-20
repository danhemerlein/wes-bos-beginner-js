const jokeButton = document.querySelector('.get-joke');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');

const buttonText = [
  'Ugh.',
  '🤦‍♀️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it',
  'please stop',
  'that was the worst one',
];

// what is a header - sort of like sending query parameters
// accept header

async function fetchJoke() {
  loader.classList.remove('hidden');
  jokeButton.classList.add('hidden');
  // fetch takes a second argument - an object of headers
  const res = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    }
  });
  const data = await res.json();
  loader.classList.add('hidden');
  jokeButton.classList.remove('hidden');
  return data;
}

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];

  if (item === not) {
    return randomItemFromArray(arr, not);
  } else {
    return item;
  }
}

async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
  jokeButton.textContent = randomItemFromArray(buttonText, jokeButton.textContent);
}

jokeButton.addEventListener('click', handleClick);

