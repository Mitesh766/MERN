// function  miteshReadFile(cb){
//     const fs=require("fs");
//     fs.readFile("a.txt","utf-8",function(err,data){
//         cb(data);
//     });
// };
// function onDone(data){
//     console.log(data);
// }
// miteshReadFile(onDone);



const fs=require("fs")
function miteshReadFile(){
    console.log("inside miteshReadFile")
    return new Promise(function(resolve){
        console.log("inside promise")
       
        resolve("hello");
        console.log("more inside")
        
    })
}
function onDone(data){
    console.log(data)
}
var a=miteshReadFile()
console.log(a)
miteshReadFile().then(onDone);