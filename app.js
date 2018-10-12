var express=require("express");
var app=  express();

app.use(express.static(__dirname + '/public'));

app.set("view engine","ejs");


app.get("/",function(req,res){
     res.render("landing");
    
})


app.get("/login",function(req,res){
    res.render("login")
});
app.get("/signup",function(req,res){
      res.render("signup");
})
app.listen(process.env.PORT,process.env.IP,function(){
     console.log("server has started");
    
})