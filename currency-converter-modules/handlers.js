import { convert }          from "./lib.js";
import { formatCurrency }   from "./utils.js";
import { fromInput, fromSelect, toSelect, toEl } from "./elements.js";

export async function handleInput(event) {
  event.preventDefault();
  // this will change with the different inputs
  // console.log(event.target);
  // this will always be the form since we are listening on the form itself
  // console.log(event.currentTarget);

  const rawAmount = await convert(fromInput.value, fromSelect.value, toSelect.value);

  toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}
