// run this file by typing 
// http://localhost:3000/?n=30
// n= input ->query parameter
// in the chrome search bar


const express= require("express")
const app=express();
// assume app like the room of the doctor;



function calculateSum(n,p){
    
    return n+p;
}

//app .get(route,function(request,response))

app.get("/",function(req,res){
    const n=req.query.n;
    const p=req.query.p;
    const ans=calculateSum(n,p)
    res.send(ans.toString());
// send back a string ,dont send a number because it will think it as a status code
})

// address of the clinic
app.listen(3000);
// needs to be unique
