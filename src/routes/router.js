const express = require("express");
const { getImageByName, uploadImage, getImage } = require("../services/index");
const multer = require("multer");
const { storage } = require("../services/image-storage");

const router = express.Router();

const upload = multer({ storage: storage });

router.get("/", getImage);

router.get("/image-name", getImageByName);

router.post("/upload", upload.single("image"), uploadImage);

module.exports = { router };
