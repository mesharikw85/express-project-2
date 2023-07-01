const Movie = require("../../models/Movie");
const Actor = require("../../models/Actor");
const Gener = require("../../models/Gener");

exports.fetchMovie = async (postId, next) => {
  try {
    const movie = await Movie.findById(postId);
    return movie;
  } catch (error) {
    next(error);
  }
};

//As a user, I can see a list of all movies
exports.getAllMovie = async (req, res, next) => {
  try {
    const movies = await Movie.find()
      .populate("actors")
      .populate("genres")
      .populate("reviews");
    res.status(201).json(movies);
  } catch (error) {
    return next(error);
  }
};

exports.createActore = async (req, res, next) => {
  try {
    const actor = await Actor.create(req.body);
    return res.status(201).json(actor);
  } catch (error) {
    next(error);
  }
};

exports.actorGet = async (req, res, next) => {
  try {
    const actor = await Actor.find().populate("movies");
    res.status(201).json(actor);
  } catch (error) {
    return next(error);
  }
};

exports.actorAdd = async (req, res, next) => {
  try {
    console.log(req.user.username);
    if (!req.user.isStaff)
      return res.status(404).json({ message: " Need A Permission" });
    const { actorId } = req.params;
    const actor = await Actor.findById(actorId);
    if (!actor) return res.status(404).json({ message: "Actor not found" });

    await Movie.findByIdAndUpdate(req.movie._id, {
      $push: { actors: actor._id },
    });

    await Actor.findByIdAndUpdate(actorId, {
      $push: { movies: req.movie._id },
    });

    return res.status(201).end();
  } catch (error) {
    next(error);
  }
};

exports.createGener = async (req, res, next) => {
  try {
    const gener = await Gener.create(req.body);
    return res.status(201).json(gener);
  } catch (error) {
    next(error);
  }
};

exports.generGet = async (req, res, next) => {
  try {
    const gener = await Gener.find().populate("movies");
    res.status(201).json(gener);
  } catch (error) {
    return next(error);
  }
};

exports.generAdd = async (req, res, next) => {
  try {
    const { generId } = req.params;
    const gener = await Gener.findById(generId);

    await req.movie.updateOne({
      $push: { genres: gener._id },
    });

    await gener.updateOne({
      $push: { movies: req.movie._id },
    });

    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};
