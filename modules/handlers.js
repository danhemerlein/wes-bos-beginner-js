export async function handleButtonClick(event) {
  // this is an on-demand import
  const {localCurrency, default: currency } = await import('./currencies.js')
  console.log(localCurrency);
  console.log(currency);
}
