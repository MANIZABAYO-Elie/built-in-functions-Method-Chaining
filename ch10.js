// Challenge 10
//Take this array of prices, add 10% tax to each, round to 2 decimal places, 
// and return the updated array:

const prices = [100, 59.99, 200, 20.5];
const taxedPrices = prices.map(price => (price + (price * 0.1)).toFixed(2))
                           .map(price=>Number(price))
console.log(taxedPrices)

