export function generateOptions(options) {
  // how do you loop over an object?
  // Object.entries
  return Object.entries(options).map(([currencyCode, currencyName]) => {
    return `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
  }).join('');

};

export function formatCurrency(amount, currency) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(amount);
}
