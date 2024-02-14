import { prisma } from "../model/image.js";
import path from "path";

const randomImages = async (req, res) => {
  res.json({ msg: "random image" });
};

const uploadImage = async (req, res) => {
  res.json({ msg: "upload successfully." });
};

const getImageByName = async (req, res) => {
  res.json({ msg: "name based image." });
};

export { randomImages, uploadImage, getImageByName };
