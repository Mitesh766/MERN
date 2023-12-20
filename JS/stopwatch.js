function stopwatch(){
    console.log(new Date().getHours(),new Date().getMinutes(),new Date().getSeconds());
    // console.log("Hello World")
}
 setInterval(stopwatch,1000)