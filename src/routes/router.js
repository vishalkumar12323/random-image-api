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

//* Get all image route.
router.get("/all", getAllImage);

//* Get a specific image by name route.
router.get("/q", getImageByName);

//* Post or upload image on server route.
router.post("/upload", upload.single("image"), uploadImg);

module.exports = { router };
