const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isStuff: { type: String, required: true },
  // create relations in here and in the other model
  listmovies: [
    {
      type: Schema.Types.ObjectId,
      ref: "Movie",
    },
  ],
});

module.exports = model("User", UserSchema);
