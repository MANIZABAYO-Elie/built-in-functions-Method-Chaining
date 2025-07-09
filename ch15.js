//Challenge 15

//Write a reusable function formatNames that takes an array of names and returns a
//string of capitalized names, sorted alphabetically and joined with a comma. 
// Use chaining.

const names = ["bob", "Alice", "david"]
function formatNames() {
    const upperCasedNames = [];
    for (let i = 0; i < names.length; i++) {
        upperCasedNames.push(names[i].charAt(0).toUpperCase() + names[i].slice(1))
        upperCasedNames.sort()
    }
    const joinedNames = upperCasedNames.join(",")
    return joinedNames;

}

console.log(formatNames(names))


