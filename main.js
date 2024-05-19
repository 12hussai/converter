// Function to convert from USD to PKR
function usdToPkr(amount) {
    var exchangeRate = 175; // 1 USD = 175 PKR
    return amount * exchangeRate;
}
// Function to convert from PKR to USD
function pkrToUsd(amount) {
    var exchangeRate = 1 / 175; // 1 PKR = 0.005714 USD
    return amount * exchangeRate;
}
// Function to convert from EUR to PKR
function eurToPkr(amount) {
    var exchangeRate = 195; // 1 EUR = 195 PKR
    return amount * exchangeRate;
}
// Function to convert from PKR to EUR
function pkrToEur(amount) {
    var exchangeRate = 1 / 195; // 1 PKR = 0.005128 EUR
    return amount * exchangeRate;
}
// Function to convert from any currency to any other currency
function convertCurrency(amount, fromCurrency, toCurrency) {
    var currencyMap = {
        "USD": { "PKR": usdToPkr, "EUR": pkrToEur },
        "PKR": { "USD": pkrToUsd, "EUR": pkrToEur },
        "EUR": { "PKR": eurToPkr, "USD": pkrToUsd }
    };
    if (currencyMap[fromCurrency] && currencyMap[fromCurrency][toCurrency]) {
        return currencyMap[fromCurrency][toCurrency](amount);
    }
    else {
        throw new Error("Conversion not supported");
    }
}
// Example usage
var amount = 345;
var convertedAmount = convertCurrency(amount, "USD", "PKR");
var convertedAmount1 = convertCurrency(amount, "PKR", "USD");
console.log("".concat(amount, " USD is ").concat(convertedAmount, " PKR"));
console.log("".concat(amount, " PKR is ").concat(convertedAmount1, " USD"));
var convertedToPkr = eurToPkr(amount);
console.log("".concat(amount, " EUR is ").concat(convertedToPkr, " PKR"));
var convertedToEur = pkrToEur(amount);
console.log("".concat(amount, " PKR is approximately ").concat(convertedToEur, " EUR"));
