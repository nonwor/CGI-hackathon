const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required, trim },
  lastName: { type: String, required, trim },
  email: { type: String, required, trim, unique },
  morethan18: { type: Boolean, required },
  highschool: { type: Boolean, required },
  commitment: { type: Boolean, required },
});

module.exports = mongoose.model("User", userSchema);
