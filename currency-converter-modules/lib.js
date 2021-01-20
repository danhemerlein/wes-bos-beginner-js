import { fromSelect, toSelect }   from "./elements.js";
import { generateOptions }        from "./utils.js";
import currencies                 from "./currencies.js";
import { handleInput }            from './handlers.js';


const endpoint      = 'https://api.exchangeratesapi.io/latest'
const ratesByBase   = {};

export async function fetchRates(base = 'USD') {
  const res = await fetch(`${endpoint}?base=${base}`);
  const data = await res.json();
  return data;
};

export async function convert(amount, from, to) {
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


export function init() {
  const form          = document.querySelector('.app form');

  const optionsHTML = generateOptions(currencies);

  // populate the options elements
  fromSelect.innerHTML = optionsHTML;
  toSelect.innerHTML = optionsHTML;

  form.addEventListener('input', handleInput);
}
