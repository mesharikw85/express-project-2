const { model, Schema } = require("mongoose");
// Everything with the word temp is a placeholder that you'll change in accordance with your project

const MovieSchema = new Schema({
  name: { type: String, required: true },
  actors: { type: String, required: true },
  genre: { type: String, required: false },
  releasDate: { type: Date, default: 0 },

  // create relations in here and in the other model
  actors: [
    {
      type: Schema.Types.ObjectId,
      ref: "Actor",
    },
  ],
});

module.exports = model("Movie", MovieSchema);
