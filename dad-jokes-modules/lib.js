import { loader, jokeButton } from './elements.js';

// what is a header - sort of like sending query parameters
// accept header
export async function fetchJoke() {
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
