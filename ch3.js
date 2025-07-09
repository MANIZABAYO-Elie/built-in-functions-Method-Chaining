//Given this array of strings, remove empty strings, convert all to lowercase, 
//and reverse the order:
const tags = ["JS", "", "REACT", "NODE", "", "EXPRESS"]
const reversedTags = tags.filter(tag => tag !== "")
    .map(tag => tag.toLowerCase())
    .reverse()
console.log(reversedTags)