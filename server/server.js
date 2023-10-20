const express = require("express");
const app = express();
const cors = require("cors");


const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Connect to DB
const connectToDB = require("./config/db");
connectToDB();


app.use("/admins", require("./routes/adminRoutes"));

app.use("/userResponses", require("./routes/userResponses"));

app.get("*", (req, res) => {
  res.send("You have reached the catch all route!");
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
