const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required, trim },
  lastName: { type: String, required, trim },
  email: { type: String, required, trim },
  age: { type: Number, required, trim },
  location: { type: String, required },
  userId: { type: Schema.Types.ObjectId },
});

module.exports = mongoose.model("User", userSchema);
