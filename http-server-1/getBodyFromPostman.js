const express=require("express")
const bodyParser=require("body-parser")
const app=express();
const port=3001;
app.use(bodyParser.json());
 app.post('/conversation',function (req,res){
    console.log(req.headers["authorization"])
    console.log(req.body)
    res.send('Hello');
 })
 app.listen(port,()=>{
    console.log(`Example ${port}`)
 })