const express=require("express")
const app=express();


var users=[
    {
        name:"John",
    kidneys:[{
        healthy:true
    },{
        healthy:false
    },{
    healthy:true
}]
}]

app.use(express.json())
app.get("/",function(req,res){
const johnkidneys=users[0].kidneys;
const numberofKidneys=johnkidneys.length;
let numberOfHealthyKidneys=0;
for(let i=0;i<johnkidneys.length;i++){
    if(johnkidneys[i].healthy){
        numberOfHealthyKidneys+=1;
    }
}
const numberOfUnhealthyKidneys=numberofKidneys-numberOfHealthyKidneys;
res.json({
    numberofKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys
})
})
// adding a new kidney 
app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy;
    //taking input from postman
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done"
    })
})
//  send post request from postman that in body of json format
// {isHealthy:true/false}



// updating all kidneys to healthy
// do put request from postman
app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({})
})


// removing all the unhealthy kidneys
// send a delete request from postman
app.delete("/",(req,res)=>{
    const newKidneys=[];
    for(let i=0;i<users[0].kidneys.length;i++){
if(users[0].kidneys[i].healthy){
    newKidneys.push({
        healthy:true
    })
}
    }
    users[0].kidneys=newKidneys;
    res.json({
        msg:"done"
    })
})

app.listen(3001)