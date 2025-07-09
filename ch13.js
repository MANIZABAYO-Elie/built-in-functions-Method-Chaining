// challenge 13

//Using map(), transform this list of users by adding a new property isActive: true
//without mutating the original array:

 const users = [
    { name:"John"},
    { name:"Jane"},
    { name:"Doe"},
    
]
const transformedUsers= users.map(user=>({...user,isActive:"true"}) )
console.log(transformedUsers)