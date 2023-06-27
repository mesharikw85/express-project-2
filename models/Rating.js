const { model, Schema } = require("mongoose");
// Everything with the word temp is a placeholder that you'll change in accordance with your project

const RatingSchema = new Schema({
  name: { type: String, required: true },
  actors: { type: String, required: true },
  genre: { type: String, required: true },
  releaseDate: { type: String, required: true },

  // create relations in here and in the other model
});

module.exports = model("Rating", RatingSchema);
