"use strict";

const movieModel = require("../models/movie");

exports.getMovies = function(req, res, next){
    movieModel.getMovies(function(err, result){
        if(err){
            throw new Error(err);
        }
        res.render("movie_article", {

        });

    });
};

