const express=require("express")
const app=express();
const port=3001;
 app.post('/conversation',function (req,res){
    res.send('Hello World');
 })
 app.listen(port,()=>{
    console.log(`Example ${port}`)
 })