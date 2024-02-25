const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, path.resolve("./public"));
  },
  filename: (req, file, cb) => {
    return cb(null, `${file.originalname}`);
  },
});

module.exports = { storage };
