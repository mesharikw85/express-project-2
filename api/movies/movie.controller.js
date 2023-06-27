const Movies = require("../../models/Movie");

//As a user, I can see a list of all movies
exports.getAllMovie = async (req, res, next) => {
  try {
    const movies = await Movies.find(req.body).populate("actors");
    res.status(201).json(movies);
  } catch (error) {
    return next(error);
  }
};
