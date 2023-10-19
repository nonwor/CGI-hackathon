const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required, trim },
  lastName: { type: String, required, trim },
  email: { type: String, required, trim },
  age: { type: Number, required, trim },
  location: { type: String, required },
});

module.exports = mongoose.model("User", userSchema);
