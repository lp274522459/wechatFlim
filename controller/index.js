"use strict";

const fs = require("fs");
const path = require("path"); 
const type = require("../models/type");

exports.showIndex = function(req, res, next){
    //let rootDir = req.app.locals.rootDir;
    /*
    fs.readdir(rootDir, function(err, files){
        if(err){
            return next(err);
        }
        let albumNames = [];
        files.forEach(function(item){
            if(fs.statSync(path.join(rootDir, item)).isDirectory()){
                albumNames.push(item);
            }
        });

        res.render("index", {
            albumNames : albumNames
        });
    });
    */
    let webTitle = req.app.locals.webTitle; 
    type.getType(function(err, result){
        
    });
    
    res.render("index", {
        webTitle : webTitle
    });
};