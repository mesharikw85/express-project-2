const express = require("express");
const router = express.Router();
const { addActor } = require("./actore.controllers");

router.post("/:staffId", addActor);

module.exports = router;
