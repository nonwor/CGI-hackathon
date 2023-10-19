// User controller functions
const User = require("../models/users");

// create a user
const create = async (req, res) => {
  try {
    const user = await User.create({ ...req.body, userId: req.user._id });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

module.exports = { create };
