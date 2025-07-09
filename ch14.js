// challenge 14 
//Refactor the following code into a clean method chain:
const arr = [1, 2, 3, 4, 5];
const even = arr.filter(n => n % 2 === 0);
const doubled = even.map(n => n * 2);
const total = doubled.reduce((sum, value) => sum + value, 0);
console.log(total)