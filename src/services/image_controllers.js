const { Image } = require("../model/image");
const uploadImage = require("./cloudinary");

const getAllImage = async (req, res, next) => {
  const { limit } = req.query;
  try {
    const images = await Image.find({}).limit(limit);

    if (!images) return res.status(404).json({ message: "Not found." });
    res.status(200).json(images);
  } catch (e) {
    next(e);
    console.log(e);
  }
};

const getImageByName = async (req, res, next) => {
  const { name } = req.query;
  let queryObject = {};
  try {
    if (name) {
      queryObject.name = { $regex: name, $options: "i" };
    }
    const images = await Image.find(queryObject);
    res.status(200).json(images);
  } catch (e) {
    console.log(e);
  }
};

const uploadImg = async (req, res, next) => {
  const { name } = req.body;
  const image = req.file.path;

  try {
    const imageURL = await uploadImage(image);
    const data = new Image({ name: name, url: imageURL });
    if (!data) return res.status(400).json({ message: "document not create" });

    await data.save();
    res.status(201).json(data);
  } catch (e) {
    next(e);
    console.log("document creations error ", e);
  }
};

module.exports = { getAllImage, uploadImg, getImageByName };
