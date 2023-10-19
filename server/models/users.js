const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    password: { type: String, minLength: 3, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      match: /.+@.+\.\w+/,
    },
    morethan18: { type: Boolean, required: true },
    highschool: { type: Boolean, required: true },
    commitment: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
