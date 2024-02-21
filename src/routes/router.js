const express = require("express");
const {
  getImageByName,
  uploadImg,
  getImage,
} = require("../services/image_controllers");
const multer = require("multer");
const { storage } = require("../services/multer_storage");

const router = express.Router();

const upload = multer({ storage: storage });

router.get("/", getImage);

router.get("/image-name", getImageByName);

router.post("/upload", upload.single("image"), uploadImg);

module.exports = { router };
