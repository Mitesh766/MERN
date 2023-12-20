// // function square(a){
// //     return a*a;
// // }
// // function cube(a){
// //     return a*a*a;
// // }




// // function sumOfSomething(a,b,fn){
// //     return fn(a)+fn(b);
// // }




// // console.log(sumOfSomething(1,2,cube))

// // function onDone(data){
// //     console.log(data)
// // }
// const fs=require("fs")
// fs.readFile("a.txt","utf-8",(err,data)=>{
//     console.log(data)
//     data+="Hello";
// })
// fs.writeFile("a.txt");

// for(let i=0;i<10;i++){
//     console.log(i);
// }


//  function myOWn(fn,du){
//     setTimeout(fn,du);
// }




// myOWn(function() {
//     console.log("Hello WOrld");
//      },2000);



// setTimeout(function(){
//     console.log("Hello WOrld")
//     setTimeout(function(){
//         console.log("HI");
//     },2000)
// },1000)

function myDad(){
    return new Promise(function(resolve){
        resolve("hello");
    })
}

function onDone(data){
    console.log(data);
}

myDad().then(onDone)