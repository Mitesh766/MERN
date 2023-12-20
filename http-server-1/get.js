const express =require("express");
const port=3000;
const app=express();
app.get('/',function(req,res){
    res.send('Hello World How are you I hope fine and how are you? I am fine .')
})
app.listen(port)

