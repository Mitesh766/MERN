function greet(){
    for(i=0;i<5;i++){
        console.log("Hello");
    }
    
}
// Call the function greet after 3000 milli seconds i.e after 3 seconds
setTimeout(greet,2*1000);



// Calls the greet function after every 1 second
// setInterval(greet,1*1000);