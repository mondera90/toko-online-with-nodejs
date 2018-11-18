var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var config = require("./config/database");
var bodyParser = require("body-parser");
var session = require("express-session");
var expressValidator  = require("express-validator");



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
app.set("view engine", "ejs");

//setup public folder
app.use(express.static(path.join(__dirname, 'public')));

//set routes
var pages = require('./routes/pages.js');
var adminPages = require('./routes/adminPages.js');

//set redirect
app.use('/', pages);
app.use('/admin/pages', adminPages);

/** MIDDLEWARE */

//setup body-parser
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

//Setup session middleware
app.use(
	session({
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: true,
		cookies: { secure: true}

	}));


//setup  validator middleware
app.use(expressValidator({
  errorFormatter: function (param, msg, value) {
    var namespace = param.split('.')
            , root = namespace.shift()
            , formParam = root;

    while (namespace.length) {
        formParam += '[' + namespace.shift() + ']';
    }
    return {
        param: formParam,
        msg: msg,
        value: value
    };
  }
}));

// Setup express messages middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});


//setup server
 var port = 8080;
app.listen(port, function(){
   console.log("server is running on port 8080"); 
    
});