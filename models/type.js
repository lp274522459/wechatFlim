"use strict";

const db = require("db");

exports.getType = function(callback){
    let sql = "select typeName from type";
    db.query(sql, function(err, result){
        if(err){
            return callback(err, null);
        }
        callback(null, result);
    });
};