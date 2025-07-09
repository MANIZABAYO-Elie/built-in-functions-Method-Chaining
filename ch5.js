// challenge 5
//Use method chaining to convert the following text into "Hello World"

const text = " hello_world "
const newText = text.trim()
    .split("_")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

console.log(newText)