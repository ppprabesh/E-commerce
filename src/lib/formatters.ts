const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
  currency: "NPR", // Set the currency to Nepali Rupees
  style: "currency",
  minimumFractionDigits: 0, // No decimals typically for Nepali Rupees
});

export function formatCurrency(amount: number) {
  return CURRENCY_FORMATTER.format(amount);
}

const NUMBER_FORMATTER = new Intl.NumberFormat("en-US"); // Keeping the number format as en-US for familiar numeral styles

export function formatNumber(number: number) {
  return NUMBER_FORMATTER.format(number);
}
