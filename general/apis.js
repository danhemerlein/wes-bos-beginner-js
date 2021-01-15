// AJAX
// Async
// JavaScript
// And
// XML - another way to receive data - rare unless you go work at a large bank

// an endpoint is URL that you need to visit to get the data
const baseEndpoint = "https://api.github.com";
const usersEndpoint = `${baseEndpoint}/users`;
const userEl = document.querySelector('.user');

async function displayUser(username) {
  // in order to get the data - used fetch() which is built into all browsers

  userEl.textContent = 'loading'
  // double promise, the first one gets the response and the second one gets the data
  response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json()
  console.log(data);
  userEl.textContent = `${data.name} - ${data.blog}`
}

function handleError(error) {
  console.log(error);
  userEl.textContent = `something went wrong: ${error}`;
}

// displayUser('dogface');
displayUser('danhemerlein').catch(handleError);
