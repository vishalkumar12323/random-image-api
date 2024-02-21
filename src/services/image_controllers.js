const { Image, prisma } = require("../model/image");
const uploadImage = require("./cloudinary");
const path = require("path");
const fs = require("fs");

const getImage = async (req, res) => {
  try {
    const image = await Image.find();
    res.status(200).json({ data: image });
  } catch (e) {
    console.log(e);
  }
};

const getImageByName = async (req, res) => {};

const uploadImg = async (req, res) => {
  try {
    const image_url = await uploadImage(req.file.path);
    const data = await Image.create({
      name: req.body.name,
      url: image_url,
    });
    res.status(200).send({ msg: "successfully upload", response: data });
  } catch (e) {
    console.log(`document create error: ${e}`);
  }
};

module.exports = { getImage, uploadImg, getImageByName };
