// challenge 1
const numbers =[2,5,8,10,3]
const result = numbers.map(num=>num*2).filter(num=>num<10).sort((a,b)=>b-a)
//console.log(result)

// challenge 2 
const string = " learn-javascript "
const trimedString = string.trim().toUpperCase().replace("-"," ")
//console.log(trimedString)
// challenge 3
const tags= ["JS","","REACT","NODE","","EXPRESS"]
const reversedTags = tags.filter(tag=>tag!=="")
                         .map(tag=>tag.toLowerCase())
                         .reverse()
//console.log(reversedTags)
// challenge 4
const products = [
    { name:"laptop", price:1200},
    { name:"book", price:30},
    { name:"phone", price:800},
    { name:"pen", price:2},
]
const newProducts = products.filter(product=>product.price>100)
                            .map(product=>product.name.toUpperCase())
console.log(newProducts)

// challenge 5
const text = " hello_world "
     newText = text.trim()
                   .split("_")
                   .map(word=>word.charAt(0).toUpperCase()+word.slice(1))
                   .join(" ")
                 
//console.log(newText)
// challenge 6
 const users = [
    { name:"alice",role:"admin"},
    { name:"bob",role:"user"},
    { name:"charlie",role:"admin"},

 ];
 const adminUsers = users.filter(user=>user.role==="admin")
                         .map(user=>user.name.toUpperCase())
 //console.log(adminUsers)

 // challenge 7
 const sentence = "Method chaining makes code clear and readable"
   const  reversedSentence = sentence.split(" ").filter(word=>word.length>4)
                                     .map(word=>word.toUpperCase())
                                     .reverse()
                                     .join(" ")
                                    
  // console.log(reversedSentence)

// challenge 8
const skills = [ "JS","React","Node","JS","React"]
 const removedDuplicate =  [...new Set(skills)].sort()
 //console.log(removedDuplicate)
 // challenge 9
 const person = {name:"Alice" , age:30 , city:"Kigali"};
 const personDetails =  Object.fromEntries(Object.entries(person).map(([key,value])=>[key,typeof value==="number"]))
 //console.log(personDetails)
 // challenge 10 
 const prices = [100,59.99,200,20.5];
 const taxedPrices = prices.map(price=>(price+(price*0.1)).toFixed(2))
 //console.log(taxedPrices)

 // challenge 11

 const nums =[1,4,6,9,10,13,14] 
       countEvenNums = nums.filter(num=>num%2===0).length;
       console.log(countEvenNums)

// challenge 12
const myWord = "javascript-is-fun"
     splitedWord = myWord.split("-")
                        .map(word=>word.charAt(0).toUpperCase()+word.slice(1))
                        .join(" ")

     console.log(splitedWord)

     // challenge 13
     const myUsers = [
    { name:"John"},
    { name:"Jane"},
    { name:"Doe"},
    
]
const transformedUsers= myUsers.map(user=>({...user,isActive:"true"}) )
//console.log(transformedUsers)

// challenge 14
const arr = [1,2,3,4,5];
const even  = arr.filter(n=>n%2===0);
const doubled= even.map(n=>n*2);
const total = doubled.reduce((sum,value)=>sum+value,0);
console.log(total)

// challenge 15
const names=["bob","Alice","david"]
function formatNames(){
    const  upperCasedNames= [];
    for (let i = 0; i < names.length; i++) {
        upperCasedNames.push(names[i].charAt(0).toUpperCase()+names[i].slice(1))
        upperCasedNames.sort()
    }
    const joinedNames = upperCasedNames.join(",")
    return joinedNames;

}

console.log(formatNames(names))

