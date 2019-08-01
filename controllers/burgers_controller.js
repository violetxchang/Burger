var express = require("express");

var router=express.Router();

//import the model (burger.js) to use it's database functions
var burger=require("../models/burger.js");

//create all our routes and set up logic within those routes where reqired
router.get("/", function(req,res){
    burger.all(function(data){
        var hbsObject={
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req,res){
    burger.create([
        "name", "chomped"
    ], [
        req.body.name, req.body.chomped
    ], function(result){
        //send back the id of the new quote
        res.json({ id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req,res){
    var condition="id = "+req.params.id;

    console.log("condition", condition);

    burger.update({
        chomped: req.body.chomped
    }, condition, function(result){
        if(result.changedRows==0){
            //if no rows were changed, then the id must not exist, so 404
            return res.status(404).end();
        } else{
            res.status(200).end();
        }
    });
});

router.delete("/api/cats/:id", function(req,res){
    var condition="id = " + req.params.id;

    burger.delete(condition, function(result){
        if(result.affectedRows==0){
            //if no rows were changed, then the id must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//export routes for server.js to use
module.exports=router;