import { isValidColor } from './colors';

export function handleResult(event) {
  const results = event.results;
  const words = results[results.length - 1][0].transcript;
  // lowercase everything
  let color = words.toLowerCase();
  // strip any spaces out
  color = color.replace(/\s/g, '');
  // check if it is a valid color
  if (!isValidColor(color)) {
    return;
  }
  // if it is, then show the UI for that
  const colorEl = document.querySelector(`.${color}`);
  colorEl.classList.add('got')
  console.log(colorEl);
}
