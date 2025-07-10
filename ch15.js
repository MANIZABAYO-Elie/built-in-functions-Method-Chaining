//Challenge 15

//Write a reusable function formatNames that takes an array of names and returns a
//string of capitalized names, sorted alphabetically and joined with a comma. 
// Use chaining.

const names = ["bob", "alice", "david"]
function formatNames() {
    const capitalisedNames = [];
    for (let i = 0; i < names.length; i++) {
        capitalisedNames.push(names[i].charAt(0).toUpperCase() + names[i].slice(1))
        capitalisedNames.sort()
    }
    const joinedNames = capitalisedNames.join(",")
    return joinedNames;

}

console.log(formatNames(names))


