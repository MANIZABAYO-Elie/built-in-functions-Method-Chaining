//challenge 12
//Convert the string "javascript-is-fun" into "Javascript Is Fun" 
// using string built-in methods.

const myWord = "javascript-is-fun"
splitedWord = myWord.split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

console.log(splitedWord)