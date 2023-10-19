const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email: { type: String, required, trim },
  password: { type: String, required, minlength: 3 },
});

module.exports = mongoose.model("Admin", adminSchema);
