 function callback(fn){
    const fst=require("fs")
    fst.readFile("a.txt","utf-8",function(err,dat){
        fn(dat);
    })
}




function toprint(data){
    console.log(data)
}
callback(toprint);