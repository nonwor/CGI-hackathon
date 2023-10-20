const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true }
},
{
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      // Remove the 'password' field from the JSON representation
      delete ret.password;
    }
  }
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;