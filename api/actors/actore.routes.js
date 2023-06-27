const express = require("express");
const router = express.Router();
const { addActor } = require("./actore.controllers");

router.post("/", addActor);

module.exports = router;
