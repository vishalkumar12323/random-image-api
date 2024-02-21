const { Image, prisma } = require("../model/image");
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

const uploadImage = async (req, res) => {
  try {
    const data = await Image.create({
      name: req.body.name,
      url: {
        data: fs.readFileSync(req.file.path),
        contentType: "image/jpg/png",
      },
    });
    res.status(200).send({ msg: "successfully upload", response: data });
  } catch (e) {
    console.log(`document create error: ${e}`);
  }
};

module.exports = { getImage, uploadImage, getImageByName };
