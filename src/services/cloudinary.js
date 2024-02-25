const cloudinary = require("cloudinary").v2;

cloudinary.config({
  secure: true,
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadImage = async (img) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };
  try {
    const image = await cloudinary.uploader.upload(img, options);
    return image.secure_url;
  } catch (error) {
    console.log("cloudinary error ", error);
  }
};

module.exports = uploadImage;
