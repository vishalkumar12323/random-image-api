require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { router } = require("./routes/router");
const uploadImage = require("./services/cloudinary");

// initialize express app
const app = express();
const port = process.env.PORT || 5005;

// apply middlewares
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/images", router);

// start express app with init function.
const init = async () => {
  await uploadImage(path.resolve("public/images/pexels-min-an-906150.jpg"));
  await mongoose.connect("mongodb://127.0.0.1:27017/Image");
  app.listen(port, () => console.log(`api server hanging on port:${port}`));
};
init();
