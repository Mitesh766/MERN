function Abc(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("HIthere");
        },2000)
    })
    
}
async function main(){
    let value= await Abc();
    console.log(value);
    console.log("Mitesh")
}





main();
console.log("hi")