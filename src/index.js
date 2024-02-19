const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const { router } = require("./routes/router");

// initialize express app
const app = express();
const port = process.env.PORT || 5005;

// apply middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/images", router);

// start express app with init function.
const init = async () => {
  app.listen(port, () => console.log(`api server hanging on port:${port}`));
};
init();
