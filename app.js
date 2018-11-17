var express = require("express");
var path = require('path');

//initial apps
var app = express();


//setup view engine for directory
app.set("views", path.join(_dirname, "views"));
app.set("views engine", "ejs");

//setup public folder
app.use(express.static(path.join(_dirname, 'public')));


//setup server
 var port = 8080;
app.listen(port, function(){
   console.log("server is running on port 8080"); 
    
});