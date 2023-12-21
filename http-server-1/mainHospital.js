const express=require("express")
const app=express()
var users=[{
    name:"Tanishq",
    kidneys:[
        {health:true},
        {health:false},
        {health:true}
    ]
    }]
    
    
    app.get("/",function(req,res){
        let healthyKidneys =0;
        let johnKidneys=users[0].kidneys.length
        for(i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].health){
                healthyKidneys++;
            }
        }
        let unhealthyKidneys=johnKidneys-healthyKidneys
        
        
        res.json({
            johnKidneys,
            healthyKidneys,
            unhealthyKidneys
        })
    })
    
app.use(express.json())
app.post("/",function(req,res){
     const isH=req.body.isH;
    users[0].kidneys.push({
       health:isH 
    })
    res.json(
        {msg:"Done"
    })
})

app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!(users[0].kidneys[i].health)){
            users[0].kidneys[i].health=true
        }
    }
    res.json({})
})

function abc(e){
    if(e.health){
        return e;
    }
}
function numOfUnhealthy(){
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!(users[0].kidneys[i].health)){
        return true;}
    }
}
// delete all unhealthy kidneys if any unhealthy kidney is present then only or else it will show error 411 with a message 
app.delete("/",function(req,res){
    if(numOfUnhealthy()){
    const brr=users[0].kidneys.filter(abc);
    users[0].kidneys=brr;
    res.json({msg:"done"})}
    else{
        res.status(411).json({
            msg:"You have no bad kidneys"
        })
    }
})
app.listen(3002)