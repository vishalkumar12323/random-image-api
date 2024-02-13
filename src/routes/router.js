import express from "express";
const router = express.Router();

router.get("/random", (req, res) => {
  res.json({ msg: "random image." });
});

router.post("/upload", (req, res) => {
  res.json({ msg: "upload successfully." });
});
export { router };
