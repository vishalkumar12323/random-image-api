const { Schema, model } = require("mongoose");

const imageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Image = new model("image", imageSchema);

module.exports = { Image };
