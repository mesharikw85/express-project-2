const { model, Schema } = require("mongoose");
// Everything with the word temp is a placeholder that you'll change in accordance with your project

const GenerSchema = new Schema({
  name: { type: String, required: true },
  movie: { type: String, required: true },

  // create relations in here and in the other model
});

module.exports = model("Gener", GenerSchema);
