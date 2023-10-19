const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: /.+@.+\.\w+/,
  },
  password: { type: String, required: true, minLength: 3 },
});

module.exports = mongoose.model("Admin", adminSchema);
