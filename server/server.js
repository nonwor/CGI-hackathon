const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const ConnectoDB = require("./config/db");

ConnectoDB();

app.get("*", (req, res) => {
  res.send("You have reached the catch all route!");
});

app.use("/users", require("./routes/userRoutes"));

app.use("/admins", require("./routes/adminRoutes"));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
