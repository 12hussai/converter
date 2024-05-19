// Function to convert from USD to PKR
function usdToPkr(amount: number): number {
    const exchangeRate: number = 175; // 1 USD = 175 PKR
    return amount * exchangeRate;
}

// Function to convert from PKR to USD
function pkrToUsd(amount: number): number {
    const exchangeRate: number = 1 / 175; // 1 PKR = 0.005714 USD
    return amount * exchangeRate;
}

// Function to convert from EUR to PKR
function eurToPkr(amount: number): number {
    const exchangeRate: number = 195; // 1 EUR = 195 PKR
    return amount * exchangeRate;
}

// Function to convert from PKR to EUR
function pkrToEur(amount: number): number {
    const exchangeRate: number = 1 / 195; // 1 PKR = 0.005128 EUR
    return amount * exchangeRate;
}

// Function to convert from any currency to any other currency
function convertCurrency(amount: number, fromCurrency: string, toCurrency: string): number {
    const currencyMap: { [key: string]: { [key: string]: Function } } = {
        "USD": { "PKR": usdToPkr, "EUR": pkrToEur },
        "PKR": { "USD": pkrToUsd, "EUR": pkrToEur },
        "EUR": { "PKR": eurToPkr, "USD": pkrToUsd }
    };

    if (currencyMap[fromCurrency] && currencyMap[fromCurrency][toCurrency]) {
        return currencyMap[fromCurrency][toCurrency](amount);
    } else {
        throw new Error("Conversion not supported");
    }
}

// Example usage
const amount: number = 345;
const convertedAmount: number = convertCurrency(amount, "USD", "PKR");
const convertedAmount1 : number = convertCurrency(amount , "PKR" ,"USD");
console.log(`${amount} USD is ${convertedAmount} PKR`);
console.log(`${amount} PKR is ${convertedAmount1} USD`);
const convertedToPkr: number = eurToPkr(amount);
console.log(`${amount} EUR is ${convertedToPkr} PKR`);
const convertedToEur: number = pkrToEur(amount);
console.log(`${amount} PKR is approximately ${convertedToEur} EUR`);
