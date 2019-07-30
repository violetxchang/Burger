var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

//serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//parse application body
app.use(express.urlencoded({ extended:true}));
app.use(express.json());

//set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//import routes & give the server access to them
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//star server so it can begin listening
app.listen(PORT, function(){
    //log when server has started
    console.log("Server listening on: "+PORT);
});