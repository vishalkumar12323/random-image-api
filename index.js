import express from "express";
const app = express();
const port = process.env.PORT || 5005;

const init = async () => {
  app.listen(port, () => console.log(`api server hanging on port:${port}`));
};
init();
