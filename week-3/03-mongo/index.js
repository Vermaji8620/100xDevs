const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin.js");
const userRouter = require("./routes/user.js");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Middleware for parsing request bodies
dotenv.config();
app.use(bodyParser.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

const PORT = 3000;

try {
  mongoose
    .connect(
      `mongodb+srv://vadityaraj67:${process.env.PASS}@cluster0.yvftnur.mongodb.net/mongoPractice`
    )
    .then(() => {
      console.log("db connected");
    })
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    });
} catch (error) {
  console.error("Error occurred in connecting:", error);
}
