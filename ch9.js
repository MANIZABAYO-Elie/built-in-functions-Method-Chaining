// challege

//Using Object.entries() and map(), convert this object 
// into an array of strings like
//"name: Alice":

const person = { name: "Alice", age: 30, city: "Kigali" };
const personDetails = Object.fromEntries(Object.entries(person).map(([key, value]) => [key, typeof value === "number"]))
console.log(personDetails)