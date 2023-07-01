const express = require("express");
const uploader = require("../../middlewares/uploader");
const {
  signup,
  signin,
  getMovie,
  getAllAccount,
  addMovie,
} = require("./user.controllers");
const router = express.Router();
const passport = require("passport");

router.post("/signup", uploader.single("profileImage"), signup);
router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signin
);
// router.post("/:staffId", addActor);
router.get("/", getAllAccount);
router.post(
  "/add-m",
  passport.authenticate("jwt", { session: false }),
  addMovie
);
router.get("/listmovie", getMovie);

module.exports = router;
