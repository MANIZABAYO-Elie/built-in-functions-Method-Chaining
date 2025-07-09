// Challenge 6
//From this list, return only the names of users with role "admin" 
// and capitalize the names:
const users = [
    { name: "alice", role: "admin" },
    { name: "bob", role: "user" },
    { name: "charlie", role: "admin" },

];
const adminUsers = users.filter(user => user.role === "admin")
    .map(user => user.name.toUpperCase())
console.log(adminUsers)