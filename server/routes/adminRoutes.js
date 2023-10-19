const express = require("express");
const router = express.Router();
const adminCtrl = require("../controllers/adminControllers");

router.post("/", adminCtrl.create);

module.exports = router;
