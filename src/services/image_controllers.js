const { prisma } = require("../model/image");
const uploadImage = require("./cloudinary");
const path = require("path");

const getAllImage = async (req, res) => {
  try {
    const image = await prisma.image.findMany({
      select: { name: true, url: true },
    });
    res.status(200).json(image);
  } catch (e) {
    console.log(e);
  }
};

const getImageByName = async (req, res) => {
  const query = req.query;
  try {
    const data = await prisma.image.findUnique({
      where: { name: query.name, id: "65d6b817dbd4b7e7ad8ac9f2" },
      select: { name: true, url: true },
    });
    if (!data) return res.status(404).json({ msg: "not found" });
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
  }
};

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

module.exports = { getAllImage, uploadImg, getImageByName };
