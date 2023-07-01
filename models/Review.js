const { model, Schema } = require("mongoose");

const ReviewSchema = new Schema({
  rating: { type: Number },
  text: { type: String, required: true },
  Movielist: { type: Schema.Types.ObjectId, ref: "Movie" },
  userId: { type: Schema.Types.ObjectId, ref: "User" },

  // create relations in here and in the other model
});

module.exports = model("Review", ReviewSchema);
