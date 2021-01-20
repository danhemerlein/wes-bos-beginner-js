import { fetchJoke }                  from './lib.js';
import { randomItemFromArray }        from './utils.js';
import { jokeButton, jokeHolder }     from './elements.js';
import buttonText                     from './data.js';

export async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
  jokeButton.textContent = randomItemFromArray(buttonText, jokeButton.textContent);
}
