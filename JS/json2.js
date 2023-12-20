const users='{"name":"Mitesh","age":24,"pincode":2343}'
console.log(users["0"])
// converts string into object
const user2=JSON.parse(users)
console.log(user2["age"])




const user3={
    name:"Mitesh",
    age:"19",
    gender:"Male"
}
 const final=JSON.stringify(user3)
console.log(final) 