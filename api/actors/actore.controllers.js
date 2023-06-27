const Actor = require("../../models/Actor");

//As a staff member, I can add celebrities
exports.addActor = async (req, res, next) => {
  try {
    const newActor = await Actor.create(req.body);
    res.status(201).json(newActor);
  } catch (error) {
    next(error);
  }
};
