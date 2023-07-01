const express = require("express");
const {
  createReview,
  getReview,
  reviewAdd,
  fetchMovie,
} = require("./reviwe.controllers");
const router = express.Router();
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

router.post(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  createReview
);
router.get("/", getReview);
router.post(
  "/:movieId/:reviewId",
  passport.authenticate("jwt", { session: false }),
  reviewAdd
);

module.exports = router;
