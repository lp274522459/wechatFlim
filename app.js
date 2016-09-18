"use strict";

const express = require("express"); 
const router = require("./router");
const path = require("path");
const config = require("./config");


const app = express();

app.set("views", path.join(__dirname, "views")); 
app.set('view engine', 'ejs');  

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
    app.locals.webTitle = config.webTitle;
    next();
});
 
app.use(router); 

if(config.debug){
    app.use(function(err, req, res, next){
        res.send(`error:${err.message}`);
    });
}

app.listen("3000", function(){
    console.log("success");
});