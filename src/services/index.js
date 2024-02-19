const { prisma } = require("../model/image");
const { image } = require("../images");
const path = require("path");

const randomImages = async (req, res) => {
  res.sendFile(
    path.join(__dirname, "../public/images/pexels-pixabay-206359.jpg")
  );
};

const uploadImage = async (req, res) => {
  res.json({ msg: "upload successfully." });
};

const getImageByName = async (req, res) => {
  res.json({ msg: "name based image." });
};

module.exports = { randomImages, uploadImage, getImageByName };
