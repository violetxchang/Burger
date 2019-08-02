var orm = require("../config/orm.js");

var burger={
    selectAll: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb){
        orm.create("burgers", cols, vals, cb);
    },
    updateOne: function(objColVals, condition, cb){
        orm.update("burgers", objColVals, condition, cb);
    },
    deleteOne: function(condition, cb){
        orm.delete("burgers", condition, cb);
    }
};

module.exports=burger;