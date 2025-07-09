//Using chaining, filter products that have a price over $100, 
// then get their names in uppercase:

// challenge 4
const products = [
    { name: "laptop", price: 1200 },
    { name: "book", price: 30 },
    { name: "phone", price: 800 },
    { name: "pen", price: 2 },
]
const newProducts = products.filter(product => product.price > 100)
    .map(product => product.name.toUpperCase())
console.log(newProducts)