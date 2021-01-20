const fromSelect = document.querySelector('[name="from_currency"]');
const fromInput = document.querySelector('[name="from_amount"]');
const toSelect = document.querySelector('[name="to_currency"]');
const toEl = document.querySelector('.to-amount');
const endpoint = 'https://api.exchangeratesapi.io/latest'
const ratesByBase = {};
const form = document.querySelector('.app form');

const currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro',
};

function generateOptions(options) {
  // how do you loop over an object?
  // Object.entries
  return Object.entries(options).map(([currencyCode, currencyName]) => {
    return `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
  }).join('');

};

async function fetchRates(base = 'USD') {
  const res = await fetch(`${endpoint}?base=${base}`);
  const data = await res.json();
  return data;
};

async function convert(amount, from, to) {
  // we could fetch the rates each time - but that could be a bit sloww
  // we need to cache the rates if we already have them

  // first check if we even have the rates to convert from that currency

  if (!ratesByBase[from]) {
    console.log(`oh no we don't have ${from} to convert ${to}. so we need to fetch it`);
  }

  const rates = await fetchRates(from);
  // store them for next time
  ratesByBase[from] = rates;
  // convert the amount that they passed in
  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  // console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
  return convertedAmount;

}

convert(100, 'CAD', 'USD')

fetchRates();

const optionsHTML = generateOptions(currencies);

// populate the options elements
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

function formatCurrency(amount, currency) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(amount);
}

async function handleInput(event) {
  event.preventDefault();
  // this will change with the different inputs
  // console.log(event.target);
  // this will always be the form since we are listening on the form itself
  // console.log(event.currentTarget);

  const rawAmount = await convert(fromInput.value, fromSelect.value, toSelect.value);

  toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}

form.addEventListener('input', handleInput);
