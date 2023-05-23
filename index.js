const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

const signUpRoutes = require("./routes/signup");
const signInRoutes = require("./routes/signin");

app.use(signUpRoutes);
app.use(signInRoutes);

// help to eshtablish connection with database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successfull");
    app.listen(8000);
  });
