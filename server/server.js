const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.get("*", (req, res) => {
  res.send("You have reached the catch all route!");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
