const express = require("express");
const app = express();
const cors = require("cors");

// require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Connect to DB
const connectToDB = require("./config/db");
connectToDB();

app.use("/users", require("./routes/userRoutes"));

app.use("/admins", require("./routes/adminRoutes"));

app.use("/userResponses", require("./routes/userResponses"));

app.get("*", (req, res) => {
  res.send("You have reached the catch all route!");
});

// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}`);
// });

connectToDB()
  .then(() => {
    // Start your Express server here after a successful database connection
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error starting the server: ", err);
  });
