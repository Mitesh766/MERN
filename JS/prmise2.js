
function myDad(duration){
    return new Promise(function(resolve){
setTimeout(function(){
    resolve();
},duration);
    })
    
}



b=myDad(3000)
b.then(function(){
    console.log("Hello World");
})