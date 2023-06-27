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
//"username":"Meshari_1",
//"password":"123456"
//token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDlhZGZkYzVjODk1YmQ3NDJiYWVjMmEiLCJ1c2VybmFtZSI6Ik1lc2hhcmlfMSIsImlhdCI6MTY4Nzg3MTQ1MiwiZXhwIjoxNjg3ODc1MDUyfQ.CujYhRTD-tGPifgNT5HlwZX-KCU3ZBh5Sg0lLUKLXWY

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
