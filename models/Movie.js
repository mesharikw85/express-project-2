const { model, Schema } = require("mongoose");

const MovieSchema = new Schema({
  name: { type: String, required: true },
  releasDate: { type: Date, default: 0 },

  // create relations in here and in the other model
  actors: [
    {
      type: Schema.Types.ObjectId,
      ref: "Actor",
    },
  ],
  genres: [
    {
      type: Schema.Types.ObjectId,
      ref: "Gener",
    },
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

module.exports = model("Movie", MovieSchema);
