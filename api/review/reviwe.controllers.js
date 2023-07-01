const Movie = require("../../models/Movie");
const Review = require("../../models/Review");
const User = require("../../models/User");

exports.fetchMovie = async (postId, next) => {
  try {
    const movie = await Movie.findById(postId);
    return movie;
  } catch (error) {
    next(error);
  }
};

exports.getReview = async (req, res, next) => {
  try {
    const reveiw = await Review.find().populate("Movielist");
    res.status(200).json(reveiw);
  } catch (error) {
    next(error);
  }
};

exports.createReview = async (req, res, next) => {
  try {
    return res.status(404).json({ message: " Need A Permission" });
    const { userId } = req.params;
    const newReview = await Review.create({ ...req.body, user: userId });
    await User.findByIdAndUpdate(userId, {
      $push: { addReview: newReview._id },
    });
    res.status(201).json(newReview);
  } catch (error) {
    return next(error);
  }
};
exports.reviewAdd = async (req, res, next) => {
  try {
    return res.status(404).json({ message: " Need A Permission" });
    const { reviewId } = req.params;
    const review = await Review.findById(reviewId);

    updatedMovie = await Movie.findByIdAndUpdate(req.movie._id, {
      $push: { reviews: review._id },
    });

    updatedReview = await Review.findByIdAndUpdate(reviewId, {
      $push: { movies: req.movie._id },
    });

    return res.status(204).end();
  } catch (error) {}
};
