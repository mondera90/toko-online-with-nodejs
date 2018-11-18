var express = require("express");
var path = require("path");
var mongoose = require("mongoose");


//initial connect
mongoose.connect("mongodb://localhost/toko_online");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function(){
    console.log("sudah terhubung ke MongoDB");    
});

//initial apps
var app = express();


//setup view engine for directory
app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");

//setup public folder
app.use(express.static(path.join(__dirname, 'public')));

//setup halaman index
app.get('/', function(req, res){
    res.send("ini adalah halaman index ini sudah konek ke mongodb") 
});




//setup server
 var port = 8080;
app.listen(port, function(){
   console.log("server is running on port 8080"); 
    
});