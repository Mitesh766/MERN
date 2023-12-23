const express=require("express")
const app=express();

 function userMiddleware(req,res,next){
    const username= req.headers.username
    const password=req.headers.password
    const kidneyId=req.query.kidneyId
    if(username !="Harish" || password !="Ab@123"){
        res.status(400).json({
            msg:"Invalid input"
        })
    }
    else{
        next();
    }
 }

 function kidneyIdMiddleware(req,res,next){
    const username= req.headers.username
    const password=req.headers.password
    const kidneyId=req.query.kidneyId
  
    if(kidneyId !=1 && kidneyId !=2){
        res.status(400).json({
            msg:"Wrong match"
        })
    }
        else{
            next();
        }
    
 }
// if userMiddleware satisfies the condition it goes to kidneyIdMiddleware function, if this also satisfies than it goes to  function(req,res)
 app.get("/health-checkup",userMiddleware,kidneyIdMiddleware,function(req,res){
   
    res.send("Health checkup successfully completed")
 })
 app.listen(3000)




// const app = express();
// function userMiddleware(req, res, next) {
// if (username != "harkirat" || password != "pass") { res.status(403).json({
// msg: "Incorrect inputs",
// });
// } else {
// next();
// }
// function kidneyMiddleware(req, res, next) { if (kidneyId != 1 && kidneyId != 2) { res.status(403).json({
// msg: "Incorrect inputs",
// }); } else {
// next();
// }
// };
// app.get("/health-checkup", userMiddleware, kidneyMiddleware, function (req, res) { // do something with kidney here
// res.send("Your heart is healthy");
// });
// app.get("/kidney-check", userMiddleware, kidneyMiddleware, function (req, res) { // do something with kidney here
// });
// res.send("Your heart is healthy");
// app.get("/heart-check", userMiddleware, function (req, res) {
// Q // do something with user here
// res.send("Your heart is healthy");
// });