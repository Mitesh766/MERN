//ugly way of doing checks and authentication




const express = require("express");
const app=express();

app.get("/",function(req,res){
    const username=req.headers.username;
    const password=req.headers.password;
    const kidneyId=req.query.kidneyId;
if(username != "Harish" ||  password != "Ab@123"){
 res.status(400).json({
    msg:"Invalid input"
 })

 return ;
}
if(kidneyId!=1 && kidneyId!=2){
    res.status(400).json({
        msg:"Not match"
    })
    return;
}

res.send("OK");
})
app.listen(3000)