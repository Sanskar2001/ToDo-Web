const express = require('express');
const bodyParser= require('body-parser');
const app=express();
var items=["1","2","3"];


app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs")
var today= new Date();
var currentDay=today.getDay();
var day="";
var item="";
switch (currentDay) {
    case 0:
    day="Sunday";
    break;

    case 1:
     day="Monday";
     break;

    case 2:
    day="Tuesday";
    break;

    case 3:
    day="Wednessday";
    break;

    case 4:
    day="Thursday";
    break;

    case 5:
    day="Friday";
    break;

    case 6:
    day="Saturday";
    break;

    default:
        break;
}


app.get('/',(req,res)=>{
  res.render("list",{day:day,newsListItems:items})
})




app.post('/',(req,res)=>{
    console.log(req.body.txtbox)
     item=req.body.txtbox
     items.push(item)
    res.redirect("/")
    
 })


app.listen(3000,()=>{
    console.log("Server started on http://localhost:3000");
})