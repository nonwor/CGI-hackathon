// admin controller functions
const Admin = require("../models/admins");

// create an admin
const create = async (req, res) => {
  try {
    const admin = await Admin.create({ ...req.body });
    res.status(200).json(admin);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

module.exports = { create };
