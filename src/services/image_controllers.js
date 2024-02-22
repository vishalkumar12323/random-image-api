const { prisma } = require("../model/image");
const uploadImage = require("./cloudinary");
const path = require("path");

const getImage = async (req, res) => {
  try {
    const image = await prisma.image.findMany({
      select: { name: true, url: true },
    });
    res.status(200).json(image);
  } catch (e) {
    console.log(e);
  }
};

const getImageByName = async (req, res) => {};

const uploadImg = async (req, res) => {
  try {
    const image_url = await uploadImage(req.file.path);
    const data = await prisma.image.create({
      data: {
        name: req.body.name,
        url: image_url,
      },
    });
    res.status(200).send({ msg: "successfully upload", data: data });
  } catch (e) {
    console.log(`document create error: ${e}`);
  }
};

module.exports = { getImage, uploadImg, getImageByName };
