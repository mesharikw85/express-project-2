const Actor = require("../../models/Actor");

//As a staff member, I can add celebrities
exports.addActor = async (req, res, next) => {
  //   try {
  //     req.body.isStuff = true;
  //     const { staffId } = req.params;
  //     const addactor = await Actor.create({ ...req.bod, staff: staffId });
  //     await User.findOneAndUpdate(staffId, { push: { actors: addactor._id } });
  //     res.status(201).json(addactor);
  //   } catch (error) {
  //     return next(error);
  //   }
  try {
    const newActor = await Actor.create(req.body);
    res.status(201).json(newActor);
  } catch (error) {
    next(error);
  }
};
