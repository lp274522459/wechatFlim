"use strict";

const express = require("express");
const indexController = require("./controller/index.js");
const movieController = require("./controller/movie.js");
const router = express.Router();


router.get("/", indexController.showIndex);
router.get("/movies", movieController.getMovies);

module.exports = router;