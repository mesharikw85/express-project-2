const express = require("express");
const router = express.Router();
const {
  getAllMovie,
  actorGet,
  createActore,
  actorAdd,
  fetchMovie,
  createGener,
  generAdd,
  generGet,
} = require("./movie.controller");
const passport = require("passport");

router.param("movieId", async (req, res, next, movieId) => {
  const movie = await fetchMovie(movieId, next);
  if (movie) {
    req.movie = movie;
    console.log("HELLO FROM PARAM");
    next();
  } else {
    const err = new Error("movie Not Found");
    err.status = 404;
    next(err);
  }
});

router.get("/", getAllMovie);
router.get("/actor", actorGet);
router.post("/add-actor", createActore);
router.post(
  "/actor/:movieId/:actorId",
  passport.authenticate("jwt", { session: false }),
  actorAdd
);
router.post("/add-gener", createGener);
router.post("/gener/:movieId/:generId", generAdd);
router.get("/gener", generGet);

module.exports = router;
