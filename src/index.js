import express from "express";
import bodyParser from "body-parser";
import { router } from "./routes/router.js";

// initialize express app
const app = express();
const port = process.env.PORT || 5005;

// apply middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/images", router);

// start express app with init function.
const init = async () => {
  app.listen(port, () => console.log(`api server hanging on port:${port}`));
};
init();
