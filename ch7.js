// challenge 7
//Chain methods to extract words longer than 4 characters, capitalize them, and
//reverse the order:
const sentence = "Method chaining makes code clear and readable"
const reversedSentence = sentence.split(" ").filter(word => word.length > 4)
    .map(word => word.toUpperCase())
    .reverse()
    .join(" ")

console.log(reversedSentence)