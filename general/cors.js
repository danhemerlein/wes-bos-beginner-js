const baseEndpoint = 'http://www.recipepuppy.com/api';
const proxy = 'https://cors-anywhere.herokuapp.com/'
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  return data;
}

// what does CORS mean - Cross Origin Resource Sharing
// what are origins?
// danhemerlein.com and github.com are origins
// if you want to share data between the two - by default you can't share data between domain names
// CORS policy - something that happens on the server - danhemerlein.com is allowed to ask for data and it will be returned.

// need to add a proxy between localhost and recipepuppy
// you either have to build one of these yourself or you can use a CORS PROXY
// don't use this for something with sensitive data - running your own server is more secure

async function handleSubmit(event) {
  event.preventDefault();
  fetchAndDisplay(form.query.value);
}

function displayRecipes(recipes) {
  const html = recipes.map(recipe => {
    return `
      <div class="recipe">
        <h2>${recipe.title}</h2>
        <p>${recipe.ingredients}</p>
        ${recipe.thumbnail &&
          `<img src="${recipe.thumbnail}" alt="${recipe.title}">`
        }
        <a href="${recipe.href}" target="_blank"> view recipe </a>
      </div>
    `
  });
  recipesGrid.innerHTML = html.join('');
}

async function fetchAndDisplay(query) {
  // turn the form off
  form.submit.disabled = true;
  // submit the search
  const recipes = await fetchRecipes(query);
  form.submit.disabled = false;
  displayRecipes(recipes.results);
}

form.addEventListener('submit', handleSubmit)

fetchAndDisplay('pizza');
