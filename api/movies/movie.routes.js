const express = require("express");
const router = express.Router();
const { getAllMovie } = require("./movie.controller");

router.get("/", getAllMovie);

module.exports = router;
