const User = require("../../models/User");
const HashPasword = require("../../utils/auth/hashpassword");
const GenerateToken = require("../../utils/auth/generateToken");
const Actor = require("../../models/Actor");
const Movie = require("../../models/Movie");

//regester the user
exports.signup = async (req, res, next) => {
  try {
    // if (req.file) {
    //   req.body.profileImage = `${req.file.path}`;
    // }
    //over and hash password
    req.body.password = await HashPasword(req.body.password);
    //create user
    delete req.body.isStaff;
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    //creat tpken
    const token = GenerateToken(newUser);
    //return token
    res.status(201).json({ token });
  } catch (error) {
    return next(error);
  }
};

//log in user
exports.signin = async (req, res, next) => {
  try {
    console.log(req.user);
    const newUser = await User.findOne(req.user);
    const token = GenerateToken(newUser);
    return res.status(200).json({ token });
  } catch (error) {
    return next(error);
  }
};

exports.getAllAccount = async (req, res, next) => {
  try {
    req.body.isStaff = true;
    const staff = await User.find();
    res.status(200).json(staff);
  } catch (error) {
    next(error);
  }
};

exports.addMovie = async (req, res, next) => {
  try {
    if (!req.user.isStaff) {
      return res.status(404).json({ message: " Need A Permission" });
    }
    const newMovie = await Movie.create(req.body);

    res.status(201).json(newMovie);
  } catch (error) {
    return next(error);
  }
};
exports.getMovie = async (req, res, next) => {
  try {
    req.body.isStaff = false;
    const detailMovie = await Movie.find();
    return res.status(200).json(detailMovie);
  } catch (error) {
    return next(error);
  }
};
