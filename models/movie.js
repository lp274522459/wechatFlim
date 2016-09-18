"use strict";

const db = require("./db");

function Movie(movie){

}

Movie.getHotMovies = function(){


};

Movie.getMovies = function(callback){
    let sql = "select * from movie order by id desc limit 5";
    db.query(sql, function(err, result){
        if(err){
            return callback(err, null);
        }
        callback(null, result); 
    });
};

module.exports = Movie;