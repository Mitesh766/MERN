const fs=require("fs")

fs.readFile("a.txt","utf-8",function(err,data){
console.log(data)
})
console.log("Hello")
let a=1;
for(i=0;i<100000000;i++){
a+=i;
}
console.log(a);