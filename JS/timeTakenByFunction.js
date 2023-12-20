
function sum(){
    let a=0;
for (let i = 0; i < 1000000000; i++) {
    a+=i;
    
}return a;
}
const date=new Date()
const before=date.getTime();

sum();
console.log(sum())
const dates=new Date()
const after=dates.getTime();



console.log(after-before)
// console.log(sum())

