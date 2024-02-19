const express = require("express");
const {
  getImageByName,
  randomImages,
  uploadImage,
} = require("../services/index");
const router = express.Router();

router.get("/random", randomImages);

router.get("/image-name", getImageByName);

router.post("/upload", uploadImage);

module.exports = { router };
