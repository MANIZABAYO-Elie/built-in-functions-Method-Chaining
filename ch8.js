// Challenge

//Use array methods to remove duplicates from the following list and sort it
//alphabetically:

const skills = ["JS", "React", "Node", "JS", "React"]
const removedDuplicate = [...new Set(skills)].sort()
console.log(removedDuplicate)