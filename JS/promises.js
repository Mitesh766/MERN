// function mitesh(){
//     // const fs=require("fs")
//     console.log("Before Promise")
//     var d=new Promise(function(resolve){
//         console.log("inside Promise")
//        resolve("Hello")
//     })
//     return d
// }


// function toprint(data){
//     console.log(data);
// }

// mitesh().then(toprint)
// // a=mitesh()
// // console.log(a)
// // console.log("Hello World")
// // setTimeout(function(){
// //     console.log("Hello2")
// // },2000)
// // console.log(a.then(toprint));







    console.log("Before Promise")
    var d=new Promise(function(resolve){
        console.log("inside Promise")
       resolve("Hello")
    })
    // return d



function toprint(data){
    console.log(data);
}

d.then(toprint)
// a=mitesh()
// console.log(a)
// console.log("Hello World")
// setTimeout(function(){
//     console.log("Hello2")
// },2000)
// console.log(a.then(toprint));





let e=new Promise(function(resolve){
resolve("HelLo WOrle")
})
e.then(function(data){
    console.log(data);
})