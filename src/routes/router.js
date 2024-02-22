const express = require("express");
const {
  getImageByName,
  uploadImg,
  getAllImage,
} = require("../services/image_controllers");
const multer = require("multer");
const { storage } = require("../services/multer_storage");

const router = express.Router();

const upload = multer({ storage: storage });

router.get("/", getAllImage);

router.get("/query", getImageByName);

router.post("/upload", upload.single("image"), uploadImg);

module.exports = { router };
