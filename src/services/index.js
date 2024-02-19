const prisma = require("../model/image");
const path = require("path");

const randomImages = async (req, res) => {
  res.sendFile(
    path.join(__dirname, "../public/images/pexels-pixabay-206359.jpg")
  );
};

// const uploadImage =

const getImageByName = async (req, res) => {};

const uploadImage = async (req, res) => {
  const { name } = req.body;
  const filename = req.file.filename;

  try {
    const data = await prisma.image.create({
      data: {
        name: name,
        url: `images/${filename}`,
      },
    });
    res.status(200).send({ msg: "successfully upload", response: data });
  } catch (e) {
    console.log(`document create error: ${e}`);
  }
};

module.exports = { randomImages, uploadImage, getImageByName };
