import express from "express";
import {
  randomImages,
  uploadImage,
  getImageByName,
} from "../services/index.js";
const router = express.Router();

router.get("/random", randomImages);

router.get("/image-name", getImageByName);

router.post("/upload", uploadImage);

export { router };
