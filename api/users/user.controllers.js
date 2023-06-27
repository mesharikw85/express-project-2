const User = require("../../models/User");
const HashPasword = require("../../utils/auth/hashpassword");
const GenerateToken = require("../../utils/auth/generateToken");

//regester
exports.signup = async (req, res, next) => {
  try {
    req.body.isStuff = false;
    //over and hash password
    req.body.password = await HashPasword(req.body.password);
    //create user
    const newUser = await User.create(req.body);
    //creat tpken
    const token = GenerateToken(newUser);
    //return token
    res.status(201).json({ token });
  } catch (error) {
    return next(error);
  }
};
//"username""Meshari_1"
//"password":"123456"
//login
exports.signin = async (req, res, next) => {
  try {
    req.body.isStuff = false;
    const newUser = await User.findOne(req.user);
    const token = GenerateToken(newUser);
    return res.status(200).json({ token });
  } catch (error) {
    return next(error);
  }
};
